<template>
  <main>
    <section
      class="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1625722702359-a7e2d3f64382?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-gray-700 bg-blend-multiply"
    >
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
        >
          We invest in the world’s potential
        </h1>
        <p
          class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"
        >
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <div
          class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
        >
          <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>

    <section class="mt-[100px] w-full">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-[100px]">
        <div class="mb-5 flex justify-between flex-col md:flex-row">
          <h1 class="text-3xl font-semibold mb-3">Units</h1>
          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >Search</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Units, Types..."
                required
              />
            </div>
          </form>
        </div>

        <!-- card -->
        <nuxt-link
          to="/product"
          class="grid grid-cols-1 md:grid-cols-3 gap-5 justify-between"
        >
          <div
            v-for="data in 9"
            :key="data"
            class="max-w-sm p-6 bg-white border mb-5 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all ease-in-out duration-300 hover:scale-105"
          >
            <img
              src="../assets/images/cat-logo.png"
              alt="logo"
              class="w-48 mx-auto"
            />
          </div>
        </nuxt-link>
        <!-- end card -->
      </div>
    </section>

    <section class="mt-[100px] w-full">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-[100px]">
        <div class="mb-5">
          <h1 class="text-3xl font-semibold">Featured Products</h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 justify-between">
          <div
            v-for="data in 3"
            :key="data"
            class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all ease-in-out duration-300 hover:scale-105"
          >
            <a href="#">
              <img
                class="p-8 rounded-t-lg"
                src="../assets/images/feat1.jpg"
                alt="product image"
              />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h5
                  class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  Collar Roof Guard Komatsu
                </h5>
              </a>
              <div class="flex items-center mt-2.5">D65/D85 - 14X-978-2310</div>
              <div class="flex items-center mt-2.5 mb-5">Stock : 1</div>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white"
                  >$599</span
                >
                <a
                  href="#"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >Tanya Produk ini</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="relative max-w-7xl mx-auto">
      <div class="absolute z-10 top-5 right-3">
        <a href="#">
          <img src="../assets/images/wa-logo.png" alt="wa" class="w-[70px]" />
        </a>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
