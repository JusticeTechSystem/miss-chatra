// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OzkBb5GXBXD0ai2Vbj3/DIjkVrTfSON2OVbet9+UdQcvCen8q4HIhtMPtvZfN/dXOq2GwV6w0Sguef0a26z2WfMS0iRhA001pg6TQWuQfS7d0sZzwqbiur19iprxG4Q+9QMioXgShx0TP1JGOjmkOfgUXN69yhJ+LJ7qYN/ZIbTr2eb0tpcIGqX2/M/pf6yBGrz3ahnZT0RO3e+a66gO5H1ClSTYQRR88Ng1hhGilqgChxi5iBibzKfLnUEh5YWQv5SkJ9BrGxDA2p/6NHyWeBCdvLI2WkDG+O+GV1N9ZxJMU083LQvStCUyzlJblRwy+L0ZKbyNdQowYjOrqPKD8jpwh6jAh+r+FsYlYfpNhEPmNqbvFXUZF4P503UKJ7n2g4pmF6WL13k8kp/1Qc5nY7+4gSPfDeqQndvLif4/h59QG/Y6g7GPNLswR53Q8B18PQJfdQSyYVJLLrVbZIH3z+RB6IPJicBqZX3XSdg44Hna5WIrobJU7FRvT5Hr14yI441T171+Py9WekPQh5s4N6/PfTfJzZuvZmbh4hLAN5lLNyBD7kHvLPFd+0HxImQoJ4gwo8GGqFUggBzj/imzIrI/pOIVVOlLNZFPlFqecbh8eFUVri5WEFo1p/nags4enfSEVeOnQlXFe/g+OfnqSWQdjKwhQ3F0ZVh0eIypFBU9ui+QsUimJis0uM/eXce70wghk+U/mgpLwq9Gkb8BlPwX1P7kaL+JeUkuXJUyebP+SFuLfTTOAoG86s5WeDrUXXiLlOZcizsSK4kKjWFVJ55lmbo/QI9SPkvokEy3IXuH4O8d2Qbv0j4insTiE0WaFaa/BgV7jRyWcKDzWhtvRSyWnDHbwJXHror/KC692iXNnyNeCYlg/+R5DnYi+sRbbHuhLdxsCogrVgkx1HunAasaSxLsOEQNXtL78YcldzgO37tyVXnO44UNVwUfD9ohFtr8ajfS8AshLYJgNm+kmV62vbaf8GGn48srUTyTi96O5akh1CQtOJfvylS72V8R/n8ViR5hCIUd0cwHRVClYMyHjVjXmiRtAmVswCL+mpfz002IhnQ657YD5oNGhhO1sz4Jo+UdsHmSY+s=';const _IH='3b8fbbe97c157c0aee909825320c7c839ddd11e5942ef24c96a35d3d891b6d6a';let _src;

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
