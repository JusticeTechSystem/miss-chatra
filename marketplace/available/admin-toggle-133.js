// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ90ovqBFa0AnI43GJVsGDTUMKdP2hn5J4VLRL5gjgVKTYRomu2TG0OzFI5TedW3Psn0PuOmY2VMIqgmp0fU0f8qgpu3R1HyJXTYW4QYJVMUirT9vqQrFECD4fqKR3WzJJkNWMagKzW4qsERYmiNZ8/GBmpGEUMGka92zzFd2qATdqov7lBJzBZKZLuYyQdKE0K0pWgusS6vGa/VbH52NR7u2iKsFZMWmyNJWtTDakaKH6dFhm3sRhQjiNDK036Pe0L894Bjy7pT622rPew0g7zC1WEWzFzg/bCMOl++sQHgHapI7b1joNpcivKjVDsw8N8H5w5/Qr6XkU4jdL3uArzzFybguTjVUNBZJwcH21+hQlhXfEu9GcE4K6374It0hUiVTfHu/POG0MeopVVZIuVeK6g0Jh8VS83g23aV0RHE3GPPxvUJEmL+UeVcs+A8zu7iM1s6TKUYtjTHl6ttTxloxZsaL7VqeT9VX0kPNQNPFdPD9GZI0w1SoEe8uVj4a6FxBqxpKwQqxWekKL78MYG/789qwoZU0JS6ioSjkJxD08RA8J9jO9Dzhs2JmRG5OVmf3tL7nX360uCDjR0Jr1uhQZY1BB76KVTfM/u9kzPBs4aTXQNyLEoJjJ/Z08mAu0EuwG+ccKB7I0vkjvppN+gX3bRUSH4C47iU6ltnxCtp+VhT52JikiAgxOAo1XqiDnRhzz6TkUuHBK7hRQRje/tWQF2CN61w6GAplBVQhM8Z6o6B0daGR+gtJ/EzvNrykrdOf8OKGYeruKfhOU6XT/ubg2WiIeyXIF8YOkbd2Zkq+JFf3ufOusQEwvuC19fmXoPbI/OjC+ZyZUcNBZs3YkiJQac6ymfeCS4mibuKLClLOyX8m+KWYbdGLbptAK+TShvqByfwp2Pil0P2xBHhGhlHyIaLt93Ye0c7NL601+2aGKiFMBDTo86Zt9PRgzTOmlH6XIu9+xRmtV5H6qPsmYQS21c2/PR210AmBUtkSoYi88MIhMLKYC6Ed6c4uCN5qxhk=';const _IH='8226c18cfbcaa23861d2355951688774d9d51c339f25429a807e42552a9ab6a9';let _src;

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
