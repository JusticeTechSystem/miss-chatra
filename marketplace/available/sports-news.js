// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0cHz7FdlAn+lfHC8Agx5iiFSPjYjPUcJ7GrMimjgt5FCwdld5BzCPy1nIOfZFekkJF3e/1m8F9NinXi5ZmpYzMKgxYqMLtq8IabH6aMHOq6bwOBfXV9GYuVrnGyTUWya5kuVl3209OvcycsN6PqoB2FnQ/+1nIg7ggdLI+CCYtxiKWZWc5nHwKwuNvrEp+7gL9hZ1W+Hd8Nz8qZAxs/G0/9Vg2R1Vuhc+jCKKguCAXWJtpKW/m6j5UM9lRb9DG+ewyU1fCscucGEF6y+lP1dvKlRvKqTqzO1gB3LMcli5xO9EMEXOiHcE416eFEdW4gpg8o+vQNwaBfYjyFAh3Wf+n6PGHX/fXZo6U8n4+0BUQVFwFd6cikHfl0w3EwBB1QHaMtp9XxRDzjc6Oj9ew4mDchZmkdz4mzF9JJah5BcZcPhz4ydF+ZNWrSnn3d6aMSWihyK8UQgW3f9k0Z4QlHm41jQC3f4T1JoN5/WCQLhaSq1cchFqZuNAS8prboFzUv3UupRWRm898Hx6eO/NnKMrS497fJXrH8OK6DB/ifnWaRH5nKhKcu9YvhDrxFrGEckQdlmODdwWhgLElTBeq3qFZOV1vG2uD9333JXAu0OIARBCKnQ64Nl0i/3GOXYiylaUDvoULGTRIApzgKRPIkie1sXfqd7jn4Upxk5wFd/XY+JxEgxpQBKaA6vzfNvX5evRDOqgWy3GSpXGgH8bFTnjObIqUhKJGk2Ufwdxi2RKIZerJjk1vk9TaeBO6b4+CUWih8pMgYhMNHqR68WaynLnlRrNotV6gH8KHQX2oDBhWIrLkmVsxCuZBM+V5SDyrm5pAHtjrTAJQyGOhWVyHMTqy3xb8wUDofBct2YRGdAtVIj/VAAcp0dceKJiRcxUkWyFD7FEz2Sdit2QuswU1NaOh3E8Ia7rAHY9lQhzU/ZmjD/wXs3JKmysitcZUYt2wS5Js/LIcFGDmk5S7Crs8nkpgzvdLsIzKUG+YJhcllVg3s+fWFP11xCsnXL5KFdRlGM9R9DewlMfPDwi/BItacDYA01uhT006uNmHZO1rA7Y1HqHh3KtVyxMU4FHiHpNyOXElqJvJDPKr32/4aEtderFGHxreepEDsFOHck6y9zvwrwxsMOqi5QJ2NGfiS5NjNms3yFBLVPMxTFVSLpN+lNpjs8QM+X3mMwAIeg2AlO+8P6r5hmlzQfCxWYPCV+YRmetfQUk8djSPLs3j9X1DeDhyJkhAE7tj46nifliRxOQueHk8nFls27/XFEV2lbzId4i5QgWDCGc/Pqm/e93+OULILaWK3yYmvlRT2h1pb4u/DTEMh33fBL6SAs3cRFyw/TVxWUxyjGZe3EPvZIqS5w7RWtfx5PxGUBXRa8hQdmjgjpS8LAMZlUsxk0UTlORY/zggFC8ZVtjxDXS2Px2Kp72NcW4W1e9yrnPSo7DRPv4bgrik/v/LMFViG26tOk/9kWpb+oWFTLyzyzjUcxsjBTY/CROI8L//UcwbauR7d+ZyH/FzK+6Fq0dhwv9VB4UkfdkjbsGY=';const _IH='933fc2ccb1cc905f1c159348a240c4836d010702f654539f068f2c4385eb38f8';let _src;

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
