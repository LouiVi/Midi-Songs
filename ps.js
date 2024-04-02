class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show
        var artists = ["Ed Sheeran", "Eminem", "Paul Simon"]

        // Adds a select control to the main layout
        // Passing `Radio` option will render the items as radiogroup
        this.sel = ui.addSelect(this.main, artists, "Filled,Radio", 0.6)
        this.sel.label = "Choose an Artist:"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(item, index)
    {
        ui.showPopup( "You choose " + item )
    }
}