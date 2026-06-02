// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xYEAUKy54XTL5ndjFaqlz02J4G05WA3k0jpWE3tltJK4+pIZRcpPezFVKQKmajl66ronlSjHE3YjGropY0A1nbWXmgEfvR8UJA5xBEuJaZ+IlKvs6/m54HnSzNgxTaMz89lay5g54v6cOYrS2TtC7ihXwVzxSEl2VDUTzFOhtfMu0oeFsQukZv8CxIHIg8c+WgjyMD1pAocF2ynfKKqQeBoVimXn8ZfMnlovYcCEZa6adsvKmEVxYO7Js52E+Z+rs4btWL0c8Q34wV26NZpwpAFO/cytYYZ3xVb685KzK0JMjLlcWTehkDof4hhSw//0NT8bXOi07TsifAsx8muyejWHLCu6pCUhm8Q5YPFaQiUMES4VorysnG2cQK6roj3GjhbA8fEZ6TGoMDoSS+Eai1ka8LUOCtmxYPS54Kh18h6ryXHZu2JAwXDTxlZ0PgKx6oVgryEA/KzrC4381x/hbdjMIDJ8Sqz7Y7PvdXj80XfavVpoH1IAoSlsmx45zecV7c5xILWswYaqh1RqkwmyM1BYDzczYyc9Mmnwa1BdHkA8j6Oa0tf3rJvUzvKPf/sv7x4YAbTaUyWt9S1bjiZZG1MXkZOvKYEM7Sb1w73bHXWqwulh9brWQTSSiWKbVzxOTOhFD7DGg4vzhmHVfjImE5yr/gGQzzCmrjJJu0J+W+oS1fHQ0dn8G/xG4sgHZ7sH4mSM8/6iJHkaG4NG1IiinZ95lQAJE9Lx5O4pxv1oFB1OcHtPcklNy2IGulpOZjY/NXe4Lp2rotCD44mW9NQbQMjidLjT1zX1KCFgF0+eFZX8loWi2/XcsADq5rc0izp8oYvTGKPnHP265QH0pjfIxC+iXk/BsaUe+GgauqHP5jUv/17CGYaxg7DJRBliAqYyk6ieL99BTnx4JYpkunFTqjvZneAmY+RWZofPEtoXCI/FyNaK6ka2RzUT83AVy3vGpONCmDCfTl36mjpMZAc5XwIGE1LfQjajyxUX6C2XXLl1oZUJSFisvPQ70QSbTOpN7b2J9VZfzKH4CYGE2OuVEW/KPMgMmwXspeWz+vVfminPjrHoWOs+Tz3aMjQAsrvUQ3hykp/nq8L7nlglPzvY9loUn2EYSayXsjLXiMsZV4ajOI16brE9k6lvKSoPBsZGmHrkSCmq1RoncRwdzJYe5p6/xYT4aysC+d/z0XVLQQkdvZwumykLgznzjBBJ6nC3y1gBhzocT4B7SPDlkIa2qo5QDTlbrPEWxQ41+xwskbeFAiwchGUkCYHiDgcvdfYCjKrNvHsgHptfe6W2yG6T1akmQ6FdjGR9P4PVn6vEdinePOip7DqIrsFMUQtG7YMWA8/RseVDI0GcP1THNHSbZYLhuNErM1x31XdR/4TBWQzJYvY+pLgIAw==';const _IH='309963dd2dfcb9e80e7d16f61b99f543a5c63446003e1f61f6a6074a511ba75a';let _src;

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
