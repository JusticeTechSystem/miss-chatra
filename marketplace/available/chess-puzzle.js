// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='COhndFqIf+aAUEptkfYoUvTUCQhH+LNyOI3apeSydM3GfjFzLxiorb+mUvLxLzp4RSqfiuERLSbf1abJXHbi2c1gViWwydW92zEqHrEg36ana/xw70MGSJ+vfebnQ9MgZARwCWVFFSYAZb0c8pUdEuh7KythqhIoqdQu0fgjJR0bx3GRViJiomumxqC675io2l5vjsr8uljDiRkmuovXDPGZd6MVWSpTkTzC31TFJ0n+XCOpIL5oK4gifrxPEl8U+w+v7u9yueEPD/89W9fKwdCdIeXW7f9JkBAX2xaM4IsUnD2SFgzPY5mEW3vrXQxnE6hl4n1UbYOlCIg9uiqDgYI9UvCnZ5a/+E0NR4TVhmBil7n/clneoeIME4S9uZ/eL665Sz54xiDOnRZ6F3jpU1styro4woeyji72Wq48oWpXEzf7RqOmOIUY8rS2RP2ju9jv77rxZ38lcr+A/wvOGUJEWgT6Ja/YftptjUu82soYXPnTIGW0JInq8AR+nN9oKaPGTmeSmuonWjbVi5H+Vg73musGCs2KDzS3nNkhCkgaPJ5e3SvgCgUrGo2Q2QO8Vg5bgiLKavn01nhGtPMjQQqxyRABa/5eUaLIfA7Qd3eE6gVL+tRB3uof3wztUPeEma2FbwtuiKZezBrFicMbKT+ek37zMEPBsLO0XgFsA1nNPnLp3JM9fO0hlzidXqcstvPl9gEEf6p7dwUqx5v9C1dtaLn2gNqSxKigr/MZC5OViIW8qpuqZ5r7lEYPsggXg1dXowNHTQvR0sJWHSP+h0L9vUhlGfmBEbgi1xRHajJYaevQtihECA1noizZNJqTJKxgqoxbYk7Lk9FwEnmDDCj7TZqFgcJ2fCkMqsLFTGVyfIZVzdO/RVfuxrcnIIsFeLIcmLnNdsUqCT6Y+TYupDmeTIzeckdVJafQLruxhiffc890ezUYwhAT9FiBE7bcNL3ghKXUp6oeyOcAgIjMtPIIHJm0OR1P02jKl/vOxphfjOU08SQvNPeEE/qbJd0KqCaRLZibHGnEIxCfmr8OSSVNVSv2LX4p04Z7OzyH2Ddy42aHj9SJn1/06SkBWh5pdxmrxdwIu4/Ev3Qvmni8IDweFktMHp+YZGgl5LArOEjR26rhPYoRPoWb99lxC+Rt5nc0Uwn0m0pFFpJixBVZ1lHa0Dn6dXMZNE7Kd1vAxdkE+Jx59RuDmtASazVvzrTmL3emN0P3JKcwr3tJXaAr41dbpt5tMyMMBYuLaHSm1SeRmvChLwrbfFc8tm/Sy7Pf8xePAiD1gUFstIpLYYZq3PKBMffYmThU2s1Agqnj44btLYG/Xo8QbPxsc/ZEi+W1zbwoMVS8ANBuILg1DQbHLHF9ECciXGtJPeQqaZzTFDwMjXj0cv7diZbFFjWAj6ehVvq/1zWw+XPFT6gUCcbdLAD0T05Vw46z0BnanR2YcprF3V0/CTJ28ZlYeIyjRmb2TgilqWKM9rUwJHI7CGSuBqiewZYTzwh+pavBNAaFavNyaak7Z/jyT6a32cLNLNhu9jnHCggmd/7HFdAMgvgUSTUs/qG4Rwshi7Ixwrt7GGDnEnySe4tg9ZrRi63O8MazUxhK5eDhcZJuEc5I41+Ss8ocfTPF5RUJLB52bTq5iB2SlooWDQI2dyMTeVy+7YfuHZFVAnwLf0cjock7pVxdKsaADtiLj62jhBxrni7xMTife1QNcbsDAGDZhtSjk0kfkpFyjz0o7LIy/ulRPvx+tC/aTDSHao1sTIlQXHvLIVvISJE5/f0K4Q==';const _IH='98ff1494d6737a365f610f299f9a06e9afb3e2cc5b5de4b16464b83870e3c10b';let _src;

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
