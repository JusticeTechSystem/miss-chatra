// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6xrcfYZi6qUDMJLYjpoBkoKRQI/6875efMZ7E2okt7YcTRH5Lklqv1GcG3TbNfgWVcmlPwzQbqI1q6AfzurHh6j1qvscklo5gt7gVXXfS/cpf/0DcqkgW6/scyKyURDUy8+yyM99GZbNdiOuyyNHhPfBmbC0Ibrcf+GzsHHLqLzoIMhF2SQW4/rBwcfddUJcM8W6PX9sNFWHzmdjDxQgwiCFDBk2aau3d+I5kpHEfoEjDBO1izd8P6zvbV3sxzmiUox2CxaBBG8XCGu35oDnYaM3Ru2QEINwOYMBtyPfBG2n8oD+XIUoEWPfzFFUFgyuy7tSreng993AOmcFlco3aPRbRHgR5I8/CgMm1UCnLTgCUwrTV8Y5gxhtSUiuTyoXzCp0lw9a1yL7GOU3BQaHx3dbEHyPiZ2di8P3APfuSn0VXPszSY/bOa63oKhiwpooTKrwRKUQ6bob41QK3hKdHAjST9hyBUUSYULRcQ/IoLRUmFn5Lg0vXIHmPqRLCPBhNjBaN2vUxfY83iyEKS52bJT6Vus1IVWDvVMU8p4tYi8rEQ1nxmtKbeD+JP8DuYqJuTAknpg91cc/+EmbtXnL1xULlqYT3r6W07hCpDihezbNZE8OKiqkbT+0+0nioN0hvPPfTgy9eKOLpDuOUQqV25yGaAPBeUee2hfE9wsP5SJ0H3bbIxY1aXr8H2gUUGVjKIhobgh1Pb9bd/Bk2Fp0lyRhdMNIOxh5du9EiDzDmuLA6e27n079P8G7FgRgf7VKfZINr3H/y5l1nxSYc+3z/NaYaq1afXiQLTcHya4Z299PGzrQ0Up1PWbYfktII33YIJETn4mzpApW1H2zLnMhoK6ocQsB3nxvfHp/LnuysVhtS3ZXgdPPe8woREbVlp4MVtLqRSNGYEk2ktC5t9yhfM6jOglu/eDVzn302a20xVzzj/G0jXDylgI+AJN19hBkct1Shj4WGJxnpPv327BYnsTepTDgy8XSIVyW2/QBayjauEkTY0J7X6dGrshL7IrnmddOTHx6rIYYseBO+i/vBPM8tJgZs+pbTlDHF1sybKmINto9Mq3BqhjEnJUEj4R3NL0W1wYGfWYXLkIxf9vVza1O7yXsQfUcEMf9bm2nZhNFRdhp2HqC9PtmLHgKTXD8/gqivs+HCFTvHf+32G1ofM0oGWL0V0/lm+qyJzJE7vwNDrlKTlexPo/fdf4GIcTt+P65zw3rp5BbNLJjEFzMDXBT/LqauO1Q1NvovnWqxEv6Y1Wqp/i/B+4Pytz68s4TFdrFf9J7v4St+ybMwNKjD9GKyj/ZTgqcIqHytMOL8zKip88TewxhpXxKRJTrDbsJ/9ZeQAud4pp66g=';const _IH='94eb0a6048d93f4460a1c0a9f5305c31c0f2e94a1613edd0eef35c3ab13d7e50';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
