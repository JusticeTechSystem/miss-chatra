// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TcVsDtYvygH59O5Va5thq+QmoNjnhGkokrlW1bOMK8uxI+OV1QDfaboEHbfsw+UUfmbMSPe8LZpL7hj+ffT0cqyPLdxC38bLmR8F69J+lJBX+Jn8O1+Ju4wlGwHwqvvIsxGttsqDQQDW8r9ws4EB3a3RimPBKqLnPCPga2mOAhyCItdWJvP+U/4GL9sLmxUn2pxZrFcJKosn2KCgPccwgxEvMFd5iJAibYaNcNVms53ytYDZrhB3m9tv/vX5KYCXVaR6gpLLaxGw9etNBOP8PVACyfqvl7a/GuiBm6uuwf5kbI9tqzndZ2uMtFhVe28d2nHv4vu858N9QuLqxp07jvJ1mDQ2eZZTp6Yn23WnI6rhGkC7mZWwZ8jq3uYYWcR0UMhocnO8E4UDAFAhzaTiFOLw/57xYRhdKWQIfIArA3J4sbdYC+DQoME6UrNEJE4KgfoSw/fQN6jiUvludbXE1xUNBVp73bJPdmXV13g0TGUxr/nTDvxyrFkSR2hWG3f358wioTEGk/GQsPed/xDGFt5hwNI00go2vCXsMpgjQPBvLTXspYasTbHKSFpbZwcRv5t5Oed09aB9qU2IqLDuH75pUm7MRs8Pp//aTIgqw9CdO0HFoGXBRNFt5CxJpSIOtnO/Ynt5a1zQzBI3WHWvt2+uEpQwdWl2trYreeKC2UV0K4oKS+jMC2Y0ZsBGKkDL2QL/j43OMReJbufhlOokObP39tehDAemFtzMLKMetb/20xcmAniBRmHsOA809ES7PTLrpwK9cnX+JGfkpDxtrxipIalLsfOJo39qGpvr2MQEhZH4ck3Tc0jf76SHudUFU0yKZaLQPnVdpJj6fB/fq6gcrqFjOakyt0Et/F/nQjqm1kApxwQAfepg9EjFBYLkMSJyMZ9EYEO3qW1l8urox2eERl2Wec7hIfCo1cuF+Yc7gno4PgpiAvlmKXQ=';const _IH='fb6926ae7c1e60da24d36144765e5140a21de3f5db59d0cdd4bef8fd64a5ada4';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
