// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jMqb7lPWH/qi5AViJji6MUi8BG3pTVcKYlcE9Hw9Amw/V+fnyRz+qEhOQSSFCPZuBbt+ilGmwTE1jdVC5xIbMYwkl3D/Z8K48bLzKaOhSCXRMSoGPlw4jI1V4e2y318gA2N9fz32rv77tfo6g8MSgq7MBi0tFTQKxYPwjbwf4bBlAAyOGlHDarNDXrfjAKQ5pjwa84DRzVEYb75CnKdyDCj7GOicBTk1mzUI1KBFLbaqvXY1H8JJDJjmVnKV3datCDYg+PaCRrbvZdizohQWOVMPfGchAxIYZRjxE6X+WMRRMbM93lGCwLNBhwLkDMO7lCDr+62+bwDPFt3Sb0jAutaKnqTd2SwD23HuK5Qocr2mikCyRryr9NO3P5lHMj5stLHaPnDhopFIjcEkQ6Ygw0IFZbxpjdtwb7MDbRYtH3l0zLP9RU7ikJe0G0CFbfcZyLI3FLh2OpHfUksBAC2xTzGGcwYjN+9XLiX3J7uX3MkwAOETSin7GohiT3zrSFvGKEnZJjA5X7lbpZLzNf15TLde0cmp4fkWRk5KLGPo1sPfl65gbWhya6GvCY/mGmfEKMpyy09eXxsr0JzfDy5hZQwpyJdjDr7pWZVWPi6bECy1SKRCfr58HiBvfyLK/0w13PeCLDVfeUYbyHqoi3wf2kejyesqtRzBo07UjBSaAUvfuglU7OgdBn8lpAl/GyzZJixxLj2CzkkqfbKS1V/moAeRJ3uE6y8BTfJ4RNCueyUnqY+YmzMNzZ8wkwPq/IObb8vrpDIJH5Tg9PFSAlhzWi57gXqESifnkmvFf99xjJjcviJ6JSHUJqhjrIeRKH/wsEjeJxfEWmBvKrXSn9aLGCjif8eXD9jQiexFYsQG2FAtYCaIZhv2O1zQytRq20L2hGl+xpN5MshsU7AZeQwSVYGamTzhx+0BtWagj3TM4WgtQsNomDZV8xOpK8MtHc1rGZ75kw5uRwjirXzlwyKVuRwK46ODr5n7pexZOq9xkWI9KjOZqZAwDvNwOfXMni1xtogRTA==';const _IH='311963de3053928d1c2fb5c33b4079ec1aacdbd8290ddc7acd99faf1bc211fc3';let _src;

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
