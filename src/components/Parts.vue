<template>
 <div class="parts">
   <div class="tm-section tm-section-color-1 tm-section-colored">
             <div class="uk-container uk-container-center">

                <div class="uk-grid" data-uk-grid-margin>
                    <div class="tm-sidebar uk-width-medium-1-4 uk-hidden-small">

                        <ul class="tm-nav uk-nav" data-uk-nav>

                            <li class="uk-nav-header">Beginners</li>
                            <li class="uk-active"><a href="documentation_get-started.html">Get started</a></li>
                            <li><a href="documentation_how-to-customize.html">How to customize</a></li>
                            <li><a href="documentation_layouts.html">Layout examples</a></li>
                            <li class="uk-nav-header">Developers</li>
                            <li><a href="documentation_project-structure.html">Project structure</a></li>
                            <li><a href="documentation_less-sass.html">Less &amp; Sass files</a></li>
                            <li><a href="documentation_create-a-theme.html">Create a theme</a></li>
                            <li><a href="documentation_create-a-style.html">Create a style</a></li>
                            <li><a href="documentation_customizer-json.html">Customizer.json</a></li>
                            <li><a href="documentation_javascript.html">JavaScript</a></li>
                            <li><a href="documentation_custom-prefix.html">Custom prefix</a></li>

                        </ul>

                    </div>
                    <div class="tm-main uk-width-medium-3-4">

                        <article class="uk-article">

                            <h1>Check out UIKits parts!</h1>

                            <p class="uk-article-lead">Get familiar with the basic setup and structure of UIkit.</p>

                            <p>First of all you need to download UIkit. You can find the whole project and all source files on <a href="https://github.com/uikit/uikit">GitHub</a>.</p>

                            <p><a class="uk-button uk-button-large uk-button-primary" data-uikit-download>Download UIkit</a></p>

                            <hr class="uk-article-divider">

                            <h2 id="file-structure"><a href="#file-structure" class="uk-link-reset">File Structure</a></h2>

                            <p>In the ZIP file you will find all CSS, JavaScript and font files ready to use for your project. The core framework of UIkit has almost no styling in order to keep it slim. Therefore we provide two addidional distributions with a gradient and an almost flat style. Each style comes as a single CSS file as well as a minified version.

                            <div class="uk-overflow-container">
                                <table class="uk-table uk-table-striped uk-text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Folder</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>/css</code></td>
                                            <td>Contains all UIkit CSS files and minified versions.</td>
                                        </tr>
                                        <tr>
                                            <td><code>/fonts</code></td>
                                            <td>Contains fonts used in UIkit.</td>
                                        </tr>
                                        <tr>
                                            <td><code>/js</code></td>
                                            <td>Contains all UIkit JavaScript files and minified versions.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

<pre><code>/css
    &lt;!-- UIkit with the basic style --&gt;
    uikit.css
    uikit.min.css

    &lt;!-- UIkit with Gradient style --&gt;
    uikit.gradient.css
    uikit.gradient.min.css

    &lt;!-- UIkit with Almost flat style --&gt;
    uikit.almost-flat.css
    uikit.almost-flat.min.css

    &lt;!-- Advanced components --&gt;
    /components

/fonts
    &lt;!-- FontAwesome webfont --&gt;
    fontawesome-webfont.eot
    fontawesome-webfont.ttf
    fontawesome-webfont.woff
    FontAwesome.otf

/js
    &lt;!-- JavaScript and minified version --&gt;
    uikit.js
    uikit.min.js

    &lt;!-- Advanced components --&gt;
    /components

    &lt;!-- Core components --&gt;
    /core</code></pre>

                            <hr class="uk-article-divider">

                            <h2 id="html-page-markup"><a href="#html-page-markup" class="uk-link-reset">HTML Page Markup</a></h2>

                            <p>First off, make sure you have a solid code editor, for example <a href="http://www.sublimetext.com/">Sublime Text</a>. You need to add the compiled and preferably minified UIkit CSS and JavaScript to the header of your HTML5 document. <a href="http://jquery.com/">jQuery</a> is required as well. And that's it!</p>

                            <h3 class="tm-article-subtitle">Example</h3>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;&lt;/title&gt;
        &lt;link rel="stylesheet" href="uikit.min.css" /&gt;
        &lt;script src="jquery.js">&lt;/script&gt;
        &lt;script src="uikit.min.js">&lt;/script&gt;
    &lt;/head&gt;
    &lt;body&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>

                            <p>Once you have finished implementing UIkit into your webpage, take a look at the <a href="core.html">UIkit components</a> and get an overview of what UIkit is offering.</p>

                            <hr class="uk-article-divider">

                            <h2 id="uikit-autocomplete-for-sublime"><a href="#uikit-autocomplete-for-sublime" class="uk-link-reset">UIkit autocomplete for Sublime</a></h2>

                            <p>To work even more efficiently, we recommend that you install <a href="https://sublime.wbond.net/packages/UIkit%20autocomplete">UIkit autocomplete</a> via Package Control. This saves loads of time, as you won't have to look up and type all UIkit classes.</p>

                        </article>

                    </div>
                </div>

            </div>
        </div>

       

            </div>
</template>

<script>
export default {
  name: "Parts",
  props: {
    msg: String
  }
};
</script>
