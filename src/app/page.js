export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 text-center">
        <h2 className="text-3xl font-semibold mb-8">
          Welcome to Our Chrome Extension Demo
        </h2>
        <p className="text-lg mb-6">
          Experience the power of our Chrome extension! With our extension, you
          can supercharge your browsing experience, streamline your workflow,
          and enhance productivity.
        </p>
        <p className="text-lg mb-6">
          Discover seamless integration, intuitive features, and effortless
          navigation. Our extension is designed to make your browsing journey
          more efficient and enjoyable.
        </p>
        <p className="text-lg mb-6">
          Whether you&apos;re a casual user or a seasoned professional, our
          Chrome extension offers unparalleled convenience and functionality.
          Try it out today and elevate your browsing experience to new heights!
        </p>
      </div>

      {/* Content for Chrome Extension Demo */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-semibold mb-8">Get the Extension</h2>
        <p className="text-lg mb-6">
          Ready to take your browsing experience to the next level? Download our
          Chrome extension now and unlock a world of possibilities!
        </p>
        <a
          href="https://chrome.google.com/webstore/category/extensions"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-md transition duration-300 hover:bg-blue-600"
        >
          Download Now
        </a>
      </section>
    </main>
  );
}
