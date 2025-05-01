<script lang="ts">
import type { Styles } from '$lib';

export let char: string;
export let styles: Styles;
export let scale: number;
</script>

<div
  class="outerWrapper"
  style="
    filter: {styles.outerWrapperStyles.filter};
    transform: scale({scale});
    transform-origin: center;"
>
  <div
    class="wrapper"
    style="
      position: {styles.wrapperStyles.position};
      display: {styles.wrapperStyles.display};
      margin: {styles.wrapperStyles.margin};
      background-color: {styles.wrapperStyles.backgroundColor};
      width: {styles.wrapperStyles.width};
      height: {styles.wrapperStyles.height};
      border-radius: {styles.wrapperStyles.borderRadius};
      filter: {styles.wrapperStyles.filter};
      z-index: {styles.wrapperStyles.zIndex};"
  >
    <div
      style="
        position: {styles.textStyles.position};
        font-family: {styles.textStyles.fontFamily};
        font-size: {styles.textStyles.fontSize};
        font-weight: {styles.textStyles.fontWeight};
        color: {styles.textStyles.color};
        transform: {styles.textStyles.transform};
        text-align: {styles.textStyles.textAlign};
        z-index: {styles.textStyles.zIndex};"
    >
      {char}
    </div>
  </div>
</div>

<style>
.outerWrapper {
  position: relative;
  display: inline-block;
  margin: 5px;
}

.wrapper {
  display: inline-block;
} 
</style>