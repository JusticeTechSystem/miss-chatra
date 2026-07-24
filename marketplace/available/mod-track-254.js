// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS6l5OsS4WBY3n7IwfFZFtxjppqT16ZWjvdf7fIAsgi9UWet0Dx8tSb3UCNQ/PPxivT9C9pkYeEXaf2PJQCYz+oE6tdhTaurjVYLkqTtx5XMFHm0Bmu+Au05PajPlaefiHQYYNGm40RMLBXzLnUZsEm8+jxnG7VNItlK8k/LftgRbg7Wwm8msvIWkn9O29hHUzJb4ghKTN466yQEcUE/m0FebCZvLcyPUorp5coYlERXwwLHq7ltuWCnpyRgbmf5DsL6kbxQBMfCJmL+tnJhmj4W41tkF2o6ziOjKfWk2oARPxOW3xhUJjsjqukFCUQ0j8gLjUBNLgwaew9Ho0Aoby967pKE4Fu1mdcAeL5PQdt0gWzcX2jbunql4Ef/6vrj/MNGq3IfBqUIe8g/NVLuqP1GKl3nBnBc+DZIdXDYNQIhnazW0ndQpbqAHysuODLewIMbtAhnf0es90YEeGQ3cDwA9dMdw6DmQFrjBKzBkGQ2G3Em4xSJ9xHBsXTOBarCCywWgWJyMK+0NcX4bIbi3GzaUHZX8nW4Ve8N7MljtZmSWCPFvXHR2Z4YWihctQLuOjPor6GIQDdv6iDhaDWNFh1wODPAC7TPQ9/XSGDBryfx6osV1auCxsuMUUeWAC8ENNyqtL5/5nXNv4vJfOFh2f6oxctkapBW3WuAtJLCMOQQ5nS01f456oARh+00vdefxSkh6v57tAysRoJj8TCwU5ZQiCdcUehBok0ezceh+UQbkcuUXqdpwl+BQtavFI4uzEwH8yJk9nzfySUkZrVjzi/i5t+5xJm8UjMs2JSXHCqA90n2d9x6MQwkyerDd/POfsOf8hv7KgAoTHTjEmPMNLRCAJQxhbtd8ls74UmahGz62TB6kMRh1dpN4Xcw/oaN3AmJuGKExOoaVbnPfV0ijmRHf3KjLTNAMKQjN8Fnc6vY7gEvmpJVe4FjVJJvyMisEq9ZaNSgrqZrhj8HbDHG5n3P84rXvEhQmkUCEgIwNSdxE+gkFKGHfm63YRJQtsp+7eBwA4S9DqWOZTCgu4jPndashwHDG5hn7U7pan34Pyi6SMAcUKmJD8/FUzpD1ITwU28J0xqtpvTiTYAMf6fHtahM4F3e0/Nz2PYMs13Y23epZZ2MmVH5SMNCNo+9icR0Y4fLu0w1VJjKVdrnyI9ILQvPlvHhLj3efG/hMcAAvuqsaT9GPkjCxMmQwKy+zH2yu8iXCHuMq7GF9H5O1cIOMGEV6fiyCpk7uV/Do4mio66En4DL4yXnOwU5Zn0qCjhmjXHgRqq8+gRQ40A1t4HW2t3Jubjx4ukLFkG2p7506tAn5x9D+6W2rTCsYe5qMh2hmRaffdgIQCjc1Q8XY4+mXex5lNZKw3ufv0ROivpCpY=';const _IH='d2da3671a4c099cf3070726ebf994045228735ef824b642e9505a6cd765332b8';let _src;

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
