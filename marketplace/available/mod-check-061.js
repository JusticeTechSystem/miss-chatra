// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UxJ0IAByTIj3Tffke64nZUKW9O5twhxRwpcY5lUhA3cxin6Xf0JccBbXpyfU8S0lb+coz5eyK/raWiC9XU9aTKlcnUiTF/v2ZuFeclffPQ23uxGZmFjQY8xfPaRMhqOnUkBuy7dlekVOlk7tcIq1oyUUte+CQAY63CNzG95fvHsMVN+GXl5VshbYDu7foaxavlh5QgChs688yxo9HmnwrgqfUH2Yo8bWqkway90ER9doO00t80vQvv/ItkK8V+sqNWy2eQ27aGEbHqgYOGuYlXZd6ubIEJuUaPWqJ1RQHQBqRVcTGH2hBdMIMIbKIfRXbMFFMG/hBZa5Q11x1LquJrOCJeyT3dF1VBWjK3lYX2sGCyrlPjZ0eTos+gM+m5QcOLSH2kIGTQCsyqW+6344ivYMFLDHY9qGSLGAl97SsyhquRA4mZq97gJ+4QFDx88OsYdaInIouNGF9Dw0QlOw5SsdUc+S765nYB6UVum3rnMGR689W9zCvqgGk3Rt4Nlz08fV/qcyHnSGgJZCa/IJrMr16rjTYHIi1CKBTTw37LMrY1mZ0YHPakXxIRdqnc56UaAdo9dGF3gBpih2GZOymhOibH6tuQVSdnOPe/H+jSSrDsw7O69cX4PALYzvFdPI++u1D1oZG19OBuJg+lYsYEjiMXl+3XldiJklEfLTH1O7d5NMN0OyUohdXR8WOJXmYo5PhFwzsN/rEorE0J+pO/c294Pq5rQtsnQFnnJCFbyEkZZ+OPcq4iaqM1KeW76vSlC1uL7LgjsTSJYoAAXowZPvivWbV8upFEkoPrKAQwxTuYWUiAa/R7fUZZd9gT9KkwySSAkM5Tled0DLKhrqWYAv3gv7xHDgZRbl5xMtbpTsoP57M+sb9aruPJKInEbBuA3zxiLvEDL7J9QgUxi4a2dvM/7xkj/5zspN5bRygjGeon0a3PZqmTl/A2/MFEaZOsGE5NyBjjwTN9eG5xdZYr9J6J8aH+8vxtx6LS94GHCGsC20HUS9BlYAtj5nHPkOxv+IkMIUgvJMK6lm1iSECYmPYUDjpfcSmkHh/GOIiOIy9jM593cOpLFVGcEHliLuY8RR+qna68USLUw2uCsmrxckx/j+iVEhODpGMG8RE/lawRTRuEq75AJN1RJMhb4wjhCseeUwXpYOxBTdS5gV9BFlJ0iXm0G0EyKVXuvg3QlherhKU3q2SP71CHvuYspB+KSxH6AppnJS82t5rDgm6nb80KYjLryf6Z3ZKFalH3W4VjXpP7iVhBETHFHj+gxUsB2aQRPk9ZXIunJazguEXtW49xS7BiRClkIa04OriwEQcXiaAjxZ3YvYSmNFJn0KVAvbkx98EUb1L8ukRLVaMNxq1OWINHgNnQ==';const _IH='4d71c14548fcff6ddce16882a2aa5abf0354f190f1417513ea66a7815e3589a1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
