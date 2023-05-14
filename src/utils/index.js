export function debounce(f, ms) {

    let isCooldown = false;
  
    return function() {
      if (isCooldown) return;
  
      f.apply(this, arguments);
  
      isCooldown = true;
  
      setTimeout(() => isCooldown = false, ms);
    };
  
  }

export const content = [
    {
        title: 'Lorem ipsum!',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.'
        ]
    },
    {
        title: 'Lorem ipsum!2',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.'
        ]
    },
    {
        title: 'Lorem ipsum!3',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.'
        ]
    },
    {
        title: 'Lorem ipsum!4',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.'
        ]
    },
    {
        title: 'Lorem ipsum!5',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.'
        ]
    },
    {
        title: 'Lorem ipsum!6',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.'
        ]
    },
];