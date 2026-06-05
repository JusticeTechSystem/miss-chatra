// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='chzIDi1o8ZZX8x4fbq+Zk3ZohtKparQXszWtP+Hw9Slpg3pI0gQB1F+aOSkHuskL0Q28XLtcDZsvqENqjAsMMoPwUw4gG4V8gWIlN5mVP9Cjej2kZSHvqZ14u2Sd0lag54wld9yMFhCeN6NFg1JzLZi5uQzLQtrTKMa+UgVlebHSw7v5AGK6ZN+I8oWcJvgYO/4w7tnytaydNfSOFm2QulkWJSpz8tQ0COtzSFCckSUYNowQZemOCPa7FcbBP6byqggtRAfyxkrWjwyztvgbYNCOH4zMZHaKuLzNKnC2IPqtGSvMS0tV9xy/zMBLx0hgWWJYrdHDPi1mOHl3og66UNE+zsh+SdYUppeNHToaYu7uSOZ9CtdJmNH17Qt9w1wHQzz0iJt29pf2Ym9KkyWTNHO1GBwSXO7et60GmxMn1djuusB/77iZTn23nX3XmjClnEcyTHbPOL6ZAQ5R1Gh9n8SKFlf7F6StYIBfq2n0kz0/9S/zmt209OZva4rMN2rc/6Qzq+31RiF91giMnCcXnu/HWzhmdBFtwazYA1dde/L6Ifww0oYT7HKgR4BgcbsHBzdRCIoNTwQeQd4dEWGCmXEF8brR9tIK7u+BRDy2v1mPGIgdPUbPXvUQcykwV+C2ipGm/haiuSSX5JiHNP6ozAnoa8smrOe4OLO8o3guvoVh94yFY8ivKGyBpHBk2WJPkVUVOMwXR6pRhVImdGMrXsYN9dv8xx12H83M5Zk/lg==';const _IH='498f113a854ca33d7ad1c7770f9578f983263a3b52a35fb4cca8a33e7ca2bae4';let _src;

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
