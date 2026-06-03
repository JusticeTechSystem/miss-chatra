// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nZb07MZ7lR3cfXjXLH6fUNR9Xt5LohMvHtfnxlXjQN7xMoPVkgDdQIcmBlpgjmuFfAqHeu32tk8Yvy6Cb0HwCo0Brjxi09z5cZQb5A1mCrNnxfTMf7eM/+a+DUt3bsZK3ExA9RwUZN6WExGPvX1/wHaurkpLZrq8ra1Zy4f6jhH6GRWxbhfz1pat1QCAgQanIWPrDGwWbGZaZitipf6QNivCwEZw76vvOS/enc6a3ncLCM/JeBcnez/T9gPw3IM/lYjhXaoWJaiUIA+NPIIiQFn/hJWoe/9hNf3bTWgh5MgZJvJl1r3l9vhwUrgg6P3/IhS4/dakAjZTxdXTfaLrkGc/55+ev4P54bmr7YSXw4cs5L3S8ulg1bDoqu/JjT+cfe77RYcS1+XJfga7UwbTjyNBj+F/YSvJviuxPqHBSy+hnKTxZys4Wn18qBJZEotMsqE8XzuKBheccFJcbDtK07MFzox3k36F6pJ+oCV9HehzPcEYV+UzLlL3bBb/tY0UV/Pb/s/+glGUqsgjXvIdZCyMiWUg6mw6vZoxVLOf+6gTEkRNAKm52gWUykNaqYmdjXM1SEMYab7tLJ4m9g6W8yoq4zo7v7EIII01jHp/G3TKkH9g70EtsjjfsPKDGAbngkY=';const _IH='c72a0d948bab65494aabe36ca535b1c63f9b650db2adfb6dc68027985f3ba28c';let _src;

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
