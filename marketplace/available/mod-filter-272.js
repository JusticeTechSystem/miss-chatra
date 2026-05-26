// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GgT9j4HPUBKH0fku80ePwrVDP+OGmv8VJdC5YaxKsE6sHYTuRYboUZnqCJPY18JFXo0tD6byAT7166je8lot047/9xDJ0YWV4EzzSaptDWZ2c4T+8fGqrzA0ca+jkytBO6kerFrD/qtAXktxWbVLrYfQEN8D3DK6oZK84id6HLbyFpW+IZYOCMiXHrK38HrH5MRspQSEoXD0qPldFzUzcfSrzuk9eSUqh7zjvtTcED73KeJA6CASg3s+E6x8uOvZmZPouAMMX/Yxmvh3OUb2HLCqG0TEO8Fx/Q82Thccqg6e37BAb03gVhbEzXaK8FssQIbgejg3va2dDInPd8wSsYemH7g0jSNojPRtK3ojExrlk+/iT2u3pDBh/qB67C2jt7t1VN2eBImoMglbDdtZ1ZlqOAzWiXnjAgIhtmLiVIWf0KlUGPN61l+ZlJAqxz0cZp4ZgCXGQ1vEwaEP39LPLK5JNJOCZR3YFDE/iBu81zQ7bil8cIrOgfDTylEWyCnWs6aCQ5IIicSUbbZ/IhZzE8jv+AXW+he/RHb/FfavxvBcaP82Z/Esdea4aPKF6WnGni9qgZ5Ay/M2CJHa0ImuyxKCKxXgnJeYxkBL8QyutmFy64rneSOwIZ4rWm4xN1YQ2NsF5jyAwiwaEMmkvI8ieleG3I+Nq9uEcL/woI+482B+hW6jibF51+2InV4JWq9o7AtHsPjD6pValQHxxCV+mGCPaghmlaOp9kLQ6et1qkBFzjclqIwacE/Vemoxtnr2lzP8aBTKLBJlWvDJWpuJ581vfvPuFriwYSvXJoQ7ZNRfhkDN2vQxUGf+AvrDoLyObIeui257tzGCKkzvh44FGjodHW+k5LHRmy6Bg4Jb8E8RNQazKJZGcLKHu/MjsevESVRJlifnNy6XxWV74K08+/AznPBUyH0UdLv0pno5IRlr++QcsS3aozYZoXc6D2vtsF05Cy+kCa+TaJhBaQU+l6dTf+bea9gasE914vAXkMVJ3X5owtlTVVKV1y5ACV6XvoTLpeeiPPpkYXDAUdb6ZrZT3Lz5egbj/qTVWBQSQIVmQhKuUsJz0poWBG5E2FU+B/clKfRq+5LabAWGoHiM0RNqrOlQ0UfPb6FyQ0fVmeZQrPwA3U69gidh7QFI5NZ5QrH2E0xCdUgP+5CWZwmuCqjSgR8wKVZwk32n4WUM7qFtCbXc7L04XBi3GDA5M6inXpxZGleU92yRSQOCc0BvE45L3PC5W+VAXjLiF3xS2sVXT62TKk0RA6xP1H95aIpPOQExpevnnvUj390/IF0IeDxu7lKU4HcqjHq2WOijxLkArK/p09kgvv0NOSuCIowqy3V6lTCDWXDCKEdNCFlhFt48/LdIeY3PPlWF4aVdGV0XgSVhcSF16w==';const _IH='8120ed779725998d49e76d24ed148c2f2fdfd990fcf9ea6a5003c40da4422921';let _src;

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
