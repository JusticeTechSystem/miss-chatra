// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JXIKqPdtIWeBIWqXjXetF9PgEnQwlkHkH8zVCicuERhDK8Ubjt/p78W/h3BgVEoTMaA4/XZfbS7UenuKNFYI2RAwRblAr1+ZC4h8IeBipRITk6viTliOq5GZthsIpLTFNVLL3Le+kIsZaFpWPAb8WokBlWUEzrH5I0aXDI8zFoTtEzAGD4lTkaN0theAhFGnNCKujp0r4n7Rfm2eGErEXiTt1rys3leg1Oaoza249CjzfIyuQQcHpjLtS9tLehD81uabQFAwEsbCMzFnkh0oNtqgWyC+o0feS1H0Aq6gTLdX5bROcbsk1NvnWHEDC0Qds60Jjo2Uw/JPsVeR5JcKCtMrf2zu8rnpnUis7yjpF2Az4Tj5jjAth+9Hi/h8HKp1ME5kZzykNefWyQk94omrDHp2OiLo6TIkHYTqvtAT4WyVNLiGpuiQTVf4NlnPmSNImXgsosmxzYZZ9fZPVEQEEBuHip05i8V4og1vWatzUcH66DGzqAoBWnh7TZziRXKadrUEHVTubVeiWwoJot3R//MePIkADnNirMEubaC2KbOBXFu6aYOQBM8ej7iXNI6NjuTWJ+CCzpTk8WGktV9mB7XNBsNXLLo8A4zRT2Ibne225oaZgXRVPuPQAilQ0EmbzNwJCGm1w0ubWfWvdIxwNA+aBeoFZzxihB6xofRGbYGVAGc0mfbYzZNdZ9hYrQwoUq3meHMnri6q+Viu5oVAVnUHbboN0QC/wyeS1BPY4OwhJkvxUF83i0eLPJL7o0hprWDb1ELFIinqCC52rAZ0acf8A6+ktPtM5dR5H8XbH3VADrgepb/cQSucvoYTWT5obTkaJ2+/vbVdTWEDwu+bK/8G+vBOZ72PqsSPobQYodkeZ+/qnZCqqif/S7xBbh3dvIRT71GFG8WN0GQMF1FIveHKOCVMwWRT+fC4myqeMqYoL9NGHidnTg3G2+JB75V05Ftr9N0lZNLLGhaqTBSFYeWIiCDb0Itn0BD0ZtD+OMvPF9vWo62c4hRIJdyDt4pH5Q==';const _IH='6665ac64da71fc3e5ad4ed897b9d3c972e44c4f3a7b921aaf5cdfabbd58d74be';let _src;

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
