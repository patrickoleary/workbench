---
layout: docs
title: Configuration
prev_section: structure
next_section: app-main
permalink: /docs/configuration/
---

Workbench allows you to build your applications in any way you can dream up.
Thanks to the powerful and flexible configuration options that makes this possible.
These options can either be specified in a `config.json` file placed in your
distribution root directory, or can be specified as commands for the `grunt`
executable in the terminal.

## Configuration Settings

### Global Configuration

The table below lists the available settings for Workbench, and the various <code
class="option">commands</code> (specified on the command-line) and <code
class="flag">options</code> (specified in the configuration file) that control them.

<div class="mobile-side-scroller">
<table>
  <thead>
    <tr>
      <th>Setting</th>
      <th>
        <span class="flag">Options</span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="setting">
      <td>
        <p class="name"><strong>Static Root</strong></p>
        <p class="description">Change the directory where Workbench will serve files</p>
      </td>
      <td class="align-center">
        <p><code class="flag">"staticRoot"</code></p>
      </td>
    </tr>
    <tr class="setting">
      <td>
        <p class="name"><strong>Data Root</strong></p>
        <p class="description">Change the directory where Workbench will look for data files</p>
      </td>
      <td class="align-center">
        <p><code class="flag">"dataRoot"</code></p>
      </td>
    </tr>
    <tr class="setting">
      <td>
        <p class="name"><strong>Application Title</strong></p>
        <p class="description">Application name used in HTML.</p>
      </td>
      <td class="align-center">
        <p><code class="flag">"title"</code></p>
      </td>
    </tr>
    <tr class="setting">
      <td>
        <p class='name'><strong>Defaults</strong></p>
        <p class='description'>
        </p>
      </td>
      <td class='align-center'>
        <p>see below</p>
      </td>
    </tr>
  </tbody>
</table>
</div>

<div class="note warning">
  <h5>Destination folders are cleaned on builds</h5>
  <p>
    The contents of <code>dist/</code> are automatically
    cleaned when Workbench is built. Files or folders that are not
    created by Workbench will be removed.  Do not use <code>dist/</code>
    as an important location; instead, use it as a staging area and
    copy files from there to another directory or web server.
  </p>
</div>

### Build Command Options

<div class="mobile-side-scroller">
<table>
  <thead>
    <tr>
      <th>Setting</th>
      <th><span class="option">Commands</span></th>
    </tr>
  </thead>
  <tbody>
    <tr class="setting">
      <td>
        <p class="name"><strong>Initialize</strong></p>
        <p class="description">Copy third party javascript libraries and fonts to the distribution,
        and uglify or minimize the combined third party files into <em>workbench.ext.min.js</em>.</p>
      </td>
      <td class="align-center">
        <p><code class="option">init</code></p>
      </td>
    </tr>
    <tr class="setting">
      <td>
        <p class="name"><strong>Default</strong></p>
        <p class="description">Compile stylus files into <em>workbench.app.min.css</em> and
        <em>workbench.min.css</em>, jade files into <em>workbench.app.templates.js</em> and
         <em>workbench.templates.js</em>, and then uglify or minimize the combined templates
         and source javascript files into <em>workbench.app.min.js</em> and
         <em>workbench.min.js</em>.</p>
      </td>
      <td class="align-center">
        <p><code class="option"></code></p>
      </td>
    </tr>
    <tr class="setting">
      <td>
        <p class="name"><strong>Regeneration</strong></p>
        <p class="description">Enable auto-regeneration of Workbench when files are modified.</p>
      </td>
      <td class="align-center">
        <p><code class="option">watch</code></p>
      </td>
    </tr>
    <tr class="setting">
      <td>
        <p class="name"><strong>Testing</strong></p>
        <p class="description">Perform code style, unit and end-to-end testing.</p>
      </td>
      <td class="align-center">
        <p><code class="option">test</code></p>
      </td>
    </tr>
    <tr class="setting">
      <td>
        <p class="name"><strong>Documentation</strong></p>
        <p class="description">Generate both HTML and MarkDown documentation.</p>
      </td>
      <td class="align-center">
        <p><code class="option">doc</code></p>
      </td>
    </tr>
    <tr class="setting">
      <td>
        <p class="name"><strong>Simple Web Server</strong></p>
        <p class="description">Serve and watch the configured Workbench root directory.</p>
      </td>
      <td class="align-center">
        <p><code class="option">serve</code></p>
      </td>
    </tr>
  </tbody>
</table>
</div>

### Serve Command Options

The `serve` options are listed below.

<div class="mobile-side-scroller">
<table>
  <thead>
    <tr>
      <th>Setting</th>
      <th><span class="flag">Flags</span></th>
    </tr>
  </thead>
  <tbody>
    <tr class="setting">
      <td>
        <p class="name"><strong>Local Server Port</strong></p>
        <p class="description">Listen on the given port.</p>
      </td>
      <td class="align-center">
        <p><code class="flag">--port PORT</code></p>
      </td>
    </tr>
  </tbody>
</table>
</div>

<div class="note warning">
  <h5>Do not use tabs in configuration files</h5>
  <p>
    This will either lead to parsing errors, or Workbench will revert to the
    default settings. Use spaces instead.
  </p>
</div>

## Default Configuration

Workbench runs with the following configuration options by default. Unless
alternative settings for these options are explicitly specified in the
configuration file, Workbench will run using these options.

<div class="note warning">
  <h5>Unused option</h5>
  <p>
    Please note that <code>title</code> may or may not be used in your Workbench
    application due to the fact that you may not use this element to configure
    your application.
  </p>
</div>

{% highlight yaml %}
{
# Where things are
  "staticRoot": "",
  "dataRoot": "/data",

# Application Name
  "title": "Workbench"
}
{% endhighlight %}
