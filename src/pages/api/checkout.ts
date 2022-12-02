import { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '../../lib/stripe';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { priceId } = JSON.parse(request.body);
  const successUrl = `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_PUBLIC_APP_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: cancelUrl,
    success_url: successUrl,
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
  });

  return response.status(201).json({ checkoutUrl: checkoutSession.url });
}
