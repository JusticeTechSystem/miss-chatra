// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+4F5uRwOBzsJLXN6Q9vLvWZYOqFDVwMWatRgBLHnqVcn+kTTigTx8hRStQUQB5b7g3IQEO4MlV5ZbcUXme0Wsc7xOsv0lt4mSlF6xCjfQA64J/tQd106UR4RKMXcnmN2SugLHa/1mO9sf7gYlmDq/fb++kkDfrdLdRgCyU9MWF0XMeT2Ivo2tu1posWRH0XnmZOtQIultB9DdCsg0fR6k27fxIqWoNZ+XzMEFUitsTB1yzTC+jj8yXy6/SY30DkuGCWQXDcJWzVsPwmrU1mS6YUVUNjhBM9EW8JUWYAiR59qpaiHTNs5cWMbOsqmV5YWClWsy1YHW5yFw0HXYrtcyYnFC2NU/I6nYRTpTlu6RunrXLAosl+JdVcKhwk7YGJHkSOiSXeQ45eGigmRcBmltT9JMHDea5eZk1dgDcvEw/i6Ddza67STcOG6wTFMQa1Ruq+qhJO2gutMDmGDrie5d4LnGrXk3+lPng9haLeGmvXsglY2iw4tV1v/DhvE3OoO26nLssEXA5j5iluWsiRKeTyVapsnb7btvBFVGtWk3VRqP0vNhsplXHFH8ozHARd8M5S3bneFl1ihP7fX7Lc5qoR0Z2Q5ZUPTNpykG96KZBvFlC3sHdk2glJg+NdOBJsyDphbM6edd7An7ztjv/fuFr/HUmqQW9j/u71f4ln6hjaPFpm7qts/Ss1q1yvb0STlCpJpWwisK09557zuIjsXYWYl5ocVskRJeLio4wuxgZnxuXUD9HSpoLfFwYPIucCO/BtPFLTnAI8vHxYvCAt9ojxNEmFxXB5LQWfcB+PgXnrcMYaNUbm48X6ucWte2G/nlH0HbCs7bTkURVko7RoNu3i8GMTzdutftIUYG/Q1YasUsZQwd3UKZdTY2NLUJTi3Pdfe8qxbZlFKPN5orMECT3U62M3sCwdctMyWWkzyi4rRtyAKIQHZMxw9lxMpKJMks9kqDPBt8DOZCluxN36SL6AbNcGPDRIjeEKeMltWvUrOrg7UUDRXDlTLDuvXr7EysnQkPz/ueExkIn6PtekavT8R0NPrZ7rcW8G+5gW3J7FPujz66tNDIdxQaVlkA8kRc+5c+0qm9Re8L861OpykVEGuHE6NslyHoKzjZqj2XFRYpvV/JX6+jdGCKt7lPneLt6pFwPrXA+KzsN4tSoadl2N/8tJMQwnEhrK3i/l4de/JgBS0qT3gzF1z+kVJY+KVFHESGqRx0VnTbwVK6OFcPatz+i5+PcSShH1IyodRfv4S7SH5P2iyGRfcOnRcc+2kFUhQcYdwyvZlMIxFtSw4+OKXWFVvb1BwCLdopNQ/2lxXoKVxwTU8KfSMmDFYwUiErUHJn3H846VMAxCF3DLRhnmUtZ0uhUA+0FjaLsNJ8tWB8T4hlbiymU=';const _IH='0769cafc5990d50bdd27b22b7cbc8021b360fa8ef818b60a3defcbaf81b0308f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
