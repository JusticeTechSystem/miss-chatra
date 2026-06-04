// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hAz3QS0fcluFyKxA8M9lsbEkYwVjrSPQvoBo9ch9VGE6ZWw7Kxu8qb06hKimdRC6u1XxzA8d1x29V6LzrOgcz3dYgGgBaawhDOiET3Vkq1pqn+8GYsHXlIe0zJ97bp5ixLc7qqQhuSmJx8/Ken72hYnquyX5Yydm8XJehhCzJihUU3NivPSQQMLf7LL+G6kYDqhtkQK8mzy0vF1+02pivxUHkqjiqnw+kuvYcJp8N4BXTMx/h7dvpN+BDca8r/Va1PEV0I+ToC3WyV7xspohyM5A7425unWNiZSNrNOCPCSA/rCS9l9x9v6xmKLF5LILUtgY4CRw3/zv0mD6izhasjBnpKCsyy5S0NVePa8Wo1itRC4xtxcTTzxzn0eVa88AUS+EtQXVxjrrDNmzSmBjPtFf2rUxNUfRgBwpYjoksNEbPrNNfUBkbyR5hHV65FnmA1Cobpv54dfA676NtsSsFIWrDnp6Q8pPGMKQBolcgLGXGCkth3GCs261RZHu+bA13SNTnfEkMKGvPuIg3hokg86ekUtyH1+wy02SckdYm/XIMKFukx4pmwMYc5hPsv6sWBr4JDumOGM+T3pEPmu03wcZprVT7oV8jp1/f+sprg36I6DtYgVRT69cEHDBQ8gWdXyUywgprFEi6wO/w0NhqxFZat0QGrypyY5bz4aB5WwX7LK8ZN+GrN2uslP18epEIjXSMcW1CUw1Gdu8zjyg53m5p3vg0bffKEQy3kEw5Q==';const _IH='e3c3077cb9e3d3324b4731d1f4c373838461f785a74e00a86aa6c35ef67a01de';let _src;

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
