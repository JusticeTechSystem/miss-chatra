// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='APGSK5N+qrDaVRGQhvyEzv4sN/7GTBu5I2slfRAmUUkTVCclUZz2K06cREWRzuzx3AjJrc8WwSYz+BNZhFrPWaUIwrKlk4vTllCEShmXThQbe0sSI1Y3AuAu1YvFDla6YRv2UOJqzQenOS51CCoR/VYqH+vO2x9eT0riQc5Uy+N3huylHOILHYk/+vBQB4NzGM/0XBrQoP3WUwV7rc9h4mmRuzltefROVlRcxBt8mQR2kEl7nfq0VWAa0pFNEcoGgMP4K5FrUlHzBk1o0KkTAPOaI3mA/wDz50KEzKsBLVF0AEVID66bs3JOsoadfj7OP7wGGt3F0uRKAp9gyTCNoHhlXiRJkQDTX+Mx0D3VSTPSvufm7iI5Au74tDJW0rZozHE6KV3MjTwJLoHnT/wmZBDZNwOd/AX04dSdgvzfbWkhRYDQrFojT9ZN+5nJ3qW88a6e9Nk9RRK4r/Le/f3v85+N8Jrxxh0wEoxgFPI/0X7WUN1vGi/Npen6mxuhPY0Xad0eCdYma3eQKV89X7fWMdRLBBksZiVj1aVTXLuEjEtn7jwLN7/BvIzw2O6CwY7DjScE7Vf3urlXpXP5hFxg5nYiwUiiz/sYQfcLI6xn4FFKBDdkJyd4+IMh0eW2b+idoKJFS+vph5JNJPAgIfjBdGCQcOwLe3y/DJfjbI2IFHnRWpOVzchecdHOb3YAxMfv1C0Odp5JmgohwtJbgvEGLQ/Vi0dI7Uau6wn1NF8edROGettnsLnhAhxJPIqmi6dWhX10QSXPQoBX0wPPIu+swqCSyAEeKbd7GkEy6yqwzITzjCH6QC9zxuYw53lrQnnvyzhDI2xBDP2LrPzCiBNKRgJrbPEGtF6Xb1tJV0dc8NrnD+WIDK6cmx3s0Qk3gnrenpsXwJofpzCau5rvgpV19m463hvzhHi9d23m8N2w3mVgT7h7go5ucJEFhXISOYeoo4uaf7dmfceBjEwGliYU/hsAl2AAfmhg6bvlCBCckzEspcN4cjAqrIrsEXcpdOmOsw==';const _IH='f270d9c0438cfd521d67ca21a7a14f52bd8ca9adc6272c3ab33bd22789331ce1';let _src;

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
