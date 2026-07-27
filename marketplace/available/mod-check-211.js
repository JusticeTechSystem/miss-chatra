// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSfbxhxssEUcBd7QqJ+a4qx+sULwqFhyQ2QKRXUkKmgRUqXtl2Jv432eopRJQiNAWh1byJ6Y5mrZPXuFX/DU47ym4xUaUv2aeCwwTpuwGVQ9iCf8xZzwXZdTzxYS3rpg2QDcKOwU4VNidjdEalFg2eOdT1swg8UE8Y7rfot+0tbIQp2KWBhRHEeooT1Szsdg7F9E2w8Sedzshgb9eOOSzzc3pQy9EFhArt3dlIR5eFwEFCF0ozCapzTTQtv1yb8U/CZwNk5eiFYSI1bbeKN9mZzzpO5Z15e2XImW7vlV1MDg0dzYsxGq/PbHSkc4+C3ZMxbEac5YWwLUFGKWlpGuT/PvU7V8O4S/50wba8rmuifzmjmRCcuuWDL9hevvxAKpO0Tn5rkezzM+HUVxsRuRSPgey+3r+5AgzvhBfVgaskz+UGUFF/idEIYQbKJsxj/sgBd0YWDONu6oJVygUbsA8m1cAxnswcUKTjtuwBG9jS5F/vEAGtpkCiCXrWRfo8CO1gCT190EN1xoCT1SIEy+phs6jQP55nyM430MwoBREpTeKTdZr7sxlRQ3dMFa8a63ZevC9VBlq1f0375GN+hWcQbySd6JbgUB6j19fRJLYEeJSAw50wqEH9sBAMf2Tj8VqTJqvu9LaT0q/pOyzf3NKnYywb2HjPHCUSIwHbHN8eEG+R7+jSXtppBG5zCUnPHNi1JiFXh7Uf7cKcqAb0VBSJUYhCKhWx320T1JjvAIvHOhbRimPySTiQSPahJFVpValZ67N9eR4ulXwOqIY/lfBPBb+OXSca9gN0HUKuZ9almRp6Sw7lTgSkzofu2hzz4aEX2FcUI4U/mxZbDxCB5Japo0D8QiqaC6TWeVDbKdQpBQ4f/xsVSN8NqZdg4gVOLk823GH/rDAoaSeU1r4qjMrdaSv8CeFUkzX59JFtdOJu1wAVsejEXuYcP5WkkOCl5RY4jxTWgeK4MtEJuMwP20q3fWnsedFqSku2a0bBjDWjrJzCyZ3hOS2wEwDO3QpznBJruXvw8rxAjiHKY8Wez05czEnwVw+q+SkG6s5igILihM6d4rim/aQF54T0sWgRmkNVpagnuGjjCDyYGbGGcsWdNP1+JJARcwxJsQgVJ6wl/wRYnaOr4s/OEcYRC330yaWUCmD7A/ztkI9BIeCDXIRNqLa7q5haJqfH8hXu+BRqCAGtgX5BKOcmyYubidxC3m794Njs3aRazuUPwo7BxWzdP1fra5KR9DBrAdEig5eGSl7ixkcpNjLItICY/j42hDOhj7Bi/POc5hZoy9Rhhhttwj3Urx4FxI6ruPVKSczVN1x+mrkokzyBBUkcz/GnQ0H3BdfVgoeV4fdmoLUbUQ96eom2+bWUxmG3PQGKT7Ik=';const _IH='6b44dd2f6b0e2f6b52ae43fb815660f62b62f3bd9065fbb34aaf2ae764e4323d';let _src;

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
