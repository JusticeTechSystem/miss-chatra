// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSfzEh4cre0/KJBKVmzIz1yYfKddvY2QJDNNFCRrl5rVewq4VvseerVHsx0f9KYqqUZ4M4O68L1vB9czV60fBR/ndYoXQXIY+DiBsZN6IDw/lEdZTOeC2TekWw2jU9m+UiVI3xovGzk+GkvydOiSBNrbefZ9W1HQ52aa0/FrzHDopLwdhKhk/P/vsN8O0BwCtWQMCyYpHOTQBgg0481rtWQlqnOQAqgZe0Kug1R2vEQdq4ibttB+mFH/LJc+qTotOK3jzVqFxsnQvtd/0+Ekrx4vGyK7shpUWoik1KqmBBue3BkwFtU4WQ7MDnW6AnoIyevd7l+CFrF+6WzVdG/dzWzmSJZbBBu3GNYcvitaNAyeyK0prRwmrp01Yo52miHmwMsPGcR+6V6ouKMXJqxUKlNE9GX80nunWzdkBs8Kzvo/5hshwb3WgSJawdQoEZa70a2QK7TSu6JXs90HBwl/l8wacqkEUBhtWmU0OMwZ4hai/WN/IX7VxkiqcNFP6uwQKyAXJicXeXA7c7MJUY9OFkILEeuJjq04M+Uz+T06EAJ0nolsmmgusGK/aKvyl1evqOo/E0LB02rawovjlIcVieTRV2oEAGxnl1FYsZ6EfgbsxvvRaF6cOZZoRhs5EogJ2wvk+qeEDun/gec7Klb3m4AsIYONNlj+bOXm+BQ8ba8OcQiZkJewL3rB5UmqwrLRupiiHGEtsyClZGdS/y1QNLQIM2XUIs6/RMe1SHpz1GSniI5f1hnExMKmJB29Kkv3V7ocARzZvL2iuddNf18/3RL2Ch9A1FbOKhg7O9qOG3iujL57xUB2FECgBQEtsUzuhuGMtEjRotXZofs7/qp2i4HCQpICcTC6ZD8G1ccT1VNqPA1jnOam17DoqbLBl+s1CmV7S26H0w8qutlvTVVMZz1oUs2ESvwVOkIzcVQtnK9ALVSGcoTSKrx7qUk8ZKHUXHumPjfMrhDMRlKSWyHUcrokS/dS19JSFBSmX7dix+wcEiWS3W+TsAzRFzChdkqq+NbJGeggItUZ1Q3k6t4A/ABxivLQIaO3Gm1xayO/gdcdPd3bIx1YJ0x+wDpY5gLkgWiaVQgkh66yessl/d3c1ZWKBh+8j9ywnPHWcnY0LSVAIfdNerBJ61xg/t5yMXVYeb0SFdedhH9hzf3LD7Lk6pQp/FFgYwmvi8us6PTCkoDqfHfzaKwkcv3VVN6IaGZvKDnnflrtqVqywXAV/4ymz4PxcG/UolBy43MJMXH97xODrIXXcPn+gi/nV4NSJA5h/FWYZjTnAgfJO9kaDjWPL9OwIG7wqIy+XccWIEwcAvaOAp801NrOIwMpO9TYnzvPGdXOpWwauGArOqJoojjIJ5keBhFVIi32p9nnoaOa/g=';const _IH='d1acbbcdf90ff6df84991b76025a67671dfaec4d7f78e8b095771c5d91f0b4d2';let _src;

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
