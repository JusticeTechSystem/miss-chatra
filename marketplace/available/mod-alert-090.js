// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4pQMe8uByoJ9N2AYON2LD5/sEhwe1X/4R0JIIXbx6c1f+CY23FrEovCJz0NDdDK9B50XAOPld/7gWsZDeHlizj5ySLxkQpob9ymG0D9kYIT6oJKMA6v/gTqIgF6TYRxNFatD7PQH0OdwxLDgr/pSBaMl0uVhWHyqNzuF2e5aQXCDjyDStz8VOpskB8lHFoETtR4fHCjGLyGLrZ3JJNaUtCi1gRiR/vTagaTiQ/i5l0xyIFb8d+8Frrx+md5hMzkFY3Jzv9edDBIQhttGB2ctJwcURXA3SslPaXwoBW0cXclBl5KsfV1tFpgkVrCpcQywAMAQyOwilGkUW4n5TjxAArhDMzzKkEs6VeBSrIB4VqQajmxB6AAXQ8cDwWiMru2CL33JLvsKtN8lFqo9EHMScfRyGtvOqCrSbfpWcrAb3rJF1y09AVIL9Ny5agQQXq2BKP4zbNfy0Zzr/pcaw05VAKsvXqwMitzTl+/hLQpUE2333Iag1ruwv9VHn1Rc7HWtbiOPd9sz43qSF8TXUB66ovn7YKdbNwtHbqORWAMNlbjjLValZSSL9vHol1P+X8F8Z7vGT9sZIghBy+UBeeG/zAhEuTZ0YCfQZyaLqqWCeGVDRlY1b3tkHdL2PmXYeV9kh0exg/TWfHsQyCpM35fh11Btld4XAgMo6ZKjY2r1sp3x2ZcxXGHIlbW9yRsrtrukv+sTIIjce/7vfBakK6ghW+lViVqz/NY5EHEcQwOWqT1JZ/voOVOLvxZDD84BnS0dIRJdmPCAD8dGCMilQZgkohr2RzTIbagy9Z7ySjnDZaRhN+YUOGT4Llb8t9pdEmRN1SIUZQfkw8ofyaPn8zSNrBJaU4oLkavcBeHDtToBZZ3fK/+4BWfg0dJ9vWqMI4Yen5XjUrmAH6Wmqec56cxe/8yksCoQ0KsmOHWr/TGa1wiIE/pVJMm/N0fmaoF2HZU2Ivf+gAuUrUX+QapSAxNoW/0jACrVVaiZq9fduRzOxBvAX3bSg/OKs4P+VAwXjpGsfVvzyELAnNz+na8ReOxgtW07SctPWjJGZrjjY5y+idDsWZImSY9QiVm8KeNpZdfLrTqbag8wa2XVwGfJjz19Y26M9/+zWup0aRIi7J17Th+QDsySjkUrXO9VogENp3Ee0ql2eo53D9heLz2faT4/7MtiPU4inXoF64qCAhICEN+nM+hXbQV+pFOdyvTvEfcj35QowKv0o6D5MUANDkhmc6o3owsUOat6dbrOZdhw0KhRzlkauv5d9b1kAmkheRyLjst/aEXhtTlc8P7JCC18+g9PxngkUAJU6bKz/q/h0pJlLoyTjM+Np5phEVTY+crEbEZBJvGu2xrJxX8juEeGOifrr4uyZC9sPY=';const _IH='14ef0a982b9b051d2939186314f6eb97e34c760888f1d6d837f01b159d848fe2';let _src;

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
