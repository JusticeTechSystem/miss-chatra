// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7Uz27fh9O0BELEuildds7qYf40VbcS1JQkNHaebAocZIhRIhlnTNYM6ifNhxeJcspDv+kmn61Q/xm7rDo22ILbb+ApCLlm+yACyicng1YdRlVXwqDt4l/GlZGUi7dOafqUzpKAg47+BaYHsgLC9eOrHd6N8ygO3HxrTTVF/zVvxIW8DJRikEGQiZx3WRmujUVZYWOZeKG8UExV2vsyYUIoZYgTxInvJfnYouYaOIdIHRAHnJbD4TsvOaOXHlNJAt5bDxSt2dcsV7r52GNA2rWXuzVTzBilf6xC7FNSwhtOiYjqlncs+7enYzv26qc3N1w18VKJAqTOlWeLUL8/RUdyoKm2YsYFS0a/Ml+ODe1K9uNZTERLAg/FN76hsn6X6Igbw+RiAGk346KkPlbfi3UiztECQF2cyF6S/rRcJ8PnPEQdv4ePjJXVtyeSlnInod/xOCEcRlKzW4qY4wc4Q2WESqlYHzrlUesQeDWDmA/131NbK+akexzC+5T3QKg9BqH3awODRslUtTjrz8XKce3eRGlZIQeFoaveIwVhfcK/PcVVWVO0g/36Zpa1OXW+smXl7OQHgGr9MaG1FNu1byEhxqoFURrNjTmxf5k4C6pXpC1qGFXJqLCWdp2sUmzhVNohMXgDJTLlh/cZIsD1M1qm6CJGBTbXcz+f8N+pFXnjrBBpcNgKg/S8BAImQMQKOJ+2x+4KqVusHyuHY9dXRWh4ErogbfiBK27RckE71gFZdDSK3ee1xc2BNVqvtUby/U+YiWelIQ57/pc+jyB59aEcwud8cIsF6HX0PVxnz8+yfifHGbCzTGnHhJI4KeZ8odwHNuPOyibLXaLQ9cHZyb2tpgM2LowEQ7Pm5Y2xH8QwNiP6VAg5hR6hLGDJS+E232nSRPeW330I5VROgy4TwwStjjE06RZGtfxt3RSdv3WEwv5zssvlxbvdljzs4l9f8M5rJFN8kmlhmhDyjGqT6sTK8AKdXO2vyzX4eE39MtU55MQ44C2yRQtn7mDf2vJNVP4U=';const _IH='a90b5396d23af9503646e729315ff057799dc1fee28d6062f354d77e3c6a0b89';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
