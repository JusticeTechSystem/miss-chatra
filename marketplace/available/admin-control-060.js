// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRFmPf3t6hiyP+BJVd477MW0y6GyTtyo15Zw3zy8nFtdUpoehNi+geShUJCMy080wCyrnY71cGdL0CYOSbc5ORPay4NMDyFwZbHssfEqZewqMf0UMVLuXsskIS5c+nh8kz6b+M1jEvX6vYgCD/h6V3JCfoIEvIvQxTqbm80nn2O1QDSIQjFTsS5j6i0bWPuFLcqiE1yxy6urnMavv/UNjF1TmQiDuVDr9fJftm1JnmFb/15yRlPd7k+ujA1jH8wvyO6BA695MGlwy63E3jZk5MmkbiRMCtGiR1CQ5YUs1kwgYAj6UmS1U0/BMjYgPOadfCwcCJjUhahbzCDOqta7qlk6WFhgnQEvUU2ZP6icMRDoTOPs4EoeFfpIhbkac5MiM3Ghqt7lV7orXsLafEbWQjabyc50Kqwbx6co8nQh3aCZ55vEUB7knNwIMXHlkDN4R1ryXYKsVw6SjXNVaD2ZKxFV3gAQoGyWvS87+yvH274e7Sm/D+FNiCK5nXiVyJFTGbo2uynRwxzu2yaQ6mptsP00uyOvIH/c35WvrBrpOKRIE1UIITiwRk88PvsWO9IorPQl71+/03DmC/FLy01rgA36ioqz0raP3cfmm87GLyaS1lL7oWwremSj9Onj/rmK+OUqA/cxlCB4U6kMEFej5p3UFv81dnyNwDRct0A+6t2swNySwEADjv8Q82NCrleDNBUYO0lWFaIrgHQPAbpd8KQ9hAgWpbQTUVjuO7uTtReyYj2hzwbH4aIkQdfQVRCfggjySOEHlfCqKVQsKM6Im50Ezd/Ms0hN751bWWp2FvzSMGUkCGitw4c3WA4KwcM5jawJDD9b1SGBGFAHc99FL1cp/cik8oU3QNHK6yzrkfVUgYmuZKp4SIAFa4h9xZMR6OonA4Mk+p+qPZGNvbgfvm1PDKjVl7i4iLGoHaqiFWrqhYVgBh4+VlTwNesXHKDAZgeU02owlCPACJk3Hu0NXKfnBbxsxitWY+HjK23yBenVmWwsPw1vT+m5vctLpkRy64zooBG';const _IH='c8e76aa7272d573c4906f93022b4860f39b11a1175176ff5d62bbb03858c159c';let _src;

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
