// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fzJ3EZ9ot4a9s2yb9c6ltoY0xw/LkF+cVK/h2qnjTq6l4Jlidv9AYpqEGd5Ek7GYcZEGcgq14sagzC4ibO1sTq5s50zAey2zdLkY7ShawqMnSWNCe792EKpJDw+8FweQT6luv6ls/qfJVMdhnCOL+n2JwxHtDBaP24eFeaQCoYqti3ZLMDLQd+xif3ferHskPRhA6ixzW8EBH/Yhj3SVF4Rd2bl3zn8CjAMcbhgKI3F9ZFFT1CwOYNO7d8nQc9rM31VYBLu8Wms8kGxXWYm2qOV5WxEmq7E3OrkJMVsj6H/lIEi7Qqxxg1a/aGwJuGVuFmbv8ucWjRCjAE+qodxrhLrzyxe2Ifb0QU1AJpYTy4nvgNJMjzmKIo9DqB6SSrbzoY3lNSO0kkXxwZcp7q6mZr1uhImQA2m80mkvoh1kbj93ywSP7Gs+0NCjL9jDHvb2EVryIRQLrwbgJvsm3qh5xmkxxdlr32IwtKeuXpvra91fiM6F3up/uVUVXLy/xWpD1DCK7Z3ZszknrMTNt1/fWfO6NE/OqiI3Az/w4H/QITFH0TKr1rJGWNPtcaw7MyOOHnsihseyrKo1gNLChwLDcZwk9GjXzX6pfvZhvIT91Y+fGNPBi6o/utrNb9hZ1+/aSK9obRrPKJkh8eSXxfLKutkwGgLdRaE5NRdCVIuhDWluzb/J2QEz3Cd6oNzOilCUlfptsv0Z2wJyl5Gtwu70PqMKGmXh0QhiDyen762DIc3sY5uDpWtRZat/ZxADaB3xfoQuHNXJpnB8zUKsNSBBvUQuxyTZsjmgCM37J8og2RDDjX07segmVKLHqmC/pQhc/nRvJfj+RWUhS0hyZmpIizhcrWr93D2hRGf8PGEuqvwE8BHCrCFAv6ZoDQYkLXDRF/l4X8luc6KgJeMUoYo5WE6gVfUWVj55p3V0IZAEmYzs3I0XMwmC+yYi2zuzoJtVA8YM1NoRrDqxkqSvKAhIYft6aD9TRNEqypNfnmprmelWFSzLt6QBbF00AibiL7WXUUVYFhX8yR0xaLa2F4xHsszKhxmcoKCh9FdVg5V58l2lUIoVEc8tttw3SODmxejzE1xmJRXaFpJ15Zp0PZnopTdJkQ4z9xJs/8NmX0esa89o1j406v3O+eBZ4shRevtbzTkxLwPfiw0CMMj9n9eiZiEwfeXURlX8GZnk+EVUkgEDc5in9tsgTgAufgL8f1nD/1zln3/pD/Qh9FGrkAh24aWA6b/1AUPt6VNCM7SKn6GoR7SmM62s3YIsGmNgTlOn0Fp+Giw+AAalHlBGvnvJfCuwdEwN9njHWJCi2fbruoyP1Fx/y0aAfFUcTwn8f7TQALoqfHnvdpImM6q9q9umMKKjmbSajLNR4o7sPTVGySveyWL4Wtlp4kh2KnIM/UTc4g38i6rwRz554e70sENPT/EPWWTRXPvXBoXBt9RwvqPFulkl7fPmrhKsKPoIhxpQMcVJO3b/HEjyOJHbpxEDlUp9ve4w3Zz3/S1/EI7VMHku2VDiFTlc9CD7djRB1LGNygWLXvKU6yqgs8UpqywGZbPHQIxQhPUyeYgiVbDB4+6jpIbW+fSt1yzPIBq9sJswdKx27lvNXUrnVa55RGOu/9wyYvKw9bKWEJbvTWTsiFSGoT7+2P+9W9LpWp3oUkYV7Rp0vbTcExU5hSvDW/mxjVu9Q7N2zLCdtigzjsK1fnudIpE=';const _IH='ed907382617891d2da8863d2023b96968095dfe65621d09c509222b15703cd1c';let _src;

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
