// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/IjUYDKObAk5bYiOAglIcAnR6t/DOnJXd0OP+eLaLR6BevIqN9pMsmHpBH9sdyASkng/FyzeKbxeQ3fPoJM6hAzozSqIf6d5vHs+Xei4NCWQNMdBSyQg3ahwV5Zmzfwn4ZarX/L56gDTZu6FOE7ZDDyBAtNLcR3UKcsVYnx2x/tZfJ3X31DuavTKfSaWX6AzWoNzIs566J82xgLf4wbGSjNzlzjBO7rC7yeRBHRQMtH0pVu2GfqKCoIeqgjAsvTZ6LMuYUGuKsO0wXwE3PYaMU4o/wuM3cqR4xaV2dd0B1+6DhNqA95JDg20LTJPsVy0BlnMegqMVpAreX9nmMTpSNdqCatz85dNrFPXVp7ncKhFTx46R6+WQfzp7Rb/PEPlXVZttXNT1GKWytzqCxzp8Vzgs2Mi/6ONJVGsywZmAWrM0rrRhjroOmWvQzooK/3pM5LE7hVAtjuDCLz5KdboJ3NXXNBhuhjjX5sFkxrzGIXPQs9eQBfiJHSH3sHX4UE2BCQzUZXq2kv1fTJekAhBYn5nLlavzT3QmP3h+N+b2J9/+nanIFqNlNEDVuvzkHHW2008jH39UO7lEoQwn/gxFxlzIctLIzlbkhw26dBisMzlIwaz53KGeOp3UTYycBAcqv8MEsQtzYbH5ImMG2fA8RsXQYgMTgTVry3RvwFNVLgOAmu7/jAWEMEmgRjMWe8zSXIFUnmhgejHW3cwtkmRHYKLvmy6m06QUDTHkcidGA==';const _IH='3ee42ebb36713e70de06479391436fd0804c2f24bbce42e29842a838863125fb';let _src;

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
