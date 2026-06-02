// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8z+hyjs+3nsUSslSZ9ePo5fNhgAndaMKC/xBENKeZ7l+FPmV4qDRaerWxY5of86eDHegXJ6yAt6dUmPzm3C8n+AFNNw/KNicrRL0aWEMoVdOVFLs0QX0QrH81XJ4gTHz5p8+Z8sY/o9NlFOzuvuGridtigGsXghnvAmLnLWXA58JvrdiQS3f83kZy/MwXMy3DzK96YQAorMcp4E2Jy9VpX3tnRKCFlXn0AzwkPmUN85wCS7NeubwAtzJXmZzuMunrQ8DKTRY2T2iCCneGqn89R6CPdCE3Q9R1tYzODGUZBF9hnrE2bSDbMMwya45wPHpCjrHUu3uiSt1oH8wjy6Ny0ZXeTZ25yVF49PfgyhqKiPoeX/Jlhc0xrpYXG5p63KQf7cjIaxGRZqIGdX1nJ8XZ2YdF0YDFFwnS7pMWHBZyEFLnkFQTpKGQZP7uIMSDs+zEFi6j8S3hzAlNMmBr39FnVdxHxNBRPjHWW3UwH20hRQ7e8aUZ38wWDquWrXvhQ1hAhkbyN9bcqzvdbu0/i4ROILSdshLWKgL1dQUpruh+ZEhrLfMvRc/N4NXP906EsMN68KU4E7Rf4+awkdIpzXsZfIQ9BFVttjmUxdDA/CX0GReR8o6QSl6fX5dmMBWKPARsXnCowFYRoxe35SWjfjuMCOGcwba3S96gwb/e+6vuO7mAw2h1miqpxOq8esPr6srFGSEIui2d7cueFxieT706os/95wyMt8dUJb7BPgX/Yau1J3EKJht0TALMWLestXeKhbQMQXOghvr+KTtz89fRxsWemK3mCQpT0W2jlFX5yO20zbh06EoTcIGhv9AOCTDL+sOD/nVu7tt5ojcongRsJ4juGBx+4OQgefbr7eLXI3rR53WsRWo9O/XQXPAO+WWROqqrg7z26dxIaaTE761jhXPa2BDWqiL45M6jdDJFYEeC46xpdYO+f76kZEcvx8a5twdj6DAgMmqAt40SUjP8mzJg0IdyNa1z1p8JcyOZlb6pshkSmrOUAEU8DZxlPYle9jN7J53B9o0yCkqRZeZzJdW+ppDCBWuzysQY7P79Fg7ApZ5f9oFg3iwTF7a/8SQZnumJx3zvePg6j+YT2DF349NVPqfiiQwhnZUDKcXO6y3L7195NrtHTNwTFi99bFjTQxXuaNRgM5v68q15rbQcTsi5aQBWeBRn8mKoIYHFb9pMtYCXR+ldf6WTpxy3DGbbL+z';const _IH='f534174f019e202fbc4d0c040a8e4b78372f68b1b969ae51e60b211d30744ad2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
