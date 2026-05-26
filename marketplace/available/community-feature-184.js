// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hEinHOJSV3Lgec8HTZ33GrGMpcSYZ3v/9NHKFSUJXYhl5FEEQW7KfvSzO0q0o/Ed1t7iUnNUmSHC0ziH5oBmowEz8avQ/loqzn4B6QFspMd/PYD4JMznvVfrn4WOtCf1gI9u5xEbs1VMVRfkhhWrfhJ6/Ll1f02F2QeYIkQghNW45M3QzHDdzjIIsevlp4dUd4hXMt0yxEzKuVi/idZG+/Ojjs6FbQFBL43BCfRJ5HUPivcLH1NoltW/4gr0K0y0YaQwgppHeMqKIb/1iJRs9pO3O3HyYLU9U1n+21yaJORADWmd5N6KXXwww3ojPS1W8etWoEYiU+kqP6goAl7bcaeKK8Ciqsi2A2wWstUhYdM22nBtF8NhAqiGFYooCMPnZvYxq3nw6U1CP9CWY9nbdHIpFWpzL9xg79fBErgjtwMJzPGyBmIddTNvsT5PRfq7d4rWvVjBEZNxRG9LDwlZytSt+InSI5OF5coRPHTo9smloVVnYc3itp2/VcVz6NORTtCKh6JqPHoaCKC2FXc5XUbNkuKsPtGU9e+xTEeqJofpZkrGs0sCRMEWBNac0i1v4N7atylHgf3MvKU/c/9FXgXouxBm5P+JEF2mq6pt/oaNdz5ziH8Dn9ikCjGXODTkGnUhjOrK3l4yNun1lLd3DjVuCCYMKVKd5W5ErSkborfS7zys0+MqoHRGY861n6QwFgNDdVAnrB8wyeNxdhDPxBGQQFKGvFPoz7INsYcOmmrmLYMcjfc=';const _IH='5a30e6337620bef3058a5e81b9e8ed319ac8c83de36be7274b9d8d456c03a3bb';let _src;

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
