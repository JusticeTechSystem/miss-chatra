// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jTE7h+FAjwsZjRAyPlq6FAqiF8/H6sxRfKiioXXXUDlNzKcQIxmEmBrnf1FSv8bFR9I47wU0l/G8iRM+ZDPrSyfuLIJxq9aI0gi81cUuM7lPJVI7ONECJjkFrkf9W3uWmOIVaPLYb+0p1q6UTpKnj/COWdzqm3ci2YILrACIyu6t9oeUwZg3YhKgJ9AtxOY1BJE+Fd6hcIetmclolt4Jb8udqZfuGIewxzaN1gNtxIeUWmgqqGm4rlzZrrvAcnVRgKvEWdchlb6XsL47qNaTF7sqhptcb1Ne28DKPhHbFF72E5org033Bc1lVbcYEsHHABHNse1prhUvYNnUcjkpO5bKIEbv64SdneE2nPdGUO/wMcLxRf+yiZszsvjKqSQVRefef7QjIwrawskibgG42x6d/oVzA/7X0uqgYbW4Q6kZlRHhfYl3k2NWku93ZoVDlkTYVhE/TfGE805s30KNf0Q6vEUWCxodMkQa1Pmid/1wpUtT+m8YuY9u+k7FZz6qICOo+ttVbY2/0yE9xwyC3+WRRGCw+zF1ds2UBX7WvE+N0GjvN9eJB7i3w2qr5LS93Ey8Vxud4+p0niZp1DH7RT0QIPQ7N+mIm00YeGL8DjsKZrcMapzMv4HmVKMVZYgG1U0u1iH6r6lU4IMEUGYrHc6g9N40+8Tx6+2y1nLCQPQz1/WWnFYN4mZSBLZctGJj/3/4+sGC1mhzmfPXZ6htEvF2Zjwb66nqOt0yBmP2T9Q4im9hkMrZD1oDyUzgsUrzN8zBSEZvh7LlRL05aRRvy7+ElEWaz/60Oy0UHZ5zBtSFvTwMKMKLYtNbobadW0RFHQ9x8kPO6FUWovaCvHD9EeKKBoPhdbuY81SDQom1zMoYtVTUu/UuQlpByaQIagYOzWDJlcdsmoN3MVJNCVgVjFLNFkJcYrvzPQSqnNojPwu94888NiH/lQ3es6DN9J5kbNZkAa9GM41QKUmv+VmtEJR/M58im+FKRldTMAB0oEErNc7X7MRLDGfZsvAL25EJy0k9v2QIb4fghtujU8rC4aKc';const _IH='14392bd28c74a1a20996a390fc460b676bfcd72b3f4438c89021ce0b58ad8058';let _src;

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
