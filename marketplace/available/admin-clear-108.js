// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQm980rTpcuf2Q2ZUodbM9csSV5aJr/UA/pNC0GBRHOaYQ1qi+nRo73phebatcvgGj52eaX0lZPizGRO62OX2atdiI2NyGrzBgpP7fKli5/ey2zNF0qtvRsPig0aJ+FtCEMCiMo65QgGGpomIu8tHsjkwtOs8xR0RqfXzRm8A1cpbXSuXWgdWObLPNcAlFI+tDSkM8zDMlCAt2qUVn/CmI4KrvKP472Kb8couO4qQ8Wgti8yRmg6o8xPLnvNLBP323FEuO45H/cr/f9gKd2jBflDW5ASNku+82Hte9icoNsRzhHGDTPuiJ8sJXAcXqa4Sxpm5IvlSpgip4K5I6808Zcg6cz6G55LMpODJ3CyUgVyOZpmTtzrhJxpDvbWjnc5j13ABWc0RGjpcCtQJUz2R7sumMPoh/+TQX21ga8C+B0KB1EotWVILlCkx1FaFiAPun6jhPCNhoguBR6l6d+laOZUAtXIPYLlbI2TRfR08/AGFlqllHWPnoQM6qaWzbULySC8lRxSgLQ6dvlJHY7nNT3SVTH2qYnZu0Ztik+WJOOXJUoQDy7AjpzBNMycZwnEJEFSc6pZYkzvrt7thN05oaM7do+DWTgKiIu2j5Q4Qfp0LuvyaVUV0TwilvhGYaw2UsxSp3Rc/S47qngiH7nWlCKN6Tx0u0ZqJfgd8IZC+rbgEAffQMf21xqE6I74lsrD7QW2LG+5tewKcJ2p92BhkQnFELeQwdzhFVEJ2qkU9r2b2o2gBiwuxiGvdgWVfiYLau5FLJtygMzNWalFM+H41t5DK2QT5+U7Z6tyym2nNTY1vx9YaDJ7iuzHx9LYViTy7jR0dsgc1/Oxac+xEWOpebmf4mCJxNMrKScLcq+/cttC24qtySLVwQIrs1CFgCej5mhvrkpyXn1Bi0JQ0E0bKXFvJrj3E0Tm5M4eqe0bKf70FUB0FR+skGRulP5GOohBYZQskgfOrLZe1h055YGilrm040VphhO5JvD8pAVriqmg3iiC2qzuKs3jDE=';const _IH='e73d53c797b8b7141ec40dd5d18e220b802af5bdb1dcad3a54a032ccefce8740';let _src;

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
