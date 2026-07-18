// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSmsFCpSVJpSFA0+ExXkZ1YTRSE02FY6RMWMJ09RVatA0yqkxjHSqQug0UsWrphXnwaB0Zg9sZUUev+DjmYFRTdwELw9F05tf7dc1MxwRjQ5P/Fp/IcaKrKOrVgAYx298WgwGen6ajlPSLmL/DR3U/LiOQOqk1rwvxaFAVihmYBt2+Be+FYs1dcT1Sjlmvuut47xA83VIGxZI3vHEatxA4/JYLbKdWVAf7/FfaJ8N1N5bnw/vULbLsYoyE1xNMBsEt7+GyRLeLdDCf1+8TWoEQICF9hbnJ7hXfMP2zfTvXu8WAiWJAcmdIUZM/p50MrfLEfMpcGf6GBfCt7GuKOzo39VzwmKNHS3alT7ozHgP4l/Ww1XwIE7MhEIbzuel1g2wmczhi97m1GjFBrbMCfec1ja+EJtHLlNlzidzYHS1sfJadta6xvuKF0SYGbZ03FfMGdeM5stOkPvOSzQOVZPAz15gNqZGS+KogtYnrCdAeJ97dF+RjLnPgHfhqna371ELJkqvMVupJ4NoGF554R129tKxjVnNWYbcooex593hQahl393zjyVvA0U04FbgoD9YtgBVNYuCGjGX5K9LnCQSoL6B6uxxTV31G/K48ZphmmdjSOcwIfMIKUxPNLOUP16EEUG4UXvaM17IFLNotoRvK0lt+/NfvDFjE/x5n4iwAHjvm72EMRbfMukhNxVUrWJ9+FiH6QL8AUgJ9wak483US+fbZOe+3DTMdQvlzFSYk=';const _IH='e537496b736035639f41aa4f507f8c65ac5f374a4a403f799ff0da21f65679f7';let _src;

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
