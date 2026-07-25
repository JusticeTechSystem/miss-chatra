// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRDSlJUktM3v8XGM9ssUyCHilmHzAtvoa7xjjiczcCJdNSVyrwOwBTYlRicZhAw9GkM+jvSUx+zXRBM1GOuqEaPmmcaQjY62jPHCKPN3U7tv5TkIDlQDzF2IAOqqOZm4P3QXX2pLTfpQigeabjyyBKCjcC/K671syrDYHFLJf3WOviDkC+iejgfsHc0BTIcm1h+Juak/cU88Eocueo6xYHQho5Euj9Jtxb3RpgxtE1+OgwgZgEY0CN41+4Za15JQgqOjhBaAsxG91coXD89cebtaii9b9vcolVl/3UiNDuF4fiq7E8I1vrs0dFUZfB4GMDcpoSmJDF84TEttEDssq7I0TSGudca/jPU6q/DdRosf+Yo0fmahVbBkEfZep0FbRRWVNoM5OTFBnri0aXMkFEHtBMB0gtKLCZwKJZEGfjAQXztBk5613ABp3sT5U2ouBVysg2GQXZERB0Hnc5v2eTpGpySqqxXiCj34eHadoUtq9ybkiMeBlaPvrsstMoTGZsBDRL45uVIyZLLRbeCq4k0xT+rjvJwaK8wMPkFKV4vaHslqgsUQh6HSS+rvQqCzPhm+iAaD1wCVaxDYV7st3Jq7GqPNx5MF4XGPdGmvgRAlh9cgadj76YKN2ujAoyAKiSkD53892Y6uXWOCW3+ZeAuAkx7iNREuA+qNlRZheGDO4K2Bc+Edu8NGLUhPT0H9NR0KMiJ/Px5SltebuiDDOjhXnOE69PAIk9mh7eqOQHfcrZF+38e6WaVNAuTnC0xKvqdEqRvm39JgGLPDj9T47XC9Gs73sGI6joA';const _IH='f2900e23ba92ead54769d08af537c1349023246a593a9d59f17721cd8993afa0';let _src;

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
