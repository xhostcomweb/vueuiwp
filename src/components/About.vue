 
 <template>
 <div class="about">
   <div class="tm-section tm-section-color-1 tm-section-colored">
               <div class="uk-container uk-container-center">

                <div class="uk-grid" data-uk-grid-margin>
                    <div class="tm-sidebar uk-width-medium-1-4 uk-hidden-small">

                        <ul class="tm-nav uk-nav" data-uk-nav>

                            <li class="uk-nav-header">Defaults</li>
                            <li class="uk-active"><a href="base.html">Base</a></li>
                            <li><a href="print.html">Print</a></li>

                            <li class="uk-nav-header">Layout</li>
                            <li><a href="grid.html">Grid</a></li>
                            <li><a href="panel.html">Panel</a></li>
                            <li><a href="block.html">Block</a></li>
                            <li><a href="article.html">Article</a></li>
                            <li><a href="comment.html">Comment</a></li>
                            <li><a href="utility.html">Utility</a></li>
                            <li><a href="flex.html">Flex</a></li>
                            <li><a href="cover.html">Cover</a></li>

                            <li class="uk-nav-header">Navigations</li>
                            <li><a href="nav.html">Nav</a></li>
                            <li><a href="navbar.html">Navbar</a></li>
                            <li><a href="subnav.html">Subnav</a></li>
                            <li><a href="breadcrumb.html">Breadcrumb</a></li>
                            <li><a href="pagination.html">Pagination</a></li>
                            <li><a href="tab.html">Tab</a></li>
                            <li><a href="thumbnav.html">Thumbnav</a></li>

                            <li class="uk-nav-header">Elements</li>
                            <li><a href="list.html">List</a></li>
                            <li><a href="description-list.html">Description list</a></li>
                            <li><a href="table.html">Table</a></li>
                            <li><a href="form.html">Form</a></li>

                            <li class="uk-nav-header">Common</li>
                            <li><a href="button.html">Button</a></li>
                            <li><a href="icon.html">Icon</a></li>
                            <li><a href="close.html">Close</a></li>
                            <li><a href="badge.html">Badge</a></li>
                            <li><a href="alert.html">Alert</a></li>
                            <li><a href="thumbnail.html">Thumbnail</a></li>
                            <li><a href="overlay.html">Overlay</a></li>
                            <li><a href="text.html">Text</a></li>
                            <li><a href="animation.html">Animation</a></li>
                            <li><a href="contrast.html">Contrast</a></li>

                            <li class="uk-nav-header">JavaScript</li>
                            <li><a href="dropdown.html">Dropdown</a></li>
                            <li><a href="modal.html">Modal</a></li>
                            <li><a href="offcanvas.html">Off-canvas</a></li>
                            <li><a href="switcher.html">Switcher</a></li>
                            <li><a href="toggle.html">Toggle</a></li>
                            <li><a href="scrollspy.html">Scrollspy</a></li>
                            <li><a href="smooth-scroll.html">Smooth scroll</a></li>

                        </ul>

                    </div>
                    <div class="tm-main uk-width-medium-3-4">

                        <article class="uk-article">

                            <h1 class="uk-article-title">About UIKit Base Styles</h1>

                            <p class="uk-article-lead">Provides the default styles for all HTML elements.</p>

                            <p>This component defines the base look of your page. It offers great typography by setting the default colors, margins, font-sizes and more for each HTML element. This page is a short guide on how to use basic HTML elements and how UIkit styles them.</p>

                            <p><span class="uk-badge">Note</span> Basically UIkit utilizes the famous <a href="http://necolas.github.com/normalize.css">Normalize.css</a>, but distributed it among all components. Only the necessary parts are adopted into the Base component to keep the unprefixed CSS as small as possible. Most of the normalization related CSS is moved into the <a href="form.html">Form</a>, <a href="button.html">Button</a> and <a href="table.html">Table</a> components. This makes UIkit and its components very robust against conflicts with other CSS frameworks so that you don't have to worry about browser inconsistencies in your projects.</p>

                            <hr class="uk-article-divider">

                            <h2 id="headings"><a href="#headings" class="uk-link-reset">Headings</a></h2>

                            <p>Use the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> elements to define your headings.</p>

                            <h3 class="tm-article-subtitle">Example</h3>

                            <h1>h1 Heading 1</h1>
                            <h2>h2 Heading 2</h2>
                            <h3>h3 Heading 3</h3>
                            <h4>h4 Heading 4</h4>
                            <h5>h5 Heading 5</h5>
                            <h6>h6 Heading 6</h6>

                            <p>You can add the <code>.uk-h1</code>, <code>.uk-h2</code>, <code>.uk-h3</code>, <code>.uk-h4</code>, <code>.uk-h5</code> or <code>.uk-h6</code> class to alter the size of your headings, for example have a <code>h1</code> look like a <code>h3</code>.</p>

                            <hr class="uk-article-divider">

                            <h2 id="paragraphs"><a href="#paragraphs" class="uk-link-reset">Paragraphs</a></h2>

                            <p>The global font-size, line-height and regular margins between elements are set through variables, which can be customized. Paragraphs and other block elements stick to these values.</p>

                            <hr class="uk-article-divider">

                            <h2 id="text-level-semantics"><a href="#text-level-semantics" class="uk-link-reset">Text-level semantics</a></h2>

                            <p>The following list gives you a short overview of the most commonly used text-level semantics and how to utilize them.</p>

                            <div class="uk-overflow-container">
                                <table class="uk-table uk-table-hover uk-table-condensed uk-text-nowrap">
                                    <thead>
                                        <tr>
                                            <th class="uk-width-1-4">Element</th>
                                            <th class="uk-width-3-4">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>&lt;a&gt;</code></td>
                                            <td>Turn text into hypertext using the <a href="#">a element</a>.</td>
                                        </tr>
                                        <tr>
                                            <td><code>&lt;em&gt;</code></td>
                                            <td>Emphasize text using the <em>em element</em>.</td>
                                        </tr>
                                        <tr>
                                            <td><code>&lt;strong&gt;</code></td>
                                            <td>Imply any extra importance using the <strong>strong element</strong>.</td>
                                        </tr>
                                        <tr>
                                            <td><code>&lt;code&gt;</code></td>
                                            <td>Define inline code snippets using the <code>code element</code>.</td>
                                        </tr>
                                        <tr>
                                            <td><code>&lt;del&gt;</code></td>
                                            <td>Mark document changes as deleted text using the <del>del element</del>.</td>
                                        </tr>
                                        <tr>
                                            <td><code>&lt;ins&gt;</code></td>
                                            <td>Mark document changes as inserted text using the <ins>ins element</ins>.</td>
                                        </tr>
                                        <tr>
                                            <td><code>&lt;mark&gt;</code></td>
                                            <td>Highlight text with no semantic meaning using the <mark>mark element</mark>.</td>
                                        </tr>
                                        <tr>
                                            <td><code>&lt;q&gt;</code></td>
                                            <td>Define inline quotations using <q>q element <q>inside</q> a q element</q>.</td>
                                        </tr>
                                        <tr>
                                            <td><code>&lt;abbr&gt;</code></td>
                                            <td>Define an abbreviation using the <abbr title="Abbreviation Element">abbr element</abbr> with a title.</td>
                                        </tr>
                                        <tr>
                                            <td><code>&lt;dfn&gt;</code></td>
                                            <td>Define a definition term using the <dfn title="Defines a definition term">dfn element</dfn> with a title.</td>
                                        </tr>
                                        <tr>
                                            <td><code>&lt;small&gt;</code></td>
                                            <td>De-emphasize text for small print using the <small>small element</small>.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <hr class="uk-article-divider">

                            <h2 id="horizontal-rule"><a href="#horizontal-rule" class="uk-link-reset">Horizontal rule</a></h2>

                            <p>Create a horizontal rule by using the <code>&lt;hr&gt;</code> element.</p>

                            <h3 class="tm-article-subtitle">Example</h3>

                            <hr>

                            <hr class="uk-article-divider">

                            <h2 id="blockquotes"><a href="#blockquotes" class="uk-link-reset">Blockquotes</a></h2>

                            <p>For quoting multiple lines of content from another source within your document, use the <code>&lt;blockquote&gt;</code> element.</p>

                            <h3 class="tm-article-subtitle">Example</h3>

                            <blockquote>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <small>Someone famous</small>
                            </blockquote>

                            <h3 class="tm-article-subtitle">Markup</h3>

<pre><code>&lt;blockquote&gt;
    &lt;p&gt;Quotation&lt;/p&gt;
    &lt;small&gt;Source&lt;/small&gt;
&lt;/blockquote&gt;</code></pre>

                            <hr class="uk-article-divider">

                            <h2 id="code-blocks"><a href="#code-blocks" class="uk-link-reset">Code blocks</a></h2>

                            <p>For multiple lines of code, use the <code>&lt;pre&gt;</code> element which defines preformatted text. It creates a new text block that preserves spaces, tabs and line breaks. Nest a <code>&lt;code&gt;</code> element inside to define the code block.</p>

                            <p><span class="uk-badge uk-badge-danger">IMPORTANT</span> Be sure to escape any angle brackets in the code for proper rendering.</p>

                            <h3 class="tm-article-subtitle">Example</h3>

<pre><code>&lt;pre&gt;
    &lt;code&gt;...&lt;/code&gt;
&lt;/pre&gt;</code></pre>

                            <p><span class="uk-badge">NOTE</span> Optionally, you can add the <code>.uk-scrollable-text</code> class from the <a href="utility.html">Utility component</a>, which will set a max-height of 300px and provide a y-axis scrollbar.</p>

                            <hr class="uk-article-divider">

                            <h2 id="lists"><a href="#lists" class="uk-link-reset">Lists</a></h2>

                            <p>Create an unordered list using the <code>&lt;ul&gt;</code> element and the <code>&lt;ol&gt;</code> element for ordered lists. The <code>&lt;li&gt;</code> element defines the list item.</p>

                            <h3 class="tm-article-subtitle">Example</h3>

                            <div class="uk-grid" data-uk-grid-margin>
                                <div class="uk-width-medium-1-2">
                                    <div class="uk-panel">

                                        <ul>
                                            <li>Item 1</li>
                                            <li>Item 2
                                                <ul>
                                                    <li>Item 1</li>
                                                    <li>Item 2
                                                        <ul>
                                                            <li>Item 1</li>
                                                            <li>Item 2</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>Item 3</li>
                                            <li>Item 4</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="uk-width-medium-1-2">
                                    <div class="uk-panel">

                                        <ol>
                                            <li>Item 1</li>
                                            <li>Item 2
                                                <ol>
                                                    <li>Item 1</li>
                                                    <li>Item 2
                                                        <ol>
                                                            <li>Item 1</li>
                                                            <li>Item 2</li>
                                                        </ol>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>Item 3</li>
                                            <li>Item 4</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                            <h3 class="tm-article-subtitle">Markup</h3>

                            <div class="uk-grid" data-uk-grid-margin>
                                <div class="uk-width-medium-1-2">
                                    <div class="uk-panel">

<pre><code>&lt;ul&gt;
    &lt;li&gt;...&lt;/li&gt;
    &lt;li&gt;...
        &lt;ul&gt;
            &lt;li&gt;...&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
&lt;/ul&gt;</code></pre>

                                    </div>
                                </div>
                                <div class="uk-width-medium-1-2">
                                    <div class="uk-panel">

<pre><code>&lt;ol&gt;
    &lt;li&gt;...&lt;/li&gt;
    &lt;li&gt;...
        &lt;ol&gt;
            &lt;li&gt;...&lt;/li&gt;
        &lt;/ol&gt;
    &lt;/li&gt;
&lt;/ol&gt;</code></pre>

                                    </div>
                                </div>
                            </div>

                            <hr class="uk-article-divider">

                            <h2 id="description-lists"><a href="#description-lists" class="uk-link-reset">Description lists</a></h2>

                            <p>Create a description list using the <code>&lt;dl&gt;</code> element. Use <code>&lt;dt&gt;</code> to define the term and <code>&lt;dd&gt;</code> for the description.</p>

                            <h3 class="tm-article-subtitle">Example</h3>

                            <dl>
                                <dt>Description lists</dt>
                                <dd>A description list defines terms and their corresponding descriptions.</dd>
                                <dt>This is a term</dt>
                                <dd>This is a description.</dd>
                                <dt>This is a term</dt>
                                <dd>This is a description.</dd>
                            </dl>

                            <h3 class="tm-article-subtitle">Markup</h3>

<pre><code>&lt;dl&gt;
    &lt;dt&gt;...&lt;/dt&gt;
    &lt;dd&gt;...&lt;/dd&gt;
&lt;/dl&gt;</code></pre>

                            <hr class="uk-article-divider">

                            <h2 id="responsive-images"><a href="#responsive-images" class="uk-link-reset">Responsive images</a></h2>

                            <p>All images in UIkit are responsive by default. If the layout is narrowed, images adjust their size and keep their proportions.</p>

                            <h3 class="tm-article-subtitle">Example</h3>

                            <p>Resize the browser window to see the responsive behavior of the image.</p>

                            <p><img width="480" height="260" src="../assets/images/placeholder_600x400.svg" alt=""></p>

                            <p><span class="uk-badge">NOTE</span> To avoid the responsive behavior and preserve the original image dimensions, add the <code>.uk-img-preserve</code> class to one of your single images. If you have more than one image, you can also add the class to the parent container. This is not required for Google Maps.</p>

                        </article>

                    </div>
                </div>

            </div>
        </div>
            </div>
</template>

<script>
export default {
  name: "About",
  props: {
    msg: String
  }
};
</script>
