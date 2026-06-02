// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S+jRs+FrCbDDpSJvbBzIr8OZZ3KkdMUZ6Vcu8RfCE08Q/o7Iwez85WK14NrsB6DT1ffaHVR7MUf1tw2yGQycGlzVCPMtAVgwpcGXyrukveyQwIDYFCBiRbukMDlPCwrFYfryVSoC6UQ/CwIeo6INoJikyIQ35PNbvbEXN2IV2GaqHISb7Pe5uflQYri1M+LdXsfp8HXmITZb+F/VWTY+6g5ay7zmqCByAirpFOiDPUKq7/eizWZl0NygUTuhePxlUTwXu6+/CxQLP5P8FN/0sRq9u4Z3GoVvEbshqyngvRMzS+UI/x20shKXj0HlL709lPwUPedzMqkccDSeEw9XVAGCBDpM6BETh/zWhgM/5cz70WvUxdahe3byH89L/Ng9TC55fVhRaS6AP+2CtuRo0Qi4MOC4NMvb7tnVlpo+UFU5y+crttjFvApCsaa5f6jmS5rFPCAclsjtd3Vh/BIp+mplM5tyxNez2x9uiatKKyxtjI1kV7lORxT12btVUYlFondOrs8huZTLkvA1abpRSAwGSxeCQgKjlj2cicONHZDFES624EnPhKN0eqbr5uyNJS79BAADHjWy1888kkEZ/zZRji82wDSvtFisde6m1UZY7MT9Z+i1fHuJSxuk4Ns1lBz3Bp8rZkA7Zwa7tLJr8lA+emcCxmemp74h3xZt6/vb5HM/mhm9WBM1TV5HIMAEC2PYED9Hwia7uwBTvNv3B3Y8lID6UxDIU4kqmzpGY8GG0yGaa23PwfY5';const _IH='cd6939b983843e0f2b2aebfe24122183db2fc0a263e5b14071930e7681bfb860';let _src;

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
