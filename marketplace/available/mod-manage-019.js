// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qg1Z/bDu+TI7NqUygYFa3E5+Fxm+uPXuJKv4dAlkhEK5Tbx/Yls2sFrzSHXm2EnWqZctM6t/+Zy6kfXCdOZjW5xWdf6lpcw4Iv7x3AUkTzzRRr8o7JZHmhDpAj8yhleRaNGCFp3EzPD/bAfl+r5iESt+zAFr2tX8OX+C4NnocNCnnvJncAa1350SohnL9jM7384zUZKvqfziZ0tJUIc/VIbWTDwvBMG/7VASD2m8thDNMBjHW3dym87xkC0Un+K436d65A4/t+cFsQAW2DAI35NingmJBgA8GzmRMQKTlGVmx1jAruNQGCzhPGZxy2/Ue6TXxGy3QyMLm9hkYjko+QmBH9GBvW2+zQoBr6/Ql0Dv5bwi9j6H/rZmO3CoQ2OV2/LFzaumBrduHbe8UGBE0Pd+xCUG3OCqdyt2UVaEszqVf8c/ob2Ylpo4yveuId4D937JstDytosKVHin7pRce22c6mbqr74NCXwFhD/tekWBnbza7MuxUW3v3NCqTJFH/lksmQMyf2Cr0neA7pvPnsr0hxPXBXRRxpBkP2qMlVXtpAffLSgfMmyhAM8XudbkziOF/xDeEfPI2cc/+/572mbv7mXh+7eIq7RiSkhch60985ittUklZoHMu9DGIj5jpfsOmrOY6ADy5FftJg1+ubImxSd0Nm/xdvPa6NZDKn7XijuLA1uMtwES/GmE2OQ4Te2IFhbCT6XSq3IpZX7xAsL5+namXWxHplgV2FA/6IOP8PkYsg7xDscuV14ZWshkUw1TqbtwDuY+4flKbdFca/r6PAFTFWbNBiO0Z+AbDNa3kyciG3Go4906vm/tL7JF7ZUj9mC8ayhcGy1auQlawivD8ADo+Uyf34uQzhnCOsV3Oj5Wu9v5JQGvIeXTiKZI3rqptekgZtGR4jQjELbH0m+UfoewQqxZzC3TD/zIJUhr/CdnDTcer10DhibcbZ9IWqobHgaM40z3pnQhGqk2u5j69iZdkDBVMlU92VNIEyOwtVw/0Gw5AJr75VFeZ6w5huPe4K0fd51CeAm7GBW5FCbjjoif9fyYI+gMOvz/cp4eJR3Mmvh0cDgrH+FztRQfAFPwCLmU4y7shfcAArpM+RwfmT8cv84eAvIQX/PtTIoRe6+s51LsCzzfiIn9OuDXipHt4f+kpEDNtHwWaNoK+H2AVWV6xk4Y986Ea/s6KWO4JsKWTN2syZlJJJtGp55Z2LaoP79nKvjLouk+9TeMRzY3NQXV1ME4IzKtrByI2hrQ3NRvn39ZpiKiJfYpyR3erYqitWf9m3HA3w3nV7n/DQbxPc85cnSZVQ8USIMzWIdi2khCHM3fA/OWNUdXAqrAAS+4Ld+T1dYE8QDq5Z66BbbLfisZGx+vQr6AlYYCVQd9Uhs=';const _IH='cbbb02a13dc2898117337a70fc956a3908ff82b27cd0e6224962bbbf5d5125f4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
