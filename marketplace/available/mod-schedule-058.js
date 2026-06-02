// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XK0UmESq6cygParKGMcLcbYCuX2k9VUV69tISsTq9/M6Ob/sV1Z4+M5A18U+4wRqodL5uSdHaSQv6z89xrvqlsLy5Ln/hLQAx+oiGRzuCZ6YtQpUt7lQVwlF7Ou4L9X3DuPCUhfwu7Z0bJU24FcWQpiP3uywZCC3J7m53lqi9iciFHfSsjDgmP9la0m/ZSnQyBO/duV+Px1FfrJ1HJFE59KJIOcMrAJ45PR0Oa5e4lOUzyhrYuV/fzw+AAsx6q5SK4A7QTrWszUrNLg01q9bLKoG5gZD2P/qxP2qs+Yuuwxd0sRlSAmESIoNNmT8UTbJd2bWW66E602bzglRNwyCBdIwpGHDjvMjp4tglUUBCAR660VX2I+JBSN01pCFXj0KeOni3R7wu+ibjova1/EuzVlFSE0c7R3wPm0Fytzws4y6AIxbFMKXv+78ohppEEd1ovd3RVQz0nvNlHvzoU6f99QfkJ9uCf4IutH1DEnWhmg/Vp9AHFMMbPgzMNLFC9XpwWHOweMHcp00ZGe9+GfyXW4MS8m2g4LjmcZfgrdqM6lY7AMi/3yiVZvTYaKCA4uMZIVKXcJck9UlNpI7QZOJp1NwmNz/hmty+8ylG8P21M8bP1DJlsVg7lvJLQe/r/e5fVolZDwg7MnK0m8NtTa5odOQO2XiQZ7UozZYmjgxGPF0l/WIVsvZy7qucPO7sAubUqc7FNSBO3zmMsZvQLOwCnJyhaKqhwP0z9xiDOeBELs0LhCGCt6mpT8jjfKH9tU0mQPyRcP1SgHVOX+FkDO1vWObo8sDOthXbHqxXseZjAW3GbJ8/Jgsk4TFMtdomhAnePG7NiHIonK4WbVlWy0C3ABFZnBhiDkxE22pzxyZgggF96yZTXReR/1H+OArDOlAcksFWpceTEZAZBrkMecbrQ7FYQCkBuCLVgFf3WAWOM9I4OaxeYYTrhBgmdUbGgJhrySsh1LoQn2E5e2F5u+Nc/F3Gkx8/j0qAdNcj4gA/a77uxtKgLQximkyIAKq1EBS9VSegO6iIGhG8QLWzZwDhOL5MlFSUyoQwsQODkWUEyz31RYIp+Fg6fOavqNtcTh/AYsY9jdxbXv2WMCRsahoC1d+R6uqc75U64fiypE5MUeGh6J4mWV8FZ0pRYaxBjLIdXYt8PPbfCjmiE7TUgJYpcZT5fZmD2K7Hw2n70b/BQ/x6yXAtwcZvO3bjpswet02Twrx0LiAbOtinTXqC6VyF1PJwzXnWHW4ahHDy88qJVLkJ8CqDZ3XgDzgYutXXxG0hKCB2d4TpgkhETFGTFpgOi2VWwTrZjT0Vmzznnozhza2+QhxswEAwaYILRIbgYdEWcUGFCMuc2msEOR/Ci3h7YXDquOQNgxPdXqDIbPCARX9lFGRcSN6yfEORRFxVgGwM8Wh+Zx6uw==';const _IH='5c72ded892f486c843623510d06be99fd2ec0a11c57a79c122b29569caba88bf';let _src;

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
