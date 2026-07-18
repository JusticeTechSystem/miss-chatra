// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQjQkbRcuiv+zFxNPxv82xyY9YkqVPhAYHe5tSjNHKag2IaICEdlJxumrHHKacmJ80fids6kra+BHd4a3xzaEj2ZFuLJi6z5IyAFDPnQGNzit6nMkF2YzruF0gvPwDuM9OkCvNitEsWBwSvOvUELUb9kcaTIwdK8xGy1783D4lGg7b+Y1lCuipF4u5J0ePhzqTP1QQ1iGaVshEoBKVKdu4C7WNLkO/g+EUfJzoUIBHT7G8MdSt0P5R76cwBwtsD4tiwLAPMTkpDMFKxxrZAqeMuRNpSTLSNq0ogPqqQM3+1dfRQmIhq2Mco0ks4QAATtFB8fL112krIGnwtg46Avn0uPWdccfbuIxXcVgxmXTSzziQNu3PvjrNuYGfVd73SNohZZsLrdWp0KjjXwDZxRcIy7UganW7rhrSt7XxQpG6R0HuGgng0yqjxJ0TUndIyfbOtRnI9dmhXDdV4LVgy7Jigrmh/GsXPL6CXWU2/EtSZuWlMF7MCEUoan8+541/Agkc1JlHmuhgueiHxEa4YVXJ41/ZPKYT4TyBYYwiM99ms4UBtsKHin2ptVRY5paCRhW9efjiPQTBBS02MGcF9W12OmlmIWyYjZU2bZGwmCiX2aw+j9cwXUrfEUCpDGIP6h8KwzTGpd987ZLLbFCBD9VQw2iB+vroV7WNURZf8zX0Zy2p0HsSFb1RszfJ7GUBrW1r8W58sVyRulIZIJMPUhADxkHlBCaZoxd9IAKMJYMuL4dT8qq4Ux8O30cUBFSoCueUW7NoM2xWRuYFgtrZP0n02aU0APHt9Ox8f1nFAsNvtebam6DxMM56dV6mBvhu7pkYCl6EmQcoXsnqN7gz5gQ==';const _IH='8e19479234aafcf5697bd774f6dcdf116b2c78718d1b38e166a0c365664ffe6c';let _src;

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
