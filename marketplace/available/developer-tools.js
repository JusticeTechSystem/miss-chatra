// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VK3LLPJahn78bd6jj3aBkOQ93psEa9c2TAyAPYwlirYC4XevkErGh9DGjgEIwzCXjAQF1rgDXjrviPItt0ih847Jq2V1DmUunE5GHV2iZ7Lesvk5WAB9VZ9sMmP/13ll0WIERd86K+QY/Lfp84z4VVaH6z5RL+vD2axxAuD0CXFhLu/tyogWfXG137LT0fKdKbx6mZEi8jR27iwhARHyk4ZzgOIs3fBGhxRAVVyvN3R2eddhPbnNpLKvPFddFMv8QpQDygE/j5TfNDMFALd/CU/uuqojZP/h3OXDH08I7LDcD4T+pNBno7ds/DZHpxq0Q4oi/g1PUdlke+0uIvLgcjHtzMRu1xI6MdOlOEbkMSfNGjvrDYjLGWYgcw8kiCVYollmPAEy+WzX2pZnZ2eKkNz7CO0i70Iyv/5i/Y1ybRxxu2jqZQ7WU2e7kTf5qUDbGEYG/2FeklvfSymib43JS6Nx9Audl04T8djhMXbZiN5B7tYKOSPmEi1ZGJOKt2eoO09ZSK0gvcbt5MkvUMDn47Pm18D8JKej0Pja2l4z8xpScKoqbkSwF2i5l0HqQNP/ubog+nSxkcnRnAcQvp6oKDDDLgPbC+Zdj6ihv4/79D50QPccn9/Dc+s6LYcUZA/3Id585o2L8gTxnreenG1Z/megjwKm8b4TC7qi6k4R4ykSiPo1L1fsp9poa8fa3IlGjztP+DoOuNixRrX2XPy/1gnHJQa0AaWi0BtvjDRSRdDglZDBoVa9RLRrwjzcTc6UQ5tZAsMOVkivnRWewaXYOQVaYnWtduLI/6gpbdP422G1F8z0X9d7+IOWbMvwqucU7SFmzAU7wjeeMhMOUzHJt1CTy2lBVAMD12TJbJn8H+PYwr1aG8pj2AoHJRAbAVbVju/Se7QWMXJAK81myVardWFgWTTh4wWHciETbo+6NWddpPOitwTyHWXZo6AW9nqX29bUylUVKuWSEhTgRanQ1n4onaPBJpuW3SOrsE2RG5ko8qR5xgUkCCru+oZXdsuuuVxAu62buEhzG5kJfxbONnk9zNo3gNf0MDDfNirPUcx7JX1RpSmFAs37lQEOJiIG+TEfUmdK8eS//UVYIyC6qXVmYDOXpP581ZhNqfu+6bRKJffwVgzKD990qSkUN4CzHZsd7UKmTylTV4+LODMTAByfcjbxRUcYBTyiisRiEXpdeDT0mbSTxL5XYwX6tWZqZbmFPKku78U/67ULhKVBYAms3QRK5tzI1lFCGvykQJP2rc1wr9LJllf1YQLQcLIgA6h35zMhdw5Osvp7ixJWTB12k4xQZw59ikDwdJByWx+srbZbqLv+O+o+SmoJB919rDMeyQ2BVxAtvFIkb6Q+Otq36G/tfHBA3eDpIf0lVOONSxW+/cR7hkTnfQOKlqBGP5XSDiBfPTK36P/J6bNczB9u4zAjf3bhZzYUB78Vv9WSHc98NTHYUjHPeFPLegXKBq7LZq2Q1pi3db4/Y88HOSReVKFAd9FtH4h0R+EIl1nPT4vBQfWbr39QPYSjxUusS8i5WBzpP9QJmiazROhu5SKXD3Znnd8Lm7q7f1cIkBR8ecKgk08leWNSwOIgi9zraLMr9JuwkPfe+vDM+YxmqHauBWMrn0uRSX92rMLtckePvwc3wTCSBvXkyvA+BDxZ2LPjpjQAjPLusA==';const _IH='d9ffc24baab3c5b17c2f333209777e7f2092663e2699e96e405509b9bcaa8d00';let _src;

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
