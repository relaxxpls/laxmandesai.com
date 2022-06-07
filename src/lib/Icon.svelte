<script lang="ts">
  import feather from 'feather-icons';

  export let name: string;
  export let strokeWidth: string | number = 1;
  export let stroke: string = 'currentColor';
  export let size: string | number = 24;
  let _class: string = '';
  export { _class as class };

  $: icon = feather.icons[name];
  $: if (icon) {
    icon.attrs['stroke'] = stroke;
    icon.attrs['stroke-width'] = strokeWidth;
  }
</script>

{#if icon}
  <svg {...icon.attrs} width={size} height={size} class={_class}>
    <g>
      {@html icon.contents}
    </g>
  </svg>
{/if}
