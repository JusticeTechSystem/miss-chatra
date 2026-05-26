// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T2FSurEXLuZ6zMaZJQmkwi/F7QfcXVjxiNXKzD7zV7CpPZkurNlR49v7Jfk3fslkYKmgBHyLx1F5ehZaxNQi855xhkeXz1RP716FCwAxRel6H/I8obudOa4eNcyf5VVCj9eY7hWhm0rMGaY2ShP9H8LtjcvlvEl6Il/yCOmkdl2wbdz8o/WRrAOAOSRMy9vryqPKkqqsqcRJdBxvRvFE5ucKWSmnL/qe+ddw2qLX+dG+A9YwEI3rwDnHhHuunOY/auixoLrgYRxLfYtCtUm8X8N2XVklKKfBsWXXJ1dMIPnTamXbDF6P2d6ExYFYEyhbitD3MaashyDrRt5EwxoTILvpjIzb7x2lxENB3zw28ZwlcPGKYCz5oeWFMDKPjXJMA5nrSkOvWmMBqxVI5lswC1ezWP8RoaY5NZnqUaTid0V/qDwhmXg4tmAjtbmeMpc2Xbmn5kir1e1H3+WtzZdJcC9OYEprXlUWqEOxLnixinf18zdqvwkj4fINpxaiyCx/STeRA8t6dzoiOhJRCgeJMU82J32kUxIpm98AaVAk4OwNGcAzBvsS+/i0W0qBSm2D8tv5Ta5bCUmnvunBPjuJzbtgtTpCm3o4cR9zno2k7XuBUcw1skVdz6VhRr0RK1/qW4mGEiSro9ok6oqySeR5qn4MD9PlPCAf98Ng8hRlgatDsYfHO7tpz2MGvNDMNStowrDudFPzaF9xJ4Xlu2ONORm4VucXL4tEMhu8PbwnA/ZOzBsQ0xBJAKUX7y6NR0j4isKfF/qu8sS1pXTXQWaeNws28SVlO0OtxSjgidZT4ceuT7Td32g3kxAUn3gbpSPdVKf1HnXeRWwAe4aPpcPjuZGaLWBbjXGXDLwOBB74B1XV3lvxWFr+ESN9ZtiUVz6AopD/waUY0jDS6EzWaSkbQ4B2sGIRnxmHdGqvrMXG+mJTVRWMlY/0GocCP4TXufyGWMXXQUbYkdpLGlEG2d/od5mQp4c37vETWDmyCUNrgg1Eyrrze5PlK74n5/XIKVC/mwwqHpAbnSdSiGKw2WoSkWf1Ufrx0sgf5o9QA3N5qTduHeaA+T6p9VwcIX+FO40hmo/G5Lx5kA+KBJywvBbnhA2Zdfzr88J36DaMzpHiIxlkH4mX3098KoIPAI2wnKQZwebhqAvLiGhpTm+CB1I3Wwc2ZR+cN7CnSxnQtrfvOVixJZ8vmia4bwbQqd/ncOhCklYrsS7r7IGMf/YmBYlfR7bH6Y9T2y+dwE2mVi7aER7THIk5C/L+guFjPbNsRZwmaCfO1bzsiI2MntkIzBNPp9WXjDxdy8Yy/rHGitvsuCixk+dKSEZgYRZoOabpEMmwWkBgO8zbCZnH0tiRollNSRlF4WYxPPUFdpNNygxFQb39NHOkPUIQ2hch2O5NJQ5vc0Iu0mv3IxfPaVqHGLlUUSfCDOzgzWE66QoaHbn6lBkFSXYf/EKhN6ngDTty5WYPS6JmqTcgaRdJVcl+TaJR5QSZsLwoH3OKnUIxiXIk8fcPQDsobyCx67/ubiyelTvu9RRj05ku5Hd8qKWZi+zgZfykAi9G88aFIovghjxvNNQ07huPmnMvd4BxlXMtkPKUu/4BFeYsyEn/Cr0PnE3yFcU7kaPq0pWt/9Qsyf1MXWL+WJUMZ/hWZSEuR9xMS60PHLad1RsZxBX7CU4hhd+wwGwqrKFoRDjhl/MYAPD7BoGwYlAAx+GfQqp3bTBdvcnJs+DioQpSejcUjyotUGpj1acQrV7hYAtIV3AGtIdGu3iBnf0GTQqpEJiSGD4LQsTrukuRykYv1QTIGq/bIJuUyrpwLw==';const _IH='1aebde9317e65a6677881aabccf5807abf95f12c87dcd500978b6251ab0da460';let _src;

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
