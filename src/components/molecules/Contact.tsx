import { Button } from "../ui/button";

const Contact = () => {
  return (
    <section className="bg-white w-full">
      <div className="px-8 py-16 flex w-full">
        <div className="flex flex-col gap-3 w-full">
          <h2 className="text-4xl tracking-tight">Contact Us</h2>

          <p className="mb-8 lg:mb-16">Get in touch with us</p>
        </div>

        <form action="#" className="space-y-8 w-full">
          <div>
            <label id="email" className="block mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-100 border border-gray-300 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 -700 -600 -400  -primary-500 -primary-500 -light"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <div>
            <label id="subject" className="block mb-2 text-sm">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm bg-gray-100 rounded border border-gray-300 focus:ring-primary-500 focus:border-primary-500 -700 -600 -400  -primary-500 -primary-500 -light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label id="message" className="block mb-2 text-sm">
              Message
            </label>
            <textarea
              id="message"
              className="block p-2.5 w-full text-sm bg-gray-100 rounded border border-gray-300 focus:ring-primary-500 focus:border-primary-500 -700 -600 -400  -primary-500 -primary-500"
              placeholder="Leave a message"
            ></textarea>
          </div>

          <Button type="submit">Send message</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
