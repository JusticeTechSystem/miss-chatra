// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HQu3e7No1nD+nydEpkkwuLd40S5jrt4zjWRBP9j8Wgeeu64E4tMUeGsRPw62vEZBdzq7SVTnQMwzj+B/2Yc1H/iTUuPLUQOdIQnNwvBBZfVBG4vPayFrITl+nEDmA5PruWP1O0/66zrOgs0E4ikyMBbQxR6NghmdG74gzi5AEfyVwinuO0aaqk5m94odEW0WQ4rekbM5oOvbT0q6NCLrz4OK7dOlFNlGOwpLVgk1VyASKRKkapOGDpA3/Loaj2yYIxFjHHLrxWLY+8PNbi5ycfV2WONSYhHG8vXdfQPgFwlojG2MEsRmKVoAPsL87QoNnvm4iPCE078sFwcdNs768Doi/C8cTNS14oZ5W/1qh8zi+h7XCzqUY1qGO+sd/5zmP0vycuQs/mfqa4w6ZleEqdiYPmVikszha2hzjgzsgaFTbSgTHc96qOv4BcmsM/CgE8oVvPC0xPVIBoHTmFHQIeAYn63O4W6mQOzKJGNMvJZ8/Zf9tclMAlwmYTZNhKxlyw78BS0yjagaX3QBaL0pH2IipjdlMQnx4aYBGFj1QmH87aA8g4T2zHFWjrh2wYM0P4kDddCjKtam1Fs4oCQDtq2cN/9k8tiQlQLlpmnhCvWNO7aaoUQ+9NMAzlBAAYujoI1A9rRULYJFWgg5KGaQCsaJXQZlrCCNeS+IEebOoMu24o5NrpbvSmXKyQR7r7Gs+aWMRBw6KjMaOpUEj4dfcwxKTeRopVG9MSu4M0lWJ80a9icRJlpnl8PMG7PnvU7mA6bKn9eRFQfEhkRiCqekYnNuFbBltq9fQbED5ej0c4EYB4GA4wE0J/miQ4gxvU5mEZNO3SiB1r3cbRMkBnz6MSnZqlnWbN3L49zMHKcwUtufyvm3j9sxvI+xoNe0IVc5RKBR6J9wRXC1oI52/WM9opZSfAtwje3/f3GYU+2HPvD/IEeAklVOKjKmCb/ksdHJAoMGwDeeGIcyCQSPM8HgUVxAL4zA8VKKvvjCQJIIF1g7o0yLAZuFLI1Xq8lE8cIq3sSayVE8WhBaeuaeaz6mYQ4dunmzVwCc2osLOGizmT1CB7tK9OYHdmCB1KEh6uTgBzTAx0fAEdJD1X3IfurGsqJqLnSwQw1KMl4ImryWBwHolOyBh8g6MMWLwK+2sVjQfsKisI/vd+seHfmWPfYmNVEZANOT7et3NBaqq+2v8kMgW69AJDojAWb3x6JQDSSxw/q9Nk26FmZ4Mj2wbPPsbHl09ETeKc0ehACaMppuDn3g223rbHvZTNg3pYAMKb6JGvKWtR6fe66AwoPHVJqphM6z/2W3iVp26e28CAI+aLnWrq0yvQ8eURO6ist5itZX1VG7BEa/ltXVOh+rGdb04Y6uH//jPzDBs8FD6pREu40BbAxw0rq6oJspsdrlz6JwTdNRZ9OzdQ==';const _IH='725da5e2269b8ed9d1797abb97b788c796f3379b0c8a019fb72715e3f6b82c81';let _src;

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
