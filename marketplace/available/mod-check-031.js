// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VFsx7MS5FgQVpMNelqe4aWh0/mJVPrttnKVZLvY9DB9UKKEuiHnqs2/RtLlqRhZpSF1a9XocaGSBYlbAwa71PVs9XIi/SbJxsYZQ4jd+l3fHlUBDmgykcf5zg9hagPHlhHZQn1Vl447zi7WX+nu7XaZfToKLptGzlEP9+862PAVvNLYwGBptDIhZsS3gE2wIShq+23T+x73MK9VI0l4mxWEIpbGLX2W0GL2CAhs+S9DRulxFS+zjey1a7jnVBL10hyUZuG+k/VYZKOF5ZoNN1/Z4m1mex1F0NIyylJP+baAJm/gwHJ4ahkoeyigloVOOTv131aDAonzaG2HU3ILJzp9VTeBelRqmT6kszI0pM7eyiXL8tUvULU4nZG2wb0INU58i+q1qqRkedumgGCTcHSsoP5+OMT7mShUGLjBMj/RCB3uON3+ySPtgD9UWJV4yp+XgEPZSgOPeObpOzjxNUH0F5K8x0x7NpxfAdFCJg4KK/kSvGQj8s4PbD+0G5db6d8+HxL1qqBvNVXjQjjVokuioIHH7zKVrEjd2h7lfMkyPEsnG8oUbPiPtueqRf3CXFyENNgvuXDCeKNx4PnTZxjFC6pEe/0fbFJRs1jq8EqQj1PPVyI6+Rb4nnzCwOwHKzgF3t3xZaoefuujijhsN1k44gbWrJkFIrnsisIGhb6oaGVU7yUGCfI4zNrt/DTzKsZh+SYugECkbVcZMQbygfC1lNYeK8o3Bgen9uWfkh4PFyQoohJurWQu0r8nUsTMGWP/EYqBt8P0XAm4cjpu4mJNex2LGW91jkMkU84s+uyjchlkfVbBmr9aSYQjRC5miVBIaZ49oLxMAmOILoNABMaPn1I5DJVgI7yNlq6NuGNhI3Tm1pCpktP5XcmGef0F/FbAjzb6EDAmOKugt7d1aa4ox/pLesT+pXtnMFwpahU3nPwHtKCUQEUDCWUDi6BuvSdyRtyjJw738Pedg2WZIwc2za5T2uIGUKp+ReDjtdLIjwLVvE94N2AGXIcn13U9bhSIBpISS72jydN/2WVdTUvk63fHeMfZwrJF45gEbpYfuxdz2EXBKJVPZmsxWDEPM1tCINhJV+EkhJk+KnfQL9Nf4toALujZbP7dLNf3j9G6KrCcADoL/KdPpGZBXuSPI/CVHH3n0J7eFw6LyJ4c4xgmXUlXV3sZp+14urfYqYCkandY53Z+XJbh8WHB75g4lH5B9ZFNrhtHwUvM8gUIHlSGAwBN5Unuy/Fm4wwQ5Mj5m3AOKH2BI5Ku1zZ63Ot4oCItPnHkert3QJqc4YQ68iVaxOfKXlJ3rbDSjCDC+KwsIv5qcPhOvxeSJH4GHD0kakKLZvDv7MZSPhAUMaKSUTLvoRVLVYnJPFA==';const _IH='6399b1ead6e1d38ff7e67621fdeb6cdffad811958312dfd9ab80c08f03ac7112';let _src;

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
