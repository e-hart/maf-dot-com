import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export default function useScrollToTop(dep: any, enabled = true) {
  useIsomorphicLayoutEffect(() => {
    enabled && document.getElementById("wrapper")?.scroll({ behavior: "smooth", top: 0 });
  }, [dep]);
}
