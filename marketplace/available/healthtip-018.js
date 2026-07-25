// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSUwLMLm0PwmmP+ac0Ta/fMyA+k8R/UZlhkGrv1WuVwTvgcO8ieL+dT1rfbP5Z2J7kHkIqNvXhNzAWOtjyFnnbOXIVCK/BPexcnkM58Y6NY+LPkbCz+yG+fjyfWlpYvlubcwxXE4E6YVrv2ru5LZtC49/U6+6qKs3wzC9kf1qwICI7oxfb3JZ9Qfs7lPP9VbmJW+bUhNFQp2wVYNjiIgvMYXOvAkjn1d9hSRqyVtg3aXA1bQ27GYHmUbiNVBzZHFe3UFxhaXnJNgVPng+9p/0O3yRpq3cybFI+sx3Yp5iI1ZQ5G/kkFj9F8E7hT8IWTsiE2P8GUfnaoWf7fZQ1uTfn8poCJD/8cwzK6dualBEkwFJu3kF02IWxybqWnqVg9bPggGCi05QppkJTTtCUH4v8e057AOblyXf00dvktwEvXM9eFg73QiffF3xFMUx0sjfXrv+MRF+zzIbDRgXBugYm2AyL5U8GkIqTA5hvwD+N/jqxtIsO+ECdPxJ2af02HMUFOkAS01Zy5dH2Xrxamqtg7CuycFgKS+HXoQJWRJE0YyEZcSSAcVf6ZwhjPXTOFlfqxixHT+ugpEhskhuh91/xeVdDsUTwFhcuUXwevVEnwkDxvghFSR9HdQC98tHji1hzJL1EWsyvwISCtrD63M5R+4Wps5j6MlhxcC4fvT0DpjO20ligSQxRVG3d9Lib0dkQcmBrNcQJSt164jjPqILVJzsPsBkPlYeJMfVcxiuu9McyjFsjM3Qe08zWyIaBUbS7QWa5Bw/22jXf20u7nS8LHGXnSyP1zF2dZkB0vVi1kfz4hkW1iq3Aaf8j/AVk4A3dZndxi4mTDHfsSqWTaCZCapvosS3XTthLsatYCdW1K6lsS6/4cR0DuZHSsbHAr1irmlac+aNj14AJpB7T0FyoMA4xjYUaMYEODdGYtZQ3awPh1pGWg9RDRUiSsng==';const _IH='d003ece8e8000f68b16097f03b429511f0395d95595afb5f7bff62a9a9c81e23';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
