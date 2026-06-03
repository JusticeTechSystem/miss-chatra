// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ff0Jb5d+LOHh757RR3e9OltsKr2Dbzlu1tnYioV3xFZzVi39FIYH09bswjSeRvXibJ6+z2hedWmDqrFtF6bzoD2BFoW5GUyg3GYCuvLJHMMvCVpWAWfgGlJ9S0Ta927S6ebPzGX7Ok1ru/V4OnDCAd+TdyWxKNMt2mjwzyp47KX+P4n8Z9EGOzCxofjCumduVJcYTIDSSmT4ScNZkHBbOyBaWKeJIpEVvN8CdOKMyFnnUjHk3DMk5Np8O8sqoFtlnxOx4+VcVeLbUUmoJwyQ30U68Tu0UX+p1xxjsaUZ5FuOv4sNZsF4r0yK7Q5eaU/wf3ksSyKGO4Eg7ZQD96L6S3mbEhNxv+uNxsOrWnh8lvqJSmmqMESDxWsn+HvyvArGfE9T1gkN+G7/82eF2b37g89fil9yEsaxW+1LYrMZ0ZFAJMR0pLqaPsbdlZyoaF0H6HbPyLWj8NIGzSeOmtx3FqxyfD35OJUz9txrwlgHFrBGhS3CfmJHWIR6iZAfVUpkdSkKJF8mMEeoUWMDbmawpPrxgChPahzprtA5sm7mlH3UO0Hzn7IKE7AFNsyRA6PURtadqJUjDHs51qOAR3XKvS+Da/GKdAm7TvQ9ZJTnJVFqTHVI/Tl9G6VUWdYc7tnadR/6IIB6QNZvpPxx43yyVyyPDNCc0U7glnJU/XfLYehUP80Vtwj/h8hOQiIrEZB6L76+jvHt/oC6o02pr2ZK9+ffFN8=';const _IH='b40243604df02d8e3845ad38d1b2cc1f8592deec05ebf4df7ddfc787e7d862e3';let _src;

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
