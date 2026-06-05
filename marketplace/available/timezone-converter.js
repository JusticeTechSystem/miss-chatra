// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fQauM0M55boNx8LcR6QDEnEg9D7J6pWrbWPcrBMz9RcKyzR6JsG9g6gUJf1wdl8krl7gOLw5shKo3s69k52W+j0J3+3klepx90PINpqTvNPgxBDmcr6NJDoM8ThiNnwGFKQ9zLYsRlBXfsDLuN/Rh2dO4yOwMQ23tdo11SXf0p1yMotupJhBCB4VpA2bC/JmBbSe6c5pgRPSnYilAqZhvNBVxZBhRFQxNg1shIqByeV8cM2As6SHN0RIA1bQIUWZadNvHLw6Gu942lcA/SitM6Yac6wUTOJkaanYxDVAtR4p9EIw0n3+NWGd/XTdygesCQfagqJEI7iqAJj36yvovABepVJRyS1bB2qf3by+RTompITBiZ6VCe3tK3VkSizJbpgJ+TNFo7c2sNVpLaCO6Ka5rW8A7AkWYvvUnDdJP6yKda3yr46eC0PxerARlkMMTaCuum66gNAuduQlzsgFRvb/pVRZXFxVmPmLbo+EQ2uWxt0UmZS5jBVapsHlCdMnxEFLhRf66wvWGVsecCCdQjIydgPXECXH8/eL8q61iJIPVLBcUNg/qavNrtpRvCfWw+SImczx+gAo1MNKqpcVWKBbCw3/ScmewO95';const _IH='52a7b81b85d934562c1e94d27c0a29f4bff5f61e19a600a4c50706c105ba87c7';let _src;

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
