// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRJeLWwH7ew7Esz6+KOO2rI3x6ulD+DRfqfTzHO2tkwOmiwz5O3MvMoWy6zVyJf56x+vSVqUG3ln1efKMpyJP4EfJbfE9Ea6Z8+1Exsi0Lq44qwK+kvxnh9mB/akDc08KMhUsx2xD7A+joafUhdlHYSnF9qbqv6e6OFkSo79tJJ+uPz9RH6/ZgO7BOnw/Rb3CBhVoomFzYw5sMbuHuxLT+ppJNLjRbtmcjYtFD12WHDNO4Ev5n3enpnRgYPDDb8jp1R8UgrSM4tM6tAiosBVi72gARa0wYh+NhfiES6G48HepQZD/MELH2vqXf5c9Gh176hsuVDoTQo6TXVA+3VngZNRg4+wCRQVBV8X++h9fdI0kmgdlmGgRPvbZbHQLSLSqZ7ftdyuqBjM44Yr230gl16BTgwPsl1LTdrSu2PSECL5o24mv/ObTlUipk6CvwYJaSDuu1+q5jqzXoQW6JAkYIqvXmWmJ0R3hyMOcX5pCpfDm5xvKbVFJXoUWSDTvnuzwU7wkTLCtDU2DKjaUE3MdhTIDSiblLGTGI6iXr9vlETiYiN+gS69FwvID4Fwf0TatPZ7Xn8Pt6eVQm1u30+5xmHz0KvGcqKZTtKFF3WTtUohE0A60uFe5YLzSNwkhS+IZZ1XKXWHMD0dPculR+11bxBFyPkZa4EXTfmU+UyHNBUgltmf9HUd3pbJBCCcG4qXOWtG/TJgXmm87hDKF4jDvauPvTXF9DCKRlVgLr1fLEF5xD5r8i1DlQK8yfENNcAn8LuU0Iui5In//mryhI2ghzH9sP75jfo96juqwAKF4qXIj0ZgdJ5MLMeOCNDrIFTIc0mZC4LWggastzLRygQfCHYUzuf2RASQ7rPVRcwxHQXfKT/PLsiALHdW8fZbXOThrn/GeAps1xOIbXpwoqZxMk4qR8javcFqg2Vkw/c9fKM6J8nDWYmel77A9dibfqRAfsuXhgKvWu1JExX5+s118fX38F7Z0W6xAAfyuuIAJHanDExM45qK1dJHXYugiOA6HgKc75vD8EFevTzqmqLG3s3HgXKcAbCC3OuqpfMUA+LqgV/EdSbcL8z97ySZb86nXX2ql73ognj8cuqLXaotzPmKrHbM7CfT3mu5MSKd+cgHRFO7guTRbjvmkNBDcdMluJzbFaut/aiiMq9kKODPMFiJ1olQ7gMFgqmdKY/6yVMyVNZ8l8Zme6PgyM3BC9wjUwKX/tI0G6zDUnDajSeOoZQZ/Z5eN9uhW7M3gBeeEtzSYH+EqOZNj1nruJ3IKmeUjnCovG63USb3EEZopAjUH9F69x8ezzOW3HRs8BeCYDhmzNyRDyzYVHKYU5FYfOSgC8A9Ve5pc4ydk4HaaYXNzZ4loZQrHLY9dHOrlQMzrYA4Gahlg==';const _IH='f52f8690e269452c7a0e9121d935a376eb25bee9ead27ad1446a390a2f9d713a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
