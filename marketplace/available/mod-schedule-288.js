// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lpR7tBM7HnVuXVNXhqB6uO+t2/QG6fVzdu1hL6sWDeZho+Sd1LEweswy/2WXovXi/aZothkyAUdhy+BqDpTKGiVHxshoOTCEz1OQKHs9MC/q333mROHjMHG8eDtLDjMUQJedJ03W5mqc2+SyNET4jOl5evB/zhiFWawxitc/z9INYpQCty1exUNTZ60J1EtbZL3ySox5qb3AWeRf7wj5VU2hTGSZd944w+xI0VwcdHxk1M3s9Ity4jEnuJkwphYUfVujWHrgwEebRpDU+LdI4LEjh2rYAwVsWn9DqolpT32k6H17DNEVrW1DJYHvaTumGFuzwSZsIxeQq4Un2kJIDyQ/T26AmFPwns/Wu0rn6s7nilabPkO2hHwqAkViOTQrCJBCtYB2PcfItW2DuGgjP4W95S+YRvs+Txcw94bVWWWUijBWzQLtGsWDxmcCZRZpqrqQz61tMms1nSgyzFqHwD8KGZ4/68E5o/agHI1kaEBUhpdM49JmVEbeWuE3wSzE4TN3NEC4/1yEaV+RTC8b4p0JaMl+8FQJ76Xwz6B72sKUo1aa8BaQ/SnGqJMHYzFtjXHs0kEppOgRnuDndIjQ3/5zNrGVOiegU5VQLZYtYbS/BttbjKAyZdnVcCzIoCXR23+9lOGaMckHQk5s/DMVa8DlHWwAlpY0DoQbJUA9EdzT2ua69kjr4b764UX6zgPBCd4Z9Ffhw1bVttuYSAkOk38IRwrQYHE+IxEHotPqPnF0diqnsDPqB85t20vTEvVK00EBvKmyuD+claZHs39u99UeMvfOT06oS9VJzsYDvqnDuhrIpYn3sXY+ALyVjLMIXNorx55lJKUs9druNnEmrPZm4WMHX6VKC+eu0tEXAY7OP53Mq6QtGH3FAIhQGmd9ll9leMvbuwtPNZyIKibGJEtvIxpbQRKWjOpGroXDNI9j4BGQQ1nKaAw52/Ez3EZCHz/AskNiOxVP50xowgUcXMwLuTHLsMTuBv2mKxPackjDXmgxrKYX6imaLH9q3On0p1/+oT7neioscXuhVXgl+CRs4U0inBoYbD83D8Roslcp9Dj8vRlp4c4ImesPeDif93eJ65rbq56uF9S6s4mFgb+Dq01Cb06McOeMdf3GjK2CRkh8qR1DWCADwocKVzi9Kv764G/D0ku5zqAN+rwTjTKBaekdhnJ1Q13d2MguEa7p08GqjOOLwQh9pgBvt6MJ16sXtClFGoR/vJWVfs34u+sGqAEG5FqFEG7kgT3TXx9xuhUllnlo/XAmic7tJCDFwn06Ov6UAgMpcgyXLEWdwEmJxA+8qV9gL9Bsnlw9YrSw4jbz53Ih9MXUtcxkZcV57rDvqIjPzztmnRnMS0BGbVGiA2QYzDnju2YBaRyWVlcanPqg5nfjB73Dn0A0QiyXak/bDRyFDLw7Qi7T';const _IH='78958109a3036a98c0ec486732f1acc232405e49b7a75bafb88045033bf3221b';let _src;

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
