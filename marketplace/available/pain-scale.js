// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VVoP4oGRHikp0rjmigfk6nXO0pKeuU2Um49eatiKxDpcwPa832aNiO/E1/4aaONZkXczrrFfL57BvxtHtferw4mIYNiYvGyGaMPQOGabtwR4Uwp+E6545mAQyuAl4dvwABiZpzn9OWl1iCxbKkQhhuTPL66bcOzVIAKH/jFnszQUktgsfiAIpby7DeBkNjq9dKDg7VBrfxKYy8aWt0HlzYTb3HPlx9gCiydUhhCW17YTyFlpmnDLK3sIgjZbYVi2PgLryL+K5nntpLoM5p3LR3LpU+o3YCad737CocLHSXMRzy60C00Eq0puRruxvDDfJnvgxZ9kaOZWzE8NzHoOCh+S5aHMoFLflJdZi/093jKtdC3l+6tdfFv3hmmSoVV4knCx6A4acNB/UFH8VCgGWEB/lnLhk0cdwqII/C1vMmhj/XdZnlxFrRiVLNEawCh6PzYtfNVFMM/zkkVfUiLnoF8mb8MVtAW/h4GHqeQQBO/qH1FUM81E/Q7lpkgjqInFrhjv9Ml8HbMo6LKiFxoHHWfnyD4iQPDJxDzQZ98vrHXlvDJb7CmpT75gFckaX41Qx9amAsf4NnnymAVcPis//3PP8KcS240ouFyiZIPPxfS+3H4RJZcX9WHORuIik2UYsR3NVYSJq9rRXYJSYIrrMDFa/Z/boUa5+HaTo/ApgESxiaCuZvlg3Sv+VhFxR4C6wQ0sJLV5gLbKK/S7DTut6vhAEoryufvOcYT5s6/5tL7T9PYwllaTtAvizLU1H6JxFubCv42K8MrxFClZmjTlJqvUhY0yQMqdKCyjdm5Buf8Rra9WeUbSQtpEFyLxJtR4IITSy+aJyeTVthntPgVZWcS8+SysWpXg72oYeieuWBDxz/2xvgCbqHjYoAwb+L37Dks+zrU2SO/K4sZGvJUWDVARCS4uWRx58j4//r7aq0kFKeb/ZS+2+mvU/KPco51tRQqcV2X/bdSBBN2YF/uekhfuSQdCi+xZvSbhrwa/vhtOZvZ5LSLmgZSgiKJ5QtzlLhFDOMFk3z4WIxNZE7ayaWSId9ydN9/lMciSkzRL3ecKpfjHqZM/QNTHJKQZciqG0UNcHXls6MEB2hHYuuMwDBBHxqTdOqtYw4dcCu3bUCsQjHV5DNRIK9ISFnb8xXJa586CNmos0dcBjpPgD6jz9YIeJUq3UgP8aqTKqLy/wYh3Dx2owlROVFxWFUzDkh+ijlEKc9/NS8uPbkfT7rFZihKltJkg35fqJGyALH8zSeIeQSYzziRmt8ShP3wK84HG6q8ZeqXM8J4CrxePLmcdIkGw8DTdGJ6jYjFkXFtTOjndxlCR/8Gp/d8x1nsBkdnvbg3lXh5VVAmkonnzhEIAuGzDJXGPClczMuKXIKI4jagSaFewgGxDEaXTrr6MUN42bc41xj5W2P+HlltLYC6us2GxwTFK86ywEZ/TAbS+nB1Y8N6X/+DEkNq9rYL6YNcgRF49OHRYoraI5G5aWZNQeSrSi1SUkmpUrntmwrG223qZZw4IUsVY5eemNS5UgSKdLLdU09KG4yxtsTib4IRjV5JcQ4YRysRIMjghqAdxL4ZoJrpJlrI5IM8qZtAe210PbLcxZjEO7eCuLW4YEqi18i9Ra60YkUi0lnqc6iZT/kiWj/ESRqZ7PepZXuSKiAWFtUAEM9Ew61vNLsKLjVj/fY3j8oAnKv/5QbpG2L50VQVvW4I=';const _IH='72dacd6df8895cf2244d3277f38d1a810e84d67f4b7be5585d3412611a344f8c';let _src;

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
