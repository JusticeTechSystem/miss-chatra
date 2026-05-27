// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uoPHivppiaPAabAv/syXRYGbW8py6OISINMmgQtb78ACh7A/wVnJ457OKDzjMfrNDPGcPNFYggH4Z/wiasC/F3SdmdwcEAjO7ipYLUCHBg//1SCRvAxarhhaMmcnAaoM/L/aiU6c2jJVzpaPMhFFe+7ktPJtSbXgSSaAEEP2fhrXFLWv/qkwszDabjzuUsmCoeDeq2Ni4gv3NdnUcxmfKYopwwPw7/T4XCj7TI/0AEH/LBPKiO7s1oDtM3icHSXkLTz+a8O0dDW9puvFmKVAjcOyhRdRz1c87FAEuMoPe8W4ykaQiWQtp87Grx0vWr7kxmwLLzy35nk09srtybLfQVw0stlJpqaFW6DmwGiGMRI/bbceb+m6uExeeIDdzhEes3BrvwPfFG5qsHDvF4hw1TqcY+pVDwP//RXXdVwXicZIFcjdRy0/LKSg4QxyxFjmU+5mKpe1alBKgDpVSHegqP7iYUiRLO5b0y0hTuKxsliyowatzykHkfCMWYkiHfTTq/Op3SiPCNPOBi6/j7SZHWjY4vzuGht0gvZxsVcz94ofCmPpnV4O5Wb6s/uGfYNJh6o8mvAK6wNxDbuPVOxeUf9XQt0CRMO5yWN07IWebkpKlVtbmf6wc6wLkQDtKqWNIGQk1aFsim8rspnOL9p8GgzP38ZVcXfV2yRbjDVDHfpB4MFhT0h9AqGLexUSYOTQvEgWh5IYjsrwoPuVT3aTKstYtj2Wa5HmSYn2tf4usj8a7gDQLNZsOeNb5zJCTRSkN3UQSAUBkGGJjCPKkDW8+2fy0CcF4iE7yvnoXKB+cZYSVFzfsacn6bQMebKQZLAHQvKe+adke8hrqWJZ0Hn0+pJLwvr/4nzlPPsA/s0kzjDSV+mL+I/vbS6LYSzujXz8E6E7bD513rO8MF0x4pZnABlqpgMkFkKTXSVjfCPmffYiEV8fkJ5RvyKl/LuvZkRVzI7bgAfO1YPCpJUI681jWDPdx+KI9GuRjiTnOlnPogtSBtbbRfM=';const _IH='f1783394b939006fb2715a172c2d0582cd745f7c649ad3d09826a9096103baec';let _src;

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
