//Force this app to portrait mode.
cfg.Portrait
app.LoadPlugin( "Utils" );

//Include scripts for each page.
app.Include( "Home.js" )
app.Include( "Settings.js" )

//Main class for the app
class Main extends App
{
    //Called when app starts.
    onStart()
    {
        //Add main layout.
        this.layMain = ui.addLayout( "main", "linear", "fillxy" )

        //Create app bar and menu drawer.
        this.createBar()
        this.createDrawer()
        
        

        //Create page objects.
        this.home = new Home( this )
        this.settings = new Settings( this )

        //Create layout for pages and load home page.
        this.layPage = ui.addLayout( this.layMain, "card", "", 1, 0.8 )
        this.home.show()
       
  	
        
    }


    //Show a given page inside the page layout.
    showPage( name )
    {
        //Hide all pages.
        this.home.hide()
        this.settings.hide()

        //Show chosen page.
        switch( name ) {
            case "Home": this.home.show(); break
            case "Settings": this.settings.show(); break
        }
    }

    //Create a title bar with a menu icon.
    createBar()
    {
        //Add app bar.
        this.bar = ui.addAppBar( this.layMain, "Midi"/*app.GetAppName()*/, "menu,Primary" )
        this.bar.setOnMenu( () => { this.drawer.show() } )
        // Add an icon buttons to the appbar with onTouch callbacks
        this.btn1 = ui.addButton(this.bar.layout, "play_circle_outline", "icon")
        this.btn1.setOnTouch(() => { ui.showPopup("Play", "Bottom") })

        this.btn2 = ui.addButton(this.bar.layout, "share", "icon")
        this.btn2.setOnTouch(() => { ui.showPopup("Account", "Bottom") })

       this.btn3 = ui.addButton(this.bar.layout, "settings", "icon")
        this.btn3.setOnTouch(() => { ui.showPopup("More options", "Bottom") })
        

    }

    //Create the menu drawer.
    createDrawer()
    {
        //Add a drawer layout.
        this.layDrawer = ui.addLayout( null, "Linear" )

        // Add a text control.
        this.txt = ui.addText(this.layDrawer, "Midi Songs", "vcenter,center,h5", 1, 0.1 )
        this.txt.backColor = "#2196f3"
        this.txt.textColor = "white"

        //Add an icon list to the drawer layout.
        //(Icons can be found here - https://fonts.google.com/icons)
        var menus1 = [["home", "Home"], ["settings", "Settings"]]
        this.lstMenu = ui.addList( this.layDrawer, menus1, "icon", 1 )
        this.lstMenu.setOnTouch( this.onMenu )

        //Create the drawer.
        var drawerWidth = platform.mobile ? 0.6 : 0.2
        this.drawer = ui.addDrawer( this.layDrawer, "left", drawerWidth )
        this.drawer.setOnClose( ()=>{ console.log("onClose") } )
        
        //Misc/YouCanCallMeAl.mid
        
        
    }

    //Handle drawer list item selection.
    onMenu( title, body, icon, index )
    {
        //Close drawer and load the chosen page.
        this.drawer.hide()
        this.showPage( title )
    }
}