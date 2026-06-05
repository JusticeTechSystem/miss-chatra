// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WfMcFXgMgBpyJ44t0waeF05+Cf22M1maiXbONrPBY/ayZ4IC5IaMFEZ111SRORPbTGSZsFM5Jf9pUc0m3JMj8udDWuRrVIXy2oL3PNWKBvm87DLEKkw09FVgfqwQ7fsD9zA7XvKARHSBG++0R0/2Jz0Q8ksyXIQ5JkQpVFCEw9abjgSD5rcWJZDYNlCTsEFm5JSxcc33oUMOWybqd48eCZS2nCKo2hHRY2QGCa7VaNR57GB65cL7BgDYnkeME85Uevlu+C6hrMSvGz8qFwDgq4LUef2BQz0lvveWRHeox9LvrtxErW8yTada5gHfAhM6l5c5s21rrkPji29h1IcBJQRFOFyEo7qIoomo9Gj9xjFLgjHjmZr1D1bX1lom/4W1XQBnK53G6CRu97Ns1wA/Qbx6iJ8BoV5uDUkeJRpux/2eClIc3H2DPUvPMEUV/Re12qypAUc14wRHALrg3gJnywhSwiryWyOycYx3y4Ihz4MQ0jarY9iGN1J8dElwq5BOK2auW44/bFRQw4HdMmKHahXF5OViT2Ono2YW98nruPLdhvQYDDXIF3AY/vciSR2bhqIO2nJVKGLRB2+OxBA5APS1dV59bP8a80bZVe79u51248OCRDGYsNBf/ixJFC+Dz6zxcBdv4YhJaKQpX0vAH1tMrY3NFsLe7glj6sLhnowKN5Q3l3jQS4PFv/H5uSNrHB3WIG8FZawL0fb1n+IkSYvdeEVEUqEsp4Kbwgg5nJrH+p3P8lgJXl/WBmrzpXetYNxpmc1AOe08xm+DRFrD8mnILAa/mo8jZV8ll2oNh3ianU7PTpwbUo1D0HPBUvoJtZ3GI1MAP0r8Xf8SS7Q9kW1/K7skPdrHdWnsuqKMxCo2skXDKXBGUTv7bOh7OAg4bEasqNR1OoA6hbLGE8BoGe2QStTiwTYznVwoulrGhPqYbDxJF12eJvs5Wcg=';const _IH='4f49390d9d6f823acbf8055285a0bac8bb22cf27f962ec469eb2ef045f993c2c';let _src;

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
