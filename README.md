# LWC_ContactInfo
LWC Contact Info using slds only in html

The task was as follows:
Show contact info with photo output, if there is one in it, if not - take the photo by default.
![image](https://github.com/MarynaDobrynina/LWC_ContactInfo/assets/114221630/7a174c45-c959-4ed9-911b-3fc16981dce1)

My component uses a static resource as a default photo and a custom photoURL field to get the photo link. 
After matching the paddings in the grid and the correct placement on the user interface, I decided to make the entire component using slds classes. 
I liked the already configured media class and made all the HTML based on it.
The main problem was the utility sprite's contact icon output. 

The search for the reasons for not displaying this icon on UI did not yield results. In addition, in the process it turned out that some icons also are not displayed.
A question was created on the Trailblazer community and on LinkedIn. 
https://trailhead.salesforce.com/trailblazer-community/feed/0D54V00007Pg3tTSAR

In the answers, it was propoused to raise a case with Salesforce support to ask why.

For the component, the icon was replaced with a standard sprite contact icon, and the styles of the icon were aligned using the CSS.
Of course, there is a way to improve the component, but the main idea was not to use apex and standard components but to display everything on the UI using slds.
