function PaletteContainer(width, height, fill_color, layer, block_tracker){
    this.width = width;
    this.height = height;
    this.fill_color = fill_color;
    this.group = null;
    this.rect = null;
    this.visible = false;
    this.layer = layer;
    this.elements = [];
    this.block_tracker = block_tracker;
    this.init();
}

PaletteContainer.prototype = {
    constructor: PaletteContainer,
    init: function(){
        this.group = new Kinetic.Group({
            draggable: false
        });
        this.rect = new Kinetic.Rect({
            fill: this.fill_color,
            width: this.width,
            height: this.height
        });
        this.group.add(this.rect);
    },
    add_block_factory: function(block){
        this.elements.push(block.group);
        this.group.add(block.group);
    },
    show: function(){
        this.visible = true;
        this.layer.add(this.group);
    },
    hide: function(){
        this.visible = false;
        this.group.remove();
    },
    is_visible: function(){
        return this.visible;
    }
}