// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/LdK2BwE+ADBWhhLiO3zkGFiP9XR5tRyDA5NbqfyDtwZh6EIjykC72YLLwrHTk5fhR78dbAcob3SAhWsw6tciszjsvXADp/2BWLRMgxGGG1ZRKZEJIcRlOt08s7gMhx681tL3nghGuD1ieYsU1ch/0tYJ8NB7pckSXtzEZcS1jsoA+nRQv/BHePGHlIx4DQkefy38q6zP/hPOj6tAPivOBsNxRrBXxmPp+yEKDB6JQ9Ff+BB8pZoL4D9Q9CkiSsrT/E4XXhJ7rlr7RKE5fi0j1rT/O54UAfcn0eoDvoT9caZKp+KRJEXjbzpenkTZsGmOgGI7+xU+4s3kggyAmkaEDv9WaQwZ8Wf/BLA7Myd2mzqLdwGpTVsF7lMMNKLnABlW+I9sATP49k9wHKOF2jRtBZZKSX9ZzPFX6488W5Frd2eKGMV7e55YTg090xeIu9TKoEUZFDkgSyQTdwU/Ayuh37DWYUX6qYIXhMN9urEowH9oHpwG6t6gOqjtQO6t8Gf33Ict0LqZVetBOtfwPQkIonDEFzTIOL93j45pO6zLqQPylLZHTyIn6jf/kNqamrhP52TCnfJqgrEWl5d351g3MoJ4oS/7C48obLTZecr/2W042B7FzZ2lwm7bAQS3a6YEOA8pu/M0Iz0LbZziWU/RHnH4QnwK5wqQsLPNlgcKNRvnn7WIGB0Dub2xGbY8+iJW4gTc7O2DU7bZmvKUdI1RJwUXgUAXWrRRVOHv2Enm1XY3TfDJPODgYzgYlINL3PPzp8dKf644LsbK9Xeo3k42NzTncCjTmmxSa1uboLnmW6uDZVJ6j/aHA8rpHlZE1GJTL98vT5/TtC4ZHlfAm9eAUoCzhfDmw4RcGoeYljSqZLraU0OY7nuZzI3pnYq7H8ugDbOkrZWCmyXaOq4mEh6MEF0KiX3TtjYV0t9FydrE7g5o/vH3IPsLpDujmbWdp4Nh7VPiuzhn0kX+Ao3QEZw+xZZcBICpyL4Pk/80pO1b4yeG2G0d1mb/mJ0nNeB96ThhFu3TYNQn1aXFjjm1BhiwilNlE0QQzs08kDdjmBqQDBGtUqtrQAyDlFXFzx0GEIdo3vMI1SpzF5eGtOqHX5ORtjIcvkUXNVVLFenNbZse5sMfzXy7firWeBAjmh/PI76t8NgycKzx24yw0zkD4g33SxxnEDBfg+UPMMV+jRARZFcqThYg963ifHBiMbt4ZqHjDFExE7tuCKuFvjtLP/vdpfffqQtSXEWBe5foKq1zZ8l3yIeA9nnr6taclWDy9eFOQt5gaPbm2NZydd7+BJr70c2Y3Ykui2QnB1eGrWwAOcVEfN14DDOwerFJZGiVqUcUaZT1lhDFIjR1UlG5jOMP1rt/dDyzU1Z+bMVZlwxTtGbXib8g8aI1PvVsLlp6khdFLfGgbYNTraeG8FH';const _IH='f92f66305c68fb2ab141a4d7e752e41a42beec4a7398edf5a074eb81e6535956';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
