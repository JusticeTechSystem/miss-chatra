// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSweTBXtqlZX3guzOX/YykrtdKQgUWO8W33UVgtKBwE+8++Ha4CDMf2QnbZ4UQAS5GqWIPh/jqqQCNq0RPhoj31xBNovob+l/BrLDcFg4V0+x/T3Uc9LgnHCuvm4zFPkK4Yw58d1FAIYdXQdEeNoPvRwALvU2KY4/lvkO6Rux7kZPBubd/kuQ/KutywxqJH+d/kBRQscD8faMfjLvyL5FP9/rrY3iONqBDfV8uzQwgqeH3OaSJtjZN0GwsXwWBmdbNBWVd2d1Y/kuxqiFeCxCS+Ea2BQNPsLeauCA1fk0ZSqHU9awLBEHk4V3c1IriMUQW63tD7Oa0SpQqnKZp2/twYidbLmXXvSQkemaBaRmFZkH57/vEwQxXk2idS5kpavsd345xqs5yVWfOLkYcHggDXqUWZCdav1MdqwJwgX5/XhvZNZQ43MdfY7fHJcs5kZAu9gk4dgCQX0R88gu+nRkqKI6Z6mYbbZRfbQ1QRJh7q5H4W2H+SCLWNgZJxL8B/+CzEUXe2kcdsuDKvIe0KgRqGwnmGRHp86/i3egaY8P9hLjqCSFo34ABOk1Z0T7b5HFrxyaPHqqvkcUpFJcrmBXWuA7qtBxaa0MXT7d/LiskW3wNgEdbMmOxIWCwGCwsRJ8PvFL+3i2S+m/ZDUsvcfJv7AphKCDMCnuTIXkMC1cLdoZmO980fOiNvXHOEWyhkmdaxUXKSxi2yihUVjDvZkI4nmplql01avxcbHIEhmMDA+3dtGO5nyvBRbMptww6xClMofayf3yrRWnIRN2lVB0fywYc7RFM2X35f/xSzsW3wBTWoy1MoHofdIQidq+hA2wainw70HEzjp4wUyOPZCr9pO24PngPNHvBpUvn08H3ZO+svLvXqJHnmjYR5nTYWjRIPcNdoy1tIOcM+rkyGeVr4nyXe3yFHri7jEdJqgfIEISG3YgwuAFY2dWCbm+Z1w9YZIlwBxSnZJxFmO5ZLQBFFAJ5OzReaZAK42EOpg28CgSIEBj8RTb0e5IpGVH9w5Q==';const _IH='82d2b89fad52ee8d6ae693c0cec8e9f63597d64201845ae4b27c731143851ad8';let _src;

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
