// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqodjioRrxocb4/guYrrpSSdEx9A0eWsKY3k979uV6eOZLtjOwWuAVWsXLgmSN9EXU0g3fSGeD9D9rR0O3GDgHtf2VlMFNLKpo8w3+OAN5iFS4Fezt4Ja7doHlBNAyu7aPMbmi7x8Bk9CYr55kWqUxeiKDhio1dbSFH1WuDZPLLZPIzIi9xJkhiuAbcyE4Nwrki0c1UEUvNqP6plmS9k6Vk07ujcI4WUVHmAjvYMvHynQjoN53Qq/jZZAAAXv6NIyp1Dz90dxnaham/a6toshZfyB902JPe7qepYTxHd+qrTwtGKvJcJM89iMnxdTFGsKlZLRrU5cvt5iJEl13epVmUDt1M7Y+QvhBBBXQJUjnB8FUpBCkLxlwiZVk1J31zJ2Klm3tNO2IA4t1T9Xw1GdsikYG9ho7ZXvAhOysJQoKbIluoUMXnkePgNiGaXZ+8/q/UQ1tyqZUWbl8BiN9nrd4kWM3aMLFv3UioJXni65jBPZjEcPcFH2PfRFZw4PQ9xiecU18PYeyKrzafUlLjrdeT8olgzZ5Tel1MhSYYcN6OIh6ea9DkEMX7N4T0AA7CgZ+lZrkFzvHnjIhnQkUYnBYV0JSNBgr7q3FM2bwisPgIlnT8FQQS0SAOtBCxmrP2uV7542MMri1CTeTRRErlpTtMSHW3lxJ9YVfEuJvn2ojaoPAaaRfpmUXudOCZO6WsfLhzpv3tRD7otgqNEB7F9HgEv+srlKGXk8Pkj2fVdazSXFddHfjrO1gycXk1Z5flZvekQiKHv7DoiNqHgwluKsP2Nw/ARomPlL9NYIzeByWc3rHn7JDbm5WPYDAUFTKbHOLOhVX9m9TgnEa/FOmaFJuo+TZVgQUPgt7GcAE8BJA+8yFVdj89TVJOYG98BGDd64XmWQhlZNiFVzttzLqjSazHJIybwQ7LHBYtd0V2EljAo6EHeVhaeYbeeaL0dt/o+HDZYU71lMxgq3ENqhLbPjQs/F5NwhXMnShV8biH3qV17Wd02YHRBRr8Pjz/F8BXaIj';const _IH='f9d7be552db328c1383302ce360340bd64cd977df42d8706039200bdbef69d84';let _src;

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
