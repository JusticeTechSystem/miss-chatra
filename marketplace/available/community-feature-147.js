// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JJ4/GDpiCNtvVIR2fz3XmubVOzDgwi13RVqAnJPu4u+fEnFV4ZMUPphVuObVevhDeDerP/6m3cpZVcShVMp24/qIaGwS+YpftSXYnrAhQSFQ2TOavNnpt6jntWkVjOCCMG+2g+BaMNaQPSUtNUOQrt6uUB89o2QyEe8ntp5PAL2bBXukG0rGHNEUZjXChiWSGbyXMOx8cGNKH9koDth3h0wfVd+rTfrJLxfd/QJk26mn30xG7Ow1+9a2U1qvSBQoYHFEvngeAguliSLqfQWnwvxDmBZlnCaTZZv7j6lmd/xnD4H6Kn8m2+ikgE4tBPpEgy+AiPlTbuatAKfpm7Floc6AtzCryVZ8VvcvJrhJRFgderjGOyv1ijgLPWpssbsyWhaLnjJoawtcwARKLKur9k259Ncm+Oa5mH5erR8s6oFC7mpEPI7WkgT09yqopEdvtkCwbWrqVL8AerpFoogmpjeImjxbcRGdebDiorTqaioJMuMjUilOWAh7TGkv7JMNQZhuNZK9Je3ViM0nwmVD6Y0Xfq9cIseawYOufXwfRHfJLTVr1avIC+pvQfuwN3ZyDuDpSjU2mRQqRWiR7xbiHVIhdwSiKCIwo4VgnhBuP6JuMypBOoepk9XbsI8et4qYuCtWAr4dnqmMhuE04ItfoYpEDPHF755+oyPD79WZ36Rh5D1urUREpThfdhrI+/EDpXhI018vV7KtJc2ScntPH/Sel8j0XHyFMTj6c54TPC0vrgM=';const _IH='43a62206dc0c1d204a6f3081eb42a22872f7113cbc8cee1dcf3cb175781d0812';let _src;

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
