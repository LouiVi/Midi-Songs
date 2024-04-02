class Main extends App
{
    onStart()
    {
        // Create a full screen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        var t = "This is the sample text to be displayed."

        // Add a text control to the main layout
        this.txt = ui.addText(this.main, t)

        // You can also add a callback handler when the text control is touch
        this.txt.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You touched the text!" )
    }
}