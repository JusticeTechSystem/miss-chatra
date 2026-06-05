// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='we5lI/uNiU1I3iCHOcnw91UVoI+N+as28oyFm+NXrHU0/qlKPiR31Efl1YWgoigHxYoafe4N4sV3pri3HvoCQw1TyKfdUcWHWd99DOsMasgvK5jiDl0EirzG9UeFMy0a3isoxWcraHqmkujyN7RJ8d6vWn+SUwVuIyv/kHRNZXrGwqMm5OdcABrcbtE+j2ZaLQX5IPB48KM+aMotwvhDbq4Mz+968N3KHb5N3zrMWsfLO4q0u3M9YDD4SIDgOby6dNLKCQTqew0Thj0UFHylTdD+2yiEd6PwOM+y5+z69axSUx0X26fBqehuWmQohsaQFzSeoOJ1DZHz4OGc1fYGyp/lHwpV3tCS3sWZr0T+Oyque3s6+JFRQ17YwdSH0nojCsTfFsv7jD6HYKBxRc35cTu/DWzglgERKUQMNzCVuTU9FfDI01NLs4ya7rfWTAI8b5BMeWjTMdw25PhpdUKXja/Jo4W2piQ8mGtYmrNLjFjJ5mcvfMOnGR1ZtUZdQ6Umr2GPiS8Nmsk0aSiQc2kkz+IQSIimayp+BJumI3AaMIaPPAWkrT4Sf9xnAKtwATNEt3l+ln74zCDwQLJcNeBTY3JFCxKSCZseD3BY4eGDyrt36fFQ/D0PhEVPkiDNtP+g9qDpSmhoC6NAr97CkVDKhyeMEzFJjqPbhtcG4mWtcIdYVVNYZtVGfPpNliYNjsF4uEUHbnrFf/CZT6iY4uOS1WWHAUaOBz/+BC+Orq7lESGk1Spk/bf31kGaWAVYv2zUutKrBOGzojpXXYrfmAckP4pGD0vuEDs85QwanKqrrEg/oX/Lui7BY00bUHdVn+mI8JUhd7ANRJn8yRZyRlubG6cUHtRtmmAXMMEQBw84+h2Tg8dp6m8NYFhicysr4fChFVcVyXoAlvNohtpwizX7fU4aO42Lmn2IgWugDZZEOCx9n2IaY98pIv2YYlcv1kLUIrSTwUf7Lz73ysmhtaWdEkHvh8gpQbszb3ufIgbapQAxH/Dn6io/MpFJ2I8Mryap';const _IH='b7d8fd07e0a887ca50740d25786e69724882db91ab496aeb4b92fab89a29c432';let _src;

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
