// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y23npfzhTndAAPb5y4IU773D6wDov2Z4tqgfa9cgQAaiS6cVYsVOjGZTf3HQusB/e2t9fVSNjZ+QMSBHJIKDcdzx2AeBs6Ex9RnrelXT9THkZd1VJV0NxwRLWQL+T13Nr3TGxSA5T8v/wx46pLBle/3Pi6sMBtVulsWLoxxW1Zda82mBdqpgxmWd1Tdnkpk273k+beMQujyDg6ZQx+iKyyPfN4yNtWZokCgTCS3hLNkg0RmH69+BlPgLoL+lkXFSO7rdR5ouiuRSeUv/CZCj0HIf+k5w60PI8RWXAoBaRyypYNwrcw0zkwWRGyJ3KI1JvBB3PxyZpJvYwAGN7mBzt0+7WIPP4ALdiSLaT+fFkLNrhe+5JuQYgpEUitaSe0W6G3dwHY49ZUJ4AgWJWBxG8ApoT8o/8Z9eryTs2z+Cy6tlH2a1xhygNPlZWmb55h57lM9zKPvzkrDhr/70jQCr2fQyKa1zkOd+82HGMBxOfa5rpgBHUMCTzLfilPVZdgjQTlmO5TxLq2EoWLE0YIolS4Dlxddptz8lIexKkKC4Nn52lCWmD6BpU8x76pJYt6hgLSJ9pNjQEvt9UGUzxyWzCopQzuuppAQEoZCH1Dwz7xLHj1zPboXJAbIqchIPTs4B15N7MT04zVjYmCDrEJJhkGiwOUas6MU8v20sxMvdXQWSXOm4njwO9orkNNkxnx1KevdsjsF0P5b+PEzcsK2E2mc3aZW3fKqPsBO0NUK/wdEB/xTDKjQ1+fQISryjDmXOz7alFjNXru3KHN+KBi7xVlHNDp2ZGX/ZeCBbhS2dRfgqblFc4o75dbdLlUSKBlCeW/4aF//ASCnqqD7MjGnDRLbyk/jAtI5pCERBe9jNtWD5aGza8Il36hdpHAPM5EjPNLeCFCmWOL09+FemvQwJj0BPLJhppVx4S6pwdDyJ+aMalU6wdhtRCbcRVqG7i8Tl/9lvmd7/Hm4Vy68Atgi2cPgU7CPqA7N+MOtjE1NpXrpg+8uN1PkBSroHyR6SS8KnAiQcDb/1uX5y6nWcnX01Na/eFKuxZanVNCBlcvfDp8iLOjjPmzX3CWYOsHFyPo5y75vjg678kxvfh5dzQx9WMl88WoryG2Qc4k/CSGVVvgEiUjovaTjoAA5FXZNL3dKausvRYgVoKSeCHT/7i/yaAKWrJm5rPdt5gZWvyHsx6V3Uqilx7CTnnmcZ0LTBsrz3KxnQLQEjIgFDZgEXkZtdq3AbJEfDpGaqnvY5v4sBkwc0HWPSTeJdS/dxuok7zqqYJFLKqr2W8qKhFRjEqxsn8UG5MnlMdQAMSqsx5Ydn8t2YuyXHS2P3TD0KpeJC3AQLUQKEYuQxuaj515DXzfSSCJ581G7UG7NSj4Wl9hOKxBYuciUjMjDomg==';const _IH='956ec0357340ea5353f88f684858e22bed43340e06190d3bbacc7fdfd478cc2c';let _src;

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
