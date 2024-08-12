// components/Footer.js

export default function Footer() {
  return (
    <div className="mt-8">
      <hr className="border-t border-gray-300 my-8" />
      <form action="https://gumroad.com/follow_from_embed_form" method="post" className="flex justify-center items-center space-x-2">
        <input name="seller_id" type="hidden" value="2614450981218" />
        <input
          name="email"
          type="email"
          placeholder="Email address"
          className="px-4 py-[7px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          title="Mostly to invites to future Gumroad public quarterly board meetings"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
