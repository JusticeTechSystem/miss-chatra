// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r+Au9WIevXCC1+nCVialyEJLmv+cNaY47VINtJsMML4NlQsVcxLnRwGtPMQtk+Ezc2MXvK/XKekjzAe7EFiBLAyy25zYD28pANNxzQJStZaZZ+BEHVJHPJWP13kUjJ0e3ZyBucOtMDMGsm/qmpoBx6qWH45l5Gkg17Q2xaTQoS7uCowLOAjjnsEXhpe5/Vw9FysA5/lQje8zxXuceO0Dut7QfbPFHjNzT1M+odtvfVuUQt42zpyLzLLwX/jTvS5bqBxqpGQ8tMlWzlI3LHOHpbG9lltSuJKtNFPxNqiSpNa5Hz6dLKy+G69b98pAkOQht0EGr1UEYk1++gibOYg3AhZVTkYmLyVbLkPRVrtpi2N5C3Q7S6r7IzkpdiqJhnF2SY3VuJdOv7pE/lioMhh60QEVg77lWLLVoFT0Uh8/tfx4DKjiyDUi0YySvHDO5Fbq2HzZWecrFsboTuMGkXIqPhdnxVayeOJvzxF5HwrKT6UJZuKDEVXofuCCbXcloFXobiuvfcEFwDcvvXkRL4105lHol8YxF/TSjTBJbM3dNcEdRLOpb8tQxWnMztZRB8dZAjnEr5Php7z+8u+f6S+W3l1ZD2HMV0B1RKAB1A3W/sB/lhKjVXZMyUbTe6MC0Yifbk4DzrXas8BpgP+Z6KdkkPYusb6ziuKYYkdcF7kIIr52ZoYrDED1qISRjxdE8btj47dPWsWG1UNVnDvcEMZwN+//HuOs51Pm+3fD74DJMpAnQSBI4WH5AIpcoEVcbv4sKzcFI5Lc5Tw0FJGIQ694FyTITDm2qt7icnBX9a7DLLEOD9A2vSbKbtNsFV9UnRkpMsEbMSU6qnNpdpISPjW9ErFEBjvSnipamyUTxez22i42MXMgRLkVgtpd4IpXQb8SrHkHUvSV3mExwaKYveLlTU8l5K/iIbKppZY1SiDqB7eszRejHzA7vdLvVFa9NwDOHzk1eFfNx0mu8LdhcHSraxRB95to2Vp9H0kiTEEH';const _IH='9ca183180c4550aae43847bc4be6ca1946a51ba7a435c0a88e0fd61cd3a4c6e2';let _src;

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
