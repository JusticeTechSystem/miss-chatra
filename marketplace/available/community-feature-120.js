// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+CiMM4KTid1LmMTQbjQSN06xSIrbQQGETL1QC6ArEJetpnbS3c1dgnvqeszB7XpP6Kf2n25SY9jXUnHjlqKIGRpv855L9l4cLoMQqy4co0nG1qWdAUZAN64IwVbDy1ZtsAmkrZ624wqd+CmvlLJA4XWyHxcyuK1+RMYHmAAfjYbzShU0VNbWwCq5OnY6DQtQSqzb8Ajmc4rGF8cVA28py5hvayXdP29clY+X8JfGfwQJCxhz0yet6t05PfNUOgsPd7I76vHKrAEMMErP61j3Bc8c6XQ8InCBAQ8qXnE8HATinVNPyMkAB3YDy+2V/JhdKBOyIE25AXZ6zxOm4xrvLluBTyicrVztGVSpwrrAJiv1m0QbMmnRqTgj/sakynwWBzML1JWojli/HgoDWJXyQt8lJoT/wf6iEGupJfB4QYCMjOmAzgjE5JTwB/Eh4iyClS/lVlyWG9X1xj2DVb97Q9F6oQnKxdA1fa7xPrBZk7VqDD37J7alRdut5l0H7ig4VMlUopuIEYCLTya5NUVJfsiFsXh/TDnZwfP76w2f1frigFAa+vLvJ8ffbYEMC7X4AXh8b8Rx3YL4Z5zUevkd8EauJC2DXC3aBG0QJR3+IEGDHAD7kA928op+orV/RO1gTqO9fxtJ4zcRnKirMjdGS/TKmOFVcdGudZfkr+geT5afTVA75DVt1SVamtZOIB+UhnZZRPT2Vl6FU0ScE08kOhO8oVWVPYJq6YXsmQ+pDcMVAxuhVap6pxLF';const _IH='f7cf4e5f148af873377a9d4fe9b53e56067c7147498978a03842050b5944ef0b';let _src;

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
