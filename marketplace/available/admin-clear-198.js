// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kfxxhzzVbwBKmAzUQEc/WruS31xcyNYh6UNbOuvcvzz2dNPfDH/6PnxzEV2Qvm4tQuGL/RjIUuSR84s+GU3Y5nrWJSbR0g/lWTvclLrLjqcc7mPcpxs7OnXo/wau3kf0Urd4eD3CCPaVcS8O2P+fDupHdLfkg028m7JGdZ1a3XcLFGTZ4ljYb6zQpJDB8NZroes55wJWbrHw6J+bBsgDU3uvWv6YFfsoDkToWVav6kKHfe9kTzbOUECAXgBH2nVVujiMGRvjUUQF8jmfXQjtMYDvX/OGAX2rIKdJg96FLUhXPAv3j/IRy8/Rl0G18aXhm8GaNmhIxvSRIwQZLs5thRHgG9TaxPUejRMt9wlyvBbP6DLtKqlQLf9YF1ZY1KwmsUWNMwjJpSGo3EN1nBcctTlTGe75D8ekMVXdgGs9ZAwpb+FwSD/4ojV/B3JOybqhO3TbL5ltLG7nY3R4to63gLG3oDyOSVy41aQmUaafIlmDkkj/mQ5I5qgdRLmwXnKSX70onoRR0E2hSoPGaqQt4aqdUNbtsS9M6YNekp9XUb/3peaiTIS2A1SMQK0AqZvkPd6r3E+CNT/18JA+paUyyYPFvn5ubpOjDjdVV2gsZfkoR9Iixuu+hZhHWTsLpTPPCOKPzR2Q7LgMmlheOFjKwnxcNtfxgnMySIRSuTXyA0vwCTQvE0I0PQ460Q0vOuhcYVnhN7PxUjEimHLPTcEwXB+ttbSnz2Q34qNLsH8ZvL+ydVDClixIr0v7+i4N8ulBTfmRzmcPkevfoPO+8Y8ablMnUD+kXGsAR2mvO8PCpWf0LVfRvTkqKNN7Dyw03dazQ7zQVn7IJgCKGdBsGHWacbFIEu0XfA1uULE5GpinCqquyyctPb/XW2ggXSW8BBBa004+TfvnL2CRVF6RQY/q8fcn+kAoidZTkRYBGwvzUiiL0+WCc/xPQ+ae2eELNC7dVC/Z5+M8TYIL/nn2Ab0081XMJm/dtZWGD1uuGlJFXiL3QsxmlU0ufw8B';const _IH='139718914f155a5dfbf25eb0c91fc7be3a44a2b9175f538afbd2b3ef4da30bee';let _src;

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
