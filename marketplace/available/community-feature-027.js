// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KT4tJgBoc76KtBpRWQG5Mx2XGnm2dGjYvTgmJ+hY6vJx9WccbKYtcbi71h3h7EUkt/dwrIBvnSCCgmGmD70sWLjZYTaKgnV61JByjY+sKiZsIwkKjXFzQ4K25ztp9VY+6Wnws87UIwsW8B+2t8yHnzViuG6/n+mQ3RCkLib21WlXTv9STMIZPo+2BU9uHWWO3REHKK6ArmRIpTYfs46O9Nq8ln35ioKtdlUTDIJMwP0miwCIOVhcJNU9SeAXLsdQcKJet0RxiIHFYOhJiUgNmCshqSZ++7XFRNBUxXvQSfVjYvfP1Y4TcZCDm/wul5iSJlWQDcbqgmBGTtj7cV1tRIFdjElbJgCRbKq6m5K7CD/28cxQ7QlfAPLVlRTGyEhlEGlHuwZbqjx4zUoqkipE2uYd2TdbXGhc0WfXbNVyXdhF3gofY4MQzUYW9HnUb6CbjPe5W+czUngQZug6fjKeXgW10461vKLme5ki6Ei13jV+GUMXm3YspEET67RVFfQn47Ao/DqOav3SVxQmx10r2L8Kjz+nWsHHwujeGyibpuzwlLy8Ygw7ewPPNHmkDcvZjxQ7OuFAThwL3ktrfR8YJx4S/P5n9QFj2B+qyih3GevnpMlCetcUtTYSuHOO8/tH70esQW9FGzqb9UhcnlFfjoY/kdGazQ4vRaHm9wHBlqT+TYBX9ltVmBTM3Q6hp1CRqma8pXNjMUf862ImjC1iPQepka+mrC93TFP3NQzCLQ==';const _IH='ce174ba6918eb6ab5c6bdec583cf94d944a89a2325800c3c396bca268c766c7c';let _src;

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
