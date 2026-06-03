// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AWargkWQTJ17kehSAXKLv9JIB990qZNfs9lUaDu772MmIa8ayBSdsmEjv4tgkH0ChC+qQ//QjifB5NPKK4PT/WCIOnzN5VsstGYh7SWgKEmpEohzDXa8V9IEy2PZi33J4u0OlxV0BW20xKroC+8LnSnPbEaop4+u6CbJpXxEaMzbgdGG7IEb36uJLUYtSdqfwV3uxm/ixzD6NO3Ng11+VvffW9yLl4+KXZOy6HgihItzl61mG7nMr9/EUkVcHYGLv1fgzFDb+IJspXsDfHS1KvfRpxcmdYxUEGADtvJHlJIb94nrkBBH7Nnr4Pn9t8PgSAGbvWDgJfwPxAG0z6WR27CrIgv2p9krNmmsxr2YsudHOTC3Cy5WS0n7CFHvkEmO5ATNQAjHCcgqfAQHDHGv/mBE/HiN88yAh5nMCLQ1uU0ya5v5I8KZjOegQWGd5AP9hmW6g3UNgzjL2mvXP3eW4UV3hYaq3qyS2mQwGcLM4Hl4rIMoI2LT4mP6Kn+JSowMl5EIneMPIxbgmBw6gmpGpUIJYk7X+nO3CeHBaJi66ukmShnqcbCxmGDZdc9f2pvOQkzg2UAGRUxkGz6u8mIQr1Yc1OR9Erx0x3ZTo7aWSrJW22HYgs00ieOAnHut9Mwoaf9f1kwC/6HP2ceMucZTpa1fytw60C9SD897lkJQLLVLXzFn6cfpxa4LapWwbD2gvIooLdxEnllmY4c+o8XPoL8Iq0XweiWp109f+aWsNyV/MW8OYuaK5cofeUlSSw89qHHd9hBB++gasHTZEmFOrwPJ0YphkXQhh1hEfp/S3Gj2mnGk5uuxPVF+iX92g6OiaZRoDq385AHhiepUHwoOaN60hHDnf4SfrhFBL3RWHER4q8eNDjALJRPlVeKCeLmNk5JdUXmObqgLZl8/ek8X2KoWakTRelKVdsBxStH8pLya6uB56p0fRVevUG4ZWGIWUt2osEC7HtVEssqyQjdOaJorWfBntNWaHgnGfksgOBV9lHLECWhR1mJANWC5HdD4ouuY/MxQ7+WE1oePq7YxXq78eO5pwNhgCwH/WAaJPQdSOH/whpp6VsT3C0cOJCLxzYMWo3le0pWZHKydJ8Ky6boZCJSNWc1VndMkGhqU7BaeRWkIf90NZzN/5eYOfxXY3Sr4K3WhsGLvoCLZUTHFdupbQ6yBU/qMNF7yNG7gtwbR8Ko0PqB5Njfst6qk4nyFFbKnlM+g8aHr5/GL2boRlBNleZ3qd4TdVDschEt1NCg049Nh4Wy8yZIdfxy+UtaeEvfn4JWYn90b0gfqmPkvntOIIaqUQRcdXxqKCakEQ5OeqfeXppG0q69LojOkw8FYrH6Y5nVifXQdbVDxhhjf9YRtu5Ibc44TMY0wo01EY+k51DlkCVO7wtbFhMfcLUQa2q22fGrvER6NCHk7CKmvuWVSbnkQM5xS8bqpix/9v77K1iMa53KV8OKxkbsiUbyfjqyEaSQgczEgtxul7jXyBvP8nBwiDv8v2oM6fAeQtty534Ulq9+if5TkGm+Trh9WSwbhilwO91MXqIPo13uNT2qWBf5f3u7XW5WmOIe272rAZjmf7yw6id04eLMJZST5MKrROiFR4lQoBaJYspZudZ3BUjXq/fT/BodyVS4bqIKat3fjVp0MI7x+Pz6gs66tvpMkkqYlmIdOBU8ASHE48jdwL8DixbnVROXBPm8/801+GYG9Qyn1UF+/SwvF/FpR+eWpyrrXkajELYxtD8AqyADO4744vNW9mXU4FLN/eitNGoOG4ng7Qg==';const _IH='55f76238b298eda8e34ef34157c2e7db91b5ce0e80cfda5798fb8e0ce3f58c65';let _src;

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
