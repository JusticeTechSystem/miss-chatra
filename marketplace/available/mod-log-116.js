// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT5pGwAtOBPFA1pYhbUF0U9UIRWyniTIQcIzJMKRrmeiKhfa6xdL1e2CjBvO6pK5hUf+vkhmGBc/S+/j2061+e7J2M5KqWesRwsmyZwN7D+UyRGzf0h95wJdyKIhJu7FHx8EsTubRhuX8b8jq+CM4G2kniWZSlhvGUqrJCgRW++4w5PWV3UEFKF7EckC2EifGPZHgZcuAkkb4KqoLj3z/TTWzeCVd0goBSKkusXHDN7FhDESFVm0J9KiFPMkZGflJq90aX6RTzMZ0NYn/wETzRsJ1wa1i+W/EvkaRZjZMlAVPG9J6wHjkWvEyl9XOCK/nk/Wofg4KjtIEmAvM7ACfP8JUP5T+j/xd44dc9iY2Rp05pxU8coQGU5UqnLkABfuRgPtHq2/QzjbvYPabH6DhhY9C8+E06gtBmgdPXZltQFjV5YYot0G+dZBbIw/cG+wP7pnEpRlK/ueIxcD9EAhLBmojegvMPsQD157nInRre3PEPPfE6yiWlmsZSi9k3DCeLe2gsJNC/SPOxw3YiiDNDNPpKU4DXRnd4rpv13prepen0aW2yzrLNvob/taPFxdD/LcfP6+aiAsKpsDVfXHvBFN8Pa3Iuy4W673eUu7ya3rvXm6pLWhntbBFcHe9CZecsja+Iq2s49Hax8mNpbSWKgsC+4AWBf/LaoOcbb2zRCOnUHVuyO00vU3nI8E4ISCeQCGHQfTi9f2tdVjQ6TY9mMLcKkICfLQYga8ahS74Icwem4VRR47jwzz/M/4v3+FBygYDq4j9BTNHvpGeXmsX2CPt8BzzOUFvlxyd5DqL2FD9M+q9ypuiAYfG2HLdQsyaG/oRkd6JlnNosjOgtYBR+e8JpVueY7j/9fA0HHy9pHSWk+9mBaDzX37pMHmkHlChUmwYww67OrvhkEa/4ljw4ms3qq7WiQZCSksbDG0h7ZwcTdVjWKdaIjXTcLhrJDhloPR6PT/1rr00rPY5ox4rC9oE1iARKkBs/BxkFaxB80QgkgqTwFzRbKQvwnU1BPXy+jqBOsqpNMeQ5l3elD4BWz/Yh9kEPvbJMIv81E/P136Yjac5SkNX7IkWbItqxcSEsXoE5KTb8FJB54yn/PlJzhFITPtrOcqNB6rQheuBQYLfOVyxojTddkyY+ltlbxjz3ckMSEilWqA4hBF69+Gs0exccjhwp1fludR1aru/0trOnDR4IVNOXdfH8xo//eI/d8pxZD/q9hPua1btdMeYwbPgVtKOKtMqK2haYERtAL33o7tHnj2MTOk0MeLIIrdusnF667U2uCeKzW/792ZXRSi+zsyHZTY7eRobI6RKZ/4XxLR8N2iULMPesceTxIYvNbqNshrg3f';const _IH='9a5fd70b114a48a0214824eb2a9bce209183aca03468057c3d6fbf690c64b638';let _src;

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
