// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQbdF+Odx1humUQjnErnJX5ZRJwkebhHv2feqhKOLuwUdNibLcu8D9KeN6oB3N/j5O9exa4RMPeJ5iFNlDC1n35/M8iI+szxG7LnsD7kZ+J8hgMuWsAnVreCLR3X5ezni57XDffyHgwkCKU/L1rMOngg7I2eLGHLsXCb+5UGeb1zx3LLRnSXeU9xQu5JAvnk9aWwOOQrrdlLLfT17FjUudCi5HuzI8FwTLqXZ5dMIE+n52QefMSGLSPwBhfCXHsRI6RrR+2VhsV1dagYaz2UoBZFDwUlcnlwkM5ilRLPRvcrPwo7ukftOxIzdqoAjVRrzwDoQVqnpO+YSZ2MqxWlhD1Zs+58lswRSnQpDwsg/ipVCIiKMY5Li0cpEwmFqIIOu0g41gvlJNjDF3n9hJ9dYn2+2/fl/F6FJRJd2U06M+Z5xh+UQunX35IsHUHHxBM6sui24XRr/Lh8wFl2RD1LnT5oIQ7J9ke7SavNlkXq+aEsH3xMFYslaFwPA5aGu7IthfRF0vO/gHEgBlIL52Zxlld38aTzv6OpZiCWUXgcVq0YrdYSBqS6P+2N9uIVsB/3Ojhl8PTE+e1E/IA03ZkP0TzMQi6MbkiWJUT4nRdEDnbQaKWvmpuetvPoC2A3NwOe5fOj1hlAkbOmwqYSM8Px7wBBTWfSiJZ0etopyXZyFPwRFrrf1P7nDe6XhYtXRpBvVs2ZMvrhv8nWvTjwiRC/rQqO8x1LbMijkGMmHaND0264JLGHg==';const _IH='269446a4f663e927fd3e2854adef89b93244d5c44031361d2a4d26b53cffe279';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
