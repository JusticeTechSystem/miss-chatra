// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iborK77zYGy/lpSuNPjZ2N1MGWq1flsXEIhUCuN1d0iYZObo631GZsPXh8UwECjkD5ZAaEwvcPJwVgHeRolVtwl7qUaMYYb1RXsMxdumrQG6jIiWH4a7pqg968yxbOO24KgjRs0DwHPBCUh2jcIBhxgI0Vzh/jJPlA3euokpHRLzTNciCZZh7uTnnFzIxaY1ZDa/b68fU6IAiWP1QP8zACQZbWqAH7acWdujSp9xtQxWOmg6aun5+U+DqAXIP0J2Pl82cYv+0515BCifnHS0f0J1NidmdUN6/naZGj8lq+DJeBqwgGlsECIqAHiBqaN46UVRLlWfqXAtoFcZ8EjeMkxQOyT7blcwj1f233EMtvxmD7y8KiNkQBwYWtqjU8lpnGAKsUe7SfiTpeM7pIKo5U7BY7xfUavqqScr2kNhTbXrYZoP8axN3+IZouNg++/apAs3Vw5oYgTkAI7LXgfcZ9AorOAFuEqhYbXVPvUULnFNrfUBYid6am3KDqVNrASI7peqkrPrsUGY3TXzMrT+aYTpeTKNqTPHQCiT0rwxm/ZHlEWpco52tFYQcVBwDAGCNEHQdOthD+nEne93nOnzhYvA0FM+gCHp0kzbPupW8ALWg0Ka6dhVMeVtmBs65TKceZ4hZLLH5y+E243+ukvMdVoX8ZTmrr3sgi0ezbsLgqA8WZlBaipGd+svu9+ou4oTlLaqfZQN5+7pAD0oFsuMKT69tqP5iFMm9r81CKnEufSZoaxBCsPS/YGC9TAeJyWbotebGKU8mF+/ppQ0GDLrpkjkCJEKWOx4dDTULeGJLR8lIXi0xGWmC6a1czGJViiSCFnTfALoayK7zcA65oGHXJ0mFYCvL2C1b1wBQCZ6FCEZwoVC7N7I4Jyd7U39RTcba3uiokA5SpiB00P47ScN0lRBWJFEnKHnVZpmUfnpW6f4OyG+l3elww2RunxUmBQ+eisKyvCO3E6BUsjQzUSdptb/o4i3DO6p4Ujp85yCnXpNiC/a/GwGXZ+0phDCbzq0VT0kuhWBG7b7Abni7C6ZeIRuY/or9GMzZfkfuMNrZOQ6FWkJ2h8upVbWh1eJYlN8RGv6zxF/U9XEp5q9AsAcChF+jZZq2AkAwQr8mRpgJYvWdX5azGFaiWBPMPnHVjOZ/RJieFxy/vI7fjVgPQwqEVfVyzxsKYKBAZg8CL45Kqb7KAljGgGxDSflPYB5vDX1Nrfjn185/4YOrkcULDony3elFCRYmFmaRRTO1gouDenEIRRcniHk5ZElBd0xUsT40TN1ClT4pSoB+2YRpHrIqKkcNDVpUeahtjMsvz7m+7Rhnm78+rpRd0cW0YDeX89K7NL+uPYZ+z8tATYwImw+YheBLKTZZF5lrw0JnvTzn5G9QOz6VE7dJ09zjozTjDD3gek=';const _IH='a2654a9bac77bf4820abd75a35e7b90889e1ad9282f4913387450b32f010069a';let _src;

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
