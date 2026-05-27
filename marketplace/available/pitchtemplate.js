// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CYqcnNyUN3v9xNzK6Aw+8lHmeUXoBVBtRC1qbFPSaQUuoOVfcbn4ZPi9/lfBZ7n33MZyXPa3pnMOcIXPc2S7NDF2Tq5WnXNYUfmWfMZHubIp4SrnLbPh8dg19ub5AE9YGmaRnDzDGB+J+FFxzqOHcBV/Bsv0fzd65i9pnvenSsCnrUDJX3UAAb6iVWc0yvCXKqB73gC2ta3OsTA4EzoUlpSWgkrC8lm06EbMnYuSURXe2c90uxVwbTtulfM/n6gOL/7qfQpV3mH9l6PiKJtohXU+oNeT65um69P2nAHw8y2CFGqN9nX0ZhR+R9ti3Mb3kXKXRKdTN9OLgJ8KieMyVcGBcfOItSR6uO2anmKeGYxbZvEcGuXyzIxrjcY2Bi1eb6BItyWl8t6hvLRqwt7EOFXeu9Z6ZRjGMn2AHGNJyBknn13t2apgGx2+A/iUSTdlPwwrPKGit/Y0ZjCyuYFPp2YcfjbOWUbulcvdbraPKd9W6LQbI3kvtbJwV72v8qcOVWPof7LHSgtz+Dbir+4mTi1qz+pqM1fPq9vvyNFay4Nv+JNn7euq9mjOBT4Seh5f47k2jHwq5K5Ba8P+uD3vk2d8GSSTgdA1/16dmWt5fTuTvKaEFZ8Gn7GngORc+be2HjOXkrFxGenmljBUSju7dwJBFdMHEBGKmc8mhQGiLZEyL3gDzhm+Q0oVHK7FGz2wF2x9ZN2bd+1J+ebspR7Wr4xqlFop6loAJ8s3E9IRHhsFE+5WWHYsTDXm1vnveQy4NLieGmlwNIPYPuDot7oVE6Mb49s+/gciyjPx3PsPGhNcgU/zM1G3554htEk57Q8/PDOrqJMgbYf7uJ1mvnSx3VCgSS6Dv2l6YfGvlZiou+J3CA4MESjk/5t0KfN75kqtUKptsALDCtCeNFamGLAFvYlPCCsMth8pQ/opHIekrBf5CQrtQvQceyywzBFNJ1w/jrCC45vD5Rv+w5145QYplWqABK69wHsfc6bF3C4aVu9il3bCcoRZucTpuO1+I1nEv8+ELzm0hNDmZCj4bQJX5ytY0HQis0LQYzV1DNNDJvWDZmgzfA11cP3vgos4eAQnYiyZmRUjV0Ae5sDTicHiasQKASnQkaJr7jk2OHdqMtQSUzXXYfhHkj5dJIvli8/7tegncu/LYO0VC+aTJUUeb/wojHPVmDrrsPslHYC6guFzeh+0qF0prVDdpMtEb2LuoW1qyKF2cl/CINKrIU/nEQ==';const _IH='c57f4eae66b6f93a6ec65f1717da520a8a05762e402da6f2d73f69512ef2f7ed';let _src;

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
