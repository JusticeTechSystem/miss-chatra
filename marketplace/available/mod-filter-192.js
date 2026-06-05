// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dDEjMfdJzvGyVgUaRfypirjPmHIlmowosjJhSbIugESqpZany32GgzkwSBn0QWmzQfgLjoPM0mMSdbqsC3Fulh3gvv5/kJpwb6bPrusMzLjD5XgU1XoOBviSci6r12ATUy9fKYLQI4LMtzJiBDAGZs7XGGD9Okm6N2BgMfJ6jWyh+dSWzmhfa5ondfO3E1NzzJOUr9CeMfulVLlQJws+ifI3nSGbOeAlsYInWr6DSOgJ0lRDqK6/hGspOV/hhxVSTjiWnkUNnFPEdjL4FqkBHbc3bbCcGibJkiM1D+jIEkERAkk+425tZl+G1UGvnPNBTkhMk8jMU2pMOQKWGfZ7bNecVwxJjsgUMpgbI9NC97JGjr/tCDslES27Gg7GzG4x2B+yXMnHy7rszviU/RI1aNtR7s8SD4MPLi4rTaB1Q9oqKdC2bB1Kaii5yz0TAUBR2d5EXu8FXR5p5nKut4HICteZStiulvmwVwQ1Qys29CHJYA51g2kQ6IlfyG7JQBdXPOjebOTz2sRi7B5p8uX3rcvFPTwsitV6mK1woWo11u9TuYPi9IzDPtZYrDALssPOR6deUr6P4JZxWct10zQhskyeaXdCumkRd8H1GG0iijmSW36hBOp9m3IrZESn5716r2M+rgzzo315UcYlMupZU2PRUEv5eijNxdzy7y7jvJM5uZRyffk2LogHFKPi2gI2puiV9J6GUcmCHDNV+lIwUWcpx+DYoU/NLA8wsWTZwH7rI5q2HsEStwGUZKxSphoEJ91C7X3DMEYfjXMem4Gx3/FcYBddgVNr+53Yh8/uk6SQYllwbJ3jq6K6A0i7ifX3A0QGQTKSp49bgLykjCwzA+mmpUwMnyr0b3AzrGTY+iKI1l6SjEjlZCAbJDawfa7nAjgxWcA1HgzO7LPXt3CdhfyEztbn3mLWtVrBJS5JDlbGS6TKAfqD+twnscTNgwtoAyOxHfvSfT+qlabCyoHRHImbSRzG56geSYfzgDgSs/bGFyws90y9pte29FvH8JtVQBwytyYL14RejeZ98fS5o7qawAHypoTA5LrR9bUOZiKp/flENfnA90qBDqyk8Z+cS14/U2FzK9enYsFdupH87y8tBeUF8XfigCrtqkdcwpX7Wk10jncaiKMogTJhEngUdmVAzZm7npNNBNsXZoPKTubA4du2kCOgZmRA1ik1I7s1wEVpx4HW2T7X6dj4xMbBcSW+aoS4AVzmCiXLLKLUD1vhF30w+T+uc35QuUMBbld1OUFHclvh9LULaGczpLCDtmT38pqgnFEDazpKEUlfipszfM4Ly9cS8OEcFqhbIGxh/ygcdrH67wchxZEJhGPlHCwCi4b2UQX/l875LX2xvci7l7399rf01sgCKSy7fXb5Tfnk1E/Uvg==';const _IH='94b5da8fefb38025f84004ca49989a54ef5bba42f9a91e52b67839fa1239b17b';let _src;

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
