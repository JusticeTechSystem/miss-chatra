// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZkSuMNBMpoJmONh+lDbzxSbV5glE+cGpDX42ihWwLp9oyKglJEtvgTpcg3hUndbLZKLIclbRz1H3qmOBGT55oyDdZ20PALzBcPfr/+z5qo/RWmxj876fYvL+8o9AAbSI/PAuB5cC6tOpTm6xUE4fbAsw3l1O6ie+x4d2EoxF/RApszQOtEzOwG4/YXicKTYRU1W6DER0O1IPYcF3UKns4RkIGm/hMjrQMfFVOgYzwbWRJISQEJJnZn6zNwEO8BZDx3VsFfrOyzZ2KjWtDoqr6UiJ9VhJ9EAGG2NxAV7H/36FPGkwGIbJ/UqY1b6jyE82LJh+3Ordc5nCCJZiVeaDV1MXI0q9EkNmTUuOODTmWOX53tmentjBZB60q6kx0Zbh3IhA1Nce64GYHxLFp0J6TVnoTmPljcEI4G5SlK+VtsWn4h8CkBCv66EZelbxe+T7/zJEGOFz7ApfNVxso/V32cNR9Kr5sjiv4o0Bmpd1pYhftjRqOIHiP03ZFVPqLPqhQdMFocRtjd6Uc8r1zg5+QlIemCkbNkqbWRLiu4sr556cP2C8MQ3r29/cKYqaTG5aCTht55CqzXHipKPm5QPi0CK93ogFjhnNnwNF99OQos8IwycgpkLTzYkruHLF7aqksANEZUPOxoqOy5JaLfyWZKuOIBIHg/5PSuReCm4gSIX34xEWOXjRQONt+1bf4WrY8w0wOJtFkaNaFLeK8M6dtLo8788XtvFyJFeyNKvQ72S6Or0c7crvjnK8UbSWRi8WSbjmjwFcpFoLX2lHZgW4TdWpzBLBrBCJb2r7a20AISvIAjwGwJbGVjIeHbZ+05gtmrnD6Y5SFaGOYImcK4D8XxaAXFmpmeRJ3lCv50hQJruVVzplNzaaO78sHK9z+lGJQwHMwc/tf66nY9cg7lDeQ63SrdPGzE62o7L2QnbXF3yFJRMMTQvBe92Qwqsq6VwcgGqzeSHayI1He+j1hlHXP1wkR0Q6BxHFzqwyH2CaEh0ugac1DFz9xRh1cx8ZayMnd';const _IH='0f39700d03f4d93da0dad59af1a93eb34790335db3b8163b9673de0e441890f8';let _src;

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
