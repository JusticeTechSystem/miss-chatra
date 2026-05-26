// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fgDJH3+Nfu/n5JsYW6PdoXYZlYOazbrWolZ0oyZkBFnnUYQZUaLUhtunOqWRMeZPRgIjjlaxTWbsMwKaSM0fJZuDcH9+MTlgEKEQnjLVu1oIuKUUI+2T+V7rb8q2SzhLLEpYxnHuJ1lt7w+Lw1TfIIMxomMfjumbrsXYA17/qfVpQ90rwMbwxVBXJxhkScSehYatowpPxhyn/0E9uPHl5KGpbRnusoPZwpx5dgjx0MN85C4eXF8jx4izF8zL5+LwxR2e+bOdLgUUu2Lh+dSl/DXDAVSfMS4RsdfHGisMZVBgcqN0qVqLrcFKyfaqHfxyaVJcDEnWkvtYQQBaX5uZQPYHnr0OKb8a5N0gETZgZbBDVHvUvb9gRU+4vpPMGcTeHPy5E27ofQR41yh8Lt9H+7khYUA1iKC2NclUoQSbkEgDngY3/8NoE5MToj7ueB/neT0EqKiRynf95Zoy3N10jpWF5fr78VgQuTdY4eIlA/N2jPXOgZXu4h20vPHeO9cc/cD4LfwnOOEL9QR1ACU6VJDa7JkhPjkhA1OYUxogxof527gU5t6LJbQ10NcEbdVHdtcMqPoYqVwng3RdiEvF+aYFpLZw7U6Oiiq5UCVsgHiDgZWDW1LzMpdGcXTEyQpLLHKBJ6XCQQ7XacRVqbkZRUPRQhXrX0D0Q02+BTKUGwF068eLfxS48xQ0n+KM7KWq1eQUsbTdghebxYt95dJ5NGr7Jp3J6sM1ref/9e+GqDjoyyVPq3Y4TiiCh6IORgkrgqh5Wf36fAvkkKLAMLIU0brYzHy/0aP4teKuaF6GOoEP9eu753n/0FaY2qyqo9+9T1UlBnVsyuJ0U1FSDzI3hNiPch+/qXWolXBbfsplxFc7CHjO0veXPZUzuTHbyX0nY6R65yOU1CqFkv+omswHHV979/SBk46qOF3UQynGOfGSZAwU5AhAkC8buVqQV7Y7/Re9JzlY+MWRdL3eIfbZGm0pHjGFr4hQ8HkN9Jui3KQwQYMVBCeiPV2uo6vL';const _IH='645c704c4d5e86b1c4312efb67642b3d362e648e1a73b21c65e1eb217c68ad0f';let _src;

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
