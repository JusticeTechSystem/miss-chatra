// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5hEpKeH8quk9F1jReYafSBcpf8FYrqUSvs4GHrXrxklu6YW/A/dDt98WlQmVbEwkTrbk05XdCQHfBbDx7j9eq/b5WQmE10qyZLnk7dW5VzIAN3eAt1Fj30d7YigRFNm46Es1uEPt3XxhON+nq9U7bdYvb+dXE+OcPhFM2oV7I51ctmgZ78dsfgxNFsAUnsmeYs4fK+/5uf3OWgblr+TVYjMVdt9aDJQWjux6ZsmBQdrrNsRUonQnotUKgDFF1kFe1zfmvi6+eoFfP+aIFnyFIgMJlVvhtaZjzbalrZHE+BKYRQrvfP6v/IdJE7E0nLQzJ/CDk37EpOFg79ykc/3pPcrEN37bjYhvb8J2/xcYn6cKqQ8fDNI/iey8loUK6arBTq/DGEKqWg8O/1GLDscDQko5U5dHc22zYjke/DNZI1xNHcG8vIKu/ZTt9Ce4Nrat6Lf3iaa7n/1jOdTgQ7l7KkhMLqRc1KTEH1yLWsFev28D9pNdRADeW0d42C4zLJAH3sbivTT1zukzsCtiHJgQUC4aPujRRcfatb3W7DoZ6Q1T/rDhkKSIwg+rSadL3ZQ5j7q1bw+3i/qXQDu35xbK7AJLMzqbbFZhWh/mOvwktpbmd9h4oQXGs+srzSNiKfpXAA7JXRxX9T0kuuX6aoN6aDe7UFENsBPms9DlnQd5yO5qGiLOiNJOTA5fj9vE8RmxR4t83xExvwP+jSWGIQwMy1XyRRi2bE6hjKDgR44=';const _IH='15fd78699ca3cd6a7933e9904ce48e653a4f62eafd978e7ae821bb44431474b2';let _src;

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
