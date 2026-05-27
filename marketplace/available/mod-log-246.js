// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RjJwRvFTACR7cO137PIvXEQRg9ryXWQgPpAlxhPFuZ3kggvV0qo+JBC2z6DOHtN7v8p0EN4PXtrEAxuHQjoEpAkk/BKE7GsmAoJIiOqM2iQAhc5QXd0HJwCUx43F7R7GMSDKtj6X2ZJ1Zedtpk8H6WvL1hDUKiuHG8/gUc/lWxQV7we5LpELWe99NcvQZAVMwEH63PKMIg2TTlS+Pgm+VWw+fwQZqk02ziiARXN0/qFCp9mZsgNTSUBd2L5E2g62WXeLRFE/obetwjHafgUQ9Rfqja+5eI9zO711OxcOo9taddgu6EeqPhrACaA6tsrNTcrGFeDNQEw9Hbr1BJmJsDoASZ1RBd0Dac4tabRJVimiFjYVCORaqj4dFfwFnTaQHIanNkSHYrFPCRQv/SKnw9fSvB0vIIPfeGMeolT2cliSKZcN5GLv++N3+SFqRf50tVaYdNWCmbCS09Sy7RFyAMgyda+izvxWag/XLPdCUGs99GEIvYdMyDZQ8IiOyRYgfOi4xZG74aypgoVXBOqCsx/+WqC/o+NMvJ+UmkIi5tvIWAthbyvm9v8HLyLsTYC24F2eOpPp3oeDvOl3aSkE2ABsgUITDp84Uf+rZokn85iFyCM6CCiNzrFv0HEt5TTAcF8yE7QO9YwYAllNe6DNbgyn5YBC7jAEtzYmddVPHvilPFDEj8iyOLO1gR1qWQiqHoJfQfMqFCY7jeK/5odSi0tIa81O8KuagPrwqdKZLzmn8fk9H42OVN80s2wMigrDkcsRIEXl5AXrEpMlWsKqifT1kg1A1CaxjJI0CEy2P7e5BQzsCLnimHmV1QSw8uU9NH3YPRShO3IHoS6JmSZjS2aRO4yvEXR6lj8nTPaZp/WLnNiUswIxwqiRL/G/MYPouh0rM0QApEAk9mxdLWzH/673VsimV/gLmsEcUcTM3SDocVeYFp//nrm5CEVdAq7wjSkl8Fd0/GnpV70Zg1+71/eiQAc4MVyesOdOwTW+WcdNosCwo7GegRsrnJfYHr7+lV74yasI1ZWVumWyGxT4gloJVWtAzcoXjQWYK3CBOGPLIZd5/olqnqJn9rR6ckxNacWg/tvlIKOHmMG/HJOM/AX7IifQ+MPChCwUAYzEuG5Cww6JZzDAPta3kM/LH2hcd+qbJVOgzRRVa7YQ1obowJvaHYRjgolvmc8sEbVkd02BZGmJz/zFQ/80vLl3mXJl1n9woVv+gd52XkfGNupl7hp45fBWRG+gUbex6a7JkEYTj47Xj8KOs33DZtTCxyw37rZjXAh1mSQK2k1fvHBH9gK8786Ud2APmFnd4PJfFbG82djkAPSSGGv3H/JaXI6WFCEeojeL/WTOAQ==';const _IH='30e9d3335b1e6947a7649fe9bcc4f9e6e652eb6aca26e84562866eef76b88fd6';let _src;

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
