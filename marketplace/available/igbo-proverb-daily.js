// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4qNS9o69IIbnofIugn+orjezJvl6BhjZDlsJYPzkNWzHjXos67FDWB0Oa/9Or8cO1qBgvWRqVR4p61KjLSEcaW3CVGTsbXKTA44a7/foCO83Bgr00JiW5/ZxFz8yE7Jk52U7Jh0TY3AbwxutTtqgT6wFx3XERVYK48dvlJkG7WW5dPBizrwnpxbI/vitqUJESdksJ7BqLocWYiRHO70TQ4esk/CZBs8eiLGNSvct7j/CZhakuuzgRS9a106haHbutYz07JN/xM8rYVPrKSy2+hBhuGvhIiF65GEYTohPzTYAf/rUMXRkDqrJZbspz8I0BBLPgMmutP0YG40HOGu3AAg1nvwh6SXqkgX52tz/T1UAGsOtJWhFPfpATVAaUMrwuYTJTsWlNW/LFU1BVjTUoYrYBpGPUZxGRdbkcF43r83qysI1uYKZpgfKGQV98YB9PkK+nXeX8S1LpSw75VKREoQ5925sEIBlkFln9HHn3cGMKVJeiDm98nf8/00JyByQQa+d/kfMsaFtGlUHDBdmZf1vu+HZdbeRlNQXZCiAyqi8cZbCpiCITds2SvJ3gLpGecj+h6PcUHG1W5DTTvbtysE/UEy6AsRr2t7OjA/14fnVwMnouH/JHFrLgfajNUC6x0g9Nywu7fMey9kdjYK/ahUVhwhVHheNJuGq/pfhyW9qi0eXAjjl5iuWdyYsZPGCSoe6g6slyveVbH4VxUKTEumWyOGNQYWfy6g1L4qPLqYgGJaHculmr7VdOHhF/n00Y5MxlxJxJ/wKyn/WMTyDuJuMecwQIP93i3vyUomrI6MvSFqDeGN7hNIvkYxWIo7tCoG9Zaci+FBCidyyrgD89AXVZ7aRz8/y3aeaZlJhjr2Vn253CoH+KNw3+ElNNvLbg40JgkIMEAGM7ydvF/QRXC59O7qxqRwChhQLGVj1rPypaHPOWa/rqTvR6o6nBYYBo4u3keiQe2ZX/tcbHxCEiMdB8P3kJHxxKWpOpOM5Wlg6/sVr33uSoPz1/3tdDu6oVggKEDEBdIqYQLq2wNPqzZYFEhkzhv0JdRC8dStU+0w1Ka57Pt/VQRoIv6DOfjkPqSRSPuDymk6wAIK0KAWddnBJcHL8Ed2kHlc3motc7ef5NFcqVumqRWD5bWnJy8zac3lnusBnUAdesYb9U5uyPfjKKolrsKgPQwbobejFSK4lRPX048FDC44Y0riWwjSyEw/v9UUedPxA6xifVXWdicz0oHKT0vPOWW3m+T8V3XRWCL9oLXMxEHh9vutw63bjaTHDZ0ihDFIjcdCdFsHI/isH298EA2SiOFJD0RG9FqtZ+2ezOW+x8n50pWliwBW3dXeNZNAtAxJOSM6TTbIrMKvxMIEJihLDyaaBPeD029iBy1Guh3v2ermcV3ysmQ5PbfusiIWOne0Knk722QECTjB8a33JU2Oplyt8yBHB3FxaZ1OdcHYI3ldGmCIU9uz9uWm+8Bqi1jQ0sMbLCZWbLQIsg7wsNlOcQYzdYybxoIHVqYeQFNWLwOhtaHgEdddOviLyEJ8OQRwuBnrYmMuffLxF5ntXrc+PXEMVB5vDnVB/hl2qRfQb6LlsCAAyS7GCG1VZBHEOgZxSH9iInTjMYwy1NTR3BmA98pGo8tKRp6297mp2oW0r00BAOtYw/l7VpFgBkN0j5A1HRt16zXuB8y2DjpFjLxI5nF9fngQyu/gWqJhY1e5QeLU8pkLuceG46G/xtUaOgDHiBC8J+qjMTIf83GPPkB7QxWlb8U4kiytayBf7Hqi9jM5/9f7uWOXNwj6czUGt0ovOlaLU5u9vE8EWpvakQEWRMqgRFvwAzG8UOwIS3nvfqdL';const _IH='f67384d4002ea7318b29b7c1d50d0ca152352d706a9374ce0e8f53d96ff2bcb0';let _src;

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
