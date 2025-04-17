import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import pool from "@/helper/db";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const formData = await request.formData();
        const Fname = formData.get("Fname")
        const Phone = formData.get("Phone");
        const Email = formData.get("Email");
        const Location = formData.get("Location");
        const Message = formData.get("Message");

        const unique_id = uuid();

        const MedicalReport = formData.get("MedicalReport");
        const fileBuffer = MedicalReport ? Buffer.from(await MedicalReport.arrayBuffer()) : null;

        await pool.execute(
            "INSERT INTO contact (date, id, fullname, phone, email, location, message, medicalreport) VALUES(NOW(), ?,?,?,?,?,?,?)",
            [
                unique_id,
                Fname,
                Phone,
                Email,
                Location,
                Message,
                MedicalReport ? MedicalReport.name : null
            ]
        );

        // Email with attachment
        const mailOptionsAdmin = {
            from: process.env.MY_EMAIL,
            to: process.env.MY_EMAIL,
            subject: "Dr. Varun Goel - Contact Form",
            html: `
            <html>
              <body>
                <h3>You've got a new mail from ${Fname}, their email is: ✉️${Email}, phone number is ${Phone}, and location is ${Location}</h3>
                <p>Message:</p>
                <p>${Message}</p>
              </body>
            </html>`,
            attachments: MedicalReport
                ? [
                    {
                        filename: MedicalReport.name,
                        content: fileBuffer,
                    },
                ]
                : [],
        };

        // ✅ Send Email to Admin
        await transporter.sendMail(mailOptionsAdmin);

        // ✅ User Confirmation Email
        const mailOptionsUser = {
            from: process.env.MY_EMAIL,
            to: Email,
            subject: "Thank You for contacting Dr. Varun Goel",
            html: `<html>
            <body>
              <h2>Hey ${Fname}!</h2>
              <p>Thank you for reaching out to Dr. Varun Goel. Your query has been noted, and our team will contact you at the earliest.</p>
            </body>
           </html>`,
        };

        // ✅ Send Email to User
        await transporter.sendMail(mailOptionsUser);

        return NextResponse.json({
            message: "Message Sent",
            success: true,
        });
    } catch (error) {
        console.error("Error details:", error);
        return NextResponse.json({
            message: "Failed to send query",
            success: false,
        });
    }
}
