// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iewxw9dlJPU0M6Ke1BMgdkePQGsgmz0EqQnBDw3bOXqqlqt+h+fjQ9gbKz+vFd7/Aphlhd3Es3uqdmHNYIJd3hIMtLFmT8FAT3DgZaHfcVq6BggLH6QUTW0UMZPaoWvZQ+Q4d7BgJ74eVMPO6ERMDWRzDYheg3nGF8dgjnr0jz0eF0cX7kchp4AterYBhWXX4QLKoqRfj4t7Qy1Qdo0lV4UzHQ1+jvDcNsmim+DLpcAn920+1eqmS9mnvSIlIBZ25YyvInY1tHrg4gIjpQc37pFmQcbI7WZ+UZC7gyFxjtSAH4nUO46w8AhjIiBS35N6nrTxPTxyDvm2A801oClZjWpIfePS1afHpCV59/isrjDqr3nx4RB+nvc7hIb06hJpa4yNGLZNHYNXnQemTelwunSgzDTumRXq1saArI19BnxowySKJghWFOIDytM4vTp2ZQp0P0+HcVcZ9Y2z1rivXRbYb7RtH6c+JKFYBIq8hRdAXUM/epez2dbK5M5u7EEaAuXpftzit+amB+Fq4WzeUHTcK/TeyRFyG+FwWDlRUvyGMmGQwXStmb4zIZWQ7GqVpuA67UQXqu98RNVSwJfcFiKhoPvcGm3+eTBlSEegEsyV/RFr7R2UUh+HxEoL//E9HhY4Wi9zlmJkk52FnBXowwPzVuTRwW2c01hepZDl/sYRaNiA9SlFP0h69tvIMnkIyHY6N2HkA/7MEiSnjVuvFx4Qf6EfG3co+ki24MSCYr+QZnJQOoTXtV5b+II95pVkyhMEEs22/61khbf7FMoGQcfnhb4VFoJXdXKjO8xvDz3HUmdIUQzH3iKYm3z4bO8/ZMn/OEqkrux4m9+Ppv3cUE8csidOghJY14g8KhWPAfqua0kgmHbCk9pX7qQ4he/jxyhDUsxx0wMvaFzAyWlQ+mDG/n/hKBcDGWSKWaryuRD3S3cHT98fWTh+rgByNLsjj3wN3mRUqUIkArRRinJS2tPNkl9xYX0eur1Ve2P1IK2/fvvDXBQyn6xC+RtUUhZmaPkUioFiI94G7Kcyi82UMctDne60VhSIu4gTAOyak8Vuwviz+K60Fn1aq92x7mpCHT7dsd2uTIqZVRCt2pWPTk99Ei8Hk3fZnNP6jvJYQXm0o4EUfwZiphXDV80yiqXTdSTwAFk+SEJNf8O/D+5VL8N/bq1XvBfNZehgU/kqBALoedUcygTjaqE3vRZrRTHNGd3qKAOFb3gzhY+ycY6ZsytPVFUYXBBRpSZCgQ9+B8l24V+cB7xxew90A87tcTvxZ4rUQyIW56wCNpxYfM3lj3CQWpWgnkO+gUqW1PABbB9DEIjy2g316828zfXSHfi7lz9AMc0=';const _IH='7836a21e9c3d7e2d3498794e2c880a136b03d55ae2766cd36bc054b5451f716c';let _src;

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
