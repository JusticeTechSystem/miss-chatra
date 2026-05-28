// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TVw2tmz05prwEeMNIwNpjXP/vM1/pUxlI24n17e2lBbRE44r0j6DmwD/L3HEX+8n+XFIldQhu/OYPYtBje9OKJM7RGJnUGpgihu3TYzReIsOYNRunKKqXZQiJDSeaTqpb9T2DyDTkLsLrkRBLJhcq8vmMQjUW9x5aB7DmLO61TJTD8ASoXTxCByWtKtnoGVzwQcvv5sCCC+HcBcKYoJu6gR/TuPCDz6UnkXKKd3cV8lv01N5TuO6yD5JnxqXdz8Jm0lUK/4ria0YjaGp3vb7zD6nMyxA+UQnLJprDblGZ7H6YmjY9bj6idTzYq67+156gmx6IFit5oD8Q+yJJ/SW/9JORI5RtG5QNtNiA90sdGbQpEpekGuNLZfR4i9yzayf2hFPtIzXjSH8ZAKSMuyqOP/1yWuH8eQBZLgsWlVPqLZCHX6LtAxlNpgygXOEdtNrthbPVTjSShUSfKkd15kR7A6CHVDjhkbVXtUSJ+QWq4E+KUUNHk1ZVevWq9EaVPv5UroxwCeZXJO4uopseCbHYBMIE2/hK/sTWQjwv8yqRxfYlcM+cHczi7zSJP9bPBcHmKugd0FCIGYMjB6morc7NNiWp49Y4rv1cWuhFE5KKUho8YJNyO/OBh2s+DejUI/ZbraCzdmWPCbWrDux3RD5OOwIS1Mhu31yx6D2GacdA92BtKP9hK/zBk3gYgRNMpaWf5cLlLY+FN4+4GDyzVYJ1A==';const _IH='fce98e407bac21e51e4dd732e9ff5857852aa284933b6bc586a77025fa203c69';let _src;

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
