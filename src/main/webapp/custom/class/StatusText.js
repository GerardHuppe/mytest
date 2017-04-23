sap.m.constructorText.extend("gagarin.custom.class.HoverComment",
	{
		metadata:{
			properties:{
				"allowHover":{type:"boolean", defaultValue:false},
				"hoverText":{type:"string"}
			},
			events:{
				"hover":{},
				"hoverOut":{}
			}
		},

		onmouseover:function(oControlEvent){
			if(this.getAllowHover()){
				this.fireHover();
			}
		},

		onmouseout:function (oControlEvent) {
			if(!this.getAllowHover()){
				this.fireHoverOut();
			}
		},

		renderer:{}
	}
);
