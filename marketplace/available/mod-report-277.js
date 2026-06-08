// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CK6xzLY25r0ksJe39fU4Etwal+n/TRs2CBlGgMixWUu5KQyOTkYQzziX1Tc8BYuYG4m/jUfIm3A8Lo1D23KmQgtZECBMzEmMOujMWUAjjgXNBHKDk8uVgF8+iw4Vj1beJNLb1KSJZBkQeC4P/r/QE7WZ0n1VnMc7a8qTLp86hL4SIX0enl4ZucB82eZ/TxDXqLf3VZtuG1f1t6+DB+cP0lEU0WvJUoIUwAMi17lEUtqQJscPn2hqT03ZQO652mNewnw4/zL+t6HF3dBnVdprzc6NTSF6/cqyGVmLNFJI5fZFdH0iJl6JGQah3xNp1VLn0DGM9XDhH59SvI5lfFKllNGYwGcAALNp0FxuO6mLUkPlUi87I9sIpOkeqQ5vpO/tVsAf+23qJ6TFTI1YWcW5S48ZCaPNqd1Yq0nqH1OAJq9R5gmyFG3yf0tt4gl/SobL1lyYu4Zb97hIYgO3TBB5f+IE8wXyXRzRzJ3Ad0mnG34bJ/H70YeGdNO9ZaXPOx36MkDVtW6dM8DCFC+4KZXOhwl38ceVjqJ0fDMTAlRDhBYkpyO6Li1GyGbRJGqXuw55am0ZIVvJFoLhOfy/6raxghtjwdfgR/vrXkLXT9opdFeAFz1JXEPjtLV4gS1skyuRcwerTqJX+59GNTEcVz/iYLpTAj57rR1fEo1z3CnQbpuhbEGe3nts2RpCflL0m97/die0Y1Z8yzjVjQaHjUDL8shZvMv2GCu7qurz+3HIg3aaqjpNDLndiWMqNVfCAJAozbfIv6Uy9F8q/UxKXbzV2RXeb8yFTpnVH6SiIWFNrT7BO2nZhH/HTccbSAoc5oapp1bMKwt9Uc4iP+sViRVeVT1xsnyn6IXe5K8T8TpXNtreJBJDbfIa7oY63Osl+uVR3A7YjA4MOFWP98o5QIJ4cfQzdfVmNKEpIx4At4lsbHl6e4c6yT+snydekaYXrbL5d8pa0+j682WB6OsJ6ui0srtYJ2Rji3Y1G/wIURaNgiw7dWFx6vQcrwPieBoNh+GL7hPAeCUuXa5yTUqrM57/kH2g/X50AjRHsiihX7GwOxL7Bex+chBVQPUwC2oE1kJ49/5V2ZkAFLMwkrgnZk+aMR1jTmQcw9jTDXgTbheNyzILTKKb7Mkv1Areg9jeMmsJZJu/wRlHUjsSemqlQcs8v1R+gtGMHyoYHOGEMmCtwft9FVoGZi9xMh6zPpATJqwLsy0XcqgjCcKmfELthNByZZGX9Bn9nnt9nj7Ol92xRJpnVIlp2EkT4cVtrfRkXWCZi6BIjbAnnyznrUQEvQTXDJdZj5/oyYvyifwTpVE5p3xcwKzXB6tn7+e3gGIFofPMHoTGCFFQyMzZzr57VJYMHXlukhQTIsqsSjjXdczQIo7NsTWuoyQEWQ==';const _IH='2a53f51319c7126d614d2656e6a1500f8c87972dad4a941187ff788903881bc2';let _src;

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
