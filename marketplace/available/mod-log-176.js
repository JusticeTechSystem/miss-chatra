// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mDWWiEokhCQ9zY9Zu6Jd2jVZSOY8RSGMWz0fxVJ7ReHzaEWLWiVmzts+bKex4D6WESe5oGku9HY/93oJraIJxb1kZtWW+daHhioaec0SwsLaahjsN5xvE5uUWL5hsa6+DrM5pHeozFfHG6mG/duXw/q8T2RTEH1krPzDPKGr63LjHhVnaaWOWWg0KvwaI8cd6fvM9KHsZQ2RbU3Am6FNaNfOcSuBP/p5rAnqBJKtLTVM6r4Jn/OMPtrEG8PWoXrXz1A83xrpZvgWelUJVHw87NhMo16BNp7cga/8CqdWGDXxbaT4/JsmI4FSk+IPJcBCD0XvdJJ4YjbFzVfwvpPEP1tiT29ddW6kQrTCugFW9KbvQ/2IbEHJMf3P74hkwIyotwdpPS7lgBSLQBMGXJIWZxQAOK3EYRWSjCGXEZHcpNKmxbp6bHQ3wC5jT0mQGZhXoqXVW1ha74XWsNvpWvWluO1FJVfhZWzEJnGv1QaVQB25DF+2zzVCP/6Mk115N74JMXpIxkz5ZyO4SDPdJghLBZWJkePsPEd+ghjl1rSCni4TLj4T4DJshXvluHG+9FaoWJjN6S29EyPote/stSe2sd0hPzOsBCWHSWzTLlNnju19CR0fIRxDe96uY7IF4qBXmwzqV3Zr3759RF2gEXMa4t7ULUgRsXl+fFDPtkq+WKqI3ehQLgymZc5P8f65iQzyKVdHmLI3KxPF/03AJmDck4DukeNDdwp/B2ZYyJlKnlYiw+NszpMWVCgA3Sk/yjgZutiQn5Vp89SkVVSrqAywskM0wUDij2dp1SV8JLCNMRc8MukTcsG0E2MCZxg/X3dNZ30qgu7cZovAavK8t8dvKU4smLd4UvaZbV3lmBFSKKZZUp8SRaAzaY3OdwDc05mUXqwFaNMxJuOueiZizPr5XzCiNmI3aBoQo04hrygmizACz9WLWyjkNru7TI+2f2TuqdEwZQkQJAN7jAgnJCKbq1Ekjtlj4iEETy5Aeq88v0O5tcfcXYHKEq854/fJQrWjjhpcuiiKxrpqbsdW4qGZxDLYFBSg/6RU8rHIE9CYWfEKL4r/uSsCmDP8pG670GXST3c7K0FrDgdp7N/9uMfZK9dcFL4KfgM4uG4uhFSA79A+faH4hruPclZbVxlxcdPJsY6OJ9zs01AVD+hDekbHNlI8atDTUjgbMzu8PTcaREgYnzQsJ4NEuIuu3UAPg5hYx4xqRZnJL9aVNMRyEBl3Ic30VYVE4ll57ToDR0oak5uwRRKzjqoJHMkriIjUuFGx+lhNfYuZBqlE+EfLKN3SZDPwvJDqrd12qQHf+CEuBc4lLF9VvIs4vMLFvoWqsc5QUtp//jpApHrlFA==';const _IH='179bfe2c436f7d3e971dc57fc427d89ff3bfa283c418494e3a33b9b7b3a945c2';let _src;

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
