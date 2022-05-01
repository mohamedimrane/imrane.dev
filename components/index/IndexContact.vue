<template>
  <div id="contact">
    <svg class="w-full text-gray-200 fill-current" viewBox="0 0 1400 74" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C87.243 11.422 173.12 5.133 257.633 5.133 468.305 5.133 578.027 74 700 74c136.015 0 290.882-96.208 481.234-68.867C1268.807 17.71 1341.73 24 1400 24v50H0V24z"></path></svg>
    <div class="py-20 lg:py-40 bg-gray-200">
      <div class="container flex flex-col space-y-10">
        <h2 class="text-3xl font-extrabold inline-block mx-auto relative flex items-center self-start">
          <span class="absolute inline-block w-full h-4 mt-2 -ml-2 bg-primary"></span>
          <span class="z-50">Contact Me</span>
        </h2>

        <h3 class="text-xl text-secondary-light text-center">Looking to start a project?</h3>

        <div class="flex flex-col-reverse lg:flex-row">
          <div class="w-full lg:w-1/2">
            <form name="contact" method="POST" ref="contactForm" data-netlify="true" class="space-y-6">
              <input type="hidden" name="form-name" value="contact" />
              <input type="text" name="full_name" id="full_name" placeholder="Full Name" required class="w-full px-6 py-2 rounded-lg border-secondary focus:ring-primary" />
              <input type="email" name="email" id="email" placeholder="Email" required class="w-full px-6 py-2 rounded-lg border-secondary focus:ring-primary" />
              <input type="text" name="subject" id="subject" placeholder="Subject" required class="w-full px-6 py-2 rounded-lg border-secondary focus:ring-primary" />
              <textarea name="message" id="message" placeholder="Message" required class="w-full px-6 py-2 rounded-lg min-h-50 border-secondary focus:ring-primary"></textarea>
              <div class="w-full lg:w-auto bg-secondary inline-block rounded-lg transform translate-x-1 translate-y-1">
                <button type="submit" class="w-full lg:w-auto border-secondary bg-gray-200 border-2 font-bold text-lg px-6 py-3 rounded-lg transition-colors duration-100 ease-in-out hover:(bg-primary-light text-white) focus:outline-none transform -translate-x-1 -translate-y-1 focus:(-translate-x-0.5 -translate-y-0.5)">Send</button>
              </div>
            </form>
          </div>
          <div class="w-full lg:w-1/2 flex">
            <img class="mb-20" src="~/assets/illustrations/contact-me.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
