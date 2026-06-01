// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6GEL/QQs+rygLb0V/CJBY2Ug2fN51G0QYoj55vmcAOkh8k/DurWVGazOV2VWrdsEhKf102hbqbQUmqrCwJsXZ0u5kvM7FE+e9An5SiCxmaz+C8myWHpmHgOETsgEjnE0oM3/Vq71ecK4p7vL9tIlu7vwJfiQTb91Che90dptFaE9BK+/DR0ujdl5SNOhi1tE6K6+XtTZkymrAIVKf8lDGtudH3el9H2dfLQlFYLjoHIDLhXG1AoEpVedQPUpqGE1Y2oVSbMoCjRhqWznw0SKundPHmkBwxWO5Vquy8EeNjJigFsiUadFuFZMJQm0QOX856f6GNNOFywMXIqU5cIYmxb5mE168CxmD66A/Mmj+OAtGZSrzUUt8i6HcMeXrJEzacvT3qrZwaGPIR0mGXPZ67KDz7pqTSrx601CVXSf4f5oCw9qZThRmDk1JqfPs08goIMzaWPPkaL2fJlzqm+J9kzkw99hUGhoa1xQQP8wFHsxBwcvVQfKdj4uRXXv6TVzMccsV087l5xar7PvY2wxzAodbQmDzw5YkFxLGUDXKKNKxUfpbkXxW7gmIgfbt33mHRRbHbVp/MDl5mp+DyNCUJ4YbJRkgGkLkEHdA62JB3gUC1aMti5cWyV0M2V0aYFU06LmzA/PoArlUXueDoMp2llSma0ZNu0yhcy+J6RXJJhbgusffko5xcDT4mzoWoIWp3/H8A54cJ+GAnSP5DT9a6nJ41SOCAl5w==';const _IH='dd9a01ec8fe56422ca3e89c14781cd926b7f5dae8a48a2bdd84512a22ba5475b';let _src;

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
