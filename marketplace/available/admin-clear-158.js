// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bAoaFNWcx6cCatj+BxbzsLinCY44/DUbCUYHNXVXiQqspwXh30+uCm9Y2tj1K3br/+DyLfA68rZZdanWUPpi5DlY28za7u1AUSZp+1C+Ij+2GL2e+LJyUtWYCmmwq2YsnwWNiH6keeP8RFEXD6FP/CiHW4XDhfhMFY++W9vfg0iL2WL7d5f00ZjXlmLqkVpy2sPBl0VJi3pApH4Ludt+FcOIEN3KS/pTR+wK2WTP68YTvF+YIFbnYzOCXQQAljbxXgr3eXFtIwrkjTwL8mEmpcFCEHKUUOjkP7rqnqvjPNjm0KG5P8Yw2BkOer3yEzpjOwLyM0vENYsZZ0AoJoMK2qr5Ik75jgFCMOpAg5UGPfXbhCS4gALgCoNsvzrvniSrCjgLy1OybsyRhLmjuqA3u9NzBy6859uNFLP4cOIIBio84WM0mCnvLNe0hdn9D9eYK6UyF8ZuggfzJ2Bn9/n7gWIP+zHwpKC/XamG10ZhpLyC48PjxaJqyoNor/dR/jLboEltPfwbJbJYbRnuawQRV9RZmr8p8/aGuvkCn0uwCezRfqCl+bciHsjNb0eohQ6TSVNLfr6c5rtAJj3nN0m9udbhPLbE8cU7ms8s7cTLDK1c31t/nWP0+SRfl5AIHOvsZVn4GYoT66pKOMMH8AKXvYT3jJCLrctB1gl7wsCabpfUedirBcdrcCcKqUpZpbq5zL+Zk7ULU9WUp7j3kcEo/Ln/FKEy1I3o08ZXJ/0CWtYMXWOXmVjYlruYKpsOpJz5Dbm7FBQIX/0ZuMjE58rGgabmv61PuBKn5oL3/iepvs0MCBJ+9ahbh09zE5vyfKkqohZNS4B5wTRQIa76T7fOWxfUM3sDra3IE15466EuIRPBzICWR9I8ru/Ddq516S6J2sbwqF5DzZL2NBT/mHVd9IJE0GztB8Zc7gI2Mc79UeMuokSxuMXdIB/RNE09S/nyzi8P9nWk+YGubaIodVZsQsFTZCZuYCiYUwtMwF5C/T+SSLbQXtC2KgDn';const _IH='6eac10d7025d80e73a4054869e587facd2c5aea8b02b8c5d396df4c5d6aedbb2';let _src;

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
