// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B9DvBosSwFiOq/pYQQ7x9Jurm5T5Yhv5DaH1w/D70w7MQlritymDO+h+WLtHOllOlE9HQjgsL49h+YeI8G+0L2yxquzs1Q82ghKTS9kgMu47GIPqFOsB5+nU3+bJpa0TIVIZIarow07/rZMj3+SjMXThiPDhW0tiLXfWzKW6NC2c+y9ZsUw3R7ZeeqUySo5xivxpAATam+X4yTtQD1UyPWGX4j/ypsHiMzyPwyrRjV5E+3TYftomeW8e0XYnFFO9owU00ejE1ExxUYTzhcR0+0W5TTMhSZ+OmkxpnQSzyiQuP+UyFEkw259vIBjj0CknYUpYPnJxlh2p9GFOqbcMUY4MY6kikK0Jt/DEImh99go9btdNEg20aOcRj8Du/q8tmRe5erUWxsPvIXPNilbVMvPYzDfFSXwNxJJ28wnHnSnTVvpR96J3APX96NQ2rkTZThJp5KUpFzYz4yiotIZPmxdZFRNixERXXl+rA/Do5kR2TjLXMGJvyBmKW91VxIsJLm3XutgdD7VgUMkFOYw3LUCs5chvx5WhMlUF7PkNo1hkNZIAzbeDx5YEtLpCXUqrYElbC1+DEW0zZcozB6rikNHQBmSj1RvyqZDnFc+Ihw8YAv/WhAx+/u7hDbS7FM5ygntnC0B4XR+kimK2gIM4J/6LnoqXutVBgk9Q0K0s3w+nqQ8DzFlSo729k+3Yc0nRWMOMAzHu2Zom6Jy1NAxdXaNtgr8=';const _IH='f765166b91338e7c6447cc43057be4a5e31b4e51e11488e059f73eae75e756b8';let _src;

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
