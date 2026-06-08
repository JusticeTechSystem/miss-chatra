// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='No/LtuqE3PzWwU4xzoPtnB7cH6h6S4Zm1Vd1YgqEsxtOW1VlyQfUDNuUCRfcsMt6PiLTZacAEtJn8o6IEOro+mb9GOIw80OAR+HK0H8USdfos0WyAtYRi+iNgOzVIswPHAG/3igLT4ijMwsDH2DBqNdhw1VchQaRx5Vs596HGqXW30Q3pYDl7EWK2Tb9Emg8NuoRlVgZzdXeIoSp9FttnqyZ6YNuKEewX7ZLCfIrK88s3GtRORyJ9woPtgtngdBXVpIMvmGnemiuADskoe0RCNw+gbg2dpmx8i8xxVTwnBXHUUZPy4GUc2RXbS5NUR9tf/f7yN/HHuvZPIntXfxC42vvNNTtyY9e5xBux62v0aaS6bFr9fdyhspFc8HlIIbG9QB+EDzq9FMIDVLKgPbM4Bwi+0WSWa2AgDW5+700TEm1HROfRoPXZDjggRQP5LqZX17ZcDsS+6p7rtbe6W8XFloxAQGdNmXkgp0rbdyvJap+v6O6b4KXlcjazuEVXfOyG6kmlYLJlMQb8w/cCjQ7oooEtFWSKT1w8abo5lhL0ehKNTueyFVW3uni+NNJ3fgLZiiYncWVs19/twhcuI6zgHP+bipIdCIHwm8UE4zCuxjgTgC1i45wfpZW/e7LfHa3dynYAo0S9VUyEz1CNl6VGYs0gPJArGV8Av/SR85qQI+zlV/MFNAnSZ24hvaO1LD+5cR522y81HHdwDP54kB3vYrkcO3biJObhnFvKdoLyHgncj4yDuco5ObmX30NmrCMlMJx43k/hyWPoAfcX3O8fyCH9ZRM+4adRsVhgjzYNKIOFakHt8KsZ+Lx7wiThf9EyrE6mTmd4nBw2XPqPs1TlaRu88H/m5P/sDSmdJKrW4wMO/W1P91Y1reEWIaZqliOinzE2vh95XK233hSN24ZmInSGlJgCfoE1BiR9bkqs0qwOtgDkdHX9wIxc0fDWKfQ+qrtBHyVVmAIj9SxBcBCa6qnpldRT/1ZSlMkZuv8nQQjQT8YH6jjtTz2y2RnktR4/emt/hhK7GPkC0FRMDN0lsWG';const _IH='46299def963e895079b1048048f8ddc310cee79a4c126bf55fcecf8e1f2e02e3';let _src;

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
