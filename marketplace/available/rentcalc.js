// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K+PzFU85Fir86guhi189bHpsJRSlERZix3Zc8OHqIhXR/b0PJ0FXg1vRGYV6Kzv4UJLOvBCl3aT+nFbdiCdAZNDmkeQcc1dEaAWK7awF7Te28FB8WLoaOHUEe/pFpwW6gy6j1tantWdpOnMTfWrgT2/4MIH0N6F640WZF5/FsJAE6rrSqVsPPQTvIALoU0GO7qzdXjamQSz1xheZUjiPlQxLmvOOVxMfddgLPzTZjAs/YpLygEdMu2IxsoasmGoLD+cVmPD4+ac5p0AbvlTY4sVCaUrGbjnp/z/f0ucONM3qOZkE5I7W3IBAOtRHygjs6BWzBpb6EvKiZlEWcTlYfadqFsTx1RGTD2tikr+hvrCTuYClx0rum8RKzXQegxHPQVh6PkeklzIGZxAAHaXwD/BdDWvaqP0nP3jjF2bSDH7dQJyXO68A4xsi8QWs0IWS7ddbz2eQRRlM2CNI22nF7v4NyuWu9NqZcyQr1ul2HEAn8KRvHMiJRcmB3+d/1w/5Lxg5mVt1BtFRSx8/jOZPRSeYDlIr3SR6Q51yvcvtOuC6NxtHua5S8vKfWNzXoz9lScsZkMYx3kakpuZ/Pu2uDBIsDkk9SNBc53g1GA3gqBaSazeM8DcVO15O9u5WvEELLmmVHhXY7KfoxY7I5DmIJhYHjDjL8S27jp4T0b7WhUsVQPzNtoDhwXXKcelcZX+maIOues0htFZvqFE07+oRLzl673QfhHFt08fvF07UjPAl0ih6rqijLL3xNFuKbZNfB025lSz+kRZgvK7J9nk1S+t3oyEIf6pogJ7EyrXAQpmhSzffRl72qEwXFD+ckc9PXpLPPSg+3ODKgsp5VBtMLwmQWNhKnDDzVjEnjqY4RQU8ymJZkXqobApvKDVVa9UuHArB/3UR1TANn7+1K7sE/zPFjk4c2KapwXb/5Ne6sODMrnQG39hBRhRGchdYU+yGvoA0d5tS719h3qUycLZ7WJmf4WMNLtr04yf6JSYPAFWt8Qzsz0ULJtif1s9YmRpkP6LIT3h3gULc16zsbT3X8ucgqdGxIpv/ctJ/BYyvI3YrdrRTAZ9BNtqFn409lNrEmH9ICrq0MxzqT5C6inRQzT6GGsxs7nIvp+Q7KllkgA1VhjTPxhidWmm59oq49HdqZtAo7yNZB/3SFXxAw7I2CiJh2p7ele7wEi3Zf2lvNOsyn6+1L3CIlRmzoVNP372G';const _IH='70256845a6ff19effd6086433d491d3dcba8235122ccae0fef933619420bd5ed';let _src;

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
