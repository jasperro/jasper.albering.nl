---
title: How to fix linux suspend not working on radeon HD 5700 series juniper
date: 2020-01-12
translationKey: "juniperfix"
---

Just a quick post to show how to fix the issue with suspend not working on linux with a HD 5700 graphics card. The fix is very easy.

Add a kernel parameter to your kernel command line with the following:

<pre>radeon.dpm=0</pre>

This turns power saving off on the graphics card, and this fixes the issue.

If you do not know how to do this, read &lt;https://wiki.archlinux.org/index.php/kernel_parameters&gt;

That's it!
