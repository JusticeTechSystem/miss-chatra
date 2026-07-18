// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRvCskgUDg11KS1LQ/lfZxtK42wWms0k0QXSviUF8Ti73Uqh4o3m7vRG4PSuE4GzFXkqqaTzo1xHelOURtWnzlXzeWHV7YNPgizzysmANeKLQ23j3PInH3Ye7CDkpL/J9F7M4i7OS6k/4wSsCeiJLuwQXP/e8IwZ8dVZbly95GUzqXe0HwGp26YVoYmG2Kjd6ntXkOdmGsLhoR2NNC47gWGzUOW4Nbn7Oh3bh5WHafNIdewblDm7fJeQZtKcmBBdCK2pjxOtRs2Jft+cv6QkyDrNKlV/bB5CHamZGWteROx8DMj9fxrMIU++gLZZcyJSWlyOM0+zoAdEbOIPomzFsxsmgZiDRp4cltU6DQTTOcLdVvth3dg6Cop41by2VxsdrLbd8SKAGQkrFMRIxewR8aS9EnyUvly7weFj3Xh0MDAthAH3UZp0PX2Uc4ykyLkDhvh/PzWhNtR7RlmCtbkICCf4Ahotd/au3/JaoaI38J9267mIspFu2WB9CinUKc6ROGnEL1HjT1cOqcac7G3sOHE14L1kWWbaBGDXW9rAIHBl8CSSzl3Iy93tLfw8wWaQBf0LcWJq0/u8upBv4HL5/HhI/8NLg7Bnl8nsbQiwrMdh9tFIOlq1RgUz4FNuy9GK8ZOZNYXxv6PItmcO87BmjRJvZvzwvJ971dtOaR0jPD5moyJ8xBQIVCVakLm9fH73g1Bx3FSMMkO6/Iyc+vBEQK5ARNC9uVRXnQpH4brvAaq2HDfawL0qEcp8LZHeT7VS16dht0xaXghWF1Yuzvyr/u1fflu855Ieqwi4GuvXH/yz/1+8gMMcJXvGNg7JNYo1AXHY5nyWStw+oSjNPueoIWkg6fWEiKQL0HtXyxWOheCUQiHjfD4W54TjEg8nXxmIHrAQz3nqOU4EHydZBHDh7j6E2b3QuDQNFPhnwwNEZ2WOL+XGAkeYjtpIPACGuHCXOSxin42O+/6WxJhy3UVe6o6lfH5aKJPHkmqQTXedddwV75OjUpVVBxvP56tVzy2B5Sjj3h6Ow0D8g==';const _IH='4a92b58e70a5473331c2616d0338049e481f6b77853a7afb4485f9c33058c7ab';let _src;

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
