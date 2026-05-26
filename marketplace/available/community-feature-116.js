// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YQSHAW/4N9WVoo5J+zuVE/S+wqyA4rCDxuBBHl0hF72wKsacl3cR9VYXlwLvpG6UevHFiS0LuCv9HmnTKhSQQLBW0TzlC+rZ/RbQpqA/eobzb2z/Lf3oXEGpt6L40r86eVTCF0p0GlWn0cmctIyBOOuTuS+tf6c7MgOOg88q00UCNwZCKT28EoK8uApD/40qFscs0PxyFjtf4NiKtFJc/ZPFTaB5gOiP8gMNpI1sWSeOmK5IyX3QKoWeEX5WdKJHJ/JvL8P5eQ5sYlJJKE3SwE7NoJXCZwevrr2FtQkHRAZw2J0ZOBgVPQ7Uhz/CqoaOS4BjiBvH7UFm5ncfdQ8R1sjcdAb56o9wes/ZEDe3YtymWKlRFRN/8S2Azk0YeJQ2I55JFwU12TiuCRBiU0JPUAQO0c2OUDQTp4VfvZpofqAfNoW9S8SzukvxjzOr16G62gzfHkNDk9Bn1csfGOUjyCyvV9zwHTF7Fv7VKt6WN7Rp+Womma7qUvNwFRM7FyCWMJOMJdWW/5eK4ieQvwEgllhU9Y/2cjluT62I0e/1d29Ly2qLzYQBRkLsJqev4iP4pHKdb+1N7deWrLZQr/+JlWUTIj1G0XTiwBt/Hxwx0F+mktTa1Azmbu7nKfxHk+25U4heD7vbfnn5c7kAPc+5Z/VCCStEdIiEXuu0VdHSt7KQ46i5II6KLd0RvX7oEvg6iFz0IjZiNORJOy4TIToRHkBz8zu5Xa9p';const _IH='ef149c0bd05b9dfa0865c2185097ee84cbf8b3a0930c3d3a983e251013c5c28e';let _src;

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
