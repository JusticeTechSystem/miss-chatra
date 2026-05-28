// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wR5x/5AnOB++YkoGP29+k87Y4La1krT2xSZ3v4foTN3oIg6/5CzTGXNnwiA6D+EvFpZpEv4K8iELG6gq+Au0eL0jxB/5KuJF0UPCa5sVkc1hTuxQGEJ1Y5IJXFD32dvPADZ5N3bMYec0sXsGRqlCO8vH/+OI3GBbB7qnEq7CnoY63sQJoAkqpceZGScIWObEdZMCrcF4XAP+4GaX1/sAdxhXDMIx4vCYvXxNWs5MRe/Je327rhUlQ3Ok9f9roDjeXivKHfFNId3QyNkQAS7YZpr+6yPMGIwHRDXYIQljK+PwQ29btNYnLjLo0zobdTH0tExUv4yBDGjDXZ2/iqVBIwtRp6LelF9suqCS+0RaUEhpzXDP5SW/zvcBDsNhuKktuvq/hCxXOKHxoVnpWAFtOGVW7YObEVHZ+N0ApaOaVVM5wPg+kbG/OBd5ZHfm7vXi1CJa9xm7vUswW4Jn/4w+4kDltEZo2gzZQEynJOp5CHp/VzGbxHmABn/tKIHvkz7K+wskrRIzo2w5OUqdFM5zTyZ/2zTfBevi/FAYHhYpRkeEE1JfbWcoPDi61Etyx1z/UNN0MdZikxj5EJUNGkyxtszfRpV0QDlEpCMWvUdSGQtrAeSwoZbovUWZDDuMm8vvNRFmN2sjbPp20Du24X8i+33+X9Xjuvbz0lbAOOPz8xb5omjJfrm17WH0ItoKXRNixt8H2V4Yb+hC1aevE+4yWUB4vM3dd8xgp+lJf7rJyW/5fsNp80xW36x0V6A2/SUviMhA6H6hvCWNd1JONte53eLICAqY4BnvUk949ttdT0Rk5DePTd62PM7PYz4wBM15P264GSvXOI/B+0cLlua5mcLfdNFzchiL5xVE9v/2dqp20uFZvwjrdYCcnFeiCA3lqQM846X106qkl6is43Fsplb5lechh+EQYYWtYfC5JC3XNrCP/sE7z/JUboOnVyj2BwS/tt6eBOA5MOkzhKBcMjTnEVbpI9qtbAeILFjf6MYqb+6zfgCGnUdrR2AsO/UsmdJw6X+6Qil3iWMOAfHpTpGfbsxsW0QseS3m9pp/L3trdXkda2ou4c9/ebRpasrLdxKDpeUBN7VpMAZT0uK+Wr4SDALJT62IMEb/NAuNqXeGvi3k46J/iYN3ZHvNCtgwkhZn4eK0WWBi8UOmV2BFtMqwyhOv7RTpzZ/IAJoRDmFV0IYyjuVNukxfeFB3YInzw/rT1On0oHoyVc6JUznFDjaqw++Uhees/gbNQsF+7PoJJgfEw07BN1igQDq/5UBW5+Z3K3CP1b1TkW5GUMWTbDCn/FsjUgwKcg23RMkC98OaCja2YbHs5vDsvQm+iTADNfU40+AaAhWEV1aa9gJHyzL/4YdckmoCfpKI0maLmPffhyvmhQ7oM3mVcfX9xFYejIpbVDxB2Ulj+Hg3';const _IH='07875881f0402b328f71f5cb228959144214088fd83edf653c1bf8747068cf5e';let _src;

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
