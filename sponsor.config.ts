import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
  tiers: [
    {
      title: '投喂过的朋友们',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: '喝口水',
      preset: presets.base, 
    },
    {
      title: '🍺喝杯啤酒',
      monthlyDollars: 0.68,
      preset: presets.large,
    },
    {
      title: '🍟吃包薯条',
      monthlyDollars: 0.82,
      preset: presets.large,
    },
    {
      title: '☕来杯JAVA',
      monthlyDollars: 15,
      preset: presets.xl,
    },
  ],
})
