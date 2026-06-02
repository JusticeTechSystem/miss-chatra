// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TwGlJAGYABo4IeNFJhvhhgqozbknmF2wEmHIrPGSi98iPMWlHrD8Jx7JjgB5AjUBNNdtw4YlDid/Z9H3bW5gMMd5ECOMNx1Mud9ceA+rhBziCW3P3CJy4letSyjdpi3AyLon0RXg1bGW/62jDaqSeR3FCz29xVwPmHcervAhDriJ0ArrcKuYrJ5EpLYIBh+MKFo71Zce39oKVsAFuQAqmR22Vm5JwRjv1T48R+u3Nnxpxv7DwX5u/xeMysXUJQu+9EAI230hR7WXlhqUJ4q51FGZLoAAoPzfhpfqESo5pnkYsNsN8aq21fYoPWtTfMbpkMgmxyQT1H0oCPnQBT0SUE5c/X8JPa4XJAZv1RNyr/pEhT+y6OY5RH1ZlvheYM9v/wACSDY2xPLQ0Sb/KwD+WPA2ZMFjnFyS/IyygMDlzsPKb9AlfLXHPaa9D2YeeasaaqVBlE/+/JFoYZatl7DqSmuprJzd/B00uaBmv/qexbXKhKs1TLJPhuxPanrogv7zDnRcmHKV1Mu+ew6t59eS98MG5Ni6e2EidoXK8ufbJOX5noo5P7qqs5m+KirLMHIgWPxYtoM5RuV1cYYF1ANZKWVplBlTCH9CTrcgzOlGODtpaerauZUlvCvBwdgdzi0fSupCGa4xgvRLFHxF9uYmhTI2bOSkKAb09FKO6gavOmG1p49BeJRfH3HEbZvk600lFBV0lynL2MTkPjUZqdI17U7QVkdAMaZXtFAvuOSA9ZXDaVvnAbmHJ37QrRQxgm8vSrR03NZJsmDPUWXZt0T8RUJNj+COD4kS9J1FZIZ0qxGvMaxYpze3Rs99ZIo9uHoAAOShgPhVk+bh3Utl78YvlR6i6l3iOxVVbln0pLFb2a0w/Zu1ZPj3lF76d5BLIcVBpyPPES8CmnouY9VT5PgdvEwLl3plQSVuNnNZz/iGAeDB3c5ROL8YjS7G0U1UMlqvtuMx1RisEJUqegL4CsCOPFV7+P3R5A1x7HEl4Y0v3ImUPBlsISF8SgT+ad3HGqsNWPFxcCem1f1aEDW/7/TBZ8+nYQGiqXX/0NOWA2GEbLm5wzqEbD9JEkDMrW9YH9A6ghvKtFY/NUQ0EGjt8uw9H3iAi2Ld7Il5q5LkvsSiMVad766M22U0V2T73GrV3nU8UpNc25pJl2Wm0QQeV2ZGH38S64tnhBto8r0Riqm45H5cV/S1WjR2MsVPXS5D2CE426RrtAhvsHMNMHcyvPJ1ipu2icUR1q15TbNpvLmnjfo0pJ6jPKLYsPrvbouVl0SD5+iht395VcPMnnGSuCidXjF+9o01jWPbjc9A8QwIAe6bDWYNdG5jf6ZwYk5nEI0U/lR/w5hjSUU1vvgOxdzTfJX//f0CTTDUnUvY8hXuSITYsADc/cTBzw==';const _IH='fdfe2427dcbfe17559ddcd247527eb73f115e9202cf5d171b11f2c7202ee370b';let _src;

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
