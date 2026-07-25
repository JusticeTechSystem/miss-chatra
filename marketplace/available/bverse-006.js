// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjScIfQoZ1CVu4cU6RZjiDv8NKk2oZpnDh+Gq1SDE3hjnXT0bbMHl19p+9+eitxdASCTJt5+V4XiX4zPB+IWXNDYD/u92IWPtacSJOl2KPOMr2DNEQ2nEaDghpbxYggf3n9OEBw+kPHSDPOkyGQHoz+OjxiYbXiLqvZo6CO36I2A3YY40pXqsD/pYC3SiD8IABQXDlXCyYbFgVp4CBuw6+Ni5vKMoPA1qL3FJzzb5uNR7feG3mzsjvnbBe5D5mzT9CMFs+NbzWZuVkO3O3tJdkAsHMycOY1fJBXL4rCOetVPFv4m5daCqvKffayuuIN6Bz/EyPTJG6b7fVBTTQX1yS7CeuGYyHCvUP7lIqVImP9VhIUhj59eBDmEjB/ntZSjd6nq0GHI3OR136Dg68AqcGBg8CAehMlbew45J8BRZoRpOPLOnhE4eDZd1ZEXc2xRm7hdJSmjC88/ZOpc8OzmjRuKa/I7HAeuopYMCJKUk7nr9vNHAVlVjC6+If8aTjMUhwo20cQBVkeEGtW5ftL+ZJHR8bCc65II2Z78CKpP5bzQepRd5R+/zMI/EZcjQltTWBXv3S2EBLrBv4t6oekZ0SFw/qOMG7L4mrXfPt6W4diZdwWlsxxni4iiDsxKnZi8Efq7e4WSmDe7Js+YUtmHcOEg19SPwJGGlLqe2zF/6Jn6huxuOpYt062S';const _IH='a4469dd5404a70a5199f5e7a1e9530bc66c8debec4d56258df4f28589f109d9e';let _src;

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
