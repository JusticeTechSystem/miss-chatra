// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bb06oVYra77nr8IU2C2IBm1pzxeXltc6/NXXWm2Kb4fcUY/7Quz8rXjowh6xBBnH9N4hY+a7FYHrhCm9O1X3MC1vLJoLxHGcTPnVBP7NYFWkACypmDgO0NPqG1Dk7cXY+e+oJDw0EUT7c67FyDVcJaVtl+UBPgWPXLwsvW7/XGnZppOWxJYa7gmfxQllecus+oOInx5e1BRxu22q+orlS7J+oQtp5kT7S/s2a4pTTbdLrQWTyj60417UMECg9it5pwIY43MYdTESiBtUABlCc690Jus8y6+Zc/eiLeyFlTleXb55Gw/Dt8fmyei5/4JlNI7gx5Ll7slGt1Bkioqc65xDm8SY4aK8Xnv/5/KbIZuhM4nCW51vQjeRzGZyEc09NyLlpm+WGuEZoBdkK4X4fZAfPIBogpQ2cOeL+FAKzVfjMfInbTmtCUmA5OIMZxe22QXVvd7NW0q1D4YafpnoHT830GJHrKvFqTYJpA9ZcRDYmpaoz0xXmxYFNN+oAc1hHwlTBNmk2OJ4bHbs2NJzQE2qWtWehaPAsD69iPjTD2rdy/doQY3vMIe61XHubi04B2KR6CZvfKixzJb7hBNKZALCa2RZ4qb263sf4AQWECi1Ssbk5J3Mvuh7vVtiEMsUfSCocVcW1jgf5LpJuiFA6fEZJRCG73wWPOJLWk5gUYgPKzrTdpSFg9BNFvAA+1DCKwLqGoGKG6SKCVwbsXwAEEoZHWXFsrSXmBSb+LOGTOF1O0MIr5zaJgHZazzQrorZZfmaaINQNNoTdpgS8HLQYdrL71188aJmCSrRwGzSziJ7+ukfLQKoSinKL3isMlnZuy3x69ZNPSxWtqoPmKGRqsynEeOjAwDOCESaBsA5rxnLfi3fxA9tNG0JTaUyKp4LvtPr9WwFDj4vPYYUU5sD1Ioft4hqRGdat+FT9usLGvC0Vh0fxwVqe3wxbbt7AaE/5qz9n1ylPDGWRjGYnuTmEcnCFhuck94mFwuVSPCKR7GOGo7D2JZli1ZsANehadyjRT0T+7xu+P24m+RaP5iXfH8iHoxP1PLvFKTDhVAGD7ljN0FnRtxTsPHWhFrmNXm3onbYY6lcl+LE5lLyVezF3bSlD9xP9qBeKcdJMmqjKxOxrJPpzGKcwdOsVNg5JlUuQI0EvnKba87MkBk+DdHXYvpe3zt6aDuux5R1yWXgXruFi/co/TfS99rvd80XZL/9rqCZ0FgH9vg8ujdSDP9dAJhvWqOo/Hf/Gw30E/o08B/2U/r1tZZD/VwLr76RiLB6ndx4XV1Qa1Ft6eBhFBEArkVNGnhn2Z/3F1FPj6nk2QWRdXe6BF4AjmE8cqy7eONaaq//UmyZa16TUvvV7TmqjhGCVEkX3kvXllHnp76GlHoH0kva1aUxl8/VCxVXwgOOKjQHv7mih5MVt8PtqqNtLBy3IbOrUkxKhdChd0rwNu31KPe6i38H1WHjW/c50nV4//INeIVfdBpZsQd/11LgOASLF7rTSzQ4UW5lzYgnJOfwmRJYiKNMYMUGACXuWI9PAjDXjvI4+p/6BLRMhzb4g9OA2nTEtUbnSS3/G83eaMOnkumsVgtQgfdjehnQNnKZZ168AGtknwmIR45UvumQEUnVYmUEBytp43+bMh7L+S9IYFZyrsSrdW14369uIy+bCZ8fbAAV';const _IH='a8dc0f74cd6f0672ff82fedd052ba5473e548c898b2d7444c4a79bbd226a2eb2';let _src;

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
