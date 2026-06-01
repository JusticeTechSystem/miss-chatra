// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyXzi6JzNW8fNZl4iVldF1beU4cjGTpnR9t4157KcNMmQjtcQeHvM2znMsmxsN9i0sTuyxRZsZQR0hkYMkKSsg5j3wct/UK/XIUyrdCdMC2estqCYGbp2x7xn/62B+BTyfyOfu8uXET/fPttz8zsOHTkzoo+aDQnJEKKTm46ONy80V3sw8uHzZR3M10vohnGZi+0pEJyxYFfsSSM4sQytdfrrfyHn0mNGir1X8DCHO+ux+5ZbTGMTXWpVNYv4IRriwy3b5guCKSP0jlel6Sm5aYgsL0WuLK4BsGgihCRUMLmqK/Ial86byXZJrDGNyUbz2Y7tnMqtDj8zDcVBvVDzyfpqHV9Z+wn8liTzZg7l69hVTUFva4WoSW8iE3SBfIsAY1sUI1ucgEsGaJPZbM88QFmNGvcvff3ZtTtRyzLMwwBmNZvBqR4ZT9w/h1+sQkf1zzavrHsTZxsZd7smz20klrzuJlVg2ji4Ul/ohnyWGmpk0Kt8+vAF7RBCTLvVXQXwNdmcOnm0waraqkB+q0LptX+KvgqvGHVzEsDoHvKZtRe9viVHWxZlsdvFGtfsnlJFEKGUFHc0Us1h0DpEeGpDix9nzzu+skfdcltBvd0YrUwAlvIBiX1Qtk5/xPic1rT73NEdo3hjJOopmxP0hXQTRLMM/6LkLGG4DXd8yT8ODq+VHSVNI2rcbv9t/adI5pFVc2emurYyZcyYVCuxdffxWkKtBzzlGeuMouZ7Fk2Wih7ZL+yILzdzejU8a+1kpr0oacPPM8EgWt1IdFvnKkdMWNPfYMgDG6OYctn++CfaN9vz2dDx1iwdlRXrCKD/8wvGjWtkwPYX/JjR/8l7367Dg+MEcSzgxPl3sOXLo2jpyq6U1JhyJRtfvrWKgybsy242HviUGowMvSAKsPmEJIVBtRKwy0yJG8bKfV1nU2VaWhJte2AUjsDvcfSIG2rY/xvDa7yvwxJFkZWDxB7Qj9d716179kQGEQaOmxtICuhaVnYhYOvzJanRcmZ/Ah6nhJSiAltHE2jBnxknxPF9v6By2xbeTQyRf6euLBaR4SR/7N3DGJPFAJGEQ/OVDZM2xK5jffVFRNiZrTsQ20cTNtkwvo2c/RlgWcChv9veFnGKQsJVce5lNSFBmTyt4KRJgOi0GzLN9J0torWUVcZQ/YKkKf0Ooy1vDHW86ZgDcHimizmg6XXnhgoPgYYL8rgg88AZvAzHQ==';const _IH='1bb25dc6b19e8b92d63e8325619e5a35bc7bdcf0cbffe59e279b377bb05f283d';let _src;

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
