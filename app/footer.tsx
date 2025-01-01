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
            className="px-4 py-2 pr-24 rounded-full bg-white dark:bg-neutral-950 border border-gray-200 dark:border-neutral-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-neutral-700"

          />
          <button
            type="submit"
            className="absolute right-0 px-4 py-2 bg-black dark:bg-white text-white dark:text-neutral-800 rounded-full hover:bg-gray-800 dark:hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-neutral-400 focus:ring-offset-4"
            title="Mostly to invites to future Gumroad public quarterly board meetings"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
