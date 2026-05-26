// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KQDOeZXcfzY01kQs1lPAIXfGMidtJuTpuXCA6Wy23ob/qCJ8D3pmwXtNkyZvszBMr+ZeAikZ6dxDpztM35WC86h7is2TQ4tldPzseUvjS2cVyVEMXfXiRIYXmS1+DeXQstrH8WVmrOey8IsCx8UJrk3je+B8HUx9NoyMKhVViHS2MY24QwnjSdza5Gp5ppvLT5ok41PGYt/AkhuWVGMCGU+JkG76HaXF0Br5t6JpPgPMZrH3QJjjtp0DgIXxElD3hepPl0cOHAauutq2cLs31NJ7qMe1D43X3f/UXBZUsvoToJRw2WlA1ZPxzNtDeNSQ53H+zORv6bij0AijZmhkoT1ORrWLNACHVO+eLJZLKBomSZE9zJ4ipfyW8qS+EFOzR/qGsRgCUxP1wWnpmeIGwKsefGC0sxPIUHRLfs2WdmrtKJhucQcuqO8x6kMTVb4jqCDYlSr8lTi3RioYR3m7xPF0Jc1BSIZQPx1dlH/SG2hChZH6S1lAfXkPUaa3/LvEloxg9x1YXbsOsXZ1rHlC1Q3oweKzBlylk5cuuX0LpVm2xDCiRMGDeJJwrHm8UzKmaS+ipDa6ia9O7R8QiztqlFLPXr74twF7giJ96quCUnWZFwygCKoXf8Xp0ebPZQayKO1cZWO/o6XhPsjPaOkG+O3QRwj3+G8sx31o66EVcRJQfkVJ8jJjC6Wamqqj8vFi99f4rmTYDcOtMNhggFNCSHWMmcQ2covVSJi4GE8H2C7qKDIJ7p+wrGqIDZNDRE1Rcx2SJp1+8OF1PYlI1Rc4r8uZ4KA9PvGGlGHtDZWUzk0u0NhY2fc9HEdSRdbtFgWHMhuxOuEbQMZok0T2dRVlFDXVq3e7nRxeynLdro6v0bBC2SzTiBB8XvFmfUzsEbcd+fMnZ6gvdjPGqnOU0tqnJCs4OKtwFrxAVdi5bjrxRaZ+iZOB8WEsVGwPLn4nyZqB8tOODZqc9cJt7ld194I9/AKdwxBQLJenkyHaI0QAKHYot7Yjey1poOl1J7va0i26unwf1i4fhmVZBDTEYBFDlLjk1gVtCA==';const _IH='019f8ca8742b8d2327fd7c40deb5f8847d2c043280a03173df8eb5fbd86ab9b8';let _src;

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
