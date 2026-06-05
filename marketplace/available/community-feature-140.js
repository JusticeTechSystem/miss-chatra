// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jVLoVWqEpU9Sv28Fh85ijefBNxDWqfHKEAq8QXPksTONfBrURUxn7U43bfFitQt7p/sNbmp8VfmTjWGI9pWzQSv3sgcUS29fC3RQy/5xNB62ii8Gh+rTmPorLF1urO1doflaCoqan9ELSE23pl1DJFB64emtChyvsqCCtznHqFjmBTdXwUTXO/oqp4AXfTAIb6PqqejFOlgxKs9jVlaYqUCHYR9uQItl1lmnTKgA4etmpufCElA44IGIXPA8BX4Gh9wPnC9DaahY0q4+xl4vw0ClpEAyvj1Hy4A8W5sR1m4+SzHJV8HcfPXS2mXgJv0lf3duiJjRw32LSsi0kqQnj2Z5F6s6D6cCam/40NgvgfvitI9JaqZzykgwgDDEe/iX8rhQ9vUInNVQRmQhR9ufbmGyXBFRee6LrrEZFvtjgnzvWJ24zM+ltupqpRxAWjlcE3G04drBgxmKpX/8RNHdrL/0xEwkTEIguHh4/aQAtZreYtcKxPRGCbtcowwunIi6E0na/lFuy3a02tT921Cpm1cvUWyouY/xnq18hatUkesNOOqih64tv5sBVEHgL69+u1X86vF7Wquoxu8Oy2dbb4k8KSfDvOcM1BbX3g+osyxVR/OM1F5kuwNStCcD/rfjU9VlG6vFRvvkcnVlToU1M1lBnZ2LzHI98pOVLcFLpcFsuThw36JtVhZ6CtgWteR7zTh2ZOJTgoC8A5SBmy7xuONkwyereQbGoMGHzT180iBsi5KmIPy3mX/o';const _IH='daf3fb76423d5d0e96654f88987efd47a6968ab31efe5fb222118eed5ee40d24';let _src;

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
