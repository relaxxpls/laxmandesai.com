<script lang="ts">
  import feather from 'feather-icons';

  export let name: string;
  export let strokeWidth: string | number = 1;
  export let stroke: string = 'currentColor';
  export let size: string | number = 24;

  $: icon = feather.icons[name];
  $: if (icon) {
    icon.attrs['stroke'] = stroke;
    icon.attrs['stroke-width'] = strokeWidth;
  }
</script>

{#if icon}
  <svg {...icon.attrs} width={size} height={size}>
    <g>
      {@html icon.contents}
    </g>
  </svg>
{/if}
