// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cwf8OqmQS3saKq0qd/PIK2EYU5+TVnpVg1YmnGTYXmoCWVZ356RSp5v+avZD9v8v5KhNoRksMezgyPzMxGmnU6kF2qxqzm0I6rU3YiHkjo21E5Ch2RwzwS2QKy+3hMVt3F7xLv5X5Y5BJtg53XDpMDJtbhcIc8ruHHeNpWKiPlVfwKOl47eIgdzELa27HSn1pMF5SAbBqe5KII7ClTuoNsG0/rRhg+LdaL/GGbNn5My9gF/3xgSUynfjiBeG+1QDvSwnKL1GU733bDBsGqA0wocDtxVOk4VygUrcDa4n5jsn4j6Rlz+RwzGW/BsEl4QeDW+gDdp6RihaxgfRl4xcecN/URUHZPeLLz7J2Yj5oDzbjm/SCVU3LOvujexfYFmHakI/Kvfc6cTZLznsylschKWb4gEt81wB00LCFZ3SkCM67uiN4poVLe0Fsia3ys/rpJaQW+P54j3T12vF138xImSZPMj3HDZETQuztV6ktqnbKtU2wozy+DRTugWLdNJg1J0Z5YMyEbQKo7m3ADiiWNFgKPmCeXINA0lO2oeZJ6zlnPNQUQ3za7OAYEopKikWBVtHpbLtU/p7O154k1rDEGok2Stk0H1AthdDCCDFBu1N+aj6gbEI9Mz5ZOY7+TOuPONyDPjHKSFMNdQHCtCiY3fPpNUPdHn4ayQWHTEuNKDQtGHbrvPzoxYNBVDz0RTlKxZBMI2/tAXdaDG7n+hBIkxxZLrHzTpU8OuRTRSa9J7PJnfnOEzmC0RZN/AB2ewI88mtcwQhds6FPu56p7+pT7rztVVx5OujmHEKgmheOa7nNKI7HPUbLR+cd+1NN+f+jFF2h3ahfGni9HtKCbJn/4Pz/J1HLW4cmQeTCOAZADONJubPY6qeYG2LN9+neoB8S0PmvsOOVGZ1tTfqU7EYRucAUFyUNNbgBez7nEagx+vup2A1suQiOQhZqlcSjNC/ITc8OMY5a4LQhrmDzIEGiIi8O5lcuCM1ROOm9EoIxw0598TcWEd1viKKCYX7s/3OzlNkaFrdXNZ8aWtycUd+cLTfUH6V9E6eAE/sCFIdOhPbGGeNriciIWTDWZ1/dtlCKjIWuHr5Ousqang9eSHaynPsblyFSwzVS9RQuXoZqSg/ovA3r31mYLddQQusm9FMF/Wy68X5+G6erMsKkZL6ScHCP69cblXvgJkWBDaS8PLZGeu8z45i37PCumo=';const _IH='ccdd5b8ecab88a4d10391de00156a1e9e0cb3bce3ecf71fdcdbef0cd42abfdd1';let _src;

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
