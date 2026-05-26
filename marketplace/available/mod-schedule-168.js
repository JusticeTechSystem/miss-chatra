// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BJAtWydIe89JdX/XQV/ow0wIry7RYRMbRtuYI/5zfYmFQLptIGTORjpmfIwgEkqVAOh8DoJ9ySGL6nNYxT6rbFntDc8XLy0AuNvYETadTFSFUk8PK6hBXuIk9g0DugmRmbsU+EVIurETNHxwq1Dz3gZK5aDsK/s3yZbzTVecN0QD/l7f26odtL8ocrgBSaBiYnwfuwiWUyqg2lwpsu5x3QthIJrkStz/QspWp+4+vgZ0IQ4clAwZ1dG9yrGGaSRo01vLICvhHrpdHhIjl1TPRzpUdEpD4eyJCQ+kDQnTgGUbw/twX1aHJq9lbD9E1W4g+/tw2fVUJxkZno5lYfetOWDQK8DkPEidbVmupbRYqtjpxQ2RwfsFx0suSQqD8QE5+bT0wACL2duyQoz1FZwgtAITrX7bet00D5lPMgHaLnoExLz6sY3qZwXY87mMzSMFUrz0ASzj6OajLj2NMngLAPtNsvxk36N9+8mbfGC0JETX8wbC98JhxMnDGFh2TFJvjpPuup+G220fDY/GQ6zSn51eMLvqX+aUNPFC3nfYxCepyXZGSeDKyt4v6I6/zIfjPWDH5y5u5FSdcooXoERHBMjsRX2qvafGaQykP0RIDWzWyxflZxY/+SLblEb35VsZI2/yM5222woNIjvBaetw5zFCI9fLVhrE4FF0dv4T2jJfQGIfLCfkT35OgtJunRevHQbNi0o3/thy+l70URQt+ZGspBKX6mIUJGU3hVtupD1zv8Wh6vANx2LUMFwEhrUpL2mSpfSaspwFqrSsE+AVuF3hn+Gmci/FvRq9Y8MFd3KR76caBIeo55CiepTKOSq37CpMhSYax8DjwWGHOP8mjRHe2RGevhPe3QLODZRxgEFVnhx4rLXo3Yv61Azd7Fx1B+e0IJfl2S96QGUFpSU2iphNMiz4wz576cchO87y0xKuAbo9+BUWqaxYHvUcZF3db2IjuhkMvBuLuxfxIW/xHyKhu1nYQBnkYZnIsoXLGXfIKeYCQJiKuPHh294w0MIgCDiGhiBSUx96nb5bpU5R1Kvag0GloGoof0REezIphp/ucr+uG67D0lHe778l6KrhcHcWDPgeWU6fHIb8SjbwTGtmzLBjds5BYQ+B6oqld3eZveSY4C+I3xcvnjsepN4EdSm0xD0SLvCwfMtjQASLVd0CU+O5evwcq1CtrDyhX/i6+RL8xJcswAf09rmNYwVXoxFuB0RLOVNQTZ2oQfaqXvuonImQhXrHo3BI0U8rtYM1TxGAzKZ7ybUWFovc3OFm0Xhi6xR0VQw4xO8uiQrBMqkm11P2lF1uw2uAmFPFoeHMOtZDI/rtIDY9zFGHkpLWHyLMxvkyaOcU9VWJxgCfrwbZl+vQUGnYywWUqAYrdJi4y4FKQvIymzf3CQotFndBXrARN7snCdufDXT6';const _IH='90ae848ac3fa472a2c4230043493ebc87264e419c23f4e1c6a21a2d961f9667f';let _src;

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
