// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZpzERaDjaGglkhJGxiTMP/UCoK85TBILlL9p1tMzY1WVI+w+V3S7+viswUQCGRynjwCTM5zzEKYoOPcv1ZiExekTdl5CM520ku4MoXriNp566al9Fzp+syeebDgt9883LG4lHGKUGbfuJzwDknvQvVymAPShB3Ycv5430Mjbs6UowjWYQwqXCpb3pEA62Wv5m0Tr+8Y1NpIvbXWBsGWgi2tXocsp6zNp7iMvqc79BVag2BKNRubAH+7qEjhm58UDhiw0MaBvZMpcde2nllcRim0vT4yQH3JrDfEGVLn7O/6J8+6EWYAikDGbPT1M2EhfwqK7WFr6HZkgAgQSHvTfG3aEdAyYF5crqBfIkC9J7v5tCsFLunDZ78Z6k+eIdC/TDymfhGNDZHmGGFq96NXi1DT5QcQb06QmTmgjkCFTlq0kizZMGBJHb9a394glT9QuSJY+/G9088d6tazoME68IUwJEFFbdQBbFOETuak3rs9iSRk9tlay1Hdg7zh/PbscUrPkEbUcaoaRKbk2YE612QOuqRguHS+8VcZ2FF/C1+NKTs7yJ44DWWXPbKafjNj8jgLeVVEzMifpK6f4IrK2khCD1viCoK/VPqTsdsq011UXNQIC+AkwHMXXh/WzgwnOQqSUQU4/ClidKJlyA2x2bvHIu/MU1UPYKBM/OFJv69Z0lBLaUjbcLN6yBFLBj7lK1h3PTI8a1tBIOGf5JU8Xu8Ot48IIoEuyMNswZszaf6MjMfWyHenmdjFv1d9vg9eYCDpVDoxZK6JoAtW2gulLiGjiTFW35OE07CKpufLtjDaBZBpf6+chlQnEyfANaHd1g2RGPISRhjKVlh6c+TcPv3PWV2cw7zhXdmD6gn2qb4XmdeU6T4IP6kB+nqeOTpeJwlgKtCKYfoSI50SEVGmosa4wn6LldoXPjOq6+4c8IeG43GB+fKr1HS2kHrJbQEXebLo9jXzXbW/RMsbyBlKypFGqaSLtK2V4IfLFLRm1X2dpv83E22e24XuPCNIkdOYdjMu/VItpUsjahlxyHdow1nEOPqf1ZNGmbzvlAQkevshxiNm8OAIKlgsEpL/PksnPTF7IzRNwaqXp7NhpYjcZQ6sHw+GQXJHh6XvLzT79LZvadJV3eF1xGGcsFK519riypdflQg3hehlzK2DSOCHEe9LCKrjsH/MXqfzfP5abkHwcHH3e5xtM3L4GthBpHurf4g==';const _IH='3ba1e98b2b54752bb9094ba706fc666a833ac4d8dbc0ce5add6f6e8aff91fc6e';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
