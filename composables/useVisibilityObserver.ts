import { ref, onMounted } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

export function useVisibilityObserver() {
  const isVisible = ref<boolean>(false);
  const isMobile = ref<boolean>(false);
  const thresholdValue = ref<number>(0);

  const observeVisibility = (elementRef: Ref<HTMLElement | null>) => {
    onMounted(() => {
      isMobile.value = window.innerWidth < 768;
      thresholdValue.value = isMobile.value ? 0.75 : 0;

      useIntersectionObserver(
        elementRef,
        ([{ isIntersecting }]) => {
          isVisible.value = isIntersecting;
        },
        {
          threshold: thresholdValue.value,
        }
      );
    });
  };

  return { isVisible, observeVisibility };
}
