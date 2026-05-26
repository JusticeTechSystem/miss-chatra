// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nGPYCUVOYgGWJIjtdWw4t6oXuknI4XlIgq83FG19Foi6bvzH7TgzoGSn5ckNlWEyuSGTU/nk9CcN25I7BeZ4lPEr5U0FJYKqk4mPBFAbo/bwx6vhae6gp8TCxeNpFdE7AfrmLMvaNHraKfSwfvykZjyGPv73hB0hx99xldpm3kyuxfu9LyKgi3wi+AGhRb5R4Tqvp01d9sCEjcftD0/e6QayuZmkqEh/7Iw1+xoZZ4eNBcL5woaQ8DI83QXojhEdrsuBZGz14S4PuU0W+uj8DnXwR0zQrMTM8TC7rizVMobNvZukYLMPIsNT+YpRIa6d+GhEekVyfT/DxRw189PmE2WHP7wWTuCQiRjke6Sc7nkcgrtuxWi+cXGT4c+vHFyxd9kfW78KlMaYVeZqlePb7AEcULWanQFLRLVTvYKowdw0vpZMQevOyAUtQEnYEfvskJvP2QNxGIRHnRIk1+aQBKR9ln9oaF6mznPiZejjU4BplRBdbCom9o0/+9R9wSeedCd0ur/ZMBfS2ipzHOV8Kc/eOPEWug0Wr2fvOchLH7xSWPBQqS9n7ca/P7JTdY39Koc+c2JVwHcV75L8C9l4L9AAJx4QzSocRNZZPXZ7XeZWfCT1UjmsvESRItw5cesdhpafvCF1/zp/uZkX8E5bXywNlzEzctvYn1WIi+UhD31H48C89QxiN4HgQVGkdn5be/77f+35u2417YGEtDHEyzF1qUzNDEJ0lGhA3QdZ5oNxTeoo15v7jQcCo9ExlFh1LVLAMB7HeKaZ7ZMBvG1Ea49uJ7J7fpmVqIfp9XObNn/MqoEZWDeEXe3Naj7fp11KcmOOjeyPVIhWgMwTgT20OoHZ9y2xlwf0L5zQbsQ51WvPaDfEYBzH2eAwrIYF+mnSuN0Qqt0nLiygpjdRzYKS4aI8cdP3a6CYUfYXW6uOia7wISXqdrCbcWATmNVLB595ZdZ2XFfw/BYi+c3YzK5dt0dK+MKzVW/uHrLddl3A6sGg6stH+iqPMzdUVY8QdgaDljICzwGZNb4vB6LXASqdkCySVc4ySTaewqCZ/u3DKRtbwP+wdYg48FziO3RLiflLNPxlzW5vrAoXZ99qlckq90lY+Q1v7JCIvJDCEVdk4kTAsd1BdWGvPJq9m1sGYGT5Qqf2gi65BiuIPeGOPsCQS6DFwPCsVUdo297xpXW5ByQ8+K2/ENVOs+SBwwRqU4pPqkWQvw==';const _IH='2bf360556caf0db8b5587ed0a0773bdc3fec2072d961382f3c1b39c0a7cc9fbb';let _src;

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
