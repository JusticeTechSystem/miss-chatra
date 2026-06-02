// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gUUBnnLCAV4Vw+H6SYf3RFtuGmMQUOIXvnAws6h/0CZfLaG9osw1wHlvWID57DaKfGycniqNEDqCp9UkfFhMgQ4dtGSzFtMWNQbYKkQ6w1ADVIHBBAr/XGqwSCqTuLhhKbv3Ogf5Yc5BojRqZddpVzEfKoodKKlvENgSkow2hqjOm4AV8e3a9Z1PpFjOYVwwHeGUpmDjC2UNasI1vrCDyUoLXDglyK6usYzYMHS+Rlvbrdxsz0PXE++qv8ryCaZ7fysTaQkikjZIlk1aQ9OQ+gY+afmyjfvXTB1EhPLdswe9EoV66Ih0pNaiAA76FI3i32ykojC071MyFTIDgkhJMT1HwaWvlgXskVw5uOyTCww2j7CLOz1wKIFFLMHFhBqA27kQPCwTSBsdk5A1EDh0rPPqrr2kJdbN32yC2b4duNq4XCqExfGU3IZc/YimPTG4sa2VsGxvOMmNsjtq0ehGGxvt9kajerqpHEQBRuQ7NIi2WxfeWyzgvIVkwp4L1fmbII9sP8wOEaMafQUCKLkZUbz1NLEvyZgBWuUdtylBVb3jXg+e0kK+eUN2BwxSfsRdgXLLVR5SmI6CYJZaToKFqEsI4JoWluNNt2YaBHbIj4K3LK51BXsbsfmxhx0yojzBrhXrCbS22gKqhVGIJxkmrDXaQNvmEKqe+fJeovm26hNI+/lUpNOE1aGTkOMFewpBsx8CpXhCezrUgR+3DuZH+XKO8BxP0I3deGCjWcE4qXWkH4S5j7yiL1dGgMgDmsjHQoh7Dhg/j554VbG7g1l4yXZP86JGZVyAXWvzTKI+tpr1Af2Fxoah+0zvXKcWPN01jub4UgpoIElVh7JkK9kbLy5dXlWgLPy8pm186G1H8xL2YFCh2FpZGA/m2FgNVEFuKBxj2tuIunPWKLcvyKWvGEG1PLXQ6VT/iHKkdHDuNEerqgOhm2uGIFiTJyUr7s8JnTYGnLgUIslS9gHrJgY+QVAnqFo2w+8h1RO0Cwfi4j1r+9EBuNi05jTVtj06CNc+CGK6HTglhoOrgg/j5VKX7MpVEg5RDVi+xaaNYE2MRyTzIw5SqLritb4aTAS7+wyIe7Y3KLLVAsuXrF5YHcPHC8eKfghwADgtixrbu+daKORqzEqjLHY1ztlPrAwRouoBUNG1k7z9RkO3tJCMIRg0HB4Q4MbkWlbylQbJ8DYMqKrNvYnys0FzjX3ATIuqQ94SWd6+5AmiZvHFKVWq5+9QJ0sMySMA/fOx/jFH9vDdgVQtqIY42Bpbho3RxsSwhR0rLHOV2Q7c3Elt0WUFGWkzj20Kx0dgtTewXu6g+CTFR+qOoR1Xll3IiuQCgtHeEjgg9Q0hhfwlMO39AWi9pBDuH/ffDadK4Gjzrg==';const _IH='8a265e1761a3f122e669121b592b580547ac88ec5cefe130ab57d181db9c87b8';let _src;

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
