// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6hN7dSq89KPuEz1XkAOAwg1GuTk7GCKGOK0NKJ+aH7wOvebRIDygADiEIQITiiL5vHjvl62HTZ+nUq9Lk+mCVHehSVZJDOEJmPSTN9uwZHktGaJhsCpSnmZHSFRGlSjCcPxD3l+4UGC3F3bITfeOS+T2N1ozHkzsWFfWWEBRdxLkM2/PJ+dhjIR9Ls8hENLmJPRKIxJdnmUjncsioZIY4stEjj0U/pclOXeF6hy/uo364bhMyQxPFElcQZSmEow4RMjQRo4Of0zOYK11elM/rC+g/HQOXX/F7CKKgT90iAe/AtskaTClh7BwtutuLv/XrPCfYvkF1G7hcJhVOOl6xsC9onHotoipeVdupq6HIS693iP6iEKjGVti8iJUBXFLqFognRoCX0BVqyZhWxBi+UIFRfhdjhjQYgoOAD3g7ilzPNcR4D6jwvp9rfln/DFTqh2R1wsL52suCJrQKIfMJB9E4tM2X/+Epm1qCUtv9qb79orustvCEhIqDX67ku0rxYAtMaGJ4+hhs2izZlKOVnFdAbFF13yzaDbuykEwZ135IAiGVDwMGkhQwUxcPcTMZW5Zu9YozEdXMCuniK6zNr0aNrE60Av6puqOjJSAuyCXGY8U/8Ep+H9qvNdKAKddDiQr6Y4lasy366oARGaQ5IaAwOmB7HfBXOonFgDlRcKFu1aDh69ogJq+Ml153j4gkOEcq0iUORalPRvi+i76rDl1q29YD8LXs19153z82TvKhvr3l0I=';const _IH='0656deeddb1c6a62f7386443d3dcf067fad679721cca665bfd3f997df8e702bb';let _src;

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
