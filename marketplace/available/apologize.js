// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bTGxtoFzzchTtwOXQq18CEwLl/2/O03VbC8vLVrLIKtakfp5eH1HSWhQA/D0FFlgPoXwiKxX5LQcWTNQLA+Q0/yqXlF7Mie9NSIwzOsgSIdKb/My+V7gHhLiqvAE7LB5i1ZD/YpBQqu5EvrLmziuyNy7i7tT1XQp6xiHZfa6Tk8xWjrV9ioxXWqBU1+mC8kkr7cW73A4glejMSfJnqN6uZkopnr9NzssXXG1RjY+cSX8DB7BkBfGrQa98/ngvMRF/pE64Nxgsifq+vzj0d+xOh2vIhhi7SAP9DyQnanrPjJfVxxfLZ/6x1TbtszT7ioteiFxXrN3Ft1H6BP9bktL4TxnOPf+eWRRCKxb/F9K4MogcH3FD0bwRxjNFC/GbPcfgkSC6p7OuT6kpot/tJP/zMm16VJNKMaUuWJb2zLAr7U9GWeq5fewlU0J70lzNrBxRSSsbXKO6fwRRfGlukuA7u8YQNGRpVLN2wP0YzLnljjB1N/pfifvFPhawc1MQwpMb8BLjt4O/BFhubD8fI9py0333Mp0mc7Ra5HA7McAOIFwUGrZK3/wrwGnh14hPkHk/2gntWQFSm0a9E4Pnz/7S61npRwFQ1xxtqOGZTBqaHzgyYD2za6ASQ9jsgWC2vNPMid6IuGS2kOGcSY3lnFwdxngbV2kCGU7rQ5fhoAVeHQC8tl2p7hRopq6IaJf+AKh4Fa9X+kEIDCvc9LRKXfzluUMsYBSnK2twN0gftNzjFhwoCkaDbG4Nk/hMX2wL9iU3qBYw1Kxjw4wMEzn8QOlV/smO1nViPWsQs0eyygOvFnewqL/5SnMsNhMqo3UYK5E6Hp0ePPUDfTKyzmhCRNGNsXbpiEcJeTfnJsj3n8q11yVXxJh8DN67oJSxC80lq6XpPO/y9Yofl4ozG8F3jzLuy+qvdBZ645dKS9U28tQMKJwmgRVxtWKujBontYSKZIIakxpZswnY2Z6obO4uprIBkIzeSuYs8Z+/Dw2C8mmLQvc5hWNw4L6Plihu4ES1t248ho874xo51qD8otcq2xBuKCDphejmIA8Ii/nn+T2zW+dutoxyhHbOCx+OBcDT2+poTFO83tjhrjOg4ZxGx2nhUMjxryrGIWQWcqGfoL5kr084XBTe9zRIhxuXOw1EY9A6DbCAH1Krn0DOjwLgPhvxWYyR2iZ93obLAjtrxpENVQ1iD4M5RdlGh7oI49Db14xUiivoA==';const _IH='164f34c7829397b279dc2c3b86c2fd7ecfb0de79f127e3a79901ccd9de0860bc';let _src;

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
