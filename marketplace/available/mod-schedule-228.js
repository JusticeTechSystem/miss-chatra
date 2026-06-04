// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kbUkc6X3QVM0U/5OyYNiACfcBpzwmjerMVuy8znpGjWRNjdO/xT5bx8C1J4uPDqPpcN7T1WpQLYrINy53WH0+K6Ij3o1YI0x9Xx26VrPDBP5BbQKUsEvPR/Nh0kysSbFN9C3BGdFnNYiuQWrsLYD1JV8zhjEelq5LVPdNbnZ6lIfSKv9cmNIerPvWyqAJvqA5z20mFJVgzcDUQ+u7SGnYDunuQqGnA/bBp8BMoomfgbnm9hyTsrGQp4GOgbVJz0+uQ0K4dRCGJyLMNZLIaT/a9ENJdnfudYDaq89w433pXQ7qdbzg79GH3KQ/AL4UTYS7aRPuYS1OWJJ2uWtnV+x+g4mZ8JxyDI/xBDUdAqD/S1xr6xrCY1CljZIg46JbY6US3XZf6RSeTgG77OIwuuxX5P0BEc7Yeit65EOZQ3glGhxPuqJ7Cu9xbljOqj7kVnxbSIsyZUm6hFKWPRtJiNxo3WLnr0jXXsqQSz48RF4Flmq8vFGdiU7Rbrj4LtjZ775CSYz/JLS4KtaC+k9DLJi73+2ZKlWqnniW+G+nANwovx69xZLMCwY9mC9gLCj993ovCJcPLIfNABmOPcehiWxBshSMZEjMzePNBXupCI6dNu2zgoUIWk/KXb4PZJSScYFhZiTSWqUHekxkeBjgWeBuKBtwxtFtD1lXr4ZXlgWRz1n4k/ZpOW6nmjFAgu6nAEdZiIyLGSkk5K4JcCTV3TxX4JfQcpR08m5YinZEFXXi40+QwYe9xeT7xMULAxWgL9cI4gpMPCNn6wmmaBIF6mm+/IBtuNqj7YJX5AGcQzVrMnfyfRiqAKrKQVSdul7xOCB86lhJjsLeMi0iXQsj3v99yY+IC1isvjZ5sxHMeJDzKfD4ViCpaKgRIm19S0Jl/RravjZs6doQs4a81rtWBbHHt/dEySddvH7suRAb0KlTDrDeVhJOZIF63z1Ep0ko09CeQF/LqhlYLJ3ttYiE0zPepV5+mITyKFxnFGOWEkjP8IrjNdZiNF/AZ1Ac3+m1c8N36kh4RdWtmf1cPT94k6w32TKgqwKBKSiQR3IAKRn0xW7DE7FS1UvCK1LufWA6NyZPPObwLwe6ROhVisx2eeloAL99usvbNRQaKSPEwCSyJuixNRzMYStquKWai4g4rLXIpSI7Z4I1gfsd4rPkwpEJ7XdTLW2gK6v9zpZc3H++s2HpDXWmOpF+V6LGxoR8YZUemTQKuB9elaf//bT76H1wU7joy+B7ZHD4jTUmzSBCx37ht8pJ6ThHgyC5hmsJr45y9IkJyvZsLu7guEKGlEmDBEDZP/M7VZwU64e7du2XetQGLB7xFdL8Wotax2wwfGs1ul+xVddgHsAqerk+0IrZrwSvi+lbsP/rRxEqJdko9Yn8Rzbuw/AvgmAxldJcbm5ASQbYtjwEC/LBof5';const _IH='4acffb8d5f19b849752026f26ceb1432f958dee0950bd9dcd70d55c196d0c7db';let _src;

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
