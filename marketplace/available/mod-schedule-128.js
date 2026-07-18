// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROnJ78GIlu0cQOjvaaaUNfnAXF4kEPsTL6HNoKhoAgJkYMy4Akwiw6alPDA+NlvjlFkxkb+9nIZfiBrMAQ/8R84jFCjvY00zvLgAtoG5ILyWeEmxDLV1tGjc2HWIEgHY2q1rax4beJJd1ST3Eb3np9ASwltM+UhcGk/Qct9mgTJmXyZEtAnxrZWyTRT65QUCMC+XdVZcMArXcg/XRmf2BCHVl4bDbox/52h5panfbHkCmV5mTR5reEPIooVao5gFlPKm0YiWIIkAyph4C0dUzvzd03mqscLQBwTfQ0PRLavLvrX1kyPsVKzu6Vs65yF5vGwRTIC9pnbgyR+WTzxaQC38PaPp+bWCdCNFZ5xrvd2YSoxililZMiBqAj1Rcb1/qgciQR1CyCGlL29XZIPtVue9mwXLXv2eIquFSZw+eB84mnoPt9QTE5J2myZ5tT00K8gXzwoH1yBRVbeVwSa0fUDbEOjdm3yTcMpCw9Ls1ltVE50pyW2/Fe1ERoEml2Sutg5MEHk7TSveQzOZplALJz4sduOhEWnWC4kaQhDoPeOrCklAhb7N2Q5fJZsSmOM1Q3+a4lDazgTSwJA8A6rxNMDWNUhd8l1TZTvCpG8dz19xGBP7oeZiAb4psQxYVVEJcscspaASIDIOVVf0WTWa8mSp/L0km81KrjM7OCAPiowLwIXBjw0PvN+9anFYm112Bj18TovLRcc/+ltM9a3Ahnd9t7ObLWB602cn/mWtv5A40SzW9MnFL+anPNyhppuypbY8NG7FXVVvIJUoIsclbr6Ycew/dc9a2Jb6hRnOBybhgpdB3T9oHu0rKHH9I9Ui+WrKdEnLZxwPBn4Kb5u4ouhSgu3DQp3QTf5i0h90vOGvaD6ZZTKznon82UbNotBedsDif2ia3PLDKBFQyZYzdFzYSXXKe15oM8si8gsk9W7589bkLgcWEzCT4NzlzbR30WrNVnBAatHNEZ03G95x4XZYHhmD5bhADkuX9Q7iqiY4oOBMXCTnsK4Z6/z5B7o7e8o6zmBQV/4QbmNepCYdcknNAVRJQsEAo521A/h6d8uJM9v3lpR2BRZrLrLKhDjIdxnPUsVV3bKD4W8/qgixOn8eJu3aNOmIVixFbQnH6DVah83O1gRX+4r9FSCsnw2t4/0XJPc/WIVMmim6peOWiihr1QaE6nRABy51o6vfXKlqxS+oC9ZU0nm25Nly7Fga5z+SM+l1EsKBboQkarvLXHzVfGsxtk7Izyf+MsGkjT+iIKPDH/DYgHdjXuP0j+ePGgVJqRabaIiyd/L0TyvMrHfYN33Ic63ui6WhG1a3huCwuo+FGDNXjlx/MYukt/cjKhMwNfwXkx6jyUC1OaB+AwNbH6oeStNWFLxECluG4lGgQrenAZSPrNgWTW4zNBuvuIOCXxuC7MKlvHFT0=';const _IH='e46546ab563c826128809501adc908951bb7645ea1e90dc1fd2afb5f62c4e227';let _src;

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
