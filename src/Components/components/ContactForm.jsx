
const ContactForm = () => {
  return (
    <div>
        <div className="w-full p-8 dark:bg-white bg-zinc-900 border border-zinc-800 dark:border-zinc-200 rounded-3xl">
        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

        <form className="space-y-5">
          {/* Top Row: Full Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-200">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Oka Elizabeth"
                className="w-full bg-zinc-900 dark:bg-zinc-200 border border-zinc-800 dark:border-zinc-200 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#276e48] transition"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full bg-zinc-900 dark:bg-zinc-200 border border-zinc-800 dark:border-zinc-200 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#276e48] transition"
              />
            </div>
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-200">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Partnership Inquiry"
              className="w-full bg-zinc-900 dark:bg-zinc-200 border border-zinc-800 dark:border-zinc-200 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#276e48] transition"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us how you'd like to partner or support SEEII..."
              className="w-full bg-zinc-900 dark:bg-zinc-200 border border-zinc-800  rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#276e48] transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 rounded-xl transition duration-200 shadow-md active:scale-[0.99]"
          >
            Send Message
          </button>
        </form>
      </div></div>
  )
}

export default ContactForm