// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fc2hah56DnYMF06dOlh5EwjiZ1c8pr0d4ntbP8FqAEw5ZJYqUpOa/rXJku+d7QCBKDoQ46RUYikBjICJbkN+ahi5ka10lgjGKEP4oo+Y3Ug/NaEW3njM5/SvUhYPVVqFBCLMg/fYyRYwXi6FIP+RysxZpOnCs1SjjYbyk9qwkUh8Dq2PYL+VgS/JkSZ/9DRGHJ89N025UcDfKoXwPjueaz33T1g9gTTIkgunmMS5D2xh/zeUK40OL4R+mneOleRqMpKYN+vBW4oi6WaFPLszU1SJ0mUVUbdT5iK0nhERp9PDil6OS/F5fMLK+6dhl+EkPvYW9x1yix/iyoRbO+IJfXEtF2IuH+TtQelsxGJB+Gvv2Q04z0uM/DbDcUYPxkA6Orei8JhGIfy5XUHBgD0cSm2/aBHqci2QUaySVOP6vGVEKsnjRauuV8/YYzrjQ4PIm7QSFBzCcWSm4UemhcoiU1B+n6ZGfaF/3rpqfKzMBvN9hSY5FQioOtP9z7bTkngbIx5DG93MOc9SiS3r7m6vg8LnqK+BdiT96YvEFxS8tmTIXK1CChnChqIN2/n1OHY5NuDYzRM/NyexWIHnfISaEv2d+EQfhJx2vBRgl6QbfhPf8qw+qikM7+F9eVMTUQxRgMT6svxseaiIZiXYaM0Pao/szMFuU0l3F/zNY0aXTX4QRsz6rT/TTDCpl9UNFsuAzD6lp1HNpByLnaIk9hvhH5Lzig9uJsGusEt/KlIYacwOD+lSp0DXl+pz';const _IH='bde72ca574b90e4e0bc584d72ad17476497477779e0dbe96a98a9071ade7bd68';let _src;

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
