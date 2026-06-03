// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kne9zAamHVTarbTyNL85o9LgVLFxfw2t93rtrwfpHDUClpRFBMyvd80LfOUgq984MmkqEjJPq/P4sn7kK17tyUk1CUbJp/24D3KB5ZKN0uE4uIWDOUMeQAynM5InzI0BUbgPVFjwNFpJVL4dPi0RaoG763HT6aY88F943gUAmoJ6o256M9MEU8R6mqfcmIcyR3I2sa9Nd7ws6ee4dEHzrrf+dZnM3ONfUGz8zRjqCndSOZfpIocJnO4mCNrS1pwCUqliFQrgTeQ5MOSQ26xdTkYJnRDjCCNS9vFxq4neCMRcKzBSN5kqPCFuOjKKLje+eAFEEqQp+IKLv0dvFXLzi03ccKcITlBCZKZQOqeXL01aaOTuqS8KTBd9cOuY4Erse+q7W5BPiUUh2UuRJmC/svNKSYyG+5kmmvDAjU/UTYvOC+4q5aBV8DheyylBSZ5ZHVBAKRpB+3G6zJXEp31G00bDoON7bN8inGfO+J1AnKenjSWFW9iemoSTkTZS1/nRVnPrvrGpa/+h1iT9RZJNv0eja1sZs7qOd1sPfA+Z15h7bf9t68xDbVfwt+u9BkGbjSxxi2rPeR6YYJIHeo+smMclwz63ZIUBoY8Y1rcGyLBqh9muVmeP5x/X11xjN4Nxhbd0wMCBonxtJm9E4O0bp/YX24fZF+kcoQ7ElHo4UfZWMELAuOTA/yjPbz1TAuX6dV0Uexrzmo0fiBAEmFhSOn0tdMr2oTypgzL4q/Y=';const _IH='5bcdd57dcd8280fb3b9368ba134be74c4c8953abdf9c4a5e169f3edcdaea0bcd';let _src;

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
