# 100px #

## How to run ##

The subfolder has the angular project, and can be run with

```
cd px-interview
npm install
ng serve -o
```

The scaffolded readme is left intact to provide more detailed running structions.

## Major Design Choices ##

The first choice to make was the layout of the app, and that decision came quickly. A square grid looked too rigid, and a simple list like Instagram would result in a page that's far too long. That leaves either having the images in rows, like on the 500px site, or in columns. I chose the latter to make the app look at least a little different. This is also where I decided to use modals instead of separate pages for each image, as this would make the entire app actually fit on one page, not counting the login popup.

Having decided on what I was making, it was time to figure out what to make it in. Seeing as there isn't really a backend portion to any of the tasks, it would be simplest to only make a front end, which left me with either pure jquery, Angular, or React. In the interest of time, I chose Angular.

Unfortunately, the decision to not have a backed came back to bite me once I got to part 2, because I now had to implement oauth more or less from scratch. The Javascript SDK was a way around this, but because it was written quite a while back and wasn't intended to be used with a framework like Angular, it required a bit of magic and a lot of reading of the source to get working. In the end this still saved a huge amount of time and boilerplate, because this let me only work on one project instead of effectively two.

## Other Considerations ##

One cause of concern when it came to using the JS SDK was that it requires the JS SDK key on the front end and nothing else. This made the approach significantly less secure than having a backend handle API calls, but given this is an officially supported library I can only assume this was intended.