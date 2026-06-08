// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8YK4gV4sArpc68OwSCU2jy3iFO0okHIbdMC1oKh1DmEkYTEgCPtAgDCuOY2DxloE8bQ/53KIGUrjc/UKOnFIcRYfu4ni7NKp8i69nF9lVMUPHov2OBcL4AfrEFp09QfbySP4loooS5RwmMjwXtHmQm48BTxsPu3s03vLdXoAoYV5Wyk4qeEN7qK+/QxD/swSGpBYg4MQ8KpBPXsPT2Q8mKigGluMAhSzW0Z9PPnQ81kGH4JZiLyITTzfPIefsp0z7UOc/Vc7rP6zAUEK+BGOHCytgKChQUoImQjZ2VJOo/ZRj/2pxqLj6+JJxxV+biBTHDsUOIrMVt8AgeQA0QctA+apwR6VhFyniSmXwf6vPUCpVbX7dsJ4blXwFZ1+i9npTV3rk4GxMqrk+lAdCifbwUTrwEN9K0iMLsYa/glam2JZl1g8pPjKxC8aWCZxb5Q8FjnIiqj/ifOz3eTeN1pmGM9JZYB+KZ6gi4s6/t8qjgcyqaWXqyTFzjin8+nSI8XQBo/XDxEveg3ujhT1jvL03ZA569X+GO+pfOmcbLTUIW8rU3SZm9oDWcnGyATJe/UutBUcFHds3pnDmU+JjLPdOr3r1apA3gftJklZFFvoTgVpiEHvfuEgfxkK3cKEJOnph2q5nOBF7vrO7/QeDLYBekSwQiuhrbt+xEeIKsmoEOyak82Swgs3ogiOruahgZyWAzq5ia0zenp/iUT3Jx7nmjapC77LhimURJVl9GQFJHwFTFKIVuiBcpD64wglZoVzQUZsI521PDVSjLNBiayHAZfGNQYghYTPDE/AROyKzUMCtSE9Uvw3NNwaIs+8E9eploNWMVZ0yUDjCjwqeUG3pk1a9e/dFNdukJZKmL2+OI9btAd7atf0lmRFS+vmwpzS0L4Fka6wGXq1RLoQLkSUCJXTLwsnle/0w45GKHsOKkVxjAyENcm3ubiAyU0Oli1TrjHfBRcoJ7e3VOo/MMnQypcOYZAmlbLyCd9iJmkZFM4sf4SxwJlt5w6+f5FEIK1QxyO68SWeRDo+hPgaHdEiXt004jWjk6vAMdTGhjDtFO6zkigecMqnS04Cz15JwQXEh0+kEeLFb64tiKS9QIVEvv9d2uiaKA6M4I0f4Zp3GP299RtRvGabyZI31D8rORpxo2ahVnYgeoyqx3L10CyjKQsH6DzxgglEHMrVYlie6/9op5gVqid9/8iTc2WKA3XI8uoKNUpNRMNK7kOHcYkgNgAeDTSAHaEEUoNlKjNBiQv1kSdW7r49h1HzGzAPjm7SudcTDuIKhCf64M2rRBkDb+d5cRGe2zLuVN02WkC1xsVg+XEaD7ewaMJF8RIT9aFqSUd9ULrIo8IXFORbyILHQW9Vil8DDSr3MTWv4mj6oCXjXkq3a39aTnNtsdrB';const _IH='5d3623746ccb202e4a37b215b2c5e06eca6f0732083a5972332ef4e0ac0230c8';let _src;

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
