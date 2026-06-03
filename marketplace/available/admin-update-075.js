// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OhIZVfVkVALSJ+KE9coYmVAq4TVOY9Wdh9aJJrB+cn8iqM2ORjpUzZE4U3+KTtqbhXp4lMtOYaqtYuZwqW4o6lhRCMvLG0qpYetlYNKvddQnsM8WHPioKUtKyHbNYv0GFXkEGeBqGvALE8oYIKD53lkYElshBdgZZQqxDMyQYOpX5tkcSnNlDziEitcXqsWeXyXZNxopyKrA7iFG3AyHOj0xYp2TgO4iK8NvpfYK9LerH9ph4qg7DicjEFI6uncmLpVVNyzhZn6kjvVESW0R2lDKRKZhTCz2vgmJgxj5L2Gnxw0G/yvS14VHSw7vW/FJtdmFh/XzeMR173sglGQ5oQt7n3SPbppUKHLLVoEyOPgTxKdqTG9E/p77MsZWTv3LbHI9Mnc65nAb7w4KPKef8P+EuSAyWwIg8kIdfaeiPYTShsUuuc4HJcAIEruxtJ/Ls/vhrFRC3O9LNf7YqR4BeQ6rJEDpqqwTW4NL3rj1NqoVR9Rcogs1lHaDQddjDtIPyXSPh1N5A3u/VmiEQ2S+OxJQq32BCsJEVBulOuwNYMgekx4mfR+dODqR7DW3g0tUy9kX5NMCOYtKKrxFuMPtnb1dirHKQDl+TWPk7uvB+SuvA10VBqN8ZAmmhh4tbvapYP9oqDC1TbbxM+46NO8N5CPzjp3Ym7pnlK00XkDvpdiy2nYRmMKbR2TQQHxU0Ko1L8ZgGlbsFcPZCc/Q6SbdLwcGWQhsCxtbOfLhe4Y0xIn/ZYBEE7X8oHAYKyfCOGOqMX+c8yDZSB5xWy2BsE8+9ZGYXXGFaLCdPCtchNiXJnV0Jt5vENiLHU/mHu9vN02bf5UjZ0PUNG1oq+eSsyzi5n/V0PnmiAo47vZDlCG8pUIhHaZ7JDYX9RDL6zXLhBGq9gcbL1c0XCLquoM1QtrXIOgmhrOVKQpw/GdVLiB/MfF+rPhBe732Jv9bCoBcsrW6PSeIRGgXWb5nvdH88n5GDPIA0h1r1w4lvBm0PXWe6e/jxK90mtIXXuSmfPzT';const _IH='031077468ab175a992b27bd32c98e761ae0e03c1dc5752a199eac844147904af';let _src;

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
