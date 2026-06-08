// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4fVRdrEDgDuKdhDv3A0f9vvjeEaTnwRLLavzySG9chU1lyEGdrmcf+MIxFPYHoiYxGR8ghZjy9ImK35P8EpRkBLeSqR872R8Go5pa6YmOJYBYhtE/vL02n6jVR+nKv/byc9G3AFx4elOq2BzfsQFJa2SbzORG1GT4jHTVzEicTJOlJ8ywPX59Gt12kTTWRmdSx1ft9tWLkwHKmloy9+io5PMEiCY8NlhDFlVlfkcltpvJTn7qIXm7KNO8S/s70ehulbJ3+rN1XRpzXSYbjd0PWj3iWE++AV78zlDBEmied5nI2h3Tj8zNUIXj3NiXaz/YlIXzmD62aJcmbhgU65CIDeF+4buRJky9K23teWk7OBGb4OEQfYzAFmJf7wGEF4Vp/CpP5jQY9qTyv+ZewarefYlOuuA6sMVauQh0tbZo+LKViz/VVc1Q4Az2XENTgAe7ELmCoGY9qUhWE3Ub5YGUMZmtcTzVRJ2ry4eF0mhKoEKsQpKLNy3opDQ0jJoQ0TW1ydsIR/q+FyKiAYna1p37dL8Cz7i+PGznOF1JbVzaw9RyhI3lgdN0dPio3r3/aRRxHGipODB9nEPa77h1pLegU3OMUSmOSfEbIF9uzpjGi/qpDC6wnBlhx0e7Q6yR7UvStzcCvCx6hmWpD8piHZEolyLDCHE3Wfcs/OaYnDvWueBMIkBFAOJ5DN88OmH95LecOPux4MOIZ+V27mZEOMLULAkZwNyfRwKzmsI3HR9+UHHQhOLbDERvPFrjNLhNyx2IXr6jLZNovieI6AxnKKJd6/+ChabadXLQ6VLqLwaH60eDGoY7ZexIKO23zqVDkMzCcHAz7s+TkRlIfORWFCm/oAAhchsk7une1tKnytmS9JfsY+IS/3lF7gP9wnQlFdkRsT20U9m9zzZg0Hgf+OECnLv+XfwtN7AuQJHvN4tSz0nRgTF/mKsS8H07uNXcT1YlImjw1YIqK8yCDd/lnoD8Pbih2dg9fE2';const _IH='4bd927ef5d90f2f204ff41b9f325c46b9a875d1908f3bf4bb87b05db0844d430';let _src;

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
