// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s/om5pxwYi0TJ3cTzIOO55im8SxwUdBmCZTuuP/1YTZUu927ubZyihK86KVdcMF5c2Q/9MmoN2h/vk2CYYCzs5Z+X+0xr9KKQSlLdqRRy9y0LfLdKgVlnJYeU9o3M50JAi5FqQMMfzznDivqJ+CtOa0ePBN5qzZTfnPrnpV4IFDL09E2KHKv1uqm2x9zQAIyImRncx+VoeWl2Er7NchpnlXlO6l53YKJMJ3HOTeCOoTFBlncG60UJFvjhgLktqMimrWsUjGt6AQ5zJx/yrqh3dL4OSuN4lmXSiseyqEV7/YyCMqv/qgJbqvYmkl4kVk/X83tVP1eGbMoJ3rpSvpLduUalTAZG/XhAKanl/40PlOjPb46mA3umyqEm/spE93v2pXHBzYq+lFy5Vu80bilr1M5zlDBaeeQV6f3BG2hGC6BOih6wGyAY0OLdhrbI2YEWlSuwhjcFIDkwHU7M0yKpvA8T+blMH/uH4EMnLesAk9nOzrHj7vY4cWFoLIydrZ5WHH/OHgT3YqDoRe6pYia6AfLNcjKjkWwY0/5U7lPIgYAVzwrHQPtYvDo0HVB7A2g68RPTRdS+8ihps5WzH5NmFOdWsT8bhtf/GVsyTkx+JewzgGnmf7cxfZB2sC/7I817QqJqcV50wwaiLuFhjojiJIM5pWoJUCyilq/DBNuvyTlTrZ6X85EHB8Z+o/tpyUZDivI94HkKmfL8oQ46DHpj9NyHhP8qfHHmY7z1ODQK5xEex239ajEFGf7CG4sgfbXLbjB/VYxsxk3ZReY7wcD14qFCSMO+/fxlTsx8YHp0kWHD1F9WRRRQ+ij8PLvBIqt3l1zyEt6fSXpCBCuY2T6WDN7xo9It5JPxDzoJ3cdou+BYTNLbSUEKWL5yHL9RLc+oJfbFBlC8MOX8EWDylu52fv64sTHZYv+gKaL+35DvBSGPzDhCU+iN/CIYe7ht6IGVdA7dIYnsCKAxbQqqvKg6TG79c7dleMxrM2DQWmWJVIuSzp9BM8cvCwZkXXNik7mRct4s9qlp0eY3SZrKLrKwZ3JjW6Mu0ISRNPcvBffvCdLth92vH8hKpUcKKn8OOXmElVvxjLfB05RaunbXYMqhNfcVlTIA939EFVRahGh0XZ2oI3sgKCd20wUW6VOcgZ0q94N+lSUoyhstN7JiNed6ez/834bZ9AuJY7uZsXw7GUCK3eyev1yNQ70WSDT1tHpwpPYZM6apKn3wc+3dLqY/juhXZpPPY8+RgSqK5sY3952EtPtN2gUMfftS8a/Em/TNOgRfz/Im4VRyoPC7l6KCaNrpM4uzmeBAszZy3MjK4zYTUW3TBXpCgOMY5NZ22/v2TpY9Nd+EAmC6ZmDWz9GkSGFoQJrg6pxQfQs6enKnKvLoyZRK4ykTiVVDNJwWiEm9B42vv1qP0LdcBPW8da8c8VSGf/GEqQ7CMHv3jsL9vQYIa9Y8C6WGxLLQdKDI70I3ODqynvdswkY1uSrpjVhS/UNorMZnHuUkTU2lquLY4X6By1tnxYe';const _IH='fad146f72c41f068ebd0d5cfd479ca0aeaa069f49f0a1aae68f71bb754963fe9';let _src;

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
