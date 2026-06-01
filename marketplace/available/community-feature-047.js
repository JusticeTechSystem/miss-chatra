// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxSsBAJQb1fFikqTWzT1+8c7PouK+ycPscsRuuY87LZQrwYedIlfUv03ko+NjDKw0DXyo70eyNau0dDpyTATfTDYcVnYVn9lFacyjTgzchlCfbEY0OgKeyaqs2FFnCXdacW6sZY4AD0eh9qfRDxPlY4TN6Fb2uzVeO4a5T4IbzBZqvHXKj7IaVzPvNKwCF9KhZ0hm+cV9/BG4GsU0sbkLEx5V0W6qJRr2yw9pc8mfoSUGtEnLqDzu8Ut3TJoNIF1czZOE1K8g2G8eX2wDl43v+IJmomaL2N+i96Fa0ikPRLiH4ENbW50m0K67USoeUiWDSzuxy8vX7Pw0PtIz9KeE78cX6ajg17bNTyxHrtQmMpFY4FDdD3pZ03+vhkVaw8uOQqdX/qZz8vUkKuXqZ9aUR0vTKh4WOpbc3OnvQJRzOVR5hSJGhT1lxP3NCE2vshx3CLZ0nrehkO9w0v+aQ5uYp2SUxJAMEvAjPd5Q6TBVPfgbjW9xlr2hbzi7n6MSCHfgBbbE4zeZ0VZIKjVogunJHzwacX5AY379o8iCh6jfSbHk4PhFIP/hFlKW+LVOK1jNRbybeGczwdIzd7Ime+/1NhizQdi5ApWwhzKTPyOjFjIr5vRvBfjTYLCUiGK8yFuHnsfljgZCJxkhPqr9Jrl/qXJeagKIPCklCcJObJYqcdIy7YS40+aqlUzmAQ+/75UBB+ShwOmatZub3qQp5TI6XlGTpRdV0j5Qdyf+JBbVQY=';const _IH='b99fe6d011291ca68acc2191186e357aaa356a053785cdd266d9217c864566d0';let _src;

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
