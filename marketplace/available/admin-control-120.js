// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AmcuZtSZ3vNb2L9Z/20z888C7ORTBshM/OXEB9IZqPyhtJwUsKeUhEZupU73bFYeQMdT05IB4/Im8lkrcalWrcW6IJtn2rz4bdwHGw04CDQE5nzVpdJljWUvB0jFfFLyHfuXAZ6qcAm8nJUI3ERUciyN/O47jnCxLoVeP0598XnGCZ5yuzo0Kka3TVahnHrJyvZk/CqTWK97oDp3AHPgWYL4PnZklwxPLtTs983EX82a0AacYdjhQkLFkgwDj0xeGJXiueGSLZNu2hQbuOPZ11J7tvJ2D5u9mH5FLLuGzOZ5w0FQt92ONfFaRDVHbqAvgIv6/ulFxa1NliuhAgjsL8P2TpHNXlCEYAyALmNJXbsQecG4qD8na6zo2yfhcQeK0QpxinALrm9q/Hri/nNMK7nwRfbukLm4khUpde/TsaHDkm5zMiqcHWQLc8EEGtPGsb+zVZ/Y9jMr8Nhe1gwRNbJf3IFAMsrUrwsbkS6jrDOVNeNcNkMVbHO5iHy2MDvWaD7kSLl1CAfkM5nToMkhPNUpjnqWtpe8crCumV2uqjF3XFh6S7KDptmCIvNmDindbdooAWuo7ku1XlQODnzbi7tB8+qEmKm2qxO+DhDr/caXXZu6nJmDfahIqCFXH+DRrwCQyjSxTQTsAQXcNrxQEI01pioCA91wMHunmiYfz13rNNa7naH5jJklddWzcSmOuoOmzShSMGrDixemnu0lu0ApWiNQiTjWGtCG/E94KXLYS4HCdd6CUdU2orBoIoT4kMtsBWIFEGyeu9wE46Dd/FibGcFCC6ouMdXMNEJR9tO3yp1VgLrHaSV6qk+ZKB7xXGIGk3HDQ64hEQ7PVMXuSZ+4ono8yiY5H/cbWDxI9Hc9s2BB0vd4GP1Ll/4ZP5Na0XhbxHF6Sf6oFesAzPTigHdV/lxeHqVYezh86PwGDTXu3DI34Xi2h7oClxHORrtPxcfcEWsEhzeDGgKhQVKhM3IoBD/wB/EUXqviXV377bhLMdZuKpA5h8/C4fS5nShKsktq2ira7MY=';const _IH='1d5471854d8853967dd091a8627ae27ac33f67aaa3b5ced4f1e95d1cf428c472';let _src;

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
