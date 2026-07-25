// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRTR4UDH/xXYW2jHItx7yEB1Ajoaun5AOn+4WnQ/XbbDv1NRZjLfgR0AjAwZvIt2Uv/3Owbkw2cklR6YCoTSTRrdrB4xye141if6MH92fkM0lePmhlMtFirMTjS8xlkC14gB3QrHoVE/DOahsv+VEnxI/KoZjySANoHpfT+z8yLlmCmyzuKgH9QBXnEPm0t0HCQPJfwDdQaS0yJqPw6BfQU3lsdBe3bBXtspyxFy54j+VOccD+U2kk99DUVJEcqVR7vjS8I6EaztpLzwS3Wx2+iqCW6YIGS+RjhzyVwzdAjV+yppLdXo5xVBKaXl+k6Bp1wLnabTyHX8XDS0HgwNl6eJkKOFil33QxU1V30YeiPRRmW94Hb3i7UcyOzF3A63hHIZ3zpK/UR7YslYgzm14Qr3/y1+JWlBlRjlIS8xVhHE6KkKHVUa6fJNC6e0Bjb78t234QQF9bG8dsWJ2i1NxD/rp4XXWdQeIKOvpaqw9D3EhVqoAuAMNYcoQ5UvM3KR1Mq6itD1/BKAmSPBRoq6UxX7lqw7TziLptQMV7cObSrmJIWBzo4VqeeWMseq2VHLWHu4Du6vFyXT5sDH6uYmr3xtCX3lK0V26HIxDlOidzNKhQv1pEek2xbT3q7oFPoZQBUZHjses0XMKMDu4jeYmIdhzjO205G0zZO2FUciF2KzqMV97UoT5pnkrz3XRkSqPmJ5pWABGLlzh+XaXJ0L7YlhOnjoEORT9syvRWA6alB6C+sMqHG5mf3FZpgp5FzY6yq40TebVzROfReX9aIQwp0/OmNojfw450Kt8BYhZamnG5oXPq5bpnoW7CmpcwabiIlUxmNt5T5tEmcQNlTq2VKRoR1rq7PO8w7JoRZrMpYahhg2qUJnXNYu0V3n2F3hAFj9vuQ4t73P+TmMg5nSZuWlnsh06ucD4r9rRVYd59j63sCkd7fs7rHRFOZgGe76FuaFahWLkF1dNYIfgnr9pHdpCDeFdWhGf95scRAGz3M/BxqC8NhxYRobqkmstnoyyWcf2GCu8ZVCcmRNyscxSYgqyUFGyOedMSMXFkKef4=';const _IH='7402b37cd6cb6de0dc4043c6919fe8fb7686afaf925106f217f6fc51dfe89e72';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
