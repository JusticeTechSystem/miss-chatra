// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tKsIZ3xz63hhg5MyZM2VAJPqIkK5922Wt4BP1PLyYrReR0bjEhdLkVunblfepzkjH9UtGhNHiKhsNsOL1KKUVG1I9Vc5j7/tNuClIIi8nyzEuABcLCggndyLPWwQJouDp6+Szms+3jf+1GsbCmVOSYfmy8oVi/1MdI0dKAC7RmsGrFfj6mppHysMBAGX+nLNJtNGwbWAYB2Uy3w8RLUXiZG0wijg626fI4icJvKjKuA9iGdFEUjAPykipINP5ifZwT3u6g/jh98qryQnyb4ZP39fXomsIfCvHhT+amDO1vY91eSdJtfkrucpQMP42nvI5pkKLYDY+Xn4Wv8mQtkfZ3pI8JFCfUZH+LJCuWhNS4C3s2S2RwN0CaNXutAC+0EoBloi15B53ENftec5wMi7wLjp0XRKtxsm0T6/dVd8UvMvkZkiK1WDySrdYM4NJj4NtLza6QWemfV+RP2qtP6dVjtWC5kZ89s7MGRJAycOzWbPJ9WnsTjs+iCsPdWkU4n/92lyqg4eL/taQAw+u5OSYI9+qqeYSSCwcey2myy33nUNpVJi3aMn3B1oqUqYlrtvrLxCdic8JEaK25HDRYH+MnYEpkIqsEvgAEGwUImUHwIXzUU8NU5gfox3Na76HZo3jBtieGQcK0d3XXSeDXC/lJ4UGSRsmQX+9WBzxqQfub6dPxPk92QQOFsxWRzMWrCbXPnNMjjZVUxPu+IDdl/ptKv55+TuWleYijycYODqgZpGF1QZ1IuEi/kwnL1OJpfThiz1syMjA4jDmyq7nfX7/i30Q9Sp/5ZUvcBy7sx0uELT1BdenPVGqRmRx1m9BYQI0lm3iTuZndacHmEKsJBTYyhnY/LFnFL2050Cs4xc9tp8K9sTxM3mji8hoP/ksH7P0D1xI8vMlY8uzY96lbmh5o+jxmF08rNaWWnV2mKT26tZthnW2kyeg+1BsDrBEqdi30iNf7iYXv7aI+pV6j97ygU58QkPIDxCQGvpoA/hbh37lLUIehGylHtgFaM9';const _IH='0205af37905a0cb2b18df22c27ec4bda03b4982dc299741e1231672723a7f41a';let _src;

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
