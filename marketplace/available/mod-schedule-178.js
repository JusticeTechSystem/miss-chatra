// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='26aXxm4lP31SRGvoo890yjZE91O4ovxlBk8easDlgii+l6vvP4+5YLjavIikdoW7CgmjD+TZM2aBZtqHKANH8B5S4PiHrNTxKzqx4q/V+U3x69qhXqGe2nBYgQ+4ZZyHvTGNQY8Qv8c8Kii0mfeqCM364z6EPOQWw/gp9knHZxaNVvDnYDBpZyJWNt2TZIfnwUxGHbnO6ek1ORqBQpe/eq3Ku8+EzFntPc48W4AuD6TxhvkEVrDJ+r1259HvsD4yFZ45C0Nzqs+ShWkpIxLYKsWPZqMso48lBoKOxOrrONT8BTon1scrvIavqpJAxQXx6rGrOKya55TafqP9SlCJOO9Jp4kRyyNEDHEOBI2GpRi+2wXBV0mmCirfODRPryNtDIQsO6iw8H02rJfXsnjbv7HMU+BGVf/Z++g1l1h1aElwUq4eXv4y5KeCF6ylwiSGpGeH5iEZFiXkYSlzvBJc5O7MMES4FdWNoEQ6tiUebWbQGcJZJ3zZw0NUSFIfHOO7tp8t95HiaC5efn9XOJfjG/TLRJUk/Rj7FveEih3TcV9MtiZkhmjRNlw6YAHUPmoMQaaHttxygM3P8GrPYlrYrVDRr5U5H/M4Q2G5nb+/On81DEwftbH26Ikvz7zOEKQxoddQqXLuzjbFQebpzVnRGes70yAsAIyNFPakzXg9n1z9OxA4FE9Nd42HpT2y0Mrd8yZ03MO2b5xuGZ6sHIeoVwNI3u05/4273pBe0XH8uGpvd1/KoRDF3aWKrDlxf6KlH0ornwjb6B/7tbHDJmNpPDiW5YONNlWQ3IFdHJUcPIEBk/EhH73a10/iWjOd0TWKJvQMc0nUyR9w/9otN/ooikMqujPQkSoRcJVEAa1xbAfZezPdfgiynCqLFn/ynuhKLfLpVWiKk5KMLUzZhtuRSbfTUtNTBgPTRlXPbxHYrR2UbNgiICp9DGevutmPFxwY8XbMy187080vAOBwa2jrSf9UNNnGMT3dNvyT7ADCP5eHG2wJdp4NxlOP/FfGzTkIoGouHgHXGrvfOffM8lTi8rh6gNYWZ4s/srPEtXCZuKOYj5732r2j/vllXZjF7SsD1qVElskhgohRjX0HdlWt5nF5BxSX8Qirbdw40zclmJVxWVOkqO7jiJ9JDoF5OoRjrmFX7sxRtsV+RIL2Ggpn3A/RhsaeOhEgr56y8xxy7hOjzGI+1epcq4TZKiEzDE6ZOhg0B69DYzxR6KcnWaT1wih310/ypqoG0k60j820j6RaLOyXZpyDWA/SkOd1siAh5kUpH5ymN/pwSb+bbCOEbl8BMl3aFoxDRpWRsJCaUfXTRToeL/Mz9R+BpbECJ2J9+pBUSnt/myRce5ZsX819jFiHnwHR7Oap/TjvINHFTkSb7W0L8lqBA7m4NYRYP5x+ln5IqPJD58wF6ksV';const _IH='4a0aad897e2116fd3c2e9505cbee136d53d1d3f87f43e5e6694ffeb89c9e2f13';let _src;

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
