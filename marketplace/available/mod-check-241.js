// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='94U7FCe+I3njvsW5Br1z2UalO5SJPN6yE+581pQ30tG433ro6XH5C7iyA07I1oW46S+nBzdvRU8yJjHl+moN+GqVQiwFvfF87nmM8BL1dlivzc6ES7DvRWV2QnHDM0MR6YLIGyO56S+y6PlyQN/nsvprVVbkGOfgBAUtfhKRxi/zdCBM4fo7M+tGbQUChAIIoPSNrQgiMFfbDqMXgKYUh27b62MqsNMGR9F973/2LJgIVd+hmmCKTCs6Z+etEakq+acvEUIfE+B5BvbCItQE4ZTKECSDsVgTualJORARR/onQmXKYqRAmigcWKMZBQN/RqE6n21HLUHnt2/JsElDOVaGrpNfWx07UAO8Zm5+HxDW/QrhmQURjbh4g3WXwPX285fJvH6rgkK0jVcS7EhFM8fuHzTw7oWgK/erSy5Ra+9K/BQATXvE8+aaOe3u8AWivh36/PUuXJRErNT0Ye+65SZ+itWnYMO/w3gyvGJORx9iD9Keb9zn4CBCT9Y+NntEcWlTqe8SrGBUZd61yMyaPHJxJ6hCKhzrJ9L+auyMrumyDN2kQ9ZHoyd9bK73sa/nJlwpxwzUqUcb1XAkiNzKsvkfBtwzckHmi+xcGRuI+qifpKiXwcM0CL1ZKlWIfzuZfxVzH0xZ2K8oPcdtzfxUHXHt9aZiOw5/B529jKBagdqkyn6wS5Gl/yMk7WJRjTu5nn2jYJdW13QW2GG7UM61re/SyWFFkq9ZW16/Y1AfBrzlUY08DDI4/NJqrwdzhZpcgz0XvHFOemw2dyD854rTaq9Dh6MilvHpkj9cKzg0CDdZYkosarulzTuO7/kN7E/xlQjJsXhQDQzTXb5ogn+DL5V0PWn8iAweORZSANa8JApXP09oGwFwxI8yQPUsAd/FQ+dzSvCgY0t1MLGCBwCm9xAdMgFy1LwtPp7YxjYlrA/zW0zIPBcPNVG8IkUdkQowYsHh4ReR4roJ5opBgzz6RvzVs7OywVOTkzCXuGvPRjrw1KQ8tHJCvNT6W1DdYTcBImrVeyF+S2x3cNFFA+OgS8qMEVzvg8J1/VNsxPCcCXYSCcawWd7/5NVwV2oTikT4K+Z1nIWnc9I5qW9GB8saT0Cz0Qk2YNp1HwC/K5x3Ym4sYOIpoqx3pUd8vpecwx/OVLzXZdEF6iGrps3pB8o1k7nNJfDizAwk7jPlyce6NNPOLjgMI9NcELYOTR5P1rOy+LkRrYDPl+La0woT80TQMa3pDggefPqfTe/QYb7gwnNIE3p1s1d8zAk9wuUmajQuorYxf0VejpYPJvPrGtn6FytjGgMKeHxFcO8C+4U21rSaVQLxSObG49dtN1n/i+PIDz18x96GOKj3UrHy1/Vrl1V+9EFIivHKhy0h+yfe';const _IH='145285b78f99eeb5e5b2fffafd77366fb4a39e91f1525b163f98099fa8d3a64e';let _src;

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
