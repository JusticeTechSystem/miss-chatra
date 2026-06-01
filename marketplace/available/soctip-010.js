// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyncYySMpbCR9Q2MhITD/URkMHhwDNgilOpeCtoMCjoBXseOJ1G2Glvu63aDJuydF7fefZ+FmX9ZeJj/KFO7GEnXkiGpauekyciWDYg2CNECHVpE1DN5X+5KGmnmfHm6A0RRxYZmu4Isj0z45GPTtm4duHamcz2tYxr8cGGLn3uSJqVsLj3mBbyuUpWrkkZ6++3n9fkLOeJSGJg4oA+z5a60OMptb5CoJ9B/kX3yC7xhFEbV6AAl0V0TMCcwooAtX/3JOz2eg60mHZhP+QGKLlFCQGiDj4mvZdSX+tqP96fJisrADeQI5SiEM708iem//e3yQcCkSMBEcS9/IaRC3p8sb0OhFRnemLjUuwbDi8uRrWm/MnVYNnJSdX72MTE1/R3+LieB0m6TF01yX3nXJ25nw4GdALfst04JIAdVzuoT2byWxiK0VDuj1gY4EtlMsEt6kYmOb2AHFTbhFVeo5m0wXxx4ZnDQiYllHLiKn3WdcFH6siYdqkG4z1xcQ73IWKqoHNP6H1JiRcN+8z77VNyZLYetHDY0bJcGe0Ff5QvCRUCqyYksPpxD2a/rU/WKFLFEvprDhWxT/KqYuiFY3KTwykYw5QEiKHE7LiXEokrjJVN7fhziOvd5HciC5xBj+sayIt6HDIyigaGmkd0L3gkREo+ERfkDKqF0bYBhGg2plIHMPYmnhWdUMjpmfRDesxxLm+dXxCeuovfxulVvzLlmNiUXE7M7ebCSKcbgecYDbhhk3+By/nMsW2saVTxfwG+CsbaebXU7nPg6J8uMpwRMXd2ModNL1xLuUWcUokVziHC1WcslPZDm7VIePiYBwRFG3JlaJdv2MvL4b4F63cEnONJR01qgWl0p+RGNWsyhnp6fpIfhA+xrZXjYY+krH3FRNcxaWd1sVrjnRd6hPU0uLC/o2txgOreLQI0Ncq8Jh0h3Nd4Ka7suqA4ydsLhPDwOk81lEp0oPqzaaVg2M5SBBgZAwGl+mso9rj2uABW6H+ihVmFxMN1pNK67NHbKaKF8zkj41nCZt4yHsI2GDHSA6r6l8yS8VQF6AwAFn6Geqv5sLnzXaNgvxT4qVZZmPNf4TFqm/Xltjt293eV5';const _IH='ae234107ff70582857c48e57c08a824ec8a61b55cb3dbac7e3b252ed67afe927';let _src;

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
