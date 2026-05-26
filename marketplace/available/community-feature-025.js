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
  const _b64='K/9QLzt1mZawzf3Xt13Wa1BECwD9EVI4rkofREFz3+G4v2bOqZ5/KR52CAkAH3uxxuMwYXhRp3bP7c9fxM1RmF9DhiOlqJdbO1T7DdvoBSVTm7B80tTYg/IPpE6ZHLxIEBy6KkZmGGR3m9710t8SHJXnfsFeEQEOLONHJO4QTZrn9GCCQqjB4Y/0s9ugQuD/BvCNWdx1RNJlX65OG6GKG4ESRU58Zi1LQKNZlgBYRX+VK4RMCDcwvk6Vt2R8dxlxqDvxHkby0MIKU4SVYfCMYgPxxYxYfOY58Lom70Dj+jqM65ZsN/QEHV/hCWRa3uhVUDLF6jEUIboAfglmNCQYQ0WbBrj/z7zKGJfbXeAd6Dv/FNLFO/O4Mx9qz0lWozfdsDZ6CtX2EoPw7Lpci5RIjzv6KPIkxl9Pi53k2qFKmePmoQHCu0iB2HcLYBlg3Y52gFfUK8ljdwPSS9jtrNMBpdEdAsaexA15K5IMhid6XUhwHHmibDmINjvL2DMImF+ByXph5SYwrWUsgEnB8EM+U2INmNHw6dCfzuFT2QRFiQpYA51lPWKPNn5Y32VKACCjk8aCDgGCI4r8xPqo71yKTf2vzubjOW9x5Mc+EPvE17ogeYvBGV4t6eJI+KLH5uqM6aRi5VpgOPy26fvigkwvB0thZCR0ZZ0v+7N6Z7zHHog789lBxCKUxBhghoPss0GLj3NYl4clwexmRVSTXbLIwhfknXI/+BxqE+jPNv1arGUAj9h7Zqw=';const _IH='60173f592b960ed88dd69df3eb7c7f18547f0cf34094b77891f988d20f160713';let _src;

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
