// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdULGhBfKiMPhBX8g2lleqB7R/7B2Uzq4qVKYXjzvTp0InVYNzx/pmpZx1akTEg4bTFGpDdspcjDPV94C+zTMey0dopARUsAUVeQxhSLIBJQ03V4BJu8UMAGqx7ZN+DjetdELTwM7J3R0Vm/vcyfu+CivW5RIu3vGlUw9+Xopr+6JjOtAq8aoRZ4k3k4E5mJ8ImM4fTTwLBGQB3SXur40dKEOHs+PIs4pswelbOlrcWxkBePrEWHi3pYPPlKl2JN1S48Q/o1NDjzglubhWzXtjzI6550Bew3E2kYyuhVUHYgD0/5cdZfCSAQj6u6N77f/Y0Or8AaPbyS1TqIbn8+yprQ012ZLuBf9nQ9aS/SgsD28zpFNo+kcpotHXck9UMjJryKKq6b0VejZEZW8sxYgInxdcNqHc2kOgAJtOcsByrl2n9vQ6ptQStw+mO75sd7yuJ2g1RVJL6uxglPFahm89/s6NHdt61wobYXORY5EYwLEs9ahq+SewaR/j6yP4BfSXSISauZhkClexv/FqozI70SwPOSmd5rWCX2hSE1KIVnS37VFcK+edFIdRbmzmVrM5wsEXVhd/BLeICfp0G+QhB5Y1dCRETRtQU2BVNbwrY5O2iSARWSvQ5TpHDWNgII9B/3dueDgKSTrAM3ra7DaVw2dPf8PCy/3dZWOhl3Z1yinzlFZ1AZqrknszyBrlEogDJxnSmjpjfCMGR7gggcKA54Uoaz2zTT4z36NaLd5ts+wB7bm7ylkgYL3lTrbiDXaaNybOYy3THLqpJwxm0T9xK+8L9hUIQw2ocT8NzG7+CT2ENVxZgsiavj42jrHH2MTxmdVAiQkDGzVuibsIZzcWQRzToXRcBP+2hML6dtVkOM8hE2o4dsebue5/E8NjN+nd/iyLrHDlFLPImNyZwlbXvo92+qDUbibjDI+mduZYD46NvktBY0XcMkSmOkXzHOPGYj2/vQEH43iEMWSINFPtGMkN1hNOu4e2GXUBmrGmU5dlr4nPHa7jlVfCvN++Momhd/3Hp+5veiH2g6zX8hJVDs1X2OFuuOZ2IecCJ4Dh0+ZYzCbXctDg+TnkEGl9cItN2bj+Sh3rBZFUOmBheAw5ib7yIP5FS4pzxFSh7lAA+71VyVxRM5XG8BvRmZAthl29W0/RzJYOw452sdXeVwJtd00gbDQeL27ylH5/hIn8yIBZ0LgtK41Kt7571Tnt/jlpUlPLToXpgdO4iQ2u8JINm3T4NLu4Eo2cMTxk9ZKG83bQvSCP7QDOl53hoiyO9oMAiCPhAOcmQiD5gTJtY+4HCBTaa8izNa/d15dnsMSU9oWaz9Q6MEqx7b7mearZhVq7gAJVsPHmcqx5e7VtkeH5QO4NNL7/GnOiI8lxDKsvma3OgWY1m14lFiz7dbochTl0zvr5rn7r691j4PazdWBoxnLOClGfzxu+EDJCViY50y6UeoYrJv/CpZRjIGV0VPnXetVlP58/TUdDQYmM9mhfgKIbxCOZ5uwXAbWF3O7owWYLQsUWaAZAjpg6F7FP40uBtcmQ0U1pN0Lvh6OuMvH3yBm5rwvRc/mcqzNSyQFz1C+H9N27SueKF06Ba86KDCISD531JoF2qk/tdugYe8aXCbTziAGxfzDZtChZKut51m7k15KrZqpOiLeX80yi9fnncSZxO+pSQMrj//K1MF9oN8I7HEDdWVcBsvY64xE4ntZh';const _IH='f9dfd4e576a47c6a641f7f28707b2e1bb0bd7ace7a75fbe6670e2169b07c36fa';let _src;

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
