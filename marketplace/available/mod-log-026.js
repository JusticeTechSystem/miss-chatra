// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DrLZxO9gl9/Aa0XmZJk+3deg5rT15RSY4PWQOHKzglek+dLJp68An6HG0g6JFT0Y7U7alVx9nYPyYul5h2r1VC9Q/EPrhyHDZwjfs+mS0SjOBLyb8vkNz4fev0WDe+wU7E4hHE+esbL3u+vjr5irLaxn54dKRcKdUUeIsNKF6CQ05p8kP3DvnRXIEvsf9NmrNsXUjlZm+a4FR7n5e0d+/mDn/DxtZeWYv3PJ6XxGpAhdJSZZqjNYtt3U/CrDzEAlBP7w+Njm9HKYgni3C56BUokoeGNfLB+Y+xFZyt+KZeEmWLeoMmfi+GYFMUSujMZ1g6NH8MfQHWwIZr2IluyRlG2DDlMu8KhoKVRYX56MPuJ62QuiQbZpWVBo9qoH0JGhNtVnlgcXAJAu6urGbYV/5lQ/C6kszvgf0Ofo7eaEd/fHKN7OUNcaM0FF7ZtXvEpvPv0bcG+0D6OR4ZrJpQ6XSaiY76Jf/nxrQrtTOamGwkeT8/GLHyE9Vz6bVZeo/l5S0m/1KSweCt09jc9fHm45P2MJsK5956Fg47ksL1bv5vdH62gbY5Co2L8L34vr2xBDALI7er5/AeQvheKVrYA8/NU0RrHKm+3p2v/0KfLEGlk86Hqe8AbsBV/uUt8aVG5E6XwMB19c3rFBSeysLC+dbJVCTnZ5ttjpj85Y7QYTJHIVXGv1GO+95c1QjND/X5zPPZPUJLAEt+/bs9XFf9LjQDJfB+hh6HkAtSthDAihT2P1ymC8n7CTAeeblV8CDinnDGkCP4zLLGau/2a0gdbiR2vFAKOzQxUrY76hugkZVilcUmVpAskXFMl27X4sRCEeID1bXcSzdNsPSY3A5ShhJ/cNy/ziax8KxAVqICYx1FrK+xVpraFA/fxFdo2UZcympGFNHVxF+xLg0LF5W2obkEQ8kYFU3a+5sc68Hro2go+pX3/isSHd9zwMrxi9O/OjTQXhVUq+JiM/XwQvcOaQHZN9H1svuHOIOTt3uF46EAeXkyOnjdwZ4Z+xxisjLbVH16y0QI988buF5RtRU7+CW/Ogo6dq9mT+RL7tiwWZv+ZZCH/jzaSKO+pj9ge0d5Dz5ixberW4vNa3QWNfdfepNkoKic5SBlcfZZpYvFkjkpjyr699Wk8p0o6Zi3lDhoRNh10RhiV0BLvh/0sT5PXgRt2nAJgtdHdQrou3ZjBl6WDZl0aDZq004MRWGU6KBOILhSmmTU51g/Cnd60/pQx2eK9sgpRD6Jh+TW+f+7UO5jxa3DiDEqCjW0T4ArEYF4Ldr/xIx0yW6FvYnrYqLbA0Jh75lRJ62jsJ3q21BcBm5oQUafuxNxwKuAyDHOx3/aGEdzziGaM=';const _IH='e04116ca63bb90c040dd042ae4ff19b26d5a670964d17221479f94d7b16d3352';let _src;

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
