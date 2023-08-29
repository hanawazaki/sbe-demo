<template>
  <main>
    <div class="max-w-7xl mx-auto">
      <div class="px-2 sm:px-6">
        <div class="filter my-5">
          <div class="w-full mx-auto max-w-xl">
            <form class="flex flex-col md:flex-row justify-between">
              <div class="input-group mb-5">
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Unit</label
                >
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a unit</option>
                  <option value="Komatsu">Komatsu</option>
                  <option value="Kobelco">Kobelco</option>
                  <option value="Caterpilar">Caterpilar</option>
                  <option value="Hitachi">Hitachi</option>
                  <option value="Hyundai">Hyundai</option>
                </select>
              </div>

              <div class="input-group mb-5">
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Type</label
                >
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a Type</option>
                  <option value="D60P/D65P/D70/D75A">D60P/D65P/D70/D75A</option>
                  <option value="PC50UU-2">PC50UU-2</option>
                  <option value="PC78US">PC78US</option>
                  <option value="D65EX/D65PX/D85E-SS">
                    D65EX/D65PX/D85E-SS
                  </option>
                  <option value="D31/PC200-7">D31/PC200-7</option>
                  <option value="D65EX/D65PX/D85EX">D65EX/D65PX/D85EX</option>
                </select>
              </div>

              <div class="input-group mb-5">
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Product</label
                >
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a Product</option>
                  <option value="hs">Hose Turbo</option>
                  <option value="cs">Cushion</option>
                  <option value="rad">Radiator</option>
                  <option value="cor">Cap Oil Rubber</option>
                </select>
              </div>
            </form>
          </div>
        </div>

        <div class="w-full md:max-w-7xl mx-auto px-2 md:px-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10 justify-between">
            <div
              v-for="data in 9"
              :key="data"
              class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  class="p-5 rounded-t-lg max-w-xs mx-auto"
                  src="../../assets/images/feat1.jpg"
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
                <div class="flex items-center mt-2">D65/D85 - 14X-978-2310</div>
                <div class="flex items-center mb-5">Stock : 1</div>

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
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
