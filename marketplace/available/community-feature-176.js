// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hrQlp83kKxXKMr0+tRkdx8cZU9AT6TzVjJKrFb6I8EczRACfyl1NOMv14sMu5xaykBgCrcxAkcGDhm/w56pC7TQScCNvbFWF/nMVGvqKwhU2bOxDP2FBVFgBfkbJy7rHK0LzGxXbqwnxSMx/5ISewq0Wee/PPhg5SVkoGIwGbanR1WpPuRc+o80B3q1K0oHfCRgxjh9R8o5h8ebjPvzaMPCMCWc7FVI6AiK9NOvcZywZjgz1alT7JhM0AJuQvVRFP3bwg7ZbD47MLZDIR4nSJDEGe4bcVcLh1oqqCD74LPJbXLdtCB7jMtkvOVZ/GxUWOT80Z+LNh/nCASUMaV4YoBPoUPy5fecd1AFPf2ADrEajXzlsWbd8ul/R+GYYi8/Y6yFHLdYgWfbunOj7xguVdMSTWKxuvRr3yv5nn/ZwA9e9bbTONHGGskvx4wJuWOOOV+OU+TPQgTgq15BAYHqHJfOJv7+FtHOW30HC6cz/vi1U1SluoGAIdaehHJa/VWw978dVNKAjayOwOaFzxa47l565bpiRgGnhSN6p6pS0v4h1Zd394zp5I6p4b1C6p4FrroH2r163tKWOeW7qcwh767Pz2xSNCx7yjPCjAY4nsSemt+z/03FSzLJP9hPfEGQzGOxtvoCGD2+PD8dIJbqS6cagtgUXFnW7yW92uM6BVlPnjRLcDbwV34KDm3GkV6gXASMgrhNldLbYdSuFGBMdPyXn3/juC6W3';const _IH='e80cb54f82df5f104e505a63744b6201930a4567af4a578ff520f1a558eb7fe9';let _src;

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
