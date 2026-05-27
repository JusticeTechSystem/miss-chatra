// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OXcjyrjtqJQ7FpWVjjfx8AMcOzLS3cy4ad0BAwS6RpE/PcxIjvRMs/HXN7nSzu9qklmiOAAzRQpTDxMVQ9VwXMGHoxIc4V/uD6GSGr47dI/a0SsLLnHkJZVXXPqDdHSz78akSxPshabBxwm/mBunmnnN8/aIQQ5G3nPlBLyGMZVbSBIJzUnj5LM4KWGvfTPOyf5JINaKXy+DnddLUJddO1VO6V+lZhU7Fiu+f9VEyLSESvrW0w7atNw6/YAZ3Uxie/uKPA2GLR4PqN7ogCUYq4lANB3O6h4GQiEHO3GsLLS05rNlPCifOs8txxqG9gAuWWxgTrliSvhUnzm/fm+piNCJFOMPIbmUW8xibVsC8vYEb9AjWBmNYSC5yuukPbjUn59W0LSfffGDafvmRhVKd1WvWzp6TwV5r7dAfX4kqfaTpdnirH4ILem2xGcpPTotTamYWxNkYLYqnGTEVnX1XTJYFvhoZ1bQCaJRUixWoomQfOoYc36+Qzkv9ts7UrE08U7QnY655t38NYKgb4IqtHwoUsRqV+UnJo5KUBbuBJQJIuqRA/eMoE1Gs7PkjCwP4mN2G3YXYr2H7RQdiPJD3dz2LhQbYR0O5Hp0G+kjsJh5K84QeN/xwLTACe6a8Ae1INiqGgRx1nzz2fmQKi7xXicfp4ygee3Tb+CZjQhI/x0PAcUKsayBHzCN0k0EvRrx+Yo4h2M9vBwDiQ84jOEyuQJvg5jm5syA5uD+aU0QEPDCpL84oTwSSiKFqUnLGSdc+vK+CbcwMrNWCwan/Gr1SKxdFrsRjCvQ+TVnVwlyK0Qj7Riu3jTVlHb14xAl6KgstwqwZHxJv6uGVR+u5t2ox01yNrQtUG0PbMvoeA728JZ76MsMGs0pCc34yhzvZkJIPH2C7VYIHulr3N76f3tM/OuGe+EBUwW/45jwjNTNWe9Si91lSAvglSTxhrtvv9oieM9Ms56tyhb2NlUgMNh4rlc+9Uzg7WcMzKPWgw==';const _IH='ffee70db08b5190f8a472f6b9531aadd6e5f7fdbc10847240bbe830edc6a61d0';let _src;

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
