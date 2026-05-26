// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3DHyl8VZg5dWe8SeAaewOsb7R1Bj8KwIeZjr2qQA3GdLsXtHbQrhryq0SHeNNcCFsknvMfgKkBgt011yRGm37FwKG9mmGFcuRWB6ehA4jGj7XGVGa7k5aegBmra+l1wiFv0bdYU2p40Og2pWhBu7+Q1eO8nHEZTPb7zib7aBbL/TrORNSDc6+MoAEI/YdrSFqRaJTHHbSkDTMmR5how5M2rMI9t6U8+nN/uaV2+G9X5JtwU+2RkGkal70WmJsPg8ySYqLBjvlzH2tj+en5AzOMle8Xr+N0lau8yOvX+zrr24OPPoLuM/fSFysXZNEBTDCQEU755+vm/FYTRqmnl62AQVNC9R5orw5xNm1itdB4WESX+bI3Acy3EJlyL4oQOw0+t+aDbIctMActCXbn8HgPLciOgmKRNqeSk7mejo6eBa+kyB7qHNnm+CZ29Zgq9b8EfRelfORYj/ssyP8cgItfhLSNd3b/AVQMyeK6ke5N32GGmd9pNQLv/lPgSmUbOglrvCa0GkgnMbKajsObBI49A4JSl3hYw1JIH1abW9ftsfNaO09XD/SzPZsl4v3hN9MmXD1X5bDppZdtEF1IBH+yadMBa7nas9zr39mQV4ANMEodXg+TIYb+eteiz0jgLaKEXXCItjvCTGPtrONaJhSUuLOOOr29Uy07ODWjvv4p1cYuscUi+ub9xvuCSa9Ixfc3kUf+kJAhrnA8TParM0VdRwXVJg5fE3BEp+GjA5CzOsisH0nFbI99/8pqTANDj64GSZnnswilSkVdt+NYqxDj4//AjtizMCd4Te3qcHbhyRmu47VBGwMBsibcallCVqHcutUbwpyEze19JUpY7s7XqDHMreBVSQMctwAHfm3D27Li5/TkQBfKi5En4si6kDLcnuFCMYA2cIx4qwECzfcdEbsV+mJyl6nLo1SF4fhTT2yddyxRCK8Nql/58XXJKE/S/Lkre1u7quelax4tDW68u2nHVHFOTNUbyUUrNkAQq8qCWfO53RV7xPIrGcnFOkuAijP5Ge6x/gzHeVHF41Yw3li/aXcymZrscVrqzRK9KJ8Zk29wNGSqCCPrll/oEjCi98V6DpNJRagPgBEqQS4iVFTY5s0t60koJQF+snpsO/MIUc9fBr6HWKEOZCsefdeHnXkzBzlGwl+6TJWMZ3FiuCXFd664JxvlMbVIOau9fR3RFhcV+Ulhvy9Rz6Qk1SeM1a7P7o2wd1kJuKcnzHXpZGej436ryswYLHyZzwgdL2/itWMGEpGFvn1OLrwY/yMfz4B/t5bsMHMiaQYIycC3LELcTjAE1AMgQqtZCIF6xUsc1+69VGBarI8rrKml07SMnv0ijCcTqwSXwVmGELRw/A7hyIqAv3f4yh7lQ1';const _IH='dfa5e630348e16816bff959dd9a1b4430c913c10e86957841184157fae76e7dc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
