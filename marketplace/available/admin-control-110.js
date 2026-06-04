// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i9BPYMfhkFMjIthknqthWtBNQMTW6YMjjjKtzLLeBI4GI4zb6zjk8XY9m/dSb+yX2Z4LzL7yqCiNj5b7gfDTZ1J/S71LlkQFIL3AuA/oYEWvQLWtcX0U8Rl+bGnWRoZaC1yBGdvbvxFNgQqDtYcDaEzKdPOuK+Zxx/tEuTjJ1Ws8cJ6boz0XwZ00kXL8h1aOouSiiOdsfS+rfc2HlblAX8WKYB+j+k+j/L//9UGl3eoMxByys/iBqv6iBl+E/6jXDJJl6AaaALAgnjAqmXZmTGzL6UmXQR0KwlqBbPjFkC6p100KTgYwfQ+8p0G6NqJoED3OtuQZotNLBfrxMmmJLpTu6fRTeAAWQTXyeUHrBhHQiNrCRx+lWsA7twE/jt0ywywYSBYfrn4a0U90amn4SPGgI8A6q7mROnjGnoClujRBR1mpN6PSSWrQQRqjLRyYaGfBIfSTyUkebVNp+3BUjY95FpfCl4cQUD1Ztrp6mTyd+SHxy3JK3ey3k0xknp47C0E/9Mct9YyEASP7xpxRVbFFh+/lgiGuSI0OSN4ne5LvU1gOMT2bgV732f75kT+sU6S/v0HKgMdzyh/7acRDR1AFExLOqXmBmGU1vUiHXYaIIpP2Auz2bvZNiB0y6hZFIvmAjj1BKawmkhsyvXNkPRQiHheMOggEsjoPppG5wuNf/zOrTVE7OZitbx9BlqSVAQslhlHhJTGD/VOiC+JRlPrDQxaCSUeWaKIwFfcUodRyHtW3nVfVilLAk1hq5N6P6zMI0jCSW04kez4XMdjxOdDdJKrwSKndITbDa+i1bOwiUYSofdgFW9WODyEdmACbR5UG483pFYAKXw/2RKHaRmjejTb1pTORR1rIPXyxnzuaqHfad31xAvN0T8+BmDbbYb/0aNBt5gKj8j+gh1rJ46DyNLLUL8TTxtlTkqWEnj2B3pZ4lGGV6TVAHrRZ/4kBO1MyeR/2MHioDlZSeVmzvL1SRQLHuJlcd4/fTdkNueYqshONKRIfTncAvQB3QCjT+2ZgAhO2o5o=';const _IH='52f06ecfadd2d5079d141bae0c4418f320159acf364cfdf99f1c769dede7c362';let _src;

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
