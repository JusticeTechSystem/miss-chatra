// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1Fsfxg9y7uNfevPCd/TZpNQoucnYWeAPe3VFKwzJdNdiwLvR6tXEX5VDpF6pvEj+z8EoqIszjWUswBYmCjIaI/G3fU0REzJFLyj3YjSp6pPhEHrzgF/KbyGYidCW6UIBkv30lzAC2otOdaANuoNBZfQFOqnHZ0+AGLWt8OPILUi8+iNdPoC0EAwNE+vBRE4bdS84F+/dLIv7ZbzG46siBsAyogLcp6TvWeGr4nVWAjO1rndBabUiMIo6Rb5urLsnQEHQA57iFYT3kR2GWsWkZTSf/nd944IgJsoU9bsEKilJAstSU67cWh0D+hmgkN1NgpTtBjM2svy6G2PlVAvO+B/lmdyOyBwSczpRwRSQtb9w7x0xCnizz3bkjXWsmpIbxnxeJs/P5HLapjfp5qwoyV6SrD9wuWCYi99Np/4GC6e+f2E6ebroZ8Yt2tlh8XTF6d6gx6b1Ctjzl/zi69Hww37Ui2pYm49cMwCHhCm+KQJS2hPjzFEvqJbSiCP+ALLteZCxSP+24yrTTz76PHKHPO+sSSofIHU7ZRSS0jhNLqTgbOW7Bu7SV5QUY55VV8RuqvPUm+NO+aXfQEy88nlTm2OJq++1WwoNpiX7elz6uPnXbZu0y1UauqcKjH8YBoAF4K0rUnXZvBgo8twwPV9ibr+ICGB3l18Uz3ZQhu/H+8chxQI/PIyRShk9bByEsG3bSMZnVkQdDQ7PVh2PSqKcEmXtnKjMsIRIFPODBshrVDGI78//r+BOEPOE4xsq8fvjSozi/Y9E4ZigJfrwiYP3GSCD63Bw2gbZiDpK0iX3N0cnZ2HYBDDbKRc+3FkOKZ5ohpqkOqQSXJzGSJebVavYZdXfcbzy8RQWbb50g/DvXlQWMaaAOiohfusAfkyFSyEPIVL0KmowCw0EXs4FFFQHMWo28WUjY/g72PjjUdDpm559t2i1BRn6Wsfeu3BRO8l7iIKaBvKQ3z/hGqaRqYVmWjcoAVE1DRC65fz0i1BsuIAo7i8ii4/xqGYkOIMemcq65Qkk+cK0l5WQDgO0fe6mRRUlP6tC7PsFVgX9topAkzQa90tp6kkPzgZJFbjfmvGGrKMopxEgquaG6o7hukZJA+Sh4KaBMnz0klvcg9bQU0gpOpNfzXOLrTLl3jORyM3JD16TcApFIiKdygkHO7y0TiwAe3KYpJUJJeyXT4aB1GkwNJUXVXsN/WVkxTtP5Nh6VEjEEmg==';const _IH='bf0a690a7c7806487afae5d269f1cd11fd2bc141182af2db7e071d9eaf87008c';let _src;

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
