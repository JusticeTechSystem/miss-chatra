// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v46evjU9DT2g0TWr+yXN5mi+xbnDY+nKPni6kPHqdL4AM7SJqy84KlFf/EkS1PtCKIuwZ/Y+jMy6jmZw/WiO54Miv7xJ69nTHxZjOBi8HGuUcjsUcY9a5Q2PMn4BtQBZEqV/Ds1tfzfk8dFcmG58a7rS7uLEeoIcNJjj/hqa16NWvZjhUasX7tY3b8uAFCaQ5ucf775T3I/+57ufkFa3Uq5H83XPMlI7iMGJIseCO9Zja6XknN+B8sP/Ur+cMQeVkLf325yvzr84HRglX2yCApWthzvid4QsrfW/maMcAnEE8Qh8gJfxTManElgnYsvwGwySHWjhdUEKZQLZGvdGywimBhJ+NVhcGfMq88/uuIF6PUFytQyZveQSS6dpMC8Fgduvbk5cSzpDRFk1BnfR4/3WMCY8fXyy0yRXEHNZT/H8yPpiTvW5HAtJC4EGns9eIkgq3gazS/d4RqaSVOhhp/lpJw6i99MaKFpgNRoy6bokKQroeTyCFZGI5qZADXVMwfUGkFDcdB+Rw0VfiNhk1PAWBnW2kYn6khhkGaaCCEukOjvFaJlqdmsFFLMW3M0GLQnJc8XrTy9pIgAGC5s4rXtySBwghmhB0+1nEUT7nfQRAIh+93yz0P8NvCfhfUbv1hG5JXO9UlnI4tXUtqfDUD+d2rKRmfNssXKqjdFf4T+2gZPkV55L6oule/b6g8qKnpOZvyyvKRx/oW7RthgkWw7DQ09HZtJGpXSCpLLSmRd5Kdos8ViQG89Zdr3me8JAmp069rJ6AzwLIEWMmsdiZf1HKnJ3nx0GH5qiUFkdZPSQxLN2gqQbFdUn0sE+9Y5h/8BJDzkikqHidlZqcL5I/m/W1QVr+YT71lb6A+E4HDBVyffIlwkwg+RE89lRT1oe1DDZYQz4sUIOf/4dLHLxILPEnRcT6wRxbpyA2H0F0C1LZLkbFjxdT1DTgSIEfQUU3M2Oj+E3hppArvFDI9hj0jWVUdy4VAAt0XJrnJCSkEn0jA0K4kkbyR+vqTneUxXpLJxdrFan7QfkunaNTZeplLrVORZ72XemH33CKsRkXxC9C7ZaYY0JgHjEThIXKL3OD6HkHOS1P0VoRpdpcIUC0kn6HWVR/zTi3C7+C+KltL75H+1qWL7m0Au7Yh6InxlGUsEgUXXzoSgomTQoAOaisfWPBCJmuEq7uwH3PE8R0nOFN4xWkiXGGAVQdYAhALhmZ5Qe0iPXUEAxhzjKyMTcvAUDlCJGUx/TaF8AxhQz4yDfgwCFqrVOLJP9MgzF9HMAQVF8++Cl98Y//+L4Ypt56u9HVikqXdovYgwu73NDlpjF5eUqPDju1Aq0cn4Lq0/L1ytD2An/DB+W4cqHwgBRhyxzEOY7TO8y9wc3j9cn+TFsUIBDwbpXltXLahsrJcc7jrM=';const _IH='b1dbe1488d052dd356633310c89c6c7475c3c4bd7c3f84ca50876ccfc759bd7f';let _src;

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
