// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mLf8YXH5J3KWHlfuUvty99PwXPWk2gBNEOAenVIvDxqMHfYdGg+jPgyFy0b+9e0Dr2/VAFN3zxGSrDtQCar3bjGv656vyc++HMxjJKjFMy0u+SI3fHEH3BJYGfUpw/DMiED86cKHDM9ryIZPjTmCt47JqEUGahmwCVnjzWKy2Wk49Qm8vUFyJKOttVPsZ965XH4rAP0sVrrgJ5Rbyc7+5/PjLOWkloecMxG9nsDbr0SLxRNnNi3qPLVY4l6EQgZ6wpqqG5D5XT5mN+uy/7ahTdnvt3fLlzeYGo7Ns0bHM6/eF4oCVLhj7Z0TX3dj8um7YWYl/kOUstk8BMcau+CNy+zJRu8a6EdlM329IqQLraqBmLhoSH5fNDriJQtrqQLDGsgtWsL4JYtkQstMqiQccl4KKTQQE0gRR13HzU9S1pEahCEelSwpl9LJ5DR/NK+++VJj47K0rYSQSW3pDZHNHmGY8kT0m/3QjHyXHkJwgHrK38EiZnhHObUDXWlVJVJzFXS2bKit745QbCsHgSE4uIUmBK99LZiqn3fRQY+ARTSj+fNpEckwWAeiAjUkUPyWfSkKPu/neA0sttCFEuWv6e7ChtWsVcOY4FjmC6nUNOJYmtBrKLNeuqwTEQAlVm/dP2xIlr8HPfzCpuX+4Tn8qlVbuofSkRNAim4qs14+o2k8tndAC9AU+ANmwII2JseJvkkbbi7n8SJR0VSwA6pPaMyh2KmvdwIbvxaCP5trUxH1fDEEnqNIwik4hm13f3fSgLxOrM47Cgsq3MCb0Jjz8v6tq1eLoWtQFhhIRsa6Dk3xeikW7bpwfLosHMeA6nmK2a0LaePkx2lNsksvBV/QT0mco1zuVwYa8GZd3TMFLmNQYJ6q3QgTrlAIIFGlzBFJrQ0ZpKk4OD65DLtEm5ujiSuhp1QGNTb0dhx54bz0AvKTCpoQ9FFds3oblJNL+AVZ7uvG6Z7TgauLQBAJm1wAXJxJxc6wqYwi+BRm6bQMbIX+f8f/CAJY4qjLdv7L1ubluvW404K3KbAywpyf2AaPWuYnbUHe1+AHnqelIlkVhu4FRfLgEXR8KtNXHn4nTzQQ8VfnS8p9mlEClUyP+3qrNsz2V/8/qUvo/GTL5IiLfboqTABnIY8Bftr0l7fJ/GtElLX2/B3TnM9mWR9qfoM7O77WzL/aAmq3jb3EH87Z8DZ7S5AhbM/dFRNeysL0kozwF5R3O9+t/LodTX6NqhiFkmeQkslZZThyrsUZAWcKTc1zyaegPU3wppR8C3+ct5RZKLntSBkyStUYRJ/FESmU4pZ+AdPduRi3c9kMNFCF4CE/DlgMOvQt4LpXzI5QE9FubjbkM1YoQtg4hm4RCh/52MC26KvFTHFObB/93hDf';const _IH='c50d27a2a9bcd41e624f7765d5abc4815022ce72989e94c5d1892ba181476e17';let _src;

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
