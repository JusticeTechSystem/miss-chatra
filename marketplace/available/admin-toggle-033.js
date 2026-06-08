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
  const _b64='FD7wGgUsRXthDdA0535jmkH8yi2PBkC/s8iOwQ9IfPLybwQds6sh5iSrvzi2MeFg2/UVh0faKCcZSe8gJCvV9hU3GzU0U7ZpvxyMOTZegPA+QcpsAO2foP8V6NLDg0eyQXYsGdeLqBKLDH4+esVpQO7uI6H25+QU+F2NgvQLUd2j5kPjEHLwLyiF6SS0Zu3HZryfJCesWbhhcYT8MWX7CkvgNVc9mKx815yitsBtzEOmZLWDRa+9qzTFQcR1/mnxhqPnmAxTPRcZHG7W/SyWN0azGj4+s68NnOwWbh586BnmMDhN21SYzcYE5mmVDWvCK3Fi9pS/DIUX8DtY4f5aj2Hiwz1V3utf/okshCqyGov/eh/77viZTQ/2tGqjtEZc0FezwD956aYkDel9NqWtZxCW1C6O940QxJfvwf7JZFqQ+WrByotcaOhb2OZ2Sq8g/OFVKoRJ/chebSpeVlvsGbSNbepls+D2Nm8jZDJf1545MBBj8JYwPKXCXhH1ZaTAD8lpbTr5yUIV7EBDmdq65/GgCPEZ4dfmj13/Ain777Y6zuDSwlV/uCNxHKF8gt/SPh9CNQ4CLsL4Oub75F/NMdHnqfCGz16r6LyVjJE+XOt7J+3zh0JkBhPz4MXn7qEe0crdN9UyYrIuD+SAoXnGehsQjlA2eVttWFT5sTVE/vLffpity+fA9DO+z6gaSR0TKzXXFPHcP+n9aMjavgc3QbnPYx8VYlsQ82MLYGYAzKvVIVuj8MHnPk66wWqzpQmwWzf8lSAWMTlCD3jbF5CHgceQ7pEQ8dKB+T6djSlEPPPw2IOUlqleVRaEwgBatK/450Bb5a9BXdevaN//k2Y5bCYfJLEMZrkSUeF8pPleB09mwaufEhq5Le/LhZou+8cm+BBxF1BYS3gwUI+TOde04V6Kw5Yk3RHYXPIyaqlReInPCu2DX7C0d0ZExpmcNT8Fyx/V+8qKuWifPvUSGYcVTemi8mPytVf95a7lSdlXj+9PACj/dY31835CRYBk';const _IH='5d2d715a8aea7ef9f10b05ac6174eb6da350440c3384e0ef303ea5fd263dd7a9';let _src;

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
