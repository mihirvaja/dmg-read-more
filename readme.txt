=== Development task for Full Stack Developer (WordPress) role at dmg::media ===

This wordpress plugin contains 2 features.

===

Gutenberg block:
On a page or post a gutenberg block called 'DMG Read More' can be added.

Once added it must be configurated with a link in the Inspector Controls, using the dropdown of recent posts or the searchbar to filter these.

===

WP-CLI command:
There is also a custom WP-CLI command called 'dmg-read-more search'.

It will output post ID's for all posts which are using the DMG Read More gutenberg block.

When used with no arguments it will filter posts published in the last 30 days.

When used with the --date-before argument it will filter for all posts published before the input date in the format "YYYY-MM-DD".

When used with the --date-after argument it will filter for all posts published after the input date in the format "YYYY-MM-DD".

When used with both the --date-after and --date-before arguments it will filter for all posts published within these input dates in the format "YYYY-MM-DD".