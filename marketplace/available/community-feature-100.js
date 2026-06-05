// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='motO2I1r9ClGxV31tccwhIYl0n818XqLRrBOywHKKXoL+9SCrZV1LPUI68JnPYMd/salOhoriHhhVnZKOTixPl0uFfvUSW2x36Z7ssxbUrSUrGaCnMP/gvnkZpy15vdfQrokJFNF4J8bkCMvftQ1y5gjVLewCvn1Y4anxTB5PHHTIz5ary00cEIE8xLeTaP04TqWTEwEmKtAUFaS3emV8yOnyGRrNuMKzjbI3s6TG6856bsEPu5PPRaz25fBmY/byqNjM1ZQXo3oGNHC/RtHhcJQ+ZRBhNj+pBTpGIqHEqCfTkS9SkMs26zrGkwLPfKYFCuoiZGKKh90aXK6Xq+kZDma4Q2SZd4oPKe4cVTy58vi6p+GLNtee0PXoFC+Zf78+LVoJ2gr5T6/cNNFV65LvdEUPKc4n9OyP3IvAbD3awvD3rdaSEWVSKRn4qKEZ9bTCmSUslgkdYpmHsh3fvJGQSxkYVskkw9HIGuo3M1BnrX+uIfWxOzzzTAp8io9D/6xavW67hJJeLDc+GUG6YwIlAjNcrPootdXr6xUKEijdfsoBPXZ5a/QvT61y0iyNfN7Cnt9M2Lz5L/F85jU6ZTLXZRWZ7PumqT7OVwbls2XI+/fh/hZhAaCSWTiJ3tZNx1cmz03wbwUPGVC22QEvtdlA4ymO2BdGqok3dUiT4FKLi/f8BMj1592xA7jeZvr6GJ9AU8WBxJ6bPncUAcKtJZpu2wlmA7DgBAa0lMQYKQJ2mrHttSRnPZtVent';const _IH='780410110a048cf0d9bdb49b9999a3fb4ee7c1b83d1b7e9a24ccad03875abffb';let _src;

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
