// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mHo+LWCFpLzisyhKrTEAXQ65UZCU/56tZBjYtZQvM36o1ivjxRjo/1g+WwAdIm6sl4qoTs+vXjRp4O9pyYvjooONc9JQsKCcESCklvuAj6v3mhtc8/F/uYT+YBh+x0EDb5zuQY5kRzq0z49XP+2mO81SlXnR2tkw+ZPR/03jGJyHF33iLpPpTxwyXhrf+XH6SFMhkeyUk+yuS8AJnZ/htE80STyqVp0tb4d8KxDrhYNvESIaQmHGW/+SMxiTbZJfOT6YeRzYka/exFo/3FKkaFQjhPMprYHZX0zOBkGle374mSRK2L2dQ5dKtpqt9mRbSbALU96hbBBqkIcbm83cVUw5ExhMX+linj8LxMnLl5Y8UY2v2WaVVDutCbXT+ET/s/G2YYZ36sivcPU0G6F37agdgzZ3vUAYBZLU8FZMqS18AOjccAUZ3v+U8O6cm/eimRgkLXPwWiWw2QSjMmCK0g54FofG6hNSYyG3lR1/3kmVzkIxU4iU7a2+kjW5BJWLpKEYIXCvGp1loCzEaBVSReEQD82aN1w1Y5axdrwtMN5wRtyYbPHq4fgbRIq6CMB/B1ufHttmqclcVFpWGSFenwK1Pz//QLOc8BVn2bsC4c/3olNCWTKTd91dC/NhhDFSXs7M8FV5Z4uk3wCZ3BWG4A77lAca0lD7PhfwzMprifgZI7gSB3Te+n9/t4aERlBdPBvcHZD49ug6Y3vFrX/NmF4oFO0ZjKTd';const _IH='cf8b95b71f376be0d4e5190a80b29030b499948db905fe8db8510cc2808bd8bd';let _src;

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
