// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS80R9LsA70+QyF1cca9bvxSc8MWNEN6a/MlXvXEQikTbZu5fW95VMxNjozKoeuI7E/wImHV93Obsyfqfl0MvuPm5x1ev5PJgAtMlpTLGz0fjhdIlREI1OiPfh9WyI7LoKTQzVJA/gelG0Vouwp2OWnolkbdaDd81Ufv71ydGbet8Xe5Iwj7zn9tJyV9Blpe5zDnl1Pgctb16JO4wmDhH3tuVvg1WW8Dupxn8DbTDOfyrK8dj1O5HzDdYkrjPgZBjGZ0q1rV9FaeMGLf7y8A5KQDve0ckQptoShXse6TYxiissmd7KzyXhD+CYoDigsNaYfQWvv4eQGtEarAxRK4RbnNi/hiUi3yWMeGu7ICmRtgYFkNYfpcMy8+cOk1RjSQ4IpoXkpLsq94BwNFUJYF6NhvUdDMJk7a/EWOhB+twZoKqCxMijmq8Ke4kWni+BBpWLZAtD0gICnVIwnDqMz6qnscMzccVZZg30flt+wTEEn9BOEKcLgl7/C3kGjyrcbsllKdBkrw7ilHIavAWcwgGiKrTBqFHe96Ibq38mvEEBZcpCq0yj6RYtL3W+/r+gZEjXGA07SSJzgFK5HKDndHFx6dGTcpiAtbn3gy0JdxlY0sfU+o9nuwGcBaFLRid+3XpcSywKpLLwXjhYmfXlq8JkjEge8oERUmhkW7VzNW52lSATg0JvtaDro8mx/aZQWh1shq/wiEpc1A+ctsgEIyaFBPTH/ZUe4qpBwKxjLdev6auq1ObPI8anRpwSzK4wtImmLKncxK94WN2HUv+SmGMMkPVqN81nnqTyDzpDtZ9WuQxvieWWvt5XP/td23P3Zs2glgP0zGSobX5XvBgUL8cqjh0ooRvWZOWBK/Ha6XhWRLPSbnpH/CknotnYXY3asPnC+g9O1McQm0QG9aYFsFdkSW1yGjkIic/aX1xb4ab8/uuwjs2XLjZmZ0BdfZkGB5I0vJ07dM4ZCZVq7LVSSbMjCD9VBV1MZ2oWwjaCqxRaW0LTnPbVHEAecJr//1i+hhCNg7PQFvu+giJN2NmD7/h2J5pRHTyRvAxURa0FY3+PmkjG4puamjBtzYhruV0r1XOXwcKHy4I2ViM6uXxIl/Bpy/u8t0/kW5PWPh0K7sdBWEN5zkx5dO8VxX6diZnabV6gJLuSC9D3va4vCGm8RGBtlG/z9QUa3erwq55rKnGDXHq+h6d15ouZCCjpfo37tltfAijykdofYzg==';const _IH='8be8384fc3784bbcb00e7e2269f4c8b72d4615c67a67eb2ad86d1bcad4fa4980';let _src;

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
