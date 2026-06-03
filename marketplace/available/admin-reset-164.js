// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fKYcmHpjUfpcoAf/l3gLQncIhkQ9iqjGIiFwsNSvOwtB9NiG/+DIYB0sPPGK2JIy/epOTZYurcKkUueZf6XzUUh6/zikrYYQBRwhEljVzR7hWIsTOUz9OwSpKZicMfKsHVs/9pzMB6MjMyDjjG0FNPmgG7Qih1jVsY84SHmi/g36xLWj9IAgE/tm4ELqUP1vq0TtvWK4E27xh303p2WFIjc3vPd33ye/8glkBM29Q6UEMr6BWLL55qTb3CoNaXjr2/i0Gmb+kJvLUwwv8weWyZdsGwqjQoDBEIWYihEvWI2/MYNhfgueJY7w1vmbK3+VTn4zUOrugKGeIKrD3s+PYizBQeS5G01zS1LtNeEj3AJavBMsvhYuG8rIY5oMjK2gUzZ0lS+gaRe+fHZf3mP60K3YCIrMsrV8H0Ooh/FMErkd7egDPiQHHG4hu4sYVuoE/HElztWG61rJ5cfcEq5UpcCOPUm8xSmi3hgDOJjmoMecT8dOzfh2E/qoXRdOhxJ8/D925xXne7RL7Y+3l1dRFgif5glKLUnmKGWg7k8NVtH35mSc1fVJAzQub84o9hsFGEtODRZ2JNL4tx6qMk96xbRpJekLXxnD4hKmFhpxdDM4AC3U810PZ2Y55e4hvi2zFpqlmuuuADxeQKij5RsgGUWtCMlZryNrggkHWB0nRjtLWHiOLDQhwDIFqEVQO4DihjRWAYe2iIO3xsA3Ezhd8fbSnqN/iUQeNTAc9H305EB2AfttW0rKcmxOK/jKTC0NFZz/5pT+gsvoVDB5Wr5mJOkMImeJ0BuB3h+o9M2O23JUIXbqCWIvvRUEHg9kJqqaQRsHiRwJqUvr5LairTWUK/bggCWiuuHEExj3PnS1AszI1gNXvPf8Qm8GDvuEt4o9qUo16oBFZ93WnUY7CPQLhY0Pe9LcRxdaSd7vAvNpQyP5tKhJPtRPUgUOWOuMehEykVvBzCQ3vYVbgFDEazeEWwLemd84W07dKljdi+QkkIW1+/GuPglI2rxu';const _IH='03d997d7241a0374faa711d1a11c60a59fb842bd87ac4006f7af6556ceef921c';let _src;

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
