var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your.gmail@gmail.com",  // lab 3.2
        pass: "yourPassword" // lab 3.2
    }
});

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "lifecometruely@gmail.com",  // lab 3.2
        pass: "taocultivate" // lab 3.2
    }
});

var mailOptions = {
    from: "lifecometruely@gmail.com",  // lab 3.3
    to: "x10215989@gmail.com@gmail.com", // lab 3.3
    subject: "哦哦哦哦哦哦哦哦",  // lab 3.5
    // text: "哦哦哦哦哦哦哦哦哦"  // lab 3.6
    html:"<h1>Heading</h1>"
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log("訊息發送: " + info.response);
    }
});