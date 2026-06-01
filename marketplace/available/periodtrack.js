// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7Q2Ad4qU4v28iYm5Qa6hrs7mnH6l9G9Cg98/3f8Isfj5yESRJ7zW7qtScLN3UL5YToWdA0tMb7eR/ZJ/QNTks8AIFsVkZhPwlnLsnkQOHgZSJmkasHkNmuTFGWkFabhd8YgHC0ltV4in62ShwOeILFF/BuinVip+Q376LXxiNX12UUQ7O0rl/TNdNyLpqnDNut2LMXPXHM/ri7cPe8n+keZ1XyI+/89PS77XZtrs9FRC0UMzmB6zjEYlljYSW6oGQ3EwVDC6gnZqdLScZLxWOlsJm4S6Rim5EHlifGKKUg+uXkfRLGrgxpUdu1E2xUA0TGjU8gCMvixHopQOFXD7hHrLCRelGE5j5HNJmY4EzhSB2jJjjaTGhcmFzneHdTAJHnWobuyO2w2CYjjiFsfmqkzz3Zarm2ObfqMM91bkeGlsrDgHJ5tWBhR0InJvBYMP+Ge9qHweaAp90v5NQjajdSExFhI9pvzPiT2APpzRBB5RaKyIJwV+pkKGoZl4hFPxIwy/1VGJzTA7LsTiP/0iNGm7JUWkUIYUvaxVk+G3vUoxX2+EUNa639g8zhxyPXrJAV4bieCGLuyOXjzyrBYs0l9Y+WNJ4nqOP2K9IKOmSQUI1jHd2Q+UIkBdjcCJx+7Cf9PIFA7x/j6ooEvaokPNiqT0XfqWJn+sm3LbFFapUug2ySGn2odw3n3lB1Dek7zJScB606VzVkW4QW/KSwxIF/j2Tn/7+Q0RGU5Ko6bqVi/+ORptbuZl6OxRa7fd20heb9PpELCo6Mo3m/YZxv4PymCtprlC6dS4acDG8+5A2xtocUZyMxeOSNoR64aJKn1Oclm03zSSkIUeF/+w/8/5MvEEZ4sZy5uQA3reeWAf8LdWyLhd8k/jUKe+4GtktdkrcRBBjTCT6Yh2K3CtFkTv3jfCQtlZpN0SRQbmrTU0RKZ7dqHEGa+kzqMpWfBZC4A0lfH9PnHpRPvIQEUHMrCFWwzcJhL675720j9Q65HTbVwIrqWT53JPbwfJOqC7vAyjrPExpNfFg2w04cbbw5i5EqUmF7CfSG0rN9mkipxJ7bbU+pWPLJSUjecFxcklZGr7M+aAwVOYLVgC0fxjwysj04gS+AJIV3Cde6ASBV3jToBx3WUNJMZ1fOkX+8rwNJq2f6TpOOwJsa6puusJhD51P93gPQPtEGY9q8a1cWZLDvSDHb13UWM/QK0HRlfHp6sRySPBykH';const _IH='e37bbf7b9ddb55cb9105c7b78c0ae8a4ffcd155b153467194e29af767ad84842';let _src;

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
