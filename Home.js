
//Class to create/show the home page
class Home extends AppObject
{
    constructor( main )
    {
        super()
        this.main = main
        this.lay = null
        var self = this;
    }

    show()
    {
        //If layout not created yet.
        if( !this.lay )
        {
        this.utils = app.CreateUtils();
        //alert(this.utils.GetMethods());
            //Create the layout.
            this.lay = ui.addLayout( this.main.layPage, "linear",  "fillxy,vcenter" )
   this.lay2 = ui.addLayout( this.lay, "linear",  "vcenter, HCenter, Primary" )
   this.lay2.padding = [0, 0.1];
   this.lay2.setSize(0.85, 0.65);
   this.lay2.backColor = "#ffffff";
   this.lay2.margins =[0, 0.15];
   this.lay2.cornerRadius = 15;//borderStyle = "dashed";
                     this.lay2.setChildMargins( .02, .02, .02, .02 )
            

            //Add icon
            //this.txtIcon = ui.addText( this.lay, "home", "Primary,Icon")
            //this.txtIcon.textSize = "3em"
              //Add some text.
            var s = "Midi Songs";//Choose an Artist to view his/her  <br><strong>midi song</strong> list.<br><hr><br>"
            this.txtHome = ui.addText( this.lay2, s, "Multiline,Html" )
            this.img = ui.addImage(this.lay2, "Img/musical_notes.jpg", "", 0.325);
            ui.setFontFile("Misc/Eczar-VariableFont_wght.ttf");
            this.txtHome.setFontFile("Misc/Rowdies-Regular.ttf");
            this.txtHome.textSize = "1em"
            // Initialize list items to show
        var artists = ["50 Cent", "Ed Sheeran", "Eminem", "Jay-Z", "Kool & The Gang", "Linkin Park", "Louis Armstrong","Ludacris","Lynyrd Skynyrd",  "Paul Simon", "Psy", "Queen","Vanessa Williams"]

        // Adds a select control to the main layout
        // Passing `Radio` option will render the items as radiogroup
        this.sel = ui.addSelect(this.lay2, artists, "Filled,Radio", 0.75)
        this.sel.label = "Choose an Artist:"
        this.sel.setFontFile("Misc/ArchitectsDaughter-Regular.ttf");
        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onArtistChange )
        
        
        var songs = ["You can call me Al"];

        // Adds a select control to the main layout
        // Passing `Radio` option will render the items as radiogroup
        this.selps = ui.addSelect(this.lay2, songs, "Filled,Radio", 0.75)
         this.selps.setFontFile("Misc/ArchitectsDaughter-Regular.ttf");
    
        this.selps.label = "Choose a Song:"
        
        // Add a callback handler when an item is selected
        this.selps.setOnChange( this.onSongChange )
        
        this.lay33 = ui.addLayout( this.lay, "linear",  "horizontal, vcenter,  Primary" )
   this.lay33.padding = [0, 0.1];
   this.lay33.setSize(0.85, 0.2);
   this.lay33.backColor = "#ffffff";
   //this.lay3.margins =[0, 0.15];
   this.lay33.cornerRadius = 5;//borderStyle = "dashed";
                     this.lay33.setChildMargins( .02, .02, .02, .02 )
    
        this.chip = ui.addChip(this.lay33, "Paul Simon")

        // Set the avatar property of the main layout
        this.chip.avatar = "Img/Paul Simon.jpg";//https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"
  this.chip2 = ui.addChip(this.lay33, "You Can Call Me Al");
  this.chip2.avatar = "Img/musical_notes.jpg";
  
  this.chip.backColor = this.utils.RandomHexColor(true);;
  this.chip2.backColor = this.utils.RandomHexColor(true);;
     
        
         this.player = app.CreateMediaPlayer()
	this.player.SetFile("Misc/YouCanCallMeAl.mid");//Misc/Electro House.mid")
	this.player.SetOnReady( this.player_OnReady )
	this.player.SetOnComplete( this.player_OnComplete )
	/*this.player.SetPitch(1.5);
	this.player.SetSpeed(1.3);*/
this.lay3 = ui.addLayout( this.lay, "linear",  "bottom, horizontal, hcenter,  Primary" )
   this.lay3.padding = [0, 0.1];
   this.lay3.setSize(0.85, 0.2);
   this.lay3.backColor = "#ffffff";
   //this.lay3.margins =[0, 0.15];
   this.lay3.cornerRadius = 5;//borderStyle = "dashed";
                     this.lay3.setChildMargins( .02, .02, .02, .02 )
                     
  // Add a text control to the main layout
        this.txt3 = ui.addText(this.lay3, "0:00", "center", 0.5)

        // You can also add a callback handler when the text control is touch
        this.txt3.setOnTouch( this.onTouch3 )
        
        // Add a text control to the main layout
        this.txt4 = ui.addText(this.lay3, "0:00", "center", 0.5)

        // You can also add a callback handler when the text control is touch
        this.txt4.setOnTouch( this.onTouch4 )
        
        var i = setInterval(this.refresh, 100);
        var navs = [
            [ "Favorites", "favorites" ],
            [ "Groups", "person" ],
            [ "Folder", "folder" ]
        ]

        // Creates a BottomNavbar control
        this.bmn = ui.addBottomNavbar(this.lay, navs, "", 1)

        // Add a callback handler for `onChange` event
        this.bmn.setOnChange( this.onChange )
    
}

        //Show the page.
        this.lay.show()
        

}

        onChange(text, index)
    {
        ui.showPopup( text )
    }
refresh()
{
	this.txt3.setHtml(this.getHoursMinutesAndSeconds(this.player.GetPosition()));
	this.txt4.setHtml(this.getHoursMinutesAndSeconds(this.player.GetDuration()));
	this.img.animate("flipInX", 1240);
}

getHoursMinutesAndSeconds(time) {
  var hours = Math.floor(time / 3600);
  var minutes = Math.floor((time % 3600) / 60);
  var seconds = parseInt(time % 60);
  if(hours<10) hours = "0" + hours;
  if(minutes<10) minutes = "0" + minutes;
  if(seconds<10) seconds = "0" + seconds;
  return hours + ":" + minutes + ":" + seconds;
}

//const timeInSeconds = 123;
//const { hours, minutes, seconds } = getHoursMinutesAndSeconds(timeInSeconds);


onTouch3()
    {
        ui.showPopup( "You touched the text!" )
    }
    
    onTouch4()
    {
        ui.showPopup( "You touched the text!" )
    }
    
    onArtistChange(text, index)
    {
    		this.selps.setList("");
    		this.chip.avatar = "Img/" + text + ".jpg";
    		this.chip.text = text;
    		this.chip.rotation = 20;
    		setTimeout(()=>{this.chip.rotation=-20;setTimeout(()=>{this.chip.rotation=0;}, 2350);}, 1950);
    		this.chip.animate("backInUp", 1234);
    		this.chip2.text = "";
        ui.showPopup( "You choose " + text )
        if(text=="Queen") this.selps.setList("Another One Bites The Dust,Bohemian Rhapsody,We Are The Champions,We Are The Champions (Acoustic),We Will Rock You");
        if(text=="Ludacris") this.selps.setList("Move Bitch,Rollout,Southern Hospitality,Splash Waterfalls,Whats Your Fantasy");
        if(text=="Psy") this.selps.setList("Gangnam Style");
        if(text=="Vanessa Williams") this.selps.setList("Colors Of The Wind");
        if(text=="Louis Armstrong") this.selps.setList("Wonderful World");
        if(text=="Paul Simon") this.selps.setList("You can call me Al");
        if(text=="Ed Sheeran") this.selps.setList("Shape Of You");
        if(text=="Lynyrd Skynyrd") this.selps.setList("Sweet Home Alabama");
        if(text=="Linkin Park") this.selps.setList("In The End");
        if(text=="Eminem") this.selps.setList("8 Mile,Ass Like That,Bad Meets Evil,Big Weeni,My Name Is"), this.img.setImage("Img/Eminem.jpg");
        if(text=="Jay-Z") this.selps.setList("99 Problems,Big Pimpin,Hard Knock Life");
        if(text=="50 Cent") this.selps.setList("Candy Shop,In Da Club,Just A Lil Bit,P.I.M.P.");
     if(text=="Kool & The Gang") this.selps.setList("Celebration");
     
          
    }
    Sing(song){
this.c = 0;
this.s = app.ReadFile( song + ".txt" ).split("\n");
this.Singing();
}
    
    onSongChange(text, index)
    {
    this.chip2.text = text;
    this.chip.animate("backInRight", 1234);
    this.chip2.animate("backInLeft", 1234);
        ui.showPopup( "You choose " + text )
        if(text=="Shape Of You") this.player.SetFile("Misc/ShapeofYou.mid");
        if(text=="Move Bitch") this.player.SetFile("Misc/MoveBitch.mid");
        if(text=="Rollout") this.player.SetFile("Misc/Rollout.mid");
        if(text=="Southern Hospitality") this.player.SetFile("Misc/SouthernHospitality.mid");
        if(text=="Splah Waterfalls") this.player.SetFile("Misc/SplashWaterfalls.mid");
        if(text=="Whats Your Fantasy") this.player.SetFile("Misc/WhatsYourFantasy.mid");
        if(text=="You can call me Al") this.player.SetFile("Misc/YouCanCallMeAl.mid");
        if(text=="99 Problems") this.player.SetFile("Misc/99Problems.mid");
        if(text=="Big Pimpin") this.player.SetFile("Misc/BigPimpin.mid");
        if(text=="Hard Knock Life") this.player.SetFile("Misc/HardKnockLife.mid");
        if(text=="8 Mile") this.player.SetFile("Misc/8MileRoad.mid");
        if(text=="Bad Meets Evil") this.player.SetFile("Misc/BadMeetsEvil.mid");
        if(text=="Big Weeni") this.player.SetFile("Misc/BigWeeni.mid");
        if(text=="My Name Is") this.player.SetFile("Misc/MyNameIs.mid");
        if(text=="Ass Like That") this.player.SetFile("Misc/AssLikeThat.mid");
        if(text=="Candy Shop") this.player.SetFile("Misc/CandyShop.mid");
       if(text=="Just A Lil Bit") this.player.SetFile("Misc/JustALilBit.mid");
        if(text=="In Da Club") this.player.SetFile("Misc/InDaClub.mid");
        if(text=="P.I.M.P.") this.player.SetFile("Misc/P.I.M.P..mid");
        if(text=="In The End") this.player.SetFile("Misc/InTheEnd.mid");
        if(text=="Sweet Home Alabama") this.player.SetFile("Misc/SweetHomeAlabama.mid"), ()=>{this.c = 0;this.s = app.ReadFile( "Sweet Home Alabama.txt" ).split("\n");setTimeout(Singing, 2500);};
        if(text=="Gangnam Style") this.player.SetFile("Misc/GangnamStyle.mid");
        if(text=="Wonderful World") this.player.SetFile("Misc/WonderfulWorld.mid");
        if(text=="Colors Of The Wind") this.player.SetFile("Misc/ColorsOfTheWind.mid");
        if(text=="Bohemian Rhapsody") this.player.SetFile("Misc/BohemianRhapsody.mid");
        if(text=="We Will Rock You") this.player.SetFile("Misc/WeWillRockYou.mid");
        if(text=="Celebration") this.player.SetFile("Misc/Celebration.mid");
        
         
        
    }



Singing(){
app.TextToSpeech( this.s[this.c], 1,1, ()=>{this.c++;this.Singing();}, "music" )
}

player_OnReady(){
this.player.Play();
}

player_OnComplete(){
this.player.Play();
}


    

    hide()
    {
        if( this.lay ) this.lay.hide()
    }
    
    
}