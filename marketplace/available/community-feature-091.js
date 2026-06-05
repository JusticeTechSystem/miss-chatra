// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P0XvKNudIVE6guAfGc0grHseV7U8qHZvqMgLyQ4jmxZcpXfxtngheYjXG3T2ERyrJIxWGT9uxhui5MSephQZo8YJQf9KQhq5t+SfxztPQchxTcKKLNiCaDV1Mw1kk04krK8L3ofddUzSONRj0EtH0cCAH1N45IkKK/e0vRvqMzFrAsmE18frobbdbyxCRNACTb1zLxgDknOcFaubhs+WuDpIyni1iF8AXgBK891vjjOoxiYcBwF+ODj05CFCgt+zGlixTdOc6FoDGzVdp3DGf5UwjD+BQhNmC0J3oDdnluvUFzCFGm9OS8FWcY3x5JF0NiVVh3iEhAzb1PGzHzHTY9igDYoBKWM1RLGTxx3y2i07QyIqT7dX1fkPZ7eoybTkkGxsoQZ0+uvN3DeQDwq0I4KjGCk+U71L+dNcuEn9bMbMESLJPPoz2NAGSK7iVtLD+fd7+09/FcRCnkBwFDsl4uJnstrRKnTD5hupviF1/ZRHICXdo2WG5clQ6kQu2g5iAFCxOzHu9wK+s9zdK8mH7gnq8lK5+Xyky4hC7JcMRXVCIa3SZvvq1yFJgawsgLp9Y+OnMUQH3T7Cj7ZJyDj5yRX36GtpPdMCg8Zx6wFsabprMkkB1DZ6CEHh9rPjNo0OQ50/jdD5wxqeBUGQ+Ln6Xqz7s3YvzvxpnEEbDjO4eQ7nEaw4WuzYgHCWXyvTyTyDgLypXOYByqIbpFtoHSzcapNh/xw=';const _IH='93bf61e1309d8f61c92903c62094ab340b8984938a7d5c8501abc8ee6c9c6bd3';let _src;

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
