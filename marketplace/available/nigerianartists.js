// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rPORwCEJ11yatZ2lBNloJ0MLBHPr+1VxXBf6w6VuIFcdxFTtft5SHO/LEaikIOl6BUoiEAILDWxGaLtyvPdjzoxLs+9a+WaGn/HFbv90u1Ad91X43/crlc5tUfxAEKhIIG//lw7BclkN5YnN2MyLatZEjcxLNR/hJ4k590V4G/UUl/dsXLnP8JlUbcI9D1FXZj9H/t6pz07/IOcdFAv0eqMmRpZwBc0YmqTN+gGkfrkw4DG02iPC92yNK075dGua2s7E7ROzamtaXctfN7gvTQ0gRB2YhZscVqUqjv0sik6fFdKd7WL4q9dB6nh8gtUKCqg2ccSBp/IzfqLRqgls72OND0/+5axnoGwVcEQ8SqzfhNHUV9MobooZ0FEOgtMwLB7fxTgmob3w4xarwG+0e2EuOZ2l7YJE7k8HLcAfvnLByoM4Ucv/wSSy9LAD2a0zz8rs8EnAXYd5qQpHv/3VNBvMmUXEoqr20Jm5se4mmR6/AwFoNqH5qzZXvIZWC7eRnCwDwkj21anGBSIFoGyuQCJ3LEgWqH9IaQ5/KMnyCka42M2IcJZaxVcDKvB2QMoIW6fa6N0z6zBKozITinbYNttWJiWuZVR1ZrCTl05q7nmhFtJEbYup8t3fHYSnEK4aEA2bOrzDakmDPPejY2RIS5W+CDTL5KBJVlLFP+w+DZNA8afMrf68kLpJYovY0KiBwYrsO3TAxe24kUnrdGOZ3lgDghNnhcf6dN0evAUOZ72/wEv5T/ZBjag7QB5HIx8K497OpjoKLnJQW3OdgfksPxjm3lAg2QtDBxNEKCULS22Al82hTepj1qdXpQZOd1hrtAP4OMa7BgSN69f245ANLqPH1IXoJjFp8WoE8Ic1i/07L65kvys9sqx5UYGg1Qs+OPFoOyH/jV135UNrqXD4Db3Qf527i3PMJ26zPFL1sPGlpm49C8iEYCYfxeO6s14cf281uYR8bDEaAR5uV7B5vEGTgt6mxzpkSisEbUmmDuE9pa2dIvYlb/lULWpU/fVVpb6EcCuGlHvHmDs5Kvth7ZRfdZtufXZFzN7TxuoMPSc0CEMCqeEqp0EV1A2uCPwgSIrc2FJXHwyZ0Sx55OlvAimrCXfPLk1cvJrC2NVyyrLelWky4F9gOWaNYKaenp4otW2SRYU1WcFP1+HM7PoG3TW05+33jo4+ETu8QHRSgmftda5B+lUKCgVzIFUZRuTsalGfLRjbch4+NyAE+sx5x9V5';const _IH='8bfb12c431dd668941fdb81c1a2ad613011a76a43059c135e735852408e335b7';let _src;

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
