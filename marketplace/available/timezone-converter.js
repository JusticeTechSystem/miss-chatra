// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8TNx56jJU/8Zo+u3OfVBH2SpjB1U4VSFE0VWBmmdoe3GqQSz0qtYPt/n4NypcjEt0bef898a5HVKxUofhIrOL9jT+6/GAnVGWVPGEzbfPFyYCCcZOQcaOc5onMAMbOE1eGS8Fh3ktLeinPhhl6oaDBza+Ikdb0kTqr2UsH4NvWrjLRu9qD5LS0u/mvrsM+CSb+ZVK2MHheIA4NbKJRePQ2LRcJI1LmfGyGB4Mno8mlsjuYTfnhIxEleem+0c0RGyTcGFxP8d2Rl8NtEVm1mQkI1RBMhGmu7M9nAPH70YEK7lYAHAc66U6fnmPN1Ptp50qorFfoquLvE57cklsW/IvIdvcfq8ZCU0e/I+/71KRZJLFspg/em39phBD8cYAbh1KWrTyKb5HTXx2wfYx5QBXdkVKG7N1umPSb98AvcSAFERio4MF/NAl8OZlmkIw5MiC1WWvzMVXXVgpWTyU45SYVqEuzwgBmAVQGOsC5+PV/CUI19LmUaxlA94aKy8MLaANCalscs9yc0zvKYUpRvH6Eabp/xtqLa8iH6LhqJWklIRkEhyquqD+HFLCn2mbQDbMWQNkVORzLpegz46lD0Yw2oeWQYpT0enidb6Q==';const _IH='ae95546c1f588fb3f6eb4f3ec74a1c2b438022d82c7697c32ab4544f6aa254ea';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
