// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='06zfKCGKB7Z79m2fTUVY4aHb2yzUnQGH+kTeCzcNhlFdBPaAtnBQEb+sSj4/HdMeRO7Fy7xmJSh395/3Gg9t+J9B3eqbHIMwewAnRtQ6ca6A6O5tQ3ghQ2aNibrnb6bOVQWcByFXN7kDS508KozkCzn/SM4M+dJVsaHLmIHgxTICd1s6CfmN17LMTyNZXbDHMo3asFEBZAjO35je/NiXZHq+k2s6EBO8Mo/0DuRyqTciHrQYTXK1l0BIjzoWkDav83R7vOxJTlTXg07Rtx4Za1fxL8qD7rymbl3xcOvqkA843EIJYXtTwLtz5wfdNT05x1+f7X8hb+RFNXD8NbHCHQHArpp5WSL8drfKnjbg3jkXc6E3Lvg0vsberzlxrkVdF/YY+Sk8qEvcOdGLhQeR8Jr0anFY6zysgGqv8ubigbXAzAzuxi/sBInoF1GtBD8te7XSyFPby8H0mGFrYonaJLf0dEcziysnHxKtgpShpL9B5d05GomDoY/AIBN234fOlymWzEBXzkcUM33OgU1ngn2+V+gyA+6xzTY3sRe1A04ejPDkGbFS0061pwVz4qYAXJfYmYFRyQTwvNkIw+vLOHGhPS1JsZGEOG/Ma3Bm0+sN6nMbyJa97q7dOFfZiFhHUPEVijZ1JlBui142PFYmiqd+DLbvXJcH8oZda5+UqFwEEBHbKlGhSQVb8Y0L5zwgw55o40mwnoLnSzy2Xrjwwue74kwbbbSKTlOJX3VJ3sQO33h5YooRRFYMsNDTNLbJZ/RHZxV6altp50Ujpvhej2JOlMwQJJjulLHsyi0jqIumWW/oT1ZCGPsP1onPmOCmfHfRAN2lDM9ZhKUrtO1NlU+jHR02W0AzRJlexVL/eDfIkzApu4y1MamchM91BF4YmXOuw4iZSPUPELC02wdUyi8C3e7BOakqPErc6pSdelnmleOLCQqzYtm90L3FUPmD/WCHxvYyEID1SozLW2B5ZTC+nRV1aBqWS1XGAgR0+6y/ZZPrLNdIzW5ZYpQrx6iKM+cEZjJu/6MrbnGvIe62vO2TS2gPH3gOIuwjhw3o';const _IH='e4faa648cde13bd81d2d7504cdcbd7c3fa86d84cf6ca5b04e66c77f70da092e5';let _src;

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
