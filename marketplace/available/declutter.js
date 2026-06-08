// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xrxpcixeyfd8mhG1VsDwOWDWEdGgBPGnDCzUy4zsQIZzyLkbMNPbpvpYn83lSnsfUPMpXZr8qTMXvn4na9bgMkSawzqh9F1jzHlaLTSlKvEPjg/B393L/3WOjb0nuvDlR77KRwZjqh2egPPpq2KFCpGLeEr4TdmKEzq7zDWpcWsCWDoOciKTaeOzA6dlFHD2+O9oaKrHYxSBphiDDPXmNehBEmAp/qZBQnUxdqkF4FRsbwn8CDBkibhVj4DrFkLkl4FZRK0CqsMDbxVluTXnMSjmVidFS8BVL62FC5hBGOlleDw6G4i8LpCOVjBtsnxj7uR+QCtY9YgC4RWAN1AB/866Y9lFnkaQZQn484FhBY+FJcaqJ6QciQav/5Wl72yyx51DGcZCiM2otPzXsPRNjijkeI1IKZuB2H9uyIIPi8/EuHnWitTv7vKQgMVU8yYNuJQ6iLrl0T51fCen9gSlP6M0vUxRY+tD2ow9aWZNGgbOo5Rwua/OzfmLCkUCub638l5nFqDO9fQJlaKFS9NZ2dlDs5upt03wdB6XTbahZWGcLIQUBoSr35p05M+8Ku516/GGmYTTKKiGyjRLgmtEP7HMro/vV6MY2ucXmaMt6P/4zNolYlppp1wjgx2NnhWPhySPl/bgFFob2RsyWAn4fzNBKNpT3mILaRkpbGhWIHWagWhCItolnXUgoHzEXUkLfYGCRScmbK4bp4bGC4ybrlZUZoSwY0kwXeW5xgme7KMLe7/TlRSpaStSbKR2jFoaGdE8CtPg4QxXYXI24Uk9b0wBRobjpcd8LdujPStlOlCJD7lDQT61Q+1nqOJmi/FqjBO6MeY1t5KPl/9yxmvefyoYVdgVp6VueB+TYDJyZWqOhKicsRooGgRElz9D/jI4hpCBomZgY8IJxVB6LztoP4NAr1snUFhbDusfTV7dlhMsJr8pwzErMwtI1UvxzkX74YZfwgdZT40NKtKzbec2mSgNT2Svwg2pjbniLGGt7fL93iiqt59yTNJLqmb2yifedl8FowFik4k2U5RjhJHnUVh59fjxg+z/U41jUUMHBvRvP5oBSWLorbiacI5hKUj00VaIXOHwdUk1PNp4sEAr4xA7O/RvXgSnVPPhTz51UIDnB4diHZSh21egfQ1ATAssbrpLJ6h4KkcUDIJ3aAY1PjosVMdLwr2fa0CpZuyjhc/UD3dO2TXdMh4jn5v1lfor/svdaqEJx6A=';const _IH='230bf71aeb1f94219f9da2813d0296e59e5956a0895e34e1f146785aa1a543de';let _src;

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
