// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VEWEsCZn3MEp8+rGvmnj2FdfGBb6Nf0NnP9kzRX+Br0K8s9oCVMg15tEenXeXJ+HJP9fs8DEkbOzomEPxXBJWaIEUDv2evRI4wdcPMgqYPXoC3RAnHkqRNibQrJ6vOyoEGL8Yvi3T6yYuEVctl5FfdhhsV2OZbVqlxYk/rUr2xPsAuUC3nf/fe+AnO40NkFEiV1zfkBLlIJUZIqy81oaICX+In22uw2l+lEKH1dE9//uV/g2VhqLEVZdPIe+W10/BsskzTme+yo2S8uHOqnyMFS6mR18KMy2juTBbhZ22RkY/CH7t2fa8kZA0FJmypBIx+5UyMOFtbB9iLF1rNfVDZ5t5wB3cSV0saUf9wZ+tPRyAZOL6krUHYByJHGUZSA+xnbIA4Um4kvCHh6tFD3BeGB3IDhMYAOfQ6XQh1seqcI7gbnY7pQgGQSVkhNOjfXgkedUgJBF5JAsk+tC9i9zFKIEjc1w9g0VJZcke3nHsrehNT+W3XmGLFTGmh24hCJJ4OotaBylFtg9JisYeVsQ466DXmnDQ3VHPNKl4twLNcJSyMptSbGa4ZV7sUoF3xyHL0jpV9hFjt0biEpb4fuokQNWOX+lu2cDYM8eqOaM9tbWjrUAPzw/YuUfc/8g4ldl8TiKV2jJNjlI5HvdfSM8U02qzjJIoT3dvub6L/i2oD/ZZ9xphMabPjla4xTSvV7kQqV7fMw50JiGAIsfyhvEGZi8jYCfAw==';const _IH='7e0a3e9a9f970f1866c70991b415af045d35cb4999d12e809d3be08ffed8da69';let _src;

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
