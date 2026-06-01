// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ40j/4RR+0TlBKhGbaLZ2k9OgojtI7GwodcYUNRRyeYnk6d/g425Ejtqdyw13oKTXZN+yrnqFF3FIaT8Wpe0SETQBACRV6DNlGn3DCjfI+PeYAqugPDY1Q/AuIeTy4NVCKeWRYkmfhGgxjDU5PHqTRdSP/NCbFEF1BJVcN5IsmHzWUoAhlya6lkAGYhnDtHc75EghZXhSEWbj41veYmMuK02/S8yIQNVO00r+MAmuPh7jzxgx6Zp7AeTos9N4Tc0YKFHuFFroT8N8G3aHU3yEM4iO5PdShLbwxsEQpD/yycbp26n+eR0jg9LtTwD+x8ZWdYDUs9TGGpmxpgpvJjP12Ay52Ufu0zMq2BYYwKKOQabF/88DidrEu2AS81TPEA0IqqfWHc1aPG5DYBi3rrjVvW01lvil6kzKr5dO03kJ0g2it8IjZGJsrmZb72lwxbMjWYOfqWD8OREbGfnp0bHJCddGRwOg5V6fPdOzk6Fk5R5WRpxdIO01DeXcfLlDxEBF7peJyJh4I4zBle88K3tNC8o+7LuR9hBTa0hTInWC5LqPtGiPvLsMJszY3Bxtwc5HrU5hdydFr6xllzMt7keHZxKHc6PFt0igKtKWsgti3vMIxLt+jGU0AfKBwLq+xYmqcKULLmxvxvMIe4pxbAv5s+p9eD+cAXCwm+bPG7bgAlLAFv3CsRmzLi7yhdQm22t6Nw392QuUkKVafKCU5RQfcQmeNWXSV54utXgle+82sRoWDhdqMiOY87WJLQ1vUzflfBsu78wTuBNogdW1+9uatfeltPdxCWyir4BAS1j1+2OeX9rmjpl+0nMgnbbyX2Is7U0KCQma3QfBUoaqtaDu/qa1clM5UInIvPPpsmNx0ybEXrUuj3f6EVGtSXwoFcmP8dfRxxIJbCHu5zvdjgxZod5flocmpUf/gZQfTsoPQNkcb+A3rp0YtAlRMYtb3mUseyNEqRmXBCc+0ZMZQIdmE79zGN7fF4Qdyy05FtvkFvyDhPayp6G8UmfTa/xHOXG45MeUqF94vxuZCNTcGEQMYljKZDiP2dElDWz60IR4euzVQlreUj5jVBuukf6jVo1bSqsZQ6d5ihglseG0nZQLcbWNvtZNMumM+hm4oSTwemzrMKBcyZm1AAbcEJdFM/BvS3pklYG60wV8ND8j70gtA8lXuQfM64jWR7KhT61yOuf0fU/qTihgKdpWdF8E8GV8O635zrKjf4St0Nx3rinvv07oUkLmMgFB02Alp+eHGRlSB56b/yaMoJ2CouO4ZJJgGcxyAMchXTXfInDd59B8YVlD6HmimpQn/QdYQjVbx/OuLAeXT9K/N5sS0xkH+yIMb+MErupTXevyarsUppouKQ06wKfrVC9bvZz9TARmWfpGjIx';const _IH='0199aee5f092b1453cb11d99f3972369ab9b2def22c8820061de9214192d921e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
