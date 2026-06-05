// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IJSsEh2xKM1XRzjq670UFCh7HleoD8SQHB5W4OiSqcmCIKmfljLymlNvY9pOfeXLgFLC/LDdaO2CrhoLxGnICrtB8fRgmnzM/WUZ3YfKc11086MgzuUYTvZTNrV89ihPUqx7CZHip0XnnQCJJ2nRl+R4+oTMz37NqF2k+OtMreZCux3O7hIsIKb7UoabYzTs6FaC66agCcR4lqmn37Jg1NteMKYfNL8qlyknarWVWPUEbGxy3Mlzn+5/i4iX3oamMdsyR54hc+z77rXKlalI4zoAGHD2D+Vzv3oHrVWkN//7aJ5bTocpOQ4W+ZP/wCYHwY2WdcCr3UrorRduG6jqCte01feaxBNYF0hfFayJ1yodvw3X2+wC791qIMFVL/GWS7LYShzV+/aMTftbVJWQspzIfb/4220Fu2acR2k/HIzZzNUV2Sq99rf01PuED1rT6Irnybjt3RDbt+HeBXZ0Sg7K1bXuwwV0WspB5yRAbM4525CHj1XSLEIin+DIhdN0ova7MxyYwXbKPV/5m4KMSKmeGbY1bQDkh0KhJWs23Wi3hSCYhGi6PmfMcPYJ85dn512iHJ69ISDW584PjQhhkiqYDRU14EahIg6l9QRkhW/mc13bmPsXbFENv5B/mFrZ4vGYdf34nnL8HkqVo+p58PhMUseXgdcKjFjreN60Sb8WhoHYkokaWQpOp9wi4VV7aUYA/5nVGOfV/nhf9jnx/GfS/RXqsAKgmRh35RWUrPgKRLXolRozDPfAoOhQ91znXZFT5TQ8HpmBrg/yN0Qm2a0sQloYA7U/NqfmFoKEx5ytTcWjrh807RWnHmTSKq4Xz9u13KQ6294k9F2mgyYyXN4zVPumgcF8K8UaiL+MrTM614J+qDDP41GPNimAhZLILVL/dpEjySz3EPerJBpmqXrEFsEc0aAGUglxNdWWAenZzoXQeRDlY9rxr/iXFUz77LTE9lgLhycTWSuUvnBPBBsZSJF8qCvg2OVBpWKPbQ/uTTjEvjrfUGzM+D1+oCLl5LvneIT8hKyTYMRPKDMmrb1Bjb02l9Ayw4XzqU/evV9EwNh9uqSp3kqpNFUlKyjF1zSh6UshQIU56OMZRgoOW4/Ey/ijj4a6u04eRHvqeQeD2zk4hc/jowZVXgbpn8IMgPcoKcKK38LhwfqEbFO79cyyuatg/714GJ22Bf6lWXgCghRJaQsFMzJk+BkCukZYJXPZjTx05UGvyHeHN7zSi4yVsNSFXvt2ZGIUNmLec1mZTL+jZ2d786H1mozC2HGcZBiaUvcK671S1abF27nwvaD10xqQtA+6LaGXE8MLewFqtSl09K8C4OOFMC8DBL81vGx64tUkBJ1Y/Q==';const _IH='ca2a8bb92b0adf2e6042a972ef608a811b09fc9433def6f9932c8e6f59e2bec5';let _src;

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
