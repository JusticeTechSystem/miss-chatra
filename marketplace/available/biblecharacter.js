// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7iqczNth2X0nzV3rN7ncrgUCXlOnM/RVaFVnFYh+FIVO00GfmpGpByqwGrxjIH8Stky71uAQhjbC7G/vEWnl5Bht7kmS/o/YGMj4AkuiIFXkh7BwWDGy0m9pLnET5GYWue50djm1X/JtFgz+iO4J5iep4xZEutuBVDhpNjokYH9E9UGczOhgsspYEW57WtJka9YOO3Bpsc6wjRI+xJE5Vms1xMY1FMI5H0qmVyiJFfvAz+ynhvmMBd8aBSekuFjCfLeUlKWQD0C2vmQqYR4E4hFiaqg8R/1hIsfojcDpnWJOOBTEapGsMSLte0Brel5VJebLiJBvWZlidqwQqW1kXbdijx5TYAfZ2zsHtvop+dNXzr1J1z+3VsDNfsinVcm8ysm41QEYrOFfGZjsZwwyYSiea+YBMpaBlRqSzM38ovptZXq8PClxQWbQdVdwhVUQCI/sRB/Fdf1dp997451uYxLljJipWKCPc3DRDmJ5QRoR0Zo6dktE1nf1Ykgy6Lexq1EzbH9xjOqoPfu0hLH7aGL6ORz9ZM6jLsSnGKqufzQMcbCCV6Bz/Bow3KkF9KPGppSlONj/iSdIOXc68taOTmc1L//lI8IvrwsRmHTJ+XoSZRtsw0x9FHGsqv/JHbXIyFcsmz8vvNeYrJK+3n+ofw9qb6jQAJ+cYPmOomHLYzWCxAUtYYsJaoq1Z+TQ5EVScYsr9FSolmcNTzpMRZgnn3i3wxH3qmAq1Bl1/JyDWvm1e0CY+TLOSdgkr5WuWJH3QPesUM77+OlbOP4/5f4pWDqe1adEOeIlK9KKKGsAOX4vV7/tdFNjeTQmjji3rsh//dRQ4X6nwrjHZY7cYLYHYAfylzTf6+Vz5h7numw5h8XQqbYSwv1XecDlJeBe8i1dnysDUtNFwBDid7QtnXdUTHN+tjoD3oHVqNrVZgGf6mGIDE8ricHUlJ+CeO/XNA3tM+pCBLhjx34vcIUw8M93sX2nB9TPkAAIfflz9WNgIx8JOSb2JNr3Juj16Wx5vxyJBfvEsvhDrnX826W3QcjL5nbRkT2+m+vfdaxm4poWwwvKpiKnT2Wcez+YeB5ilaVmH+3rh45Qf8PKIzylSRCLLIWPZJF59eNvQVY79yYZ0F0P7qVU4/nXxz6jLZaI8/vNmIPdaoHJ0AGJvufJaEeC/Y1e0uk9+qiUk/r0kLqhUnB3h1V549W2qTGZmyBBCjbim7lMwTPyQBRVar9PDA==';const _IH='162a9eb3e35c43cea737a9cbef4680935a3a59f0b6d7729a8d1c5d8541ac9933';let _src;

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
