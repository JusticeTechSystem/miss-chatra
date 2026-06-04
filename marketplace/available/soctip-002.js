// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h4qkfRYOID8RTsJ+WUVOEpDrobeHAKpyJF+fvJpsRyKFJdI9iAaA9OaIwdfrmwPxBHl55oa/SKJdngqGwWsVMdvwJhVKj/C3IMTBwgFsSgm1nbK7QT6v2vgHTsBAqV6z0AZouHSRJV18j7NcJ1IjtiaYTI9/pj8enleQftXrjBtIOkiP1dUnxYM/MrHxzkyWQwLycG5ohRyK+GFyZ1whf15vFFzT9gCh7ajnKJIcv3BHuvcJ0iC+vjfLcBUljBewwDdQOWSc4N7Ty0X+zhBCk2eSsqhJfdnFu0qqLIuotIXoQNnQJlc2N/4DUVs3xVsqaOkkgWOf3keKHIQmTNqu4IJllGC4Z+s7TkesrxzLr3DDxn1hw0dMkMPIQ1XYqN78AATs9PKuheyvPoLAovfrqG7Bi6Ns0dEgyHNg9ggIG7sVAyVoBuCHwGW7yHfaKFjgW8De8mex/957P2q71Oqmknh5qaE1OdneJPdX2YwC4mU/1LQnmQK9pLhgRRun1Aukwqp1vY2ws2zOBlXBFc4grrHnJqrhAK5Q5/A4I5CB1/ONCMkgWU7RbbHwjZkPDdtAfnenzCqMg0yOuZdGZdUeuuBeEDSqqnO9N4z+w0MMinyM6+3PlfW/A/BD1fA+2uGgX+ka7I1ANCawtYpZxGVknB6Oxc5LKl5eW9VzzJKHvaTSxs1KHmDKY2g/IvLds3FXgJcJxbZJ4HkpoMBdcn8+jBoYeOhaM3JRbt57QaOQAXmpoSUi/F8yj58RoXw5wGW/YAqjqsuH+XzPf5xLL/2iXw+N5ZM+/atjPXYozTu9SzdLVgdiFBBxYzn+9TMPEcRdqyMXKLK2RY2v0Ky0/ee/pFaY+lkJnODXgtO+U5EECxjM6LlLUoptaZjLviPr+t8coAzQK4N30hqKlniUCckzeoPxS6k0w6YR9FSvnG2a0j0lbNYvbvIZUo7EYddbaMxRrUdGSTHFv3bIiOk4WfLpf+Dmy4mNytOZ2/FrFhFAGePbtPQSUHs5Z3tRLp5DnzAp+MTrK4mlKCuQ1JoBCGa3ZGmRkK8uKBoxMWeZcO+11SyXUX8UC51xk2gXrV0/dciXbhjkuy3xvOyN2/E=';const _IH='a1a2b7b6692e60086512cc192ac5f218fc5658199a5b41974c9fd1d4ef677e9d';let _src;

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
