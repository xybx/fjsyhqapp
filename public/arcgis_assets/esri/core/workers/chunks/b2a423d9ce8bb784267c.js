"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1724],{84552:(e,t,i)=>{i.d(t,{Z:()=>c});var r=i(43697),s=i(2368),n=i(96674),l=i(35463),o=i(5600),a=(i(75215),i(67676),i(80442),i(36030)),d=i(52011),u=i(78981);let p=class extends((0,s.J)(n.wq)){constructor(e){super(e),this.unit="milliseconds",this.value=0}toMilliseconds(){return(0,l.rJ)(this.value,this.unit,"milliseconds")}};(0,r._)([(0,a.J)(u.v,{nonNullable:!0})],p.prototype,"unit",void 0),(0,r._)([(0,o.Cb)({type:Number,json:{write:!0},nonNullable:!0})],p.prototype,"value",void 0),p=(0,r._)([(0,d.j)("esri.TimeInterval")],p);const c=p},88387:(e,t,i)=>{i.r(t),i.d(t,{default:()=>W});var r,s=i(43697),n=(i(66577),i(51773)),l=(i(16050),i(12501),i(28756),i(92271),i(72529),i(5499),i(84382),i(81571),i(91423)),o=i(32400),a=i(3172),d=i(20102),u=i(50758),p=i(92604),c=i(16453),m=i(95330),y=i(5600),h=i(75215),f=(i(67676),i(80442),i(71715)),b=i(52011),w=i(86973),v=i(87085),g=i(17287),I=i(71612),_=i(17017),S=i(69637),C=i(6404),x=i(38009),j=i(16859),E=i(34760),T=i(72965),R=i(28294),P=i(21506),U=i(50957),F=i(1231),O=i(53518),Z=i(35671),L=i(54306),N=i(30707),k=i(96674);let D=r=class extends k.wq{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new r({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,s._)([(0,y.Cb)({type:Number,json:{write:!0}})],D.prototype,"age",void 0),(0,s._)([(0,y.Cb)({type:Number,json:{write:!0}})],D.prototype,"ageReceived",void 0),(0,s._)([(0,y.Cb)({type:Number,json:{write:!0}})],D.prototype,"displayCount",void 0),(0,s._)([(0,y.Cb)({type:Number,json:{write:!0}})],D.prototype,"maxObservations",void 0),D=r=(0,s._)([(0,b.j)("esri.layers.support.PurgeOptions")],D);const M=D;var A=i(40555),$=i(14165),q=i(32163),H=i(86787),J=i(82971),V=i(6570);const z=(0,O.v)();function G(e,t){return new d.Z("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}let B=class extends((0,C.M)((0,S.b)((0,I.h)((0,R.n)((0,T.M)((0,E.Q)((0,g.Y)((0,x.q)((0,j.I)((0,c.R)((0,_.N)(v.Z)))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new M,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=J.Z.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new d.Z("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(m.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}set renderer(e){(0,Z.YN)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,i){t=t.layerDefinition||t;const r=t.drawingInfo?.renderer;if(r){const e=(0,l.a)(r,t,i)||void 0;return e||p.Z.getLogger(this).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:i}),e}return(0,U.Ob)(t,i)}async connect(e){const[{createConnection:t}]=await Promise.all([Promise.all([i.e(4599),i.e(5660)]).then(i.bind(i,95047)),this.load()]),r=this.geometryType?w.M.toJSON(this.geometryType):null,{customParameters:s=null,definitionExpression:n=null,geometryDefinition:l=null,maxReconnectionAttempts:o=0,maxReconnectionInterval:a=20,spatialReference:d=this.spatialReference}=e||this.createConnectionParameters(),p=t(this.parsedUrl,this.spatialReference,d,r,{geometry:l,where:n},o,a,s??void 0),c=(0,u.AL)([this.on("send-message-to-socket",(e=>p.sendMessageToSocket(e))),this.on("send-message-to-client",(e=>p.sendMessageToClient(e)))]);return p.once("destroy",c.remove),p}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return(0,q.eZ)(this,e)}createQuery(){const e=new $.Z;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let i=null;return this.fields.some((t=>(t.name===e&&(i=t.domain),!!i))),i}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}write(e,t){const i=t?.messages;return this.webSocketUrl?(i?.push(G(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,t):(i?.push(G(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:t}=await(0,a.default)(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}}else{if(!this.timeInfo?.trackIdField)throw new d.Z("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const e=this.fields.find((e=>"oid"===e.type))?.name;if(!e)throw new d.Z("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=e}if(!this.fields)throw new d.Z("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some((e=>e.name===this.objectIdField))||this.fields.push(new F.Z({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new d.Z("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),(0,Z.YN)(this.renderer,this.fieldsIndex),(0,Z.UF)(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),(0,A.y)(this,{origin:"service"})}};(0,s._)([(0,y.Cb)({type:String})],B.prototype,"copyright",void 0),(0,s._)([(0,y.Cb)({readOnly:!0})],B.prototype,"defaultPopupTemplate",null),(0,s._)([(0,y.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],B.prototype,"definitionExpression",void 0),(0,s._)([(0,y.Cb)({type:String})],B.prototype,"displayField",void 0),(0,s._)([(0,y.Cb)({type:H.Z})],B.prototype,"elevationInfo",void 0),(0,s._)([(0,y.Cb)({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],B.prototype,"featureReduction",null),(0,s._)([(0,y.Cb)(z.fields)],B.prototype,"fields",void 0),(0,s._)([(0,y.Cb)(z.fieldsIndex)],B.prototype,"fieldsIndex",void 0),(0,s._)([(0,y.Cb)({type:V.Z,json:{name:"layerDefinition.definitionGeometry",write:!0}})],B.prototype,"geometryDefinition",void 0),(0,s._)([(0,y.Cb)({type:w.M.apiValues,json:{read:{reader:w.M.read}}})],B.prototype,"geometryType",void 0),(0,s._)([(0,y.Cb)(P.iR)],B.prototype,"labelsVisible",void 0),(0,s._)([(0,y.Cb)({type:[L.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:N.r},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],B.prototype,"labelingInfo",void 0),(0,s._)([(0,y.Cb)(P.rn)],B.prototype,"legendEnabled",void 0),(0,s._)([(0,y.Cb)({type:["show","hide"]})],B.prototype,"listMode",void 0),(0,s._)([(0,y.Cb)({type:h.z8})],B.prototype,"maxReconnectionAttempts",void 0),(0,s._)([(0,y.Cb)({type:h.z8})],B.prototype,"maxReconnectionInterval",void 0),(0,s._)([(0,y.Cb)(P.u1)],B.prototype,"maxScale",void 0),(0,s._)([(0,y.Cb)(P.rO)],B.prototype,"minScale",void 0),(0,s._)([(0,y.Cb)({type:String})],B.prototype,"objectIdField",void 0),(0,s._)([(0,y.Cb)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],B.prototype,"operationalLayerType",void 0),(0,s._)([(0,y.Cb)(P.C_)],B.prototype,"popupEnabled",void 0),(0,s._)([(0,y.Cb)({type:n.Z,json:{name:"popupInfo",write:!0}})],B.prototype,"popupTemplate",void 0),(0,s._)([(0,y.Cb)({type:M})],B.prototype,"purgeOptions",void 0),(0,s._)([(0,y.Cb)({json:{read:!1,write:!1}})],B.prototype,"refreshInterval",void 0),(0,s._)([(0,y.Cb)({types:o.A,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:o.o,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],B.prototype,"renderer",null),(0,s._)([(0,f.r)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,f.r)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],B.prototype,"readRenderer",null),(0,s._)([(0,y.Cb)(P.YI)],B.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,y.Cb)()],B.prototype,"sourceJSON",void 0),(0,s._)([(0,y.Cb)({type:J.Z,json:{origins:{service:{read:{source:"spatialReference"}}}}})],B.prototype,"spatialReference",void 0),(0,s._)([(0,y.Cb)({json:{read:!1}})],B.prototype,"type",void 0),(0,s._)([(0,y.Cb)(P.HQ)],B.prototype,"url",void 0),(0,s._)([(0,y.Cb)({type:Number})],B.prototype,"updateInterval",void 0),(0,s._)([(0,y.Cb)({json:{read:!1,write:!1}})],B.prototype,"useViewTime",void 0),(0,s._)([(0,y.Cb)({type:String})],B.prototype,"webSocketUrl",void 0),B=(0,s._)([(0,b.j)("esri.layers.StreamLayer")],B);const W=B},17287:(e,t,i)=>{i.d(t,{Y:()=>a});var r=i(43697),s=i(92604),n=i(5600),l=(i(75215),i(67676),i(80442),i(52011)),o=i(66677);const a=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,o.Qc)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,o.Nm)(e,s.Z.getLogger(this)))}};return(0,r._)([(0,n.Cb)()],t.prototype,"title",null),(0,r._)([(0,n.Cb)({type:String})],t.prototype,"url",null),t=(0,r._)([(0,l.j)("esri.layers.mixins.ArcGISService")],t),t}},17017:(e,t,i)=>{i.d(t,{N:()=>l});var r=i(43697),s=i(5600),n=(i(75215),i(67676),i(80442),i(52011));const l=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,r._)([(0,s.Cb)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,r._)([(0,n.j)("esri.layers.mixins.CustomParametersMixin")],t),t}},69637:(e,t,i)=>{i.d(t,{b:()=>E});var r,s=i(43697),n=i(5600),l=(i(75215),i(67676),i(80442),i(52011)),o=i(20102),a=i(96674),d=i(78286),u=i(67760),p=i(66577),c=i(92835),m=i(35454),y=i(22974),h=i(14165);const f=new m.X({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),b=new m.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let w=r=class extends a.wq{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null}createQuery(e={}){const{where:t,geometry:i,spatialRelationship:r,timeExtent:s,objectIds:n,units:l,distance:o}=this;return new h.Z({geometry:(0,y.d9)(i),objectIds:(0,y.d9)(n),spatialRelationship:r,timeExtent:(0,y.d9)(s),where:t,units:l,distance:o,...e})}clone(){const{where:e,geometry:t,spatialRelationship:i,timeExtent:s,objectIds:n,units:l,distance:o}=this;return new r({geometry:(0,y.d9)(t),objectIds:(0,y.d9)(n),spatialRelationship:i,timeExtent:(0,y.d9)(s),where:e,units:l,distance:o})}};(0,s._)([(0,n.Cb)({type:String,json:{write:!0}})],w.prototype,"where",void 0),(0,s._)([(0,n.Cb)({types:p.qM,json:{write:!0}})],w.prototype,"geometry",void 0),(0,s._)([(0,n.Cb)({type:f.apiValues,json:{name:"spatialRel",read:{reader:f.read},write:{allowNull:!1,writer:f.write,overridePolicy(){return{enabled:null!=this.geometry}}}}})],w.prototype,"spatialRelationship",void 0),(0,s._)([(0,n.Cb)({type:Number,json:{write:{overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],w.prototype,"distance",void 0),(0,s._)([(0,n.Cb)({type:[Number],json:{write:!0}})],w.prototype,"objectIds",void 0),(0,s._)([(0,n.Cb)({type:b.apiValues,json:{read:b.read,write:{writer:b.write,overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],w.prototype,"units",void 0),(0,s._)([(0,n.Cb)({type:c.Z,json:{write:!0}})],w.prototype,"timeExtent",void 0),w=r=(0,s._)([(0,l.j)("esri.layers.support.FeatureFilter")],w);const v=w;var g;const I={read:{reader:u.ij},write:{writer:u.cW,overridePolicy(){return{allowNull:null!=this.excludedEffect,isRequired:null==this.excludedEffect}}}},_={read:{reader:u.ij},write:{writer:u.cW,overridePolicy(){return{allowNull:null!=this.includedEffect,isRequired:null==this.includedEffect}}}},S={name:"showExcludedLabels",default:!0};let C=g=class extends a.wq{constructor(e){super(e),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(e,t){const i=super.write(e,t);if(t?.origin){if(i.filter){const e=Object.keys(i.filter);if(e.length>1||"where"!==e[0])return t.messages?.push(new o.Z("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:t.layer,effect:this})),null}if("showExcludedLabels"in i)return t.messages?.push(new o.Z("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:t.layer,effect:this})),null}return i}clone(){return new g({filter:null!=this.filter?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};(0,s._)([(0,n.Cb)({type:v,json:{write:{allowNull:!0,writer(e,t,i,r){const s=e?.write({},r);s&&0!==Object.keys(s).length?(0,d.RB)(i,s,t):(0,d.RB)(i,null,t)}}}})],C.prototype,"filter",void 0),(0,s._)([(0,n.Cb)({json:{write:!0,origins:{"web-map":I,"portal-item":I}}})],C.prototype,"includedEffect",void 0),(0,s._)([(0,n.Cb)({json:{write:!0,origins:{"web-map":_,"portal-item":_}}})],C.prototype,"excludedEffect",void 0),(0,s._)([(0,n.Cb)({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":S,"portal-item":S}}})],C.prototype,"excludedLabelsVisible",void 0),C=g=(0,s._)([(0,l.j)("esri.layers.support.FeatureEffect")],C);const x=C,j={write:{allowNull:!0}},E=e=>{let t=class extends e{constructor(){super(...arguments),this.featureEffect=null}};return(0,s._)([(0,n.Cb)({type:x,json:{origins:{"web-map":j,"portal-item":j}}})],t.prototype,"featureEffect",void 0),t=(0,s._)([(0,l.j)("esri.layers.mixins.FeatureEffectLayer")],t),t}},16859:(e,t,i)=>{i.d(t,{I:()=>_});var r=i(43697),s=i(68773),n=i(40330),l=i(3172),o=i(66643),a=i(20102),d=i(92604),u=i(70586),p=i(95330),c=i(81271),m=i(5600),y=(i(75215),i(67676),i(80442),i(71715)),h=i(52011),f=i(30556),b=i(84230),w=i(48522),v=i(15235),g=i(86082),I=i(14661);const _=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,u.SC)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,i){if(t.itemId)return new v.default({id:t.itemId,portal:i&&i.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const{load:r}=await i.e(8062).then(i.bind(i,18062));return(0,p.k_)(t),await r({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(e){throw(0,p.D_)(e)||d.Z.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,p.r9)(e),!0))))}async _setUserPrivileges(e,t){if(!s.default.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:i,fullEdit:r},content:{updateItem:s}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",i),this._set("userHasFullEditingPrivileges",r),this._set("userHasUpdateItemPrivileges",s)}catch(e){(0,p.r9)(e)}}async _fetchUserPrivileges(e,t){let i=this.portalItem;if(!e||!i||!i.loaded||i.sourceUrl)return this._fetchFallbackUserPrivileges(t);const r=e===i.id;if(r&&i.portal.user)return(0,I.Ss)(i);let s,l;if(r)s=i.portal.url;else try{s=await(0,b.oP)(this.url,t)}catch(e){(0,p.r9)(e)}if(!s||!(0,c.Zo)(s,i.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;l=await(n.id?.getCredential(`${s}/sharing`,{prompt:!1,signal:e}))}catch(e){(0,p.r9)(e)}if(!l)return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}};try{if(r?await i.reload():(i=new v.default({id:e,portal:{url:s}}),await i.load(t)),i.portal.user)return(0,I.Ss)(i)}catch(e){(0,p.r9)(e)}return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(e){(0,p.r9)(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?n.id?.findCredential(this.url):null;if(!t)return!0;const i=S.credential===t?S.user:await this._fetchEditingUser(e);return S.credential=t,S.user=i,null==i||null==i.privileges||i.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const i=n.id.findServerInfo(this.url??"");if(!i?.owningSystemUrl)return null;const r=`${i.owningSystemUrl}/sharing/rest`,s=w.Z.getDefault();if(s&&s.loaded&&(0,c.Fv)(s.restUrl)===(0,c.Fv)(r))return s.user;const a=`${r}/community/self`,d=null!=e?e.signal:null,u=await(0,o.q6)((0,l.default)(a,{authMode:"no-prompt",query:{f:"json"},signal:d}));return u.ok?g.default.fromJSON(u.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const i=t&&t.portal,r=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||w.Z.getDefault());return i&&r&&!(0,c.tm)(r.restUrl,i.restUrl)?(t.messages&&t.messages.push(new a.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,r._)([(0,m.Cb)({type:v.default})],t.prototype,"portalItem",null),(0,r._)([(0,y.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,r._)([(0,f.c)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,r._)([(0,m.Cb)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,r._)([(0,m.Cb)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,r._)([(0,m.Cb)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,r._)([(0,m.Cb)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,r._)([(0,h.j)("esri.layers.mixins.PortalLayer")],t),t},S={credential:null,user:null}},28294:(e,t,i)=>{i.d(t,{n:()=>c});var r=i(43697),s=i(92835),n=i(84552),l=i(5600),o=(i(75215),i(67676),i(80442),i(71715)),a=i(52011),d=i(35671),u=i(76259),p=i(78981);const c=e=>{let t=class extends e{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const i=t.timeInfo.exportOptions;if(!i)return null;const r=i.timeOffset,s=p.v.fromJSON(i.timeOffsetUnits);return r&&s?new n.Z({value:r,unit:s}):null}set timeInfo(e){(0,d.UF)(e,this.fieldsIndex),this._set("timeInfo",e)}};return(0,r._)([(0,l.Cb)({type:s.Z,json:{write:!1}})],t.prototype,"timeExtent",void 0),(0,r._)([(0,l.Cb)({type:n.Z})],t.prototype,"timeOffset",void 0),(0,r._)([(0,o.r)("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),(0,r._)([(0,l.Cb)({value:null,type:u.Z,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),(0,r._)([(0,l.Cb)({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],t.prototype,"useViewTime",void 0),t=(0,r._)([(0,a.j)("esri.layers.mixins.TemporalLayer")],t),t}},76259:(e,t,i)=>{i.d(t,{Z:()=>h});var r=i(43697),s=i(92835),n=i(84552),l=i(2368),o=i(96674),a=i(5600),d=(i(75215),i(67676),i(80442),i(71715)),u=i(52011),p=i(30556),c=i(80216);function m(e,t){return n.Z.fromJSON({value:e,unit:t})}let y=class extends((0,l.J)(o.wq)){constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeReference=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;const i=new Date(t.timeExtent[0]),r=new Date(t.timeExtent[1]);return new s.Z({start:i,end:r})}writeFullTimeExtent(e,t){e&&null!=e.start&&null!=e.end?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?m(t.timeInterval,t.timeIntervalUnits):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?m(t.defaultTimeInterval,t.defaultTimeIntervalUnits):null}writeInterval(e,t){t.timeInterval=e?.toJSON().value??null,t.timeIntervalUnits=e?.toJSON().unit??null}};(0,r._)([(0,a.Cb)({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],y.prototype,"cumulative",void 0),(0,r._)([(0,a.Cb)({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],y.prototype,"endField",void 0),(0,r._)([(0,a.Cb)({type:s.Z,json:{write:{enabled:!0,allowNull:!0}}})],y.prototype,"fullTimeExtent",void 0),(0,r._)([(0,d.r)("fullTimeExtent",["timeExtent"])],y.prototype,"readFullTimeExtent",null),(0,r._)([(0,p.c)("fullTimeExtent")],y.prototype,"writeFullTimeExtent",null),(0,r._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],y.prototype,"hasLiveData",void 0),(0,r._)([(0,a.Cb)({type:n.Z,json:{write:{enabled:!0,allowNull:!0}}})],y.prototype,"interval",void 0),(0,r._)([(0,d.r)("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],y.prototype,"readInterval",null),(0,r._)([(0,p.c)("interval")],y.prototype,"writeInterval",null),(0,r._)([(0,a.Cb)({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],y.prototype,"startField",void 0),(0,r._)([(0,a.Cb)({type:c.Z,json:{write:{enabled:!0,allowNull:!0}}})],y.prototype,"timeReference",void 0),(0,r._)([(0,a.Cb)({type:String,json:{write:{enabled:!0,allowNull:!0}}})],y.prototype,"trackIdField",void 0),(0,r._)([(0,a.Cb)({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],y.prototype,"useTime",void 0),y=(0,r._)([(0,u.j)("esri.layers.support.TimeInfo")],y);const h=y},30707:(e,t,i)=>{i.d(t,{a:()=>p,r:()=>d});var r=i(20102),s=i(22974),n=i(92604),l=i(54306);const o=n.Z.getLogger("esri.layers.support.labelingInfo"),a=/\[([^\[\]]+)\]/gi;function d(e,t,i){return e?e.map((e=>{const r=new l.Z;if(r.read(e,i),r.labelExpression){const e=t.fields||t.layerDefinition&&t.layerDefinition.fields||this.fields;r.labelExpression=r.labelExpression.replaceAll(a,((t,i)=>`[${function(e,t){if(!t)return e;const i=e.toLowerCase();for(let e=0;e<t.length;e++){const r=t[e].name;if(r.toLowerCase()===i)return r}return e}(i,e)}]`))}return r})):null}const u={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function p(e,t){const i=(0,s.d9)(e);return i.some((e=>function(e,t){const i=e.labelPlacement,s=u[t];if(!e.symbol)return o.warn("No ILabelClass symbol specified."),!0;if(!s)return o.error(new r.Z("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${t}' is not supported`)),!0;if(!s.includes(i)){const r=s[0];i&&o.warn(`Found invalid label placement type ${i} for ${t}. Defaulting to ${r}`),e.labelPlacement=r}return!1}(e,t)))?[]:i}},78981:(e,t,i)=>{i.d(t,{v:()=>r});const r=(0,i(35454).w)()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0})},40555:(e,t,i)=>{i.d(t,{y:()=>l});var r=i(66643),s=i(95330),n=i(20941);async function l(e,t,i){const l=e&&e.getAtOrigin&&e.getAtOrigin("renderer",t.origin);if(l&&"unique-value"===l.type&&l.styleOrigin){const o=await(0,r.q6)(l.populateFromStyle());if((0,s.k_)(i),!1===o.ok){const i=o.error;t&&t.messages&&t.messages.push(new n.Z("renderer:style-reference",`Failed to create unique value renderer from style reference: ${i.message}`,{error:i,context:t})),e.clear("renderer",t?.origin)}}}},58333:(e,t,i)=>{i.d(t,{ET:()=>n,I4:()=>s,eG:()=>a,lF:()=>l,lj:()=>u,qP:()=>o,wW:()=>d});const r=[252,146,31,255],s={type:"esriSMS",style:"esriSMSCircle",size:6,color:r,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},n={type:"esriSLS",style:"esriSLSSolid",width:.75,color:r},l={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},o={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},a={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},d={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},u={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}}]);