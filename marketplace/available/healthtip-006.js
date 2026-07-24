// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRqphxbzDPvUwJqgdk+PkwpA4dyEIY39UP4BDyfMq6jCw7TKMBSk4aspVPGjdD0Au8CZTqquQUnwEJvAsmo8365jILu5YqCnPyEY9VmsQ1ShRtaVu2sVyPMo4ITm8LiUPqNK84Bioa4rxXjX/I7zS5PNEfzlHphLm3LqBl4zMEdU01HdT6sNNH+9N1rv0FWaTrFabIrE5HnZYS/jNxjQlH3iHx/umIDj3TQqLt4hR072gR3Ygmmei5hAQX726boTgPkGXfCoYx+QxBf3Z1d790Emd+60ol5duQx7vgz9h9Ar/sxBs3+y7UOVCwtDtGX2OpmQbOMM1Ry9qWD/U+qIOhNOIdIGzzpmzAx+8rRhw1mBcDHaEII7VrtSwCrhMjC7ywoV86nlOx9KKjX6ybjQG9rtXzbJ+vbg8UQ88w3PKzryLnMMctWDM4PHODS25aceFIcdrS9mB+oAn6IYnkKTBT3xDaMq2wukEWxGCxr8jst0j0xSppA1vDVoTfz9TG3NOPSuy38VQqK3k7ipPJn7nrhzpRoKaf1m0HWanCUBpMk+NPuclewb/Bm5DU/CV04NHFeieO1QjAKjQ/QBBEsNaE7H2jZt6W7bl48n4lPxj8JfetEutAvo0e8p1hw5nFldGQl8bVsksIiV7flCfsnc3WBskM0ny7FHFhdFzbb7MI8koOMQcB/B302vD5m2eja0rd5NQjVCHAq783/3ByizzDq7t0diaArbkMioSvzRZp+VJi6mZ2aqDQb/g0JPkPStJ3H8DVectq5uZq/MNGlOvRqXQWCc2uZygi2jyfZLgMUmRx935/nM6nSWRV9ZsL8wgLN+ldSTca5W7m4oFmo+UtOSoIYVGzMbcMYn5dgyIa+BmAYLzive/08N0HqrwrhymOIwf7WBjxEdJz1Zj7Q0Q874on3lZU53DlIBneENdhIWDFjNaMxTKsL';const _IH='547cf473eaa044c5fd93b274228dfcd3b185ed92f7090799c808558ad8fdffb8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
