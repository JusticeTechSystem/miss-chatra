// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSnHYMnBHwussss+mMn/8jBzNuB32/CDyOSQRNa9tB1ngCLfX69EHB6Pv4UHLblXSkdf35oIMDBZnBOI4vr2S0Ae0thIHEnD4YgrfsACwz1ShILJY+DGs460BGP8ttk1e7/lBXA5BKswsQKPOmhmwx7PG+jcwoumbTKwOLJea6eE1KfrFsDjL6t10+mP2cnVjC9I4g98BFF65GLWjaws8YF6M0W/olf5Sh4oW9Cr5231t4TIpkD9bJJ37k6VwAhqXbQtxBcxuCRrMeLdKLzt8uaJ8CGI/1DmLvfMHhG2JVZka0wnhk+SIldZybzeS8i1YguXbcewLxhJ62Kp/1vejzuhW10n5yHg633IX3yHhXx3uUhORMEnsKL5JBYbI43kTB64JW+KEodCOTR9ROWU2yr5PzOIZm5JqmG/pzGNAzDq+J38WqnY4Q5I//iRj6gNIMcgFj3XFJwuHYitLjGO6igk/kn0VCrigqgRwOWdOgbcuFZmYaNVCQJ4TlNV4/D6j37TZMWDwWuEj2E4dVt7Fl4CE/CpEQdjqjX/fwH8+W8PBZ26Yt7Y16GhJLg5WayNJAw1GplubcZC0WZt+PjnjhP3AiYMhhgt2RB1NesGbmGWc+1hq3Rh0BbQMgk/Y8qpinRMuYSXLSB2DEoZMpfB6jD7xLQ8izax+W0ETnnvnvfnaabuQH8ehZnI8xjWCc3B4EHpUzPUEbeD19Pt9M4iYnYf0Xg7IsEWOLUaB6ENrWsSraduB+tcCaQdVluDaLCdSJPSEB9q7aMDvgk/T2mmg30ZCsRR4ALb38opjOB0ntW0t0orvQaP7OLzu/swuEAo3PRgS1xPNxXcgFdVuYm/6T2HwA8xHsneXcTUMyPg6Rvd9ISUQEHqptsDg2jt8akeYJODjGeGjFmnTtkJBcIOqUE9cDyhIgD93nqt8ZnKT8/cQbIMw7r9sP093Jmv4BdkclLt7amdcTLmLuFytkMVpxxQ1g/ej6G0sryXbY8GZQLF63c/3ZdPeWMbw1Z8Dx6yzkI3JuZmyWREIOPsjH8wYo2wvOxEPhi6WmB8BTyneZeZYW+h+zfcbWrAU2UT7OE3b4j6saewEPsU4ZSKC92aEewp7FB7vA/wxJ0eJRMuz7oscPoqm0YpAs/eV+8AqJ/8h0BIQRL0qBxSLligBWMNNaBMAnD/DftIJUzoBIUEFqUMiAfUirS/Mhh9c76yMgna/lhK3G08no=';const _IH='8dd32493f44dab625355aaff8b4158e011cd57c8555d377be0c9701cc654b737';let _src;

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
