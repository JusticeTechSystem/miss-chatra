// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTW1rBgVkavwTV3RfkoNKEFHIVGaFydoaE/QI2bYyxjwCVttbp2Hui7t/pYDzaYJ4K2xrMxfxahAPKINEt+yqYbtLAJ+FIrUigDMzLIZkNBdmUWA0OjYg/ZOehxru1kQD9B/B+rIzg+VGztF5QZkbfGy6yvv9ch3aITSHt1BGDnz1UDPPYzgdj7BUR/HKU4KbrcWTPFPN7IPinRfjBKO/qK7PWlTIlfPqD4FltGHac8ywIHb9gXhQkmBwRIH0RjDpTs0aubZVlwxeuKhnCDAKgpysQLws0BPpga6fsBwD+5+f7ieqyJz60p1g00d4cv9Q4XwaZtK/2BztYj1zQAbCcXmiT0WXnuAHByZij+g6IMZG1f4MPmj7qYYQwRk5haLinTAY4taKcYg08pkgTtxKwcQqfhEc3Et411eo6DJ+XsKo3atdLRAoiNlQUxiGGZvhyDH3ZPVaueYdBurkhvaioZnckG5yMbAeF+zrUH3BL70c8bsan6L3S4R/B7YzQAA2KyMuqD2Pn8BLjmM51c0yB+Fz8blQ+fYXsPufUPc2z9KwZUUohSliYMyPRmeA4HO2gyaGzdxkRIyQUeqxOlj6jLFhGpmCTartfZuYqhhlFKyJvUtxsL4O6QfK6KcqJb7MxlJYT3OSrv8zV+ndwgrM00JPm79wLrqWdHLL3StM0/6fsx1AzqABBcgamtsYGyTHXjEIF8W5oLQQX3PgialCi1qN6q5VxbI8DHm1mBsBu9wXs8HHN6pvifUuKw+rwmuKyIBv3ISLHMmJFZ8qHEscIhZxCPGhnpqfpNMoHFVqpJeGvZgQi/h9t9XBiYYpApqmmXC836heKHQcUUFx2L8iEYtumsIenslzozp8ZhFMU+7aDWyO2TP4LOuSIhaHMF3aPVIeeyvdzFeZHWCrVIA7zB+xUlmHlQ8IgLeJ+6uqiTOPMhSrOBlFZ/HzysoAH4yJ9gwomdRkpQbQSnu/CVvnWH70RLx5ZVp0bnfFxISAjTsOHGn4gDpQbJGVtGAtLEUDXpICAK22vlJEJcoQOaVS+EgbvtSygm';const _IH='0dd1a76662c67c6fa306e37b52fe4546ac865c7a0b8c2d4aff5fbebdef42b269';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
