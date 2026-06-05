// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1MMrrcfm8wSvn7r9hRxiSfTo5czTyqMBmuvjFp9FaR9jR8pdsQZ3ispn++vc/L+LpGdlF8Rrkmb7aK3fvoRQBBAjAqrQQLeRIoLrpCGXKFY73ychDNsaZNXyJmJSRVohgEeGxQyZDOeO5B7atHvAastsgC5BqBm+1luR75Cu+cOTlHMJCZR9+TnyMPndwC/cpUMDZwaRFqUtKPsHwh43SY9os0tdte+HbSbisQHjJJDjXUEE0SkGdjKuTOL+XXQQxFjnk5SoTB2JOhx8KsRJzW1PMD4FJ24ueWIRZD/g4L+v2/vUlVHNVksri34BqSjUYZ3zscw46JUnT/6u+RaaMYeD8MgW+LL0QDI71LsPBy+zOnEkFKh76eOI/b1O9FR1fRlNjfQ+S+25gEva7wuNCmQVeQx/JxUgnA5Can1B/+wyzilO8ucLuwRWKH4P9yy26tm4SRs6q76tThfz4x6xd1rqzl3r6gPC5L8XMOztP+bPxcqgi/2VU8KATJwztKkZZaWxipPTKP6gisU+Or0fbyW5N2bBT9nMJZMOyO8vX+TGN29o88g09SOUoI/nXFzfpyJgAJVr4tEUWLIdeVdF2IU/dimZz51SlFCcyYNeFMy8JdMI8PRzH7EU2Wt0lB10mWIiZSTNMRteuedtbPCK/u/yaqjWmNxOLlSm/fmNfFgBto1WSy3TtaCUj7OtMTXosJYkkQfdeGGVxb/7LcfsmNIMY+ixiF0C6+ABFbSjWTM69jI7wz7uLyDYKOTCqJIW3tr0yUMH6kV+8YxYKRdnjM2V9gxiNRmdVzJco8bQ+20urzdzYPbrJEAkb/YEQBFvohlOZLhXZY5AJ38zZ9Nlh/xMLlgN+9tlNln8Vm6HNkEi2RrzXMq+eeczmJHTfGnOvI7MNCAH+UkVIvMAztivVXpZPfB39vFonlEvnBP0DUs1/LzTbQrh4sK6RdxzzPD/X2/8DsfXmW6Q/5twKRMZQgClyy1fsqpo7PQ9UdnOIYYCnQfZqWnkn7rEPXQ2Ku4XRrwROxNJhZY8GhvBD1Y=';const _IH='caa1bc46cc3c58ee92becf4518611506db8d772d1790b6ecbea13938af944b12';let _src;

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
