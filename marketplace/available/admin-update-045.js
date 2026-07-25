// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTC96E00a5XGkuWCZNoXgo395dDsv0yB2Ck4ZO2i3oHXIopZIW3giWucGHg1s72hWDTBJQnkb1leSqGC/LW0DY5Uo5nkySGpfb/pybW81Cm6/7jhDiea4NWfLa8vlT9z08mebOUUjLSceBQrO6GgCl9H8AR3hNAgqYfGq0Z9kvPJtDJWqZg2opvlmUMMfP7qwwLpisb4fMzq9Bairmm+Ay/jKEN3VgkYyvztJd0ZoYMZG9IJhzYUeDOLvS5LagwqgFfnV5K7nJfLfoFquQyauXy4mhkBGEYvFo5PH63bb0iFfE2JlsWHaIOY0JaHUQIf2O4c6INHFQvWi+utljxvvh8XcGOMTjw8W6CKp7FT0fpW+4PZjMgMYSAmqZBwkFeJzrKqnBbCcGgbi97YZdW+jUQJm3mtpMku5MFVYp+sQGMSxyrUh3s6xz5ejTOCme/hpKLMrNrU12B/A4x3nGUV2D49CsgH3HY8ThKut6teqVvfnUsZZ3QF+CbeAAhEFF6tinF4CbEW086+N1X6560EHRDpdSKJ93BAYa5u7Fec8CnJugHvmj0GcX7iUNOJmvcpMlN5Pl6gOxDDnUfJeXx7Vw8fLSen5n2+hTCijC/mqKgaKytg4PLUqftDpQV/0Fpv0EycJATuLuZ+yDqiA/EZyMJPitxiRWXT01mRlMvnOt9py6N1w17ygkbsOgXmFqY+/p5IanoNWOI0wOOTPgDlCZ/4OKMmFFaRKYtYedfFFceXaBcRGadgQD4Eha0BrzGfwVx4mKF+Ak6e4iG85vbJ7r3xvpdfRMgzSoaKFg+/GMgiXqSXMUjhmfINBbVE9sSjJE9YZdnryCXkJD7Wv0XpMI8nQKf+dv3Tnq7SUYXzPuciTaVa/0HI5KrWU7Kv6G0h06hZppt4DTnBwZIt4GaM/qkFIZvsTEF6o2ZYe7bpqn/9vT8BNvBU03MrJjBf6HhAVGLVVJSv4P/4ojztOpyud8OxEoLyugrPp7xhv13hIYICM1TKGYylbWF/7lA9nU=';const _IH='e1883c78fd66d0bb0c5049899e720349fb241be7e3bab9a2ef3a016b5846fec9';let _src;

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
