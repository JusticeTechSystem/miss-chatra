// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NXTlmMbHYJunZFYR0BmAirHsQ3DB6S2ar5gPoeZzfBcOJqK4XlL0Ub2CCb50ZpQlLmVmK1PZfbUOxVNpDsGovm2Npt3+DTSBWT4H7rL6qqZtY/xZ3ByekXkI5MjxMFA+dIA1PZV97Rl2m/nzTMP+GFbo3GZUq+85vBSeBjZKLN2Ozv5abPBL5YK+t/0zJedQ10ak1x0GEND26qrSqe4qpktfknZ/32zXaotIvLvs3bDHaWqGiJzFq6vw2H2SpgR8ufvIA8sadpnK+wRvSCDF29zwa6B5t/SeBz1OkFAGqjXTy0s0RPVq8Eht0gdicx0TzmMpQ0v3KS7K7GOb57SX2/hAlk2Fbma4Cm8RpYa70fUguultyncbb6VFcYDqOuuy7JdCbE6QQS1nvxA5nUJXENgErRD2cDzez+NppCMqGBHo4J+ID6IRfn799W7UorIKvDQx1hnByxjtq5dt84z2kBqOGHSZNs4wcjohiF8oznDWxwqEnfggPCNBxbzsEN0DE3zPqNRA5opPVQLjzvHzr22SebsNrf4f8uC6Mzr9sH5RclOwZH+pbQRZy8Tuwz6b98nll5OTGMKzyZyPM8TvC4c2ttnbmWgXprJyWF7UWXlIt6v1cdd/2f0va/zB/FV4DR/0zf5w2ZMLbi7Frmk8yP88qNkGHlafROdi0kCa7JPEiKBZsH40gSv8aip4Zy1RcfiqdBjnZDkcZRULhmReJHQ8A/QZwUrJJUEl1o8Tx2iHHZ1vkke260cbAhvBcsBhd4nw88iyy7XGjXPu/p2iLQK4JZSs9YVJDN/fLU8iJ75E5Tc1pVLDosVcQW6oYPKsnUL/Llehx8F02VLePXMHGYLmyRmD3Sb4zkHTBObOwpMmDluqISzA5ADTHkR5lI1xk8v1/5PbEEZcwnfUW3kaVJJJd7xcbxqE8y4k8ytLFBkfVVhBd2WeK7qWUPSYHMZtCq/wSde7wOCOL8r9DlKtazZmVQQ5WVaCx/xOI4xRIKgDaVg1lIlsMShWLhcGTj+0CU5QWbtzc1dbmAtdCwzjfqrSvzy8esWLc5xOHgVqymS6F7mvebetxVQMGjCEWdgDAj94iYsG228EAtIZgAyZia9M3HE1a6E64p5nJIc8L1hzJjNbG4EYTPIa0ujwLQNuqej96tF0IPGh2qgbhPL/fvt13zJCi9Bdls0/a0XwEoRGxKrm321mSHznJkp4BcOHCODMS2AG8IoNjMqDbQsdJtESv7EfH686+4aRly4Dst00oDD0emxK5uKrKcmN6tyJ80SFULKJgcShLjFoFbxFovYpkDplRK95JtO2rOOSEYud4l8Vw+LbJj6b89eKKGxrf5/jDbDivXsQlFXv81iJJe+aYQhrIZSyo+IbV1UtdnYdyhONSyn/tW60hy8HA7Bf8QOj3mHLhw==';const _IH='1a4b2b56558ecf31426474245842c7f97f717235618834307de2eb19bb300625';let _src;

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
