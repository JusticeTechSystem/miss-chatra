// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T8d+iJvzoyBFXSaMP2Lti1VsoXz3EUOmDZf8Yi5+wsxmslwwInzZkSECeMuLByYLIgSwL6LLFslMn7Vdguw1Be/J6TC1aUIAR1fcMrxHW+VxZAejRGgjcNytU+WkW3AiC5ysWjAo0tnX7knoham528g3ZMFVpZMdYsqndD8ikRmin5VFS1t2G3F+7ExWDTVbo2kv4DbcM/Llmldm+iKbNRvuMK/7iEh8o1SRQ5FwTi5x/zTyDTtrYTewDLa9JF2Sa4lsghnrMFsNQN5LvNjQwYGhwuAU1H0oOFEX22TLjy7/I79kz+/BWDElAUqb094ebTvkh4CJSw00YItF2pUyAeYCRK6Vjj94egWMZfhWlOG7YTWWTadNU+HxqBW5T8ZAwGQ4VtpjcbrbGeaHH2/42LgSvzmxvuNNsgxE49HraYZut9JUYDZqYSW9deksBvBok1tqjD6ZvlPEb39oPf594OQiA6oJcciqe5TgncWypgIzSS/bsLNHm9fdogC6nxYslAtW7jeXLbHQLBMhAeHIPxqCWgRfDgkhBjR7VOplQPb45GHM0hWNfzT93m59WitD17dRn6Ahkb6/+W47IOdlEKkZOq9fkNoWbqMa0j/GhkQhbjkTnUsaQqB86aEwxBX3F4WTrPROs3aeS94Uq8umVVROkeZI9EMxR4tc0VqSYVwxX5DKHRCvTNluVW0oq3WLV/7WcCUsbqC8JtXuFt9lLzyV9r1aEXFfBTXnCZCG3kfjU0U9exZOMLNiOm3jfghf5B9YZ0J31n0g3UDLTyayNTNTv7+tyQ8EM/6cjPIp7o1YicjSSTS8okioQaUO2uEJWbxnS1AeSo62N8+rooh1nsz0jN1dUNLuY8AyULqMqo/IpuB3oLWuSsoPv5cFf3cObB9Ewiwiwp550hZnayC/KkVGFlD7qcxVds8HQJOzx6CB2VD8H05P5ODTST08hPLvTEg4zgzk1fSrgAnuvYezTlmRBUH3azpwMA58+ThxOz+17hZDP/I/W7031LVbnXeopx0cwNICopQQ84ahzvi4ljgxPVDj7gmrW1V6HVm7ktELYQzIyYjmRIQWDfGszMKPCeUkZzpl+mMjWQecdj5PC5jN21SmHSRRug5Wh/muRZRaSyGbMNLIcWK1mIHmmbrreab1Q3FMWWCDnu9/Jg1A49yOXGXrYSh3PQpRan2ZeN5i1cDN6LTl9AUuRM9ld0+YZqTDSlQdtbRESD0yg2dEVsCr9Lw7lDVafaHNDzLy8phYVsj3XyG4gnqQR0jk69x0s9mern7ueboEOKWxYPRJMsRaSgmO1uNVcBcSDsLh1dI45HwOPiNcmZRe2DJ76aXF7GG0XQ7sYUUAuq4k2T16ywb995vAzxpEgBF3uiIPiEZQuMO4P8sz3w==';const _IH='0e327ff84403feccb5550aae93925aa7d799e604c59814e4711cd16038ade0fb';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
