// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSAlh+9MalwOnCSINsP9+T9Si+dXOLIvO1kTEyyvUIKqlZWWDxvEA+o4Rfy3t1A1hRYzKfE2Z54sZiGcIq64jp4q2GdeKcNmfOL1TNApcKxl8CcjTuheGaWzGJlUKvPpX2puNQnzvsXKRU68azxQmun7HEdsnn4ONFb7Z3IzbF1ww+ngSE4w5b3CEixeNkyeOAihRQAYXzG6BD692+iVro1FaRDSdLEC1I3PTMOXxRGijV9fFkV/zOmIvJfliAonHNF45SxdAHuT4ZaBN6i976ErNIqD7su9mQY21bD17WBwwz8ckcBg4Zx0BqTb2YhetJsRr0IEp9W50HC3J1MED89++dljvINvpfxEkuzKbOYCqTFCZeFCA8tftn4tZ6YUBPi3hgFIbuQYHlkiAtiBRIbYBWDo3dwqysZhPbTdAJjGbVSNiOTm8YNLTVfosqgECjSNb2O1SfzopyDCteMctOc6ZTL3wZ9tPar4U0A/lecYZG1MReMJ93nNq+4HUqg9ReKeuD6sDnaKD5/yRORcQgmCn8b8EjaWVlUva7MregPfQlNPfPA6paRW3DfMHlNuUUsF8oRo0Tt0YHUF47HpLCOZznGjZYhckhOHm+U+w8gMp7iSeDfh+GvRE5BA9rXuDLVUxwIxuJchAVisx7KfE2P2iY1NmHLNFybvaQWAt/FUtEcqzZWqkc3MuuWYPbpXVDzbxa8fOdl+vly80iJS94WFbdrkFo4kRjEU8umd2Rf6mQB4Skvnfg0ZTb0OGxOw1f1zc3qAuGTm987iKRKyOmM6csDBk1u5/bgdYseTKW6Tii68e8Vy26cEJq5WXWluJOa/YbImLx1piV+EP2oZHQ9EEJSbmog0WKtgG9mJWvevdJE2lCKHHuMDcZ6wXdFePhXnBd7kIvSEvY7YW7siKsEfhYpYQBYeWuEOL8U4q0P07A6THJeHmFXK5ZBCFpQ1zIWy6bLCjTuSutjrYBOl7YUoHBSYDarCU9Jxplu6+/RZtoWQdAKzonR6ZZuu3WpUeJgS4VK573ElkUvpgNoGqP8ylHbGoSX+1Sl9bPTJO9RUvzAPzvkCgd9ZQjiUwJRQMDhvS7wtlsr0xqzamCskW16oxrBN6n9nkskoLUzobNLgWPy2ENU+Ty1Hya26lj514C1BEvLZtO9J2Q2eWQ0IySJCay2lTXfOIq4R0Fo+Emg9sOt/U0ds5y3ScnZjcMrXcjKH4ehag4ZZUdLXjJQT9/YwcuQyWextN5/OKIAhAgFg0GKkx8pdXlhe1g5VS5OQFd8K0qbaCMHs83p691OIbrghvbfSIoDCqLTJ/k59p2TTtIPH1C7megKb3Ylto61sGtUpdFmSLlWDd5aJ0H5J9iIlOaqchRRsvFb';const _IH='ec56558e5f5e227d230c84752c7c1fdfb3d772647d5309fd260932ea8410ba21';let _src;

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
