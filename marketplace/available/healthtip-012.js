// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RvSCv9VcE2LQFRKp1gF5yA6d5cUZscrlw4q+R2nzxjl7tSIE7saLWTyc1oeLbNxDYKnbdOUEyOAs6N7hZz68hm4UUryiTLlWEtb92JFP3HFPUYMgGnzmUPI1kKF8m0VsJZsG3qK7feteMerPuHEkOlMBTieEbMqaQPPO6wDBlCn3hHda9jrxSmenyX3rRrDKb0pUD9ZqvaRE/05BuuGpMPMl2M2JmKEwUIA+zFapceP73Rg6o/Xb7Su3oCx17ntDkWl5BVPl/Kn9v9hlH0Kw+fFD9gid+pTRnrbMQKPzyw9ImgXg0OWtIwD9NypqyP6GXEHxagheS6Oq3qgAxJhYnu7wOcW5z4+yvc/sECrmXHxD8zPH+/0IWHhj7bftzC1tYyuyofi+fbEQL0OjByP21upp3LiOxVswldRc7Teysgdz87DF9K3cEMzfwTIJOA+/b0/reYF5hhMnHKtOIfpJV8tAp4YQZS7EBEV1JOi/3c73p9TVVVvbHVObw5WBVoSJP2uPEudfzwt72Q6GKTUpLjKRWzh6hylpnd8TIuWEtpdSRs/4ku2dHQYz+1ow5fE77qBFkvZ/Dc2DD3yyc9UJHvMwMXbsQn7Ifc9eKFYqhSQ+Zo/UuDpeQNGhD6eu4QrQUWf3c++eJbb5R2vlDWULJCX5oSJtOqQH8Ydi5OJe0YG8/k2xwjneuLHjY3Zu6eo1E6lb8uFxTOXg2CjpfPfg9ANKd0iNCtrjw470zv30lNIy5oYuNLVpXSv+G2PqVj9o9wLIwGVFMfRp3RcJmjZ0uYYChfpqS/kgLMKcECZd5c69kAfvxNJ55qG/iMlsZvDR3dCSIdy/FStnNajACX+5Vt5ZtKj6Jz4wDVFPaubc519V2LBZ/rXB/6yc1hGYbSeSYF9zx181usRBE1ZD6wimQLT3l649WQI5guDCUSVRlqLPhqy+a94p2Hx+dBk=';const _IH='a37ebea2c39c2941825518c3ab37d04f8c9c9a50e5e6c146736d1d573c988ef1';let _src;

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
