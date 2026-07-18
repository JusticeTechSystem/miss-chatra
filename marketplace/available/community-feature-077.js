// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQuF7trW0WrT6R1V1VUwmgd9CftzDr4HusBGblSTRR2mzSnTWd4CvNK3mWteE/ZlCqxaYBytcwQKn5sOFbL9SpxMv7mBFmL7rlhSwomteHL3sWMbG6S2yEr9zrG/Nic+/nYMwB4Yre4vHpbDtLCOEdjQBTJKO9MaDhgJVq6rXnps4PeGyrI0pEOj3UaEEpyZdTHfOHdtu+B2QLTsLXVFBBfUAJ1U8mUccvHgdcgpD8S+gZP1KK08+kX0pyXgdtsio+IhkIG5JEkbUCGHmcVkh2YskcYZ2YKor0WMr3xIqYvmsZd3VISaYc5dT6cL8S4HTWaVlu9zI6JSqA9nSC6n3FuUELYtlP+oSQrlbpkTMjCsSwcHUAq8kRFNIdI5nscXbY/KoaC5eISbd4EQYOFJAgzR6HW2ZpQ8E7ldaLjbciaA32wKKHzlu53n/vHrE67fxAN2r10EhSWAp8KrazIla2VJj8dvvJBsPz0ObjiWYm0UDedJ1Nz5dvTikZurbBNuFf0iONoyvkfeJnHhFNtxYXoZRsdT182U3vgcdaOMqkBSJ07OTNiJaQ+jc5XhDX3x0gAyYl8+fcOmHMnG9TpCNHnQs/JS4o9nhv0uUlSC5iClYaaHNiWo1fmW2prZlL4MLvIGNH4icPcpGwcbqkXYl0hdm6DP7LqzXxvr1Dk6/ikiZtHsRU8ludljI6tUsvkBtiSpq/hfTGrsPGJetPDEmfgB75jZwnoUCgk0uxZ4TIZ';const _IH='38cabfe115b2ec7ee3ebd6392ccc38c773a3a88413a05ea7da59790b0e3b22c7';let _src;

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
