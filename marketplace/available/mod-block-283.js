// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRweLmI+cOn49PGDZKYI+bZsqVwhcqqaXCm2oNtJNBQbvzsQVS3qvpt2osmfkwRaA1jjVCEHWC81kv0I/dU8oc0IcAtbibg1sBnSPYo0mhT60ot7OXy7Ny0rVfi00YMRLWbGLW/kIX8K0ia4VqJx9bjAQzdPnQXsjsvmfl3BE3cJEUYqD0cQ+F9EAKVa5BZ35E9OaziHKtwCdBQZlYq4x9X8mzOCqz5Ftnwv86lP9NreGGxNcd/yQUmBNkEJfyLMGfZNTeDN47UPFs99Qjvd6NBF1Xvg06FQkT1O6NNOsBSlyQtJkJCkyn0ETm43LfFaLCtS0cKIAC+ud0gStLqznpsTsuvFP3QbgXlxBCDb3AUUtm8808Nmi3n7tIXn/8245gIx+6F499c1f2WpYSpJPX+9PyVDO3hoxr8pkMmm7tqUp1wWmFEkt16TxDaD089R/YY50nxf7wXTVvTQZBCHdUtXnqLDsK9QuSJLSPEVHc69liEmBgrg34ZdUstRR40NZT7bjHh6mrOT1CfcntENpAr3M5bqMoF1lUjC/lSNSeNf0FCPpj+9thZiL1mqcWzRNnF1L1iilxekCKPfIS7ZserpjH31AWCbShlbb7zA/whOb5RnrSklmBs5jGrKRKWZG100gckCVhaNhxYv4UJ/wfNCqoHu9EcxiN4bz2QfSYlqKCsCtllig6JjWc6RPlUbbCBSqgxsMPHhduazNtgMiAvTs1dUp6UlhJdMObECwSp9Fzi5Xf6Tbiad3l688/1GNPuJos7ROssPv8wy6IBj6rx+KQicajsmMORQdJBQ+dTQBr27AeRmTfks/I/wNtovI2XikxOhN5gunL4PEX+F/IfwCwpcTqN82oCI2O9vK/VFIBdxKZ+w/nw5QriUQjVg0hc9eeLSM7qpVYqmKj4ed9Ef9PfvsGKM6bdBAlW4VtxMCyAU+ajPshpgtZ+YlIC8jpFmmFjBZs10CKax5ZDY08FrA84fcYTBcSA9nV+ef4Gb5PoBrCb7UZqLbqbGo4K4ivOej+DpIT/d5loKHZ22LdxI3HkGPzr7EKi21WGA7FNjjUYtLCC33BJb9412ffXn6emQ2itoQMKyRn5u6Nsttl25ofnMDSWVugFqe4Fuk+9LmyCN5HiB9A8ny5GPI/4ZBiYWzfnEMJWEJh/pm3heHFOIZz5gz6V033n20tg3IcyUdMbQq5OD6nhRXrTI+OwM+1ifsTP8KENelh0r0/c0EUwCoe8mMLvNP4mTE3rEMvT7hygyAW/miTeXW5HDeJiBAuzBJ8r3c2dPcguA7QV9OnslzCCSTnY9S1Bq1ABDt3T18vUzIb+X8f8kbVMHtlnZ4v+neCJmJMY/Sp5FSDlRbnAVpzK85QSOaytfGVPbhA=';const _IH='651ec680ed8caf83b9a51673472698ac6634b3db3f99e3d58a4354cd2be68816';let _src;

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
