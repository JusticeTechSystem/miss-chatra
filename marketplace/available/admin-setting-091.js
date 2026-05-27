// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BV1SJq07wrqWNRmSJ05+P5TTNTu3w/Rj3EPtk6rtJ9krsIb6/UbDskj1+USevVmQOdHEYfERS+uatwibtl+PTD5eSez3k/g3UvgGarlu7FbRQZxc502e5VFJNrNsTEr4ARQuYdy65CYJA0bQTPdXXm6JNYwbzpgxGATJLxxqCPDxHfxNrQCD5dYZBQBXiKwFG3XMzHpRcRgvQxNIthRioJzOMlXg5PZ/bOvOkZnpH+6sm489dyXKzuZHdcl4f/COknUyvLj4RARZGDb+dcOLVbr0xSFBpTk4DYlGDGtqEx0bCQd7AJ/ulMnNEsdbEIUR9ZMg87OrXe+1EORJOkNmO9AuHcjE+qO8y51G3Bah5GeJ/EaUCwwsXbhJH6q3/5tE+nPeG/FxaXtmgSBZh5aOFkPJhYvnbIuA5x40DgIsD1FGNv2r5DMJ+4EnhflhFjbAjgwAAWMJOEweeYqt82neLnLK5gEXOSXh5m0/OR8qPgssqbbzYjVD4alA2o1i83rQQsIKGqWVprnPu6NEUhcN+I5iWaiCUQIDvrdCdO1oUW3ToUqpZX+on2ydl6BtNYiGK0obRHPeLdZyr0pN0lzSMGFy7Fj9at3hU5A79WgiYDS10ew9q+InqIgR0jrHa6D4HErK/2+upLU/+lBi1m+pmLQgy/kircc/7GZAGvc5BzgySOxCUPwo08o/Llncyr1xpWc4K71poo4OvSKcUxK0i4Om7JCowOajiw/1QxWWc36Pl6JJQC3Zv/N/w6VHGi0Azn3TE7dwS4tzSsp0ny1DF4nPfaojOdfxmEPkpa5r1jaTLwXytPURrRf0+qchTzDG+EfuyrNL9uxQEwH286DUcR85Jp3xOP/Bu9TnUUJECOAI7Zit30/pGLbk5p6wH4B+PREnf2ciWsFf3OJ3ZSLvJL7rl71GnMHXx7NkoBeigwYE1DMj8bVKnRh40KXkPYTkzVyPt5PhXAh7YvdTlJXK44vmy3sXihxk2GqI+i19+1BrpYuP1IZBnXfXM1ixNNQ1NvdPcQ==';const _IH='e98035d8aae4c6711a507ad3c73e943cc6e9bb476bf66910d4cff344386ade34';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
