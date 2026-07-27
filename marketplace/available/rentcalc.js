// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQfLVM8Y9H/5X0gN94VlKYf13fa+6WcAJXphkaAdfEf95h10vT7T/wWCsmmF8p+GOl/EudTeo6TapGnljfWuisGUzzH7kmgc7QBtV+1ltuTaAV9bfI0x4JlVgnMd9qbr5mMOof2rpZMnPXZ491zyj5/zdksbtaK7k6zBKIrosIme25CgMZHp0ZkhknnXLuXbAZXjOtbnC+SY4sMQfrp4HwUzvoLrXAHaFo5DVisAnNEKy7hNSBDWqo/w6ChWFl+vgVMgdBFvbxlv6oYeLNkVs2XVrN5SitNbFB/TZbetc5KuDgNwuTNcrmFXg3Ylav8kB56LR/iilLfVR0bCIdbMeCbiXKjMBS7zWigaRcKstSJZdwqSuc2wvq3Y1yV5xG44I1o/ocutJT0CrCfmNOkp87WUK0Gb/pQ3BR+COhE0bRDUzJFPvEkg9U8NvkhCaaQAVZ01iApsvpOQ4SdgYYllRoJ9yMCNLieTA7PSoFJ8QFd92RtaEfieQw9KEiZ+q1KNwWKR6Rc86LrIEF4Kr/ngq0nWSU0rm5LAH9ZghaObw/OFCO8NXevqr4LdyPt4XI/3z2scn00CR9A3pjUew74ZnE8gpA+PfNXTjve4L+N9UahkNOXL+m7dCT8pVwPebhkCXEcGNPIeXdc+gsyJ1wecD/CdJxiqH1AJz3paEHzJBc4E++Lw1zLJNrDVlYqubbdyeE66bxGaPrf4Cag6WmnJ4VC+dFuYvbsR4i8WSJqy0APOU8PN6HOnDzBzrWk1yZkaDEVaGCHdT+WUrRBIrvP2pbwlrlERWBELgf4cam11BaKUolunsoIWt47oSnb93UnzT2eY7sN04K7p/DJAsIPr2aWJ0TyCULpsqoKngZJjMfMrmP1Zh+TaxX3Gm4YKCUyyuqWrNbUxWNndSoqBGnvnLqdv5ZPeO/CZnQ1PNQhbx15XL/9jPAEeEBtiJBFqojSKm/nw/ChiCSuy/5t+3eWkF1TGOXaz4jSRbWXoFMupqQzCVEEth4fhBNvbhFX2JrvLQjci1n6/JAXfX0EWX1zAB6wRAslKOs2g/nKI9onOqm0L3hc7sbHHDZ9oiEoIRNueY/rLer5hEL4UYkJgMWZx62SfJPi8FVvG41Ffls8hasug9b4X6DvFGMxIMazXr9roqagi4jeKgsPmlsTjdM/13ad/WgIELT3QsqwU1Wg401yfpDjElIIWu2AHM8aqbC7H2c=';const _IH='c061ad3dc846a9e3e8c20f101b2cf49c6b25eb478242aa876b9528f8516ccb53';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
