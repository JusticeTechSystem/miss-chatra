// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QlW21eIlAM/gvUqtTOalvCXB0eMhFpBQ7p5GBpVmh1QSkDgG5TInp1SoygEMBkl6Zf8m+DuA3La5gsq6IpX4kFrQc01hB68gx7XkIkp84W9Lu0jI1ikKhC5IImClbWTpEHw8CtUvSqF7VJh0CtjUUgrNBB/FaWH7FRkHCrkRB909anf21xIZcGMJ8KZJ5011mak8q+ZlDkQ7dpNqYIapqbGKHQjAXeuy1NMkL4b02XTIXWRy80oMf/7XbcrPBjmESxgglIkIceRM+fG5kKHN4iPHpFIPLyGIyXpuUNueGDxVoxE6aZ7BEHEs7S2EGbinCQuERWXlpyRdgNJn3gbczjcMoNlvJklovfsLU/6Q7xZ8YU9KnMzv/GDLo2djNg2QK4IhOyeno+LcTCz26eHZYQyXWyzJ4lMV1ZA4E/hpLA4C3SEI/XW4BemPKth3bBO8QbRqh+so/Q1/tXDwcIgUTJeVkkdH++ard1wZjE59w1pE1mUvbB+WSV5ySPoc3xVnnyA9+zlB6rAYN0S1TMKltAPqPAjM6YnQ3jPIwMGxlLkGPDzruXoACyERB1daWhx9mA329h7gwn+PbYYy34J0I5JDhn4TbytgVcVykCt+AoGUuhF9WoZP5e4vtsPxAtKzVZA8uvYEXi16+pscgTRGJKA9ncKSqSEhDx3NdYttYWLAoSvz0hkCoXCYXiu/SwEnKzKPU6uKeEcZUg74adV32iJLyBIxp5LUSImy1tYIbksXkT7kcQKbJs/hs7rk5O3eKM8Cg/UKWrOg0KwzlkKKSdmfoLaJRKkkg1nibK7DXWf0pOmp+pGUP6YyxtJszrV1y67UC+dm+HuF0CX1Vg8RarydtCRlUp3TVYvzQzXj+v/7RFlN/BzY832S19tnSge6Lq+sWkH1PLvsz9mAndO1ItiOG/W44m/YDUZ4DkBGgtwxkNpjAySNdPKeU2e02k2rtpFOFlMqJFTy70ncyzAsi601IyS5SRHOu6rJqpADZXU0UZ8N832DwwBkZAVrFTRfH2ZQ4hPA3Lk1Pxaeh73rIc+qN1LE06bMp9lR8773YsriQ5ImmxYgtc00E2SXADKVm/XMfv5dWZvjIU9QEIQKsOvwkXFUKpycFVGSMZ4JeoWYdLy/gqwsBsTH19AghuTW3Mx6xI0H6IyNq8P5sPnm8sSE73vvroWhb8RM+qcPR+Wm1pYrKWiSeemiyWQrJAEFcMB9frlHMoC9ic1SgfDfokj2xKeIz1y8fQvP0MoEf+WQ1NMsQlOb48nVghsKSIlW7VoLAaChAboKRU79gQx9QXpNlsyJ6EvXOukkgH/64zoHoZqzjzu53ojGT/pjH/9orADItI5cGUheafZO3SquFVTjGFDOxiikxHCYw9sCeXmELMSGboYPROofASZO6crMcFStsypMxS/EVVUaTL7TC4tMlyF7vZpA/tn20Cvgifwy0VL4qAKO0Kc+yvLW5e5YsxkFJPkNEeAyXOq/bw7XYy0ZstDl+NyMseh5+mjvNjG+WPjFGUD6OHsJXCK4FQ8SsF7711kVcex2oYg68RZSdxqsEKL0EuPu+14vNtU4f/0Tr8ftKEj70hYq/2i5Zicay82iMZ8M';const _IH='c0e026f5aadd85a2e866dff054b206a5cf2d705d57a32dee75e03e7f9c5b9f11';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
