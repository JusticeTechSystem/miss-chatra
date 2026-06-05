// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N6Ifx/agGzFs6L95xkhe3RxBDrPyNzDGQEjJ3644XAXAX9wRSB0nwEZUgQdQTqfAdplrj6yg1JNEZhHkjCi9iVZ3D1NBvd3/crfd3cdGNT8/L8fUS8yz0qrcljH04uVRAn5CeKRxeV9qELJq6fjZPqM+oknEg0V+J8eoVHgQs1uQGMFLQm5qEkzk6w6KLGhf39pfk9+bhLqoNOW/H8yd9c+VtGdCMsnKPcQ2h20caFcy0BgqQu3KB9nt0gyoDcanCGaGc5xDiOFJxWdORLT5n4ckbAVdtGDcphZsiHq0lP7taWDXUT1gttj3kNQTfkUVcRrZHarwtdzbXVeD3OarHb8Okkarl0c/puNT3N6HRtDT2mGBfk84u3YnifRp0h3vIauCnbDHyhbXtddvHwz8K06l7osQVSXrxk3xBDNOfSeH3F3/CsF+/yR9EuUOpb3UGEtVge4LpFWLq+J6LnDR9169anDR5xPxqVGa0GpT5irzfZy1oHPPsUchV/kt1Hdhe5ihTr2GoozyxuehygMkS3DuZHwbPNFRroJ9VwjcDq4pMmCBxjqiaglkZoNvBymTT69B+oCVDJmWEOYRwwWjhdISiObFwkE6jpmXZwepKiPvDv+8i3J4y/4d4oo5rA46/ArGQsHaWM2JXwR0x1N1dlxECMEz9Lkk3lh7b9eHpZvToxCkyO0GGpI1OXY2bkHGTsAPcG6m5CSmNUZ92vaEGHTN280cP1ztatVeykpH3S0mkn4mcPcuRae/zUWD9cxU+OKo5dt/ePPEJHfuKcpPf7OVlr/D5bi1imaHI/v4s4JOg8SbXH489Dzdmed0WIfq4ovMBtsidMtsNZrjYg6BFVItG1hglhSaQUMJXtCh1efDENTt0avzhN+1lyrtw18CP4yWL09mXasEYwfnU5tTe5ZNMIlWxkDUnzMtfCcbPMssc6DT0ah5vRlABLQ/nHMBjVX6uV8dSPo7HY+6OpCggy5F+wt2gKnqOZoP37RyjZ99biNG99GHXQ2zvywhF2GBFi/Gz7IOf0s7D6sIRjZVkNzcjfHheH+0ZN3NJ+EAAtYb8oTtOIcz3PFMciAraNVXJcktvVHa7TPKIqtomuHsQNvHw3Smr84O5TXLis5KXNruhCuzy4oIvF0odMc/9/mAT1Jn/fUdXQ8k6LpdsOPIsyFixZh/gUKACSE4yED3/nyzqKEWpI81wAjMCOvjzSv2HFk1dhsXGQ2fYjW1p5CYeqLxw16S+2UQjan0zPBpg5LGdgnVrmbrSP/W2HRxK+IORUxPf3+1KeZW4ta8/KrXAPbTvRvKKgeIfDyFq3jJbeZtby/Y0/aD/aKJ4IA2yeFSY2VRW7KSQg6pJPajqH7T4GsxNUrbeaIG2rTaTSex';const _IH='77c71f77b2f87a7478447339807fe756054c00db3991bfbe32e0c13a9f94e52d';let _src;

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
