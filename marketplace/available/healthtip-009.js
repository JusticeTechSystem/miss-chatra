// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fX3SAiS2ioQFnJ1MDKdvt890AfZH0YGrTi+w8+Glg/B+6RLR71RVJ23XtN5nAVOapmsO6FCa9qrfuR+wCSxSUgOF2KQVA7DAQrTYMTXWodYAV+T7tYX2jZb8PuPhu1GmK+iRT5KtCbdxFK6GwJfX54Xuv/IBj4UvfFtcOZVKQ5po6LmhyN0fpYwUrrD3o/u0zZtJuNzsxdJpYcIBPIoyRsAPdlZQGNJvdvbWpNo3zHOPM25G6j4pCEQwzJSp7+qmpFgwzbzKVV5mnBmxiLLqMvbJEcf7Yrddgv+KAbsfVTamkpDT2NQTEIcx5dfwd1qiJH7MS+wxGEEP/Gjkj0G9VNrnfNCNl2+IpJsgT+Q+9o3c6zIqEdI+7YSV+NfwC1mPi2xwygSCaf5iItLc5ujSKqMfe+/DiWw4XmL1sqY3ad6JHXk95LJrwZTiF9sBbnJOR1LRiZdeyvaPFIYNeizGmB1PFEl2hesSXsu75NYp/3MnNdKJcvEYa22Wjx2uklyowYX4rJG3raYkNlpS+xZ5ymiSIfW8BinXQtrih8JfDR80yXEyjST/kbDXoB8UKRuiP7q+CzicQh28THqJSE35b9jYW/sm3NlUU03RVd5LJsDE8A1/L7MR9uFqqWS20V+AHtEKPdXnNYxKJyiTzobGzmPziMWhV22HObiJubH7fMYB9oXzez8UvpCBs3z3p4xgnEVQhhk9/bZg7xxyvk8k5MnleJMH4S1gK7phIxYBdZxAlyT4wjVvaMcpVwrZd0vcb0dPkDr3ep/Q3uEPHsELMgOTds1Atu5BSU9EY1wrNMDSo5x//EbUccDGvc3ipok1xT51EzLV/Rkru0lBrzWKF97EyITJfkUl6OcwtIeOHcdHzOb9gWXNntF+JlbMs7QzUKZ826x8lck6TpoHT7hxc4Qo7wSpGfV3Hni+uJwV147BD9WXJVBKog==';const _IH='3ca3b00eeb360536fbea7211373d565438ef7d09223dc6ba478d9d42b0b1f4af';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
