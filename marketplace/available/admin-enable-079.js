// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PXEMMj2XVrYVNGDlUfwKInNaTmdngdFWz9TnNZWPVFcdxPZamESjflqotKVGdczlS9Y7KpKVmDh0fenefV4O9nspJFpRYXwxaFMkHuRXyyleFKNbuUI7luoL3SR2GqOeJ0GgO8NM47QkwSbrCbt00TeLn/nO8YmDAASZgYW2wQ0v+BiQ2hDWIDgPQWJbWey+adHMNTxHWh/XU3n6y/dU4ADJ1alHCCUAhv5YfRoy3ZMdM61c1vGXR90MNyHeQ1m50Op0XwfL2uhxAGiOtezyxtyWF4xUkTLvyNHVUziU1HSla9fLOxNHw5iir0SoxSNYhNjvs28wiTGZwp4ZD3Dyu4rniXQuDS1Sucx2HL7pUq2wmvDCzD9FT+Aq8wOqdGWB4R8E5L949VEokwnWnscBgafJnjsP69sNSlZYoNrCjxPhbrB/iqXbaW3xjqpq55GCtNowXeD87hX1REFJRR9hW2lsmS5ElviW+3BWEYau2qn1UEGmgPXKbOu/s1VYh1l5krfimBHexRrqmve0xTseuiW+KzJY+pepVoDDAhDOUvd4aaIlanWJH6Awosy7UPgVn7tFSag3muqJJnUyOaN8XsldQ1AixPoFXXWStKGWinuqTOOqtwZijG6zSIUnU0BJ92//kEYmyOq4nA6uLsw/C4wyRo6WEW3m2yRe99VREzPGjnCM6hbkjke0Sf2V+46gM3OCvNCZKhgA9kzNG37Dv7nyiFpTzSSG9BaHMA/Glbv9KxkSRjC2IGaYeBpO0h4fd2BfqS1ZaLKnuuHloGWZUDsX6XnzZvBkVVqsS//vMBOkkNaPUDykmTBp5jzPLYkL15o+UeocKAXZJBVIo2k0ukDxwW6Ggkvx3BCF1QCiPKEe/DEIFgHJlLaFMg2LMcmM6RXsq8murFnEoqJ2daoeb2nNU52s0II9aKJnMR6FN1RhaB+Kc2+vOtFxaXPGn2IGn501BJDn8DKW5Ix6/I3+YjCKC2Wu0ofVpY2mjWJIMH04rb+IE9RO9CIqO/GC';const _IH='d98e32ca5133771e6175aa75ada21009c2612c4e6af19910deb8b23ed1fe94ed';let _src;

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
