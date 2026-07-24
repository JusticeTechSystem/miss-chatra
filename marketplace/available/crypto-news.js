// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSmTWW3VJPEhfA5Z5XHoS4+CojgFF/HgMzCidxQ72DTQku1255/UgdYwamKN1pO97Og2OKTinHea55+Qvhsagw56dTrGQ5t7z7JVBW+yDQtXT8Osq4zWuvjZnXEEuIuXi3z8da52OxFalcJZesAOChmyUO0KASbOenxwxKTfUB5U3H3PeBCDyIuzlJtM2y9VSM8kKdKFyh/ynsgSrKtGkU11tZXjXOb8f2/13t0MBCJSgwuS3JnocHxkaaHL4EouMaaeNGwTp8tY7GHgU8oAVP+cc0RwllPOd3UEv+zhej56yn6bAIr2EokOYHSzAbTWValiO0SL4KMFbJBqoRtD4qynJCJhpwL8etYyYY2iK/8c4Zp64cFN7Qs1HvwJGPVTVgSnFmf9NkYLogLMP9ACEewDryXhIRVjXnhoDDjqTHeUyy0iJpgyFvIgZzOgFuaTPSCPtAtP7MtXRmqIFiMR7AGj2C8KPJzx0XHwrbLk2um+8vZ1jYCyyh4lspQW7PZzEhT9o9wFuHh8owIxDtigbcTvb6FrIqb+aCJkiaJyWMo4xZ+jAwNhPlzeJ8asS/E4Qg1cGS0iHK5aMhfuipNcHI06tWB5t6A6Ko7E+AnUfLeN/ZI0PK5SkFJUh5ZTiq81DPeA1xDcAbYeJ7ubafEVBTo33NIjaX0qrnG2CRRnhK9Lotsajfx+p51xNtcFc1sTlBsuimLui2BVQAL8GB5Tr9+zKxBQa7t7TAUh1fC5cHkAxCj/+5HoaYoTCZzQ5pIow0zMMjZWKMdxjf4ENZa3PxdK1ydnV88DvQxiHvmAdK5jT002a1I6QAef/YB2ZEjjfRGagZmH99S8soerZA6fvxumjxD4hRoa9uVCUH2asB/e79OF0RAuZEH4XkWVEmD7Qgl/JMe0MYK4erqYvSECas0b6iWetPc0fePUgCc4yqov7nF+x53vhScaz1/dirN3J9JQcdwcA7GMkHgD7tHYVzR6+melzwCBvH+MqWnrJ3XllIaNvOzqJ+3R/Gdj/tRq1Xztr6li99a4vw6OxH4x+ac0kN+kzcUqrX3FBViRbFDQZysqQRWovkcoMjjxmeWv/Un6m1g8viLY3MVcrw/UyRbP6M7l7tcIjc0aA9HtxMMJZIF0ShFTWh/ykiaF8vpYRmMTO4pc2yL1nITLvU4Iyat6an8dcChG8uDeMtqBe1dPlA8uQdG3yuWmhPOFjfv4fV2n03paX5/HIXihcBsul+P/MzhEZBH4iLg1ARn2FRzlzAo2OGPrIbtdK0X9Am1aQZAsE7qq8q9Kjt3N5HdtVA6geOx';const _IH='533d3006ebe98255d5f0c3b97e2bc3d5efb205d9df35671508c9736ddd8e2d66';let _src;

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
