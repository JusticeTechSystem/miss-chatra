// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/I/6BbxDdQDlOulXgx0T/aBoNmDyWlL+zRA6LFN8BVeJH+WiaeZNgxbco2kfOEph82wQCQaojgbP9GdjMZ3hj9074rlsE8BTGomI8Hz/FawJvaviquSPbT52eCVn+TSc4hHCLa9DWafGrTBbniclnSV1P8EoIbo/srYZppcVXQkUgHsyiETGTwoS9rHCqH6/Q2ySwhmyIYOToOXe4jFkGRqqHb5FXJ4QjZTqaMekeCxHLstaBxXHn6tATDMdYWFpNwLQCbfc29UpmS2kn1ejhtaE/F/9YENxEQwQTx87JccYb3jFq4LHfkPMoG69/oZMDzmObQilPcEpg5yhweKSLNhpCujBgeLlL6fWlGtDd0cV2L9V3eng3H3sZqPHDJNnhKTkQkRrISpXGRjSpXJoqs7v8FIM/EsjS8CaQ7zYhy0kSdwVhcKuu7Q8gOhd5jaM1r/7TFYVqGxY8+XBbn+s97cH0gBZybvIwyyV/c2HEhd7KKKmGmBIKjeAJTbJATMcIapyzSNTZwULCUSusdBbjiTefb19egcWF+X9YO6O3i0SmXjBJdjnpwBkG16c7BzCp9XqE/BxdFD4OcWN4VUrzgrEoOTeznqrf3wGEuyqLJ/b0RWpKPoawnU18NgqH7PJ+rpx0APCssVLkDxnYlsEPROE+oRa8S3xaXc2T+K0cMoHZLeE5zNkhR+jyWA9VVuSJvRMen6lux0h2SR+7jdICrVgQy+0XwcgrhJFv51t7KZ8rtK6ihyMLuePZ7vz+/iZ9+uwI/7sL+ERRQ0r2MAkXMH5SNM4CxqgJ3FurVEZa6pdk87mstQ14U/oRuVdqjv7GrOkanJqxjdXP8FCE4+zFv0r02+xVyGd9m+7b5yURI8Db2jb9V1O3cHXY1bcIiechwdTgxXwIXvxr1wZQ5DuvH3swr4jiBepenLNFAHlGWla05Np//p61W9pd7UOM8sFmeMpiDf8+1QES5z/M9gSa7Iri/sQ0E1LJOgvkwbYJ+xbicf2zHwunQ+rOY/+fJ6jK7pJaA==';const _IH='cec8f88978111406c5559c9294565f54bf0b54b17d366e2e83c94fcfff2e521e';let _src;

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
