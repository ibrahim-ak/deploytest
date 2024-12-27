<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue'; // Correct named import

const isSideBarActive = ref(true);
const openSubMenuIndex = ref<number | null>(null);
const SubMenulist = ref([
     { title: "Dashboard", icon: "mdi:view-dashboard" },
     { title: "Water", icon: "meteor-icons:droplet" },
     { title: "Control", icon: "mdi:cogs" },
     {
          title: "Projects",
          icon: "mdi:folder",
          submenuItems: [
               { title: "Submenu Item 1" },
               { title: "Submenu Item 2" },
               { title: "Submenu Item 3" },
          ],
     },
     { title: "Settings", icon: "mdi:cog" },
]);

const clickSidetoggle = () => {
     isSideBarActive.value = !isSideBarActive.value;
};

const toggleSubMenu = (index: number) => {
     openSubMenuIndex.value = openSubMenuIndex.value === index ? null : index;
};

const handelHover = () => {
     if (!isSideBarActive.value) isSideBarActive.value = true;
};
</script>

<template>
     <div class="flex">
          <div @mouseover="handelHover"
               :class="[isSideBarActive ? 'w-2/12' : 'w-16', 'bg-white', 'h-screen', 'overflow-y-auto']">
               <div class="flex justify-between items-center p-1 m-1">
                    <div class="flex items-center">
                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                              <path fill="currentColor"
                                   d="M8.5 13.933H5.563a2.5 2.5 0 0 1-2.5-2.5v-5.87a2.5 2.5 0 0 1 2.5-2.5H8.5a2.5 2.5 0 0 1 2.5 2.5v5.87a2.5 2.5 0 0 1-2.5 2.5m-2.937-9.87a1.5 1.5 0 0 0-1.5 1.5v5.87a1.5 1.5 0 0 0 1.5 1.5H8.5a1.5 1.5 0 0 0 1.5-1.5v-5.87a1.5 1.5 0 0 0-1.5-1.5ZM8.5 20.935H5.564a2.5 2.5 0 0 1 0-5H8.5a2.5 2.5 0 1 1 0 5m-2.934-4a1.5 1.5 0 0 0 0 3H8.5a1.5 1.5 0 1 0 0-3Zm12.87 4H15.5a2.5 2.5 0 0 1-2.5-2.5v-5.87a2.5 2.5 0 0 1 2.5-2.5h2.934a2.5 2.5 0 0 1 2.5 2.5v5.87a2.5 2.5 0 0 1-2.498 2.5m-2.936-9.87a1.5 1.5 0 0 0-1.5 1.5v5.87a1.5 1.5 0 0 0 1.5 1.5h2.934a1.5 1.5 0 0 0 1.5-1.5v-5.87a1.5 1.5 0 0 0-1.5-1.5Zm2.936-3.002H15.5a2.5 2.5 0 0 1 0-5h2.934a2.5 2.5 0 0 1 0 5Zm-2.934-4a1.5 1.5 0 0 0 0 3h2.934a1.5 1.5 0 0 0 0-3Z" />
                         </svg>
                         <h2 v-if="isSideBarActive" class="text-sky-600 p-1">flowless</h2>
                    </div>

                    <svg v-if="isSideBarActive" @click="clickSidetoggle"
                         class="border rounded-md border-black cursor-pointer" xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24" viewBox="0 0 24 24">
                         <path fill="currentColor" d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z" />
                    </svg>
               </div>
               <hr />

               <ul>
                    <li v-for="(items, index) in SubMenulist" :key="index" class="p-1 pb-4 m-1">
                         <div class="flex items-center gap-x-2">
                              <!-- Render Iconify Icon Dynamically -->
                              <Icon :icon="items.icon" v-if="items.icon" class="text-2xl" />
                              <h2 v-if="isSideBarActive">{{ items.title }}</h2>
                              <svg v-if="items.submenuItems && isSideBarActive" @click="toggleSubMenu(index)"
                                   :class="`${openSubMenuIndex === index ? 'rotate-90' : 'rotate-0'} cursor-pointer`"
                                   xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                   <path fill="currentColor" d="M9 18l6-6-6-6-1.4 1.4 4.6 4.6-4.6 4.6z" />
                              </svg>
                         </div>
                         <div v-if="openSubMenuIndex === index && isSideBarActive">
                              <ul>
                                   <li v-for="submenuItem in items.submenuItems" :key="submenuItem.title"
                                        class="p-1 m-1">
                                        {{ submenuItem.title }}
                                   </li>
                              </ul>
                         </div>
                    </li>
               </ul>
               <hr>
               <div class="flex flex-wrap items-center align-baseline justify-between gap-x-2 p-2">
                    <div class="rounded-full bg-gray-400 p-2">
                         <h1>FR</h1>
                    </div>
                    <div>
                         <h1 v-if="isSideBarActive" class="text-flowlees font-bold">Frontend</h1>
                         <h1 v-if="isSideBarActive" class="text-flowlees">Frontend</h1>
                    </div>
                    <div class="mt-2 mr-2 rotate-180">
                         <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                   stroke-miterlimit="10" stroke-width="1.5"
                                   d="m18 15l3-3m0 0l-3-3m3 3H7m7 4v2.6a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3h6.2A2.4 2.4 0 0 1 14 5.4V8" />
                         </svg>
                    </div>
               </div>
          </div>
          <div>
          </div>
     </div>
</template>
<style scoped>
::-webkit-scrollbar {
     width: 8px;
}

::-webkit-scrollbar-thumb {
     background: rgb(37, 99, 235);
     border-radius: 8px;
}

.rotate-90 {
     transform: rotate(90deg);
}

.rotate-0 {
     transform: rotate(0deg);
}
</style>
