// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VIc5hYcEYNiESyvrNfIdyQ3+Iem0q/I+lbjaJa+oB/14rggBqzJVdZXOHBJEpMU2sttU5CENsmZSJu9HN98XS4M3262pq4yDteVJxrTUvXlxWqjAZrLgc4qeA3XsLYOI3s6G5ypG5ECs8lO7oIryCGknnOInanVjxu+F7G4d5lqTRuEKqlQKmsJTbXR4shBW5jHu1jIWZQq96DhLMeGjA6ZWR1RhEyJEeSnCxQ2uD0zUNcRCvJ87u96T37ovYF2tgYHHar6/SGM1NxI1rYHjX7uynO09d6o/IUTqG25P8ZW5Ql/0KsWRYSL70wSClOTksgaOqmfcV39th1tCOeZ4MRZNqKM5VS1ROkkyx+E9UaxCN+jLNrGQs2cuZsTo4fJeg+bDosQFxPKvzkWk5ZH2bjIZoskZXlMu3PlQlIOANy1OAKLLsu8DikF/b0I/FLD6fAlB2br6H+rJ0olrY/aQAwEXYOD2bFyvaYKnSiT/E3WOh9wDa/FsesXJy1C224SnDxwRanpoxzLdERgt/AXO2Sz7srGr4WQYnkM+NmMTulLXmE3hy/UmvLoZybxsqiZoUUO6bqXyojlJ+MeyCEX1XqHeVWMwtUqgVHfQoaZZ5HEUfNyj23W2tkxgDjFGGk6rLOY8hbuztlU2FBX3LCW2oS2CWlP6ijYZeqYt+7Mkc6WWpWchSWUNgYXBsRPPjZ2Gq+0GIeH6CuWaphDqVuiigJkHulYrUjicp3ev6G3CTg8iBFTjbkHPjvPzrteQI5M+80FKMSHYU0C5mLD2akHsI/uOZq8tVUACzLd0uHSp7gE7L3CbQ1GFHgs53QZ5E6sCOe9Iq249pBaXyanYX9c3KWh6hYZiDXav679mDwPF2ZmE5qQE0k0pQ3idTaQOlB8SleF4YuWsg+y5fiIlveEG+6t8cJL61uhQwLJ7kwvv9RmBFnTh/lf+/ZuJUlmR9bxwD8pWITwVOw8pAlipmdYiDMagP3afGmgeuO1kMepQ8xqjzA2762JXvhykv+rHU/BibpOIl8QXM+QltgLZ/lxaQpEp';const _IH='7ce37fba759fe65b6a292c9bf44a5a3edc19118052c36ee499414f86afe44294';let _src;

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
