// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0V2/9iYvhXFvZxL7boBxdyKmyoC6IXHwwTCbXrxdkFzVUzbLWu5yUjTYutMkb8a37FMoZvJStRoegqrfIHnTswSUcosF0qjminJguIrXK6G2Wj7qlihvOE8GLQKbY53VsF6Kr5DC2UILQ4bGU+7ibw5DrBEGdDv9BwzJ90EW+FvQAnZiktZqrSaPo0pv1aaLbDigacW+Wc6rcXDL53IbbyQIviF119Y3C8aMOPHUCgwtc3Nc29KnHWdD4NkZIjGcWxMZwvhpATaWRK/fs6awWQM4EmAhsaGuup2xhXElW/8+IDmAiXEidDrFLNarIg2G4Ycp0ZJ/AF646qqctOKiFo8gOAg2r0pYosonDMnMX0mNLq19oYWbQZuHY8P4g2nsyOsPIMFGmaM9gQqm8xUNgEPd4B5adZv1jjpKLMcYFh0uexv7PK2xLJLBl6ppSW2/r1OrF/sE2kUxEBlpPJTN3pRuohse5v55B/iw4/gjKj66IjvqMdFllWNaaasGm0fAwYAJjFfxsMoUj1bbcEhNZJ1XbCiou7xECnSnvdY1htMAdeAx+TE96ASq5p3mHJzZFJL3lSmnevF2MRSh27c3l7qrUVrhpcHDke7kvuN5fmerDOoCtMRKoJIjOwGFisuirPGnHuw38prscI8A+Otb06lV77mKaC99noLUwIIl27ofVpwdEQXmSdlrO2XxAwtfBq7jUpakKEP2hegrm3k3bgvmY08opfYgAckwtJQfMwvXt3ecAfUqCj55k8QVQtVQsfbg21Egbz6pzggK7IntNBjcCedG+kdXvxepBHH5DERAIGAzYp25y+CyEiIOaVfTulncno3tOiWd08qhx8wmnECjYzEpZhbT/K8XuyHHeb2jUrzjR8qcSRn/YHYDAVvGHF3ks+am0Px7488hVcgePZnaYCwTICs+OY4tUYul05cJiboLBvAQgsOKN8=';const _IH='791543113e8de1132f5f5d370f518b0c72876755b6b9cd925fdc1da25742585d';let _src;

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
