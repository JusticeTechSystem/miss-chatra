// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C3+c0fA+C28PeQstmLdNsrz85Xuu9fIXumNvYOVy4mr9dN2dotUvBqZT8BXopQrlPaGkKjxkWU7jm6NRbQQPC2lEkou+GFfgIpgokMl1Bw42kJCOJyzoJYR/NAmSCpmvKlDXcdIzjsBdkcZMylQhoKvjX/s2//THxY+5ptS8c9JY0KDjeSp7ijLIp9DRDszL17QE9vgOlTntg/o6H8gtlPTewydjWZZDMJ2nTV2Xo0rDd84f4sim+SwJd7MZC+9LrYlIskM/4qUh9XoqJijk38glXBiZBdLsgLAmFs+KAePpM1I0LbwCbDADU75Gb0HHc0G5TyxO7cLpqr+pAB5fUntQCTtOvoXe/gh9TbgslIAuzLxtPvIs6GmNeqM8Orz+sEQTlBQqb3DgDUhh1s7LfX1oT0oPYJD40aGsqoARRZznQG4X5EenwpScOiCI4iaJRQfdfIxrj2Kipm4yZExzY9kc6xHHCZO6P2A5Zcj4T1MFeaG7TGD8PH82gZjFL/aIrxGdPq2l3FMg3ywNv7CGN9aIxWfN9agePJi+FSCiiWLEA9oEVtRqZIaf63vm+/BOeuecCjFmZW2L25OI29ZUQQuVzcCH+ie6gUd+SCeXNGZ7D8OMl7sYLentn7tacHHM6pGUSoxzuspdPdJB1LC4KoSsryD0hZCvBRj6jTktYOsthCcl14ETeQWw8JHGYr9jMJ5dd5fsRuP9wN6DC11gmmyAstS6vfiwIsZNToYSgQ0n/90EmuqwPt9JTzNjFf0RhIq7SQbaJh3JmH0pjwvm0SPV1jDcwR/9ewSgNqVGLJGqzDcc6Mm+vCJKrAL+9oZEnzL8OUdJw0xWYgzvjtobnoxOLI/5LTwikyOTdemZD2vF88cUMjdfdnUISRL6/tsnurRU7555Vy9KHsAl4pywALqu94VCcJxomHGPO9iadvIfjisIZgq+fpfm65IiD8w9dY4pN9EttIZbCJ1JHQb8D8hM0lc02w3iGjL4eYccHkoCCz0f7S0vt0wVKNLLzJ8DwOtRkap9nI+XzblTzVV5Ggwsj0uh7rcO/2yz1i4C6M4ChNPdoBkpCSJIXWYrJowkm1dQOKn7jaWIyZmITGp/E6Bgwv82T2eSAg/7VtqDVnkJPvEDVjeaaKormNLx9CYVFKzUhU+6R0LgDt42U88tI82fGu6B7u4Ia6rLP1UORMbaah4BYwMH0z24jbKhLkriU+NziRyE9WwF+Rc7jG7fpFLNpMzIoibhj4luRkBISRCaEgPSg5cZOdeMMnpZncx4rg==';const _IH='cab76aacb8db10f240026f9f9694936f680ccebc93f38559252112d3b2c4556e';let _src;

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
