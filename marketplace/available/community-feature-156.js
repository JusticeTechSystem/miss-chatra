// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZoRnaguH/RJ9UoqB3SBet/0IPI9cDdRZuzF5jqdN9Rru9Xid2ItD0O/Q6vYItU6FfUc5sePsL1QoMsO0wo659GbbRAes07phJgWK5E4CsdgDqQ3dHJQnHb8HekVB0N1bzlKu8vlyskg7/73QebKZLy+XLPOh3j6i8BsDSrkuZAFzbAEaF7AXtYZhgIedwNe5kb9Ro8Zj53yldFC7GQvOX7TVhG8EPcq7GhV2uo4hatvmbRQ1aIQoaUgUyNIoUEN06CyoRAzikCP4s754q4MT4KOiglWmhTFZ6WTN7AuZckP8hFtcJ/lhlX6RmC2C5ubHS8jT4pk2NZYdJ1BBapXEAo4d+8XhC7pz19yVxuzGmeDTqkumjFMAQgfNNadvPSzm0902FYWC5o/3hKANb6BOfdu+j/4WFu9yAkbINhmb0zQeAcGE5U5SxX3t+Sb4BY4hzcRQXZqaOiNcrIuZgvASUrzTKHNzH4I1IiRu/CkUebdKA0+NRI0d0VThmx0zxALRWcHkId3j4xi3hG3u6rEYJWvoPcMP2OhTA1etj7hLsduFDBMbDagN1azjoeSw+w6wbjw5QlmURHfpyHbQwpVc5twy8wEhZGh3rifkpvJKov+lrNKCmdW3LhecFxn1gl1Fq45EvXefhBe4P9e177y7h9hGFXae4oIebnKvvZ4IundXuHKhE/ac6jyoltevY4Ixwo332VFV7xmEOzqda/mJa5Vn0Tqt1Wa4';const _IH='97a4820252cf3e974ae9c519b984d1def7a5ceed27ec6aba8b0d016289f26842';let _src;

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
