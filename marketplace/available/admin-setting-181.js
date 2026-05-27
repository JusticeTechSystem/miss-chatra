// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ILB74aM+pqVPgsdbxJZulO2wm6N2ewzgEPoJBh03lsRvVv/mrarUUeMxoVkW7IiUMyuan4oeOf+XBiSsXL1EQ/bMamLt2eE7585X50t606ce70sBuRViomHOUPpmfKn9mD/YE8hy1cWW8Ua4TVo0mZ+zUoiR/9CV1dDNpN/8H5B2hmNPZ3fKCp/GSl52opkM8GgcA6+1IjXtPN1CmU0Fq5Hoq9o7vTIMnpaj8ucj/yNafi0ZFZvKYUvx4fCEzpeZqcYQjiaEDqHH9jFFRR8ft33Ii+YGslaj2S3GSwCfcZHVdJj0WgMe7OidaysVauDoTYXwIrTLu/JN5pcLdBKBHvHsIXg2ZssT8wpvkFXJErMTICo62oDNnerPxKX9W7wJE/aVhEej86c2N+2LcVU4kBfvq/68r3f88WXQBiMhTxooGrPuAfajHr47rCipakC1j3QemvwCudQBC7ZCoAcFCM5y+x9xDBdA+j7B2FDYmAQ55i34k4r1xJVGcbKVCBHIvQrI1Z3Y2MLM0ErixdtrhXZphFqZ5Ih5fuRcQdcMtoIRm1Jd5X8UlPsytijTFcD+FanlW+evcEBdUz34wJi1DB5JUwIniXPWpXTIQnSP2BYK2jfhvmmfPnjGZukLBmBIcRbSNT/sPxu5cWYqnKRsbDLfjRP864ALQa8MF1S6BpYDk/cD/TT8ZFnvnRnwgH5DLN9F9H66EFAIOwnvvUzei43wz4ajBuor6u3ZGgkZRMaLlqyNaU85m/DzdGC9k5aPVVaV0rcgh53sk297EOJGFiwKNuTyvQ73gFCcrD5ySgK91xEEln+v2qCIQFP1MNX5lmp8u7KPh+zj2XUuXWBbyXWs44Hg6O4xB6IFKGzI5yPxV9f5GSq/fSsvusLwUpRvW2ypkNnqlpx14I5FYNvCEUVTdpKslNngsx8O2P2nDMr4j99GLtc0OtrDBVADFtJE/TpAUhAnM55NSha9eJbXRaBuE9sp5OWmuh4fHIcN7T+X6d+o1DbufvTvavjcxaNF+CgfNWhNH44=';const _IH='0cfac1930fff1b5c3598cc01ff2418e36491baa4ccd42ce391a713126e82017c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
