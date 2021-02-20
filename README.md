# **Ubold 4.1.0**

1. Clone repository: ```git clone git@github.com:bresettem/ubold_4.1.0.git```
2. Install yarn ```yarn install --check-files```
3. Start postgresql server: ```sudo service postgresql start```
4. Precompile assets: ```bundle exec rails assets:precompile```
5. Start webpack server: ```bin/webpack-dev-server```
6. Start Rails server: ````rails server````

**Note: Only** loaded the Starter Page

**Issues**
1. On first run, stylesheets are not loaded correctly and will need to refresh the page to get the correct stylesheets.
2. When a button is clicked, all settings are reset to default. How can these settings be saved?
3. When clicking on a link there are two issues:
   >Once clicked, it will change the stylesheet to the opposite stylesheet and then the body loading class will not be removed. If Light Mode, then will change the background to Dark and vice versa</p>

   > If the class is manually removed via Inspect Element, the elements on the page are no longer
   hidden, the icons disappear in the left sidebar, topbar turns dark, unable to condense the second menu, and cannot
   change settings.

Any help will be greatly appreciated.

**Specs***
1. Ruby 3.0.0
2. Rails 6.0.3.4
3. Bootstrap v4.5.0
4. jQuery v3.5.1