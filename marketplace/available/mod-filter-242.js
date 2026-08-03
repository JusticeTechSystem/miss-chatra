// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ977zqMxlq7bkLnOFENv3JLgELyMX2sBSjd+OI8LVR14HG6Dl2bnDJVlaL1vhntICfNc3/Sj83j9/40FZEjuNk52NUf9KFXaDd9BrqDoHaZlotDFoAZzKZgCUyqFFHoyP3fmZqOZaa+t/b3hcwHDIhuwewpt2aYmZlrYQ9NVf56Sr5imMrXuzJA/OxWlSbVr3SgnGOjNk3CWbzg3lT/7zaXlWBAXH5v8gtsqw9vdNCmMmah8u5UzNMPEVurnEYmkxvdijQRczmIDPz1r1z/oKD2d0y9xvKCRu+A/lf4p2KRCHPOBBRwaZRqYWDtuNEARbCtW67aJDq5yaPD2yntQkiyiRycn1kV007vA0+PNPBKLKVWqKtXabyGKyzIC7VOR12ostJVVKzY4TmvhVEJ2IFNxvcqHOLMEJhvRpYTN3KqXjFHS0Z+W1tvcQ4sBh1Gr85iym6sbH2nF8WqB1EFb+Ac68Ck9yztme6mUoP4ID4YQCZ5C7iAjn7R4/KUNytjMWjMLWBc4sEgRH8ZbTfHsOsomfe3FTMOYemOh8Rc+ZTH8FbY8lAexQ39KAtNhTXCKme+SreMcZJQZNZEYhUy+Im23Z6t5ar79PyGXN9hy+3C8XdG0BzMCaicX2fUThq/9u+6CJKVBuLEfV/r3T81jGZlOjPLGI2NiH0eJNx37JsNtlnCwUucnO9g2ArhTh91y7nNnZZP/D/7dqaKzAzutnuou8zU5V9+AWtFjNDAvUfP/f3UQjQir8UU7MIPhMj7rBy3TGyN7xF0+9YX4wRktyDC4W0Z+qST3Gd+pj4nCL46davpkC7+XaWbPIwSQdDsCJeNuEBn9DId731PupZOChIVKezTPBJDOgi5TAynSa6fzcm+OXSe7ULgBafcQPuOjgXeXq7Z/+PBi4WaLMCsWJ2sOoVOAXRCOIFXLV1uDYcxbVI1Mr+uf6fggPM5MZZyNGhNbpqS+xqYtOO29hzXhUD6CiAGefk9lcKFuRT+qGoeeEudtwtmsHEaJx5lv3GK/WuzRYOATRoM1AVD7scipNtZ9RhYHdB4Rq0pp3TlynvNz+My9a7WVKw4iyXXzvnCG5SJUBDIS5XiYGT+FdnUoreo15FOLR+3bBhe8AJjvZgI13jkfPcHQjfjrWr3UEZjvfN0JbE33/HpLY836ffnHRALHuQ2Y1RWXWogYnwdiO+4pye/8+DfLuQC0JcejJw+tLthhqaRFQj9wyMSdP92g78iH7it5pBoB9M9nyVNprFkcPC3emc+gIGtaUocLL5AB2jnJCG9tYKGrmmQ3yw7UbJGN38b4Qrn+izf2H8AB2/ti0TOrumh5Pc0LudellZxpDm3nbSX2tLQ6WOjRUp3yWrhiAKW2iBouj13yH0S8slur2SZcHH';const _IH='b290c322f74e48751eb12bab88e5d675688795e4bd8c7b108af92224e73f9943';let _src;

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
