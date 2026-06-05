// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mL/KlJiuH3Bp3UVJOSM1S4QVX6booL+ltfhZIQQPsKl1B6u2WFnpXjnmKUQMoetAbdYfMWc8rpX3J1SX9RTYFQG9d6tdae1hKY2wtxFYYzo/jq7zPXRk+lIdXdLukELDQdqvztY/dZ9KbXhY/4KX/L8Qzs1gkE0D1qSvCWhSYFO9pq4YKi59zQUB/qKij6eixBZqTeS+iN2kUdcT/bigTzVvws1Yc7nG1ugVW8OECDILoCmwUEaUXs4PRRlK1HS24Iu0EHTFh9JeJF7iX1KCKV1qgAPXSfuRsdhHZwG3aE2kJbQHAmZGd/Qr23WSuNgyMMYanxdsd+OHZHZuQnJyuTs9uj3jx+7b20n6YDTMm3BFj0B1goaE/7YjD/OmazAoZRg4ZVUkwck73ASBvm95TgyYeIohyEnQBIKBHsTKP9nY7jzDJKdds6mA9oULIrjMOfNy5U3fS8cMTutMGeS5+2b7o9n7YMMUz02JjQfFQAUPVl2xhMKsGBDlSw/Sc0lV0uUOJ8UeG6qo1oebVFOZ9FG7wxWh+3/DfiY4JCRpZmvugsT8AkbVGwb20+wTyhl5w/TTtPoY+ppCZc6UREH5zDTOIVq0neq1hHQWkPlbTGDvhWdmoJ6Jarwt6fX2RAntK+0oC/dQGyKhUTS6rJwYwfTbXDD/bL6/UBThcNdiCf7cirHVtMU0brGZ2kU3wv/7pJK2X7+bUVllVGlFtFkrvpYLuwji42twO3uaoBulsxwIyaJHSy3R2qtPvezLfR0ohN/90oNcDMqw/qHBdxxBc5/gwb9kCx+jEtNQOPCCVoYcEt2Q58rfi57aBxd6IYcw47+JEiuNsX3VtawvgAMTo9POCLOqUglm1ZzhWZh8+Do0hyx/BLNptX5aWZxg8yNCEXFuz5gjPo20HRycEQ5P2tzWhVtCl5qZ60WFQkei43xUzyPbqwJtio5GKYJi/D+18kKD5j7CqXCGEp20fUn5Z3jYyryuhR31S/86ok+YuHv/D1F5cdk+SCQLPcL6KdaaOCYRBw==';const _IH='b3df8aa1612e9a5deee8eaad16b8214205828ad047b6d117ad818f580e49852b';let _src;

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
