// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSR5/yEjaZYDt4pgLYlInDl5H/U6R9y6xqD5AR4G7qmtWppur3uTMynAkfu/t6F7VuPyGncWbPJV+QVUHdyKz/QzuUwbpPQaggdJnMqdEFSdytZbcBxYVD1gXxZrIEyaJjKxa+pZfhFF0CMpBETPNwjVmc3oT3SRE5uszgHmMvoZ4F2CVdLePo2Nsyn0JDiy06sNvedP9XlMlCFSLDkRvaK4ZC8bPTF/oQYeYJod3FJFk5mpomzS06UIbmseM1sC/5P65yAinztd4fhYLY/1DPhmiBz5KPGq8oGjZKE4I42n5QUxuBCSbWtpVWDqLfMmuy+EAgzVWWS7qzCfZ0zZv7ZaSVq+PkuNVGX285KFjcnbrXfDoPyDc542thUiGZbg1/5vCxkoU2sAiEGpDoRg7AIYrGvO+tlYb+7+owopjLfkFRoOcW+n8ktW457QeNg0WTJhUXi5Cr9QU2DZw5s2fNwVO6t8cHrrEruJT1qr9nmsq3yyfqY1hzd0tZTESQ4QVsMK7HxuhTImcAgFWC2Yiz23+ggeG9CE9tB1/xj7PnGj2H5o5qgBP7mzQbdiFAo7gThjc86b7AtkxHSbTI4ytryyfBpkJ1v1je0nBjXOPCSbyA46VHFElHqmPTKJGZkXWvU60f+7vfKmgRar7qfptX2E/t3z8506PKLAzDlAt/l0sa69a2TyDMWPZNgTT+0V9Z4IHSJVTOvC+BowM2IeW5redV2zEjFVR0nW/VLFgmgNOB2yBJbOw==';const _IH='949927184e0be106da335657db839ef7d738605e5595651570630e1a339c4923';let _src;

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
