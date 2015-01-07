---
layout: docs
title: Workbench on Windows
prev_section: installation
next_section: usage
permalink: /docs/windows/
---

While Windows is not an officially-supported platform, it can be used to run
Workbench with the proper tweaks. This page aims to collect some of the general
knowledge and lessons that have been unearthed by Windows users.

## Installation

Both [Node](http://nodejs.org) and and [git](https://msysgit.github.io) are
available for Windows. The most difficult task seems to be updating the PATH
environment variable.

Open the Command Prompt window by clicking the Start button, clicking All
Programs, clicking Accessories, and then clicking Command Prompt. From
there things will look similar to Linux, Unix, or Mac OS X.

{% highlight bash %}
~ $ git clone https://github.com/patrickoleary/workbench.git
~ $ cd workbench
~/workbench $ npm install
~/workbench $ grunt init
~/workbench $ grunt
~/workbench $ grunt serve
# => Now browse to http://localhost:8081
{% endhighlight %}

## Browser

Workbench requires a modern browser. Instead of worrying about which version
of IE is modern, simply install the latest Firefox or 64bit Chrome browser.
You'll be happy you did.
