// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZJXzIy+bYy7/Jy4U7oXv9uKs5MjFxnazmuaqUIhn13Y/XTen3rxXes07m/Ic/oLyJTd1TZb5jJLMFITdWkJzCh781UA4Gcq0gebR7/s6fcYlTobVE1KRiCso7qBmZpOji2eOZxCSPbjlE+EMY/Y8aCjFheXvfpevPlKKbYYjQvuNS3U4AQgqKw2iQvADAqwHmUB1Rh97YVTHhYMJxbCYOgtZNz2DRxh3TxcmZ+++Z3r0nbNvTMDRC2ZHapdmsH5XKCvmaOOIU8MtifQW06TvevJ4wXeDvxkBiUydEKKQ9tdkAWEuoHAtrDxiZ0Ehg0LBEWuLbbI9DupQed8KwbRhP1LoeVqFRKFSHrOcusGUEr/EwGEoq+GIleKIUDpcqUqkOF+bYPxeHUzsVmWKz2J4jO6ZWAVdSYnw7ppChlthkcTOEsCuS52MRFqI8RJAjWH0BeRW7PhDrk0uwdPZTRuYDRWkMvdToHrcY0Guf+r/HeaGJMgPDLV1jv/JU5R+MD9VRWn12nFJdh3urXdH2VZzJ8w+KoyXMmoNJ/4Sf84cTed92WnvhTO1h7jLSEM4GAun7t+B3vjj4A+fOJq0Qrk+Gkz9tUcGi3YMLrUIHa6Z/bAfwoF1yLLRlXo07I1VxGREuGpmvWYqZkKKcWADOlxAgtm+RfLVHweWYSeNBXaRTRO0rqQXIaXNooaKyiACcwQKVKUYTbmniUF6F2kv222gq5WeNRELWaWpa1ThQ32vcdJ5pv57jRxjZhTk3Kh2DQbvklysCskQX8IFXa3aPfuIVYAr6esqtyDtirymeqRnfXQIcxGZIFt+zXr3eNyIP7akXlgtNZVeC2lP/y/nIhtFP2Z6TwLyeoBrCzERXQPmjKbRrn0PVRQo2mVKQCFQ0LXvqvLv0ZNMghLvFl4WK1P2rijnREtiUZ5jZy84A/u5qJk0cHTXKHN+j61wCqRfSyxkHQl0HoQNhVv9e9o+cxvzUypJkj3qMy/xNYbbjMA55M0PZ+kRBY5XCB7zgSJLYjlIzjrT1lQCFf4IumgoZNpDl/TuoYXSSpe8RXub8+aGkspsE3RoAef1aF4VUq8xp8IqkesooiDA633aEsX0nug9dxWQAhaGFvd3EmgfU4EKnKgcKWScydPfBgQLsq0j4oPegevoDQduM38XqfT55deZcIzo3KCIeE1QwtOKZ4BawnW7WxtFQAykSFiIB/MOFCfWAa4qwcMWZU4p9qDSJNNaHbhCz9imAYoWcqjOyFbKgdI5vwKEkgsKuJuDCCPDKJ4PraFruwjd3ysJ0L1hcyW/yfnTqqsizZVl7Ra3RfuOJARzPtP72QzJ1TE2kgUe3igv+ba7c9H/Q3GGiw==';const _IH='234176011d120555b5925be60f0ca49819e30d8b035cdeecbf1170823b6e1b7d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
