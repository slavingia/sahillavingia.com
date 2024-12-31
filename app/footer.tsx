export default function Footer() {
  return (
    <div className="my-8">
      <hr className="border-gray-200 dark:border-neutral-800" />
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
            className="px-4 py-2 pr-24 rounded-full bg-white dark:bg-black border text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-neutral-600 focus:border-transparent transition-colors duration-200"
          />
          <button
            type="submit"
            className="absolute right-0 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-neutral-600 transition-colors duration-200"
            title="Mostly to invites to future Gumroad public quarterly board meetings"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}