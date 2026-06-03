// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='03bjOIly3yv4urEGHbyHqBinWs6g/caLCZBOg5MCAvkIbncbXMcGZXI0eYYUvIoXxjuIwlC4FcYGBiBYwakjaUrLdN8BMDn1ftNZaicbuZy/dj6kGRLrGk0kKIopvSJt4fXGGukbB8I8D6hSBTpKT9G9hKmcmhVETqmLOqUjzHvKJXPQtk3fyK4Wa9qBtXUboHWgKCXsdwmwmeAKE6CzYhp7lpO8rTQw1gzJv2OaZ73iYDgKa3x8T1mV2jamzCsa00ZdYhahRpV+QuumDaPPil5uztNIKT+gvYtCFggNkN+ks7fTGYTBQDhHV8hp3SMafCcw8BRfpHV/6DErGQ7BtBBzxy1y27ha9XwXWZ+P5JRpcCqOuGHDN/3k7DpnpQHahXNjZ2D0ihCTbX70Xf7lv9sq2NTKEC/Hx9YlZNIkCYcT3uFTHGZ9iHqX1KjmJmNwN0GBfQRTR0vK7Nk0q0Y+N2hNv3yuLa+Hq8U9i+BAnRVcp83o3SyBwzun8ADGuqK2k8/olHTABPX9l9mC9CMu/nTgQGGHrmaAUOfvxBCK8yB23wWIcGN2ofrB0azhBX60tyql1jUcu4CZ0FIG2cqYE2wUkKRuVxkuo92OlX6GH5qBPCo24xwbs4nxX81G8d0ko4/v0rT10pYXtyubun+QAhlWN14c9CMDarI7xtNmlPn8c3sM1ppxnbIGLQFfD2OO1V2a0poXJ0OrWNg=';const _IH='dc81bbdb5258f45cea435b0f874fc70654e8a5309e6359734d38a2b372bff4f8';let _src;

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
