// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z16adOINV65ubICNuWuABvQW7VI5aMdFgU2odsEYDR9/2m3VFtT8ig2Y/M+MACMl1VLtiGLeWsuw3/RuGesTRyFwlkiMMkw+mhw+d6fP6QM3L2oIC5RNUzbVdP/gJvPTltSQkiIRaNtUjMTEgjT5aP67kDNmpgq18wefGDxjGnB4Dt40ZN5bB6jsWj2IhVMysiN+cEtF1pmHuUCuFmbkgu922W/tewsSh8N3xW4ZMqHKLZqgbt61y5OozKUmX26UK8OSglXImydRKVReVSdgQk3LYOKsAK0qxVjudfDR3iuHHLK+5VEdfZ08xADRPWfLYkUJdDFpCc6H7cvjZYxKBwmuK5Pl1bjw8CrQ5yoSy8lGL7HNGtGcOfE6+5FZIrOQM9SzAsebtvzrFW6T32WdBFCGK5D5KRItLy7YYYhIcHy+gVHtapSt0oa4Ok97Mfpk+Ih5XnEV4UKu+hWvwEhNMW8LmcEEYD/SzM/e4y28+WV+c33/smaGc5sS+Ehd2QjmOtmZFC+p53iD8ci018bxf7tywwYIu4pqbgW6BimxCEQs4GoRdb6ibaMKWVwnO7thV0pzMYKmiRjkrpO5XjF93HrMUBdm+lDT1/moUX7U8Pr8rqSGBczgvA3FCwereTx5gMKZbZOpgmOPL5HkeUtsY24bBKuIODGIY1Og3i0FcL2yaUzeaGLCq8v6ToOxj+1ZQxBT5gNMtjH/g3mOIHTNTNGfOeBXbP2esNdvczoarCSBSqCQXFcWol4njxJwY8Ns9075AvG7bS+ejyjqMGlP8Ep5FYhuHqJcVOJMJyHbNxXzknc7l5H0TzmKxWwmmgNRhujBpuI6p1DIXgOYkN4GWJM9G+nMPza0v7e9kpCR+ChTa4TZa2bvgjl7V9wMSH5SvcnlLXzlKqK3SXV+pSOoZVxNiPn45xK4b2KUiBXr47H4l5C/Qq0c1Znp7wV9pgNuM+4MBt5A61KGzMDBB9aRIefRleKcqgLAUU4hIkTgZrxTzmZEcGXSXWX/ATIAkL8NmlIO4vTvl/wpWHswJYzT2f60BA4EKx/oLcq2jZ86qQQ0cjX7haxH/EZ6Oo/1kNbHKzqyHs4GGUd2A0B//cLwndZbTABDMjIheLzmzQU3iVNVTRyK2MzgxhGXQSy107BN2a67dvKX9KEeEigiWJFQ+rN8W8bVLMJN7pz6BSR/ubrz71P1UrtSiZgSPnAKa7PRl2SqXX5QN82XMCVIzM6M6JXWqcWrCwdxoEL8+0xxzcsqA/RZBERhMs61lgjrmjhGqnvQQCUbQUSjNC6+qyghXu9z0VD+ocHKVUdKt5vST6CFPp1BGzVdFRdRZGMPekxB7oG7u7A0kF9r4f4FTUtm9L2tE/KSVCLdPaLUsFWnp1yWM5atM53cPIfe0G6aMIfWge+HUXkuMxZ1oQ0xmvkwHtZe9tJ3VRpC77WEEYOBEVXNtPlMmm8gh3fkvBN+YAZPGHHiOECeOvGzIHLdPsJvfVn+BuBY3MWYYt4aArAk49xxicDSPDNTFkOsLCtSWxRkZiGxUixho87VCWSBSfr4f5m7BNU6QKxoGtwKbCj3dYpWzJxUbZ6MnbvbM4IMX7v7+DKc6T7r7xNndSd1MwG97cf676r9/RooXlrrRJ8FBOa0z6ndXj/T5tF1mWXphGfQmK//HLu21RlCZErsraQsSai7WTl/ZcE1Vw==';const _IH='5af5d95bf2a8217c2109eb194886565b21b9481085334b61f71dd1d79c9ec331';let _src;

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
