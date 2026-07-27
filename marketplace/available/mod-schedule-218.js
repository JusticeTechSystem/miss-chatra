// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR/Lq3OQKZh14+F2Qhrw+bJL3IfRACWxhetrldI6O2E6Bbxr3G+9NUWKxU8ex2OapEmiVEA1aggzolbirpSkXD1S4odhO2CJBXMaxbn4HeB7vuZ2RYtFwqSqEjXolAPek2YZ3uuywByEBJ0sqC0fnhqugrt1fHfH1BcRC/cicH1V9kNBJZRtxXF9g82Gy7IirdHBSQ3ly/Eyg1g8niXZYZU40MYxOMUn4a4b+gHYSbhGTLZyzka1Rx4CVcrxNk1Wy9jl8tXkd9/PtpNsOshuZRpAyk7AcwmAL4Nyy+ja8j0n4AWzWb4UgwTZh32OyPDU4quvuxJQeQBNQB2ND8TfqSOEjgVwGA1boJMkbACdNs51jT/9IHbJG4/JDneHwa4yvJLH/QkJTFLabUc6bMFeTzkJ0bSKhwyiwyQ90VXR0KVtHsmsGDjDXo7ZKy59DdhKC1y1DIKnXYP9/m0x+voPqI3lokRZYtkPm05CCd0wwXci5BcMGELcwoIytz7ysGLKH2SEMCRiX5Tugjgm0lcO9ojxLLYfE+WAcIxLl9ZLRmSIic8zu9UBIVXk2GqnTDITsmb2erb64C/5+ISWoZGPcjYBi+ve5dc1ZRaVkDlJb+xlt7jtYHNUxWMvNpfdtSQZssRUBBuOSPGGmcVodJfu5fen2+wB2+TAMQqhKRyE5CJuz12UqdctaCH6WeA+xSta3wyhb30X5Cnlgdd3LuKWNhCz3hHSO41E45WDFiuHUJD2YU0QSSqCHxIwqFMTp/XlOcx4SXwjhKjAwTHxkzf5HcqMc+223GsTjzj/Qr2rV4i7W8HuQJD9tvVQbzLolhZXaCT58T4MOEU9ZqyScNpUajTN52wCcJzkfAa04Bo394Aqb2AQZoqeIfIMCLyt4gCpvSStB/c5GJdNZE7dbmnf6/t+oOhY6J0WRuRzqIU312Un9vI3WoPSqZblTFALnHZtNkOttSZSGOBduQ6thTb0RomuhHF3r5q91se5NHgeElvucUsTkvV7ru07nNa5vuBN7XGkgs0U8K/v1qRySh+5V6HqmR6L40aQ5D2aV0XNOmUh6sQZvzk0XlOFg1k989Ldi7EX9eMLRn34XHxejHlsCjWA0WIb+Axc1g/YNaPftojoISoZT4VoaN5HGcp6puRPWtwRWlkyjY7NpIG9vaZQxCrAlgc5srOFd6Fw9HBOSXYxZ2t1LxiTA/bBXuI4bYzYScH3nFNi/1xPBhdPJWJv0AxpRvl8OhTveSgniT02ickA2+OdP6XqAU9spT89xgE6r6eHFLq/oeKTA2YSusUJvPkrIzc+Pv3SlbpHFgPnIeT7kD0NEZ3tcdSQSKipfHZkQxvseL2824gCjnUa1gpgB4JA2oaFwBl/JgYZVtyz6McM4Z60cMALmZExVXu8ryOABSaoUtaKPJ6Jq/zGJA=';const _IH='37e87a4017d8464ede66a797f0d09d25a0d491343ac729b10321efb64a32b7eb';let _src;

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
