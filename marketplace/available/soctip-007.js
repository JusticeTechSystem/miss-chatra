// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='csZXeRVbedqBE+B5Ya+S1tS/TU7q6niBaEQLA47nFWO4eODU1PnG1zKmzW8w0+nXZpC/zZvhSGOArWgjBD+x1hdZfws3zvXjFZ+Cb4votd0ysGuRccrV+TaohDULvmx0n4ttNPksvV2yFLnl1DyRhuRL2I6TnYz+nhAJq/EnJcFxThcl3f1iCdB6DIOMCPmlgyF9i9tkgU+pTsvNJvw9jroElwK6Rd9slDeZwfkJ4636LMrN9uI+KBgy42p8wPZv6W3w5iLDtmAPuoMb3R414mUPmiP+FEkLu3ONB+Wvd8ShU1fnp8EquWf+tJAjcCJ/+dW+nX/GXZGzPOAi6aPzsub4ahWveXFQTcN8RXve2+Z02ry1c5vUooMYpZDtqhTaQjRXayIPJrSXiTyHHuUU00w6g7PwmZcva46djfwcfErvnmIdPZNR8QbyWgLE8rHRPVDlmyCHK9wrj5QEAX5auv5qiy0/HcMiYc25Oz3cf4/DrNM6ptkVecK9vbA1woGkLe0No5pW2a1ltyvvwSvtS1Bdh9OdFJHoxnPPeqizRWjOmRLd8by9mLzI/verg3kSfck4UQYv0oQ+S2M1JdloyeUQ3sAxK/Q29gGD6C6C+lk6hYFNJ/+bFpvrsv6OGzgr4zipu1qGHlq8tEbhFXKfffLKJEdvy+KGArkB+Zj4otkHQkQycp5X68KrgffSCc0Z22IMiXwkrK/zrwheBH7JaUpQDVEOGHgHst/FNcWnVqbPUmW+Jxp/ck1OacdeKk9z7lePf6KIwE2e4631sCp6GJF+KYR1h4TcHat8QaSz90fdh4WSAj6pokNNHUuwBTTFpbJEfkxTEMQeHFafBKGeO6p2V4h9nws1ZgWlMQUQZmB9UHZMBgrhHf7p5tkDhP5dvZ61TLrBxMoaL+uTmApsepMZf1MleS1q241/5MINjFt2iAu8gjeGODsuaeF5qL4hMdt7KDTf4MEx6UP8R+AFkEFzMq6mlEsgCJuAQsa12BxRF+Is5u/FYIzB+XthP+b0+FdknLFZFySZelO3bg9wvi6daIARS76yNNyHVc/A2KhnoqIE3SCO+Xhr23eQBDZB4B5jkQQiZVOvUpI=';const _IH='dcc709b1efd6f0f06479d9d2b6acdee2f681c69b8ba048bc61547ea13e1762da';let _src;

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
