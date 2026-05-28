// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L0ibbmbK4Tmpz+64XKvMcJzpWu/Pt0uLlG3oyDpl8dlqY/PB3OulvvhtAC9FZzXE40W2GPN9adiuipT7nsgiZfIkdcV2nhSWKhN4Dy7OmZl6hNhqPvUx6/yudNo9oaQLDV8Cjr9JNamVAK8qXWAROLwLLW+9SJPgSMRdH55xGjSuvpEbYA590dxmcWSBjxoy1XxFu7aC+qZkDn4NXWtPz9832h7Brtcx3wCluPMlF37bSeqxUdUPiGaO5RmErtWqGThAnRBQU3+/x5jMq153k/i0ldwJIyCOinCMOrAnA5k++rl+Xm9HRrSoCGB62yEmP9f/Kz+lVgsOagnrgWZmeoJpcoiIDZ8dIAxnXxo1iCLtdCj7jLEMcwwf/BWTHyIIyIOtyekPhTk5+7TOSmub4q3x2ESy1R7HtWPnbBcOgZan35Il7A5EKYjTpvvKvDDUl5YIz2fTbnfY48bQEBNVimAybs55TOq9DP8F4hLw3/jOSc3223WFR15IY+iNuoV3zMYfpPrRRh1mhHfsD8oY1U+lWcWDdUApRCyqi76CThCn6GsGM5x1cVgZb25FN8NgREzvdkuEo/HiBsl2Sh749wHsCBmR7vq5aQDrmSbxoAmx/nUH+9GHpFMBQQT9hxtMnEf5HNhj/iwX7m0QdLRpNun3hX92m48GnJtaylJfO5K0FHtzv89nZdnsqJcx6fDMXME+/+GkR4lfEzgyj1sOmcwdV15qD7h1ilf8IfzbwQj6yLv+cfP6PqK8u3RtIgxeYZa1FYXBnfAlIbEtHrivGdYblzgc7USKNapLDDBNK8Cekt4QqIsI5S5D27682hEzIfYR6iYpd+erVc+YawFoP8DIiO7nU6NVCpOQ5tApleVhr2YD+JoQzGWOKpry76AyEciVucIu1qvm9W9tS/jHAUikU+oPq2xtusP27QuIpHnuSqWkxsDnmoDIU/t9H79EbEtgA2ZDbsxe7B7ZcnnAeGheBFVR5JvIlmbLija5+SoTcnge2bjZeMrjtCLux6nUNzvkdosgyIVIXaXpZCra8sHMTbAOFxCYqGm8WhSoZSPc0wISgqk23HW7bx+y1Q5/vn2d8tQaJH+t5njfB7mRWEt48IjaUU8gzRAfDMEhO9Ia6StOcz7EUOXOMSbIlnwyqrWona977bhIBUi+9pQybfQplKw0uwrLxFSXtMvtlMNKlFOclg5MCc3d3S/JB4rrEffiJfnsf9F4m/EK5E+ELAHJGBGTtV+NS/bq2W3KkKM/YIIOwl3bkvoLVDX95ntPKA1UQphqJoxG3DkMYXRz4EZ2pcq9EWJ9tx7oPn+FTfFFOhSNAh34oRqHEXidhEHBNURaotdFicCLwqmp5wYN13F8IC9dZbzpGynnsPM7FuSIMlaHa0Pn0ErYXhRkJE3pL43dP1lbUmlmdqDJ';const _IH='1776e126827d052c43be889d2d563db6959636ada3f2fc251edaf59041262fc3';let _src;

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
