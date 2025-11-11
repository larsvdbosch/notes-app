<script lang="ts" setup>
// import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const { isLoggedIn } = getUser()

const { toggleDarkmode, darkMode } = useDarkmode()
</script>

<template>
  <header id="navbar" class="sticky top-0 z-50 bg-[var(--color-background)] border-b border-[var(--color-border)]">
    <section class="container h-[var(--height-navbar)] flex justify-between items-center p-4">
      <Logo />
      <div class="hidden lg:flex items-center gap-2">
        <HeaderLink
          to="/"
          name="Home"
        />
        <HeaderLink
          to="/features"
          name="Features"
        />
        <HeaderLink
          to="/changelog"
          name="Changelog"
        />
      </div>
      <div class="flex items-center gap-2">
        <IconLink
          to="https://github.com/larsvdbosch/notes-app.git"
          icon="github"
          target="_blank"
          rel="noopener noreferrer"
          label="github"
        />
        <IconLink
          v-if="darkMode"
          icon="sun"
          label="sun"
          data-theme-toggle
          @click="toggleDarkmode"
        />
        <IconLink
          v-else
          icon="moon"
          label="moon"
          data-theme-toggle
          @click="toggleDarkmode"
        />
        <Offscreen />
        <Button
          v-if="isLoggedIn"
          class="hidden lg:block"
          to="dashboard"
          variant="primary"
        >
          Dashboard
        </Button>
        <Button
          v-else
          class="hidden lg:block"
          to="login"
          variant="primary"
        >
          Sign in
        </Button>
        <Avatar v-if="isLoggedIn" />
      </div>
    </section>
  </header>
</template>
