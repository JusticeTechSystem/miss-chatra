// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rbHCsckVRIEWKCshqpJDKmDdV9vMF4hrz0Co7IgbPfoU9lw9ZE1cGFz3+N38Q/2F9GbGiCr55X2a2fDNT8HJzY2yd9kt4KxQ4cplB5/BbTppkmmI9i58DELXCh1jiw8ZXPfmzQL9YTIMCUua6L59/1KUboMteSOkuECn4AKWD8fTEG0LiMRkV9Kl+CVAwBvP8wXrxSK8S0SSiLdTSstxZWffnVgmuF6TyTPYrB2h/Q6tPNrJNmrUSR0VYMYMvT5zChNOEj3uDGtYTei+ChbezYPJqursYHyFf2gbQDgFali0lbgJx+GTfCEwfGYoBASHY5WSaEhSuEOX9krX6lWbt770iQ0f3MfnNxVhAlSRLzlMDsVIuYytFc0AnHBtERdS1pFQLcL4QO/3w6s3M3bwoWknHlFHRKfWzjzfr6bmtImT4va8ua71GXACMT35y5KWCUyJBly7IX2dUn6P4iy59uAByo9EeJ5LJ2gHX5vF49ZJBscL/kPUYoSGaoeBXeJZ8ZdxYF+CK/Vdkzj9Xwea0YjXaDIy0kFbJwUb3R8EQXFQPvXeCN7EbeNpcTticObdhsLQjzjaeraK7dHdkFKxLb8SXHuRCfv1VPz5ytV7Z3zomaxJQS1rBTsJM6jz/aCFgtRcuM3a/NhKZ6dWd4rA+m9Qdty1XcTUga1Do5D/4ckWeqwVoYuSo81qG7B48y71np6pLDBLaHD04k/+vgKz1dq4m94gOuLN696tBBs5F3cRmf1D45jjVyWCxbpX3Iof6fFU2m1HMAV850IkabD4XS6j47nfYLSjbRMpyroXwAD8nah0vrbhPspibkaazr1tnfT/wzrYiztA/aelCcJIGwDVM1ELn0M1Ozv2o/W9fNKdpg3n7hqTIgMQGnhzpQoGLZuhJjdR+uuXjb1YlLWdZTktEnjNf8ejYdq4dilD0Y+XVEiburjHg/+0lSE=';const _IH='7062bf046d72408ba6deb6ea8af9861e09191915f31ba4d3ae4d35a848b2370f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
