// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSx7CeMw2tBbQGikZVi6BDgsE9giWyPNnW6Sxtl5b2h+C4rJNu2b5jWdaLp3Eu2mZjqGEuMy3GQzHv3hn7lzcQ3SM7Ja2rlGUUSTJBIuobdJWG9aEBc5P2q1mkaOrbj1pG5EaBFWe+Nv7YGlOa0/j7RHVdhRH3MF2svKMOkFc8eagLq5ObXdufRP8McammidYnApLC4DiJK6r5ZQkplPsQorQApRQsmMzeGZYtnoq8ENWCHaVhJeCmyRyeYpcWbVVWtQn8RGql6pVGLXrHZ3dmzGwTAYFw9zyzpwQ2egOEbywS+dk74sLV+yN0z4OzvR6yxIJYJpsHBmQt7xJD/7M57t4ZAYwnXmRWq1NzmhZ3Lunhx4VA6soYQ6Lwg9P/smRMl1HM/KHk2/5z64y18Z3/zacC95Ug1gHgAEKo24+Gv9+U/73DAb/SBY+u7LHFaM6tD83Zpk+cmlvQK69CVVCBWAWQMh52GVmQWiHLRyjrdQH0i2dExt31xLRmrKHjj0Ddg6C/pjw8T10EJZn6rfIki2Qk5EgqqRkXeN/Zok6CNnvOX/Ulb4/atsNNfonKkj3Q+lChJhps0/d0+iOiF7ubzLY4LH3feBYpzU0rkg4YA8GIU1qRmc0lQSETzsKsN/vgQjZtVtNOL8uR+FyuoTnlyodpeSwoba7w/WWwdVqz66EOWXrDnrHCM8MK8XskyP+lz6N4RsZSK8twsHV4prgvurEBkeXONDcdvUcreU3iTnEHfbFElFHDBIXM1C5XDmdc4JoiZRuhjmh8pIwHeQ02aRLVCmJI4oRzjZjdS5poHsGvP2jVvXycoLAX2whpDnzbaB9OtBE5/qab+FolrmVVysWREbATxdpsE+jqwEhUU81QnPYHcUhAIIK2kKN3eWAPCIGLDVw+/bw5ByrUuDcCv9F2c4UikWI0cx+9l0zFOXUcxbLmKnrdb6I0SPLuI7+SZCB1LYUF8xQX6BQDCVEQ7GQ3vCuKco0b4VqFoXhOUu+tyTxaz1JRZlwvsVlewgC7LtUFlgyd96MXXFnt/y9lk5vUM0HJi+AposL1jY8vA+kKPVNcagXYiJ7JTAdqXWmdNO3vQKVzw5kg9jiCx4gg3VnQeXK1Yljak01Z5/24osxtUHq28T7E6reDHyK3J03kAmJDlzRFpplhFfaTNiPNCStbEw9W3YSw87qPp1crMI6h0S8tD7xIBjiEA6vZ584gJOMnU+hKsutqz50D2bFme5hO3TfzEuLDL8FCvlh3vozxo1RthAYITZjrK/NdWt2Rs4Ltd/dkYrHa9+P2HFJvbRSBr2OF4zsjTi31jokH1gLJ4d/rG2+Q2831S9tj2VYkOcyLde4Y/zQbUDxpqyFgAc3fKW7vr2M1F8VG9gsM=';const _IH='82c175f05c2fb9ce1d6651a72052e646475ee97a673a2050b979f0a682498d21';let _src;

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
