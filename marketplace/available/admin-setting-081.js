// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRbm8O8rXi8ToQOLw8jCGWx3+svzCMlxFISYrM9Q6ny1gyx/ZFtuI3EDepieVR6AgVN+9IQJEKj95LZNYupcmqCtvDUQ4y/oaydB67Xy45BWptqg5rgux1mVdBDP9yCu78LGFMGl+ODQVVBVcmsIvmp7jH72hfXfH+dWvgyF7Y2nsL0svMyzpje+pg1of5A3HmWXj9paesbr6jSvn+XK7pfgZVOvC2bbi3b2sDAIIxr3WNBJ/p9schuadCPGflO9P+eWdaI1gKeuRdDapGcLiZ8/GT8rOwPenhsDEzW7qPrqbEjzZ8rquk7IyJUaTlCKHbOrwtdxCnSAwfS3gAaM3R4i+PeNbx8u7x1uhQm/Fx1dNX8wZ7LkKZIrhURROrUG8cM+OUf/zxgsl/uB1OSx3pLtRUCX/nsQSSoLddzG1SOexZdikY8TtkQLHkzf9U8jdUMKplcfefvZGcUPoQG8akF8GH5pjZLUzTcezb5mcvB/L5rcn5j5pFIBWKiKzVbJXcPBvK8e/838zEx0YQ5HKRWyGO9dsDbujQjEss5kbI/pwb+ZGdiLJw2wnYP6I2PZB3mj/C6+KxEnduNVtfKAIr50375ZJkE4zU9j19UwffCVaVTbTo7ee5vYjbMe2eRqAb/MIN6tV819VPWvr8n1GKPgLpT79Wh82OGSZuVmOLk4J+PuOMVR3bXeWKcKKYDohB/Vv61pa3rms/eBZDzyRdgnyzBFys+ywRhnwYr6NfpxbhnPZBeL+KOOHObHAHxbSd4WnIp2unBT10qIajdCM2/HLmuCyJUyAPq+bZ2Pr8LgyhjBClDZ94/48SveOgsbU00kL3+h6E2OdsFZ5UeKKVJhAlcX2ZwBMknUX6NjJsjrnk/grVBuF8IWLVx0usyZP5oazxIVfg/9vWn4muuwitzrgai+wnfsQOn2dKtb0df71otbw6N1vKmLpOuBGJuIp2N+utbOMdEcq+Zw9OAT7X7WUFbwAgO481/PGbHWLhLecbfQ7WeJOsA0vXh4Z1JuB/GFIUC';const _IH='146fd00d1a96d42efc5d9062f7d2a4e3d7cb2d57c26f4904e7ab693033fa54c5';let _src;

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
