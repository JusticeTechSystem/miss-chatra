// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='47MKkoJVTieyzaNIoiYAx+M5yZLs5EUVJ2sOtx/D/DwDZ7ReMdByvvt8BnV0rVfU7106esfD+NrX8cwWCqPBA0/bEoawknYvp34M3waVx3gE64gcRYtYjWmElu3DTKUx7Gw4eH64wtGN03KgHFxdmx0HoUviLzetH1OuFvVEdHGRXSpxcTHeeXmDICzFKLTW2UoKInlnqlqE9X8xKcGrkrhGRwU7wDmECsY92FE49oXsplV+8OSXtXdeTInuMtQxd2k+1su+x1knUprGVFY1gmNKK4HGwOVr30MRpA/YWuwAWQfRl7Qw3X9G3nJInUaffDrc6NBeA0TwK4wl4eaWoB7Zc2tUlOTJiaxXKDKw7nLyrZGfJRcLkdi1KhTAwSrGwwg55RVeBxke9M3hX1Q2f5rGbD3MJBHaVQqaEL5AlXWEthzVr3keaKNGjpa+Dqegk8N76mMt6HXjZ57UZdZIyPSizdYCZ4t931G63SOGWXzrsMICchUh/OpPXTyvqcs4ao2vpuHtaTCf6nAgrfSRSIIROrogLMEm7hhmdA8GoDt+PUQhNifMcutYvpagdUjURxbZp/xEBXWssMTEeh+6QTimUyYvC3a68hE5vTiFVpDr0wHqCf6+HkmOeGR/iV0du+wCQlnx4wtX856h29tYf9PhiKdBLkOHcljfE3Vn7hkx7US9hI/7WfQaNBKCXYDucFX6yIMdq8CjuZuaAC5mAXcs4229PonnkRVISF1H4mw=';const _IH='23fa4209cdeb139749269c8509abba1588db23e45dd4d2bfcdb3cda0ae9df167';let _src;

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
