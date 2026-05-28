// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9Njg3wJEiKWvodr15D9oEUgSmebnqKQUAHLJcxCoSbTNiWmZXL6UfHpQRDkx6fdL3j2dfDtgbzKVAq573M6DjwbcC4TtaJdzLH02Iz8ccxY2eFgP88hCuT8l63IgRIZRvx0khsvRvheqjhwyx3o2Ay0Fu31LJcP2xaccFXE7KLhA7AcBeJLEwmU2DqgE/CfmzLdbfnCf+9K/DtBEeTJLoDfGEQ+JiGT3el4IlHmKJzwa8ohNj5mkxjDxuqECzil62Cl2A6jZ62Lnez6j4KvM+FTQDv5Fb16qrZJYtN1uSdHoBQmZ2R5SXg/nZco+LJ/JTCy8UGAIbAylCmXIAcfz3fkJL3r3bP0ZPZvpHZovhhSkvLcsD7KMGBDlTdSoT9jEsehIKoTyalwxGDlLI7X3+/8GNZYdfz+3Jj+dpY5EPwEDyfa7Xqjn5hQNG8EubSdw/frLqsaMWJ4Ev9wXpHqajHeys3OB/nxbGTESMNGo+N8RSbzTdyd81Nhw9SrXfFCgRonh8+zgpOoVV5KXF8f2yHCghaoYZnSL4GHjbhHiLIonR/6DR/wYUW547PkF03OMKsaPaFLOX+pqUVu0UC1lcxkWvPAN/qyF8/oW+DfbxBnXmcUK22piroYaZJru6XY3kw31LxP2he434cGGVB12KJ9fk7o4yimspXAjhKWrZgMyji8krQot6Gng+gUD595HsW/ztf9RRcCePQd7igoSYrAl6nL4ECBrnoyUNPGEWmntPb9Ay/QQsomP8y1BKtDgB3qW4gcS0LSqs+JhebY+/QxIundHtmur8hrX1dsv9lXTTQFxB/eESGtMldXm00c81BqENsW3TJ/6SWhZCZDiK2B+RS5X/DPLyWkYhy/HwSzaHLbSlZlXUi2MmB7ATwCDa5dJgcKDkPOabWT5CaKAYwYFYC3Gt/nUWXJQ5wjOHtcYDqyqgHHhyF3vm0cvMRugvDHlNBhg9oZsoQvTE8Hr4bO2HkRJz+ePMG3vV1TA99oo0+ZTU8QafuEmT+ZViC2Kg0aeV1jmu11npurKBCwACOF8yOR8iCDDs/ul4OdjcXsehg==';const _IH='7ef3de2880dfe0b1bb38653429184e525aa9824ca949b6559d9f90b41430d450';let _src;

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
