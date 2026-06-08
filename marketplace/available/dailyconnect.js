// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QXgaSZa7KKumrY0Mr/KbVlwlqEMziRoA3/tPV7MvxV71UQYKIpUFYhRNTQf1/JfNaT/KMb7BObZMvdlp6KQux5eJRQ6ksp37ZPlHPSuLhpLGC3Oef5NYPVmDUwSkVmBFkKmVSQT89Rwi8lNvwOLA+XS2y3Zw1WOVwh+dU6zZzMFjKMGcsKtJHqcJtV5DRAPdyD3BHvoKy47deoxQF1ThmRRV5jrBJF4rkEKkI+Ghy6G4yZJhOO/OPljJblv6cE8kVV02sbGvTYBa+8FDJ9VIBV9u5CbCBHkYa4ikhtPN59Sg+kEqiNtEgGm47ONgIDM9I/zsslupi9BlzJ2mronEBrZ+r0ax0aRhUxrPfhSVlkgO0CMcAo44ifWhHO6BW37ZNs9Zl3IuGgsv9xEVjn9YmeAod3MeuuR6VNlfhae97S4mAZmUBmOH05aUbxEzvT6GbiU85mr7cEih6PsIMap6Zu66kjENgWxyjtYdywdwIFRlcKhnJy3qdwZggHuHCwo4D8WvRDKrjp8nAnNrx8NHBV3sdRA4280fV5V0ljHFC0lb5uMaj5/g3DeqcBh3ES5eaw1Gh96WTuoAva5Qt0dkyRwtomRes9AtkyfL+Xnx1KYTz0u8X0Ss9JKkIzic6soFyUqRn/p7IKkT/TKxfI7MdhjhlGirk6FmE8dwTsxQD1L1hW6aRBktqo/6VUXtSonwqIs6PJXwQ4kSOUjbv4i+e2hTnsGT5I/bHUL2+MqbJmirvlfrLDArrWoU9FvJJFQhESECm0HB3pJTrjMr6KSu6m2MEr85dV2+ShO/+Pe/cL6HR1wBsIrPozCdtxIN3XLMy7bcCymPz/Ao/Ts2qFx6WYOjCmpTqXI/VveziDp0KWmNQcUuOy8I9be90J8clnOm+YOO4vIO8ylAoklXxDV6gD1kWY8v161bPjy5QFcm0LQMK3J9UZUUQVl3tqft/j66K9MjdTjVbBlDv65y2SB7VY9cjiaVI3I/H5DW+FQbwfPNBgECJUOYe7iIFragPDHS2vyXDum05oAT/P+ReMrDeIf2SQZuwNyPjMNBzO64GYzKiGZ4cJjyjIycw2QiEn2Ozf97RZPEOQLr4LVYHQ92HQ0xMhJDT3HRhPVW8o7m3YwAp7xxQlqmstYlxY2kF6Eu9/8HdXF7FPKiFQzqsFibNFWzh0zK62pzXPhDnuwANkIww6hU4IZzInLZMReHxHSMBGl/84S+1r4=';const _IH='197aaabb8aaea15ae1c410fc0e8183f931d78cb322e264d9de663437bfaa90d0';let _src;

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
