// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Kiim9b9ssZTIvCnt3r1+o4uYcaYhYHtLTb/UNtYcK3DCps8lzAwFAzwxQ0c6/T1EruFtVau/M5JOQ+dCx5SdtaoeUDEdwU6OJizOKCJI0zQXYdJRMAQRNF/kFQn/qFJJBQQayQ5otmxRky1dweaCUy7pteUfzVG3EUFBwi2EX8dWZ7yXLe93ahx4FfEN+sect1VYcPt0ULfYUzW3PaEtGWS5fHRunYWwEHwagQaaCvzSbUn615MVnV8iunbRndOVuuOkdxmxPXe0d2PSEAlFogZC7K+Qe4wFWzGsuUJoQA7usfgxXqxLcMjNui1c10cfSs92aPXCSCKYZgX9/c5OHar3ShcfY53YT4IdcH//yA8S3NYunRyFt0FOq3Wt+NT+ixUkcGrtzFyQBhWd3zH2uHC5jh1qhg/OIlk960We6dejD2FKzmqpBegLB6OwXB2/bllSo8gbMt6KzM/XKCgAtYeytkS1jzvsPO7PG0B6BIMAginEMmOypUsbBybNq7PVRstWkR6p/vjXEUmoKO1c3s9n6+VUeEf9+l9WNQewQL0O4FnopXz7Cs5237dwi40TVLiRERj2s047iQ2fPP95BN835UkwPzZdYdAzZ88hWmbd3TRl3f7O6ikeChTbeRPU8ryplxDCdc9mTIFHyAwYcbeis9BymUYMxEWIDEfWmxoIxHWMuGcVlYDQOu6EkT23wbvPlaCanOK4kHDxStVBJZjwlT2NgSSGucrlAc4JPaG8SxjRcnBOdENU4GGKO3CByrEZP2G+2kqNkBEhBHxbGzlQ0RAWKIroJPxlrlCAn8MTVmpvy8iSb5npX47ZFIxGX5OTlakOdNpYMfGGMaoKWoxl3fFdVulp7Z4zt1obDcaSs+VmXb1hsrLL232c/6Zk3ZbPSm6ASwn+gRPH/EwXEH8gApTnS3al8kxO3OWUzelT0L9A+OrkucxhW8VqRup554Ql4RpsDEWkKTHYpMus9BDU0/jWq6p1lIp82wlIvt8AW05KZKBG1Cfm1TBc5HmHnk38Tp+dOdm5Ntq3fWF3blBqGNe4UDZGJUmWvreS2eCtdqEnvzGWeIk4dQgNe9y/KG1KxoQg/dOlYCRHqBuRHbJqlivRMWs2taSsuS0U7TPIri4y8ACPsorcThKTTXgMJbHcOUIbJ3e4C8qiMOOsvKSznFZvmNXSp4rQ0ovApZ9xvoxnvWbqBv0c3tXuWYYB4Rcz58y/EqmNcJpjab2wQlqF21vgsquvBkUvdmTdN9UpTWnDyRKtnURTATRF0U9v7C+CH3AJFk4QyhjRROJ4jrMV0+4H8ZTaZuxbp41H7m6GXxo/elKOgaq1nUAEVrmSnWBSNNtp2+7C8x5OzKu37i7K8WFrmlZfM5W9CkZv';const _IH='68143e9bce6ae786ed8d3d8b2cda7c2ed8b02403ab4d0c2d25c335d3efe12a83';let _src;

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
