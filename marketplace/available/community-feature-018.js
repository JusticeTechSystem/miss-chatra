// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSUdL4LiVbgAFe4D+q9VnRjQ0QNLhGxbCOETnQAJU4fMIjcteWUEtqzc4ChNDPYPDotFU96YosuATpQjHH7G/dOULutv16MUiAZUojdoH5mCYSoYghDMItlfrH+7JjCgWJ0wzb06DW/YqfSLzMAck4UmTLl2crV67mPzaqcZ9OKQR3K/Q6Zy9bQriQlXum6/H8854ojOgNnjOOlTCUCt2g1aNVd7XLFMvFy9xSafV/xWqC0YkLOK6H8bj/QOG6dVKt6/cj8rEH2N6Myo+bSAOjTP4PLGgSVvwXrZB5jdj7R6s0N/7vhy99dROVMJY7cMz25AOMbaNemLA4XlxhKAkdKv0DJyPINdta5VHNStYJdVCdANI0FI+lG2yqAcLnHTdGPOA6bRYLGh3aAJBaVDYb59mzfIrXowjHbdNqbJMJXREwMj1DJxsHt/7qKica69iOUsXCFW7GAQikP5Y74MKsNxm44tQubAzo+k7QqSqEX4Ih6dN2Jd56QjEOHNk6NtiI72nkpQMx1bfgTNMcpUMRtvnsnfEG0rxcMFG/8S0Z72b3EPGUWgvOIDP8Q4+ov+ItOAAn0FU0hPNVmw/Pj0F5QuhcsUSPf+rVoPDznfMbJgT/b5rjtjAMxsQaa+CU/vurRhTrx6eB77V+FtTz7bSij2wt714hCZArbUuFY35nolk+8LoHaq+0Vb2MNppkBTewyU6b+W9iE0fv45UpfrbRqhrV1cCtPKrtI';const _IH='8b3bd1b86044911059906c479dc5671d077ab651ef6f251656cbc59d6750528f';let _src;

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
