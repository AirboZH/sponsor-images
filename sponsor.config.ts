import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
  tiers: [
    {
      title: '投喂过的朋友们',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: '🍺喝杯啤酒',
      preset: presets.base,
    },
    {
      title: '🍟吃包薯条',
      monthlyDollars: 1,
      preset: presets.large,
    },
  ],
})
