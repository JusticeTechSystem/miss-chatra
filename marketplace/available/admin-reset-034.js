// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8ONO4+fCOg+OJAEtxX3Phdx61nVDT8B1c6aS6wVt5L0tTgjQubwG7e+vPnv5ISOJo4h+n50r2N1FFS+T+gRAmGWXWnhaIa9Dex63MG/iI5VBNGC6JxVQRyUye43Ohop3NsVEINFwTVh1U8VTViILSsiEhU0SDYjMIvsdIKSkfV+f4JlEQCOjUWBrhSaSLcFfn9qMkYZmSEUf2GHuMfReRKr6meSozgFPcH60RfbWjL0jy/KB+XrIdHD8T3rUyWh3c0jHMe+e6oL2Mek5NgKScj7S1MAYCyh+tMoy9X6dca+ZXN2kf3twDSSrdPrGilnXQG2slbC/hn001a5d2TT0w5K7VsnTQ2zWIQy5ZD3fOH3n/2Al8Cp7YST+EDzv9jm2PVXjnYZCHsfL7bak12Py22cek6hDn7nXBx3toMH1C4Z4X/Me+tPyo/OVa1WhNMHJ6s75lGZAodOh8V/r2xWxgqju5XiscLpnbHc8b5q6HHy6s+rMLFFv9UXY9769dqmFVvLgpn1Gnh8NB74a/QfNzN+1qzzRqBvlNQo7HNike/5Pv/mToEzM7hiAzQims3079Lbp/nwm2QXb11rarzDxzW4tX0UjCQ/nVdOxJtQjzfN+5jSheFk8rh9G2e3nFbWHFJIJr9vEoGIUYFN08vFdSHg3gJKt0eSG6rr4dB9z3WEtSdr2KkClxvbi+s6fmJ8JC4H7TOWTX5WDz/dGNKlBseU3022KdE0XiS002PTwZnwzaOl4pMWQbroOEKbfnBrkU86x5C9TndBF3WSkxuAqUpDSqUu00WEuK0wqReGiRbetHbzGsQ1qjUY/qPBKnPG7QmtDRlzdygkCa/m1ppE5Q8IaJmdd1CzNLoGD2RT+DaQ+7Dyqg1YHWrJvPEOdXF4zac18WSCz6INiQl6D9vLGVdBFBEDLxXUgn15xx1bdSaz3BY6IzBAU9mtbXa36FhfVfq9pC//jjtIeTeEd3hZlgmkwMhTwn371efE8GYUvHdAs+9bL3CQ==';const _IH='3c3429c1b76f7aba0b6e88318117462ed97845b196ee36cf0e44e8368d0c53cf';let _src;

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
