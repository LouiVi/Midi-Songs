
				class Main extends App
				{
				    onStart()
				    {
				        // Creates a fullscreen linear layout with objects vertically centered
				        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
				        
				        // Add an appbar to the layout
				        this.apb = ui.addAppBar(this.main, "My app", "Menu,Fixed", 1)
				        
				        // Add a callback handler to show the drawer onMenu event
				        this.apb.setOnMenu( this.showDrawer )
				        
				        // Add a drawer layout
				        this.drawLay = ui.addLayout(null, "Linear", "Top")
				        
				        // Add a drawer to the app and pass the drawer layout
				        this.drawer = ui.addDrawer(this.drawLay, "left")
				        
				        // Add a list to the drawer layout. See `List` component for customization.
				        let lst = [
				            ["folder", "Folders"],
				            ["music_note", "Audios"],
				            ["photo", "Photos"]
				        ]
				        this.lstMenu = ui.addList(this.drawLay, lst, "Icon", 1 )
				        this.lstMenu.label = "Main navigation"
				        
				        // Add a callback handler to the list onTouch event
				        this.lstMenu.setOnTouch( this.onTouch )
				    }
				    
				    showDrawer()
				    {
				        this.drawer.show()
				    }
				    
				    onTouch( title )
				    {
				        // Set the appbar text with the selected list item
				        this.apb.text = title
				        
				        // Close the drawer
				        this.drawer.hide()
				    }
				}
			