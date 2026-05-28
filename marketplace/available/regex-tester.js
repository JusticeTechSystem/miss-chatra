// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BGB2DgW4pCSr7COaMJx7Ay7/XmgtE8DaP6Q95/5oUayi0dSNvhm8c/kr7U3r8VFfKlsUlq+Q5aj0Z2ylKigiu4NrmxsFoStWmdmd6oy0CgIbicu/Q731MVews5zNoX5mjF8it70Fx8bR3w/xk7SU1ARnqzB+hSxWLRHZPk7+eUi/zss0pTBRgswnwNnYZa+5Y1A8+kx8Yrc4LXBPBrKMnGBsZhr66VayC2hwimubau+u8F0AFRF9d1hW7JZs+s/jOU6YxdXmBBksO3jFS1fDsFhCUz5DGYdUyyhGphS0MZO9qjOrOb+RX4q+x1DEbGrs8Ff317gR4cbK31sYBSGHSpUd2awuyu4/NAj/KngyravtZZiu/2fR3jglMctEqgj+T7nDHvLwgsxMj2cYwdwGS2kBfmCrN/JVA4gmXAC9F/5gMsAd9nDOgkoYz6w/iLqCdWoRYWbUcIToYWr4JnB5f/13mCuqvYuGX/13455BjkyPzEAee5JYUAGk8fEIBtJfWJ/IDMZSWL0CcRxNwhd1ZL7OhgbkSMiLzZ9oav0L6gYdfDBQaCPlY0CO6oB1ykL30F6TCAz5Cc8xeHgdNPc7mHEnPwSPyA9sAJ/CY7CIeN+LuXgwJRJVcuyaei8UCRJYEs1DzYsU4reeigH/eBF/EpgJ9trAUrGNBu2vipnbO11NQpHZ+iielF8y96AwLhplDk9GkN53wfaXqdgPhrqHPViQI0Bd/CyPDR3XIxIMLxAHOP0gJGK3dL9hO50wCzIYqZRhaP9CfiYeVtjFr0FZOHxQdnNjBIPjNOaFZB6XjudMtaxYjMNtMs685K0GBkWXlycxnvxTruJLWO3kPTAiYR9PIf5vYyvxi263LOQsLZ3NzU7LTLCPA4QHBITadiszMIp4SYkjvFB4Zu4T36VrlectoRoJksy6YmIw9SrqEbmaCw7tm5beulBnaY3oL8kcMRpm6AusJWzSRE2gXlpEwBVxJk9uiI+t3yb+JgMunD3dbQTc6J0u/vY+GJO57tlDDFItBwXMrHa4dKEKDVZncq/SBEJhpKCvUM4E+tLrYpyVZvbKE4JUBGKmeF2rwf0oQjHNtbuj2W7vpu0tP5lmBLf9HhcxiZ6LVJ7AMZkKwSYBI7qIUVs6N93HVGvjKhgng2Sj3Ux8OzvlVtKULHPtAFPImfTt/hoH7n8wYC9cO4GQQ8ES4CMweh3YpOejpLQ8APHkI/8IqTD/nr3IN0BKNnKqvDDNsRN761ny/HltS2m7zUpVksXEpOAmHXySrD8ZAQmY8nhNW4+3uKbzG2Wz1VADCZxp5T1SYZG/j+/kb6oQAEgH1m5ZGG5DK/tbFYCvC7s/lk26Y1jxNYQ/wOEYyT8KwZ7seWOt6/xQzjywhQ==';const _IH='4dad743306a0260afb135125556511e617eea174011e039b6dcec7dd4fa07664';let _src;

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
