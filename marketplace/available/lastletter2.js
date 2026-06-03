// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EkVmRFWdhXK1GOePv+57+pXHKf9Fu/izB9dJDviD4rcmGYakQ9vCNeouoHqZLXHb11PO2gy7dk5huXGsZagxY95OSnGwkVLru0qW0auBqzAlEtb49HYVGOBoUmFx/4xcvvMRJQr55CvZVT0NWVqhjfz2aTrgMIttcX4+/ZW4E1UijlCY0nOUbm7cVMrCoXofMgs5l1hWNOaA/JBG/IpWBeidTj04FuzkqdVXNs1PDYYBPUZ5Z36xtbRT4YNeTXsYFe+Oh090ID2A7c+HCav9vFpOraUWeiTSiv0xVLXjpdJha9TcTdZwu2+OUxE+Dxt4+IisljthyNemAnssev3vQG30lrgbwb+RfKFxRq1XLLSEf3JQNdILnh+iBEtFVFlFG/sAW61DTeuEV8QQq0gIQwXAgJUZFzDhsJW1Shxphk34WMyFTdZ3s3BPo6sOBfmPUdQH6YkE77Qd/o2kDaLY+s7dUzqm1FUwrxYTbL25OU1b7xUasfjptAJpTMuQ5IsVvNzCuPyD1xyeDeIuSzUSD9PAvVT1pGprzxCw/D42Wbz5rqRkj+uruCT9m8S0+Oi25rFMPRhwZnIoUJYTB55AOQ1jVS1P8TEEexmPg9CSLc6O82LWUaArrH7+5uhPZXX6vOBKhHtusq3b6aJTwJrK4kutOCk9aD9vkHmDBy8/GO8mcOWc+CHAmctDnWxir2uTdPnmtkz+Y4Vh6iocuCOWpKTn3Jfdoq9UxsUpCSmdtsLRBPdMOAiP6loFsPQ0IcubnEovkrtXLUWAHj4m8YwYC5yChlTUKx+Dlra/nFFrZa572Oa0Rr4qI3Pt3MckEtPZ2rDTGUM33n0B3SLlWy1a6HlU9gtwkFwftxByJsl/+VuLDBQNfxBAmIeM3nN7lGi0l3YA4fcfyWfxytjZzmDzco+eoKUfd9mhZdPqiY/L8gxVkagEyKNWiy3IooB+E1ewzyV84lXGO3lZsBKs6jTEGk4rtIXfjg9MP9loMuJwMA0WrPL2erEssusdi7oCo2yWYs66bKEMT8xBtZxLIDoa/+Gq7HybHnBnoG8UxopKoIC9DOfdo903pPDYcRWB0iO1cSbvk7e+8JXl9uwpenS5KihFUiXXBSd/WcicPrn/HEIPShVwEy5JcVfX6cPa8Jq0WsZ0bKtjgdzKEN0e7aboGvEX4wYnVWDtrx9Ng2AvPIbJZ3zn/aFsgwVBrqBOPNBGptAp';const _IH='270b9fa84b2d235454d9116541f24b5cf4b788d5482b9bdced567587acee4b1a';let _src;

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
