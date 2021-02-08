# Copii
Copy button for GitHub Readme files 🎉 🎉 🎉  Ready to use

Every example below is fully functional, you can test it by clicking the buttons.

---
## Default `Copy` button

Click on `Copy` button to see Copii in action  
After clicking it, you will find `Hello Copii !!` in your clipboard  

[![copy](https://cdn.jsdelivr.net/gh/lalit2005/copii@master/assets/copy.svg)](https://copii.vercel.app/?ct=Hello%20Copii%20!!&tm=blk&lg=https://avatars.githubusercontent.com/u/69138026?s=60&v=4)

---
## `Copy below code` button

[![copy](https://cdn.jsdelivr.net/gh/lalit2005/copii@master/assets/copy-below-code.svg)](https://copii.vercel.app/?ct=const%20stripe%20¬Ωœ%20require('stripe')(process.env.STRIPE_API_KEY);¬ß≈¬ß≈export%20default%20async%20(req,%20res)%20¬Ωœ>%20{¬ß≈%20%20const%20session%20¬Ωœ%20await%20stripe.checkout.sessions.create({¬ß≈%20%20%20%20payment_method_types:%20['card'],¬ß≈%20%20%20%20line_items:%20[¬ß≈%20%20%20%20%20%20{¬ß≈%20%20%20%20%20%20%20%20name:%20'Serverless%20Functions%20–%20The%20Complete%20Guide',¬ß≈%20%20%20%20%20%20%20%20description:%20'100%20page%20e-book%20on%20serverless%20functions.',¬ß≈%20%20%20%20%20%20%20%20images:%20['https://site.com/image.png'],¬ß≈%20%20%20%20%20%20%20%20amount:%20'5000',%20//%20Cents¬ß≈%20%20%20%20%20%20%20%20currency:%20'usd',¬ß≈%20%20%20%20%20%20%20%20quantity:%201¬ß≈%20%20%20%20%20%20}¬ß≈%20%20%20%20],¬ß≈%20%20%20%20success_url:%20'https://site.com/success?session_id¬Ωœ{CHECKOUT_SESSION_ID}',¬ß≈%20%20%20%20cancel_url:%20'https://site.com'¬ß≈%20%20});¬ß≈¬ß≈%20%20return%20res.status(200).json(session);¬ß≈};¬ß≈&tm=blk&lg=https://sbp-plugin-images.s3.eu-west-1.amazonaws.com/technologies1905_5eb57bd25635d_icon.jpg)

```js
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

export default async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        name: 'Serverless Functions – The Complete Guide',
        description: '100 page e-book on serverless functions.',
        images: ['https://site.com/image.png'],
        amount: '5000', // Cents
        currency: 'usd',
        quantity: 1
      }
    ],
    success_url: 'https://site.com/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://site.com'
  });

  return res.status(200).json(session);
};
```
*Code copied from https://leerob.io/snippets*

---
## `Copy above code` button

```js
import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = API_KEY.split('-')[1];

    const data = {
      email_address: email,
      status: 'subscribed'
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    );

    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter. Shoot me an email at [me@leerob.io] and I'll add you to the list.`
      });
    }

    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

```

[![copy](https://cdn.jsdelivr.net/gh/lalit2005/copii@master/assets/copy-above-code.svg)](https://copii.vercel.app/?ct=import%20fetch%20from%20'isomorphic-unfetch';¬ß≈¬ß≈export%20default%20async%20(req,%20res)%20¬Ωœ>%20{¬ß≈%20%20const%20{%20email%20}%20¬Ωœ%20req.body;¬ß≈¬ß≈%20%20if%20(!email)%20{¬ß≈%20%20%20%20return%20res.status(400).json({%20error:%20'Email%20is%20required'%20});¬ß≈%20%20}¬ß≈¬ß≈%20%20try%20{¬ß≈%20%20%20%20const%20LIST_ID%20¬Ωœ%20process.env.MAILCHIMP_LIST_ID;¬ß≈%20%20%20%20const%20API_KEY%20¬Ωœ%20process.env.MAILCHIMP_API_KEY;¬ß≈%20%20%20%20const%20DATACENTER%20¬Ωœ%20API_KEY.split('-')[1];¬ß≈¬ß≈%20%20%20%20const%20data%20¬Ωœ%20{¬ß≈%20%20%20%20%20%20email_address:%20email,¬ß≈%20%20%20%20%20%20status:%20'subscribed'¬ß≈%20%20%20%20};¬ß≈¬ß≈%20%20%20%20const%20response%20¬Ωœ%20await%20fetch(¬ß≈%20%20%20%20%20%20`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,¬ß≈%20%20%20%20%20%20{¬ß≈%20%20%20%20%20%20%20%20body:%20JSON.stringify(data),¬ß≈%20%20%20%20%20%20%20%20headers:%20{¬ß≈%20%20%20%20%20%20%20%20%20%20Authorization:%20`apikey%20${API_KEY}`,¬ß≈%20%20%20%20%20%20%20%20%20%20'Content-Type':%20'application/json'¬ß≈%20%20%20%20%20%20%20%20},¬ß≈%20%20%20%20%20%20%20%20method:%20'POST'¬ß≈%20%20%20%20%20%20}¬ß≈%20%20%20%20);¬ß≈¬ß≈%20%20%20%20if%20(response.status%20>¬Ωœ%20400)%20{¬ß≈%20%20%20%20%20%20return%20res.status(400).json({¬ß≈%20%20%20%20%20%20%20%20error:%20`There%20was%20an%20error%20subscribing%20to%20the%20newsletter.%20Shoot%20me%20an%20email%20at%20[me@leerob.io]%20and%20I'll%20add%20you%20to%20the%20list.`¬ß≈%20%20%20%20%20%20});¬ß≈%20%20%20%20}¬ß≈¬ß≈%20%20%20%20return%20res.status(201).json({%20error:%20''%20});¬ß≈%20%20}%20catch%20(error)%20{¬ß≈%20%20%20%20return%20res.status(500).json({%20error:%20error.message%20||%20error.toString()%20});¬ß≈%20%20}¬ß≈};¬ß≈&tm=wt&lg=https://bit.ly/39UJ6xP)

*Code copied from https://leerob.io/snnippets*
