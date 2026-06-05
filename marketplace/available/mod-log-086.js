// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fz5spVXRa+2IbjR7LTSZpJOBUQhpssJybuuc0cJ3MO8EVmlPYyD+RVgVrh5cBqUKzWpqqpMDLplu6yvrKUr51Hsey/J/6dJh0CXKE6bL4ODW2PCEu3c0AqAsTHNjAzNxXIbpRkkHkwLbOLAI29X0+kirBcgnLcZ5RD+3pGHBlVVT3ll2mU5KJB4JGsaWDgn8+UktMNwjfgxlFtNQvRHesztwmmUn/9MPQ4DE5yyVJ3dC3kE2FWCdR/VNtI3v+v3ivvEy0SmwHbYnS23cXtN4KhQsIHjWt5lGQtxwIBvMC/udwANd9qS1ocJziLGQODVfA5Z0cysuJf6ovuWnCNA9Zugy624eG4b7Wnq2I5J5rPP0Do14wv+A58o6ug3RvK9Q7VDnzcYBvV6L57D8FkHr9Scf8kF44feFBsbCQmnPvMXSs0Dy0g4059nowSssa1UzcUxTLwiWslPFqiAqIrCMubL/u2GrvppulvBnUar77AeIMjvH+z2k497i3Jz0CfnwPbvEAzfGsZ/7GSK5SIsgN9oI2clcttGD8rEyPCHyJFmA+w14M4wA26m2gD7veRGCZB8Aenx7RBUmO6q03YGtkMvjt+qutmIOWcqc+lzknGxkVn9c6yrsicx+QdWD+E7+E+hXIhWr6bvKOc+Fr1CBJmWF12VACZK0IXnuJXxds/6Ekma/xz9spehL70ltQgID3xFyz9O5btRyIFqhylKERfM11m9MaT5/aaCTohM1EkGWBTYWCyoOV+5abmp6YB8KbnTJHNXgUixOgAzktrg1EhXUf6i/ZtQtsqfs2WCBNCKlMR7ry4MiMBc6xMFlzu8kIUwnt9XzKRbNxDbFo93SOnv6/it+RbefHei80AOqGhq/5Ld+QBXp+8W1sI/uzeP1xNk4UG2PbzwvsQwtVWjf8ddbxhFAet18DDKbV6Tc+nygcAZcMCasZGvAxB3D5wfAJov8BFHF4w0f15vfNuU9n2mLExEdNQwq8KEVmHubXWF1FHbGHUfpGo8uVqrT5Pi2Rcr60G3E9M4oiCNvfYdzVBZucQcQrB6kCW3VOdyBmsirtii/rHgxb7SUkXUk6xhiccK/XYHUickQu5uBDvAoFPHOLBYJ/yGQwppSFxBQ3pioyrXXLP6Mrv8Hz2i1LxAB915dDoMCxzcNGDBOLiQEA5gb7BaEzO7Ynr2wJFdle3ocDgQngXaxnRXnrOa0YmaoxX6An82KTvD20ta+XWEZXhOHK/cV2lVh4/6jn4C4GR0sviny461unutEEt5/ij3g4iBJP+I2TLc1GffJIWVXolnW4MHKwY3oX6qxZRtv4Xbt42xCGUN49p4a8OhbH7Sh3wbd+GM=';const _IH='8481d737c908d66a59d973fd22a217500c0c4b73c68aa3e2b92bba53393a33bf';let _src;

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
