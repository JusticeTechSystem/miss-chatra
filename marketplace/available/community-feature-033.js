// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSqv8GtmaiIbV5rFN18MfJvvuHrT+zd9AmQdupWqCTB1CAQQQDUocupvuHWQnrZaESj8pYrH9r9Q2R49qBLbr3ospy9Bom81Aj/9yb5PxY+H//2KggSrLHYPVJ1SNofeqewMuwr+CE5xfjs/65tSh4M5GYXcqX2ivDjr9BMpTDRH55Noh8RG8+T35/HNBB5DpwumrmlaOunVZ2zfYIERf3rZoe3HxJp5acIU4eQtVB2LU0J/Z6wqKybW+nz08xtbWy/4PnbYw5SUSIvhI+OFnv5lv7EdzZj5I6vd8nlbbhyJu3EMiNolkWrJQxw2UZk+V1GKX4pw1reiqMZRwuhWjQQwu09uCFH2g2uw59JcgRZU27U7TOdg/WWs6NjSDTsAZtfWRFPvzwEas60RTvJVH8Yv8Ro1A1yrustYRhVjjCU1E+a04fKjj8pRuD0ubc4u8E2Uf5twGB3qKSYlGfsxIw9OSr81kH2BnVcIncxjE0KsAEk/VgqA0LKE1ajVxSv69eE1cphLmYxDXHmgQ32MJbS4y3s9Hdvj4URbqlgALTuhXagGK7FdpcxUaglYVJGd86eJgYZM9dmiQDED5JlW7EWKNnMUmAL70cqE6/f02b/lot2oClzZLEq0JTEunCg+sbsA3GhpY0fnWQYI4fRcpfP5xLtZhR9wvro4G4EDRK1ZggUxS9223Eh7eKhueYVHnVFlesqK7k3gHFLBm9o0sNf2sjHpq5JDnf2';const _IH='e100abae0af8f838678c9f0bc069ae4663558dc7f0f39434749ef9cad01a36ca';let _src;

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
