// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='waa4dxV9ArotfhfPOfoVHlbdF4ANmBoN+1SI6phsZVMKjR0DraMkcrRlBHd46wzLQlH18EjmgzyfXi95YS7UMVycdNEzLfAUaRy8hf17O1EcmVL1JyRI1Mp8eVdxMSldNkM1N0DIJMCTV0jabSb50ves3Kb+/P9LYqWSdLtBR4qckKZNL87BP/RC8ZQCeotegZTr+0xh+rDzgDMi4Dck4k1WDrliBB1kXUt4P+04NKffRHYFKgDHfegCrNmrcokF2A2LBlnJQg8tyIpOST0aLqcUk6IgJUYhbXUlCn/bcsXRnuk4IltrfkXG9EQvDn55394wfiNUflHfxaeICl31+WfbMwXyXUDeqURvK7mDRlIBjHokZxbP6vjFWEgfcBR0Sk8youvkFSVwGGfZmHQ/wUNq7z07YYENcVs7VLssqKp3Bfk+7pL1NqZ8jddbV8I+0RnnxCNxjsu5upNArCDaCB1AfwZe2dw/RG9uvhAWQSrO/oFcZMkav0/pFyGKx0pF5Jd5Boo61wKnIXAw8/Mv9agCLYh/FVaZ2bN0nofwzKMFjy86VLF8Ah1RnU1xD7bODBjtduqdaxPw2mgjhSvy90xlUA2gcKMXoa3DmQXc8ZhkNDo58UZR5wel17KKo6FzcuKNSd+3u5mEv+7yH6EROKxU/f/JoAvjZUYG0wu7JfEqeHK/TEei+GCBTnC0b0xIa/EybKDPuXLfCSun4+R6x2xEWZQR2L3BJSxC9mtQ08KjJlxLrmdpv7UYBev1ggO0d60fSmqOZ6urjc+wJpbwQsjz9q1qPsSTgORgqNiDEBbi8vFvzW45UnX3+T32jjW35sTo3Jsfjxv2TFaRcC3XFTTaZxEyJeBvAxFi7FIyUusSG2MnmrImauI5d0QD9pLxJNsJOf1Wmcb2aSUHYKap9+4przvMDX7qIf7r45asanLDJv0bxDZlhp8G5R0JvmMjfFRWeUTo1ash0NBDrbcqGjLm92wg9nzkl8hovqXSt2XwYfXMsitteWaoWrDQCl1ZmZtpqzl45c/CBolxkRRj8Rljx3Til8GSWB/wa45KF8hG0x1B5xMOL6huA1AqSkCpmNCv6YujZNWaPt3Pmuc1EHlshNbXlWu6fwj3xNGIouRjQB2+gph9aSz/UXG+t5iPWAFdWEvgQMDUHGxJakjcksB7r8ahmtKybVU6leZECcy7ZXzoQaPPVznltCZeNzxIBS8dfh58yDD0RKHZzA==';const _IH='456ec778e8bdd7aff70edcc7cc9b611b38a8df5511f53fdf049e917ee78e5954';let _src;

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
