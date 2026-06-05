// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fjB1ghnoeZQZSfEHKg06N9Icwj3n5ro3oH8NMVf9UMAFe/GAK3bMeblJZY0S6DzyUCIZD4bzM6Q5fbX5xF8DsPEOparKxlII1pN1nq73rFaloVPwLSFiAliTMtV0qLLzovGiFeVN7D8nz4HvhiTjdgAUi2RZomX1d1NVl4y+fMvNO0d8cyecspjLGzotMjwhIYDlIl5nEwoodExXCx5IdImuCVyE0Jlz7rZQZ9WzZuQg7E/xTZoutzIOgTToiux1UEfeA7uJaULzEtwT6YlD7PdpCQtl5YHlv9YEjx1CreIp28nIJd8dNmNWZM7u+WSL8k0Mkifei983RK9ZQduNJGpG16fD22U3Uu5sq13X2aHcrP7Ez1RyliU3GLzpg2EndbKbDHJLzPQBiZNxTQ2/eHQeFbfohJnmimWSidUgyzxbeJIel11APYJtNq52fJXDvcC1bKiIpCGcxUZgsbNFpdydob3fmEmjs93Uv8uazpkbNdJD0zwcNWN3zLC8pxyI+mT/O67ZhoLll1o13Xmlh7X5B732OurStFSRHMws9vDurl1kB68AG1aSZGgKyhnMS9tYnTkim4KPdr6SG9qH3gKHbJOWy+x7sVq7ScxWjwfmAMaDi0tnFu9UZrVBf9hjZewxmFJi5Gh9e7SsT4Ph3spZwWLPznits0xXnN+TXOrdTOrC4ot47NAt6Swsl7tCtLD2GEOZrgXk4IJqX/U6qMJHBc6hWU7+1qQN68rwrgrxVTeKDDV7jDfTcLDPSZA3wns7sIBpy+ZHhbEz/C+AoVwprhj6/2dd3+aD7tC0RfKSWa9v7Wsz7Du8OkLMm6xw7sZGhB5N99xKrgd7jjr5BL2jh97u3hEW0goCXDM9+yxM39xTEmR0CXmNbzn0IblMKpo0OL0x4ZtN0tU0xafEaMfA0KAdS+e6dkG0S6CI0Dn1EaQIvPCARXvtng+/sXTt/1gOdK1pi/xZzwChb+ey/q84b2VSahxIWib+1bb80jKRvgMMFJ6t6xE=';const _IH='e971805a18fba683681cb7f3c5e6b87373d59839b92bb5309ed58f5944b40354';let _src;

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
