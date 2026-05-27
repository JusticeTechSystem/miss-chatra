// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KDOjefJTw1Bxs8jEEJhbfomIKw5Ep0Rx7iKYfeIUqU4geylEw/dSX4zzwAzvtThfXkYECSWiQCd9zYbhactl7F8nGkwcQaL8lMyfxc6ATI8yTItGJHJCw5cWDdFwQwdJ+QUqdW4Db6+V3jxlPBx1ucObV+HHDTkOyyCJA9Lks66ZegZp/ue1Ylhsx6GP7eYZ0MrFxQjLMhjTyBWGNBA6PQl8d9kRiutLWWOlxqZ0c4budNq7m+0po5cr1xOgtGqGjXM2XgdPYXR/WIpg/FGoqI8wSSPcFd3wcp/GqiUzoMeC7O/U6iqiDd6r9JoVQ20YHZAGBnZU4uxqo58kbUB0MDLFPdQ/Jdo2itWe5/qSE8nCu+9reTiNttk/A3rOXhkoKsarDiuc9VCpf0LHlbvuOAVittUkOF03OpRL9lPNpDlwjYEDg/v4kDkI81dJSd1Stg9RBmjO6kDUPFUaKl8nwLRARV78/f6LGJpcRsMbttt9iEuC38qZshcd9rJ+kayrIo6q/oSiLJ5WhFECyN0uQHZ/jxLHuqHgTt1cW5M24FbWKOgSvjHNhRO2zgLIbwzseDNrOKHQXEYsOvoB2Mtyx903S14KFV88awtQEBvvnPm/diRqXVfjkhqU6hoq7cI18tkhq5AIPO4RzIZbh/4Gh511lE94sJ9VY7yWRWDn92am0K8cd7qKj5ic3ckEdPa8IHguoo9NciO/r+LR7WYqxiwMqk0cV5X/SrfR7+tkJ/taP38=';const _IH='11dafebad1111502f3eb02900f1b62dd4da46c40ae0cc95dfa49dca459eb3faf';let _src;

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
