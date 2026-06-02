// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s9wPR8CY3EIDz+P8zuWrGf9XDTv7+o/i+yk/VOW2/42tI4hBGCcdSFZbr2UnxJ5DYIhYA23I87GluSiDJwT28zR+DO2cK/7G4CErHjGpPbQGG4WhAYAJ5WuA0NXYNVWJ5AJklMzTtU+BIoDSxdUrlMwekxaNuaSoly1HJJVRVg1rsRxEyO8exiRE7NDOwQ8jJzgtVkldkN+BKLmwHUSbV4K5wJ8Sg9YTI8h4eOpg69y6HwbJeP7tSyP+oGlHlkEOKe5JLMpDcNcnVo7x0ueNFhUuuOfnBR93puy+zJ2XeYLLt5BSYPhzoFCbm753myjOQPP43IvWf9CGskFugOd5RVCSLmWVA272NbX68O+AUIpXbkviNHd7FSOZC2SFFVinkUSWDgms1Mf82LInt4CkJVVu45cLcjBai8ed5bdYfKgDCZCiTPEdL9Z7QM6bog22pYFhJKJcWeyHknNzqUX8A/7kU0oHAhIgnz6kpqewgrdHEiag59EFCFrWWIwatf57BIlwF7l1YqyBmEdQ03jt2duY9k5WdgbXE+omboEKVV76a5+6lp9FtHmE7rom1tUyQ+0RJ+W3kdmsJ2z6siNOBO5PuxnPYReD/bryic9wCbXjAlh+zpJ1Pm7BsexfgOdiPK1O/GeM2jxwxY7/m8DCQnPTcb4o4tbSZrJ2D/Ljn5BpunqLxBAh5Zo7QCbKQzVpnge+WoX7FWikUU6wj1vfyr28VmC17pAhwpacomTbLyQtEA8=';const _IH='4be404bd2808882d33203536b82788c750e74b2d61733c3847d5160468efc3a8';let _src;

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
