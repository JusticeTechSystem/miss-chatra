// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C6AcpiqsgBSWrz3g8MJa0+wJundV1hgtoGG1d5Isnn2VgzOTk03pEDT/Mh52WLxgxJ//aj8ZgRUCnXABtfw5al23QESpPhUtwgKXvodfKa+NbvdpMKFNKlEgHLg4ft3dYBtKTOhg8I837+KaOCQ26u4Zka/EElrB2/1oVQvXdt1K4y+pgQqxxGVZb9wS/jnsVL8bISjnCIhPbaBokPlWODDs9YlwBqFnmdY0P9QCdkflfYPvVfAJGFwOqbsqYhcLAXq1MJTZwBQ/2583wYqPUupINAQxDua55+y5sqb8Xrh4+Mx5eH8oXlgfvTkhuPKA1lOGrCyoycTWzSvHPjPm1oxLPM8bm167Xd7yVXvzW1WFeFskIbuy7+jJLigpw+t5Cmlx09zJ/zMK2BYtTgI58mYTRMRPHSfP9yZh+P9xkuB1xahhcrC6QBxghIEJUSAsAGX/omdlvMMZpahEcM14GE+B5bGCakkPYdGqLQsdu1LoGisgirflyHG8dCIXqnhNcnzlrRjiVU6rmQHO3FlFh3i6aZnlPvjzVkECTc7J/KTlTBWjUxOr7FDk/Bs8Gz049WqbPG95pOSjtvyts1UYvtiH70mh86smCRJdXVocU5hnFwYNsPZdGUrh3El+8EWNDHBgk6qPInvFoFjhajaCjKoqCek/cxtwWrQmVudkPSkZ+xthOQLJSWZTqZtBHNIjGe300zhTb9Mfg51miUibq82I2iRTTT09nKbtEj+3skBvdGaID9VUKc29ExTMa4ex5WZW7LIp7GHg0fpS8kvBO+JKw76fls+YmhPxh6s/A0hv95APO9pguAAAKitgLiJngt9eOiA1gcu0RH7x+e2UtuPm3nADFk9S8LwsG5U6rZR67N+Q4RWZuAIqdy0q3Fl9U/Dq94gYXAs+edZkxd93eyeJiJFPx9Gv+gz5vgyIE53fL12SxnziiRP9bGa3kSZvYjasaut0JtF7DcK2NdetXz/ZU+WyKHdaA5tF1x8XXrvSdhRtoOF/BsM7tFZqw4hj4qHqU49hFzImIEB2Lo6w+Oen6aKV4ul2HlxQpkz2dbsB4vg/y0Yn4/SprUqBp7iNyGC25j3Gsm0Tr2ZO4fkA4ajSJ685AtNVdC81vZmgx6BS46JEVDTPbpZ1TeELGYBqhuUj0CgXnjpQHHNO6V1VtypyGv95oHGb68WQFfTR40qYZDmbd7J0U22yFFi2lClv0zis8za9AanULMejNHMF2iP3gJYGwQPU6jl5dLzZV8DkhbJOw1H3Zlf+GOSCzoCeHu13Ob329pK7iLzx79ZJPpD4JRM5e0Ixh5xNvjgGwr5MkI0mMsEUm+R5+U0G6TBumpABDNI=';const _IH='189f27a06b6bfec9e74f100b6008e7f74e13eeef430db310335c1fb4d4378ec5';let _src;

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
