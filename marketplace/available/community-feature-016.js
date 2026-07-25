// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRb5+lCFV6jrhpraGDv5rvYASaaRC0bjtKeMc3rycdctqjmKqhX818MqeB7V2yR9lNb3LikqjS7yKTrLaC1UMrS4yBn2QIb+6iuWY8iDJW6OGXwbyqAeaE4yzRigRstKfLcHJUhSzBKD5FqmXmFiDr28RmW5RMfNr4MIIEvX68ikUEKagHU9ppEZAsdKx77FBKdOKJtnYv5o6EaVuZzAOpjbQi9Fs3nDzsbDsem3iVeaX7cLr7Sw7n5M2ZPn3BLoRaWnsgzsAWLIyw3TKMQIvbENY/KY8iclzq2Wxa86veQ8qdN0St2E0fbByWS9b4IAS4+GwI1aoUo0m5gDl22d+sARpx4nHa4bDnN+UpRzZOliwuUfiRE+Ns+VG9m982K8owiU6oDT8jk3+dVvOGKZaijsklOJZijtAynT2go61XY+KBewqELMWsd/iH3gh6ODUDF8T6D4x2s7J4+/dPMJ4vgAfJi8rwkipCG+9IXxUXVc2oykSAxkCJ2+QO4KG97xmfbyL2T18rvHYU9XDRi/RCNOC7MIqPmSkUwHbALgAW8aqgLAb0XFa4R3S3D9w5Hx/FDiRpYAplkfPkPwCTC5LhLNn9j4WaTInmGtY4kS9ANz2wreZaWbSkkmEV6n7YGSDmVtWmZ266t/4rR/wZbbRw9qG89cEX6hjmSNScj7iWszOP+TruIkH5q+sOxBHpHcwrRrrauRedRu7iaoFsAvjsAVfx56A==';const _IH='d50cd1271cc6f6f8dd255302bb63d68f71d590443cd052154d68bd78e3d1bd5c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
