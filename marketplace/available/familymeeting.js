// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR7jCuCiwOJWpZj0Tl2t7ynHVsQvknLn7djtGCZBKtJO7Ufs/Tvz7nsuZDaOHSkMY2aI7CKGjIeLLAOrh/twZ0noY7ExaC8Ip4kEi4YchzuGNKlhwhhk+rb6hY7kPpva1NSECr4mFUr4dxTz+UP/X3nDfWUWsMYbY9yreobZ+l0pmaRHc475tRBJozJiAGCAg/sRMRE/6P+o4fIBaRjPezC5qzoSdEVlwz8YoN1Qv2WWOa14ESF6MGH0F2szp4rrorSBoRUp8z8PN9lgXmaWAAz7TByEdqFyfbdgpBqxzJGUehLFfXbTUiepGzXPjhiUR0qKQm/rekKw697g98Akm5kjy5Hn/xJf7dspwVqbKnV7Mhw5DImykKUdDQ9Id83Fllvg5H6/0xkp2qnzCROqQhFNhrV1DmUZXpmtpl5K/t/P8078M4CAvYS/V/gUT+oLY89QMgiTUBN/JP2dL7pgl3Qk0idMl5fWmK74ibNcpsYS3/LtZMwLI5dO0fPIq0bI9zYXalCeP3lzRS4fJ8oLzNvwbSBZcGBBhNHnVIGu8VYLJfj0ncT/j3Yn0PPZlboMs4oda7jSt2G3q6YcOI+m4zlLmo7AFIL7Lcj/McJlJMUjGEF8GJBc8jD2f/c+rR73TJzKc+T/IUH3ntac0AqycO6bys9inZ4DrB2WP5UhPMCmUltVaCl1ZxXjUs/lYb8RX+olvNJUoinGfY0lFbosx2AtI9mmzFlVDAZv4yt611qY0Zg67YBQweBaS4jjP5ITGncyIolGX0xz8tz80X5igFuHq3ePhUCG9hvxp+epBoujegKemtuOtmJZsIdUQRLdgnP0tcVqSLQte3tHSqjNJohcafqiaNhMq8tNrYtwt1U8vBwnuNrsCAY+TGztGPttX4xl+TUjmF1xjFjbBIqPvHvFzPDOWF+E25JscRKElJ07IzKC3KNSIR8GNcPGZKbTwdWY2+Y1PNC2usFIlw7b3oROXdKqCv8HrmcwK5bzETGyE+4gRAOAKTBrrOxaUBFagbH0Ak/gUJLaIiHvQuuZCl0LzesdZAQKFfTjpO3SnbCzRlkeoguKaTuim8ZRO0o5QNRKRtMNtWC4xjdwDVvWPOAQwZHyGTHbgapwXk0/gc3bF15hRj7wbaGSqQ8rGl0AGTV/q3DjoMcP1emCgn+aUdMbM+Yb23YMtJ4/8tdFvJGpzp1eiaoPXesnBRwz/By+um0Zhxbeq3xGMjo';const _IH='8fa5fa3e3ed66a8078e9115e354a3f696459493d8c685becdaed919e6a63c569';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
