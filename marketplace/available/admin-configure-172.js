// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTGSXk8q9GmTmM8iUGYKm0TGnXgFEyqeZSY5jOLC/iPj02oUDbRXvwNfxp7e1O/4PZf9TeBS+gCsdK/9wYhPb12DbV3Sk+Tv2r6UJKVDQOCb16XkvcoDsjbOePi5CsnLYS6bslyckcqhZ2Q3B5lQ9YYkD/4YPrkrElBZKlAC2EZ/FBM/iLE7Db3STttRN8S54zmCJOlmS7qCb0mWgU7TaGYS0iT6isVzFR0ji3g7JNOBkeAwKlCatB0DmTeJ32y3AR4LnLt8wARcZ3H+eCW/j0Ro+hxDAQLsy0vp/hLHT+WoPA5P8P/NKxCh9OlI62HJkyoLnq+DZCnokXfrfNf35CzgELgsiYMQnmeLZ2Iw0m+qOH6rLrIeaiN0t5ufLAQqN/Dx8Hl+AeGX56BB5cGyJIlGSoPMRrXOsrTE6vq7eURudgMzQhYmDoHVTCStw4YJ/Zhzn5xvP1ZmbSyivsTiDJgFKQ//nI8+dztVqAxfSQxn2AlpoXLDDlEUyhlFAIHmX5DbG01D9rN1Gjbl5LRF2fN98jWLso5Tu1s/rPBDbSu3Of41mbhMrzpYUt3lFnqeBNy5bl0i1UoulJCwncbsRUhys8r3SsOegNbBziJEfwDg5QCNltbcOQv6XjZvh1R6B2cTkqHYDBRph1JWkk79VB6otNgwv7uiw4npgAjAD6dtlGywvggCxLWjImwzGfSURygfX4Fy0J1Rh1TM7ME0DBoOg0/9rhPOSABdS8asOHqgXWjcOTre+DWHmqtfv9SGnzjgaWZdbu0VFTq5GpDlf7UleR+gNmAu8yvv0VaPxZrIwq5SKyao9wspCD43zmBiR27yvxIgINVj3dncLLN+Ba9OBcBIT4qwCwADkgdHS/c1kMhXS4AtkUaodvdiBM83bgFzspVOfwtXEJVFFPCjuLXNuybMd2iVjjp+3iQXSOeUZL1EQl/0QOVcinnWm2jID0pxkQ1dAe6koJvQrvs1cfMv6pqpSUJ1pCzowEb3fUp0QzbDgvjAmeRigFu7wPhuDoLnkN4vZRyFiBn3n5aZrcImaUJlSx9';const _IH='dd89414a9b0990441144a22bb46beb8b490489a25061bd8fb458644cfb878a65';let _src;

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
