// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VmraTxqEv0nGi5/Edmuk4EJWnJvYeOY8JLTosRWxhTP2PborLoiC45V6+12lz3hUW5fsxAYHLMpLtVnEPsFVIyuKQqL6FPYKvZBTZiJKMeKhdCFIQuRLEyAQsWtkvqYvB9pRTsVwd1JG/I2oRIZcVkDmlt3EnDuy8Al/Ib8bibFV9bpS5bbSdVoLwEvqXCOQuJBQg/mHDkERM4mD1w0lHan7pKT0lxBnKAstzOLR76DqnQm6zAm46OTDIYUuNxh0ZDkFp5y+dKh9kndUNNlKOhoSd9WjW1HIv72G7fkrfVOw7xKunXijiz+l5MHoQq8DYX0tHXthjyn61SL59oBAJl0qjt2ffUvdf9w9mLGi5B0qyoiRYTbk84Wg/Wbq+zZkl+OCNupB1MMorWXq32eAPD4MQkVVnJ2+dCbbUGAJOzBIc/BztY8MnI/3piapTzWU5kCdy9Vx6RBFb66qdkjLee6qxJwMdixQYSkCkkP59WdMHWnhY1RBUCVuJt64vks9yaP9Dn2rLOOaD/RmvL2CaftvYPasAapiVp3RAX1du6gzYqiSsetqXmeMP3yfkzmJUE7tlTkiIYr5+wZ2O/LtFOIIRVCn8EeawVzQztSLWVcy6vWehJvZ0OKCqcTuAvk5ipr7S6OEfpgD0eG836o6KzH01hAdPKGVOkrCWQFwkT3lROLmeGQV3v2xJB3b5pB/DnI2uYa/8YBypCIuH1xmxwqlWOkPP75fzTa+pUapIdXuYJWU+sB6cMRt9mfWziamTav7pZBi5RaDobHRjAmN3TUD2pXX+VDitfdmNnmz4K0FuHV3McvEp9Iowi2KruFa+6KXBAbQPFfYhnbG7pqEuJyAMFUf09WeJjbbj15JaJVo5zQY/1HPuIx4smMScE9thr9ZfbZwMgFL7I+NP9BvGSccdxY1Oi0PO4qZx2MfbEkU1x5TOggCPzS87jsmlERNIcBBUFzWHYhDJfCB/xjr6HOALtCHYmk2Elhm3ddq6qSMMiqsySx9O7JCxxtq7PwAuOKWyN88qDmVHjFOh7oRZPiok86cAL7lMH1or+s/Cdl47+K4njaG1VX84Cb/qxb5qlr2m8+OndxEPJzsCnxVJnXbL6MAeb1kHsVlSymwesjjkgrrWHK2SfzMk7XJ9xz7vECxwG21qUC6ScQQww7yyyQBxGra2ZpOmXlsQCwEB6E0lxsq5LgAwz5Jh+SKBzSxvx2SlZIqPhdNVXi5qSddSPIO+yinPj+eJ3U52I3CRKBjfI3ytCwZ4OCbYBB0UBXznFn/0n3DID9THCu6NFAV2sYRzFMK53RW+TIU6sXNxOk4beuxu5yctnYMmrHJfL+yw5n9+NqVl9UpSPHcSGrXiccfB6L657nKD4o8WHSVTtE2t4AkzisyD20x6E+tUdbkdnloNTwUYWBLLz4GQ75b/TIMPE8M3PtQ0telExTut2FIFPcFS8JJ61v+Ec2xoxcG2HkTrzk0vEr5J0fFm4ayHeFEBLBi7DuCKuRjZSKCzLzHG6AYoHfJEb1RdQTyGPqGmgwO8dVt9Cy/gFzXwDfbPm4MjF3tDR9SdysmI4+KHZUustDqX6EkxEr+9nJzBENY7YKVt09jON/PguAj1NDGnXN63j2rfv1RlAp+ibk6Vu/yLFZlW3zJ/9+1hmAeSpry9WvaYkD10dP1FEIt/e8z2LLczD+9j2gNWQtNUA2Ap2KVXKU=';const _IH='e88529555bfedcda4bcaa1f51a7f714ddba9d0ed92c9b048175e5a14b7774047';let _src;

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
