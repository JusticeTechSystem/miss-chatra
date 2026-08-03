// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4OxmjeekiO/JI+eYrhJpXKazuXHTdMXydMJYBCkLIqI3kuKbf8jb4+x+UqlpqGsccku8AUfK7UucaL0GtbGjqT7uzQvU4qwQgeGir2YBXmac3C/jtLZNtp8Ns2DgTDW/Ol8+zmc/0trNfPaSbbbWlP9rdnzipE72jDdwkcVezjEKsuaAHwDUJmnWND4jO9Q1C10Zxufh194AYCrlX7QuIxUQE/7J6JttyN2REI3FXG1zGaKh5GkEIhb7klwKKvYqPQzVdxAJsYbnjbg3mtIoJPeXSPprGcKksMWpDROyaJvXPzB52EfUYaJKRdXSTf9Bo7C8TQO5oTsKcvyFyTly1K7BsZ5975WoZm5Yo2vv/cLuarPNd9qkVC1pQevx4ZuUN5UxM5lGp6JIIXsCZYkg8Hz25/0WpXv0QI4eVJxNB69o+iyTVoFIBSIGP5xowlOczFvxpdVF6x/Xl+7zSD4KjKIwwieNEIWbf6YzHORu1NdUg1n30/jCd57svVAHp/xK+PhfDFQH3+L1ZvKb1wMJmZS7q73I8vLoBJo9WYad61Q+0y8m5ORQxvmcnOmDflyI58mxDAk+ECH9wPg0SzJ2gnLBkzlcsH4sitggha9vx2MB9M6+q48EUxj8+OwMpdjOI6tpCHINh11pikXjnYRlTOXqtlhCuADD23uFbx6dEnhTF2kJ/X8ot8BGbkx516VZF1ut3s2fH3p+kEfgl/3840t+utMCxu1elcLH2DvT9IgTObNPYQA==';const _IH='3f4b8fef8438f3451710da8b17bdb298a1230329cebdd825fde3d1072e5c67ee';let _src;

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
