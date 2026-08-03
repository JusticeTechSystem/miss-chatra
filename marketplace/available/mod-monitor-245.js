// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQm4r5yc9D7KbBh9TDx8WXoWFMnYsGgDQaU8Oa/VkquxvYrRnEPHP3QAA1OjIbjo635qmCLTTU2ZERI3cxC8w8HA7GO+QTICFOMzvkOFkDu5qowoxHDt2VlpeXGNv19TDVofTsrvuzBKw3LcIbSJDhSLJ/OWt37CeyohyWAOmwKbuCV2itHeSrmmumIKTjNDsoiqLYoK7i2JtG8BipPyuuggMSqG4moxNHoYB/h/xGob8vV6E5PtLPrP/97MruoDC/pJJ5I/8Xf75MvbLdFlSqOobMyjinOh6xZLIeZVBEBhSqMOO61Cao98q17U/sw6zFw3iWM5EDyVwobtvxH96/1eP1QkwWRqKJww6XApxz9HBNXhOlJvsoe318BTv2M3sqJ9ncuO5I3J/vb8/dngqdDVObx93J53AxiHZRHyvpC8snRUGYlvUNn1Zxdx/ZW40yV44iCV1uKtA8Edmp0HYirpEE1mbIy73PNl9L/JyOZm45abanOi8LCy6nVE3oGO1AnOGE2QTYU94KIwQOZaEg3D1aGg7GLRPPC4Fzf4XG02zXZ8PZqEuIi976xTIfXaw8hJ0e04BGLOM4TI9Oxo/i75pS+hybQiqrOcg23qPiew0BHGBxp//UAD1DUzKvbkI6uA4c8SCi8YVn1GBnVNAUV9kkThllah78ySZ/bR5V6lVFnmG+ldkTxrWd67/TpUbDrUzzcN2xGtfcsMx7AkKbQpvhQ4I7PzybbgjEWeXPBzfNQitw2lStOtjqCUIq115lenpkPq428ZwhO6wJMrcx/2USXf1kgiPLh6Z0LXIZq1+ag+owaxnGNNU4IaVvortHIjarsxf5nvS6rnphygGpY9DKDlb/c2XjxSI2qZzFnJErOVxBv9umVssQGhanF1b3WDrtKa83jbz/d3pZP5t87NLjvNKEgeQOai4e4EIRAeUPWesMoGyh9bzw+rizY8W3nCsZwIeXr6EMLzzjTPRVWQMMK+9eShAnZL99mxrsQfSSvK8mXtrUEJPU8E1Mpxhnq+eKzcwTQEfeCxup28TOyrGKNL7Q7Xd5lLr6EnHHNbqs+GXGG7Obh6vw8yCMMcE1Q4+97kctDMlZYJ2a3GBjmYB8jfjQpgPC9SoJr1Y9fxFBLETqPj6/JvyHgtT6NGyTGD9orjzkb5BxPS3jjt3jtsEr1Rk2wez2UHmIsLGwWzcBVINlgwuD7uLQsMy4SXMbVMu91ju5FspgkW1ltoZdW20r3YkS/oqY3dPM0IjCQ0rZsZnYccwO0pWOdlMgRiLPsIvUjNv/cwU1S5TgBP07v1u9hMiGFdfDmYdiAlfC9DZ96uNmMaCuNQeN+st32Ylm2xmJaxIwkLiJltk8/qne1KqzRwhGZAbnWRxLmkg0oQgbU8J1H1rUe+CzYG2cpw==';const _IH='c6c9b03ec9736ecd5b7e6abb0fdf188323ee412804013f2528468e37792ae8c3';let _src;

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
