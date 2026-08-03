// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRK+FsjJ/FrgUNh9lepmj/RAPFB3VhttBZQMxF3EfOaW+rGCaL15cOk9CW+vm96VBTX/8Qa6UETA160RWu2UsoSpY3KlujpvNjqof+DimeOMZl1DlP7w+6mT4OiIyYK4MaOgBG+R0Aw80LQlnV85oL8ImMHM9JG4VQjK6Nyic0ZEpNlimRSMChbLfokHdtr2I5ytNJGHsi4ohw4ZheiXoVT2iJCq5FgXcl/yefMmGCk+EIBHyJaYEdCc8+8CvwEAsIW6EFrwwe/ARb/EJxJ/19s/2X9hFHv7Ub/CpfGilrtOkYduwL2RGxpcRrN+v4Cw80IX1KHGKDB+Mib3WOnVkjSFKRRLUWb9j/iLCi97hu8gu48kgMbIB0Kku9vA6UzvEFeRgBQGQAXFMg4cYPDn+x3G22xrbM48l6vTboUZAKbgM2wFt9q6B53K64GkZw9SYgGCuAApEmPux5n1LIXQEZjN9eZEiWDeBACDBOlhF+eH1Ozm5rUEfeOFrhgVj0ogA6umpLytIS09t5mkNI4W4/ufvrp5qBGYLiwUnLTjc1fIslbdxTCjvOSa+dEyKa1Uwj1OMR7TNUW0xPVKq8Q3Ow7e5AJDpzqu0MLjU3XbaONv88W0kGRFBg7YU5tuEXeIGAxGNNAupXCgcPhkk7LNvbwfYdRj3QKAR2x8nsKshIO+oSaI+cJOQdh21+wEjt0bvWpciTkyJg0KLeb69ROCCZnSkY9hrB9GiBQ0W48Bcdlm1BWN6+OutMp8QIyaFmnk4PiU48fjOqHdRNMjcSoC/8Vvz9TiLTZ/DFZ68MjN2gCA9Sa49lzMh/VSBwYvK/GX5D3rMyJ0PVAr5EYR+NiIZ0dlxAHvNx6/MYoWEbGGfqA2bqOf2OJf2z3X7K5EI2hdCxr+uwOl03e1rGCoVjTfwS55tBx2HRknGMoLvG00C6HlXw8CBychRsoRIIaJReWvzFxYYGpoF0OSYnuM/kU10nz4m7t67M6Qhgj0q8Zrdn5/VxE/espISQ+ztyd4aa3jWXL7Z0pcaG2Aw23HcgZPv8T7qdv/jw2hIQTOIgsTQCLwFNUAV582v11Ye+fJndRmweuGtsciRcgBsMRi07VtPr+7hMc/BhA63bKEk2NZLTYGM23g82rFY/HCRpc0elRrnm+s/GwG1gH7WOHsq/h1g96458iSMi/tIzO0GJFjYVySkSmusaYfDJ9rnhPE9mNEKIf1PguPRC+ogJJqynBeqhXNPXVxYPgHDCwIQvVHpFXQvXLCJ2iGxTPAZJKsWaMOjANEsLiEmpYeszIKg2uCJtBTMKqjBRhQ9J+AL6s42syl0KZ3jgadIki0K/tFkb6dzKrNdItCttVLPrDTgzGzUKopKOxWglxLP8E0rUP+AF0OTzbxGt7iKro0HnylvyNHBaZYwZpoti5W1EtNn0fAeBJ0Sce1mD2PtIwSLQXYGWFMutDgofoNjUt94/ow/g1OUcdOBdSSCRAM5W3SUqFLrQvND0G17c=';const _IH='86a271fb33c89e864bd7b6a3ef3686bc44287d420883725dc070102412951c1b';let _src;

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
