// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3Qs2+I+jzmycQZuCnheg7H1hwOe3gC5rPmMm2M9od7YG3QuSzABQvTGku4gcAk42qh+59VAcNGofUhMqheUfymUbPtVshyuk+3z3afPTVPx+GnB/fmlMdC/AhsLWMTtyGkETN1j2sQVdsknB6EyDL0T/EYqDO03Q75us/CgFbPjpJ5XP9hjf/N/IN+gJouzPP0Flu489L9FkkVGOyGtpK8EyOqsPYWoKztzP0bR6vntPLcmFebdqcfHx7nAPWMVn/YhdOyOB+yAA6yh2vKcC37TVGe70/rosRRnkKojJO2HUi9gynazE0HqN3s/WnS035WGdwdbIkhYD/6j62Asdpj5+ss6i7UYoV/Tt7ODIh6TqZZLSAAIfaoV/PtSkB7DCSL25H7QuhMeKYozFHdeq7UBG7BT++AmQ++ng9XEqnFjeGbQmy5la4Cwbadi7wQzKqSlDxBq4XIKmWvogye2617Eoexf6NdwWb9tl4KQbupuZLvxyGSfNHrI31UsWH6Uge10RvNpz13P9jiVNUpgwrY6SMhQNtLVwvLdVSURYxE52r8SzC7BE7uvV02pEEAUzUeO1iVACIChdZKSm/z+Ar5lKiBqo4581erYIVqhsUbUzDbFa6cBSuG3WZ4BCi8sv1uN3ElHeIiNM0lhjt7jdLbNcAdOsZhu9YsDMMAyz5BkzBcdaL/bUkJECJyU/nJAPa+VkgnianrSk8Ng2ncBDTG1fiCs9FioTgC0u2KxCA76pSU7UZ0JJO7zxV6oGNPCB6uX4YGPAoG+aQANKy5Oha/sc2bb3kAB7OruV+aMWJrD/1VMlsQPLD9JWCRF+tvc9ltTmNkpyoL0cG6YlvOi9drdLmNm2NVQYRKkuB8aD4i+4PDHYln0j/gu230GK8iedJG4rjXoyzSa736EnpbilT4JwGIDRfP8LAdOD8GOZXe0d9wwoAfSNyuJtquFxe2VnjkL3g1ZEwIrdC3t8i/CGsCjRH7ozGpltXi3Hd0+6coUbSqreR2GGwxl7FXuvngxiAtCjSJf5iY0ekYsWVAV5IksSTQ5IGZ1wdqH9UGxscOLrLbRcu3/7P7Y9CzBLAzbFJKjmsZfMI3iVayOQhq/8zh6FoFnkklBrk+XPaCVN8sHOX7RgH5Uh5Aaz2jy4wnph8FnH2fz9ocXvxVlhdE1Wd/xNLj8F1tYXHdF0XDcZ2P8hWIs0ivhUv6gxO9mMYdC6ff2fIyiXyphYltjLspt8SMY200RHNDsFIKSZWhJcVWczyP8fXiWHd3ttkYM1IYhvovciwPpm+ypvfAapCC1mW9yVXilMU+qyDdwOwRmJZhzqKPOISg4Gsq7r4ykXF6LIiGWRJEnB1nhyTY5ud0EEEIZFR9caAehNJg==';const _IH='68959319328cc122250703ae87411af44a4cec86554af316b654e6bb529941fa';let _src;

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
