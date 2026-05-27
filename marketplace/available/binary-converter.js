// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='errtWAS3vQYYxaqK6Vjv72Et5JPteITqk4jv8GD6ShutLjhfw7OmW2ln0VEWFWbkIj+QHZPJADqlEcTTOdRC8YMP0eocHLIMJvaf2i+1BjAo6QQ3ulLcs3jaV4KHtRkDMrZ9M2bMvlaqsITuSKwePL+wm5934bgNxvJegjB7yTP5IjsqJhdGsdL8rO3nUrl1eJhb2/ovso1WVFvW1NdQSMnFZS0M8eCBZMZhdB0kkynsiXoYfXKeqFRCPQdkDGDsdPG+zX6ZqWGFnXHY/itzflHYfbBtKWWNsWdBHaqdjVXAixLmpVW+aoQvFhSmKnORPfn3uA9ajjnOpxPRU72Z8igQ9k1ougseTO4iyNOXfLTd3Q4++d/qAADpDkzt7IOdiOoalu8RXZ0M/W6sW3DawPB8xus2siyMGu/e8+RbNcCkeN1dKOMGNKyTp8WnmfZv6wkElzUYpTtsK9lPz6QKJsBfEtPujNycGfBH+OZxiKeI3Oak03o2T5ffdYgqVeQcQPWvfecGPLAsCCQPg9Kmh4C7WTtvEr110JvaOX1+dPIDUeUJ9utw6lg7hy9Ppw8903ZRFP4KKCnnb0cl/Q==';const _IH='7eab5d0d31f0696ba74345f7ac033e465d9339e1e7864e42d48993ee15bd28ca';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
