// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aAMFeS4H2EmC5ycha1Ap8vDk9kWehowIf6/fBrYwLqwRLWJLfdtaUiPYvBxJfxEfr/x+mVOZH4nk8fMUX+L0vMXHHwiNIyX1OcddN9FDTdNdHq4B0fqi0qMxaE9Wsf8AYXSwYAcELZnyy7YvcMjI1o+qIbYmC5ICmuTl1eHBKT4MWWxFw57Pkg/1MatZY7I/QuAqTd/tQ2MEq/vp8a1tJuaFuBvuns8z14BcJHi2n8xVxXpv45qNHOczF8ceWhXdsPIsdWixr5a7vSulE3tmshTiRST/UOcMLjhzo9CzeLTIWLqaaEwl9bvyaxshLH3hd79nj3chUhSD8Qc8+38UEu5+ZEZs9pkbi6IRdNBCfJX1dm4qAVELPdv6OeuwlAOb9W/N9irB4vvGl3194PiiefHEyqN0kEDvwmLxyHXjnZIJaqLDTPQ7bjesN89KsVfO2zbRtTlBs6GoqyZvb9Li0dZR+BcaSjKrm9azY1E6vtdkAPb00ikcOFEjF4/Vw2U6CxpSdP47uYrAOeDtDYlVxwwC3N+Z7sw0zCUP9p6G7F3UlWF06uN+ZFpz63euy5ZLfGJx6PSsYTkcT8+d72rk6z/xlLKZiT94XeeoD10jkCuEkG4rnNHsU/4VvXNeDAOGbpe4+hwBCpzY241oKznxJOwbdeUB0Pqvt1QHzkroMilKZk7jEf/vz5+PMiO6wyyssMNzIv6oTntKev5eO+F6PuZ1O18PG9lZ/fEMoaV2UnoCU4/SVSITELZbaOwHZCym4zwpOsryCBz8SzOKk1uVcUYAFh3P5BAkslp81bTlhSUn9EqouyY9Z2zs3Q4bftjfpSqw1DTjt6/W3yv23wE0cY7z59O0KlC9BZnErRcQOR6CSO/8GKchqD8o1fGibigkViEN7Qc3yE35O/KiOGrlLI9VG2BxyhWpHO+nQrBEKkUqy418GwaOENuBJqzASb8NX6SbeZiMsTUWyN8Z7WUq7HSavMbBWWKNGE0bjVLgEve5uaY4tR7Moem/bDUf9y9cMc6nOSZTrl1X5pQchxJVT4Eg8ftsQ1jrm7z6B8Es9F5VYiuhSHPytY97biG2dKFiPRiBDDABPpwHYWaENXTxzAyfmLvRH20EIOFXSdkf2eEidKVKgfrPmCFEesXvhFB26clIpiMHlLVKWT/NxfAZQEbWUKxm+qu2koTkjgnOujb5C5DC/8sFqYE7IqYzHJROW/nf75e7/LIea2N+YQ==';const _IH='02c7a1ae08f9414d96bf09f7403e77042332bb88a0b475d16288fddc050c66e8';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
