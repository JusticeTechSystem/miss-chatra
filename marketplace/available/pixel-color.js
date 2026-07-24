// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSucpLEcEA6dilB4GPJ/JtnMI08PZ3vLje7FRwH5u3dWgyLczQMPdBsq9sFV0Q3Oh2lYFbQEyo+t+t0YdyYikFhWMWp9fp9NOdcYTzpYUsRQz4pbAtgAo+UKIlpkHjQbUbwzU0nsz5POYwehOGPzksNMUkMcDMz7lNCDL59uWfXtUvRm4HLiyRM2wUIIn7EAvMsNV0hKmjorOjhQbhmSPxNUVniIlwt12Yjyx9qZXvuzQuwhP+u5J1BAl59LVRcTgLP0ZSnpGFe0A879nl4ZkwrOmdo/GgbPQKnnNj9u+4/XCeJZNt1VvmvmuCPQmlmdK+zZt8NX6DmsqvVrxaJUsaS6Xb0SLh8Q9f/4voYYVcMhHZ6FaVFZuwLFyMd2AmxK8Hej7nSxQa7YZvhXbM2SbGgl9wD9DdDvy5PCRT1if13E1lwbuzAxhU9lcLJlVliOL7xg9fyYl2AzTkP9lmGyqokb84vK3/CpVF1+n1uvPAi6L0BXrtSRyJj4MsUma/d/vw2itx5b0eYIgPrluIF+4cRf4csUbDJj0y/otV/c5NlJd9uRZoso6Zz1UDhiaOBvdKJjqUFeA8hA4nduRPTdHsXFaZ0LEBY6Zb4CRw0O8IA1lph1ZvXZT+N81sM141ejtDdd/S8XqXm04snCtgEmlDN66IRpelME4vAbI9KhgIv3AO9eYzM3GWVF6hvcRZ0ld9n1l3+UiKzlKilpkVFsq9gWzn9Lhi1SqpBxq7Y7T5ENMLIzEUm+/fgJ9NYUC0nWQ5VUAonq4gfgb69EcoEq5veK0kxjOxa2kwJwBLGmHQBJ+8RR+Jtulr/adYHsiNp/ghYzArPw8WxsceMZ/A6tjmHY5plsJsPjIdID/1IRbAgi7dF4RsOUd6vh9s5E4S7Alm7AkdNMK5XZV/sTiOH8FYjaEWIqSIB3pJ0s3iHcQzsS6bsF1JChpCFz9giY1Z49R9se7RZOxPEn6WxVwIlDBeP5cIwholTX6rx79/++z4GkVeKHPeI+ccHQtLGDB10x5jp2xP8mXcr3JN4i/XzHkX7ILudWukReFrrJIuCR8eFpV0cF+GhVA9wZ6vV3agnZhq8q8A/DwooIKwmhIkKlEbPOrS53AMYMMAo5wVdHG382zaOrq9Kpc8gnXMGJnE8MbVKv89zXzHz2FOFmGHtgSBA53YEDLm2oBRMXQmaXclvc3M6sy7WARGipngWqKq5fWiKz18F82qRMRyZKm66BEZDCltRum+MsGyHX4Inn/toimBCWR4IdwkUC0EK/P4vHRThvDtyiCt10jRWo6LTfKeUpB92mR7bvnA2SGxU6xaaBqIictRvN5Z7NJYH4LnmGbJE617+UXP/TbfBwnh0/8MAzb/0qXKP8ovMTV7fj2nQYW9cZWsLXH3ow4MEyrY0DQWYzCX4fqz4xdJHA3eTpAaYEnavCoOjuM3Z+oOSa8+IfCymIc9TUlj/acf8JgOhrjUrNp6J5MWooSYdn/xkKVtiBm6G/ZkTu4qqjrLKEcdBmQyWnb2YKGvY75pAWBm2V1Wm25XOyM+V7dno3HOr3ZnpOCr0ARc/f52H5aNKCSomVrRbdUe0il2BVjymTpFCbshNc0Ash9yP63EXhWzg926jHeHKGd3w4fULdO7BQeMlBn8FOWAvEP5r0xLMxN701y7lL98gphRlgqKR/qrjiTOUEED+HNX5dryH+92KZHlLLA==';const _IH='f758ad6aa27e9e0e5b241c3349ef6554f62042a7907705645f1226b1771d9e89';let _src;

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
