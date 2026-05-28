// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M2yh9EmZuInxoRZ1kM+tXXEyVB7i1jI1s6/2s+bLZXcEwPuYQod9ITJCYCMYLcbmr/NlKOOG7NUkug2lBw0NSphTusRgSTOfc3jO+gj1BvlR+lM89qoFZ6Wz1aRl2M2b+zWnNkyhBmbPdIzlH46r4ZMh6HINYy4Az4M3OKBZdZFukT+ObsTIQGbNMK1mIlCaxv7o7QRdr52A7Bty6nqYTLivyUZRibH2rlpeuNG8ssDuPmixzqSLZG4AFv6bBrrHiVQ/Xw2qaz4Ar4ysiocwQnnyEf8xXmefiMLkzESvRs4rBkEnFx3DkiylnS1iRDNHUoJ8oW2WCkSdF13gRmNaIf63EdmR8Gd0uxL7LSuJD5AJz4XnTKiQK4/e5LsQFZoR44zqffdlo/RJz/iYspet09wSNrnEjLNHRyXQ3fz/BNU2xfL3ryG8LdpCHDDU8Y2cwpvfAcoo0ZuvNM6n8dNY4/kExyUmuZMfEigwax1RIImnFQygWOIn+f13817wfP29P2Ua5FRXFB/1zTBeYtm5UcHEp8kIXBTsrTvfVFtW0YwEyeJpAkG0xZOTZ1AR0qYvtiU2sgu+pAIqBgww/KER84vJZUJ34andKV+FNEgYEgvoF4f2mgEILu8UysVvOrztqWHxSSIbb1O3Q8rAhk4QEnq4t3y3NdpuIanyb7R1KqzhXFu2i3Rj3ChjJUB0dfw4du8Vsnxt7xvoPhOR4XIZlBxKd8cp53z42fSnxlZXiU8xZK31anoA/ChjklHlMhwxMKRG1sk6AVl8PWRj/J9Qq1yzm2I3ygmN7/zBhHAlFtdGGV6t9662Uvzw5c75Re8X9nnP/8bz8gEw4rZG5M0Fm0xAr+LE01ZRvWTh9DHUM0I+SWnjBvLL1jok1QHqCjrRfjVy8qaTCcXtDtRfd5HEzmE6OaZ+23B4k6LRhDydc6zP9Q3YXRmLnVWfjirf49PWHHoz7QWOI+74zyBg/votChMSAHODNr0zI4ldpRApRxDIh2+HZKewCecZ/gxhXWXHdtpbUugW1Is=';const _IH='bd9d94a1796e987efb0d76c757042c6e8c7196ed13a99cdc3ac370fabbf5e478';let _src;

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
