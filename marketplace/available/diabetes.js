// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K1dUvgsUE08aCmHySt5PKnj1BhlobwdZ+uqwTsGjIXOIb5WkRbKcmJ36on2dshREUIDqWZtX+J1sFEihPM/EEt33fuIKdLC1x0gySN9LsFXAMIrmeYdGbKMp975cT4NXra1ZG87ni/69iP1VbmbOt71LZQuVEJ2C5AT/urAEpU5ECCZsqOXxk16kh78sB+m2lK0rp+C48ew3JTe19xXwxNqtfMtpz79w10Ce/FN2v3W66bXloOCLiYOFGn7kZ+t1xSx0p4rCN4o0qlAKzmowHsTxNUEOPrBsg1IcEvv1f5+XfyqxREhyrghdmHBeCPAJ6EGCJ+je323xC2ngOFoydDn6CR8LHCo9tEhGTCe3W2tdWBwB576O75ev1WYbJ5XbxbQnhe++CzM7rfJ/M6LJGdcXqgF2I+UqGEJXowmkZPBZEr7CD0mV/yTx3+jNd4hB4yBLKUsOt24I/r5eyoeJXLCddmViK8rt+h0Q8zB9Vx3uTI3Wz9miw425xUj0avZT0Ky3K+rB1WK9BBY5WG9rCI/QXX+EcARpKFprWpaba1cYcnzo9uDLL9cpPfGxaq4UJuW07PG01diFJE2slh0L/zjbsTI+wQmPIyG7BQIdZf4W9xoNGzyFAmc05XAac8UxHrlI3onS+jLp/UsSZQzYz4KOFJ4pSRfyfbiRpco9fAZq12OzSsDjyZildqwlodEqZ/YlkWOxncHccmCL6qiU9bIAaslv8yn5cb01Jbf3d1POLEVd3l8Y7OAbAo946o6wBTsChuAi3B4TPgqkRFy1vmNIud+RVH+uUvNf1LSqoEmXNg2dKjFSOQ9ts3WeSS2xYlZgnrkqFsZbz8MpsXTfzQBAs4fXE5RnRPGP0rp6N7fXR5sB2KTi9h1dPpLWrR8DQ9Y8STcDwLc8rZuuh/aNFcsUhkTEpbG19FZWpPVaLwQDB275XShAyKh1+Yf+TUC/ib46NZQreScc2s7hJDa7CyrNLrIQUnuPa3UZXhshcGiiGmsVCfs52LcTMc6B+SgXoQVVAFzm1WipXNxlPajBDPdwvmT2AXCdxmBzdWMKDaUTblaGXAVGjAJKX57a7vExuRmgrP2fmLJBkUHyYxCHhZiM3vc555Rinw9ovQ/Zkc1WyRA5RlqGswol3br2TMy9/HTPLvyRnf4krv31MKX+hSlquhBfSURxqG4QOEXZv85mWcqsX0TMBm044uaBT1jaL/Y=';const _IH='75d12984cdd4bfd26c9cb2fa773048fb0ef6b06daf4b54480200e3be12bec151';let _src;

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
