// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='27NTLwA7F0z/form1KIBnScmS6/S13kgs1mIILLLiA4vSQf9vogWAgowteLuQgNJBOrHKtVwwBxRQLh43aKqDRBvwEUEb7T3oy+ojlmVayGNslHetPeIQiZpAS1Os1F5Bf2BXQ5mHni3DcciFCX4Gws7bi0xZOQyg7ao3qRF8EN0DZiO2BnOsve4O0RYLMyzYemtE8Jf6S9g0rsJh6k1R73iDqmEWPePv9gE8b4a+k4jMkVVQmhAEvOl/W8RHzXu03Tl/UfFTKn+7y9QN/S5zNtAJS82xgqgNjVizt/mjlfUahOJwAs3oKfX+8P1y8BjquDOcgQxzcWmJqxpJ9kqVruD4Y97/wqFCaLFI5BSoQL1j+VQftJsSutywdGZNLTpz8rIRYyveKgoX3HMR3Ei8vadWfcj0MI0vRmMdlg3bchRXjYNf5P0B/C8F86pWVIAeS7Yrf+8ECT61bZRRE77TuRr9YpzBhNARJ8DhOKOXyk/LEqcAaIEShItNm4xBNiBbZ6OmoI02li5ih87l1K857DkNZvvOQKP74Flx2ne8DBOtQ9eLmAdTZE6Wvp91Np8px0gjMKvmYyOoQJyezTCRd5Sie7TCIwnn5OlQPjub25qoORbOO1uU0lcQiDW9ydga2MhDwmiAx2N74mtBqImDSqcy7eu9Sbt4X5vwh3kKrPl+P7+1NZmjLzzDuVuzQlqumVjDagXaD74cV0asdtrBt4RoFv8/br2MA3hwfJ7hoqBLjierYneTtm/4eDTyLDvV2YOwtEbfDLunIz2G5xJnxU+AN9GjKtzQMLedykonR5phuS9YacmyDOwMKKKoq6yB55y8q24pWMDO3vWDjeDEa9bAEpq/sy5j26lCt+dg+seLHTfYiluWNWzsy9MgeTRu0qE4HJXHTs/kn71vakvBaOutvTQxfuhWpMIKfI/Yr/TWsJ0knPOkdFZFHPQ+ioGzZnXCsgXo6AfIYO5CRcuthS1Lq1YdN+ndokaSFb7XiejuqgqfJKRh/GdPGcImtTGLblImXtHRXjVE3ZnnkqYRg2j7FrU6Ptp9h6VREml3bfm/qWBQrD6G+LkaMUHzLcpkISgrLJqyddRGCHsvC20DbteQWFKz7AE/cM1Sy/t4XI0oB2D2CR734qqkz49l7pvcH7PSlBr1xjGwMDMr1ZmcT/2mxEqQo/AFmDZL4OAMmJt00sOjus6W2AF3DUbmHMHUMW+';const _IH='4a3c4b1f043b040307c7042e9116cb90a0380a1f207ae2854b34ec975b69cebe';let _src;

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
