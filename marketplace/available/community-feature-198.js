// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmm8E+de9AnTI573sDBdV8EVCnpjubA+gVTFOeNtxPtdzTWKkzbNkfxR4cRe2ZPPyohEbjZ/rbuki63Ns3rtmHgENFf6IQnz7bRERU04QqHf7RlLaHq6mhHoJAI4lOGngZdSXS4zUq4PqGqNCU6BWjBZltqXR3/UlD10g11cL2CSI196zrb+WNddtzVzzZRQFrfju3xMwebH41yJ/fgwxDQ/ZmJd7GHbuRvh12e5wlxXnnI57Ihp1EBciy+erosMEy6WhZZU3NzKL3IIqT7Yufdc40jn7rM+PuY+gO8u0bvBHVyDuYaJiSv4Sfi1v3Kogzf4fdsBhx6Ro4pBAZJPoehNCfnEllZD/7CkbH9jmYYE5xl7rhGXoqB2/1T5B9nbgOD/W+nVJWnhUWi08FC73dSTW0OB9zcBKB+kgRsXsZCUIqKGRbVv4qLQrLaGGDZ67jr1w//5b0qjXSfbDMLEDHmzRupcIg1XoCrwofvSLqIpXTTFqvumMrrfCfBwN6eCHJgYx0zRRaW1/BBG79bfjou/6tXMaNqL0UlfCNnvzLWz5Tg+4Ps/MX1mZbnkKnsjbUxwOW8uIb1rUmWG3ttHWzi4APDEWt5iiRmJdUi3j5dC1q5zI1cnkF6DCDUjvR7QCS1v/T/ZSv2LEUqkWjd9OIQ1Zmo4fIUeghU2PueqB7iRJzOKepY+PCE2jBDAZ05yxawtdLSO03O5xmqifVbh8+u1In6ga/MVby34Wnuw==';const _IH='9a2553eff263065e404f782305f4c048daab78b6f39a72cf48e71f6dfc8c8a4a';let _src;

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
