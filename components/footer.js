// components/EmailSubscribeForm.js

export default function Footer() {
  return (
    <div>
      <hr />
      <form action="https://gumroad.com/follow_from_embed_form" className="gumroad-follow-form-embed centered" method="post">
        <input name="seller_id" type="hidden" value="2614450981218" />
        <input name="email" placeholder="Email address" type="email" />
        <button data-custom-highlight-color="" type="submit" alt="Mostly to invites to future Gumroad public quarterly board meetings">Subscribe</button>
      </form>
    </div>
  );
}
