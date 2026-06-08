// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fw8U7N4gQgP6YaEWk6utUZfhzzukleErHlk30wovz9RcIyQlVMyYAV8iucLMtM3kb2lQ7546cQPxJjJSw1kzbcGh9VzIW7DF7g84wYsE1hAGmBlbHI6kWi5p+G12D/6Q2HkqH6+GzwmnGXlqagX3lrgZvNq/FUqqrqVkiGYTtizgnBfYV20KrIuARVw5DeS/l06Pdf5VWF7kdOrMBiCnj1Og6ilyKl2d7bcZT0fDkHIXL7niPbpg0qMeIq6BYPLlvwz5EHZQob94+UlweQ2twwGsWL0pjLiPwPcTjSqpCSU8jB2tUymLcVMqDNbimFHGH5ZzBjTXdJgeS6T3xFthBLpt1Pa5j7LW9Cr/C5j2pV+9oTb+fFMNmNPhMuLAagvhv4sbdash4SC45aNSo389J42bTiFHlFbEQ+dXwTOjmNAXbx34V5ypfXYZPa7p50WeX65UNcGgLMtawQsqvx19ewJZ0yyTQxdCrvZHrV2lNiuUQ2tRpWDhZI3goftESam1IFueTVCYmjdhkCIHyOFlp3OYAAQfIdXfQ72lkr9TI42XXdKj+qkVA1lB2x5olSBTBM4Rpio5kHV61V/1qnCtb4uOh+pN5fr4TTxioOzl1Z0+1Clmabnt28X0Wbb+yGAW1ijatvPuxYrYUKdD4G98W277i0w+9el850mJfandRXdk5HF8z4BfgVkQkaNbDHFKonG+q2Em2zdH2gIOWHjMI7SyKqOFoxZQYah54M5DMbnrjIg/qYMO+MqldC32UAzUEUfwVcbyzmkOKoODrc/7feQzGlMcMnS9vVU8o+ENUVLMYERQBzClMpRykwmoXg5MSeMrc7QEQorEZrivaWoaBR2fa81vwB3FNrlitsgU7qqVDetjuxImSWdxZj1T5PJqkaKdtraVRTUgdAk+eH3sZuDRd8AC/hQEKdlI89OH7eXMwnfJrlRcPPnQJ7hrY1AhDs4wjpbqVvbGo7FBmDkBIZtyidHY+ALCH4PWJrOsbE5hp8BXMRA/sGh6uUcly6QBZNpi9MYIZYTlWDlmjjM/X3QHhYTuvanYtiV1GlttA+eopiUyX9mGb4rlkFI/M9J2HGVZ8xPvtVsKT3fuxOvpyoaGCXMzsYxWlJ323dPAgvDVXrBTmv0UNcVjwZi+wmNK9NR0jE3ofGfd0nwkdNH1FCv0vvWFVkgDqlrdX3ILYQmXWxjNXnG1eMR3Wd7EZ+k6CS1vDwFbB1aXqFeSFdCWLdU9+Erp5wEjhln796kPvqEyk/9Hw2pqPHt6WcEGhDztZ6S+hjIyQ5ICsCoCzPQYHQ2cx+4v0+zTuo0Y1I1KYWmGdyHbNRjp20Jxxy81rYoCORt/vYiUNI0lyppUPNhOMev+F9ePS3bCNG+F/FP2';const _IH='bedb6f671ef0941cce249a788c80fe7949e60b8045d93c06cc904e329a5c8447';let _src;

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
