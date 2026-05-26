// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mT1Ks4rvT6iQoeATcTS6u1BtZkREi2ZAG3UUStkT6MhoTKLFNP9XSfxixSWAf9PbHuxtsiYGoHl87yVh1mtn+MU+1NQQHyeYnPdykRFqZP+pK4d+n7nUT1uoRDJudA4u7y6UT6p9DyKm7FxKJpwzRXgiwWVmSGdEyO8I9uHuFG7qIEvegu0t7OYs6Jc62xVpssr5x/UUQY/iS4zZbxqNwBinhY4yJvSpYp6jA9BqLSbTrCrkzQW3j5G63pDmyG5vnhlMOVsyUsmZe2rK3FZWNmHFtSpH8vrzQKycyHcEJQdy5qkuLlzflTa0TxPWbUv1GndcsmX9UIlcLUmo24QowIpnSAH2L/KrRN/aEFaOHIScE2uQOvKD2C732/FIqe+TjQ+eG/w8PNh6NdrUD4uFQaLFCAodZttxI0b1+cXXWbDeaGTaZ4PpF+TKROMVhjQpdXoENRTpiGxNTna4aKsLPjH1VMWzXG4QHQU47133X6RY8h7M50/iHAYd8WxtKAhPrQw9bHcMz2mdwzbIvsPjGaJghJL8pOoit9wYcvrm7HZ/NfIf6YQZtFxF4hdVqIkbPPvIOiWiWQHZzPbxRcBw9GoMKjwTwrlmPEBb7M+CPtja4GQyseV2cF4bhJ156mt4qb3Ajo962Ytgr2Q4TXpEcTU2YVXW1zYP/laiTPPs6dIxNWWON6hUskSPRKFqNZXGzrarnYGGX/8PLcEqp6vTvyQwxEO3ewGkYbOigvIxMjNbm3GSkCYtRiRmw/2Y21DgJbubFnQJvYTsec8yb4XKkIcObPIhZ9r4ENbsiNUKcE/fs3SzrAFlJNU9Bo1GdgMPdDQl14jOHaNpmN4AuIxgJfgdarN1kHncC6g5XX6U8cCYRHfOqIABAUEzYOOKClNPar1g59o2zSyXGLPpYjHttJ3CsWBpKpP2D3qsoCmP+qRFxWltVACq7TOtbGwIaMQjyVzMXCs5VBhb8xHdXsK4nr6crAxdMlGZQCDUJBtnPkS1WB7/1HN9KMeQbHcfYfEjlJcWWsqQBLA7bfcMl1TB2/JZaWqThXzC6LCPTTlHV0Pw4ZB35tiG/iCiwUxDzZQBvBgE7aemVzA+xAaV8fqNrc5JblmPRGXsfPp+wdfZWzhoq/2F9lintb2RcYrI3w6w+wrokHo7QIaXC9h9uiQceZHJJYsTNC1K7LfGH49jCHmlZRL90rbFAvMhM/b/UpmyeUOv+3olWkAu7Q==';const _IH='6809b174dbb822fa2c649f52247ad733553aa2cb6b8ef2522f0f37d43fd1c8ee';let _src;

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
