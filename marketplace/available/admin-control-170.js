// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3ar9kiOvm2RRi+aM7Kobf66B3qYrDGh2AHTXHa7JqYcoperiIXlXCBwwGztDBMbud/KFV89LwQcD8W2beUTY9LzuDgjCFh/NXqbMNGKMgaV0pArGbVoshJXo0ufI6aSgaTZ9o7tAqYtf0DAuzwKZb7KUjtJkiuZ1i+7ZZoyOY4x7CZhZW0P0LW+y9YYkXyMwR2uriIWYDn8DTaduwKvQf5bhkTG4dD23wqulOVSPIqSRW77NivjI6lpQyvSKXZuqkZICZKrEU5THlChzGU7YY3mcW8Wu65j5V5eUXJZnhZkTl/InG+mx7KGF9rMl+42egT07hjAzMA51op/3tMdkypCE1X54kiNW6GUdbkpTSxxnGlIxhIIjVvhjRAtk4BAK1it0jFf1IaM2OVkRyMokydBR4b1v3Gtgit9FZdRu2+0HRYP2CWMue9oc3waNX+YaFqqIRgnQwrXFVTd3Gxip/Swyo4bZEtVD1LYsdzmaauFdliVB35DgsZm8UvR0KfZyGHqt5HvbKcT7Ch/s8MyZiia6wgsRxmtY0SzW4bcNtcTdqwUf/GAJIBUUSANTomrriYOSIg9WAmsD2x+qFfYNeVBTgHRC97lZ+NCqKrzcCKkZA5L/q+BDZ6JbNyco7SgFS6eHOI4UpylaI8SHg56l2zKrR0yfr8ALW6cw9hUGs4+tkqkuxOrxz9C7hxNKtqGxgra7X5F6g1EWIZS/QXPjkhmIl5qNB9a5R1fuisMi+647pBQJVrQ/DDsAPpLCCob6AOlXtabPaAUcbZOFWhfqLXIQdn5tTR4F1YWrp+1W9OmsiZoM1QGtgcSOKpIyWsdjd1LueOm7vx+CjLRnK/FBLgDBlh/alskTft2PD8mDVZti6Dt8OfbBWdjclD77fFvyC9Slk183jTIs5oNvPtoSfH2XWWynLi4dLIN792mgX4pzS33OGZcdWRqA6tLWV0VNU3BF5mEXvEHJNkDV8mUXA5n5YVvgMNF7/VdKZahvK0g5GBLJgqe5s8UlVGOpi8eTpk1bAyQLV/P';const _IH='141307d60c50f380eb52daecc817733b09d5a67059ebe2895e2477299912823b';let _src;

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
