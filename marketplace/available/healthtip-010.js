// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p1MjjH55zspmfNogl15WfUsC4MlUPPFFycUclUvFVco33c8IXS6YNB7Jch26kjKu+LaZ7jo95oy6Kg0nqIpE9+t+3oZujMREKt4VsD7sdRxlE/YfvCHN90xPKFch5pkGFk57dKHz8HsYLWWD1OZNUL9v3AsKlWSU9fC42iYQyoi7k3ftqFJ1Ph7jgP5gM+z98OV4XCRkONT/SDdJL8Tm4yuUa2di5IurTN0PCsTbzrTDcpdNwPI1n7kTcV1haLs8DrLoXOq2geGJk4ieMRLeTwzbUMHCDzPqHnyJxQ0+d67p5DDAFByiYqL2vgSpOaJ1JQTrBXUzpZDaiyGDUjk48GdYFM5SXubVqkxPUIUEYAPbnBDuYDIikVyj7DpyoJ0zPBhmT+rvLOjKA9BLc+xGv1IYKTz8AmGlvLmqgz2I6Sco4cQz14yqa4bsVSARAljDX85vuwZD7NzoH0qy2g1PhY9ra5vDrIWV6wZOmWFv9n4EFaYhwJeioyEDBgMw8+fMwtqelPXTwktwNseqC5n5Fyd6gTbiKIQea6BIjmq1M7zlrYcvXuuVhS7fOGWP+uAG6tZoDJcuVF4yJBgNSFTzYXJ4IFxRjyl4+4qnSghBUxG9/FOZKCg+h2eIvlCasdZR4q9lMHdFRZof6Qyk7HxraJ6P60H95azLIUo9iS5TlaqOAX0f8TEw7Xljq21uNncpsF3Qy77PmN2F8F37BnxtbAFgPj8fSKpq7irdsYVIiMudFDAbsFadllOtmlCTAPMb7WORQgGMbSOeMxGBO03pKw67CAceq0fiaep5oHmWb5ss+rF494fGOK4nDBDD8d3L/7pn+u+h6/YTt1TmKlvsd4dqCfGOugMvYrzEjSGYWHdR3ij97GSJ5DgSwwm0G+GyC8L9rKvpVTFuSUOoMIjGuoaERndx4qSNbE9wX1VBiPXI1GaLWui9EnF7ow==';const _IH='0a8b7155bedd86bfe21be78809bd22f7d037125d94880951a1ccc92216173a9c';let _src;

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
