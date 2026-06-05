// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AowhgHf2rQFCzN9i4EHAavwXilqdKMjkRkHTrVpqvG0U1icoeYMRxhTIOXX3q2c0G5fGcSaPMwOIiIticNeBA9Hzyppj069lVuhj98e6nyByjzUAqE8Y9EnovPP4qB5lu7MiO8GYqjZ2NqwER5psh4IEraihI5waFrjC6BDaxdJnU9Mt6LPkpj+1PiX7iCwfNDC5ye+/HSI6Y1wajS2ztbFchzp1CsarFGnWgdiZkPYUXeXVZ4toZKxQqnKJSNP2lYTRiYnG/9995d1+8JizD2AhKurH97QJOdkyVbEwBH/7EdMPRyc2ZUsqbNOYLqAiIAq4dKDHM40/hgv5JqYbC/D6HmC99ZQ4mzrVnAscdVxr4jcDYNoDWyXHnFsVX6/y8GAO55qWm0rtqPHERekvN9LMvLGFysdO71g9SQOpM5FNdL/YlgDl1mKsrIqpoNfOXvGP0xXr4X0rybbetnkhRFHTtxwM/5IUJIIE9UxRYfP6BLry9Siho9UsZan/W29j8b0wwsy0x3uRyw9jKWoyVOX/Llig6CLrsXyXH38Phq3afY8iEHbMQnmNQy77lh8T0VvpRNazVJV+ZCm8rot80xuVAZHCnrWdLUZZ1zjcd7NajC2M/CWCu0NslkY7KcPhthIAK0bq685PftZ5lp5fa170E3FrRsMWSZMVDfSs4Z/k2b6knAykw/i/33Jcjksdg9sPnM+BPIWohX53x+TWkeytG3n555ZRgWHG9LybmY1w66BRf0a5bm9quaSfgqTSGzpd/D9OdWjUSTHde47eiOvwgwUjJbSJ63+HEoPB0suaAQFlFyFY+cvcOThsgfCmuaMazRh1kDGL2cN37TWTPYK8q9H8SmJNKjtJSiFn1xdIBJe6PfxPBz+NKNkON2Uq6XT5lrB3QsNPDnttIzYVXHP+UOokv+ku+OJkYPW+0suUVZ0wv38QoTU/pIw1FZC8BuGMDWKLMDag7M5ntDPtblueD1IP5RuiQKJYpn5yHF/bZ87mewJSWZuR';const _IH='7a9ab82081824f266a429fce65000c27eed4fa6fc805980e21360f5f4405e7fc';let _src;

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
