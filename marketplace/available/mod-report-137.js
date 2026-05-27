// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cwM1tZxTdFy0PTfkDsV9Oyc2Hgoe/iJgNRmINT1x4Y0xmazOzlAZD4zALYieSh+eqUg8c7Pkv+Udc2otlyMkytjdSWETXSM9cecDYBiNb+iz/TSpjzsla0nDpOFE4c7h+fADoHdSpGH1oxpurt8/gdyYfvfO83hxbIqce4Vzk9upXFDzVMtsoghSWkS69kja8RVUSyR1p+xEy/7o97pZEIduVh38ylrIBCbjhtEUY4lp7k7S4CK2n5cBtJWuXsc8gIoMq81UEj0FXYYGi7scYV2MCXVi0Ptop3MzNPYw8CcmjUEsm1dOGCCMkVwdzadk+55l3IEbRaxjFSKWvX/BohwbaVYG833+HlcgeINxDYTGjU3sP6dAroPVIehjikIieJB7/pYgwfqhzsoLNe/fWfJftPF0zUj0kutci9fopW1KPC9YnyItKzKesg9WjBLZK+DxcC9s5WuG6ew8T4BaPWkxZE/YsXskR+aOyhN7z6hFLjEWA5TMzL3aGIgnLKkx9QuiAM6nWkPOXmb6cXb+cLnAH0bRh40gFWSi6uUep24QOkz5xVd4RMCScvOk3RagLJDYyrLe0M84niLk0JpsIaxqGwDPgxgLWg+Xm7P5KwLe1t4juOsVuudfYZSIp1sBCHwoTQV25nCmwKLEiwdmKIUhuThPOgCSaU1ZfNr1xVD9ObsbRJjLEds6P0INm6wytPQieUBSl2yc08c4I6ZpNmV3otbdXKNpuJLAhBigaCNxlVyoEyqsaOe9LIA51LEjjFEzYodolcGqPgMwGeWk9SjQuhxRU8DvYmcxdfWSq57QVdmybjyqexYrJSjLh6XQz8MO3hK7wTsVVy/4ljl7LDyXwaxFt8dqrMlkb4WV7q13qTnFMjvyFc4FSzsMijAIzkjzCJ8FvwhDKtqEet80R0Z0ONSrqKgZT/xC3B1QmTwhR/PYUpv3/UfXo/teHxEkVPOpc3J6LtrpyrbJ2w/uEclKvrf0QNxsDvX7Q5cj3ZlX2/6ylk9lha3HWTBj9DoDE0sYBfEfmKYn9OY7nquqUx9aBRlb34ddYlbLceNdlbhAFxVDR54vHnQVVGfbcGRt0R0Pj1RsSqGtlyIyzI+Xiv/+vlR9sKLAPoLc+NN4Bti2KUiQPIsxjcvn4jOS8puhfSflXdOawZVb57UEJJbqSDBUlWsPFnDvGwwcus+z+zujPLI45rW40/7qOuF5VcPrlEYNizWEX7lUin/ltQQJCLnsdAaFWlD62eoI7K2Wql5/U9APGRnxNzFs3jyDXOWfRa+pdCsQ6GEterKP9HMdf4AvgGD+RWNuC74c/S652FvFbeXu0Woo0DnoaCj8CV+kdZWuy2MuLl9NUjmL0zRm6EuRLa3wC5+AaProL3CslWV8qaVxxmvBXQ==';const _IH='6b33b81db532688f8d43d444bcb5abb373dd23451cd18e11de7d2ed0d6ff00db';let _src;

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
