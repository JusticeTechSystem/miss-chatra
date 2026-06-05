// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LqvzjGveZjAtFaDYWzvkLtO+A03pxPsjizO6JNo/DogkwTRjSFz++flTn0XHB9c19BLhhJz0+I9QKb6fobfUK9toRKc5/hZv7UtwaxxB++7yWTHjrw0GQOpdx33sddvORQPsFavRnuaOyuEVzkOUZV76v5LO5pnUF2dzsJEsQU3byAntUolMsOiFfqXHcbExQDGvO/njM7zXOr0jjHB+axp92vlysj3YSkciA3UX1bbqXgPmDf3fglpVCWn+bg3XE18LpMrCDU+fP1zaONz/AwPegfDSDUZrYshB8ZSU3+ZF5tsK8nMCC9uF1Ck+fXcs45hcN2RZVbdz4ueMR3RT/QYPamCJhWsAHqJgYXuwA2TUTRjKzSDmgW4WLc6YjmjeqJB9e0Jf9A0OCOAApbauiDOcguwicWpL6+0vHbnUNsOGvpoNNRTS8j4grMVMM2vKxjmLXD2E8dc9Vy1jho0Fd4Y5ysQlaIRvcfga0HFHoEEGXyBEpZoLaph55euZk1pqTNkeloVsIWewZzFH0lwOhWGvd81jzNQvHASpk2PsqmLclF2RWdCA6fI4DpIZeBdIN7VxIIfx32+FCDNiySkIISIec5adQNUxyZqhj7CT91RwxIGjVpkISOi+bBPSfw8MUfrDOTnpnDiCu2nAIpbqnKa8Hsbjv/r0eYYPShxo3VCfO0zuLiJeRtn8bYBh6XeUBQMqXAaZNL5l3xYs+GV2rUNSPnvvCmPZZYyeOz6Oylql17I9v6yFYwniSvKhLXH/ONUP3V4E/lXtoGZ/b2MEkcaKwe7O5tp6PmEkEpSzP2ANVAso2gNc1DcREDXopu/OA89dF+XoPEoF2U3Z86Iff5U4+ZMY/0XIj5bV/EjYp73ocnQ+Hz6ZM+ZmXV1E1Ed6fqwAGiWrFTc9wQlRram9X2QUk+RmpkKL1Wk52+Qu9Anm9nHbknVf1HPX0c6R1K9GTqwPD2eIWSDblrmZtUTd4ALvvGLdmpkVd2Z6aQwnvALilMX4k+uNvxHvGTIwa8QcWPSkOKDE1+3jWxkfEinr1vj74DARCgO+Pe6+4mbo3H9z+B2/Qf86Dcu2lb6zIOE0bH+aJNSTyR2WV0g845polL0vurQUtaUet3I5RrpeM2noMDmKQ3Ws2X6sMT+yp64Xi/wfVHeMszsKxaXoESxVbPo9jE0VolQDaHRpxFTvep3Ky7I7s3W2zhY+JTi8fO+EC4oY';const _IH='20e70c2310f3eef2519559bd58d8af0a38af363899b9aef4c9d9e2f2ecc8d46e';let _src;

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
