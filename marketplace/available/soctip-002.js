// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MXrGftzCVy1gV4Sq7VfoZAi4P+m58BnP+d7qfrlm1N70LXMM/FOjfVbQG5mBU9sW9Cy7g7U4RbNilbxpmRNIFkEmrBqzZbdyOft162Wf42Qe1waN05KLHSObmC0eeqNH3IUJEtBxOnzbgYjAaDAyNMmw33Gj4KUEmhj5ne745jJcyl8wCo+fUtJIua1oUzalYWm36ZscJwB8Dx1Z2V6N3YX2yhIxSkkc6w3CjQGoYZmExtvJ1jVldk9HVx6G6fIugp/OoybApnTtEEz6OAtDyhG7BrjTfrc4F32cLUFBOisOq3sGYflVVktVh2gdT8c0xWybvfuSCuiLMV1mOA3zDbTfpS6Bqb+9Om4Dud3F9k8SplahzCczchq15jzhCzQy0tWhe00ZotfAmk0kE5VFW23XvWZFjc4OAwyqbhmRkwqytqPYwcxvmHsznaTGzvJruxOjyZr8Eu5LZ72L4QkhGmRc3EKB4gQ0YBPsOuzDYbgZpiJAgMGpIjvOXqGnacFRs98hLONmz0HIBtBDXdfoc0BdRdZf52hMkneUyixXB8dScvI3HdtFwHAbejpuW/YIHSyPogwmgRxJDr4l+H6GYM92qtCe4Qf11847oQksUYZ45YVUEtEpZ3f2RS8T0RiOq4vX6CooxDsn+XDoTmJLlhGvEzwfiNVioiwkGUgfXQjVGlYZ028+M8CsPKoUYshjZ74RpdxvcdU7pFTF0MkwaeiQ5lX23oqfU1/z5cOGdAX/3PBfV+i1ddEbiOp+oOjlzmaqU6homthq1oJ2BO3et3+D4sLP41krN7peslFS/iJCP0HVqn9p6Xo9vpb5dKLgLsYms0tHBtnTwCvALxwYLTjw5u5wP25UxqrN2vJbxmqkoYOsXs7yMAJ0NLvrRwVgJrz4w9SA/ppkPLpF3tDyYlq+ruXCiz+0OilmkQBclgBUAlnGTomIvacv0YhDH2qhUl+mwBd4rZ64wK4Km9M+kx4TuH1A54J86lP8f9FALw0W9IyiXyULFEAGBgSnFoUVFyqLVaMrDJ1sMz0bYJgisi6zEU5njeI7FAohUSdE3e8SrCRUIVeSQ2h999LoeA9zv1Q4TKDundRmYQs=';const _IH='c208852be611d817cad293ed492901a8cb4bafff1dff88dfa54958a34bfc137b';let _src;

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
