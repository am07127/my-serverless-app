// pages/contact.tsx
import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Reach out to us at contact@example.com</p>
      <Link href="/">Back to Home</Link>
      <p>Or visit our <Link href="/about">About Us</Link> page for more information.</p>
      <p>Check out our <Link href="/cars">Cars</Link> page for the latest models.</p>
      <p>Read our latest articles on the <Link href="/blog">Blog</Link> page.</p>
      <p>Meet our furry friend on the <Link href="/dog">Dog</Link> page.</p>
    </div>
  );
}