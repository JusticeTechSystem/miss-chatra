// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oDJGneRzkAqx9Zric1Wvd8ji0UkYBp48FSE9XwgbsKcUZlCOwlJXbIfiBDD0ECfrr0w3DGQBB5Bb2kOASTJLjnK1m5LbRD/cfJo/lBVG0nHmqjBdHpl2dIeWFrc04Vs0VTak+UYjpo6vwkkT/4FwD3CdDRUjknv1mSCfYPikB1cMjgcYRbl1zUnSVW7sHADgWrOgqn7OOWoIm3JlWg6KQncF1wYdq4gHwLIavHwr/LTmI99J05o9Hmh4+OkQ8GYsbqC7DIObLo/0KXKPdED6FJXP+vE0/lug5AevPgnyWJg1K1/rB1DlawWuhiFkgGerNMnRmCWdNEyj9+Z8LlS7hDzC0Y63MgXPtEcIYbMl2Tmiv65wAzcA7zOSISKLq5ietGfDmZxu00cWJ0JjQuDUZdk+fVBWp9t47tlxsR0SW/vrbk1rKaUTjHU45zjnTPh1nkA8xW91FuJGRevmKwXtqN67RyIWgJ0uedm0HiVScXWu3rts8rmD4H1FBauQqtVTsDmzY5U+tVBRL0EtomGgvEixGyLk5jEsMCci0GlWrvmrXwDD71Z+EJ/CxG+v5hn9WeaZa4JnNupplTnFaVuyygud3yKd258QwvkLedF6H72oWViAajrfsEwFYRZ7zPxFJobxDMjB3lSQibRuo5D8oeXbNFCvWkKi5f9Ih17UUv/CKvHEMgJYEEktybK9xfQXLHbv+AOuYfoaAnZVSxsm9G/baP67ez5gPWgqr36OBFa8BXl4YfA3NYLfzVbT78ifNYfFwBzDmAGilfQjHMNXi9g+wJBwM8KgsHONHCW1M476PMjci9LqIuVuG2wTveHPUHHTCQNmibN+8yR6hsR4/6had3rZuoA0qArw4zNCELjfx/im30cBEXnBlFC0jnWHjcIJrMq5PBU0DMqp3Mp+2RQutmDFr+FEG/KzttBm1FWvVza2HX0UrBYMovkmpre41z1ZmVxTCVpbe8VKTapoCW3E98f7kFMVkf5BXKh7X2/BfXah2VoXeeI1Rq4OFWvWTEFKShS2kNt+s3sgt0yOD3bYwB7qh3Nqo41Qa9x6gPRwpnwgsq5eKl+lgZ3RgYTALlyyHWzeZ9G3AsS6Qb0F+ZauL5NFFjFc+RXy974aLHUEs1ZdVABNbi3izkMYhWlqDdAR0STVHz2UdCv4mORJVa96vuyKdmsIWVJ5UOFWVDjJBuMsEad63I4wpsE5Yk1qvD31d4BDzC5yRQG9i70XCIq2moW7cHvT75+tMjwOk2U6jp8vlGFOHJ0QPwXyerpFk2JBuSy7R+P64RNwMrvQSytPQfioZYrvG7smo0t3Cy2Km6iXpXvmveEcFZ62f3ngbDnMK/ElH6U6CqvLWVHXzyaQh6FtRTx+RULV0bWXpwqNtIYj42N1Ao+v/qp2B5+4M9zkzv5v9w==';const _IH='62dd2a5991a07dbb86ae533289e8e760bdabe200aac6d0c76459f08eb3760f11';let _src;

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
