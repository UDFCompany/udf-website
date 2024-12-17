<template>
  <div class="relative">
    <!-- Carousel container -->
    <div class="overflow-hidden relative">
      <div class="flex transition-transform duration-500 ease-in-out h-full"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(image, index) in images" :key="index" class="w-full flex-shrink-0 ">
          <img :src="image" :alt="`Slide ${index + 1}`" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <!-- Navigation buttons -->
    <button @click="prev"
      class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>
    <button @click="next"
      class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button>

    <!-- Indicators -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 hidden md:block">
      <button v-for="(_, index) in images" :key="index" @click="goToSlide(index)"
        class="w-3 h-3 rounded-full transition-colors duration-200"
        :class="currentIndex === index ? 'bg-white' : 'bg-white/50'"></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  interval: {
    type: Number,
    default: 3000,
  },
  height: {
    type: String,
    default: "500px",
  },
});

const currentIndex = ref(0);
let intervalId = null;

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const prev = () => {
  currentIndex.value =
    currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

const startAutoSlide = () => {
  intervalId = setInterval(() => {
    next();
  }, props.interval);
};

const stopAutoSlide = () => {
  if (intervalId) clearInterval(intervalId);
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>
