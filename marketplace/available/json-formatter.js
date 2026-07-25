// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjScZsZzoDsYOeiXNKhh2n5BIOB+ZumjXkYmtHu7pz56H1TjgUW9SN1PYWZUpVZ8smEW/vqa4WlmoAu0ry9pEX6JzIRSL67XRJc3pjX0OLIbr3CM/n7bkW4QziGlO9cQsKITjJGfnoxzG3utlpD5ZsLw8D9dxJyxxsdjZJdZVJyU6CwlOVMcq/IJU2oXECPg81QFZ2Bl8QfN5tT686tjI+ioF3NsNTT5kEz9iQGAXdZbnkQrddbgUKdUj+8iTl5Bkpd0O96hGMwWzibMTT/u8q2kmPJVGLBfUtuFj7ubslywCzlHL+4yVtXSc9xJuxIM70AGPm4/WpUQnf91oteYj9o5n6ljO9Hgae1aFjxcwkISanK56oFBZ5oNgZKR9It054TfmH4NBgJoOXr8MG6h/Nojt1j1Oftwi5noR/eT38JUM9g51BOp5KI+HG7uGPro2n742tQtducDuG0y09soxiffaQ751jDP3Yhmq8mZnBX6XxbHUFB2oIELwkRLrHTNc21UVyphs88HRQBjPKH+IvJn1g7xqxqolb8AA/mwt9kzAEU1jy3cGDdAEll+Nhhcrac7u86PQhxJEYEnwkQltlyxH2HYAhApaKmoLN4WJjUfwEBLdz07up4QIESuySjWqsntIALNWlmBVpzr4DRblwRznJgi+6ySWCd817Ehz7SOLZmIfeMUoBm8LJv+GZcfp1EAHiYTnC1Q1YDWLhXVuvHXn6w8fy027EAlvRf81W8/fbSvHNSqXvHEH/84BnrRi+7q4Hiz8CMto21kyWbcY64PDbYD3w1NICXpckgeoHW1O/LXrnt3YjO3Bidt1DfNeHxy9iBU4FvHjNiaCEs8fCJQzehx7J1cX+StOQUqvcAg0kxXhRWO4TIhlMe5+LOBBdXJCCGEc+8saahlp+mgdO2n+BMPZloAXGdR/ZS5pFWpArllAUtzwTEmbhsQw3BM9xBOcut+RZpzAWec5UZsHMlEJSGYnCUB8MaoIPjniNwpMRQuB2gEoO31wBgYzA33VQJ1h3jSiqlEfWoIaxd1YFKXEAhXqmwFoVBFI+IdH0BzjpIatg6Rpk7DEv4P+yzZy2PLnjILK0jLAmPbXjRKcWFsc5iV4aVxNj7NnWwzbAx7YAP4WeEAImOnFx9NBgjsz7Hwvt6Vlz9jaS+s9Kio18kxmRGSDPdxfNnpuM3iirGYYWMs3UQ0kxtXSJnaJk08gW5fJ4PoU3I8HpZnho5IJgWgeCnfKGSZHZjNsPT4RSKnJh4UxGS9AuA0NOKKzMXcMCTNTP/TEPgWVf4bispLHs+xua3yEln2AJy8AEFSbvbRn5Y2mg==';const _IH='95bdeb2a6600ced982296847fbbf45ceca216da0a249f9d3647af4c42e3165d4';let _src;

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
