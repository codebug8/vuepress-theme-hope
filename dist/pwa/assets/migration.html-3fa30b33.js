import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o,c as t,e as i}from"./app-56341cfb.js";const n={},c=i('<h2 id="new-options" tabindex="-1"><a class="header-anchor" href="#new-options" aria-hidden="true">#</a> New Options</h2><ul><li><p><code>update</code>: control the update logic of SW</p><ul><li><p><code>&quot;disabled&quot;</code>: Do nothing even when new service worker is available. After new service work succeeds installing and starts waiting, it will control page and provide new content in next visit.</p></li><li><p><code>&quot;available&quot;</code>: Only display update popup when the new service worker is available</p></li><li><p><code>&quot;hint&quot;</code>: Display a hint to let user choose to refresh immediately</p></li><li><p><code>&quot;force&quot;</code>: unregister current service worker immediately then refresh to get new content</p></li></ul></li><li><p><code>appendBase</code>: automatically insert <code>base</code> to the <code>manifest</code> option</p></li><li><p><code>hintComponent</code>: Hint component for detecting new content</p></li><li><p>shouldPrefetch hint: Now the plugin will check <code>shouldPrefetch</code> option in config file and warn you to disable it.</p></li></ul><h2 id="changed-options" tabindex="-1"><a class="header-anchor" href="#changed-options" aria-hidden="true">#</a> Changed Options</h2><ul><li><p><code>cacheHTML</code> default value changed from <code>true</code> to <code>false</code></p><p>This can effectively reduce the SW update time</p></li><li><p><code>popupComponent</code> renamed to <code>updateComponent</code></p><p>This is because we added a new prompt popup window, so we need to avoid name confusion</p></li></ul>',4),a=[c];function d(l,p){return o(),t("div",null,a)}const h=e(n,[["render",d],["__file","migration.html.vue"]]);export{h as default};