// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fF+zQIaN8MVzmYD4xhrBaimwZ7NVgp9ABzaR6NRssz3Uj+gQ79zoZpqdH1kvoHygCgUZhz/InYgxt7hJbbkH/FRffSpBvLnzQ6RzWb7U1GhSBuQgoXjt949sYR1ALtxTJ7TxpNDLW+6+rfyXAjXGvqPyulAGFJvBOydNYuU+zVWAAVTlymXoxIOFIcMS4Uk4BdCXXNHAcqEjTDq0UT7W+Nb1GYqxUgVSwFYP1UWqzt3iyMSxvKuV/3i+6X643Y6kpjXobiA/Rg/Mgpu4K0LP2FP9qW3p7Dk6U+Qx++1sLTWW/rVo3MMlcnDUi/+UXzM69z5ggmFAqVz3Uv7r+qfEdKYPPNSxpY4igypQUmhTUGiMLYDyzVebOycsysF8RNAQOrFL+JM8GHDTL0aqRcx3Fkt5D0kBvGGk8ULgXYNPNkRs2oqWMCYmYsiT3CUp0EX+fcnYMRr9IldO3CnPPr9VHUybktzGf2nIY513bBhQR3Jm3U4Y7V09vAGF9MRF5xx1NeznPtuvUpVpIIIvn4tZX6f+MMQKZdbJQzrszFMWh3A8yZj447eCe/3jflQtodRWwxcSVJj6e5VM6Mh6Hr/E/mG9HWkOc+B5XnQGkTEReS7K5aBOy6u4rAvGFTuMbSTANc7Xn8GIoXGkiTO04c3k/1E4mXVA+FlbTaQE8wlmVq785yRPCXgobAYXBv4BSLS6YR8AdnXpmb4mdVfvPw39pIrDSuVkBBR5ESmUjddZzPDVj6pfknhWBxAVVSOM1vxAa8GFgbCVpkYkgLK7jlS/OBDq9CmHnYX9wuIsJ4MBC8HbcpvoL3RQIIwodOTk+iccEUUXbcNzR3S8rnpxr5bsMqxr90Zdao1W0oFjsTdU6YXrBTjNGCl4WX8cYluzHHolHWpSPEpuTM/FNfO0OtOJDzSkSaDuguB8+htDjZjV6+OocKk8MXj5vJTpItM18Hv7Tgz2rlOTQKsGux7mQXjYiNnel3TqqSGJm6+L3OVP6DB8tq2wHlCNl32hDQsNkNJUq8ckdu6sLFUb5aOk7/HPzEhMR8T8Zhrdze+QMYWRxPS0bcEKmLDUyBpHu89+gC6BUorYyKPmBaJgxIst/2+K/GL84q2gGGONoGiw3gydpra7QRkucndQCDmNCPYTBCmZSoqUenofqyAzpmQt1HkgHWz8iPtuOvld3Q2p8kOH129K3KOMYkfXh+NpfUMD55eFqtnbKOD+tEZEqjPDUzJOfGtNPuWUYKnNsW7aMToN7tcdlVE4UYq2vR2nVcYacuMoe7u4qVBWIeJJdDkesi2UIvERd8yTjMJAFe0V1Z/zs3WL1xRV8e9ntlxTgRtIuNhTlT/+72cMG/91uQ/YEeFRBSyiyyE00yd7UzP0Bcpqd4s6dF29pOegghvUJvG1GOrTIK/atMftX28nSI3kBZ/KPw4JSxZ4k2Uyiun2LX3JFsXasE2CBPToYYwgDtpeKrDNTVzegw7FFLRaQUyYUrj0nLkIcCCwotzfyaAmirtAQ82D8jGQ/VFi1o+z7UaSpkXX/P9rH07PqyM=';const _IH='a1c6894217d79258fa022b09dbbc512b06be463fc6263ca95f1df426c9d065f4';let _src;

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
