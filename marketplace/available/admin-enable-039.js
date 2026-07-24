// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQmnELxjp7TNPzQXZXCYzF9fv61ZBUsRpY4WVhSMKCn8w5I1Fo046evrH0p0wfRKJO+bTO7B6r5avFEy5cKciuT2EQNdESM3u6K9rVl9koAwAqsooarY46XXvfhT7SzlMr/sj+DEXjqIzD1y62IWRaTO24beEyIUfP+ZFAgp058Io4PQ3+nxpaEezgbbJsWPUeQX0Bama7XVe6vc3QJ5Da+igz6xR2rzh0Z/XJ2NAdxSsCBv6p++N/JSfnAbeeuTxo6wT67YuhFlLjNvUHGEYSbZC2cihbbxSPZKdY9tyyydcabxXo1ROUzNKuCaHMh9ak6jDeMfUmypwUumLBwhGi6t7Bl+HdwNzKAQGSLXxMVOU1lW8bOT9ZK1XuHenj31Wpz/7wfg4ol4NN4M62Gc1TPM1T6ppBm2jJ8zs/ZSFTgaYtLWWrsHobiT+1Bh2QuuMm01lQVZfI00g/mn564wFnYH5zKRRvNKKScjkCBEZHHBi4ad4Vtw3CTzHpS0JLBm7zcf3JK+4dHdHARN07h9z9Ht8Kncf01WKubqELYFubTwgS1SRr8dc4corfAdMK+kTEpQC2zbM1XtJ1+2+xkMwcIO/18MLcv3Ep2ZMxoEviddfCYgxPK3y6ZExcbuxS5cEbpd777HJLLAFpq//gqFnZt4uMbzjKpUhpb/b31Wn7fdXEu3SKOfJVRGCr7y3Dw//rgjppmXqrIuJnSRKKaXPPGrLsNdZ89Vq+hhjoQucFKtGKDuflKi9cXu95ZxBYHUp5z7UF3I8Bw1Sv68sLd+Xqxq8Doi0o838nxG1izyzomZipdB8xPB9gjeQnTMsftqKQ3tLpV7wy7/rlH1sGw/X0HD7mVquHjrZBgEWOVdvFaov7gp7JNxt1NASAzdXHOXP7PdEbyO2ZXRwzTsh5+Ckk9ucIkhsTU0/ectIPF2/s2o7xd8dv/4sgRHpoqF3SeTE5gJn+78niPr9/aHZIM5mUwbD1z1iiSrWsidbOTXfWzGL1GTIbKe1BL8cZ5xS0=';const _IH='3d51ad7eb483afdaafa9387528f52201d5f58de8daee223525f9f7321e4490aa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
