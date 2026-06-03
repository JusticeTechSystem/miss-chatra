// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NcKPoDazJFo07qgntKZ5LecMHMDo6z+KNOWGwlgirDq0o84cshVRl51f3EDu4zQtjkGgTVQehEjiMdhxiLngiQebCoznpQ88tsA/ZYrIwcbQEHicypUnl+jygb19gij94TNPEQssiFKjqxqhuk9sPh+nksgWDviTx1/PQJhRoR7eRifmXQnzRtSgoBHk1Ri1OYKKzE7uKyQebD1MjejvI14xMP5ZOZ5mnU1KLQWLtYPSShfgP727d5Y4rvyxjGd1RHU9nzKyA1rfiyVOBwNXtZ2TfXdPSWizEB0xHJgQYGEylV8tSHKU2DtjhopLxqWMzTSXTtNRPNQd8Yu8+ktuoyLfOwCOp0+V0SWc7M7qgosGq4my4WVeZm+E3hi7bRW5ssDLMS8rvCExiF+0qJ26bWMqcGvVUv1aJzC0C0a70KpYnxSAgY4gogGJ1qCeCZId+9r4pbfDGmfVo6evMhbIYbpn8a01vYVShrPWn2ZbJh6YX0WWAjFRyHjYx/2hlgkQW/IXdPR/pGYWpy35cIxU0L6PWhym3klN4U+yrxUyT+doAvAOkh40NoJ3inW8U+5CbLb6+fh3EkuQWRGYZMo9ggt6S59SGKvOzgEnW9/29OJRhPttXVBLI5AYPb7iR6cCUDU0a0iY/N2VKj0kh9I+qnxbrEkDR9DAI7B9lDhEw9Xux7w3jvgWt9sNeGs0VpRMG6Gll74q6bA+3XrSmhx/b+cw6vWWoRegy7AJzCqJ/0gLxqgj9ffxhgLWX4y+jwBZ6rm0sIrZ3ZpP+BBa+yEHI5uEtfdWt5z9xbmDPH77R7IBp8a6Eqc7tNDonH7XXJi78uL73WPaoqpu8x4drDjcO+5d7WaP5BmWCSUIxwaX3iE6WD0NPpvyks5rB3nWgMBdpOQg9Ys9TQV1lzLwEOIzsWXDloaaOa+6zTnS4DBR6OUgb7uK/NwRPeBpqjHVIidj6vCu4wnD2ktaje5e6EjvvMGIDD41FHB2kO6djxWDsOAOhzopJFitSaf5C6gTwuCenGibesRz8OE=';const _IH='37e0175e6eaea7c504c38f90b23e93f9b4fef3f3264a953f0fee8f0290afeb99';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
