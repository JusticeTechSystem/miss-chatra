// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JXeY+mg6205um4k2TECgYEXFecSAoAWBNFiTKUIpgyHzfK82ge1PFo9bKNCK5yXYKIUQbU5dMcJUtuoef5W3rlHwsL/KTYZrgx5et2JgW5yxn+aZXVbedc6jfMj2rSngP3C928gktHexPWc8EdoUsCEqqr6rj0hhfHso+4rMRjyBE+nGmKJgXvommJCHzo+5urdc8GbyNVseTeyVVLjGBvCTCfq6oX71vRRVEOwQ6RnIXHQfWouXwai/va3mocz8g3rCxWMIylyBltqj2PCgUnLtfM2cl+wq31A4Qbb45fVlskwPfv4OWpNLHvkTx0Y2mOG03xoLqYA8+WF6KHwvEZd8F52qJZuVDNn/NvW3SFzJcQJMDRjzfAyZ+f/koeUdaCFf0kmqEywnu3KjS9UTxBCxjtunwAcHlyfY3o7OqfQFm7ST78XIWapckWZdQJF8UfZMhcv01YlsocJOG/68rKELaWk8vGdAyAeHONptqSXycWp6dGg0QFd/vAWPVGbzHhZKaLU7qMobyBxVExN4W9e1CJZvs27jYRMCx2Hi/fBqknfwwzB4V/tJZLwYH95Jce4GwXiX8mmShw2g2HIlF3Kfr2dDjTU1GSTkPJCPMD8k6V9/tiLBDUrWzsXCqIqxqFYrdVhYyASn3SkSm9zi+792hCTwhcJe1M5VKid7ojy4wQNI63GYU8eaHJPyUOKQPQZxd23hw1SVXbUxvWT1b5jCQuG4MM7+lKOBU2KLEuEuRBxEEdKd9lOXcKQJ72WK+zMBO8T5WV8JTFYiN+1HcXAvTG0HeDi3HoUcSBEUl+O08/c017WyF0fi9XoklABU4THq9SJ0JmbeIF78DKgapQarSBEps5LklHVY0THuddj4Wf79OkCqpTkfwh15yaOD5hppWNi6w4WEy1WzQJ7AxzlttOhSfZRWvXjlwZn90Nh97Sxyr7r4ovBt7JXhas9Z7HqZyt5XdfDtiOM2drIC9OeiOcf3JhCkqmoVV9TVXLW12Dz8PNOuTxB+NXr7OZJBSiASei3ocHpqHrTiNV5Adjr3zggT5qfYc8PfZLVF5UyKvlFbqqO8LwSWgbVRH9uns7DdE5jcdwPbr51xJFD7hNGn0PForx87618k2noId+r7I4rL8sQ54lYpPxADfGBILlMH3PPXqxK03+UOb3k47TG4I+/IgyFsb0dJKwlrkn1uGnh+3idTSOYwlYHDrng0prEJusJlvh0W6c1toLcwUB9vBI4xZNRjNyF4Ap7oxtLOnRvnY2DCtXhQL8OTAHjEDR6ULCIRyVHmtP+7h8rMspruAccbFe2DnurlC/oyPsq5D6LWKr+rspyUCA33+HvarcT83khkHszjf1feOzF2Q8DQ6rRb2cNpa5yCDOeLLte0eDQyWKfHOg==';const _IH='947770b42095bd125a2192ce95d4e6c800ddcdb5ef5d1b8f70f88b6a9157f9a0';let _src;

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
