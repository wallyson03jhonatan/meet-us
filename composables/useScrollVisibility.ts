import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollVisibility() {
  const isScrollVisible = ref<boolean>(false);

  const updateScrollVisibility = () => {
    isScrollVisible.value = window.scrollY > (window.innerHeight / 3);
  };

  onMounted(() => {
    updateScrollVisibility(); 
    window.addEventListener('scroll', updateScrollVisibility);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollVisibility);
  });

  return {
    isScrollVisible,
  };
}
