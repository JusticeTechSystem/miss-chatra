// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nC80eWkYG8NgItaOx4104FI+qQh8ZpfKqXA+7/3ClkIEJ28TcllMpPa1eDe8vGWCuKEq60mHEcoYu5RofsZ1h6Oyt478sQLLRdcLGUxSMYbc2JStwL3qyqBoVfc4q0WP5jg4MAPDTjDB5FYlnxms/0RKScAa5ofQi9m4gB+EuOQ5hGFc83IXf7SXnRvfg6XupKbVoQnpmVftIyrMtsO0nT4WTir2J5x32MstcCp6LrsqVlKm/JAMwI5AJrH2aRxRbdenaz3kvcZyPC2jhCaaDepIrxxQ1M/bpLIqeOSfHc3Isv0+iRFJ/xr1J0za/C7cYHU6DUjjhPbM1t/RmX9Mw5BWcBAG0dGHlpvb0DjhDCiUxIcrx4SYe0n2py5FoJ7WGm8kUi7sVQr4EkbpY/cIYkttgRLf3B6llBt6Ven22swJxqU6MTqLNOx0Hv93yV7EQNnYgckFA8N0VrIo5YOu46LZR/wd15E91Tk0fzxUAZ+4DgxuupsW2g6fODwgmozXO85q2l7NTTg0RuZuN6Z9GiJZMttBIC8VnibsDNY65tKpgvu1AB7ew8fK6U9tPpWVswkNkKR/XoAwQNnOpAeRwzVj3PObGU+5RYxNUp6NyosyGYJIIGIPrzWsQ4tU7mhU78zYnJdDd5ToAQpFlVZjz53Ox8L/40KAQ4/+yK8NAbh+OhH/vgZ4mbCBnMiOpSYFaVr0OuLrr23YFr9qN+NT6eU5tHFoNkSt2iCpCQ2GAg==';const _IH='4cb09742127b24532cff654201f12fc8c5ea343fb957087b5b06b07214967f2e';let _src;

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
