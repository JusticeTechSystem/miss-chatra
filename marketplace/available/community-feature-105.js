// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wkfctYhWNX3zpg1uJ7/Z2R1Sl/AEKe3rnmsp+cEz/M868+3UcvACH0kr+xAFkvJDWAvjSssMSI468C7isQQnjaeV9A4l8dS+n9v4zkT8Rsd13JGAd9xvSFBZEUsmeFXfI5lyIJ3naAOWB2Xoph+AkT4yXdwHjH4vMFAuMxx3HAfrH/J5hUcwpAbxAoAASNV6+zfeE5kTybPO8LaUAX0lQB/j7aKK4F7ASpKIhj/2lQDytJfpGVuM0YHRD2TjviKzG0C+KHedheiftocGHu68i4mB90WrwTMJthjbSwfUyXlxCL6yZu1i0/sLG2Z2VRON1ZjFOmrfdl3S8oWWdS/laBOz3ka2HhPXgbBqpfpn5a3sRiX1xZvNhFjcKxScIl3zzzKZyCAvb9QskWgYIiSEOolW4LdU1mTs+Sx5nBTgjDnrCNWt37qvRgWovHYatzYjZz6UbsM8YTh9uX6KuWKnqHEA/+OV8+xvQumujnIzc/aNImxPO71IuRvG5VqWul1mCBMo8bls0jLJH+YqwazdBqyV8WyhWdSkE/+MUHYB6PJtblsOfOf49UFHf7Cy6M0dHHF9zzO6NwFWnlxoYQZR0a1W7Ogd+G4YQ+RENifcSCv+fzHFCIjlfETItf12N5o4qB1aCSxsODpxdvbu+WK/3ECy28+oI4GkrDaubdT4N0xDQB26ufXYkokomqu/vh1sG30RVQ7JGP+MQiQhM+foJA2kdwlUSJV6RXyqKfROnb4AyCjBymPKxd7J';const _IH='2a8df0a23ea490e980b738d5871dbce486412e564c55816108fc54bf90b30c48';let _src;

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
