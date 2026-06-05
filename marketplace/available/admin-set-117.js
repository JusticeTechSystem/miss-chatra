// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7xTnJpQpGgCOS8xqOK+9wZ1FCplHqgnLFuttkiLltEHzNP3BeqsVKg03An6wDlTEiOaFdgB+HuwZUlM+EEZMYr7rZTdxscVnJgBq5SLTlDbS0COpX/ZbXXXu/aPIoFFzAvHwLkYu+A1+tfKOMDkarH0FerZq1FY4KmNM3k2HEZ0UlHpgzRgdzWXU6zokLmdTECueWkRrzbhs7xBSAQyDtBZ2eY/NNEx7s6WffTfHSc3qkpw/190rOVA223TR20r1n6qRDdP/mNliWB8hIep2wDvrtzBto074HoMXa6D24rXvNxdv4apRENrA0+srpH9L7KK4Zc/hsRAPdkMoQYDfCSCkBXA3BkhRmlrH9l0etGPXuryF0eP+n9ZSugqochyA5T9uGSWDz41XdW9UEJ9ZbRoR4jHOIipv2zygpUx18qK81KVzJlycQ2Mbebff3pVhG/MNRlRveqS/ki/Zbiw2VaAWbiMI+/7Aa72wnGpTfa1YUG4pntWy4HN4SknMc824aSl1NuhfVq7GG524tKFWLl5mKUpxBXg4PzkR0FX0XGJgc2syuo8v1wtvMDZIvgwSRNgB79iVZq5ka4tUmDSIBzmnz8X8mH873hsHLebeqRhNum0DBMDiHu/+Zaywacjx//3wKo5ly6HHMo7FpU5iJfxs7D3SkkXlyScJ9JEqWvDX2Xc2QiBr8RtNk5w6wz31xMG3ACq5S/dkIaV+JiFX5xTZS11tilmgMZ/IaiHuhOL/zreHeEVZNtRQuriIBtqfc4z5wLWPdUFyYmMGY6d1e+2xH8mlBxFRmRrISi3Vk2XHoyUPPzEPG3iv+rdDPky6t1FcBNP0tTimQ/9gSQhcs8exZRkYa9m36awwMoBSai8yODTZ9oovHcuj9BMJB9ngRI2sjGugG8/icsQ/rn9l4BOTnaiVAjDak/IBDTcLvCVdOgnQYzfOoeS50eClebcLr4fycvH2vjx2wv5A02NSOktFTvEahEzmKaRSCA==';const _IH='4778eb29b980ecd17ee898fb71d0a622c71f73335bf06fa7bba82746e69a67f7';let _src;

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
