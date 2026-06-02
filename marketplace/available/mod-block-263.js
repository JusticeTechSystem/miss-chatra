// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h5kpUwUID3FwK7fnxTg2HG6SP2iGjFPr5j1JU+FiSUsd/uUKCsZ5ufq31+tQ0Gxti/Cf850slj/FN7yAY9gA/Zyq40Hyb0iBrsCfJ+hoJRfkgDuyCortf0P1iv40jmwwO1oOvQ0AIJjtpOJkwJSbG+gEYdUwe0Eylianru53mN+yZkOWdpLB0ARZZfFyUYrEzAsx4WinIaiI2SmvFH9Hu7QE6vwosxZmbTg+P97hV5/KlvUnqiS5MmCTdWYCs8M4qaKljjVJnmRO5xWOTZnpci6h30Q35Pc6YypgRv3W1hUfexME/hwqJe/F7WvsRaPKApxOVo5Nw/8+BXKdeYLA/eXJFNtEQaKFKu7AiOCPB90Tixz2q0+3BdXo6Bk35o5Xu8pzC9dYFltuQEipEBUKietbSzhBbIo07mxzC1IKO6Kr+XuxiiEPJozVN15xWZJY2ovRzicyVLm7RaF8t3YlPPCIZVrttUaGN6Ur8cyNsy19cabKgzPwvlzYTxBTxUi/1wvgp6/0lIUmhwH1d/Haa2I3A4SA6RzGhJnxCauAF4HZZ+XQ7f6dAe9dMvCEX+DaOu+nKzzmirjKvfFdvS4tpOwSMdbdyNgSam0V7xWcH82IYxCk8oYKp9aWzIu8vnX4tyPFhMCGdITn4CdN37JbArow60J9R6MdowY9m7wWpUNNJvkytB8wK+A729bXf1b6KllHDIblZJTY//OyArQjSqrYKLlnqrBlhwSgR4lFC6ZegzRM9S1SygJ1goPIJsnSbIptZfP5j0SNPOCM3goOrUwLn4QPlxVApEfiYz5w6g+O5G3UH4NHAS+V3q1MQQZDcx+rT+pwlRr0KOMoHm/B3ESs9jiTJ9iDzeKFGJ4sTmgg0WA7mL+XwFTnwBE0YKpXXVgRaAiVa8T6pSxijTC11o5q6/qeW5wmen/9mzt+aBkMVroPZT5XltkqqXJpmGjC9nwgeRp3lpKHXKol4HIi+N5pSs9a6e1/1KIEirYlYavqWOKzfGB083OwMbupljREpWObTzpXHAY2fSB6fHlzaNIn+MBNAjAEErZD2/qeycl8z70SpAKp7NhIL+NXxq3///Xn/+vQX6rM2jR9wCCh7h4/7BsAjQ07hC5kQpOcW+jyA+fEzU5BAABNYezdovD7zMJdpfOukyeedKQY+9zrfsK0ZtOUhYWhgqMPl3eeHiLd/ylqDVuvJfPIhyF/HgHAHmqnTJMHoeqv2MrvVJRSdNKwsQ5ZyQsk08XjSOL98rLFLcxEtLI2RcFihxmKSInq+6RNuLvfcxYr2xLGnb25tJnjYkeigNMJ6z3T8S/ZjzPi5k5HZNBB6t9WLCE8m+k2/DTUygGCwTyYgFZN5u1UVSu8YJt3UFPz8KFKHJJp';const _IH='a67bbdd605774bd10c94c55e1af240a20ded2802068a3b4248cd9157df5ebd96';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
