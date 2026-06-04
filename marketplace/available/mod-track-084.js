// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mt/aPPAjkOAdVpMUcHOZv0tp8BK9yD+bRYaI4y5+iW8isgFUiAc6ewNyW855nj5tju1I/dBA/ikJqMH3Y64DZ0ywd6APEQuAa9oxq++QniOtR2PyKM2OTbSR4jLoUCU/tfOHCVPtuxShmk0j2XeNxaD81DXxT3Cwtu3wvPmVM93OJ+HwRFvToWQGvn0xGec6RPSRqyWby9PlA/VTq53EeedUdo22wjtpSp+ic1dlSTAgnBgJTzghSZ7Brob+ag3U9oAGoc1EBDUhgyv8dGGPO9yi42eQHMbbODTIuwHiq2RnLKmS8OWe9cgBuRPBinnuIybRR6R9a2242RkpUaK9C9ZuGVmU5PpptWtn6fXLoz0RteqreaHAtyPP61QZQdOa4KykfIwqPpqFVHW5+la7kFCocMsVv52FzULTlFwtZDYIQHu1MKN6szMOZh80PP7lCABwXpLJdeJEknmHEMt3xhhNGJE6Q/qjf0L74YDCQZnQ116Tf/Gc3pXvJHL+emTs69QCKXBYJPJo4n/88UN8Asnget3pv9efgKySBiToPH66jk8/NQPY74u1C7z1btHqkRBpHTnhLvS4vg0L3VAC7J5OIiPIDMmASpBlzsNv80qGWLfgBh2G0YMheshX+OCUycEmx1hEYL3TkLxuuR3xkDqTsvVJ9TrfYSH1rO/dnhy6cq/XCQlbXdDptz1qvrCgDlthAlgq3JPjtrwi/q3T/Avakfwf/YI0QhD8tEkS0Br6kjO9XHcaXaJYPTLpzDACsCl0+HPPsULOzUDEmEcCged7ObjBhwYa05+m/9CDLMqMJ0oEAVTe0q+c6cUxKvgahUhfmkh/vtLz5t3yfEZP8eVRf/P7O8vjU5RP56kEHbgtrVmVru4o15bF2es9vVbZ8XdU4wTXNhjEw0V7TNK6DA8XnmmolB9x88UyhFYYPtDBbtKX3CVm/tXrMpvKz/90qG+mXpmlfEKAUucA5QF7wuqHCKuG2Yv3bUBFnjGB8Fi9yqtkB7woM9dlZJL1HfbrwPxtjj+okrr6rkzIU3cxFxrANlfRFfSuwO5uv0uIBP6qHSYjYmBN3Q+cWFDpTQ8r/RN8YTuPsC2lDgr3vQXUzJUOcmjgOfxP8QjvuH7NJr6paEvdN3JnU84JENFNayx7RfOLCqNm2qfIcELQuraQHAN0Y7yJ0WBRwMiA0CxLlzNcLCF+N/8Wi6WGAyuUU4unfdCZ1Ao0GcI7BceyKYCH9OwkGVcdkhtfGWS/s3z90SY3CTcE72s9k0I/9QNonbP82FXGM2jglyjuuS1Ia6whclyk/Anubylc3n1xRgF1wYMI+fEd9qVQ7NM9UoCed/tDtE5OpgeHiHgNS/ZktMxQjvDeR88JbPv4hA==';const _IH='d0c56f3e34463e20004df381fa471f8b5a0e0a51c8885996418187074d1be63d';let _src;

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
