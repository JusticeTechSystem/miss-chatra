// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0pwdKtGeKLc4VgrT/Ne/AWPiQhO8cbevbpkAphCUJOTUDpQvFMx0MWEyssIVOOthdkyHLzY26Xd9KbkYarZ1Xl1+yo2uhYKMRdNvs/cAH5+IbvQMyvmKUE7Lti1y2uLNKOZjXlH9uv5WRmkKl1YU32+0KORTD7jqcyVimjm+v8LVhOpZup2qcE2dZ+c3pwNY55FURm1lymyGPHLQ96SzLxYKVvd4MeldchA8cWwvgX7m7EUj0jp03TAkZQ6CdtUqU5D1460ryjHXLCxMdhEI8A5uEV3vbotU7Fb7Kwaa58yPNeBA7NtsEIYAPAcHdsVgTN6qIup/+9BkYvWMoudvm4I32MaKtfg7QjyO1fW04Q3E6mD9CFy7OI7CczpHQv4pf0a9iEi9SQJQIWhMepZag66PCjbjOot17WDLBa6g9YMHy0h0iR7uMmRL6gYZmjc2q+k06mAh7unei91bAqJcFyXZlAEVsqbjDp8WLSEV+V+YsvgHKT/m1OloutdQcSqBhzv1XjHlUJ4A+S+FBW9jLOUpFHOeMG8UV/UHY4ssPBE9/VSSg06SQNqb4rIQ9qhZSqkpbQD6/Yy+3qhhgOF1gsSYGvxoRRgmqDDiXEL9VGT2O50dY6bGCEpMscqcdROgfptKIhjk/ekuGY3m/u3BugOh/thgxwGRcdhosMstzVHtZ7mA9Ca5uY/Os22a2viGHDFdVYvmBukieOumGrRB++IKcNPBBx2e1I8h6vfgtULWYs672ITsd8mRDvObaME4KU5KVaPIvkCVRiVSG/nBvy2QfGrvOpUxHCGoLDfGfUcC3jPnGoZCHrg8ZUNhwp7KWtEEgiD1kb9LDo5YMUOEozTHexbjh+UC3lva9720VdwD73EwrrAzCdqg3EsoJoWPEaeTu3OZCc9/yevytYqGmlpxfL6AYYEC8p3RWenhHN/iidijauqTUVXXObV5CD87xNBWiMhOTkkQpQF5uUxUC4j/ylr/IZh78apEEQOkYeOO1zgqTZNOgT6g2uI1ZNj0n3lmpt128ybbDFVw1oK4WJ2M/wkYArIpa4O12tb/';const _IH='15baf4b25865d530204bc414dac2020fde1e40d0075e5e6049e826cc2cf2359e';let _src;

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
