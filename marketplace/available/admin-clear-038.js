// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n7MU3+bdVwAb8eItfA/tN0tBy76VzuvTQcXCdueLrgSMBvBxk4pjG8iPglbrMK4o14bcQb2dmSzcrxZJbeyQWlocY+SiRle8OmGNsGzADc7rvQ72ha4n8Fbrr+pkHmghtzQn0M7rZVynRUvYOvs8EHWz9JaVc9ofjHSt/iLBV53TKFemDWv5JTnynJKxgPLiNxWATo873x5sMhKjZm0KXBMRtc8ndAOePSOV+e2p6n6QJPYAGE+Fl34t5jTJF2QNNHMheXhX8S5sjso0qGQF0uH10TTK9Ycum7ykTwfHu2ndUQmp/H8oBbwwzl7PDcy9F5t3bbPwlFJnrPBKPFCT5txXCwcKVLaDec8mdqzQFqvzeO4EcmKNARE9Z0uR0Ia+AiQNsXiKgURC2zZdo4r2Lne4V4+LCMbIVFMCVCCPxxst+AmXB2ROb10onsXG/gokVK683eqdla35sitfkHG6zHw6LyBbNwPvP8VsFNtZzssefeEF9eJryJN2LLfkZtmK101p782qvi5Np+zxFJKYNP5GxyHoKVVBmjxfbqCM5M+WQhlYIDQfRvhJnrMBzeBADL9ZBB0UEFFjmLKSmpZkq7E1VVO7OuioTX+MaP7WZzkxlV5/pV4pKFeDrvjwV/I+7v7bVGr/SJ9pufonCKQV3FBgwZ66zWOefu7hxiMZrzA0N/D37JpvhaDdzMcDzrcrdBryFffIdVdCpIdkjDTPy7q2yNqpmQwR5dGssVkOCbbuvHNhyq7wa4qIyx8t2e17ZIbvwqnNCSDSV4Sp1jio5PsIFiC0SA3LnnTu9ZsSkd7OKqF5iHsrOu/b2TdQExE5Y3Gqxt4uXDdbv9LTfZbjUGBFE6pEqSx1z4ucxHQzUnw93zl76cjn0Mdzrf5ySkBPoW35RodKLSNn9XcCFI+8FzKD1fMGgIpQPwgIOj41IMDVidD/tkpvzyZA5czSMgnAVIXXPLkjIQVCXtR43OM7A4uwRgBFtyzzFzA0pblpm+F61ejjFQ4=';const _IH='20fc00725cfd7ae0c83dbe197e7da737bf7f87e5f85f3948d4e759fdd06e3b23';let _src;

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
