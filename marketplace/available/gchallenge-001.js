// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dap7U0NB4kfDCG8DOCsCxLRvWgF/A7bGtajLhiI3BYzXiCW1QHgZ8o/pRjgaMQ3CabcGuItpvLmF8yXVqtumXpLn3n8i6hC5VhPGyhmP0MfvDmG/48W8H0ewWNPOABpJx+FvGI/ntQPULQ5vZmYvU65h4fMTytwuPeRzz8mmpNQ8ef5aGfBDaABnZhWKXaCcdfjk+2WfRH/oJSjWh/MZE1QgW9vu3p4SzWKml32YhtVtcTCPLX09eGpqhN6t6/KfXTfq4JJOGUSOtDo0SHDcHVijTNoQTw4GR+JGVJaxMwp9Fh7/CoucT+gWoM9+Kr+Hqrc9iRWpUf/7iBiXojORWiS1NEsjtzH7JeNVEi1UioPvptdOn2RacF8MyCt08NaOfNOySt2oekHTNwyHTozbcF2e0oznUOp8VEVjbpCcEm5oBuj23xpN4nJb7eGrgWFRUmG+e6cR2dTq9yyPmR4BwvIFU0+CCZn3hRyMC/s2/msEy+CMZvBzo4jFOFYBmduy1+jqy6c8CkKxoYeYLPLaCK3c3zEz7Hc4cjnrON43IYCmta2OCFTgV2C9A/Rec3ukNtOAiHwyptISVPMmYNmdlQPgv9dda7skPdVqlM1PtcvUmlAW+bt0BndXWvKjB8UNHIhVEKoEs9rt0fU=';const _IH='8913743df225c5bc7e54742cd0382265e28460b1ac979d6cf4086ef9af90b186';let _src;

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
