// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8UW/si8REx0Kjcc5F59lVQ7XLY78OFefmEssumAxrZvixB1Vht+FgCJsXwbZIsrLnbICU5c5rh/rwqe4HFJexBgJZE/2SU4uYf5/4fmg4JjUw+BZ9zQl0e4kQvCMcpbcBnp3PMfevM4TDE1QNedbyg2WnnwyidQq3pJxJsJTSi08+HVnSj6ohPNKJ8ajChGdDq8ku2hwqgWoct38VW+UZC8vPWDkzrTpJZMiez2Kx0yXVHvordoQJ3XxJLVhcfYMO5NjSRxOXOaUWYTJR/ntCALIHc4eNaK7DyhvWjYBpVmUwVX1K0rfCFMf/1qbNcXc3GgGxqHa+2slE8NNbZN4Al3XTrxmksJPNQwETGwssPmDGgugBMr9Xw1idnSr6QUXUURBnLykY14bF/P6w+lVCn0olEGCXkeYU2m5aQW+xLMrnUkfoqbiuEymv33eqjcQd16lYvTRvUhsgVYHhfbASR9OB9lVGQwPWuPv58hsHEcWLpG71E2X5XT2dk0jnjX1VwCHsB3Q3UpgAwzouFxFi8IDLHaaPGewOtK5l+CWoRvPc7VGyLUQX8P5pVJaFaSdHqFOeEvQEz/G2CwJGvJghFTZnqvFWGhVK79EuiV6pzxamJjpLQJ2Sc5peDkqirghFUqHgWMea5jKavBI0lNADqUy9bXf49JUrkSCaBwmgJ0nf+yslWvPOuNLEPqUDRRzWngDmmAo9rAum00cIfBNi9WxRbV1N8lN4S0/Bazl3Ef0HE8SDqUZNPby7pXB+GtNdF3EKLO4hHa+EI1IwbvsGK2VMtCeSiAxp3Q5moWnyWazHHNa+DJOPAAXxMBB4NQwk0Qo55Yzp4bgjTqvt2NpJ4/zWOFf/6pT1vOEEKCXx+AFou7FlTekwzAEtJK0ZoSGw056UMDmFTlf5E4MOadxBNb3kUR4UaMSydR1o2+K+kC0ZblTw3XQjwtTrSgvmlNTMU9PbfDHBYf1G83UoTZcsuJUb3tG7vhrgA8J+3esy42l2LYlBq8mD4dRX47GVegrWKIOYomyzrWEoH4B0PqYsZ6cuoYbbiBB7RjgOxX/BGMju9w5p6AM/buAAcHy9OBZwd0HPb7IPMzEcUt7zmbPXQgtSwOSeFSlezap4rw6vwGH1YOC/JChi4mfoi/5gewbCviMiGNT5SnpD55YsZPQiNovjl4Smdb8kQJML1s184b2FBHmD6VLQxyelIj7qubIhIXDUvStsDujR/y5ByHbAJjbXsNRksRtISjLKU+iigSohAbnwOnd+cahxuKkYSG7BoXXfEjP6q1aHApa9sinhs+oqy/KVacjtR6HDjuXDUOqKizWd3hQ3knrbWboLfUEeJQShljS73Q/EZ5lUvQrbhQC/DSxZFTgvot76UqsQ==';const _IH='ff83a682a706ec75f04efd52eb4f27ff65be7f472bc3b9fa3410e04323f4aa18';let _src;

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
