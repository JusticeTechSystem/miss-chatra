// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4OWxRPbuDLQ6Rk0oSF8UzWlsltonHGc54ICpYXxkdpIfJNUJQBzPjg+kv+0Asd90MLprdyRTB9EGPMd5iiOebpRZYB+xdp3b9AutJGNohv7aeIdj5Mag75ncdCmJ7NGZov9TSS3yxp3cpr+Zp4PFKL+cmI4XKcRyp6RZB1p/diJvKfYASfVxqdNfNBZ7aO4+qHGuNovlV8qJfwSpQzz6lkW/MbtJ+1wpTYtSS26MYlL5jfaRjigPOuYwFtRSLMgC0j2pa7v9TiMePHyTcwCrVIYzm9LOP8mv2TUGj/b3chqwmobdhSrveEyUZQ8llT88mwPBAjK0BEToD/7JbIrKIYuNMHPnZGPnR7A5AlnAM70VZOgwk22wgyZp2yBzDiRVCLI01SJiFpRPGUDZFEldBhu+93aLI0WEemXa9bkGCvzKbxNPN6qru/su8u0Eqn+0S4JzZ2xPebmtN50pKcmKepyQYh7H6J+0s6RgqsJhYi2EZWVgPJeV/ueKKsFb6seR5mH863As4v6S0ZCE/0TiKeBtII5veYVeBj0Se9uPbk0cJ3nUTbANWpA6QjHhsLY7O/+3jVevj7Mi2tTsf3fu03TyeGp/lRs7IJ2i0ZokvxB6quFl/mINUFO2s/VK4o/VcTVH4v0YS4CbGpvtujeZ351oBUtPOUUPe0M5ZA4N4tAPuBXZoF+Ty3gONuIy3JETfLq2uGSPfWtCpWqRvOvvQLvv57xu4b8yhpURA+1L5+BhV+T9F1jIh554QLDxOHV4lF/gq5Nbktj1dBp2D3144E8eO4JCgPYcGsZdXeisDbDM8LPdnOBFt+JdS1fMA/kl0WF3r/vYv64SABcG64YlvePWe2iNSUBh8bihPlKppSrrLCKEEqlN+iS6YvG11QT18cn8hW4SaghFolANQsX1RSQa+/aDVG5WbgVWQbxRtmQzpmm1xGim2XgDhNiTQpiVp1bNhI9SjO78fu4Ce7/g0K0BolRY6Tl9KchvxPc11rSTpCxb65v34nYA+G+BbryS4arm8tNou2pl7xb6bIvownPPAqA0Nw==';const _IH='53f70715d3a0bfcad6a1e5f8b1005a39da1abca9e81e9311054d801bb4912ffc';let _src;

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
