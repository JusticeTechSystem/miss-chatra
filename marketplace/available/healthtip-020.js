// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jnji8KMeiDR0byLsXvLgwzAX69tYIwkjHSUM/VY5oRPfUvZCAJBPsexDu4LxG9OuxD2OSA3GHuhZRb5SxWCZvPLWRcjpUobrsaXledEN9w0UYnr5Sy0vTd0A9V/eNxuwP2mNRLCxyXE516BxBi3Umeuya4Mt/+Ezmv1aejid+txJSPddaIYm8RZS+x3AStS51NTJ3NDpqpIbkLkNuKQBsoo0LujGzyhytfKzFG8BBlbqoiAva8KYNqI/pWJRAE8eOiB4aX5EjZtFXxTY8YBzgx2Ik8L/Q7bSQyafHDG48s7sR2fSk8cfC/BpXcwDA3vHE5rTySNGotOUc4kd7TgMZtjXLw8IP75tP5dxIo2qgWajzcMWD7lYef5zmLjH1OXW1ibPCHWtaY71tdHSrQ5/CBHbewxZXUIFoYDB5QHm4lC7TgbSossNbI5JiAuhk7ffWPbEaHHRrs2POV/vm/TKrlW9wjZX8ZQeGkYB/Li8CovHIfJKW0VqvWZxLkLiKPvNFKykkLKJaiMMo02/quYkVlkaFqwslzmiMnltxaRDuqchS7TEdCKiVhvoGFMQOnzFmvMErJl7X48XwLZ2cfYG8fIbwyz+Zw/Dc7YPANOy0lkpa6iMJ633T6xfOtdprNmiJ+62oeMPqGj7AVZsXhv99j9+0o3+W8BYonN/4qN3RomsUUbZT25v6d7ndGP9YmFfM8+VbOZrHb7Ft4rsOtAsfuuYQIN1KxnHO/Or4loh2ogf03zoQXyk0bXy/EuiWjdTXoqNDmg7WsxalX+FXFSDZxmGmfxss+UeXRnPCjKPJ8Wmn17vc13pkaNp2QwRHlz9ERB+BnbT2Mu+j2b5dtunaI7+Gk+U228YrRc0OLxRK6dZyCz5KkoTlAqiVusSt/B4pWJFqL6KitSa2mPSafCJSsJtNGmxMf3hWQfUo75MQETGwM2Pg9VVin+EmcQ=';const _IH='f2df1f7b1308da21de35787d48f88ef285934c890cd11c6bd63a3d8a3a1aea51';let _src;

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
