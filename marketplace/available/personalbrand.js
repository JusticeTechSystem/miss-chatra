// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0lrOCmibG76Y3ZfLoJrSqauML42yxKSjK1eqMo6ffGPWNGOMykCm1bMRiobwNQb1divXUdqM2uMB9N7v/KwLYYbZK15HWZhauYh8j+T0b9cevvh2WPdTuD/sxgDR0HjNLLr8Spp00UqxOx0tJkbutfgZPsd8bZ8G9F87jsqr08joJmfS8jhiYQNYlmYsohTQs1IuQMjSyaPHAxlZ5e3u/XbGP3umryEvDMUEf/5Zax6wfGMVVd12toTFNrW9Qk6T1MSuBTOVWfsAe5ueQUWt8ktPLJQ54TiUFy9ejApep4WhLbfZL7rZU9Hv22i6a8eaGecLwvoczy955mmsvnw/D4o8pfAnSivtiHmdezBCpm1fkviq4QbzVIP0V1DFm+G+35/09H93USUin4ZdMUrG50zrajlMkRZ09pNfFtjsDomL76hZDPTOpYc/mygrirLNG1QBPpYJEhrmlk8xPUHVG3DsvSNPczj13Cetjf6s0yFHMVbGa8NuPcKETyVor58w8MHW3GcH22k6iTqeYDjyr0YW+UXdO1Pw/SsWqgflfOyXBVk9ThU6LMSqYEyttL80x7xqY7RCzfrtBuhuTPhLe2myWo//uIs75af14ot6j+farLdk3ddexnB9++LKEMrXJG20mlN5yQVk29YDAy8yNcmMM4nMVCthTn3FVioTHndsbnT4rYPLX6nprzZERs1Rf6mERoKAJfdNdCCYa3VPlu8c6CIaAwEd102qi0Ku70vAj/0XziASHBvN0i+rhVlCPyKR1x8V1Nkjj+qBlQjZSqCZK6dPfTkU54qNS/VDTIUKh2FzLbJkNCLQvaxxUqTzZ7SrjXJDFPQdZBDMbF+z4He7Tyxzn26wkhWMA9mbqF/RwT8WVrYL9BtDyHfS+UQOw3f8BEOj7BpPMs0EtgAHbOCAVvLlFpmCzFRMEq6H7FoQM1giItxqTwSJMeMxiVO1obDEEd4lwGNW5OnHUDwOW8haTQgNoOabBsI063lKepArJWIj+Sc3oSKvvJWPjh0F0NZ3JAJOXsIoqLLCsRDYFWFe0goyrvEo5QsCV9EDeDvYT0CJJqSsu8U/cWbsPILRC/be6qoi+hzWfsF+AGiHBkmhgvzYDw72CsSVPnRsSFtuMNYGBjI86EfkCopm0Nih84p6ISqlmSMTDrllUTWCpSgBLUshzQBV3VNQddmo9mswtozihGjq9e+MlgVpGqDDZkmPezGMJtL';const _IH='1853ebba12169d165c49aafaced5f7a020ee85d408807f2dc97ebaacdd6e4797';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
