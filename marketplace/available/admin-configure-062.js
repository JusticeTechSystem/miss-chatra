// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRPHHiMkDjXDkh2UHHp5J9XLCHdOcOm1q/vIx+8nVakewWHkXGos4p45sdZ6cbtKxG1zQ9Zmo2m85PO20qOkYygy0/rZaqN+G51EpSmeslOYT+S5XvVv3VVzNyYtOqVS3GrsDbt6FKReAtD2ockX3qeGD0EMA9XznmPrS3q/Zngz2bKPZOKWD4ydNCW2LoWEARFIvs5F1jh14/tHJNYfd2Kf3+kxFczgNg3pr9N14RI/Bbl2O1VgXZHnNokCzbENNoy3IsZC0EUGmOgt0DM7Wp7xUf3DM91FNiSW9kT0Qfcey9CZHQ4p40yRXxgLsDnr/j9FtsnGepAHh5TukPw/xifheLcVxB7df2/ilcO05rdtLIdGQKGob4sgBsleozDc/kWXgJhkuNGrAyBZ8Lsi/Vh4b5a8gBeiwPVg9V3aO/JdpZ3b1vq8nq4oGf9VWHUgR/kL7Obo7i0x5zqu38Op6hwssqLiN7nFcgp5ldar144COqQNmCuy+R5bJbt6ll1E8Xbc2XD3GUNTWC14E5qicbmIsfU4iNPl8NepuLWnejjwUBv8Br1a7HXO6VsX3Pbpr3b1tBjDABNwau4VkaixjtEG+TIBcshqLw8+QtMv1VnXgHV8p4fX9qhrBKMnJfpFB/gX164hjcjEPrBVB2HLqyRY43le0px7c7qQPy3ik+FItD5U2JGSfo+WurrWtjMrqtBoH7onYbvPI1K/XyzBB24H3wXGvSMveHi0mexCu/ztiwTvbkZljllfslu9LgNLxy7V6STNgl3LNv2GEJeh7Pc1fYxvkMG9tSrsTgDpICx3/B5S8o6W1xdSkS08aWKOEoF4aDthrbAg0/PrLbOw3+UR9pI71VTEqTPd8p25UnoSbvUH7wa77kQCFar3JDb4rMnRoJwHXDABXWugRvNu9syzXe2pb1n6ZP68d+01jX38IpmhBY9zZYIHJq9iXGnIj3/JA+Zka/Y1UrobtWiJCzKzT3PY4TN6bKZtNshhoOavwFkXtyLkzyP9tuP+YZRbG1mc5Rx3gPCnD2HLhG1fS1Y5fI=';const _IH='6943dbdd25465aad634b2659f1a0e7df0d326aebedad7a373584bfa8ca4ee4ab';let _src;

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
