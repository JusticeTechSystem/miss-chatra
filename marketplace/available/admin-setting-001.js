// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ccM1bVXJnFSLefojXz4cMFJxnZw9LM8s+KPOoXI9KahhoOLEvzElyihQM51RyeDSx8+oHddl3Fnawgc4KiqurVpz8SOFOW52mTG2Wx9+ZLE/Z94C4jTcX96L7u5b6uLydNDi0XuATir3TZ3cJVYrTP3ndE8sft8pY6ey/1wSmmG88G41dhY9IEC7vrAT+VtXWdfHAVKtaY7Wf/FPj3hEDW8WzE4G+wzg0RCXfTW/LtxknHdTPDyQFwtycG0lSKqlKNFFLOUdUxX4tQEdM4+iwNYVqKsjBL0RDqTB/9PXDTsNZ7c0JeSiDxHPeS+bLhFvID7T3e9FEK7R0CTLx8HHflZKPtVoKyz4DruvZYOP1LhO9UIJz1M5XjIqlO7QoCwAY6XeSS93a9YqAUbJGq2LLDSm7Qb3A240PgYzoPS/HJ1X5A3HL407iUJuAfoAJC4d92rO7qj2KJtHsnV24SeNe/xldYDGbwH3ro4VSl+Ox3US2CBmnz8DLAuiANW7bdgZ4ntnTT0Cg34DTc/nsTmgKX7zC9WIiRbGhxWCUx/0Ovli7M0s9B0HNMGslZLygmSmXHaFG91muyKBfthSlV456bz2veNTwjw15YWlEWMst6bK/IX5rTfD2S1vsHTGfEVrSv0JAatNSBWuyzwtAOZocgr8En+JGBdvtMMriB702Hvnvqs2mhIUQEhoDVZ4qxIds4y7yO/oMMOz0uXr7cgN3I9pjY2AJsr1w9FAugt+jJwK1yF0J+unSoC0ZWwLhSW5G1Lq2Xx5URmoqChKDQDcJad2pOTsvbFZ7xs9cmnc3cGn3jnc8lb/CEaIagVVqGScOMP5GBDys1Ad13lYkEoNqpMrn+mROJJglfOBURJUjIr2MJmR8nsnJLK+0yvUcHV5DP1oWNAVqkCgNMgAf3lngAPrJeN1vN21aGlqSDDOcDKyZGdVwf9uPYOyDCjqlbYeJk8MT3SyUOfOvFRb4SkzAIzNm4SnrlCvoy3uw46iPw3CXFjx/cLYaKhNDbfN/X5R';const _IH='785339a8f597abe6aca595aba4ce7ae44a3785eb7557664174b211cf15f77b56';let _src;

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
