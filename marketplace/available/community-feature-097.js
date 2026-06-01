// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1cXNLMd7oGN5gZiUJ6RcE4aLM2jNWBtRsj5pvc6B5DNSiLXLFwvASHdw4RH/RT+iwE7azhvVydm+90OtdS3fC+X5SwpBm7IXtZ5Pe/p14U7f44JW+a20ZsarYGAOjB7qc5ISO6t3VMI4DOqzWkwMTwq1E9tZ9rIE2MDeUAZs9ND31QAl24Wai9Nj5zKPdRDz8QPNX0c6qvTUBqagGBHsnXJ44v/cH7DWoHRYphtKz1BdetobnWDCKOQlqPjNONQY8bdN5dAIQc41cWlfJFNa23MHLJIUPoiqe9bslV5hmitv6lRIUHedmuzO++lqR5nGZZih9rUH9DoAPg4vHciBtiEw8u0bfqaTdy0lUXo0OuWjE4DjHo4Q2XsCKTNM3BlB/F2DKKyfq8sWKbOV0KamxLX8PyBks0UacWC1xRprdRJq2thmo3XxagGRWYoXYBuEM4Rw/Kp0oUuVgpip6ODYi6HK+nwbTMpN4opdYWZwohr/WUatfc+D0h1akWj2ImL0qxrkRygiNqTjxwlgdRrHnmYwb1zJHe583xS1UQQokLi2SKXruYlcSMevtT2yzinC9xaiU8RGMKfImN6PNc6epVKtPtrM0yLdpGDMQMWyWv72hNTYiXOUOUdzSdJorKeNWiY2WMIQkpkiQViAYBt6jY18cdQ0Droloz43YhrsbBn9yRiGBmXDnL5m7pQVd7RuGtX2mzeS8v5Uno4inAIbHtQcxNsqNci92GdHDY0LjA=';const _IH='ea5eb3e2072f64b520dc493ee60209a126d7ae66083eac829067affe9d75a704';let _src;

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
