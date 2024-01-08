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
      monthlyDollars: 13.72,
      preset: presets.xl,
      composeBefore: (composer, tierSponsors, config) => {
        tierSponsors.push(  {
          sponsor: {
            type: 'User',
            login: '260d6452113451ee9c785254001e7c00',
            name: 'Acherlian',
            avatarUrl: 'https://acherlian.com/upload/Acher.png',
          },
          monthlyDollars: 14.0,
          tierName: 'wexin',
          isOneTime: true,
          privacyLevel: 'PUBLIC'
        })
      },
    },
  ],
})
