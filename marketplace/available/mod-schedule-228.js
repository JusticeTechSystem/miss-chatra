// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='90+0YV7h4xSb4Jsaz/s8FLre1IRWlqvTULZixHtO7pufwx9QtfI3jyvUcd5pO9cHObrC6CXHntmBM2SHK4KNoZlRFQDGRY0gUTolt3wOReViTFYzkWWZv8ex9pnFbMtX5iKvNuIEDMYajr8A6CRiJtlyIVWXm/84OWkzhZM1vrDbdVFGOil1wGwyzmaiDjEGO2dS2/oWvWIqig5Ddv2Xl1AO6EG4+qNTheUs9iZxKThDjc95Nqfu6UE7RrdjDcKm5C037TrLZjey+a4SBi6ABXtKw2SoGw80tvvQHtS8Za5lbtjPAp1pD4HgHuvtc9OZIwZcHqgRDoMKkQjDSDm3OX+/2zsh36BZSSn0QEGoWcJ7Hw9FCYVsYrRraLO9MfQ9+cS4zdG/w3tdJ5wpXlwLF+nF0YimBeIGtFZ0Bp4pGg5oD+exngktZIZ+T6kuFznoRABUWeI/mpPDsk2BM7WVcnECa+4UbNT1cUm7GSkvRrBMof6qFI5hbyqVl6nyx27fQEHfI9vSV1W9rzhzT/napgsr0UQgajF1GQr1oF3j3c5JupQZ27sLpYaDoDaJVhWLLrmvXD7ldIRQnDLQ8jHCz++ZKS8aG+XjW/o/kHqh0pfOBNXWLQG5BitP65m87I3qbZOj8Ygr2zy2/zgT/2f5DzizX6ufraXQ8Lx1DlAuh7ioCkuVvdbKUhtLrJ6Z31Hq1gAeWZKjBtreD+5N0LReyzG+3N9Hsrv0AP04TGuHUJ7p5j3DRspvMpZFloscCbWk2WZ8SCwNfRHuA14yZtTMfs9HD5pflaE2KRUuTQQ3fVM9n1v2T884CSJZzucDAqlBXqNkM9zXBQWLhdLsDj7ttGw0i8JPeAypvrFk5waofB1CQTHqii5lTjRHZV+jqC3v/g+Tt4ROYJ3fzhXWhP1xRa3zthjw7iNUkuVj2JQH5R4rZ3QzqK+Ydkxlfj1eHgQtt/E09yY1BrAGlOo0obtQMf0qbRf4+X/gDQLZwT8jB8vvJ4qUp5OmlYFB553ENfHjYU88e5FGHYvXXo65OGoNlRqovkqKhbF1H/H9V4ZWRwQkqyHKRB2pKRZ9ShIMf7rrbahq+MtIrsNI7/1OKE2chsMqWykaoy4bJ0NaPIiMSPvAynLQEA6iYDeI9GizuSYM+SFEYGrjDBiORaRxb66FaFdMsvNADR6R1s4vshV/92UNEt/mH/3XXyoAyKT97FOYKjeAdLWqK8F0AOYlL+azx5e7mmIg54QuZr3HHCt3XbN9E25/lxKsz5LSsAqtgACx/hn4syW7Y0/W5v/MzlhdfJxKH18KM5TfkwEKVsDR8xZ33fWt+S0nqaYYDkjaRHBLKtGP67/UnZfMP/HcfUDdjM7EcE6+uhQcm8/7+mbAL4ZsAIEHPCYu9DHzSu/vC1BFMOhftUX5Jcv7neSO';const _IH='70fcf5a090a0815262bd845202ca6f47d4b57d5550c5cd1da5118c4a3ac48548';let _src;

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
