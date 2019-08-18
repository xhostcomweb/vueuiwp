<template>
 <div class="components">
   <div class="tm-section tm-section-color-1 tm-section-colored">
            <div class="uk-container uk-container-center">
           <div class="uk-grid" data-uk-grid-margin>
                    <div class="tm-sidebar uk-width-medium-1-4 uk-hidden-small">
                         <ul class="tm-nav uk-nav" data-uk-nav>
                            <li class="uk-nav-header">Layout</li>
                            <li><a href="grid-js.html">Dynamic Grid</a></li>
                            <li class="uk-nav-header">Navigations</li>
                            <li><a href="dotnav.html">Dotnav</a></li>
                            <li><a href="slidenav.html">Slidenav</a></li>
                            <li><a href="pagination-js.html">Dynamic Pagination</a></li>
                            <li class="uk-nav-header">Common</li>
                            <li><a href="form-advanced.html">Form advanced</a></li>
                            <li><a href="form-file.html">Form file</a></li>
                            <li><a href="form-password.html">Form password</a></li>
                            <li><a href="form-select.html">Form select</a></li>
                            <li><a href="placeholder.html">Placeholder</a></li>
                            <li><a href="progress.html">Progress</a></li>
                            <li class="uk-nav-header">JavaScript</li>
                            <li><a href="lightbox.html">Lightbox</a></li>
                            <li><a href="autocomplete.html">Autocomplete</a></li>
                            <li><a href="datepicker.html">Datepicker</a></li>
                            <li><a href="htmleditor.html">HTML editor</a></li>
                            <li><a href="slider.html">Slider</a></li>
                            <li><a href="slideset.html">Slideset</a></li>
                            <li><a href="slideshow.html">Slideshow</a></li>
                            <li><a href="parallax.html">Parallax</a></li>
                            <li><a href="accordion.html">Accordion</a></li>
                            <li><a href="notify.html">Notify</a></li>
                            <li><a href="search.html">Search</a></li>
                            <li><a href="nestable.html">Nestable</a></li>
                            <li><a href="sortable.html">Sortable</a></li>
                            <li><a href="sticky.html">Sticky</a></li>
                            <li><a href="timepicker.html">Timepicker</a></li>
                            <li><a href="tooltip.html">Tooltip</a></li>
                            <li><a href="upload.html">Upload</a></li>
                        </ul>

                    </div>
                    <div class="tm-main uk-width-medium-3-4">

                        <article class="uk-article">

                            <h1>The Components in UIKit!</h1>

                            <p class="uk-article-lead">All kinds of useful, additional components which are not included in UIkit itself.</p>

                            <p>UIkit offers some advanced components that are not included in the UIkit core framework. Usually you wouldn't use these components in your everyday website. They include stuff like nestables and datepickers, which will come in handy, if you create advanced user interfaces like administration areas.

                            <hr class="uk-article-divider">

                            <h2 id="usage"><a href="#usage" class="uk-link-reset">Usage</a></h2>

                            <p>After you've <a data-uikit-download>downloaded UIkit</a>, you can find all additional components in separate <code>/css</code> and <code>/js</code> folders:</p>

<pre><code>/css
    /components
        &lt;!-- Component with the basic style --&gt;
        autocomplete.css
        autocomplete.min.css

        &lt;!-- Component with the Gradient style --&gt;
        autocomplete.gradient.css
        autocomplete.gradient.min.css

        &lt;!-- Component with the Almost flat style --&gt;
        autocomplete.almost-flat.css
        autocomplete.almost-flat.min.css
        ...

/js
    /components
        &lt;!-- JavaScript of the component and minified version --&gt;
        autocomplete.js
        autocomplete.min.js
        ...</code></pre>

                            <p>To use one of these components, all you need to do is to add the CSS and the component's JavaScript to the header of your document.</p>

                            <h3 class="tm-article-subtitle">Example</h3>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;&lt;/title&gt;
        &lt;link rel="stylesheet" href="uikit.min.css" /&gt;
        &lt;script src="jquery.js">&lt;/script&gt;
        &lt;script src="uikit.min.js">&lt;/script&gt;
        &lt;!-- Autocomplete CSS --&gt;
        &lt;link rel="stylesheet" href="components/autocomplete.css"&gt;
        &lt;!-- Autocomplete Javascript --&gt;
        &lt;script src="components/autocomplete.js"&gt;&lt;/script&gt;
    &lt;/head&gt;
    &lt;body&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>

                            <hr class="uk-article-divider">

                            <h2 id="tests"><a href="#tests" class="uk-link-reset">Tests</a></h2>

                            <p>UIkit provides test files for every component. Each of these pages contains test cases of its component and gives you an overview of all the possibilities that are supported out of the box.</p>

                            <p>In the ZIP file you will find all UIkit CSS, JavaScript and font files ready to use for your project. The core framework of UIkit has almost no styling in order to keep it slim. Therefore we provide two addidional distributions with a gradient and an almost flat style. Each style comes as a single CSS file as well as a minified version. Some <a href="components.html">components</a> are also included, which are not part of the core framework and can be added separately to your project.</p>

                            <p><a class="uk-button uk-button-large uk-button-primary" href="../tests/components/autocomplete.html">Go to tests</a></p>

                        </article>

                    </div>
                </div>

            </div>
        </div>

       
            </div>
</template>

<script>
export default {
  name: "Components",
  props: {
    msg: String
  }
};
</script>
