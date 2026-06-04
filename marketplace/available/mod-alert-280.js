// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zRVnge0XxBPd9U+QNYOeDQfdqKTbGWGfpbfo7ZX5Z68G8m0BR5S2amdy9zY5x6YcODePBZl97/hfNeWbi9hHWX/8CpJdJsbZqrgyDvA/cL3vUTt/J2cUoFCNYeaUKEel+gBI+zZ7dEe6dHlS8OYCLL3WOJ+Wu2N0lDbU0+dAUAiukA2tyKjsMQR3o2j6vrbjLjpLlzfWAPT7oQsf4DOyJFDEatAxD6GUpaISoj6DpVn25cRX2KA5WeITCg7JfI3RXa+ZjDn56juThjksTsjZtLO3oQSYTxW7nVfd4Py4g4dtGQ3eKsNqqNeH5p2oPiG2u0nF6/2e/OAxoUQcVC/1euo69kVTJQmvWNSbb1uZKf/JfRYPp2EKyqdq/DwSxGse/M41ABEeex9bgJF264PyXh+Asr+joLO0ZxXVWupSIN/AlL2qAkHse4KGbzysvEcO3STQFHZuEuRTEYbZ+/NxH75qH9hhH4grO45HqrbgMHGvHzUi72I5BM9hkRS2y39BvbHk3sJb3hx4oQGmS5f9eH7QRhmlMY9UAcM7R1ksgse5pE2q7VN8O3kDLKK4A2dIAdGPOG3uA4a8mHHAonk5/wuaoOoN2N3c9HUQEsHAxyQ1LRge613NSchPltQajNLLkntwr23wc8dY9L0SAhKkvqkUv8pZZZb/9+l736PbQHtD4R+xVUrbuFqG8K7bdjEFnfIvBA3JhR2lSGV4x+VCLE+TDTJ0z/WPqL9jYknRtpCC+glv4PgPw/lJqyw6VBSQKIcLW1qdc6DdGbxn7pBk3vceG9AfmqJLWYcn/CatR9SQDhsr7KPEEdR3qakuswDv3fC07wcR6YRu+5r/A00InINS8cbFRfZ7PBtB10B2j/+pAgIKycShR11cN/YMKWa2DTUN5z4lFYhRVvrDcbY6HPbquOwqGhLIwm7X49mP7DD02d//gUqrUoTDCsZQRJJRS3J3BrJr8loI62M0mla5TSREQFE2ExMnWKEOk5PjO+YpFyljnFQoWBCiHgp5IqhW7hJ4hDP7skfM3twTVnGUXw4t1mvxsNRNXaPxt7EIKrFVd/+U5wY4MGGcJBRE31bBBseO6WDBbkJOQmx90Bywx9xcykXAXFcFk69Wti6rK/f/3b0g793ovAtKgbuAVRDTJeVECtj3Z70Z7nZ0zIvm93VNJPLJYictDLyDP8XhMdSTiZ960V+W4NB0wbioxuOvGZWB/bDqmjtZia22Kw9a0TMApiW6noaLEpu5Q4UJ3u9cATnTPkgXYR032xw2sTdbsqFuuciU72xsRpKWzqGCq4Zer38drtQtens3EaDap97nEpJxp3Kfea8+JgAjWAk3dzn6sr3U2cUiXHoJUEhgLLRb0baML/HHyOPI/xLq';const _IH='910be72e147cb8b77e57b17bf1137449e9a33f3e253d78137f4489200d16ee30';let _src;

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
