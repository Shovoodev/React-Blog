import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import NextResponse from "react-dom/server"
import mongoose from "mongoose";
/*
export async function POST(req) {
  const { fullname, email, message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ fullname, email, message });
    console.log(connectDB);
    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
      
    });

  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}*/
export async function POST(req) {
  const { fullname, email, message } = await req.json();
  await Contact.create({ fullname, email, message });
  await connectDB();
  const savedRes = await scores.save().then(resp=>{
      return resp
          .sendStatus(200)
          .send({
          message:'new record is saved',
          data: savedRes

      })
  }).catch(error=>res.sendStatus(500).send(error))
}
