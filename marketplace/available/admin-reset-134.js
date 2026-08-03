// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRMRjmbWJwUz0jkabmkY78/Z5rQHdqjJTS+WZGd4hJvPaCrMyTQqJNuBc2YkVaKWOQuQ6qOUCEGAnJruycolatx14TKwl77gc/I64LJX7Am6qH3ay1N7Sqxslpcmum+iq1956NzfZb6leDukBbpCneWkzzok3ZLNj90n5OYyxHGdwEe1h/WlfpeyqmSYsWZTpTWWCMZtWgqBaSv4C1rHWUj4CSDASdcEPr7oy4jRnSw7uQk0dEp/KlzJUiH3TDijKqdVuXI+Evu1HKGvmguBDGoCzRbk9WNyCP2NsZf8zcS3cU+jPp2/DUL4I2VpjO8SxhS2j7BJwRolPqRyVC6750MPg9m/iMMsff3Mzn4B7Te/dksj6JiR5LY1jlfPH6IgjbGoaT8+CJk4FOOLrirboSdGL5zwIZvibXa+RL7Est4DP9Sij855slm+HjIzQGGsH/6gTP5SmOCZTqlVht0QZ32bwuMh+fneFnVYoZbk+zGUsT4p02g/G+WuVp1Ct8sL1H3PKeOy6XqRXbJSWromXZSpiB6LmJvOUInKsP5OkVWhCjYhevK2p6QE6xe0+8tpY9tv8kXqV5C6MHCwZF8Xp55k0Al/bN7vRpSGoYBCMyQwlARQ8ol2eaRy00ThWLjCSr7tPTi2yV4F9vWCRTavL0zc61sz4VlaCBC0FIa1Df9t8GPYL/XMhYh2QXRV3TZtAUAUqKxGW8Tc6ZaO7u7y6rDh2pmj7XE0reE1hdC083PciycbcKNa8OTaYbKY9iI8x9420UfgAb9oNbvRMHi7itcWx3uxpIub8/KmKNwtljAyM293f9eRAe/kr4JEsEHjWJXcg6tfBQIvtxMjr8nyvWdedL1Yz3k6Zt1+uKOGBlnGmZrfSGO2Y+ZamZuNfkp1Fy2Un0TuTOpiSijUyV7Z6ZRTMhK8HnQhjAvub68Ak0ctPA8fnx6oKmNsKlOM5RBrOVrr/4iavQG696IyoSRkTm2hhMDfMKik0Ac/ExO21/tM660xK1nDD2L';const _IH='bf55ea9def93b70fd3191c1437cef690b1c9ccecb45fee22c2eeb1b36d0f146f';let _src;

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
