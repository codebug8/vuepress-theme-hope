---
title: V2 Highlights
icon: fire
---

We strongly recommend you to switch to V2 version, as V2 version provides the following improvements.

<!-- more -->

## Overview

V2 is coming together with [_VuePress2_](https://vuejs.press), with the power of [_Vite4_](https://vitejs.dev) / [_Webpack5_](https://webpack.js.org) and [_Vue3_](https://vuejs.org).

V2 is a full rewrite including:

- All the components are rewritten with _Composition API in Vue3_
- All the styles are migrated to _Sass_

Also, V2 has a better performance:🚀

- DevServer cold start time reduced by **50%**
- Build memory usage reduced by **65%**
- Build time reduced by **30%**
- Output Size reduced by **35%**
- Webpage performance up to **70%**

## Vue3 Changes

Vue 3 uses proxy to provide reactivity and composition api. The proxy-based reactivity is a lot faster than the old-style reactivity based on setter/getter.

Additionally, the Composition API is tree-shaking friendly, meaning features that are not enabled can be removed during the build process.

## VuePress2 Changes

VuePress v2 is developed with TypeScript, so it provides better TS support now.

VuePress@v2 also decouple bundler with core. VuePress v2 add supports both Webpack and Vite as bundler. Now Vite is the default bundler, while you can still choose use Webpack. You can even use Vite in dev mode to get better development experience, and use Webpack in build mode to get better browser compatibility.

VuePress@v2 is a lot more flexible than VuePress@v1, it removes siteData and siteData.pages, which greatly increase scalability (specially on large sites with lots of pages). It has a higher score on lighthouse comparing with V1 with less loaded time and higher performance.

## VuePress Theme Hope Changes

VuePressThemeHope@v2 is rewritten with composition API and it's style system is migrated from stylus to sass.

By rewriting theme and plugins with composition api, almost feature you disabled can be removed by tree-shaking when bundling, so that you can get a smaller size easily.

Also, we are adding new features to VuePressThemeHope@v2.

### Features

#### Blog

- Now the whole blog feature is tree-shakable, and is disabled by default.

  To enable it, you need to set `plugins.blog` to `true`.

- Social media icons is now tree-shakable, and [icons can be customized](../guide/blog/blogger.md)

- Support [disabling the Hero section or background image of blog homepage](../guide/blog/home.md)

- Support [customizing icons for projects](../guide/blog/home.md) in blog homepage

- Support [customizing blog page path](../guide/blog/path.md) now

- Support [customizing blog post type](../guide/blog/article.md#other-types-of-articles)

- Support [automatic abstract generation](../guide/blog/article.md#automatically-generate-excerpt)

#### Comment

Valine and Vssue are no longer supported.

Instead, we add Artalk, Giscus and Twikoo support besides Waline.

#### Encrypt

- Encryption functions are now also tree-shakable, and encryption checks are only done when necessary.
- Password in frontmatter is removed

#### Feed

- Feed is no longer generated by default
- Support `getter` option for you to fully customize feed generation.

#### PhotoSwipe

We now use PhotoSwipe@v5, which is smaller in size.

#### PWA

- Support update control
- Support base appending for manifest

#### SEO

- Add canonical link support
- Add JSON-LD support
- Support injecting any head tags in V2 now.

#### Auto-generating Catalog Page

- The new `auto-catalog` plugin can automatically generate catalog pages for you

#### Others

- pure mode

  The theme now supports [pure mode](../guide/interface/pure.md) with less fancy styles and animations.

- RTL layout

  Themes now fully support RTL layouts

- printing support

  You can now print theme pages using the print button

### Layout

#### Home

- New homepage style
- Added multi-feature support
- Feature added icon support

#### Page

- Appearance update

- TOC rebuild, now TOC automatically scrolls to the active heading

- Support for [more Markdown components](../guide/markdown/components.md)

#### Navbar and Sidebar

- Outlook updated

- They now shares same config options

- New `activeMatch` option controlling whether the item should be activated.

- New `"structure"` keyword support to [generate Sidebar from file structure](../guide/layout/sidebar.md#auto-sidebar)

- Sidebar now automatically opens and scrolls to the activated item.

#### Print

Now you can print website pages.

#### Code Block Theme

You can now [set different themes](../guide/interface/code-theme.md) for code blocks in dark mode and light mode.

### Markdown

The following new features are added:

- [Image Mark](../guide/markdown/image.md#image-mark)

- [GFM](../guide/markdown/others.md#gfm)

- [Chart.js](../guide/markdown/chart.md)

- [ECharts](../guide/markdown/echarts.md)

- [File Include](../guide/markdown/include.md)

- [Code Tabs](../guide/markdown/code-tabs.md)

- [Tabs](../guide/markdown/tabs.md)