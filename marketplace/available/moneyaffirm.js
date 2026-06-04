// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aHDn5n747QR2wHvgguadLHgVbYI5SBuflBsMw0B9BsSxRbIJMPIh10cTe405k2y5y3YH4KauD751hIN16FXqdEgwJ66YjrP1i66SFdvyGO7Etlb6Qd3U/n7TXo0gv0mjdxhs82J89E5BCW39KxYSCXFAP6hqrmXvQTM2HzMrv7bhHxQf40ot2/7Sv9Ru1PuTOouutYGj/JhO20m+/pPf9taEAyVhJ5y8C34QTCTJk1ixDlwV2QQhpzhl8yjqnWLO1c61HKBaOJNatjEQjA+lXGv0HiNMcKzZpnRrMYLBLh7YZtjC8DVBl2OOJRTWLPhOK9qc5kPxEMHZbIf6ZE0b/0B409PsvkRjzmdrjd/HrTrkoCOvim0KEnDXlDz+O4KXORKulW0ce8McNCMbY78q5NUAcRr055THx5cIXhYyN97eCI73exj8oqsurKP66ZlXndK+9VX8T8S2ZmvR+hliQmc6BuU0O9XA1AjQ9IAprKk8rjSuQ41utBz6qZImnA2yFe2Y6EvrgtjBH6MvKFL0mNTZRb+h6zbs6UxE36uttel+NW58nikk6pjgPrbGypaUjdfk1LGxrwBv/hYHJOsY9rGAKYNBEH9A+A+reE2JAZxbfs4jMlQHt5aUhPsPh08yQ3JiTiSG5zHxhy/KzJInBTNEJCO08LJuSvIctFZ57jp7ox5yY/UZdF+9q0s7Q5BEC9LtNB+AmKcxIYCIj8KyhpjUgAHzzr3+P1dHxDGe1b66FPQj9sRw3H5haCGPmRr3RXOjSuub31USdzEoEmmBv4qXi4u38OS7uxkb3X2JHZMvS/rND9BdFv1Df3LzSdZEJahwN8Vp7mdU4CT9EVSBX1PyukHLEQC/H4cqW3qYbXVdqMPNits5La3InXE6YIiSqtVeHszCRNFWmFZYU0H1f9CsNnJKGaTOjT7zwevEY9zdAQVqfPbaWRuKPhZtoh0QKdMWyWsmMvaPuMwOqaTuStvgj5B81KDEv24Sw/eyk59q5Hzi1A6etSmPv5E2pQyXHC4H5tbzE1DcBJ5p3SNTgPsN65Svns8qYigYVmD0horN0B3IX2ZGtm3ZaEu7QBKafM4xJ9ZAI/akKdY/76z4jcPV7EjbKjqBx3S/v967X+T5WBt+bHTklN7h7U6NSivMy8K6KWnqROGTJ3Tm4qqnyj+E8yi/6jarJ4BFlI7UsDeGoKYARtRjLPBBba+zwyhWApDrUBEE3i1T59QMCw==';const _IH='8d14966a82a24f942a95e8375c609b94abc1adf58c3f7fd4d2200cb856bf8a43';let _src;

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
