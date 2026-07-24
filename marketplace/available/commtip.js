// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSthR92XGIf0pqwdJJ9l5x6rWcoaUwRAtNEn1hVoQAPDfcbfHiEaagu3+n7xxZZso59AEgdcflo7Vzvb49ypbjjVtzzQKYUltTgo7w01zfV3/DqCdsC9jbvjmWWnyPvwaYeCQ6YiApd3R4fw+oFy7X/cfbu4tAR++5VhXkRPJ8F2QzTgxT1UxwK8+JijeL4NhF2yLcLmXuQk4tIwwI3BABbbvCVe/onO+WmUBVNVQgS5Rdw8Sj6iG4RjxQhOYzmqwYDA0I+bYXGsqdfz147+jDMuG+pMzt9V4fcXvIjy6X1dLoJ//DhuzAqzt02X8EesCorD8k2WpFi2oX5tT6AiC4sh97Qtd/dGG+XUKsj+DI6q38v9cigQs752M9UOgvEDTBo8Y9T6yc5najqtoBHDJTjWLlwXyIIETAJ1fQ+9qij2KIDrmIw0Wx0+prPnlQb+HeqPVWJF9Yt5Pu2w69nmqqO9RXNEWsqly80dMW7J9cuzp0o8Auk0DvPBWW3Hasf6mNan7/Pm0fUyXhiVG8+IJYj2t7KkYNlKkutGybS18kglgrDKxyGrrlSYMkfBt5HmS69o5Xp5VRsraTZSlyuuUlDtmacTTajNwoQEygE5awBst3+iqK7BqsZo1XS0LA9O5nxOGvBn5RZ4r6kr8oqEHusToud5D0Ll7mxaIr9ByXNeCLtMa2KFjRs7dX4XVgUl8YAtMSgdsaHcnZ8KY6oi4fn2cmE1VzSPr9rHGa9XIIHElixWxXpvCDuofOOOa5flAIU3yTgP6KHDvGesCaxf4q1aW5C/XCARPYZxwyEjCAZ0OjWd3ADXtypjPrrNFiQSUQRFTkWbiMhpy81e6rekRo1QUsMtxYHO0slLM4/DYiLHnU6HbALz8I4v8v3qF+7Hg443laD1AwUVgpa33fQ/cgrwFMTlAqWUemB1t+SaVFUKbdHBQiAc0brXdF5H02u8BDVwWbht3zpgB/ar9pr5YOOTgV5W0e8ZR0ebwy1J9SXxTAX9opbjGXJC4HeUXSJvox1gODf5v/+4STZq12Uruak8P031VqhXjCff3bJ8Rml2ged0BIQIjKwc/qrlXP8CYDTI6eOS8iAXGhbjIxAXb+B/v1bysMimfZWF0CPUdZOE2Ulc4t7Ry5eMFlpZyNP8aDVhgdBkgBocfy1gjHwux8uwuPy0G715nPR8DoawiBdgw/I5TuiUhp8+kiC4oPUxR+S';const _IH='5bc4b6629c923b6047a7c58c495d749af4aeb7f4bf592cb95fcd8d963f4645ba';let _src;

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
