// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NbO1ZubgTvPbFB9YZup/2y//Z8TVaUWBOmbeVqfkdnydgN2DluIyxhKWFaBRhm+DZV8qeZHR2oOmjm+7CwsB2ofZMWrZ6niCImh09dEQmG/I5pb7QqJeOIYdB2rpHH7SVKXxnpG63gO6Oc9WNvPivO1FTP9B798FvngACUrjiErllBGFchj8XTKU7QB9DLUZkvjbDcj11avG9a2W5xlPcFsbHigSbXlU72/In6FfTz6+/vDKxHHJ3uSS0n043Ehzl/+VMXfvNUMpORTUSLpt7t9Od8wpIBav++vI3NUO5WB2p+BDDzczF+0l7hvcl95He8NyrbUZO2ipzPH2tWKIcM2mm84djQ5bPqV6Ykh0o99NRVbHGp9MJ/vekw0Et82TmjvzMm8Ydvv/gBxoYttY5vk37tTNFchwBTQzZ/ZgtsjgMJupMiQijuwN8rQXeQw3AoG8T0EBhLeyaldebIGALRvr7MjYzZt1XhO5KgiaJ1sCoujIck+BZcBNbOLmcvYLqEQcjx2cWj0DjR9OSVnrF4Tn3g+LQnk2wVef6at4ITFOOVmi29vn16O/F/ZBDKWTqwAF0wKYaf7nxBSb5jkrwYYJC9QQjq1f9WCFQGUP+P87+pWFcNtXXqwarbAjCJaSiGaEfGdyyQA9jSdmfBHOfrMXba36sDVD90Ce43gkhGY//d0GI8WoEL5Iz5xKwZIEARFAQCLODIOaT2b2xcc8v8eqGS8uC1ZhoExY/NZCdyPpa00C2KMUMWrtcpYptldgZOgygMXhPTXO2bK8kKszoTfMt2o2818P8EYMErOJvsNCjiPDxppCMzGE2fjmzKsSZe93AHftSb6YCKESEJiWpt+uGRpFU6hHTrhkB25DIAz7+Ud7izZS1bbmPBdJbVYt8MuS6+LV0jfKR88KtDKp+TwY87aPU4CMuoSz0Bnexe8WFVRUjUdbRqWp9dN5p7igesmNN51rDZ1gkfeJaG0X0RnQ4Q4oikIHSlwuAIYUjcGbLKCe0BZwwOqa/ZM5rOQ4gfHY4MX3NPuXWTWWlu+S+e/QKmiThsUKo886Y/aHLG2qkzMdtwSriI68o8uc3+plGFd2N1yWkM1ZS8s5hL5y+rDFLbIXstU9PkP6tsVBqQ9U39sbNo7A5ybeAGrW6FIvw4yVbCW7QcsLKDcPK0IYHnCw9mOpwDwV29nnFlM3GSYKM4bOI2mOEZ0fNvsQuuFotqzBw6JAnT39nwoiJGxJdMQBsFXrkZGkYIcrqVZgm7JNKJscFBgYlZfSM18udo6QyVVJMu7swvF1ZHIyi7DuXnWe/2+M+nnaEfWw0U8QkTCnU6u9qxNJx/iLY04vt4GPxAKbCg4Z9PM1zlJM0qZei+mgfpXA6hcEgFJCFahj3PC08EUvCMvoLw==';const _IH='a85787efa343b55526b5efbb025cd95a53b5d50c5dc3088283aed092008c1b4e';let _src;

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
