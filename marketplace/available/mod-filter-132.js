// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSmmaNGlYpOFkZ5aqUzRRrxHXOtS4gPBareGsVYHvqT00GXzUbuogYSe6GD8r7O4MazDYjWfpGZEyM/anTD6ZWI1i3dqxO873btivorRWOd5Dm4HzmabNHidb+bL5HagGxDGACMvvA39S++88T0b+nwZjuUK5fZ8dRSzb/W4DovgQHDu6DRbdt9rLlLACvrgdtOVyevFM2VdDGv6GRJcZwyUXFmlTfWB7/PZXi/Df3pj/LNZBm1pBzR5L98dRs74/w2Y7EVL7OBgMzuf1lotxHu3FowZ3spe9g5pdZBUcUVdyHFCz5FCc1FKx2JdyuHOYf3noBAVj3X8cEbHg7GmVCI9DnUZckIGMGOTYeulHajok6OhSvblo7h6RdnDuWdpYpNYvqSSF5ZvJfHj6/n1si9fDLn+uCy35Rdny8r209lNogqm3IHCmBhuKamD/ZIdrAHol0BVyDnum2e/QAhk6EOwkPuL2wimhfcKxkxr5AlIMB1aVULyGOSZciLshiYqJq1doYnpkw2tMeWppaiEOAIX7AZhqdO4jJ6zaIZL8edwYgLzhgMvSD1NvfpFGeZRQMeLVkOBfeMD+gkeS6GRShlr4v/0vKnYTcq/TwQERFvrsHmWL1D5tLqQWF+HY/nSE6igYN8rORF6GoWTP2+i4jFVdHaDEAG8KfMHe/LukoQDmWMapZZzaYkefdg5Rnzxv7Ev1XEquB9uVFxM3mLJW9vufkdNgT1jVh1oTBGZwHqY5K4KQnisIOW8Z9JKWJAwWP68jCNUQAYVKi6lXaCnDdDJqOOxZWl1fkF1OG+nW1w5e/sa2KuWFM8xLWSugvn6lbO/f3rtI9QlpeM0ZljivSbIEwFm4aQIqR0kUr+ZMZ6CO9s+8yJgVfYyIYykvsguwORA/21iqwD/BDLhMCGc5wR0lu5WLYF8BaUbA7tn4atfoOXlEuwc5KJiNkmO6IPWIXT8K9DhuPcQzFnGOXZUR6KBoigRfo9te08FW7ytdBWa3D4c474lEZR9/F7T4ZM4TbREAfZeZXGyqIPxPEfTXkEoiFNvz+6LXvtGtbipFLWJPB2TNi6+f52AqKdub1akOzc3+JsHgUm1Y88XZEgnjumrlcQFuTJvQXBv7zZqqZEMCOz/pgwjeioeeGD2SYTBTYRgkAjbDTFrIcMz5R49xyjxD/QG7X622DfK48wqyuovDb87SQ66U1DhsMPfnnSC/7wNxEVFJYzjOWIj48m2XkxFkWCNE/UskWd2Z3lB4AQ5MfBD0iBpX/cdjh2Blkr0LHsWNBCqzUfWf9yX/fdiOpwdq2XFIHDhJ3blCKqdWDF2209+ntOXzEUxidmGKMymehCiKS3OJmIbXcFjNQcmRGe+ohJaX26Iv4B+YxmmNEgFIJh+j7BdLxD';const _IH='95acb22d9385d17e2f25861569a66544d283d22a471e173475e3f577ff8ce7cf';let _src;

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
