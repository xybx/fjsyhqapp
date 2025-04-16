"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2594],{17445:(e,t,r)=>{r.d(t,{N1:()=>d,YP:()=>a,Z_:()=>y,gx:()=>u,nn:()=>f,on:()=>p,tX:()=>g}),r(66643),r(46791);var i=r(91460),s=r(50758),l=r(70586),n=r(95330),o=r(26258);function a(e,t,r={}){return c(e,t,r,h)}function u(e,t,r={}){return c(e,t,r,m)}function c(e,t,r={},i){let s=null;const n=r.once?(e,r)=>{i(e)&&((0,l.hw)(s),t(e,r))}:(e,r)=>{i(e)&&t(e,r)};if(s=(0,o.aQ)(e,n,r.sync,r.equals),r.initial){const t=e();n(t,t)}return s}function p(e,t,r,n={}){let o=null,u=null,c=null;function p(){o&&u&&(u.remove(),n.onListenerRemove?.(o),o=null,u=null)}function d(e){n.once&&n.once&&(0,l.hw)(c),r(e)}const h=a(e,((e,r)=>{p(),(0,i.vT)(e)&&(o=e,u=(0,i.on)(e,t,d),n.onListenerAdd?.(e))}),{sync:n.sync,initial:!0});return c=(0,s.kB)((()=>{h.remove(),p()})),c}function d(e,t){return function(e,t,r){if((0,n.Hc)(r))return Promise.reject((0,n.zE)());const i=e();if(t?.(i))return Promise.resolve(i);let o=null;function a(){o=(0,l.hw)(o)}return new Promise(((i,l)=>{o=(0,s.AL)([(0,n.fu)(r,(()=>{a(),l((0,n.zE)())})),c(e,(e=>{a(),i(e)}),{sync:!1,once:!0},t??h)])}))}(e,m,t)}function h(e){return!0}function m(e){return!!e}r(87538);const y={sync:!0},f={initial:!0},g={sync:!0,initial:!0}},72594:(e,t,r)=>{r.r(t),r.d(t,{default:()=>fe});var i,s=r(43697),l=r(3172),n=r(67676),o=r(46791),a=r(20102),u=r(22974),c=r(16453),p=r(78286),d=r(95330),h=r(17445),m=r(17452),y=r(5600),f=(r(75215),r(71715)),g=r(52011),w=r(30556),v=r(6570),x=r(87085),b=r(16199),S=r(71612),C=r(38009),M=r(16859),I=r(34760),L=r(72965),T=r(90082),_=r(11145),P=r(42238),E=r(5833),A=r(96674);r(80442);let O=i=class extends A.wq{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new i;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};(0,s._)([(0,y.Cb)({type:v.Z,json:{read:{source:"fullExtent"}}})],O.prototype,"fullExtent",void 0),(0,s._)([(0,y.Cb)({type:String,json:{read:{source:"id"}}})],O.prototype,"id",void 0),(0,s._)([(0,y.Cb)({type:_.Z,json:{read:{source:"tileInfo"}}})],O.prototype,"tileInfo",void 0),O=i=(0,s._)([(0,g.j)("esri.layer.support.TileMatrixSet")],O);const R=O;var F;let V=F=class extends A.wq{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new F;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,s._)([(0,y.Cb)({json:{read:{source:"id"}}})],V.prototype,"id",void 0),(0,s._)([(0,y.Cb)({json:{read:{source:"title"}}})],V.prototype,"title",void 0),(0,s._)([(0,y.Cb)({json:{read:{source:"abstract"}}})],V.prototype,"description",void 0),(0,s._)([(0,y.Cb)({json:{read:{source:"legendUrl"}}})],V.prototype,"legendUrl",void 0),(0,s._)([(0,y.Cb)({json:{read:{source:"isDefault"}}})],V.prototype,"isDefault",void 0),(0,s._)([(0,y.Cb)({json:{read:{source:"keywords"}}})],V.prototype,"keywords",void 0),V=F=(0,s._)([(0,g.j)("esri.layer.support.WMTSStyle")],V);const j=V;var U;let Z=U=class extends A.wq{constructor(e){super(e),this.description=null,this.fullExtent=null,this.fullExtents=null,this.id=null,this.imageFormats=null,this.layer=null,this.parent=null,this.styles=null,this.title=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}readFullExtent(e,t){return(e=t.fullExtent)?v.Z.fromJSON(e):null}readFullExtents(e,t){return t.fullExtents?.length?t.fullExtents.map((e=>v.Z.fromJSON(e))):t.tileMatrixSets?.map((e=>v.Z.fromJSON(e.fullExtent))).filter((e=>e))??[]}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles?.at(0)?.id??""),e}set styleId(e){this._set("styleId",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((e=>e.id===this.tileMatrixSetId)):null}clone(){const e=new U;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent?.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles?.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets?.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,s._)([(0,y.Cb)()],Z.prototype,"description",void 0),(0,s._)([(0,y.Cb)()],Z.prototype,"fullExtent",void 0),(0,s._)([(0,f.r)("fullExtent",["fullExtent"])],Z.prototype,"readFullExtent",null),(0,s._)([(0,y.Cb)({readOnly:!0})],Z.prototype,"fullExtents",void 0),(0,s._)([(0,f.r)("fullExtents",["fullExtents","tileMatrixSets"])],Z.prototype,"readFullExtents",null),(0,s._)([(0,y.Cb)()],Z.prototype,"id",void 0),(0,s._)([(0,y.Cb)()],Z.prototype,"imageFormat",null),(0,s._)([(0,y.Cb)({json:{read:{source:"formats"}}})],Z.prototype,"imageFormats",void 0),(0,s._)([(0,y.Cb)()],Z.prototype,"layer",void 0),(0,s._)([(0,y.Cb)()],Z.prototype,"parent",void 0),(0,s._)([(0,y.Cb)()],Z.prototype,"styleId",null),(0,s._)([(0,y.Cb)({type:o.Z.ofType(j),json:{read:{source:"styles"}}})],Z.prototype,"styles",void 0),(0,s._)([(0,y.Cb)({json:{write:{ignoreOrigin:!0}}})],Z.prototype,"title",void 0),(0,s._)([(0,y.Cb)()],Z.prototype,"tileMatrixSetId",void 0),(0,s._)([(0,y.Cb)({readOnly:!0})],Z.prototype,"tileMatrixSet",null),(0,s._)([(0,y.Cb)({type:o.Z.ofType(R),json:{read:{source:"tileMatrixSets"}}})],Z.prototype,"tileMatrixSets",void 0),Z=U=(0,s._)([(0,g.j)("esri.layers.support.WMTSSublayer")],Z);const N=Z;var k=r(2109),D=r(94139),W=r(58116),B=r(52162),K=r(88724),q=r(39450);const $=90.71428571428571;function Y(e){const t=e.replaceAll(/ows:/gi,"");if(!H("Contents",(new DOMParser).parseFromString(t,"text/xml").documentElement))throw new a.Z("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function G(e){return e.nodeType===Node.ELEMENT_NODE}function H(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(G(i)&&i.nodeName===e)return i}return null}function J(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];G(s)&&s.nodeName===e&&r.push(s)}return r}function z(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];G(s)&&s.nodeName===e&&r.push(s)}return r.map((e=>e.textContent)).filter(n.pC)}function Q(e,t){return e.split(">").forEach((e=>{t&&(t=H(e,t))})),t&&t.textContent}function X(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some((i=>{if(i.nodeName.includes(e)){const e=H(t,i),l=e?.textContent;if(l===r||r.split(":")&&r.split(":")[1]===l)return s=i,!0}return!1})),s}function ee(e,t,r,i,s){const l=Q("Abstract",t),n=z("Format",t);return{id:e,fullExtent:re(t),fullExtents:ie(t),description:l,formats:n,styles:se(t,i),title:Q("Title",t),tileMatrixSets:le(s,t,r)}}function te(e,t){const r=[],i=e.layerMap?.get(t);if(!i)return null;const s=J("ResourceURL",i),l=J("Dimension",i);let n,o,a,u;return l.length&&(n=Q("Identifier",l[0]),o=z("Default",l[0])||z("Value",l[0])),l.length>1&&(a=Q("Identifier",l[1]),u=z("Default",l[1])||z("Value",l[1])),e.dimensionMap.set(t,{dimensions:o,dimensions2:u}),s.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(n&&o.length)if(t.includes("{"+n+"}"))t=t.replace("{"+n+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+n.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+n.length+2))}if(a&&u.length)if(t.includes("{"+a+"}"))t=t.replace("{"+a+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+a.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+a.length+2))}r.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),r}function re(e){const t=H("WGS84BoundingBox",e),r=t?Q("LowerCorner",t).split(" "):["-180","-90"],i=t?Q("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function ie(e){const t=[];return(0,K.h)(e,{BoundingBox:e=>{if(!e.getAttribute("crs"))return;const r=e.getAttribute("crs").toLowerCase(),i=ne(r),s=r.includes("epsg")&&(0,B.A)(i.wkid);let l,n,o,a;(0,K.h)(e,{LowerCorner:e=>{[l,n]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),s&&([l,n]=[n,l])},UpperCorner:e=>{[o,a]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),s&&([o,a]=[a,o])}}),t.push({xmin:l,ymin:n,xmax:o,ymax:a,spatialReference:i})}}),t}function se(e,t){return J("Style",e).map((e=>{const r=H("LegendURL",e),i=H("Keywords",e),s=i?z("Keyword",i):[];let l=r&&r.getAttribute("xlink:href");return t&&(l=l&&l.replace(/^http:/i,"https:")),{abstract:Q("Abstract",e),id:Q("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:s,legendUrl:l,title:Q("Title",e)}}))}function le(e,t,r){return J("TileMatrixSetLink",t).map((t=>function(e,t,r){const i=H("TileMatrixSet",t).textContent,s=z("TileMatrix",t),l=r.find((e=>{const t=H("Identifier",e),r=t?.textContent;return!!(r===i||i.split(":")&&i.split(":")[1]===r)})),n=H("TileMatrixSetLimits",t),o=n&&J("TileMatrixLimits",n),a=new Map;if(o?.length)for(const e of o){const t=H("TileMatrix",e).textContent,r=+H("MinTileRow",e).textContent,i=+H("MaxTileRow",e).textContent,s=+H("MinTileCol",e).textContent,l=+H("MaxTileCol",e).textContent;a.set(t,{minCol:s,maxCol:l,minRow:r,maxRow:i})}const u=Q("SupportedCRS",l).toLowerCase(),c=function(e,t){return oe(H("TileMatrix",e),t)}(l,u),p=c.spatialReference,d=H("TileMatrix",l),h=[parseInt(Q("TileWidth",d),10),parseInt(Q("TileHeight",d),10)],m=[];s.length?s.forEach(((e,t)=>{const r=X("TileMatrix","Identifier",e,l);m.push(pe(r,u,t,i,a))})):J("TileMatrix",l).forEach(((e,t)=>{m.push(pe(e,u,t,i,a))}));const y=function(e,t,r,i,s){const l=H("BoundingBox",t);let n,o,a,u,c,p;if(l&&(n=Q("LowerCorner",l).split(" "),o=Q("UpperCorner",l).split(" ")),n&&n.length>1&&o&&o.length>1)a=parseFloat(n[0]),c=parseFloat(n[1]),u=parseFloat(o[0]),p=parseFloat(o[1]);else{const e=H("TileMatrix",t),l=parseInt(Q("MatrixWidth",e),10),n=parseInt(Q("MatrixHeight",e),10);a=r.x,p=r.y,u=a+l*i[0]*s.resolution,c=p-n*i[1]*s.resolution}return function(e,t,r){return"1.0.0"===e&&(0,B.A)(t.wkid)&&!(r.spatialReference.isGeographic&&r.x<-90&&r.y>=-90)}(e,r.spatialReference,r)?new v.Z(c,a,p,u,r.spatialReference):new v.Z(a,c,u,p,r.spatialReference)}(e,l,c,h,m[0]).toJSON(),f=new _.Z({dpi:96,spatialReference:p,size:h,origin:c,lods:m}).toJSON();return{id:i,fullExtent:y,tileInfo:f}}(e,t,r)))}function ne(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);const r=function(e){return e.includes("crs84")||e.includes("crs:84")?ae.CRS84:e.includes("crs83")||e.includes("crs:83")?ae.CRS83:e.includes("crs27")||e.includes("crs:27")?ae.CRS27:null}(e);return null!=r&&(t=r),{wkid:t}}function oe(e,t){const r=ne(t),[i,s]=Q("TopLeftCorner",e).split(" ").map((e=>parseFloat(e))),l=t.includes("epsg")&&(0,B.A)(r.wkid);return new D.Z(l?{x:s,y:i,spatialReference:r}:{x:i,y:s,spatialReference:r})}var ae,ue,ce;function pe(e,t,r,i,s){const l=ne(t),n=Q("Identifier",e);let o=parseFloat(Q("ScaleDenominator",e));const a=de(l.wkid,o,i);o*=96/$;const u=+Q("MatrixWidth",e),c=+Q("MatrixHeight",e),{maxCol:p=u-1,maxRow:d=c-1,minCol:h=0,minRow:m=0}=s.get(n)??{},{x:y,y:f}=oe(e,t);return new q.Z({cols:[h,p],level:r,levelValue:n,origin:[y,f],scale:o,resolution:a,rows:[m,d]})}function de(e,t,r){let i;return i=W.Z.hasOwnProperty(""+e)?W.Z.values[W.Z[e]]:"default028mm"===r?6370997*Math.PI/180:(0,k.e8)(e).metersPerDegree,7*t/25e3/i}(ce=ae||(ae={}))[ce.CRS84=4326]="CRS84",ce[ce.CRS83=4269]="CRS83",ce[ce.CRS27=4267]="CRS27";const he={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},me=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let ye=ue=class extends((0,S.h)((0,I.Q)((0,L.M)((0,C.q)((0,M.I)((0,c.R)(x.Z))))))){constructor(...e){super(...e),this.activeLayer=null,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([(0,h.YP)((()=>this.activeLayer),((e,t)=>{t&&!this.sublayers?.includes(t)&&(t.layer=null,t.parent=null),e&&(e.layer=this,e.parent=this)}),h.Z_),(0,h.on)((()=>this.sublayers),"after-add",(({item:e})=>{e.layer=this,e.parent=this}),h.Z_),(0,h.on)((()=>this.sublayers),"after-remove",(({item:e})=>{e.layer=null,e.parent=null}),h.Z_),(0,h.YP)((()=>this.sublayers),((e,t)=>{if(t)for(const e of t)e.layer=null,e.parent=null;if(e)for(const t of e)t.layer=this,t.parent=this}),h.Z_)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(d.r9).then((()=>this._fetchService(e))).catch((e=>{throw(0,d.r9)(e),new a.Z("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new N);let i=t.layers.find((e=>e.id===this.activeLayer.id));return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,l=i?.layerIdentifier;let n=null;const o=i?.tileMatrixSet;o&&(Array.isArray(o)?o.length&&(n=o[0]):n=o);const a=s?.format,u=s?.style;return new N({id:l,imageFormat:a,styleId:u,tileMatrixSetId:n})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const l=(0,p.hS)("tileMatrixSet.tileInfo",s);t.tileInfo=l?l.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,r){return function(e,t){return e.map((e=>{const r=new N;return r.read(e,t),r}))}(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets?.map((e=>e.tileInfo?.spatialReference)).toArray().filter(n.pC)??[]}get tilemapCache(){const e=this.activeLayer?.tileMatrixSet?.tileInfo;return e?new P.Z(e):void 0}get title(){return this.activeLayer?.title??"Layer"}set title(e){this._overrideIfSome("title",e)}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId),i=r?.tileInfo,s=e.fullExtent,l=new E.B({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(l.customLayerParameters=this.customLayerParameters),this.customParameters&&(l.customParameters=this.customParameters),new b.default({fullExtent:s,urlTemplate:t,tileInfo:i,wmtsInfo:l})}async fetchTile(e,t,r,i={}){const{signal:s}=i,n=this.getTileUrl(e,t,r),{data:o}=await(0,l.Z)(n,{responseType:"image",signal:s});return o}async fetchImageBitmapTile(e,t,r,i={}){const{signal:s}=i;if(this.fetchTile!==ue.prototype.fetchTile){const l=await this.fetchTile(e,t,r,i);return(0,T.V)(l,e,t,r,s)}const n=this.getTileUrl(e,t,r),{data:o}=await(0,l.Z)(n,{responseType:"blob",signal:s});return(0,T.V)(o,e,t,r,s)}findSublayerById(e){return this.sublayers?.find((t=>t.id===e))}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId),s=i?.tileInfo?.lods[e],l=s?s.levelValue||`${s.level}`:`${e}`;let n=this.resourceInfo?"":function(e,t,r,i,s,l,n,o){const a=function(e,t,r){const i=te(e,t),s=i?.filter((e=>e.format===r));return(s?.length?s:i)??[]}(e,t,i);if(!(a?.length>0))return"";const{dimensionMap:u}=e,c=u.get(t).dimensions?.[0],p=u.get(t).dimensions2?.[0];return a[n%a.length].template.replaceAll(/\{Style\}/gi,s??"").replaceAll(/\{TileMatrixSet\}/gi,r??"").replaceAll(/\{TileMatrix\}/gi,l).replaceAll(/\{TileRow\}/gi,""+n).replaceAll(/\{TileCol\}/gi,""+o).replaceAll(/\{dimensionValue\}/gi,c).replaceAll(/\{dimensionValue2\}/gi,p)}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,l,t,r);return n||(n=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replaceAll(/\{level\}/gi,l).replaceAll(/\{row\}/gi,`${t}`).replaceAll(/\{col\}/gi,`${r}`)),n=this._appendCustomLayerParameters(n),n}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const r=function(e,t,r,i){const{dimensionMap:s}=e,l=te(e,t);let n="";if(l&&l.length>0){const e=s.get(t).dimensions?.[0],o=s.get(t).dimensions2?.[0];n=l[0].template,n.indexOf(".xxx")===n.length-4&&(n=n.slice(0,-4)),n=n.replaceAll(/\{Style\}/gi,i),n=n.replaceAll(/\{TileMatrixSet\}/gi,r),n=n.replaceAll(/\{TileMatrix\}/gi,"{level}"),n=n.replaceAll(/\{TileRow\}/gi,"{row}"),n=n.replaceAll(/\{TileCol\}/gi,"{col}"),n=n.replaceAll(/\{dimensionValue\}/gi,e),n=n.replaceAll(/\{dimensionValue2\}/gi,o)}return n}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let s="";return he[r.toLowerCase()]&&(s=he[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.includes("?")?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e),Y(t.data)}catch{const r="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),Y(t.data),this.serviceMode=r}catch(e){throw new a.Z("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:e})}}this.resourceInfo?t.data=function(e){return e.layers.forEach((e=>{e.tileMatrixSets?.forEach((e=>{const t=e.tileInfo;t&&96!==t.dpi&&(t.lods?.forEach((r=>{r.scale=96*r.scale/t.dpi,r.resolution=de(t.spatialReference?.wkid,r.scale*$/96,e.id)})),t.dpi=96)}))})),e}(t.data):t.data=function(e,t){e=e.replaceAll(/ows:/gi,"");const r=(new DOMParser).parseFromString(e,"text/xml").documentElement,i=new Map,s=new Map,l=H("Contents",r);if(!l)throw new a.Z("wmtslayer:wmts-capabilities-xml-is-not-valid");const n=H("OperationsMetadata",r),o=n?.querySelector("[name='GetTile']"),u=o?.getElementsByTagName("Get"),c=u&&Array.prototype.slice.call(u),p=t.url?.indexOf("https"),d=void 0!==p&&p>-1;let h,m,y=t.serviceMode,f=t?.url;if(c?.length&&c.some((e=>{const t=H("Constraint",e);return!t||X("AllowedValues","Value",y,t)?(f=e.attributes[0].nodeValue,!0):(!t||X("AllowedValues","Value","RESTful",t)||X("AllowedValues","Value","REST",t)?m=e.attributes[0].nodeValue:t&&!X("AllowedValues","Value","KVP",t)||(h=e.attributes[0].nodeValue),!1)})),!f)if(m)f=m,y="RESTful";else if(h)f=h,y="KVP";else{const e=H("ServiceMetadataURL",r);f=e?.getAttribute("xlink:href")}const g=f.indexOf("1.0.0/");-1===g&&"RESTful"===y?f+="/":g>-1&&(f=f.substring(0,g)),"KVP"===y&&(f+=g>-1?"":"?"),d&&(f=f.replace(/^http:/i,"https:"));const w=Q("ServiceIdentification>ServiceTypeVersion",r),v=Q("ServiceIdentification>AccessConstraints",r),x=v&&/^none$/i.test(v)?null:v,b=J("Layer",l),S=J("TileMatrixSet",l),C=b.map((e=>{const t=Q("Identifier",e);return i.set(t,e),ee(t,e,S,d,w)}));return{copyright:x,dimensionMap:s,layerMap:i,layers:C,serviceMode:y,tileUrl:f}}(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await(0,l.Z)(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){const t=this.findSublayerById(this.activeLayer.id),r=t?.tileMatrixSets?.find((t=>t.id===e));return r}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...(0,u.d9)(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=(0,m.mN)(e),i={...r.query,...t},s=(0,m.B7)(i);return""===s?r.path:`${r.path}?${s}`}_getCapabilitiesUrl(e){this.url=(0,m.mN)(this.url).path;let t=this.url;switch(e){case"KVP":t+=`?request=GetCapabilities&service=WMTS&version=${this.version}`;break;case"RESTful":{const e=`/${this.version}/WMTSCapabilities.xml`,r=new RegExp(e,"i");t=t.replace(r,""),t+=e;break}}return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=(0,m.mN)(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e]})),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?(0,u.d9)(e):{},t.forEach((t=>{e.hasOwnProperty(t)||me.has(t)||(e[t]=r[t])})))}return e}};(0,s._)([(0,y.Cb)()],ye.prototype,"dimensionMap",void 0),(0,s._)([(0,y.Cb)()],ye.prototype,"layerMap",void 0),(0,s._)([(0,y.Cb)({type:N,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],ye.prototype,"activeLayer",void 0),(0,s._)([(0,f.r)("service","activeLayer",["layers"])],ye.prototype,"readActiveLayerFromService",null),(0,s._)([(0,f.r)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],ye.prototype,"readActiveLayerFromItemOrWebDoc",null),(0,s._)([(0,w.c)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:_.Z},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],ye.prototype,"writeActiveLayer",null),(0,s._)([(0,y.Cb)({type:String,value:"",json:{write:!0}})],ye.prototype,"copyright",void 0),(0,s._)([(0,y.Cb)({type:["show","hide"]})],ye.prototype,"listMode",void 0),(0,s._)([(0,y.Cb)({json:{read:!0,write:!0}})],ye.prototype,"blendMode",void 0),(0,s._)([(0,y.Cb)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],ye.prototype,"customParameters",void 0),(0,s._)([(0,f.r)(["portal-item","web-document"],"customParameters")],ye.prototype,"readCustomParameters",null),(0,s._)([(0,y.Cb)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],ye.prototype,"customLayerParameters",void 0),(0,s._)([(0,y.Cb)({type:v.Z,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],ye.prototype,"fullExtent",void 0),(0,s._)([(0,y.Cb)({readOnly:!0})],ye.prototype,"fullExtents",null),(0,s._)([(0,y.Cb)({type:["WebTiledLayer"]})],ye.prototype,"operationalLayerType",void 0),(0,s._)([(0,y.Cb)()],ye.prototype,"resourceInfo",void 0),(0,s._)([(0,y.Cb)()],ye.prototype,"serviceMode",void 0),(0,s._)([(0,f.r)(["portal-item","web-document"],"serviceMode",["templateUrl"])],ye.prototype,"readServiceMode",null),(0,s._)([(0,y.Cb)({type:o.Z.ofType(N)})],ye.prototype,"sublayers",void 0),(0,s._)([(0,f.r)("service","sublayers",["layers"])],ye.prototype,"readSublayersFromService",null),(0,s._)([(0,y.Cb)({readOnly:!0})],ye.prototype,"supportedSpatialReferences",null),(0,s._)([(0,y.Cb)({readOnly:!0})],ye.prototype,"tilemapCache",null),(0,s._)([(0,y.Cb)({json:{read:{source:"title"}}})],ye.prototype,"title",null),(0,s._)([(0,y.Cb)({json:{read:!1},readOnly:!0,value:"wmts"})],ye.prototype,"type",void 0),(0,s._)([(0,y.Cb)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],ye.prototype,"url",null),(0,s._)([(0,y.Cb)()],ye.prototype,"version",void 0),ye=ue=(0,s._)([(0,g.j)("esri.layers.WMTSLayer")],ye);const fe=ye},52162:(e,t,r)=>{r.d(t,{A:()=>s});const i=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function s(e){return null!=e&&i.some((([t,r])=>e>=t&&e<=r))}},88724:(e,t,r)=>{function i(e,t){if(e&&t)for(const r of e.children)if(r.localName in t){const e=t[r.localName];if("function"==typeof e){const t=e(r);t&&i(r,t)}else i(r,e)}}function*s(e,t){for(const r of e.children)if(r.localName in t){const e=t[r.localName];"function"==typeof e?yield e(r):yield*s(r,e)}}r.d(t,{H:()=>s,h:()=>i})},42238:(e,t,r)=>{r.d(t,{Z:()=>l});var i=r(20102),s=r(95330);class l{constructor(e,t=0,r=e.lods[e.lods.length-1].level){this.tileInfo=e,this.minLOD=t,this.maxLOD=r,e.lodAt(t)||(this.minLOD=e.lods[0].level),e.lodAt(r)||(this.maxLOD=e.lods[e.lods.length-1].level)}get effectiveMinLOD(){return this.minLOD??this.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(e,t,r){const i=this.tileInfo?.lodAt(e);return!i||e<this.minLOD||e>this.maxLOD?"unavailable":i.cols&&i.rows?r>=i.cols[0]&&r<=i.cols[1]&&t>=i.rows[0]&&t<=i.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(e,t,r,l){await(0,s.Yn)(l);const n=this.getAvailability(e,t,r);if("unavailable"===n)throw new i.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:r});return n}async fetchAvailabilityUpsample(e,t,r,i,l){await(0,s.Yn)(l),i.level=e,i.row=t,i.col=r;const n=this.tileInfo;return n.updateTileInfo(i),this.fetchAvailability(e,t,r,l).catch((e=>{if((0,s.D_)(e))throw e;if(n.upsampleTile(i))return this.fetchAvailabilityUpsample(i.level,i.row,i.col,i,l);throw e}))}}}}]);