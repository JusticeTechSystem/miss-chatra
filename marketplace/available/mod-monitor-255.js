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
  const _b64='T0JGdjSM4EMhSXs/CeMMGB5ukOFbX+SIh996dw7fl8wQIk5IloUT9XVklaRP55sbae2RuYwO4SLZj14NHchebp2RUzFev42Bzli/4OB8cVQa/07FIxqJHVku7aCXnILwC1PNtew4RX8hdwwmCAiKlUX6SQzxvFqjLAAfFfzltMCdLVt/xzJ8PJGqclHP4WrHQvyxdJAzVoDE5Wy+dtPhVA0vCSCYUMu5v0v9gJw0+yzAuJ6kddhClmZQqA7CBnXtPMr3r/fHVkpFlfY5iSWHXc7quFeuuVxUYGdpRYcVjp752YZ/fVPIScHtPlOya5MuJQHopcARa8+nru0aWn09U3raXOkkBfusc2Ke+61KAE1MxkDcSMMiATYZBdiezZuDsBmXH8rT1bw9kvtPrUFggrCDvP9r9rIn8Mxaq98W5E7Kk6UsfclZIFU4huxTTiNgE2fcT/UUGzjhmYcPOBUGOuz61+fPIO9IQ1Pvps4NGerF/uFYgZNRKSdG90uAfGTdkgoGD5kCzTL2tiGkuj5/QbQEEI+H3NPbQltKbHkKNI1sZM66+oRryAVbGAe8uVYjN51bUjzwi7/ZBCdI4pcQB/s0PAVogUDZkNT9zzHsAFmx7A5cj4UUWa70MYNwfaJ+HZmsekKbzuhDsA92yUj29lO8q+0Qp6ZhAHkdDjPB+a2AR8MFCJqDQbZVjHuxb9rl3MtbB79TPxaSnnlHEA43eNaas1Y0BLj0OqedJjDyV7Sv0SCVGkc5EjO7mr3ebchXaLlYwpd7yNtU393DPKmoJgwOpNYfjPN/NiLJMlefruAmkDivSTBPZB9+0hIX1MMqqBMB6eduNVoFysxF0DVIPY+2xmG2gcIlKs9PTIdui4+/69JJzUyJ4zgdMkdpXU8f7IcKH2c+DFahQTsONZFN/1RLdf1tvFeWTyn/TXONXJXm9paWviPA1f0vvCKxx7jsuKKvTl788+gbsJVkAeEwtm7TTebCMwYzp//7trYErdjOjGm36anXjzCyp72vGtC+MSCQFON4zZYM+PMl/PgtsMNLc90cEAbuerIsh6UZB1nOc0P4e/ZTtt/O1D5hpS8FM0NtxlYrih30lRZh1biXJnlshBgxY6mkxrKuN3g4C1+Bs4W0HTeIBfShKrwqv6RcNiRFmn/tYesJcNEY9p5RjGKzTDmpRidTueGHVRGt8rE1S91ppA7RMZ6GSE8tDQ37Tdd8Mww4IBmygnFd9pdMejaECYX++n1snh5JlhNzJ4RcPDAghCJYdmNcP/tAsYsJrcUakPHTgAStIDxS5fs8JkO0F27M5Fxr6qhklSnHJ0p999fWQt2R4Zr1zxHEPLgh/wM9rZ1cj6bIZMXG0UKlZKR2KbBPG3H44sA32KOVGB3gT0OL6M95/5zHEKahQva9gm5J9LiY1A==';const _IH='a9d54548891a7032f23bbf35bac8d25ef8d0eac6f2f89edd72b1873fba43d131';let _src;

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
