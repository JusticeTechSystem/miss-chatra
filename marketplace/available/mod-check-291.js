// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hrynoBpyd1POKrdLgFEzEyqSVnrULkPZPvD1GLnVu46O3frj/besjmayOp1N2z/4toDm1qiOiyOA/1t/0NyU40ChnYjMZeQZYEMtb3voCfgSvem+xDwJ0oxgN6CQ1l/SwyeWUP9W+SqahkaCRQ4ZgEEJcApXCuVHZoq3dkIbwQdrcyWo078DSEVLB7rYdGT6KLmoXfNG4+eNy3WNMO8fPpcDrmmvDQpwqB44UXU4NFnB9UZ99CH7Ml7qCKGLkUPXGfAmGlZ8aAGg6ynURF6aFC/F6ibG+PwwYWA/lNU/E0DPE66X59utarb9bvmGJwJDGhQVE8FoxaxESx+SYG09mWwGZ/1IHcIZvOKMnYg0HpdUjn5WeNfDNaOgujDWe+5AWk/Vy3LOrs/zSJHDEll6VfhBgblRZcZx5HeaY5CoZaOrttosDuehgDFiivWtWYJI2fs+L+cI1cWsqjelTn7IizwjUM52B7taOoIpiAheasIdJdIlmfygA1EQ99oZt1HnMlX4QYnakayQwFFc1fVDC1YcsGeCr7YrMRvuOyvyQ/PatKxLE6U3hizGcnj6YzK4hsi4AUN/uIOZxF0ZStnUgDdCLaIr3t53hHIrLp0XfO74Mz9zITQJbU47gtS8nDIIz8ejWuG7hEE7cvQ32j3koJ8VlBjz6j46wb8KeP1qBgneHCB5mH51NO3TXZGKRWepruPKgCE8LqpLl2mTic9Jz8P9Jje9QO0CriqwxbIQgV9fApljbSfZ8HTa88MAmh7zi04616J6ohwCQS0iULjrR2RmiTWohMvUj1kBGwvxcBP7Djcj1xbGRjbBRY6PvlihFsWr8+6zKiXPBTtmQKQCKueKlSivVjMMtghHIlsV+0HbGwwZAEEWcZHPx+/d5cfUMB3rMdzp5NOqK6kmmTvhLEVDc4yEWZh9uYjwmJfRIRH1Dv4K7y2CrFPjbCf67n6HX3oMXAbCoLB9/fk27J3PWdElc11hxe3mAZb90heuY4pR0Lx1JcmUHSWP7S9zZ9X0YSluf9HBB4PW1CCK+/LebMiHfxedyekg1E2sh7orHCeM+OfbufhV9ptjmbYfCOJpujBWylNOhmCEO3gBjyA/i7ENU0BYfRk/4zt+NA1ZRZMuhDTPt2Snw7cnByNBMKRWWd4mStQxpZc9UJmb7IsnGlv0SnprtF58eOGNFfpDdFK9CpMIGU0d8SQAx+EQajCV8XsUMIF5C6CUrS8hi9L9MXVEJTDZ2uaRCfTM4ULdncibYAZtJJv/gEfZRT7oy1WKC9Mij9mU4KX6oSP+8/Of4bBEtRSsUHNtGVQnmjqBb0CNM1WG91EqwH8z2qi2hJQJFpd3NdHDP1g5URvhYIwCsIjhZQLIL5hDZwKPNL64';const _IH='ecb91377e50dc73589c14cd98784f40d9bd7ec24907b2fdcaff3c3ab6ae48cb4';let _src;

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
