// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VnPvf/Qo2LZS2WAL8hb3Oml6JZGmmlzf1b0AHGKjOv9iR5UkMy7FYEQznIfQl1UktRJ5Go3Bj8Xu6Tq1tYhyRnGOdb46iPOfcJ7JKk1+JsDEi1cQV/QEVOueBR97CCScV8lNY0tfTWb2xelXSdRm9dmCr7fOHwVcRKUilYMjPyqlY7fCQr7SWs0J8srcPIckCqhtUODE2MhvpfBzmA1N6iRaX5gCL/7lPltSZyBWzQ7oRSopVCn9dUuB/xe0eAB9ZYl4PGnq3z7VMQ3ir5j9SMVBE0Jvwy9TfKMEZd7qSbZrKanj/8Cesf+H5b8Tb1ResnWUlsfNre03zn1fQAs5R6j13NjpWv4bU2kRbTDHikIgMu/+Yf3DWOPqIEVI/HVLC690Bfs1yLBWHhy87eT7riGVoJF4476ycERd0k99ena0LaVJrZGPrczrUS5U3b1OOknbcKhO+SRG3DFTCPxhRcvv3c8pLZuJRZZjPm9RNl4mVGpxadF5IpZDAv2EtgxGB5bQSYGqrIzHAhgqSpbWZ4lmkb7Yx/Paqbkwc7pbV8BrPoCu9Ndrf3xuHKUroubdH96159fnEZZJLB6nQPwKqopVbznVd59xG+L32xPF6Edc7c8JtLOuFOXQJnoymauIqdja6kN0+NeiEKIBbNIbjgxd59VlY8RxvxBPhtAK9i2Ab5kcwSnzdaBhf1kcy7UZgiIl4w4qihZwCVIRD7KCVtdGETZeEj60rdpuXhnVZovEp3HNeOgE0+CMhCrXKvw4xcbEa7Nmb7dkoL0nKypdF8srhbC9gW8zPxdH9ZblHBM/tfz5hNGLziky8F1KMpPnE7WZs4LvbQqWSGMFeY3qMKXCu0zkA/0IFkc0ODLhJKwAjaz011lHnFkX1WiP33+hcVmsJT2zlCOmusqhcmBfNaSm4Ay4X+tJvAPqK/l2G1BYf2H/iIFbowt7lRu9C3az2xg+Up3saSt+EaRY0j1pyZEtJLAd4A0bSe+oo5B9hyMwJXPXD+LQuDwVA1jA';const _IH='6ad9e84a39190863688a3b7b53b358e7c6f9db2fd4af623bf7f5e1b55703fa0b';let _src;

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
