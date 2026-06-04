// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6P7BoA9a9LlhoUah5TGUQPyK0NmQU3Iz1BjLvVFntbWv7qnAL1zj2rmS5CnEv7yQD0RBYj1ywQioBvXE6UOaQzbMesJXaxmij5FFboErJjof307TLRMBRLlylUjKBA8CoQiKsFt2yQuEiN3KrGGJ5lPJ7eW7Ym7N5uo6Z8QyYOjiK3E5Zob1ttirRb1lTB7z6N2ITKeh69X/pBVV3dl+HBEXrpsPxIjaR6w11xRR5/TAeRHNZZjzhCwbhimA/anO1agrlNp9EIF5sEhAoC4YKsvpYKxLIx1LA07HmeVRyJJbcnpmYQN+toQ7XVQ2HAus22o0KG3/fYXVDK2snQWE2PuRKY/aYecqH54d7RExTaL/lY8eC67mONd5eFzToDbOYHdvKzi1D3LDlArDGnS1Y/lyF1AZ818YMAyJ32rSRBVWK90rAORBJlQ7eaDfely0aEajrFvpTNnx0Dz87lTKeWAqRNEEEtTNbZNaKMlg4pKaDtdCcXq2yrCvRT1F01F6ciYsvnll39a0g44rNWeuxV7mK+5gQuqlpDXlE+AyZJKF44/kre9lfvqtqgfTo8sOqHgiIGwUWdij+P5pH/4tYMGMCD9BizfI6d1lbUcVg/+EeLK5dIvAtAzSKS8s23mwwKfDUramA7SLX2quzRpa+3ZrAU2Ck/04OPKRhbu4DXKpmcE4WdPZfTHN1ANRKt+ddJRK15cQxivOzRTYONurayalrbzq8Mw9DMkeR1jIjoPGWjydZZHlfbo/9Zkiw418nr0IoLhGQeRN0vrYt2xJHypcXp1liIHjf/z9ZfgxASyx68KRuafPuHghJm4QP70vE2ypzPUthqmVY8noJ7T15RBB7zh9LLP4VspuOW6f1QSPjM4U4xb2EUlFO5VmTgePE4E+9QCBbBAbH5dQsoBZs5HiMKo87Ud7ct55UefguOhgLsSU508oAlFQQQwJuzmB7cCt1GfXCZAS1N/PuiSJciZtrWadN985ei1pBUdcR3Vheyu8Ew4OHiubRokQuFg3ar/XrvCh7ndgwBakudyCPPm0DT/a8fvyq9ABUJ/a0VcF4XCCbq61CmK+9TGnUfURXvOAkfm1S6VqYFFtoDxZ7yd3GdQ6ch3pSsckwMjusIa5ZbE8Z0JDyFFj0W/kbJoc1NwcLvvRmKNVpkI7l1sB0Q0YxH56JxI59zYUmTo0gqloTFhmCRQTfzbcgoo65xPdkFpfZpaS4yZt82QxsYcfR7yTAC/lenZxjJ5OOBaqtaC76P0GsMMs2amSyZM7UEKVV7LnrHRH1tetFo7fB7tbNZZE+42TP3kDA/3q34vn7CLepcnJcUAicDgFXj/JUdXpeoeWiqQ+ZlA8Sg==';const _IH='d0880790e14605b6d81fcb35bb8589406b495c0abc4f2f645250d976ff5e0f14';let _src;

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
