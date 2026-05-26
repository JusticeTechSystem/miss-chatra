// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sWzcE5SainV5fzz56zH5p1KhNROjbBhTNggjAENbYDkJqI8giows/ppko3jbj3T9NR8HttN+GehfiVRxIhurHROhXChZg/tiGUBb1EvMMShV3qsDbRxQXLBn9bvtjrBTImvLvhQK7l9vcGmuagFUJGpcdHrk+KJismUmtfgi2wfIIvTHuYcpEgbxy/AV/URCPRAn+axlHbkZgMCLzBPK3Edz1l3aNmOxDYxAV24fXGlJKXrWU4iFugwfv3wtVMXR438wEsBcxGFMo79wPLmvL4B///GLzAvtro0CvCqjON0syUmJ+/M+R4HS5QowMbN63I9oZXUGL7/M9ouTc7wM5ZUISwfs3veBHndCFOGuu1lok5TJDtyfqyRp7Mnk+ezizsb84Iceqr1kljL20ngJzHfOvpPWYIqv/f5EL11uGBagb2FqZLU9GQUJB+r4los2Ngrc56rCv901MNVHCjDPSQZchA/TmGu7OAaqqrcGmPf54nnwdeXGly1BzvYv/UCsDkUkTasEOPSdDomSFPgrFHkjxy4Rrr6YXd3Fa2v6/9lqiEfnDFgYbBQf4xcbg0Dwbkh0fledvcJNIh/7WH34WrMYbgbwikibOfSKwLNY32RS1dNocQwjYMjotdlnnDVEB8YfLiwemjuMkcMoLwrmn6RTy41KlYI/HWQqxT4jEPlJxBTVDIEIpqrw50pqL6wxJhS8BKqz3NW8/1fyRWkrH9uLEMIVx+1bG3NTNMA9ovx2iEmYKSYusDyXGSShwGUnckZlvftQlff8sz21BF3eU9SUm/z9fy1zHWqMxPzR7Ebo+5mDMRAsU80tXqQd8T2TeQE75fjlGffd2DdsnsmtEzgNXIG8+ndXGfpmjpjRQXCMM1ccY1gkO127blCvwGMXlIEhMIe9inIvthSqE+/D1eXO70hR8dzuSUvpMZ9YJXFQFv6/KcedZplvNxvq1jIh0FXS7tstV+PEySwX97ZILF6NTO7OABY8Sh7MdGAvaMwZpvsRElvhnNiG';const _IH='41165c23f3c6d9060ea35d6c6fe40cadfe99778d8bd0ba45b3e1102f3cae5041';let _src;

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
