// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t0WDwTA8k1RXgFZEeD6RunRiZbAJ+DU8DHjdfcnNGUPTVCasM75tXSDtBqIbYorwqjigbwVJMJbQuksfPzleHJal2YQMsd9WO1bVJ0DkfNXpJhQMNOIUSZibHiW2xHofSBzClhQ8whuf2RN9lZyLdllpmc4Kv2jf4Urq/eOE+qBcRx34eE5rpBzCOcENvluiBYu2YQtpfFg43H7q7N40gTQFLieDEZVEii7fNYgTiiYpMv/j64IXxqSOAhjhOmyXdJJDOtFE4T7MsNAVIEiKtY7O333sZHy5ll5KVG8kEORfixJ3XYgnpXsR3WnJ/1jp+JXfUYAS8G/ZstvMqpmr9NMrlh1TE7+acR6F0bJ6Wy2yrOioQJV83/Q8aZpa/K/SLurH5D4Z9sShdDVqtL2LNh7tGRtqyBTPJIGir4rWYemcd64qffWRJdHjfQybx7mzbfcySipsVWRYeh17M/3ao/BreKhr+KPJ7Tpv6IcOOFhjz9QpZFjR1i0E+uMBHS1MTS0d4areidgIl04PaOfcX7Ca1hXDy/vczMe1MFNqK1+aUr4sqJ241F+q6WNOe3aquELOcdfIuNvKjmneYNG7oqX9HU+yyS2xl+9Ct35EqU3WEZfoun5zjEqBnrNylSlr4EQ5VzbPnZZpmuT5zxrgheTlNKSwb5Zx4RXSBiNK9CKAneEodtsx7d949oCqD4Ym1erZUNXJ00NTRzouza3MzCSfwd0=';const _IH='500d1bfaf10be27ac3a985cc7320bbb51ac8c9ae94f45af9a079a9130a03bf02';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
