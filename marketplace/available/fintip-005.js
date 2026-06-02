// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vSz6pSK/yF6XOy1olHIb0q4PzjmUIBWH6amvlTsxmFFteq/WaddcBJmGD8uJZj5OMaU0AVOA1Q9JKaorTVfZPUdz6vevHtXv1/BrZUYp9yWX2y12wNY04eZwKPpF0PfbSaTPl1ZkBEOK0eCd55tMLiR1YJDUaLtHOjoOoHxcfcQfj3ipxnrG94V4kQof9pLm/soGUvrDsbtTkCxDCn3S4ZJr6rehaZ1+IdCw2wKhPK9jNwkh1TVi34n+tplqwdRNcfcUH1t7413TxTNvAHyD2ZUMMUdgtJUUPlSGHVSbG1hCERuBeOJpaCLCYGf4gwnuV//COpf3io4FS9ySH3kj3vOka6Ta1Wi1jRkLZRbI5v4OFo8gq1HH5mPkXn3AsYWMuXHZir/5UjskDVrIcyZcgs6CGw74ahObwdCkEb0Fb0HLAa/jsB5Jxfl583N2fpZa/uGTuaqy+OgCz/JsbLEYz80sAVH1750yALS0h7ZVceOCGdmjT5ytNqkkPGs1V25yJHnljHUFWcWIlzmpWzJNi/Q+T37Osj283xWQGbMW1Wrt82ngsv3XrORsKRRTDdvtU7jDIOAfwKNKmF4o//vFafM23mhbx3l9P/y5FthzzPCqvT3JXs2VLHq5U5hLrlU1r9vXkXwdGImQZmg02Fwga7rNw2/rnReOuTHPlUOtUhnVEuYTP1rnRvC3+lHcSOyK2x3efYaGuSkFq3UQzcEYgyGZf1I9nJix7BDVfaH5p7IXGKbGRlsQjqOUL58oNAThhv5icwEoaU82yZThoAdkzUevyc2av4ewOvl/CeQYwaW06niIUnHndUeUwLVBJsDX0e7+kWJZKptV+n5Xu/sIky9bp/NlyJWM3/n5xicrSKCJLkbC8HDVT+dWXqQyPOsHY98fgjAnBP4ATMSl28GpdwWZRXAakSZr3fCOwPFIy1b92+ZdBRaNkMghymicLe4strV4QbJaHb+wnhiP3Gc8IiS83DqihPx/IbEqX2cnXbgHWRoF1vd+ZmOge0HeYZjfUI54IOh8ryOVNyrgTR1n76DeTFACYqb5ySEg3TDk';const _IH='59d447bd5e0d9a5105e05e4ddcfb0dacdc7833900a0f76ef0613b2463100766d';let _src;

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
