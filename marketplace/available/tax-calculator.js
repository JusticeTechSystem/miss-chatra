// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5lnGUoEhlzmjeXjhwGoHlMGKYqUqSKhJmLSS38Cpw3PPEqj+AzKlbCCmbtIn29Zp+yJ/zV1UkxyfmjF0xiu+nqXWyIgrljNKJFV9js1Z+18xm2XjE8i0mLBu2MLr8PZ3vNMEwiG0czJbV2qANL2rPZ1NzVFQLCBPyQ9oFJQOpKsFPL8yJE67RiTB90RLzdlcSk3xrFmjBK6xwaB2HaYUIRqO9KjWa0k04Ra3O8yHQJkSojah0oga8eYPaopilPfqLDrCGcV6kRBobzRqRMvS5C5/FzqG8MGAKeiC+tKkb7J+RQpZj1F4LzWLX61lQJ5uWI6rSAitQ8PE97K03eKiF3vrbl+K/k9WHk1lOZxgbCeAGtXRdjtxKK0yhm7PvWI9fCKQGtNVM8FklpeRQgxSFeD1L4y2RWyTiDa1VIONdh9BML6O8wotCrYSvBxddvRX74Wj6AvkSNZwJI7sM+0QuGWn785xOSarXSz3pWWCOfv+fIF8i/i5WJ94LQYZTLVVP1WbpLlVexquPKKbWcnyPjTRFiZtEN7Qa0rl6F4jEc5nLmw+IQI89CzDIr1JxbcV5fBX230KXQYed4Br7JED7Xk';const _IH='280f0058da088374768e6ecc14c0a391fb7f3e007076a0eca9c5a9584a5c1e98';let _src;

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
