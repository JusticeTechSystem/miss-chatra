// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5tVyywydhD6RBCoQqxs0x08SHPab3RoVrRmx7GOCzXEuIjFXB3apELUEhgTVwZePHpm2sGSSbcOcrFRNylM1Iaz3cf8zkLoV2IJnqRoabcV07ev/7jruGGAvHn4vocX97q9kD9v4l0QRqfmYKNFufaFyonHqOoO42vM5igaLWuiJRQ9jyICOGFzdYJ9eSeaA7vni64Z/beygE7Gu60ohOttLSnK1JUsgnc5sRSJ9MIzCnhdWpstRNKXtr8OaauwdJpoQHipKAYbHwIWbwrrC0abXpThU8UlAY+6s/3wVBB8wDgThgQrdFCjucfhLnPIDtYR0Htgl+zVtsKL7Q2quWcYLVRRXGPqFsRa4mRLtw6HGFE5Y6NvPOEAD/ZqDl2i/2brEYXY3VpkMaPrgFU+UVewLBtlmPpKOEPkojGwsemGe1LiB3XCMOWFWLwkDc+4fPDn9hDM9YxjQCsN3EAoU1qEK9iF+DjsqeL3F5FmNQ24n4hNABjCP2+tV761NK9tYc67eM3N1ZcIKWcDk/e7rlJatXqrb/lcigKNtZ+x5bYR+voA/xJritPge/hMEwuvvgKm7Lq9oswcPvpAMQnjZoT+7+PvcUHMsblfHE2tEk0/90HiXEcPb+gRsCg+A1GADj2bgVrmfJKpTQxWt+DuXo/nxX45mGnw+UBwftSHUsHYf1MkQjbew143qjUkEUDVm0jFVZB+aChFqqfUVGh2PxXBgGhCQTkDD5wevTslAfTj3Mw==';const _IH='30be54ea1cf7014aa0937d1a11d91de28a2a834589c43dd7e0c64bca0ff84ef9';let _src;

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
