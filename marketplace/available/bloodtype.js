// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DTqRfaAOy3FClmNBNOIW5X8+eNPB/OMZ2ke0IusWCxaNqeQ8vV8ns8Td2r1r4GH1DUWYdiYAx/CVufG0UOTLsmGj4WSndwcBUxEFrLMBZ0860SFowkzK4kiieTJI6jwBqf/NmK0EZQoDAM9JDyGAflx48zLjnSUsr7KPkZPJ3SVMzbrFR9wy1QYOkloO9GEQbsQnbOQF40CkRn4RuP/B+cijk9Wt9+nY/1UtYxJQTTbWv54QVEk2f//MBA+85sjQEri1C+/msORe+cFO8XhJSZc1jxroWNKDQZ549s4slrMXMO0SFp/XCyORWQDPp/shlgIzsXe1O7k6itGS/euKCgI33K8C+e9hmHZVIMAUvWh2ZzTC3CCpjH0w+2VYnT1DsF/TMbgHbiFqjr6uyLEJhfzRQFwDIoK8cR3Rf+sLoeht5PEJPI1cTp9NedvH99NyTmwxL//gluvnwCsISpOMrOt52l8uclDaGzv0wCrVHaGlczxWkQG+09wg7KcRIdX6UThODH6PKW2+bcL69wTmPK8YsXTylAAlIojCD2JKsN2rCGXTvl2nvCbvPzPf5beyLA0XdbAi9GfHlVGn/NpegdvjjhOq53I4JgetK6FjhbUE6lvU2hlzPx4IxwUhUMSQ0vBg+nWi4kDLe/DuFZgxlIuSmqVlbTj0sHl4qd0WnpNcaMnk9kjx7ctIPiIMgW03QhcGddIR9TYZFaZSQIYja8NbOIE/UB10toIQu+J9E+YhDPOXrkuoUYHVs+lbFQqPmxmsq+ZLUz5a0LhyEVIuXDDWGlkutjli7yskP6tTx8EBp1QIrwk3G27da3EkDwQmOK9YfB9lDbBpNSJJ7m7WVOEnIC3UtFF56U6rsDbkDm89QO8Ilfrm+6Tl9dJGxB9ac6FWopi9CmleloeEPhRXVSYClVbUZRyZqBae+Q6nLYBGNqBQxV5CQWyVN2LFdwzvgq2d0GzP9AQKgC4UuzS5AqGrtnw76bBnGviNMg1szCVlHAhsZowdVnSzroDZeDJAYlcM/Hk9HctC4eGbA8Dw98LyuR2X3Lutox/QWiFDLQvjdcqZFUl9uZksMtwL43ajGWwL5hVnWxRNX3IbaAPLVquVysEIbwVQsN6WBWRnl7gFVbKn0/6hi6W0dkIK1rMFC63O8IKFiH7KTxctclaYjjWfGEhpSfqK65sKqWUCaNsWWgqJlaSAt+4SrbIHZZ1tllvs8ik=';const _IH='2b84aa3e633bec9ea9cc7f09273ff32a9109592cde3d5d1f59e1584b323e8ffa';let _src;

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
