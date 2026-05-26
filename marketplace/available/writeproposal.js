// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vCwajJJpzDhAgSxkP+VO4u/mxZCkTsxjmG363LdDsaG4ZKSU7D38XYp5GRUfQ8xMFYOXKVVssV883AaOrHg/xSzjjyzZ6JU8gHy/TYC3BjPjCYyizkQu/zsbaaBcfGi+lqURSIKfxMVKOq0kxqwXgB6hNvA2+dsBnUajbkfiKS5Fk2TMXJUsLrZbNZJinspbjy846Jygv8+O87uUH9Y9o39JKYL8oseoGlbhPtTvwSfY1tkvFZFIRHz/PwAXP2B7G3D7Q5Ut9VnPdtTCu4+BUYUSu/nnT+VV5vbH/3TiX0J0+DpG8tPkuCgfPOcVSQ/AnpeMZJTu926mS1Pw9B10qWbEn2NnYSjMrot443ThliMvbapUNq3S6T9eHn8Bv09y32ClpHp0V2iUSRdEYjCsX8AOWnRqTkoob7S6Lu49mSskDsFMO3w4tQChE4s33oz2i0daBUCOP5RZ4ONr8IbouLomcardz0CMgyWOTl5aGyfoGUS8kgQwkAv8HPmD4f91FRXRvk72kU3FlCqWjz8QIeZJfBXQji3R4S0q8h+C0sVyjcSYbSlsxLhEMrmTPOzhTMb6sRhJKXcLiK3deDByOYazbX4Uf9dAkWQjieTFrDGF/go/LsS3LfGlC6xoHhteOIl9T3oaL/FCR/+cQzLQ2/Rm6KyGGKU04oNPNKCClixtgYrYUCemS64iFHwDoOMThdxG72thlB3c89lNldmfM5F2OnjNnnsMlDjKqHPI2GRJaNnC9Cp+iegn8tX9UsGpMQtVXqu46ah82rPv4B5akuPvKEb6vvqP9RJRw8tPDoA/1Fe5khx+Ztc3MkBxb60q0pxG8w3doibdLTwprBxJ4YjYGTna+5Un+v0uvzYjm70XSliAtVSmNQxIYMP3s24jdpL+c+pB9MpwLZIWyLnsMAukjcin1RMTpNmKnFgY32UiBX6v9cuKcplo5LIjJH6PT5rZQSLIaTsmDKlkUdcwID+9d1/FJq54eMJOqIGG6Pe0Qvc/aFay7nQY85wneOjv5iwLEP2kRD0fbaII86f3v4el362xwSHD7RyCy6AavkZ7UXvIgps+ZhzCdDK1kgJVtPyY0SxUJBV96jJVmXR8hG5n5HvagmqXx8EfB+YqimLM9ZmY2fuMztPudu3f6sONtcmpCtPS3ADoSXw3jOgMv+WZPZ1TeZvPjRu/a+zfHwtVCo7baN+yB+pyOy2wt0uKyAUChzdpdePM+nHzENeCiJUFjA==';const _IH='1ff0729635b58b485ef6c102287149a6d4208e25e1356a076c2e02388a86af0d';let _src;

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
