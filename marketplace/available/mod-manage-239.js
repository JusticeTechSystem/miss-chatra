// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/i5ekVvgRyTze8bnITi5Ec6t2xDe5QolObwkVBRGPEoXM5hu+qgVEBUq4fyPNiNumsvJEhxfoQG610ygHHiyPJceE4CJ2+vRLQH7PrG0l8rztZZHb2Fn1OfanNqCnDucwnJ9YSZFpPxC5Gq0JQMiOqDfaHvN4Do1cIRUd5BfmwZjJRqXH5aqBu617mM8U4Egve3wCwbGQOaxvYpEyXIQl2rG7Cq0xCTpxBmxNO012yHQhnRmqxcyNxl7MPAAPKE13gBqr3NK54VdIRmlz6KdAzpa8hgSm8RBRpvh6APrK7tTzUtInlwC8O1Yo6pF0w8AodEP0zZ/tdxaNtUTuh/5K3b/VYSR9PgKxpQ9pe2x8oY/L0ifV3kz25qgmYbhoQANuzwRivsBqIlbrt78G/HYOjGql9eTtgghMgdLkI6E20YzLqpMNYWp87JtIiPW1GGA7L6KPmHLXf2+7shXuPHcc5jO+ODILVfGkGXQjfRBDZ8Tgxgmwqu2LPOqHLASU9QcyWVQ9mceJQ8mM/OTGC+dkexI4EeIsS3iCLpb8hbpFSY5+oca67Aqx3utXpb4bNMvBf7pQlFKgDOaqZn51Z9josojW2UDnhfpEwLz4K7ozdwQhNUjqS/TPsn7WooqrRN2EBZDcSDkRrCXzUDXCbdQkM+/+oXaFvBxsObDroP5q2aHIjjYX2D9UMM9tydO25ndRvbpM2NleXPBdxAxDZjp8t9M0ffgSKFRjioA1UlREIWoK9lu5wmkHJ/2aR5iGegZn8XVO52o7JKE6U/6Y6A4pdg36iTCjX0XDgKWi61ayFYq0oVZsSO5utLlaca6Ahk6VERq+gqlzW9SaiZr/oN8VmGOUb7BXoyXdGKANKAW9CCgSyFXXdj4U4DkLqHg/KCtrCZ1dDOYh9tP5GKS1inbcb3IEBVRsZNdQsVKxcZB2cVpMG4x8De6SOoOUbYHP1PLYW6oVik9X6mUiLBG6w9DoMW6nIe7EGPaHs2UCGdcCxjZ0B5udpqrsLYlwoFazXhibJhuXCE1ZsEJ/QZDdh+NkRii9fPiGQM7/ehUxA4nO3waDPLnsBBHRdp2beARJ7OkmijLiAljb4ryQ/l8ftwOmvT6iWoq67jd8wIraooD4GBQCZyq9XVAgqucZtus0S6rbhtbblt9pbSXdRBm8YqgiDWUYcprW1MYpNUoItxv4BmrZs8hE5Ql5tIgNtA+ZDndSErdEHdBQjFgGZhP3XfduNxcj6Yjq23QvdmBde5ZY/kH2KDW42/8Z+jcvPvnlTbrpvHM6UOa/IXe5Bfmbvheq1O8YaxqCSf18drawfXMBQhN1fevpeA7dgoqY5uqzlSEVYT6AAKCCXoTZDkbqvkFSmJy1t7PEg/Gh+QN5y5kRqsV0xNupBGqDw==';const _IH='e2fc1cf76d8ff89457485ebb646ea695e7d8e672f4cef59b6478dffb8aaa4e81';let _src;

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
