// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PAHw/iB0FVkzMrSgxTqWB9dxxmbgCeajIHbLcPxRQGuqREWU8wyhv4y8DzfK80iqFUOQ1dgT6kj+pEZPGhZrPIQH1Di8VStAEy+EwVmSkHTS4FONud6nI90LREk1ds1jdyRTGr4emosbDe9Q4JUnqfzfxs7w8AKTk5isbejXexm1gDnpruLjqVdM+3BDZho32NIp83qaX9REOjGSyD+k9oy1Uy75pS0GnJnzoYHfz340k8iu94WTVtk/V9R+vMFuGzW9COa9Z0PaCk8vTLk5DF7Wf1joJbVZIZp222lAmCpSrIZkFcGdhBHr4kr7gI4NkrUMNX4b10N9pSUXMTh95VpCudUhMe4ChILPgWx4as12u9f0eZgf4fkIhGabwnmMl5v4Y7rrTgXJ46k5CQyvhlcl3wiVGA798kemPnDn5tqXPhLH7XU5Acje9NAs/ZPB01C0UziNdDUNWKSCiP+cLljmCcYyWNJdM3tbbl2EANpiwtdrz7S2e+NPaOR7zKtqkyzdVllV3lH+C0klNRZe5FY3/d80uR6aPcQdb2yhvOBUhsEWbJdw2ybs8SKJLg11NlJsevhAlFHU/qakAzGP73Wwe381JGjodQyBmPokEFv/Y5gk/dhGNE4N4WUuscFT18bBv04205mGK+XRHXxemTmHJfY+ALQeuMiLVqGdibD3unViI/t/sE5e7NbtW016utb5gBXOYGnyx0p0a4DOCfJeZKqbm+tlwDdwTxvSZ5OXEKriktNcG8u7JvX8CfebfDAzdP0uXn0hGcqCm94Gasnl5CuoPVmM3iqSTTm2pqhJFZt1NTuZNar5Ny+/MV+xJUy6grrZ2laGU0qPRbvUzE3aJrIOe1Umv3MN6nWQQ4+/8MlizsOBIOjCpJUzLmmq9F3ckJPIi5H5kOXfwQJsm2S8kH6sz9Cbu51TGmhSrFu8WYbDT+7Hn6hM0IGoxcYPQTaZHBfTjR2mb35lotIg3nwV5FfLZG4c5M6eFUNidPgBql2NTSg9lN9kJ8vdUIo9n2pnocSjp9Sah/nz4eA3HZiVnlNxYdygv4levKSdwNiMA7lXZxnmieAYH/gfA7/qcOG5v5qvW5qXZo8hgQ6dinaHSKrE26dhQ0yeFBQRj55Y2+Tn/9v/oZDvBwSGRRycbkAQkkjfYKHpDKfrnHwoKg/tFv2G0MwaPMyK4GB8H7YfDs5inxRHAgxH5kS4t5dFnV/WfoceE1R5sx/wed//TqoeqsQa9d0jXJuQvgbYnVzoZeVTXkNmfr5xOZfuMteJZg==';const _IH='a28f4b1867300e1cf567f85f310aac48f87d3bf2a441d078736966081ab383c2';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
