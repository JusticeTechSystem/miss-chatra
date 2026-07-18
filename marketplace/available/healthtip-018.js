// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQS4Ghls21rzGYTiZ0Ir3eE3nz7w7zmwpN+BLu5Y+NhKPHkDeOfanymmdvMxWUDpbXLwhYkq6sKYFt3yfLhW+r/lHdG5xJ8wgeEFdiriovd7VCP+2XMBfuDnvEoOLSb4tAZvOSkxZcNvONc5QYQBOHBC301DhgRaoh1ZcBAHqLaENl7yBfJMmtIAXGoXIp5eflRLAffsSQFMG0rOE6r8rcPsbFZ9yiiftYNKPYdkLiprOG56oZcX72fUpph7LVJEmtZc3HFlJytBvVD6PQIT5hLvuSeo2O0LBuo4NFrAa+9WnCkV2x/aKzGEsFWy9HcKC5B/EPvigGWx5ajINPRK10jIRk35fYa60VcQQzzJCv6Vt5y31U2j84j1xtz1kR+OVUCTLcLbBsOxtZMXloPdSHF15xfFGA64NH2sz4xP9RshBujCQilKKwlDXTbe/wSpZCJJBulUohHe58+SWCapCeeRYsL/RjWzQjfVo3c3NsYh/rYfnBNCV4xcGT4YNOPY82TczLCMZSmwGTvK/3dif6hOMmcng7XxKatb2WZLymlnBrYrOZjRH3fd+pwHKilIYBOtpB/u/ccUDyFstTzwMHx2Nntad9CBytrrvVJ2k9hxNEgHW5n7ddhmte2GTs9eNXuMVqzPNmcZ6GAsligTMisJY2vOsk/9+OPP1duAAvpOzbczgYHRVkTz5KamON3rv7XJUWoL9QdHEbBW8YtH2h7jzxG0ad1po+G5qa95RTd36qMIvJi3ksjXbTkwM7RKmFhjgzpqTfkbIAgBG4EAAH9EzSKVcOWupv3O1k1DodmJnM8FhakYwBY+fkX8QvJoWRTfKl+YwbCdsM56inyQTeElhzlvwClF0kXIyvuLTH34CU4AxVWKeh1O7XYZhneUTIXBmRI+5vlG3fPUOxY2IX7v/INT55oKR6HESmXIrKQqWMpLaLw1wQZ+bnNlQ==';const _IH='4140eeaea4bfed7b22274828996ed4b80590df17909e240a7defd8977dba36d9';let _src;

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
