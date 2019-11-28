
# (WIP) Word by Word plugin for Mattermost

This plugin lets you read the post text as a [Rapid Serial Visual Presentation](https://en.wikipedia.org/wiki/Rapid_serial_visual_presentation) (RSVP). Meaning that the each word will be presented one by one after every half second.

This plugin uses a PostDropdownMenuAction item that pops up a model and will present the post's text then closes it out.

Contributions are welcome!

Disclaimer: There are a lot of bugs with this plugin. I haven't completely pinpointed the issue. The logic isnt very clear in `src/root/root.jsx` right now. Redux is being used to pop up the modal and things are asynchronous so Redux Thunk may be needed. The bugs come up when state is being changed and props as well and when the user doesn't let the whole thing finish and exits early so  blocking/async functions  that need a way to exit early.  Functions seems to be still running when user closes because React just makes gets rid of visibility.
