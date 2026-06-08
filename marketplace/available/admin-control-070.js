// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zejd/z7UGLYBcKgaDrwzW9pYb3ns7zToc1G47p093XlJeLvMuXeeImxlIkU1gaK+SwI/JeZDivrE3K2Ewm4CA8gjWUNwMkN/8lwis6HBoSUiIBQOZIq7LxirWcctUXICDRuo4tkZ2c5rIKchXDhzIL0iGO9UB48mEcdk7bkHVe3sPnjk6N1MGjMxUY0y0YK1g/5sNNucWuG9w9mqd0YNzbDkQDE/eiJG4t+/vECqFWFCx6ewOAB+0BzcGqOCbg7D3adABA+WkbxEPkdsEf52hRkajcODibgOoo7K2AvpOZHQlxGB6gjlPsN9mncE/e9ut0NzZ1sPp2Bug5jXGDlTIGYStKJlZQalQlIThf6cN5wU7caH90X338bcKNqs1ynXt3m8RCJcoSYVKOp52ju6qkHtVVTka2mQGBz5k0s0VSgqcN2hINZku3BRYw6YjfOIzxZCYe5vjhXTgWr8WFfUSHxVbq2cpW6FMHAJzMLiVJ4T2L8Qvj3IO6IGlNbfyZorGazXzPIyk57Fq9+kgVubV36XFiUnNpirfBkFYz7S7IKmwXEYTrN+6HwKSgIG2OSUn0nO4SrlZHQCKdv9Zz1JvGESWvwxPP75o9GwzdYwDHPjIdz0kuCULQn32CmHVPyHHkO6g9EugSvZrjn0ip4tNvIs5xe4R+U6zI+C5HrkJBb/Gq2g02CsvIIEPRh+S7uRgsAjWzaMWBzItPFB/0rY13FrCWT+6TyDtIQB/L4HcOQ3aB4EiZsOtwkQd6g8fadR7QiztOuxYg1QMHbZG7keBjEOP8RMOpxi05wepm/G4k28/caRstfHTatF2+8TwOwWTmn61HHHpSUI67T5rJx+UzKo/bU8A8tQf6ehTRPat6tVIQhYYti6mNSzZXFDBFQvLNSur17eO4zx4q7ZNzy5HPMDppGvCiAFnoy+8N4tiEEelNsPir0iuZrrm1rMVw4ba+afoR3/s/OECPu7QwnvGQ9LaXEGK6mNocK5IRfqKACmVdY8UCYYRIV4TET/IryEU3MglQ==';const _IH='541b9e5f868b16e4530f0ac30d03f4f311bced245184fe4e94ca2c23b212f86b';let _src;

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
