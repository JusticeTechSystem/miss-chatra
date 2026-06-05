// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0W0ocRbv3zjsHZJjPdJG/+3w5CepNNPm2Kqz6LWso53ppUcGiyjjTncqvQbfCxHsoeyp5MnZanvVbtsFSFo4qT1XorP1gs84ECNTAr0lwoSCJGhEl5efECWRUoZukhefxM9yToRUXh+tQadsWnIo3xQ5A5EfGK9RgRNJ1RQIWKyD4yKFrYl0Eyg/lsan15SRtMMB9PzU92cI4qk6rc2fVRMBhOwTupp04REzq6CmiXTmyt4yVVR4LzI4bFzPFhtevnQVoO5C13Fi5C/7bsDfMemAbzAHk5v3sP3HD/oZ+GH1C0HElVR0gBMzGw7v12CJvuPu/WoKrUsc9qHFa/bnSbmTKR3zjUD7cNUo7Q3h4P+fVw4MtyUE7BuebYmFVpupYC1lOTiav0kmwK/J/nJ4MamSmMhwRZrjt9AOcbvyYQ1a6TUhXagqu57lPkhkFsQaP0qu702WWSZ/6Woei1V5GW+M8zPhB1i2BoK2ekSct7WP5vG0TdTETyV7grvBwruqJ+tZXtf0dLoUxQMSXg07isfdgpujEu13+FTGycGwBR7wJXhoZszpZB7E1h/RVlA29SSqCfHs5fySfVThTOhqcP1A6wvt6M7+zdnp7pOb8OYa4f9HUJFvKyBXPNTwbrrYN6Z5/82v2rTljpkEMLaOzz4duUOsu65KbiDpfRojTimD4AH0sHNQXHxliwXiGoK8QdNty1UxRmAA38Fp5ZJrqKX+r3apBfOm3zERrvQNlsriRmqQ7XWU/u+yoYnglAvGdTUlPjlDFBRHlMjfsIIkn2KnTUWj2IR0k2S3trClTUgKH1icMd86jkZr7/FnGAOMhPVbsR2RJ5NjBX9OFP1lWfUUFWDbfC0Oa1ZdxE5fl3Qc2TOJ7wgFKCZlzJisLtMSwUVjj6C/eLkQzHjDcZzvVPQzcDoRCOdDLRq7TTnUd/h8wqGDcGToCRb34iGJgF4rLHu+gPVGvviqTBzHCNfYBMMOYNqUeM/WICtC';const _IH='c98e7f73450ed6f8f317cad4580c61e654481dea2e7b9764eb3e996a9b99f58c';let _src;

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
