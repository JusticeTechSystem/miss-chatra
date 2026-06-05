// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YNsJIpMs6aY+XF21dAOnLmjTpREqBEm3FgLU9cTgvYJQrTuz1wa2Y5WcVBPwhD8HuuY9l4d1StUnIqlgcuvEnp5jEfkhNlBYjdXWFUbH2v6PFEykyP74u51hphuChSeUQBXDR+JeROwpTZ99hpVcBopmQt2dZdgl4LE2PuzBweBmCES8mfC4FlySv5w5ebta2YyDNU9KMXgxl/F9nci9m4LVl15vVXkp6vFAANsh7k54Od5fygYyEgw96pOeJ6BPZz5yZdc8LOXtNpYmu2wULucBfhcD5yjvHy4EZHZyImPeRS07jcDADPpFA0Ie97W6HvFi+sdDZmNbCSWdmiax3t2pBkj+2Ci5NYMeIS2yDATA785lKjGygTm/YwEodS4QlaJpXFOnqLIIQaAZ2XMbDqD+FGMdafS7ujE9tvyIx/Qu0j1Dlp/usiNWNn0qpJaXPGAlTSuJYQeQmIojEO/6kg64pszQ0DrShjxesQQLMQGm5e0xOB/objM5qIlhBFeWlhxMpbO9eo3xYHIbsVhEcq5T5YWvX3kxQZbMiASP7Nn3TpoiLPsdWW4dUf3I+5VeArrxOoYnk4XlGC7WIEIAUHsBtHdv46sP2mn5wUWsj60BJIwZaLMHp3JgVNhYK3ZHdzwlCr98YwGm4CYfEBctjc7DNB/2fl1uq0XBCEBaxbY87lLFm2Mf6iPnNdhVwGTBULjwL+4dS+ZXUYVRs8F0dbhVPw/M19n77hoGzVmi1fKZBhQ=';const _IH='62423c3101c142753b838c3650233f0380f1b7abfb9f668ee52055a4c6f76dcf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
