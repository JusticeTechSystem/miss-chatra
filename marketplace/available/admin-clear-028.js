// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVVN53cuQFtC4hQTrl5iL3p4wgDEK690RYmrH9PLpqL1mctijTNzlwZ+VTmKF/E48mR9DCNclRSmVtNqLab5FeGW/F2fXkZfaJiIdUufZ7Pc5vXfbNVRiBgNLTDTO41i0eySDPbmjYtTwRd7vC7KUKIcqlj4W7Wex8g3k9D7jX8SZWfLnDNSRSPnJ5u3Oy/+TsDcfcedy8YG8/Ho1gB7zDF+kLoM2IXkPqpIc+zZpK7+08YfkiOHG/bM/xz66etEG8VuA6GBtD1GexbkxWbm4UcJaFB968/Qrox9wD1jG6mURI0X1JswzXZBPAnxi9lQntC0ez8eGapNRJlIHXwL2KqNGDSQdbR+CLMT6mBjVjcOxrEJfXuIhaEyy/Oo1ZBGICYdvnFlasZqkonytapm562ruiKRxgMAgzGMxuochwyyzDuKbhhhvReDDuyjOmp2uQsM8jsUJSbf+ty7gkhi2F2ZXY6Sjr6/ZU6H4WcZmbGVQ758eC9LwXKvylt6+rOePVb8yEWtJmfM98CYTdalRs1g0ywdm8Nd86GiNzpXTiZwSEoHINwgl+ncEmS60yi0XeZdP2Wy9IchlaF5Wu4VbXxWB4GXDTqzxtywi5IR7Etdg779x4XyFWGZ879qauHwGnU9DSpqvF5vckYiONgyw4dZh+KWhD/uVlWRI730WO8eIAAXsH42tR93esr78jPT1vAj0z9N54SiyyAdgfd9MDueWSzXF/HH9cs34v0NDFTdq9WBg54CzkvdskalCF3V1N0H2mgtOGCn5Wi5+Nxo2ho2E9C04pxTUm++Pbo32y3DwN2BBi2slormr/0ZYtd1IXfEQdNFqj9c9HxUiQ1klJAhy/WgXdVz85y2yDFT/HY49D8bG8WX5Ds3i5saUIFX6QZT8Z9hccdNf3WEfmFDJnESi6NYRQgcuyBznAOKBFYC4xOZEbvQBL7xHB4Y+8/tmqdtSSicY5Ce5V5k52Db1UdeMNB99Yof+PHqO/6eVemG53CetRcg==';const _IH='3225cc3518ec31f30ed94b5764c057b972daad5592f30c255dc73c5fe96a3b9d';let _src;

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
