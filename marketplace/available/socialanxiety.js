// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/qkI8CDxyywypd5d/VbxLpw/tokVLyMDiph6MQza7jly85USYx1tl2BbumHj+8Dtu9DzZZOZQnMVjRN7S3fZHkFsyhV9/JTgHJEAbUQn/5AT1ruXtFKZ4NIMXuLeTOsX5ZGzkDdqsWuWsNBzBxyjuJoo2SakyobwxDAW8VqLrXrvSUek0qFNisqIzyuWMVawgy5n54576sYYzXhaMkKRgHYZ81zclnLNXEtUohZ3pLxtUJzlwpzKE00IFJ2j06hhP+e5/AkGCAJeAGNI4P7j8BjL0VW5yBywhHOR17zhgrtmlWzQ/FGptPDo8JAzGEPHMX08qM3e3aGRzwOJ0yWAFDCNWs+B0p1S6+aQeGS84iDIQIAPknkfyq71CuVMHoN3kIrcY35CfUuLKujTYkWIZCE4gxDzL4r19lHnjRPXIUXyuv7LX+zCP8BQIOnupdtvdnCbh3GjYv8CP3f53N+NTD5s9I2vD3pkIMpAgiI3cuoNiW0PZ5RVcGfkQureJYpCrNuVeBt9EMMDj1g42RAZe1Oh0gRXqXnNlD66QSmCKpWUMgmVqECdzwM0G1LTTCw7IIzTFFMTHuvF2MwXtEVd3ReMptwQSpWDbY6h4BI/zhb3cToi/fhGd/vQD0Mh948Gd0BTHrfIDb5mck5/8SVe1pvZrYL3u61De537w5Xljn9X3cryYY8lZPz9Dshlw9kX7kd5L936DGsFaZvmp0HCq3OZCw5UuAVwg+X8hXzAxWcFUVjJO+vzCincMP+7Cn0rI16ytMIN/xpsQdBuzjLdRePj3CV4XRPCI/zg9pMQb/G4o5hkjBt79H7jFAZoHhMHilMijie5d8lTFYiUg82c1NEjksu3jtahxVbSx+7S/6Rcmo+a0oIwAHhxNNJZEaaVjjPdtm8KWMpAKOnL+f3AxuNQJlFFNsV+j87+iAoIxS3aHUFZr67gAOvGwr/YDqxpymUU/iigXT0BjZ4jkZA3AWzKiXO4w/3utXx+1m8J1Hnch21b3Z2n3QRaBR6nGYHiwIZKPWYmcoaHPUCQmfksz8cBSEwTTyOR7W/or+L9GD9+vzQqFd0ADgTVeBKISpYrhbXESZljDA82DcLGcI8Hv7SAD0UcTvSFt28HheLXoHBu9ZWg2D+p0mXolOAS81gGbSgDi/mIt6lwvkS+7HOiMMOqpm9b226l80Gb3BuMBG07QUdTXuoECG8Nqm4vtng3bKR91MUV9A==';const _IH='afe51492b9b5f18b88350134b1abd8390bb40759f8b27ed3a483cf74464412b9';let _src;

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
