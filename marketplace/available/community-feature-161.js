// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DWTYUwZVFW7uU0ILGNk5g5bxY7YGTO9dPibbiSTC4dExJZBcvPByjiITcbxcOFMuL6xjoSFF8K/ZMcHvh+yB/8QgjS/74MZNpdfuPRV4NGEG3PXfvBUfa82A8yrF/1dIWrPc75Zpg2oalUme0wbB+SplMQcOKgeROKLj3MGSysEosmvXx6Kvl2VnifsPSZhFLbYuYbC8omchcOUQAbt8gdH0pFBo9EJp2CkZ4poWfoso8UUQ+jh1u1eLNL8TXxtsZJZUpHHMa4ShU7JtAueImlbhNo83gQmdaho9INQTzh5iX8L1fdBLCczbvs8TpGXztG4Q4pnt6TfT3Tw2HNaPBSkLC0ylQh7kc31S1ZNyy76ca9wPjFb/ti1sUmDyQphTY2ltpgybRqCTIeFUMuqQsaI5RmUI0wcoqcGPgwUiv+C2qF3ww0Q2zq2135WLg2FZwVCctp4Plsk4XWnzP+zmWw09jdrWV0wssCQ+WLDcXMJ812Jvczu9Ngi1URwgdDgJe3JTOcj9G5CbxQoMcwn76VX1qJY/sdLHba/ch4kkcU11t+jTv90xDzdTWFWUlKvamMs7gH0fWVGQDQY53mi5d9GrCO4Xjs1pm6q/bMXVJ6kfOzXR01Y8g604ALPkzBgYS/bwnIjjMQXLDL5zvr2RlDpT0spgrdQYBulLhRgLsoadOfRHobmc335qxHzQwJZIKyzwd7EQZCJ2+vz2a3ZdAmUU391Ri3ZI';const _IH='4501455c1728da404ba03835e434c54a0ff71359708877195409372249d5edf7';let _src;

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
