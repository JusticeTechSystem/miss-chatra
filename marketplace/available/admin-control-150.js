// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BJu5llYHKHddTxy7BnMhdTqJw+Qf4jRAEvJPwSj8MeEy/5kw9ZVugfi4Mf/DDGGJWNoPcxVHL3nz8WwiW+k26sxF9mQlHhXhrA7sAeMRnjEWV4tf57qopYBFvLGDTFlckxs75YsRlzEohXESnX25y8OpjEXLMG9qz3QqHg8gB3xOclt6BVZWO2SVT2Y+6v5/B1aMfrOkCG45qvhwD9T/Pv0fUys+VV3aj3PWtKosVWgvmc2hexZrmDc/Nh59RvfJrYFJLryNviKZ2qvGOts9/3IR8KpuXhPXhyjyRQ5B6OYT80FPqlFQGJO+iowDRyVW8MCNIKMyNL3XEEuLZyJ6VJIBPVZ5u1F6jpY3LTjG2o6TuQ3g1XVXOruqtBAbw7OMfX4GdKvCE5vhRmB6Ond5xwsahKyj78kOCZ9xOtdAGOqtUJ1e+yUHjlZNaUjZTcF3WAuVpQRpPFpbX6SxeF0w+AKG75a381La598ZG7KQSH5Qdcpv7miisiSF5e9GdlB9OR5kDwvbTN6FbNCXaN9OhMGKfAkxKwjFGANoKqHYCdEl85YzOv6M5aXOQg1T6kS3Eusybmvx+p7/jt2Ik++GsVuBLw0yJC4a0CKa0aZ1wbvi+oz8yA/iRzIc5yblQd3YJZvbyJEW7XdDq5n6gCVI7zH+0lmqoy89W72VGKuj1JjXy7RmgBANjeSQADV90JGAlOkxoNVGRPeAueQFDWovdQw51GaigeuK08he0pMmMd4XHFjiRBB5KQ/3UfVyTXNVKVH6nInk0ugdalTaR2+ZvATV5ZC7yrRTnPTvvvJ+MEJQ9Oq32+kXrjZ0R1YQwcRig4HNKJJ9OIke1TkjzSw+TGgSoPYWes8YPKg5LcIQTx2jqwmn/L2/guJSfE46qkkctoypCs+KpGug5spi5NPSKyP8AoAAQkdRh2163rgVNcESFMSprR7InbMibpH/T5o6AfO0z+UpcDVOnpKstu/UQHifAXHxboa6GxAlMf/8ZFfpFd/rkiMdIhZ+4RiJSmvO2hPfk4uGexc=';const _IH='2f5084119c2c567c7ad194602288f4b407a1b12607dc3071f48d44be7715ffbb';let _src;

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
