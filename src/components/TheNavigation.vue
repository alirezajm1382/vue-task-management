<template>
  <div class="navbar bg-base-100 px-4">
    <div class="flex flex-1 gap-2 items-center">
      <ListCheckIcon :size="32" class="text-primary" />
      <h2 class="font-bold text-2xl">TaskFlow</h2>
    </div>
    <div class="flex gap-2 items-center">
      <div class="flex gap-2 items-center">
        <SunIcon :size="20" class="text-gray-600" />
        <input
          type="checkbox"
          :checked="true"
          class="toggle toggle-primary bg-[#cccccc] text-white border-1 checked:bg-primary"
        />
        <MoonIcon :size="20" class="text-gray-600" />
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-xl border-1 border-gray-200"
        >
          <li>
            <button>
              <SettingsIcon class="text-gray-400" />
              Settings
            </button>
          </li>
          <li>
            <button class="text-error">
              <LogOutIcon />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ListCheckIcon, SunIcon, MoonIcon, LogOutIcon, SettingsIcon } from 'lucide-vue-next'
</script>

<style scoped></style>
