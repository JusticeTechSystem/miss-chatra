// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5vaA86XwKZaOQm5gBoDvnacap3mGnNiO5+tBGwuCo6opY9hhip+xvlNTkjK9V4M4+fb1ilp+mm8FEyiqc3kwhlqf6H4zEHJkNHGXZ4KnRLh1MlbXz1QW3ImdogqicpjHDoCD/9dNBPSnZoKGdnPx4QXqL3ikAYfmZ4Fg0RGU9fNOrHUKThdZegm4pljIKzFsCac3CdeVnRnNVIcehimVTY6UDXBo40HgFvKiyOjyxdufA1sh2f0nu9kSHaurxChR08SF74RiVAc2NRiGDoRiy04aRUSg0kO4Zp9fT5veV44jCZMf/XyYM84ovcxUSVSkXfDD+QVSJbQzu3JM+jcUy2xA847f39+zACSTp3cxEbM6bzVI/zrjxR2TMO6Sz9UACIz1hvFtd8I5LT0brjCJtxdj2tJR9Pj5rDX+7/lL1XOjANGrXdZ68Wab8PVouh6VmnyFoYUpVSIRdgTodrdO35cMGIZSvjcdcvmAcRKWOOT+tvXk1CEbqYXO7M3TDUz4DtRbdeilrwgd+3iD+TxTsusWhWnH9rrAcKXvLIV8a3J2xXo7PypvZmwSKGfhsf2+z8N9Zqx01POCDCHo9fLQXba7BUAFRznyEEh8PG7lfb/fNMklROTbKlm1/e96CuCAZWKcdKn+kfgx3pN9g+zeN7wNUcnrCpJNqxjQ+2QqpqgAqM3/O6TuS9plEmb4ORnGFstc0r7FjJ3MS2N4jcABFuq8myNOzazuOJ32YYL/GvxuFVS6pZbWOUvR6bwmpxQzgvcdmYdrrPGec7xM326FNZ5ZQz0+SFL/YUk030zp1/y6jClelka+IrJTe4I2+pvDXC5rtwq6a8q3WpPWHySdeyFIYk0BETsJnjUppcOHvQkM2wd6DuHQima6RPiRdBDIHiessJKbFRttQHUcKClGWhcQ/kD9b2d5Sy0oZZR03YHQAN/RZVMNf5Lif+rXz0vQLBDKB9qWtXYApgIyJpLpJJyBRL42+O6UyholSWbsTAYJezqy18lr1SiZ9nsBBpCXVhi0HUDhuiIRWhfkXG5Yxbbww==';const _IH='400ee32183e513cbb14313e92e2a6b211e50927cef142c106c4297daa869074c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
