// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZmx5g6ZD7Xh6vtAsddRaLT9SJ0RBL2ZFUUoALqNpjcsEd/BLW0LpUVhJdoJrxpwdNAeTbhb/xl07OASVMimrRuEvMzEiNdmtNrkxPDUQHOKQqZF/5x6i1+IraOf8Zzn2IznKEwALuVlVU8lYe3EK7Jy5+TZMVSd/v/mNhA27vxXTHuPvM8Umk4RJ1jMrPa3ID0yzXWhb2253CA5gIkOgDGGcrNa2y2mY1w5fH2Itbf+BouaQJTodxJEA1Pz4oXsCDJj1BBVdFCKYNZrxhLqnCAAbLSHJsSl2HSIHR4kybcyn1A/TT5kW8zbPaWiBYSRIqtQfGfcwQlzxlXq970efkIiIU1S4rMFSrhOTiGC1kUTTzaeXYv8DQfXITBKmMWyALuLY0mdcXFwpOK5I4ipHXsLYNcTGwcysboVJYBliRmphpa4AqCKO1sBGXQCAjN+ppxI4rjzA16T+1TeXDzaxMtdit2rxbZNri9dPgQHTTuUgrBTWiVXEt3lo7va5VYkdBd1/vtcPxl9wX3+mVBDENLBZyUZmvewruDRzb6Mqs+SNdbVxCgv7idBzj/7xQarUqP2jRHkipw/Sjfsng2F2KUonOUoYx4hAmERUKi/mG/J24zrmo17Rd0+robFC5gdKcTvX9aPhLw045Zj5AvOKbxindsxULjiQwYUCLC28iF1nd17bZJL5vqSZzYVjHNjjMYH4FSAP6UVbk59oAQ6rV/0dVjf/3lLpUnyHoYMEbcX5ulGQZBQ9kbiYFDbGo+Dxzuj12gjhIjB1PC6jg6USuBEuJbOXDNWYDmRTn2Iw9+Taj97Bg4VnrrEFWWnaHBctAPcCMH8OEmWI5AQOLDZtT4PUb4mCAp7d9vbwOvqQUXEr+5wo5hXUm0tcxo/nTGBQgJVPrBUB00TwhThEPPbhSu7RW6hVxNuELnS3NnGVm0rPn8Y935cAHq/VLYA7XnLD0kWtWak3lnBdHcWSOD2Y/GTb2Ps4JM+BBHjROZScmf28FpoCUN168kyj+/BIBkPEwuRDjvM9N2iXy51GROJeuFUo/QzIIfWl1xShHMiWQ7ziXof8DSWImXs0ZLL+G6OvzMQpFUY4DOIySb3HxEAjoIkW1TrX86n55xJgDK/RXrjoE1TcXK9w6J2HGGlGdVhPjDRoUTEJQ38iRuNu1k20zdSqf7fK0KbAVNjjLX6oT87aVJQPn4P56+pYtGkJWeZUn0LOnM2S7lQZ23yEQ/M0ukQeVxHaDmsG/y6DFxEgfu6JLHQyeflPG9NibcxBXT8rMlUtaCHJSb3ermm0iDDXGyu0cW+xx7O57Ow6aNd4MaRW40sMKdIVXxm0MZ2W0IplRB0E8rfu6XsebmSnadgVD2aqcHKG13TdtfcnTWlu+Qw==';const _IH='9efa942cebae8c52137cc3fa72ff58debaf6c26d44654c528b4adc3a03283c33';let _src;

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
