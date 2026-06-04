// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vvB6peiuJsXR8b3+lSLONUXXCk05JC2K54NfsdJ/6gIKIOoBGnXQPZw6P647WeJXyP67xO93YBD0VGEFssamzlJZ976borsC1RZv/kg/nnN8GnWDYYlhcBJjQfHS+p7xMZHRkEF24tewOtCHyWBOb3nSaFIQUwgeDhyyfdJmUhZN8XrQ43RC0MQHU1Z5PvvKDPam5bHicvkYclH/YJSr0H7KiIhFocPLEGodEOT13nx4Sg2htxRrU0XdU3pLVUuRdGbUip46nmvFWvhG82VGFGoIbHhH/JqevB5MuwJSNYGq76o9CpcHAe2kayR3LAPE7PPMj/YMZ+HQAshlL+Rq9XoeC0oRRKnoG6Ipmv88TNx0f1aYlbirwOIgSqhrwf+uoIy5oDloAHfkZn+IkqlJUdbwk3flBHONmY2hy2rln1UtQCbsBfxCCaMYk7dzgd/zfvubkehKpbPzNIvwtW4OinPHzFIH4Jf7o6kqbLezloIEJV0qVPsB27EhZII0s4unI2zE/Shb/cxF+UB1HdC8aG7I4URnEpt8VfIVyXyd2nSiSln0NJI7B8IRdJJ4GFEO9ej2YIY/2QWGDJKzybfI7l8VCeEmcXVSM8aI8flnjAxqUNgG0yy8ZJnGxxvnl4nefGJ122ncmeYGuJc7LYj3LP1Y5Rfy7jzLYJQY0g3RvgrQiHFfQyvwAq3nHOHfvK1DmLsgh6knCf72Rnqv4y0F7mkKdldonNrCo0iu6edTAqw9XyI=';const _IH='f90a387fe2ca38eaa8f49a4b5d0cfa4dd97c506500d33c4d4d25474f5c78eb07';let _src;

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
