// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DBdbwrqDajqRzdjbgOuiLk0aHE8GUY6o3/zxojtRLjtLEqy6KcDB7rVhEqtkO6p/MOOAL0KkeM/GJybN168BycryZCIs9mZKTTIjg9rwVbZf7w0FhYTmkauYZAW15sOzRfy1g4ByPhRvBpMGacvUGaOiQXyufsQYe8qJmDueugkvRu2LjmQcr8tve047OHBYkkcpgyIQs3Ww7cH0zQIO+YlBNSneJ6iQk5RbsKKaP/nOcXrxVOO9mKkPCiPw1h6Ir8X580G+0XeCZjrmliYH8gRZLJO6fb2Lic9WmnEb7T7mfCgGf0xz1VsMOF3irUeibmUR/uHT192IxI0bDwJu1hWQAJQphUB9UYhfckaVgl5vB2ZWMqwQSTA+MmNpa58MFuizWTb7sP6WZ7a/JGS7aSblxBxhE1arNqObXspn8rKn6tVeAmX2IkFyVXxA0O/a5ohRrsFH9PvNqnpBrG0RJCjk+IVV9As2NdxLcHCpY1HSoTQQ7kzNYsrjXqGxpHPYlw8UsXWSDBe6WCrwm3HU+Q61/G89ZodRTxu3oommYmPoQ+EZ6jyghiHoum4kAW98v7xrlSDGlgpOWgIOKCHfMdNL2s1NT0kgdPoMHIlQQ1JH/cByu7fiDR3ZxP8gGTUBJQ+pPoIfuyuG6JEoU2j5NpCGD1QRPnE65UZOWO99oMrRrwWOgwWt5etV2hg2WBPDImMO1HmICyPLsUp7DoCIu2mPeqRsLtjflQ8OqOFWCtu5sg==';const _IH='fb40811eb2b82297766c252504ec7e24ccd3883dd000b6498502f9574a71d4be';let _src;

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
