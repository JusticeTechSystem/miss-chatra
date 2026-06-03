// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UBQzv7Fw28sV3ag6lGocCRNMVAwSaHNaHAbVM76JqS7xTwulTxskub0LRLMFkKSAdMbjTV4VhScnqwKv0wOsGoClVPXJ2rdAzH0WCNyjMYKlZRaW/KwUvcfHw60ti3Lv9UiUfdCK8kCeGSWu+eMx2zGPDDMALShck82uAZA51hIApWFBIpNmluUGJhj81qeQfx81rQppvoQiRXF+t1szAHq4n824rXW0vLK3qQ3vx74AvUzZIxO4ZTBeY/Vf13H6QyY9QjSdVS37aVqjv4fI2jpLHGivakoRBooKcI0hVObfJPAGqQSZ0N/c61/KNzANcwhFV8L//b1zvcOMpR/2ZulmXynWAxTR4lQ9Q9C/1uN+HeRTzKvS44rCLi5zhNqtA2fGFu+esEN58LEEgDTC0fJ/LAGcppk+I4V9gVQkekPL2wulYPFhZvQxKYg+pnOf71OVAjwteeliEPxdlluQt3RbchOxBLu4nXaN8IvVF6Y/pPSWZ41+NV8Y+Py97y5pgoNWGEDe6p5OlPNm9lp35ZsHsAWg7Mcuu7sZ+Tk6/JDtgx+S5mNL5r3h9msKeKe60u0VI1CVeWD07ro2wOnD8RtP0g91zsDJebQrLffFESoFSwydXwUfhbZBFCOkqQSw7g4EV+TqY7IvqG4M4iIrfABArWmYK5gd6KH5wjyQ9PeMeIvI2cdSMbbSCrPk0PDLtOvWdxtJSlBd+uEbz2eGU0oV2M/CzLUpO+VcJJBBFIt4eERKMvRasnBOBDz/cJBQkEyWVJKljLiL45mfhYV08MZMNoh0D9iybXudMNTjq034GOotobXL1CBganGw86H0d/ndkfT/zUi7N9D3qWSdFzKUeB6NREw/T0RvXXfEG6HhI2I9Oxwe1K7kuXOZwYHwmB3vA60wKDIGyrIcLlOSPlWTmn/OjBu5lvLxgN+uihYOqR3nu+IZflAD6EfA2i49S/KVqLCiK21Zxbi3AVfMKygZQ0PQF+65n5LBn2ZZohBtK+Zt9+hGY5Uu9FduqI6GOZF2gUOOwa0mayUn/1oU3owBkLONbVr6fhadVJEtP7rHZ6eshDd6ile59CQYFq5SOyMNmVSWswbuzfZ62ua6ye9QdFZJX7jkt2I5tX5ZQ0c3GLLkgkO5j8U1285SyxC8rOcuTraRok7PX8Uq2hI14YCbOyaZAf1ZqY6i95uSZrNr30ONXOHAANssBpyfgff/zo/JvmYd7Z75iq5fWrYdRe5uUc6db9h8kU3phZtQPil58hG80UxVBAYS3WPyxX0nIR42q+YQBAYMMWAVnUh/mzZptkBA3NPUAgw0yUr1IxfYLPoxi+X/MkILOozZrkGC44e8DGZdYR0FUQrhoHtnbX4/XPIHcJjY6A==';const _IH='da9935ac50fac690fba6f050c68b8c1abf6c48d357252cfe5bb93c4ef16658bf';let _src;

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
