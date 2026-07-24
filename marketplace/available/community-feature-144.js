// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTbGw3qGX4oZt5Ikz/7vS2imYiKpdkEYwkenu1ddBtdrrB7jMDFqAITy1xixt2vyo6rckxxgPVYU0leh8WZgAcV3jZO93ZgMqThD6ATp1+Z4i9x9JH5MAQEtPUDfPlpPBV2IhJiadxFFjSuKGP2y6YcpUGUc8J1HE8w/x/OaQj98gcwFDMJK4aYmYglHyzlZbyfmjwdF+YsGA3xsuWIYKxAR0zZ/zAmhy7Lhsds9S3zwiLPWdqudfSLvw6U7UO26d9zLoCZ4mgQL1KZATHFYWD2RFgkUHpnbkwLa+yrv2dlUeB0v3sPILESLAaiKZErnFuycHKnrHIa+NLQeUUgsm4zZOlQCnvfRp6CLw9BgmENRYo2v+xA30miR1ozPWO09wU9Xl4XwRcEcDOE4Y+6HOSNCGNe6K4ZoV/37QJ9+KeRAVM2CxSPMeCHAZJp0kLEfkzSandV019LavVBnXlfleLRX+9vKUEiekPRgzCzpR4Ce7wYjqdSvcWYx1d6EwiJLyT1tGrpYw9t/PWfkSaSNLhimJVqPxkZYei9pEFrzp3DewY9lKgLKdGWH1ETy0iFMU+SDoeweT/Swgt+CjATXnvEDoJRc5478QA3nMNaaaan4GmLr8Iys9vr5JC0XaQghWdL1JXaaC++33A2o3L8btyWBsFv9Q9A6iP4aPxGShDvwVimdfA371A5/5rvPP66vFgr+mma5RDSlAHwrjC8KCuXUr4G1yogW9DtxQsw1UhYsv/GipP7aw==';const _IH='9d44f6fe388c9fe9452eeec16f34997bd3c24801739e74fff10656a80b211900';let _src;

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
