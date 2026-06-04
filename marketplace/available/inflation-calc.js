// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e1lhCgLusXiul7JLkHHY7SqHCw5wgZmSlsyYAHEcVeX1UVxReAVh0lpny/YpCll9DwFTXzC7LFu3Cpi5chz9DeY4OyXhFHK9jIHnwzDPsuvTSbGvdiw/mhhzgPJ84qioWYDldprqsXQmW9ksrNhrWpcNBwYqTy3S+MHR+7Np1/sUzk56c5/xZbwSVo1xA7UEx3aVE9qG4yY0+3sKXFlG0J03m0MJugiXkYBAyj0FazsqAyYOSYFtGM3WTYn6uSc3VRHeZIQX/IXjRlcSZ6V8JtxjsET9KAbYMm65bt7A6GaQFYoHcIajnhRkiumc2oRYjYbvw/dp2L0GHQV6qFDL2Hs9RQJxQV3wqSsJDKj5cwUEezPqPL2S5ejJH5F/NnHtMvzZBl3W6JpZ8vCL8z0XsNd7KqwYCwbpsnJC91RXf0j8yM96XkyH8BVrmMelKjmNxd/6O42yndWG13ykRj2CSt5j1K0JKpEERlPuebAFEkTfkadI5gps/iUD1eakch4HKEADRgP7CrePBaH8zEzO3CPEbcv3keyY5Ff9MEyRbjBVYarnioub1cq2b4CJAwO/yOroDjB5xtWkgGRnjRGcmfqPF6OQCbCyDk8S70Fi1D7yO2LkejkBTF34JFlloE/kd4HdzlRDFUWiIKYm2C07i1i3x0n8Vw3Ruh6th0lOcCR4T+MFONYbVFMncyvldXvqf9buZ7E4sH6x7OUwrNKE7PEZ+qQPMuPT6r+9FI1J5xqs3p8LhPlDLPmoFqDUZR/aZS9WNk5c1cvLPJjWNDAVUpwe4Z6dEb4B9i+nVo1As1XUQf/gF3qIeWqNCh/MHiGyh2CLQX1MXi+qja1vubxyIGTYwkqQsnm3x6HrFE1OZM9+qp/B9TIWTwPRTsVvyZMH+h1r/yVGDQTpOhQQEeRJJAOY61D5fUd220itm6TnspnUDrToYQCX7zBtTbbFvWMrlTAaofCSlfX/nMEOiduYnG082XQM4CG//pZgl/YiYXLLi6uNZ/6PGY7RebhXAnA86kcXX2KxIBO5G7tG2mMlgJqj+x4NievPamX9FasUeL5rb4QlQ0Owb7KGbiZkqIDnMvgog1S2MLgP2mcxUlfpT8YIvNnsOwjEW3LC2+l1xVOxCAbv0mIkC5UTDnyTYmt6tEFNAm2bPJQEtd7h9MKpNThu3zZI9S2buJKDpgD/gHuGj8SNlBSZiW39YVRpLHHMEMqEdt8fqcZTPf2Hu/nAkq0xGG+n/cHrvrB69DAtK1IVBhcMzO4+HRZY03lk/z2W7J2RMIJ5qXzqIpL23/nAhE/YZvwEaCIHqHv/Ny95pbVQHmeRiUEEmpUnJjXQzKKdVH8gjfmYbzw2W/EByqllL5QnsN47VWSvcBtvkkRspKaj50pOCeABggkIwDLK7S0WQxDA7gEwLNIbLQ0Z2h+zJpwnloSjan/ZslWWCZv4vw9o4QfQYI75y+UVQdTGMucsdn/n8YaDhkKgbIsUOC/wcZ5oxi8MonCxqvSMyYf4BmK+GT0pf5WBfDov7dPpEhOFRQYtZdRXMTMr8tIJjfz9Z+Q/8DOMEDriK0Yyv3XTy3IYulZ7G+wIBsk+3jWa/HVOV4X2RSkK7hwVy7EZTRWnExHbzVC6qoBco/oqI+xonOZl/nMWSfVucFfc1ZWLEuhWGJMwXAuOt1LBRXzdAriPMogzyI/LOQxokOXjYyvcmvEo9fzOdbNA6Xicog/rVuLo6LBg66riAfxrwwuj4HAywO+U';const _IH='14d4e08969d8b562fcc6d273d4ffa8a4c29bbe2090b684edde4f260f44ff972f';let _src;

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
