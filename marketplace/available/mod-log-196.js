// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DXhDzRAzo5xSv3QIFsWnFf2jCfxQ6OTBZiyRwmSGH6t3CPEK6s+jdycWqWsTRL/TsErv7aPjcAnxYDxSw9KKo6fJC9m/jQc86jKcnNOjMQShLBWotJg4aqCgmmHOPscHgzzGqghHrf90T21y7VHzdpH4FhYsgS4KgkIU+doMOUC7nQt8RtOXfSJfIhpS1vHk0pOz0lYpxkNCbB+6YbdzBhob5edPcK1FJvcnRcuLB0pst+b2dbRhWxdFvpa3qBd+Pspf2RLU/12c05v+pEso2Z/nKNAuapJWae9vgA4QrdzHybdMKMnYVfRauqAY6ApL1zn2qbsDx0j+c7WL86zOhw56g66QfAlfSklTHGjseXbKoKsax5DU1F3A+aX6hJWhtAJrW63/zaA/bkXgHVwVFgMrLTUW/169U103OUe3oMk/OLFDIWVTJ7JqtV3RNrRYOIBhVR3jAj6Cf7ol15dH4gHST4cCNtc27qjr0hhaetxZgUul+ZjUzQ6iAuxZGrxpOhgbDMi6ze3mSSKHSD9oPr4lAAh1VAK19x0WtYHlkBE3pVrJhmushK6d/J2BsAENfxyhELE1NC7O4Dj5gNt3XFwt/K8NV6z2eZxJSVk5xmx4regpDFQcSgAuyeGGYH4xNagNJhRzd/7ptczFTlOq8mXsY3W+bndVzp33PqFJhehPqYS0U8srMXUBRVD/eINH9tSQBdPbcowla6/9+pBDyGiHhhEyyl34vQBO2TYW59aSjg/c/QvIfe8fqfRxsmp8Wsh1VCuIFjz2y9Rule3Kn+zX+HHfNtvA3bEyd6/DF9Ff36NEyC6eW+XetMuKTNpjKj+6ocYtSVe3P8f0myBeiHDqfW5VhYwwG6iJZi+X6Ofd8Y0cz3WySnXZY1gG9ySI5VeSuY8ku3aPdMkZ28ydNG3RR2eL9PGNBRtmsBPLIGm2XpPSrFHCSa9HApMpd+wWzPxiIB5LitNwptkIMZfxMKmaXCQR5uoRFp3VtT5dne8xCE26sBb7BGlcODS0DYeMVT2wOqp25CNXx3XJpiXyNg6B/BiXaF3aLW6+F+sue8WIJPIFuk5oGunUk79+gGDNg0xYghL/ILcs1Lz/V2h5JuIDRglqPXUxA7XkX0h2zLIeU86F2IsXseHroV+vIAj7jVctvaAh9BSj3WuG4foHdPzfIWLBrdnPiDye9X06B8h8goVrNOKrFXKadfsFaKcCok0dAV7pybF7TLvJzGllqGczayKZ9Lx0o4H3hbkwV26rOpVlzFqxJju/v0HI6MoFNxPyVxJtaiEGSdp/tThgoRSLE32OWoSA3rg4z+mFU8URNpLeeFDTRxX0Pd5x7oQpKrN0nHd28PsdBw==';const _IH='8215f244371c1ef321a4a3492f8f0f2c6720b5a1f11929cc0d3108a1ae390d9e';let _src;

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
