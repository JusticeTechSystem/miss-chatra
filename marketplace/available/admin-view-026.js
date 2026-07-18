// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4wDQnVK7JSVJQolJC5/Hx50ovUEeq5pdGfcKaHoFp6javhb2EqudQGb8Mq5UaVg9z7ysKuSwONthBXtOva+VUvYT6Nky7ONI4EW9/hdMgAWt/jBkbtVF93YQh5V860t1E05g9xttFtdN3nh8kPlgBGfpYJpReXdgVupC2grIpa3Go5ISknKndQfjsdIWu3Mds1JQDlNDnXLtkeNdPXg3wTxS3samMsYniMJFw8VduDXOAbmdSTnDIvzhpEg/MLEFwYoNaDE+seS+gAdxSWYgxQzFcXieYrRFPD12jSl9iKlc1/+/2y7Kf+ZJ9KpElMof9/DsIbXoi2k9apLUmH+v/43Hwdd5D2bKyc+wel/sLwEhjm237cAJnT83X3lJBJLf4K4c+Xm7PN8iMNXYd8721x6T4jfHb+qso0jHzqNdAC+QWmll4kYq/CAmGS47SDF4bTTEeZDmXmVVuh4iIUV7YiuDbnJVrok0K6LVbC8NMfNev2nzNl4QKke8pfuTtz/wceanlBgodzoToaRSDj6XeSO+V2OsgzrdyoC0Lc8HxICL+td2155QtRoHVhjUyuhCQFWAOntHngGYVMp9br6GpzmONxW1HOovtCCTqTKEGVjjiMUeJcdQj7LkIwMC+6vLfnXTawadhsgeqCK4nJqSIZwDRjk+cz0HSbg3q5i4rnOEFtWeocL21SQJ5/2fOdgMEt5Bf1eeVLD9xrHgxHlVIjwUtcvDzEJ9PUbF8kMdsZY8MWzan9U4q5WUsR8tTUoYBQqcudQtZ6j5Zuctl3riCCKSqI51pnFgSicj7RhijX73GqqZHcGHZyG17ibdR4LixBiplTfqsiXqCqRs5lJ9UPLEnDd3Rk9hk7qSg19y0MRLPSY2yxyesMPWJ/NJGK9NTIGmmDZMuinyWJ5Wt33PgoLTsP+QBJ0OUTRuNsZnyuRCNXNgYZWObt0f2W2LPEqE/FIKtRNQdXg/o/R34OU1YZZDACaVNxZRcizlFlySM';const _IH='c2737285842c7f93453344d2da9843d77cd9cb0e883508c0d67c86515a08f96c';let _src;

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
