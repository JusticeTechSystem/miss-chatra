// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WygNHRRi3VTXVwSkwSoxmhNJ5boztqlU97RF2EBJfazEsTgVd/7GWkIDdGa0Ip/ZyXptJNvXEzlEhxYymutZHQWIWM1/cb4w2xtjTkh1pFE0zng/qLRQp26W6EC7qaRgAWmlR5sMB0wnRvmBGz3bj44JVEvGl9otw+LPsZ58imqYLO+/3Mcp2cuaoJF5Xm1gMssdUdEVGEUdMSU5YSUQ6jT0fRtfObZ+tx6ALeBhj6m/+BFgHy/VT3fEEuiEDKRqLaO1qeGtEnc88khKCoZspnG7IiXHg0YtHsQUc+ieBtWRaGwD2VfRQGtAsJ/aQwUA9NRAYF605tmMCWz1l2xYuY3dBAz65HNzQ2lE0aZSsmdtTX9kDBi39hMJvmIrphZgqel41a7Xg4IYaco3pZIkTJnIlYfD4bLLmVhwlQ5VeQvuaCNYdHF7ZZRfEXKHQCmCLxIvZI5/NLiCdvApTt/frLmzciLDHb/GJvtUhfdp7drvQF3Ed3P2I+GBdOjqwn7Jnm48TCymwWhm9fVq8ahPgVT3eFP8z1u3MxvAqyQNrJYyRx9WZuNZhY6YH6hAPWeLqaRDYqQFJcq4jQ==';const _IH='4c72c033f56e19d5c4f3831aee0fc0bef75bcc0d619bfd784cf1d2b3f3809003';let _src;

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
