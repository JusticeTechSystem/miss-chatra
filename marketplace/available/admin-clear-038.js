// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0hX7IOHeSjYw92cbIaTD1axjEK7I8uUWu81QbWRzU03bYShLh8U+QHqxoqjpy9ZIxAzG/d6GQFd8GmS/YrawwEfpW9XOWH8ITfjQyw9PhFM32lGchayIDtVtCcZfTOlq0jlH76PY3hb5fC3lR5a7LauvoMTzzYLyzyiKiGovihhEhduMF7Fb4VP4nTp2J4O9B5h74bnlkynambATwxN8yD1GyOcAUGWVLYpEmAtiaGa+SwSkQArDrVxuRPSIUb+ebSW8/LPTiBIukxxCATus6VI5M+kfAI8vdrmrb+5fL3xlvW2jGpU01szBeSSJc9cNI+IlhLoB3KiESf4FoFHvvFJPfP2LIYIF3XAcoaZkfLFJ2RkBa79LPKrjoqVeIDq42qf7zBnmyZa8EHnYC/3d3XFjhoe8cem2RbL9f0l/JVmJsjpSOTSnC8JIjQmnu9oO4wf1w0z3CUWjt5zzRVSugL6ZFVbM0KpDStEiNiI5EBUj8ETe60Y6w6jijdxXkOflqHhnCk9PxMri5T9rvYkBh9sIUnirUs26NsLYHzVlSGff5spgEjlt2Cp9nmXaWk37Iohip8PwXz5JYq433A5c8Qzaj6dRn6Kf3vVW3wH6cKOOca7gpg23eo46ST6+T1Vx1qQcLmJ1nkWUjupLv0e8iSZk8A/tsOCYGCC2iAo4rv8oGiX0QTWQGdJAJHWXL3Kl4+4lREKoAcPu0p/gjqAtfeJlLksa9HjnM2hNPFquoORud6eqrcHS+k2w/gieRMkkQCCmuiCf7Y1QbKIliCv7YK2+Yg/W2UohGWYMmMKdauon25/QfWBezG8rR+gFmhZQnyXYedKYeza1sH86GPggwo9yi27bthb8zdNS0uRXmDBUpJLHxB2BRu/zK5mgy1HxMjcGhzmZzm/wDkaNCTLTAxHYSQzM4i0MQVHAB9KwnKiCz50SeN9oFKfmO1ihzvSaKuM4NH/HRlZdY+Qtx8dWvJjmOj7l8dLTlufFwqhnrrxIYZWaCk=';const _IH='aa593d6a89698727dad6f0959ebc3a229883763e52bfc5e588778d32a4330df3';let _src;

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
