/**
 * 기본 텍스쳐 로드 되기 전에 객체를 생성 할 수 있도록 json은 함께 번들링함.
 */

var atlasJson = require("./../../../../entry_texture/base_asset");

export class PIXIBaseAsset {

    constructor() {
        this._baseTexure = PIXI.BaseTexture.fromImage(Entry.mediaFilePath + "base_asset.png");
        this._sheet = new PIXI.Spritesheet(this._baseTexure, atlasJson);
        //서브텍스쳐의 개수는 반드시 1000개보다 작아야 한다. 그렇지 않으면 parse 가 async 로 작동함.
        //1000 이라는 숫자는 PIXI.Spritesheet.BATCH_SIZE getter 에 정의됨.
        this._sheet.parse(()=>{});
        // this._loadImage();
    }

    newSprite(key) {
        return new PIXI.Sprite(this._sheet.textures[key]);
    }

}
