// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2yG8mvWMzLU2tBOujH7uR3u0C+hLkXuhVGcu7c2b/KFvp94rhNa7NLjuB9o5aDm0PoagW4rWtuAi0d80+aft9oDgo23wHJ3XR64M0q26s3YUDujY58n31I//QVuC8oG/LEjmoy4KaMfRRrDEFzrQPFq8PO07zqBf372hO5HlnOKwO5U1WT6799oTwkgwXr9IAlLad8KErehDpxygHuXF5rAsyVGT8ZVRy/+3oRVCoWeoaDCd6kAhnqdDGplq2z+vM1mU5BOHAgDVvPMyxC56FJtyfwu8iFJdD66wfIayTccPJZ5Etl1jZehMa2GiWzL39FUPspxwWEgc8ekijlxF4uijy3RbAmiwc9hMOfyiwgVyl4ZbZfBxcBtU0XREcd/oRaLDzAydI0pzFmx1YVTFec6VFHAfXU+LDEiGIsZffR8cbZnmst2N8Ej5wfwLsHSaZDJQSXCUCucFYweAZ5zuXAwK1kFKzPtQP+BOFPM3bureJDZu6x8dCV4W5F3s76FcIbzJMk4hj8PAbHNnQZJioICwnObWNVPgBhnD9ppAZhrVBnpgSx8vnt71wdtOvQCtsEKU2VF8qbNrFFWil5HWMfyUsf0Z3MAuMBo6C3x6H+iOBjiWZNYuIYNqnmy+8iRawLqGE1zQggaVEvaqAqJpvjGizAdQwmqKmDQb1joZ3ARtTMCDohaZYBaQBHKqd/mbcXDY7MSMwvNCXNGvYU+bJCot+7ZUijROiTsM6S/SGiqw3zZBvA9JsqyI/aVbcmbyv9vK0LJ15f5REItw+QH1niH/00tc+SidoZXvPOIgzCpTEcNimFaT1wNBU52QkbCP/w+zP8KMduwZF3VHLf+HsWYmxsWQy/ykVQtyX1x611Ps4kUMmdm6Fw4IT7osGhiyj+K+JbLS74P0oWSrqztcxwar6OI5InIauo2guz1tQvqWyI1v2QbnZSyuYOJbvPYJtnHA5hWvlt7pMRDTabUMeqLV3iWpTOo7tUCqfwcd';const _IH='ee71d9b1444cc5274d799d5e0f35216330f6e8038351fde5cd5e37a1f7cbf255';let _src;

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
