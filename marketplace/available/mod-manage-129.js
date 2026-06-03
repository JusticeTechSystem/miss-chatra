// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P1Vp7Z8w7vFO+e59/IbIvA1oHLSo0TEs6PAT1vHBm7UlGhm8Q5IMBfAGlUxOp2/1e0k6HR3o1BOtqlr3YDnzh5NliBXR0OAujVJ92yopDYVqsC39AD5SUEJjdsHm6HW6eDVq3C3hocgvEymMjMCYuxPxwwiT35QmjoXKQJ3XzvV06vfBg45XgJAwGEFPZkjCrDkNT7Ao4PW5JbJpDUm0wst2KgPSDwphhiU/a45Avj2Q99lOvaeyrP3h33ScquUcHlLWi5Y5+SNrf1sD7sl5U3wkWROSOIRXOfemwhOPgS3DP7oOcTsp/J6NU+tl+X5nLU3mN9KW/cQvMf668oLojsdIEOXmVPJqI55dSWUSEooMoUDmsQ7mOOc9oLwWXx1npIxj61ErQJU3phB5hOKkGHhl/IS04LembPzLMA9nSU8S1hxT286QZYA1JKssolXpycrKX7wADvBB9+ISIMavJVabl0nNrchkqFWhANGMD6KNkNqA06aN7mPRM2D06zT4UwSeY1ZmZviesuEq7/4t2Y+eZLIEGYzJ4HM1iA5bua4ms9H8yazx//wlK3JU+OV0alarX+ko+UqkNAFHfnFD1Lpjpbjc9gdEaa9zCGSA5MwEFYJzJhbSX6cDRerC5XXJ1ZHCUHJzLvz75lT9rbHTwi9yZ6MUNIKUbDj/eOwQ0nusvGQoO1ziqbqzzflHueyZTQ+NencUGWjV7vvY3l/5MjLYRAPA8XU2xDeAPUSMkd2/aSa9VoNJ11QhxwWE7EUxmz2mbVDsV0jNtgiE+sAPm542hN2k7IjCSlBl55qSS7GRqYyOYleVHO3U7zAyv+XWLUI9u1JrcTlcJ+EBv7aWpIWJuZqvBJsWEWjHQtZ/Gzod5spT6wqFUQXKSj02MYea2poMczuOpIytYAomWjMs0uatNPx2kvmmOf2IOw2ovMeh9IcNMG1yH14unbVHaQdnmhKWKUnJBFu4mx8goc7yRsWMJ67R6+Ol09r90t/kbo5wp6VQFqV5IPXDGJkr2vaXvPFxM8EiQcbYayYMmtm3+akYavYXB0MM/HLIdHszMHsZgEAynB4lOl/L0P6gzUMrKq/+3vEG1IuSldS6ebd0WpYxtsTjl5A3PYdW/9dipyo2eVQcabRB+13ef2hjMZPMO2O19PznoFzD0daVVdpMfovfYowfhzZW9h0ntR7rGr1d+AbXmiJfrCrPPhcB3c25gpFvnzXdPR5q3Bx+GF0zSoOqxhlwDHyIhTNWXGcsWFzfVA+LS0fjjJMAnws7lornmYI3BCIS8Cotg3s90l8TCZdkh2S9vfbrRiU6FXqAwxTCYZ7n7QV+ThyAFj8YMF6gl8b4y3LhPW3K1oWtr0vdMl377LSjS3jyNMYDOJAYOUWudAZ5m2XLZg==';const _IH='7dd4d7136e1c29a20a8d3b38e61e20988cfca353c57ffcfbf9e485cd6b3743df';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
