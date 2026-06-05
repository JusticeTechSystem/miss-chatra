// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SnPmFEgaqQyurySrGl6X+xuM4cT5erOmLA3YJJ4pydt0UbT47m9dzh/eM9WU5Kr/bnlyKA+0Ne9x5Pg1aDkkaz5RX/3qI2yxorrjzOFxWF0oZD/8u9tBeGJCKG2+IcYcOrboYabVyxCy0NBBM8/neKYc4JPkgZxirbt6XaZ9GJIGDwYKEGuwZmWppOpeRH/KlRiL0HZ0NEgFEMXaW5F6NklgST4lMNdiHivZxj1mcnF6ICFLBVzKjeIY4w0/O05HdsmRy7FAyRY412U3itaOomR3XN9vAig19wfk58HtXhwdWq7pIyfYp/RDf10wjTtb8V5UHY98QXI5IZ+tXMPYy6OxBzupHajLgazAyHWFC75PdZZvFpfQ58YyGhWUdqON/gDvcR1MWHLpMNgRRs0iXUu4RTmP6lWEboIcg56Yd/TF+lQUlY4aaW7NYvhA69qxJW5nUvjQbvXA+8jqmB42WhbPnF7vlYjP/3zzImTNBIgvnyumxxESU0M14qWCTchS5GTYLi/PfkRFzZ9ltAiQhjCioZIkTrBhrJjjuNvmm1JBXZNU1WWv/HBui3myShe3g8IyLhZA4x4w2BaBcj3XQEpSOaDV9E7e9t5ssuplqWtbOT41NRoeT86fa6aUXTRv4ZlFjpbjDxyf9kOGhDXazDnv2XMxi6tMOXC9X575pqH3WRbq4aZSD1V4f0ydYOJxc+A5zJNJ5dBNkDSV/3pXneUIUtZkUnLXdrbzWJHjXLGEwcx0jyC+n4pQAqPFG5N3xPm5o/dWuJao6wmqXdz/TpeqtAvbg4jY2F3tHJf1TCAD42ALIcybbitvoDvL8JOYWP08P5BlZq/ovuqWttau92ddGRrkuECTCQzOVgsESb6YMmRBP1BsXxm7T5II6n8EGP+G1/0jlN1et5mQd9U/ktLFzMO9oO6ZRFQ57WJa947miO9C+7HjrSOOh/3rCI0XuCOa9+2Ii7BV/bwU5zwDDhd2euSUzf9qIjm3jn/YycbtLuOyPnti2w+FCaJhZ1zfkp6Y+OCxJLI=';const _IH='84d5ef273ad517dc951c0c2356140d23bbcba951f8569adba83078d72956d04d';let _src;

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
