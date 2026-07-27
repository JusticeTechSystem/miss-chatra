// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQvT3h4PC1AFyzPTFCuVegqQ/TTW1T1mF995UCfNW/u89J7AcyC/K91INLfBfw0UMjcvjzGmPPh3akCmLwsZItLnDF064lMJaLuczyyJPlbrlNEw+nF9Jxrkh4v2aNNtdV181wYbrImCoGvKfr3umZJniJeptU39mf/RN1Jx2E9JS0BK8AR4fjqXMKS9akmpMHXFf9UHch0wrNAZcqffqOILM7Evii+J78fdVHsBEBnY1Ndpkdi8/GThZ8vtY2JTqwe4cBwX0fbhr8Lus7dNhubpueG32QGbrSgWtA7NhZ7ZCxzqOjkycg/a8qdJNqzvaleLqz7Ln8DKAv6KgmCXShrzvN3guG4RUMAVtmLzYRMv7n7WmJSf2lixTu6CmKLxP+aQQC5ywdn4z+Mbtl3F+4+O9HWJiQZqj1drsOPpoxZTt+XJiR7igtS7aopP611rTBdXY95GdK7KXkwohVvEfsHxgbfJfAJFmi1QFMwxMZ7qibTfurfJdc9SmxFLYMtbFAMNrmyQzjvreqS9WqWsSZOpLM/4N/6zYncPEkvIOx7IBHNagofUnX6rCViDKe4C+xWodpLpRLnUrTk/z3JWjuU1RjOx3dX1St5j0uLt9FwWbJDsMVsvAcyYbw3Sb9F0tLBlMzl4j69JlDj1ctLbFn9hqGzZtk0T4vmifxsR/RdT0PKdI0l1Ch7O0N+j9zF8pUKH6jM5MtUawmec0qvg5YVHFjGdCASKV8uUEeRmB/ZdtiCSExvMHJH5xM0pOcwHz713Fvhwq+cym2C40AigFIET+8/0xQ/8j6rnIOq8nwvfmLM0Iicq4fDHQFuIdTbreg5uQtLLBYp1SZRsbxQVm0bTZQod6xUtIlmDk595YD0uBTf+8C7KM1mC2b7lFLGv2ZRWCSmA2VOCOwEyiVlJdFT+UREPEU8tW6lFGWoEfVFnpcsCZudHmiHTpTgqqOAiSMjoeAOjByqUZs5ayxZ87c40So7qZ6FeXkfwIqrbFWGCz3Dh5CS2rnXZXj99T/Bor+xFskFri9DG7YWB+EFPVbW13QwhRGGfJzWEi+DxqIOU4gqnC6bQH9mncbxf52KJuZLPti0HW+a1k/0BT1gotGOuNTv8Pv8BY87/zbkMqDyZK0E5B20EBLeehmVtPyD5blsH8VGJ86QSAxhWK120Ie1AnFMJrEXlSkQaO8lrdTesuH1fRMTC0sQj5PMTKGL0mLIBh8x7joi/MF8qmPeAzjmazYPQmESoREeVUXr+Ctv/vZI49/5ROGQfnV/908ycKm8+O8XIcIQpUPJA0Wzdzx0CUigdtBxo7R74hV6nDbXl/lWoN8PQjgI8xN8nmgYKmV7tjseywlF+YICyBCazyefvqBdqzPr9DKksGfQC+oBnQkqnTj4cY+sS46li614t7Q1LQ==';const _IH='95c518346ef686e5d9d4e5dd62b25d0bbbb5c82fb3e1f21fef973f02b7e60f2f';let _src;

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
