// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uZ5XJMdktkJntdXndtMEYdgKc624FzKFbD0s4KYZw9gENtvbgt2MTrFRRbeMd1+Z9dnrDVN03A3WWrzwVNAaTsnlOryyumMu84HdQWQsyYUJKhiB3b16RrWzK8ogUfSR294BkNVwOGFuAt76yLjh4DcJBmUKDnRKdCbiCC6B2pw6wKwgKqF8mJAFONe7LNvWApTXtfo2saDMmCfHFjcSrPqCB+uYD0xy7UPkqr80fQwRz4tFmMTwsS9MGCs2D0kRzQK1rcaYRjr98zZqruxydE1XDe6ISVr6JUq07biFLRiuRKFebmcX/kFNqyXcwiP+v8T0rYaMdqA6lZVHlI9VEbkClJrw+Nvs0Cwc2k1T8p62JIbsKjE+HSi7VkzAcUyMekB7Ijv7TR63TpzT7RfuTD/NCHmtx+TbHAoSg+T88sXb030b7XGyxS1hnKeNzHbdqWKQT5mfbd2JOW8RDcxXIpnuCeP9kUrMZodDzmvBWRmPrdAnN6Sv9MUtaW2DcMwY8eLRusE1LFF4BaF5RbHLhjOYYaiF2sXEwBLbtSFJ5UUv0Ha1GF8JMcsICxrqfI2BTr7Q+TePP0HMD9k8SiLE7fgdR34/Bo0ZbZDM1OG4JElaYjVlxifOe0lbp1RBw+JIDjgF0bnG6irHUIunlDF2RaTG9xhuo9XPdcN0CTY0mCSyFr4k6a1PBHHKEs6oftBAp6ki1mzQPXVF0YobCyqY65iY8WxJ4gv3wV8DbUjpeQ==';const _IH='b5e29791fd99f43720d7dd7a1c51ca789feb91805b80c17c089ec062e44d95c4';let _src;

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
