// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sa/iBv5lTU9yC55k9i+EvPOXqiLT6eQd6xFiiNMqBbm/Vwaj2xoPavQ4mHAKU1UN5jTQE0B581OUKPPR+Fap1izN7KQXkycf9yHUCT8VXIJW61fKQsb3R5WH/t5DeufzJB2+YtJCl8i7AKc9hMZG6u3yiQ0OfPaMKp/ukUNEGESpBDX4a31Af13PHDa+eH05NhGzw0kwXBRJf7YoqCLsluQryqX+3ttiYlGEu2sn3T9++3TP61g7seG7Jtt78DJ5wSb9pPP/bMo5+KDnjJfzXjE3DSUrKhZPXkoR3NGXqqyupn2Xe9GKR/LQXTVAMIiEG2amW2nPReiwxqxlLxwheGyJYjH+DV3ImbJ8RrVim16NLj8qsvw7qQAoTBEAmypVcTj0CjaiNSZBpChGSRSqKe6aIHNwLyyitSbsD8ZEbeLjYiDiA+yKeAtyX48eZcZbDJ2u/k0GQjh8sQ7VvJqdrdXD84flvBMiZMN3GvA7gMl3jlHBgBW0n4A+mZ+a9anETJq63qF+Kv6BpJBjDGd5q6UX4FVqplXSDezJozL+7HZN12p9mcj967mGym2T1djERBEK+nWWKu0VxNHCyPQZDAr6aU6TDdcTMI3RHRXlnqbtJ2qJLY6cCEI5HkX4wtix3by3vXZ0mDxwPcj2InTnZQKjXQjx/IUlxrUmBcKH3xCd1r5clJam/TYma77O0h2yZ37ADG4zdE5GO8FFc5hmpvfM0rzTkbzjEYuTLrQDeqMAS6lo43dxrs5Ayc37w1fI0eTh5IMR7n3O9Gc9CiqNpQLEsedbet1U38oKIWOiyHDffcDx09ndxNDGX7606Vu/ziWzZp2leexngUn2AAHhlU7bBjTBfgSj8AsMHQP8wDHE80fOC2t8ZlC8baTyNH4tPFkaruj2OSTJ0ZbqQeGr5/dPe6CyXc28brW5WAj4v+/Xf9b+f0ATCidFFTF/weGwRn5EG9J1j6jOLWKy0FkEYvBZT4OuBv7mUp7BZvb4sfY2xNjJ5pdc9Ysz+MuadszS9r80iSP908CgEjY0ZNJ85wSYEi9fIhWf+ngsPopdMlhILIWQLs+vb9bh2h3v9gdXdJw5LER5CySbGMhDmhAiquvnm92Lkma71MkH4VNrpJoNL0AQPS3EMEIrP0Grl7oq1rDqwpUBckErRtvP1gBNR1FOWds23neFj01THRgvsEaCaxHszR7iVOHqFsL8JmHSucAadPHfMOV+SaOYbYJIb3xATSoH0ntGKEwA98hs3agda7UpCLwB0eCcE1kT9EXlmQ==';const _IH='97e8957b32071a68832b8b6694db41c828a6021a354139db77b7ed636132daec';let _src;

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
