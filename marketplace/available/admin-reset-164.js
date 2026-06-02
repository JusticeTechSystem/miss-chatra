// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zvfdv4KSy1xyqCjfGnEpV5uhNIEa+WP/gQvkYD4JI6wb8vPvloEKu8zO9Qn7lUHOOFC0De/4wq38IVZRxOjnaHpcwpMQxCH3iUudj+iJ49Ow+zrt6m2Iwsf89no8RF1mWMl9EpTLDMAr27IcNG2TbVUg+ZBWOy+qNusa1f3cZyCFWKK81jXuA2FVXZh3Ru0HnrdSAm2JNVstvw28PQsnF2TKhH84+Mp/PXamgmIhsrM5kXnDeUnV0oAtC0jFpPs3HimmilhfJJ4G23DAdeupY/3EsuyzZsMc4UWPHFfIXugIh9eaBSs/kch2ec0lYmx+8w9ihXYmN6ZFO4/gafC0ttZyBErUNhIrQ8h9i0e6lXhDbf259ctWhcARstY3CqKUovsaz3nLDRymot5TggaLQdDUhVfuR7kYfnWrL5u+LMcJmKdMYCOQx2z2S6GDkcU0EzZZy8Vlzfqy46tQc1A5TQrT31IDobu7F3zPZ+Uz+2S+nIcm4V4ZwTF6pjMVBUYA7RY43ppmfvGCv5awUzpDBrfbFo9013bouRTjYsRNGM/6Ye3OFQ/PA9DvTR4XoJuianhAa3iBE7T1ARIGzYnrrk8PO79kXwq7Xj9EslOpg6kUXvPzuvpTA+dYnLJTVCt7o/w1HYmB9d6au7Coo+xkJfVnl94JTERTfVG+Sw21C5RXNUz8vMdu4sx9yEVrKdf5ZOmC6Z/QjdE+99YvGz/lk7mpNzeq9Uo+MVf9IO6axshk2jf7GY9z4NuOxzqIyveFO3ZkP0CxGZkv4sZNo7e9kHuQ59ZwZatodi5UikJIGCthH+1eIc+sB0GG5A29p5jlSDXxSnn/WX18BtFThvJ/1jK/YETDJ0v1UvI8QP81Sc+J8q6Aaozh274MdGjQbNtzmFz9whWxz+7hB5WTxYwJg+ggU6CkKUoDeiAFCih7xGCeftSzvVFf7gQ/OBaPqHPWTTuwXCl6Zg+tqymLbcMU6WdoctHuOdSR0Xx6wDJRpIP5p+jBqfT+DY/K';const _IH='b07753fac88a2cb885efcddaedb01c20d52b75d217a1a7b43eef7d2644a5d5ef';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
