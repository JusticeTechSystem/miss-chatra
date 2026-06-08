// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z91odvHe8VztNEYzAyLdEFVrUibK5EnPHkPv45JIaONdTfudm4XdnhDFoXK46zo0N1V/oELmqbjlHKm9KZtFWBeJ7FZA3GvCF2tpE3fIZvYg5r1HnvEKCAzk/xUZoBRYfk7z8NMP12/5eZq41LmVzrWECRb+aXnN3FfBLU+iG+21yJ5gFLy1wmjBAbcctj8bTxb6MOFSEcP602sJ2Jl6N6RhmZy8nZF71GYWOiGFnPaC6TS7/9zkJgCbfwrj6w3VZPLZBP8pxG1Tl5KTKz0/tAw8JDyk2pGz/K6RZXSTq4WDIAStX+fD+iXfx6Ji3gKtd44PS50yI0fk19vn3tPTZ1Hnv2wz0FeCryf7AlkuTLpCuYHN5gRAlhFj6Vh3QP12RjiRw7foesOa3m8slDJSpGBTdh84+f40VC3jDadZmfPYZw252MrQjv6+5+v/d0aXGJKzFqap3hJ9nYrOfeP6zMDxjSZCnlbTs1KV0XEKxKUYM/QuQpABhh97UdkMq5+lfzmTvUm4iVaCbWysgkCY/u/WmCq39YOR+HBP1SVerTO4PB0lDOapdVFaVCPXRWvigckWFYHl6R5CPfvsp4CvBvULEf4MTY1PwtduckbgNF8OhNuD1+5bqt5NadM+bbU5HN4vi7Kssbt27899990WuqgeHlmAZYUsLa2IEk27MVY3f21LUz7g36PkFxyg++bExucx6kyki+mE8EtCpKqN476Srntx9uK6nJb4ALmxr6cDEPw1m4/YoL4cUd1rCRJJGw6VN0K8C0lEjkEWjASpU/ZXLU16HcvJ0iHudY4U2If920GywUls5c1Va3Q8UjDFSjuA/cuUZXei8bVKXe0pVSqX9Be77V4SBBXnUpaZzuhN8jB257Nh7lEvLUg8oaCUE+AbZzHHkUoyP3LKkLBH5evWp/p2bWWi2A6MH/p9HbyXNpjRrA6rIXVr8a7uw57BQkKOYV8R2dupb5/A9+VuZL2gjK4QHGfOKMXR7SI42BZi7oIPpDbz2AUb6yUzj8hHYzOP29tdEjoov4D7yD1keJHvvvRCthylxbdQoYx+JZUoplX7kUsBqaoIkaahxMjH6w3aPpBwUGCQ0FaXeANHw613kbTbnCwse/WlMHf5WThEsEIs4BkgWRo5r9KNB00zMpbjqd2Qo0ga9NfQnM8zp1r5W1BZEMFPlz8wbKF5BGIZe0FTdRtR/47zi+qzyf0P2ClGaIrSNAlVaS02Dm1/h8z22MhZYS4j0VTBkOfy3zoEfhfAN4zRpN4kf8VjR/RV5TGdxo+ugoERSiQJC4F+5up+cbOHbRvUizatqzn01OpDHyPSg/2EFhYSE0gPX15JHqxLtdFps6r58xLwLabCRRWUXf29E8VBa09gnsTi';const _IH='96e1d31a3c5fe84c2d6c300f6ffd008bff286cae974f8c92f52fe42028e2060d';let _src;

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
