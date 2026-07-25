// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQKFA9ZiAPPgEi8ia7zl1+IUo58OhtqqUd3ImcaOmF55JD4Z/DG1C6CqOSbt2rk5eAIAA4025ur7c0MHkN/EzLfOYy+k6ieFLUaJdLZhNhMr8Gs7DqpuTYwl3/n8g+xGJT1wcYYQj8xOLs2JBSyl7pg93TmovNY4aGDZIWv6LfaSPYUqW6hjIDHn9hCSPXrajDqE5BEyThWBuwfNjwyv5SfCeriEpnEH3HcbBbrSJ2j5+4kISyYO80vOT3bGsBbkX2fm7WahZBKc4T1bjz5f+kQX942775xe6iQl+m/7YOhcrHXZY8qnJ8KNDGLKCnFiw7tqRs4tlQVh7gVAupYDd1CDmkERlxjhMjXfYZutxd0B2gmIZB2eDIrKe66qOhgCJm88PuHwD6xORU2IgsL6zFcFDLaZ/4ddlW48qCfzUa0qXq4Pd4ez4BiU5oeryNXFNWKd/Q1Y0rD+vuILaNfUfPzKhLqVUu6AlM4ZKLgFxstX0wtC/tq+FKjkge/Gi1pbP2QYbXR/RpBRqHZsHNXBQ5o/LAv1fPSbYn+GLpTURwDkx++xKDEI1Xz212WC2dkcXOsz6EX1V2FuCLMkeoNA/fOkXNST8VnVk9mEF6Upy091olWXT4xxn4k/O2CsqCc3+5gfmpsO6wnaIO83YEYFEc6Bedpc0QJVhDrZUpVbD6xiyZmns6xyq8Gtti4yNC9WOsw/8OKjaktFbx9+5ehd5UbBs7TKusMz01ClgI90B4UMnNiOMymVTmdfzRkBE6/RcEFi9FyDqT/V+7G0jBypj4s0y3/ZaJmJ5WCnqLVNhoCHcJmxbeO3ypRTh3d4K2DLGvua5DmaE7VhS/S5by+GqukspxO+b4Qejw/jY8XoYUJlEZzoNAaFz+qqlmegge1e3o1WnwWo4eazb/mfif2aW6RCoK8XiDRVqC0ndmYS+NQriWewquxcM1YtvKqwGFKTh+XeG0fIRyVcQvu3fMEbhMi+oaFcgR4pRCUMlTpfYcnPESQdYl/E8gM3/1cokUcSRmHGOiqtAd0X0K8oCG6rbJE4gv7/NBj/+42R9Ln2WKeUgbQFXCCcO2r58v2qTfh16mO7FdRyUT7xfFV6Qh3XFAVefnARES9VZj66b/pMJg2GKHlxiPfkpBy303BTqQLuz6omRuav4sGkPLTzcdzAdMGzOwNzN9QQcL6nnzp8sZPUBPAJebb8hKH/6pGbY9Y4HDALcas';const _IH='7a10507ed3eccb846e63651f1ceb603a647e090443a14194ad8961e30ed00286';let _src;

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
