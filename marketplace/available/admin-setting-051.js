// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTspj4wh4wyBXMjqEPiOYcAM0zxVIP1dWqgQV/T5IP6HEKzncfzBH2zlSX3cKx1dalN1k1g1acWT5FdSDHSF/zP1teBPhR5pwcoYsQNpixlh1CaS+7bAkUKL5wGLPBLoqQsmTUk7T3ouSmDc52ZwY5OPK9Fwr6zszHzWqd/NQzj9pH/aOMaEZthdOFx5B9hGwTj3otVeuCDMVywUQZRRZyWnbB2k1qyAV4SPvN62iEhprP4fvtdsGVT37Mv5vxyf4C/CgLGRQBPu4SVgTy2IzTRSb0hRq96MbFngZTMset4QGziXSsNi7cYgHwNgooWfDfNyX4dbtu+3IP7Q9SNPWlfc6aU6BPg46pX3jR4Ws7v8vVXN2aARFQZy3Haj2pOP9DR+2g66pvujc3enld0+dJKwQIUlCUqOQgaVRk0OaEk6c0df6731rulZuHQe6HYxrLWPFabmRdV9VgcHLvj8CZeitMdHQc9P6ZMVMl3SzxOV3DAWBqO93/xAkuPDb8dbBPj1wSh4zckjsG5qqAZRuHxdfVcuNlA3ADuJWRsqwDLHn6lb5jnSMnWcYBkeDzlvMU5KedXFXG8TThYhlclkoWWrKwpwZx3qvUkKhaU8c6f0V/hugnUi2LfbbtM711y/wf4IMsnQ1CESsUMZ6G4Ks2kVmtK+6qgBpRFfN/6x4Qer25cVyZWVlCz1ZDotYTK3CM4oWM0YeEtMjbF4c+t2DXN++lDLoUFb1ZpdlrcMpM83jcahHGgJdFJJxbhA8PWpVac5BS3j2qbD8R2VGCrHXbnv4sioUi7DBB+WpJRWYN1x+CTsKuPR3g8IRZTiQYFLOtzE79+o07KYnLhZpWkv3uOthpmoru4pqIbJcGUaHDl6cihQHHVsl5ePjFaWk8DFC3KvvlhTUIRmoQWT2jIFOOPMt4wP8OSI7qrAQPPdmhSzfMyyqyib+9cHkWpi4QcpZonoHnxT/uJCTutBCetsgg1cGTcGfarvtH4Z+DWB6BwRbAQJjpCBYqyKnmyMHbWBvimw==';const _IH='8e324b57936341fe2f05157489acb6d8c721d211a337c96abf8e38291530c666';let _src;

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
