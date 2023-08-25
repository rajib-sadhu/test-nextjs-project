import dbConnect from '@/utils/dbCon';
import Contact from '@/models/contact';
import { NextResponse } from 'next/server';
import dbConnection from '@/utils/db.config';



// const db = dbConnection.db('contact_db');
export async function POST(req, res) {

    try {
        // const contactCollection = db.collection('contacts');
        const body = await req.json();

        await dbConnect()

        // const result = await contactCollection.insertOne(body);

        await Contact.create(body);
        // console.log(result)

        return NextResponse.json(
            { message: "message sent successfully" },
            { status: 200 }
        )
    }
    catch (err) {
        console.log(err)
        return NextResponse.json(
            { message: "Server Error, please try again" },
            { status: 500 }
        )
    }
}