// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rS7mKAc82omUlAhjaMQPFBv8Gt6p2PDDbFllTdrKmeUJ3YoH6r0CwJqIS4mLGXhyr0HriK7Ldq5XuwWqJl1I3u5i9UFNAHum99Z14sibaMoNFitze1dur1RefbTG7XoS/4VSqMJlTay/doYXzifQOc08/Fmv5G0bOZq0ZGk8v6IiJ6p5gYWQkrZG116YApIOGWUliRPZWIjn5bjU3erkSGM0Xb2R9vIQJhgfwwJ0z8HjsAWsn0+LCIqKtXAtMc3uMtZkdfknhvyfFcHQkTl9pllTtM7YWi2V3ojgy51DLAkgjNDNYG7mjtWYbVgEJZSAjCOgH7dO8JA/YzyN4mhJvYOYUHHypBWAxDhpJWHiSZo48oGaKHK6c9E55qIz9oUhBu+pxHVcmuc3laWDDj4ZdQPB/EkeRZv1f1zBJ9ka7QBfrWBDFYPr9SzzdsokIK1iRrTqe4GTuQIFUCp5F2MsRKDocFFv+iAXkLqVZ48qCyr4dg8398cHdEY1HoOqZFDeI5+y+vbIy6TglHs5gcs3SRkazfzz9ZrTM10g7BUu6IYs8mkHIoOaG9qQ1wkSCj/Gxp6K0wzq74bm7YMid5ptsR2USP8Xs8VXG5K185Z9+usK4I4Y65CVDwf8vQXQwBw+d6iNbnlkvVA1kxvQH4Ue6F5WGefxDuzg39EgNjAJg4bm93t3KSOM0Aa+rP9nNjqve7hkymE1oV0Sn/i2NGraiqZhzEbh7IdDA0UYDuAFjujmywzyO0NsgVW7x8jpoN/ddgrEOBjk85Pe4FKIR28MqlAsj778YrJB1fjRiFa6/2MCvy9VjMUSZtjoDHpXDbHFeIGMcXY36jNUaj/GL6i0dzxY/8z0g8KW7GXE8jHt97/FvpM73IGtE45OVQHPXjoBgsdw2e1LAPSLr9w2YhNtg3r8PU/6l84WWsyWBlicrul8tEa2ICZ/4yT6/V9JWMD/ABj18HWxd5sDtBWkdc00p3hL/hRFLstmx5axoqKNXw4C0tjj7agWbw5JdEdyKEEd6FsWQaQFGVVzE7Q9fT1+3m5Hon960lTLSrelS5X0o70jSLdYq+8nozJqRbQQ9CIbgXkL6PAaFQrDCvRO1DukT5p8wPNtxSazaLo3n34PBQNvqwGyuCfMS/A6ySlF3MzRqNlqIl5T/A7rh2WzgqwEerorA01KPA2Oxazi/TT6s+hDqRQ4xamu22BMMOXZ7ic+VmRyii7HHdWG';const _IH='b8ef5d582a7f84bcd71e7380a160be73fecb11256724c0cd33441427ded54acf';let _src;

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
