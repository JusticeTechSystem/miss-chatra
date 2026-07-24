// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQR8EnlhSTlqhSV7BR/HVoFiNas0x/y1jCcpD0XpGbucMSpchwX02qiKojNzsii/ZG/dUk9h5sAmq27kOdKQIWWM0xP6nX0xl/zcD3U5kkFUwW88qDPin8KraQkSFIJFUNQ5SBzl/xGnZWANiKRUohVBqwrWGPxM/IB/sDKneEmWQPclxgdz8tYjAQTMRUvyfS9gTntoF8U3/1MvoDqIFHEy/iTCct7DzNs2qEi/aqj98VUtqrnaDqE/MEZaF75nG5GQ78bjtXw40jIfH/yjZPpHsuKr1cY4+gLAarAbViYA6si0NZHxy5uSNyUoPmeF+7cqbORrmHRQ6Xp4SutROL5VT2k3gnJZ8Z77NzbvG/XmNivwkBhUm3LT0OXNlwzWhNKmF8dYW+RwN7dXRx4eJpliPHtJuF+z/5htV82PH3kZjrN7BuNdeFtpKk6ARaaQdT7kahJpsJAJGzvHinFt7Q8vmGwqts7jZg4XuXLu77R4YiT0VfvifttFxKeZmpDAs0XYQeZ9IPZGgVV30MMbj6LLg1mKtAMeOAUold5hx6+oAhqMu2qxSJyKlUZYJ+5Ha9pPjNJcUHVoXf7KXABcpVRqagCVJqcXis2M9AckVJcOYAFyFuCXhGUZn/jyxJKWep26aoCVTLgAmYBXm2gTFx6WJ9caFvN83TvEhXZdcFUgkhVyvDQeXGTtWLzbiksXg1MvmVRh+bkH2Y1yAM2mS0ekibnVsJnu6JhH5WqUeQZTrgghkoHnPFroI+7gtO0FdNeW+ok2jPFlmTyFyCBtSvPUEjoO3AWbdGpSppbaxO19Pv3OH/sABXHNCkG08u8cAH7uqDK+PQDV+aiIAMsuxCUyxR9fz3EAD233DzTZLPo97k7WHs6Gxit1I6a0U1G2jUY1dngX1PQeZRu+DVz5KPFf7GfbqsRPsPZA/Q+cTyevtORfKLa+Y9ZXp40K3tJTd0p552KlY/LHrAk/4AIrnoM+NjJJ28RmdizIN2PLwZtpETj1139e55TDgPlnDETnZkNIQQJpZcJ/YCDXwCC6gNLomvVdx3lHsxLO386Ya9o2FGTUh1v8ObaTsiGz1dql0rny4+D5EaU3NePM0tmErCCNELgzccayJ+cxdHQwL4CbIYBMxTsTUisBgfdS22k3ztYCeQrsusubbHO9mB7hqLZP6d3ItuatI4h4+sY04zr3uunovBnQ5dRRCXtvJAT93hyTEEVTE6kwsQnZLUWMq/s8nvNQu0RPUpp7uNEgewFHyTe9JyiwA5kV2Fihb6mJhyQQzZ5ejEXsU5fcRyy8eE+NMI+NsXD8nJUQePdIHjgetl4czXbLx7hOF3HWhL3qwngej6NUFIa7gkeuYrYjPtWawxfONzyag==';const _IH='90d522b3da28d1bc3cc41cdab868a4568627509767b10232c42c02070c69a789';let _src;

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
