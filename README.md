# Roblox-Cursor-Restore (Old-Roblox-Cursor)

When Roblox updates they overwrite everything, including the Roblox cursor pack. I personally like the old cursor, so after every update, run this tool. Currently, this script works for MacOS and Windows. Linux support is not on the top of our list. Development will only start if there is enough public demand. Enjoy!

!THIS PROJECT IS NO LONGER IN DEVELOPMENT!

# FEATURES

- Native MacOS and Windows support
- GUI and TUI versions available
- Remove new ROBLOX cursor and replace with old one in under a second
- Works before or in a ROBLOX game, no need to worry about corruption
- Node.JS binary or electron app precompiled for supported platforms
- Completely FREE
- Handy automated tool, doesn't require a manual process
- User friendly experience


# TO BE ADDED

| Feature                  | Description                                                                                                                                                                                                                                       | Priority | Finished |
|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|----------|
| Windows Support          | Will be fixed by fetching latest ROBLOX version, checking if that version exists on your PC and if not, prompts you to install it<br><br>Will work under wine for full Linux support under [Grapejuice](https://gitlab.com/brinkervii/grapejuice) | High     | yes       |
| Linux Support            | ROBLOX doesn't have a native Linux version, but having a Linux compiled binary that checks for the ROBLOX WINEPREFIX, and edits the files will be less of a pain to run                                                                           | Low      | no       |
| Graphical User Interface | For less tech-savvy users, a complete UI for replacing new cursor images, probably electron w/ support for Windows, MacOS and Linux                                                                                                               | Moderate | yes       |
| Add --revert option      | Revert the change from default > new to new > default<br><br>This will require the tool copying the default cursor images to backup directory, then replacing old files (easy to add)                                                             | High     | yes       |
| Custom Cursors           | Support for custom cursors, probably GUI only, but possible integration with TUI                                                                                                                                                                  | Low      | no       |
| Auto-update              | Add auto-update so users do not need to check github page all the time                                                                                                                                                                            | Low      | no       |
| Roblox studio support           | add support for roblox studio cursor changing.                                                                                                                                                                  | High      | no       |

# IMPORTANT NOTES

- As we are developing on MacOS, all priorities will almost always be on this version, so expect MacOS to have the best support.
- Native Linux binary is are lowest priority, due to the Windows version working on wine.
- To see old GUI progress, go [here](https://github.com/Link2Linc/Old-Roblox-Cursor-GUI)
