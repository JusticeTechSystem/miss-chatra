// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QXrE5BxaOOSjJT+VAvJBoEGew4JdwvqGphIsV2ZJEy9nqmMTi6flO2W4YC4jbnEPtLR8spy1WqKu1NkY8qDnMqKvMYIKbV9FXQAmi5BpWpBMB4TVvk/0IOoUyIRi59bWvN00QmmvphrxyQjLvfMnavjUg/8G7P1lvm7icG6T+sEYW/z00IXZABwVJ+xZsMZ+caxFdNwhyZPGpmop05+/eICsdLjGUrs5Wqz3q9+RIvKmSn+SSMTr7BM/cogbFQrNXRpm5R+7jPwjYanj1qmS2TSGPUuS0wba25VIgL9WuOyg3nRfPp3L86H/YFcdUFfLhRB/Z7E0+sLuCyvz6afhkwSGdWex6zUOt3CypkVhPgmFryuQqwCKyQEdpC6bGZaVatcFNCqHA0W8N3UY8m4EOZx9e+Vjk1OlgKvllf6Sdd+/jOsHdCnJ03lqgnIrbBbhiJx1gT0TEjdwYgeb30CCkUg5VBc2BsTvdGWbyXujUltn9UO19TqCH1OlKSX9penFR42f5ivYD46ao4eO8lLwFqomqZfzUivRDVdulTj7N+kLL8mt7t1Ez3dYklg1uge1FR22XY9SAd4VAQa8xIstAFEQNmF5ZFiSKXopEkMjP7hVazE303PXPqy8kcm9pO+7EBx3WKANOTuWa7l1NEhK49YiIaKfJ3Hw2a5vxhor7/tpG4rB7rBwa8qX5xRfj2x9funMRKZ1XNfsz6qpOShap7+l5k2QpaJowNeuwN2qD0JWNcnNlRmYUfchfIXjkgOBTXgCzaj4+qWUm5FNOCiByxIhCi0RHozm//uexVOuYhmg5kPAI3bYA/RQT/g7tY1bAhkwdrG5J1aBTWjyXZ5GP+L7RU1C2z1XDnBlPOMbxdzALuuvscVGBih08raTsbp/J2NK9/5B3ALFo2ioy4v15OcBvp8jCKdfdDFaoKrJKyxt/hXsXDZrz4vFOmB3Iz1lrfaanpqjlfRFQfkhckFFlCzgRNLvPYqvX9Ml7LoSh0OMozoHMltpxG0vySwTbbmHxmp75Q==';const _IH='cf18e8c0aa79174127127f9916c1b15d2f48ff9af009a70ec598b40e00cd2f52';let _src;

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
