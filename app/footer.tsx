export default function Footer() {
  return (
    <div className="my-8">
      <hr />
      <form
        action="https://gumroad.com/follow_from_embed_form"
        method="post"
        className="flex justify-center items-center"
      >
        <input name="seller_id" type="hidden" value="2614450981218" />
        <div className="relative flex items-center">
          <input
            name="email"
            type="email"
            placeholder="Email address"
            className="px-4 py-2 pr-24 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:ring-offset-4"
          />
          <button
            type="submit"
            className="absolute right-0 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4"
            title="Mostly to invites to future Gumroad public quarterly board meetings"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
