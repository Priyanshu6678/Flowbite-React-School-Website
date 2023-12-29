import { Button, Label, TextInput } from 'flowbite-react';

export default function SchoolContactForm() {
  return (
    <div className="mt-4">
      <form className="flex flex-col gap-4 max-w-md mx-auto p-4 lg:max-w-2xl">
        <h1 className="text-center text-2xl font-bold dark:text-white">Contact the School</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput id="name" type="text" placeholder="John Doe" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your Email" />
          </div>
          <TextInput id="email" type="email" placeholder="name@example.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="subject" value="Subject" />
          </div>
          <TextInput id="subject" type="text" placeholder="Your Inquiry Subject" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="message" value="Your Message" />
          </div>
          <TextInput id="large" type="Message to us" sizing="lg" />
      
        </div>
        <Button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </Button>
      </form>
     
    </div>
  );
}
