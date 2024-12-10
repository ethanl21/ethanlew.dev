---
title: Sharing your blog content
description: Easily add social sharing and comments to your blog posts at no cost
tags:
  - webdev
---

## Sharing

Adding social sharing features and comments to your blog posts can increase the visibility of your content
by adding user interactivity. Luckily, this can be done by adding just a few lines of code to your blog! In this post,
I'll go over how to add social sharing and comments to your Astro blog, though the concepts discussed should be
transferrable to any blog platform you may be using.

## Simple Links

The easiest way to add sharing features to your blog is to add simple share links to your post. This is done
by simply adding anchor tags to your post with the appropriate share URLs. For example, to share on Bluesky and
Telegram:

```astro
<ul>
  <li>
    <a
      href={`http://bsky.app/intent/compose?text=${encodeURI(Astro.url.href)}`}
      rel="noopener"
      target="_blank"
    >
      <i class="i-logos:bluesky"></i>
    </a>
  </li>
  <li>
    <a
      href={`http://telegram.me/share/url?url=${encodeURI(Astro.url.href)}&text=${encodeURI(entry.data.title)}`}
      rel="noopener"
      target="_blank"
    >
      <i class="i-logos:telegram"></i>
    </a>
  </li>
</ul>
```

I'm using [iconify.design](https://iconify.design) via [UnoCSS](https://unocss.dev/presets/icons) to provide icons
in the above example, but you can swap them out for whatever you want. Replace `Astro.url.href` with the URL
of your post and `entry.data.title` with the title of your post.

## Web Share API

The [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API) is a new-ish way to invoke the
user's native share sheet. At the time of writing, it is only fully supported on Edge and Safari.

It's pretty simple to use. Just add a button to your post that calls `navigator.share`:

```astro
<button data-web-share>Share</button>

<script is:inline>
  document.querySelector("[data-web-share]").addEventListener("click", () => {
    if (navigator.share) {
      navigator.share({
        title: "My Blog Post",
        text: "This is a blog post",
        url: "https://example.com",
      });
    }
  });
</script>
```

Replace the `title`, `text`, and `url` properties with the appropriate values for your post. Make sure to check
if `navigator.share` is available before calling it, as it is not supported in all browsers.

## Comments

Finally, comments. Typically you have to pay for a hosted service to add comments to your static site. However,
for blogs discussing software development, [utterances](https://utteranc.es) is a great free option.
It uses GitHub issues to store comments, so you don't have to pay for a hosted service. It's very simple to add
to any page, a single script tag is all you need:

```astro
<script
  src="https://utteranc.es/client.js"
  repo="[ENTER REPO HERE]"
  issue-term="pathname"
  theme="github-light"
  crossorigin="anonymous"
  is:inline
  async></script>
```

It requires some quick configuration that you can complete using their website linked above. It requires all commenters
to have a GitHub account, but I assume most people reading this blog and ones like it already have one.

## Other Stuff

There are countless other channels you can use to share your content, like Facebook, Twitter/X, LinkedIn, etc. They all
have similar setup processes to Bluesky and Telegram above. You can also use services like Disqus for comments, but
I think utterances is simpler and more cost-effective.

All of the aforementioned sharing methods are implemented at the bottom of this page. Feel free to give them a try!
