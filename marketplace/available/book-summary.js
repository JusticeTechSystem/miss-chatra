// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7DO69sLuvkhWNi8KZ3PHaOvDJqjGWaDqOAoIaHUeHph3TMYPnl7TbfkWV++tJSpjdUrfGEB8T1QkRPL0r/j47+iY4f08K/lX4mObeZUc7Hpyud27I+LrbNx7XS9YPkYfLt1rYnoXv4uwUyb5W8HF133F/3e2unHlXEERm9eD8xzH1epOP4+ScAMlcHeIE3kwRfdHLZbRQywBx+eNbhD6VzOcl4twH62b3dKGFZS/1DaAKbgUKCezHp09fAo/lpcv9TvoY8tMRhrZ/qi8nJzPDr8GdF4rPY8uVWmBCr0NpDAwhoGDjB1dDAfV8L0Jd1nZoHe62cahGcj9HoXrIoLFmoLimUpSSHwXuU21tTkn8akHK5sVKo8eCxePYzI/u0S4oOPb8yKfNP5sRQ1PDhQ3+vAcf4VjA2gfsz2b7ZbrYxQCDVxt2nkWis6z4Z4t1Iqe9+mp5L0ptIC982iEDK86oYbffENKXhY=';const _IH='289307ff2373a35f80a2e44e6ba65e32b5627b3ea44b47c0d26307498ae1e9bd';let _src;

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
