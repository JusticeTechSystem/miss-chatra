// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x4XOs/jwWaE9+zA69OU0/mCAGE1SLjcfm19te42JnLnCYOBoTRToHgYc1vlgPAcIhnMfRZtvWzQrKso6GXFLO5XfoI2x2t2zVQ7HbY09qcwekPjIunAGabWMUvL5+SOo1r7xiyl4uJws785YLbEy4e8JQ630kdsAC56G2SCMOtbtmJW8vb3rNAtdDsPn5LRlIMHInPd0JDT6adCWaabHWDjyuj+M51z8WlrNxzKDgFjq8lSJyFAUq5nNkf4Yw560VK3LhBFI0A70e0qAELc+Vt/8uxqID7f0ucwzRrah2z56LtXzmmaC/R2CVVwNv/Da2Su4snZ7KxuDge73L0+g7Nh5fGfUtq2ayJSvP2zQMeWTgOXpqbwcje1lbrjSSX0mXmOiDxKk7644hn3t5eqHFlrlYic8IfogzLexsJYUfT4aFN24S5HvSIJVOYYdHZYnGHBGBriBknf9MKnZN50pISJgOZCezxyxOkl3R2xMT+CruaSNcydn4H3o/J9Wu78IowQcKIpuj3b8kKWt05HUwvMIh8aE1jzMy0ik08RRf/excNvrklyWp+w6PW+Gfs7AVGA7shdbob2hHsVRZVPafDaanbcJJdngUXXlzSfbk0kCdFCA60H4pi7AjBFsWrJP/Vsk0PDLavlhMSJo5licM/Rz6YOqWSq3yhD/zMV+q5emm5yXqhx3E7xFHDNHGWzMnVztnkQ4qTLCw1Ande0x4me/XlA=';const _IH='32c4bd39e6b5205b9a9bca797f357a09d18c7ecc680adfa706a9712ce105e7c0';let _src;

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
