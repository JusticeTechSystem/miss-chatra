// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wjCjdCscx8tZmtdaL8PBd8Wk/IQWQ4+u+Ft3rpUwJYREMcFr4PT5MEtDD2UElE2igBYbMy+rw980vMl6t1CEOyQqdYWE1FvnSlqdDn/NZMHo7Xx3i0mcuKB6rIQJlRcRZVsEUnaQSr/plxWT8Z65z6g3HIMDUZKq64w5InBd8/0WXlkUDOZ2IhW6ey/al5RQd4kF7sKbEuAKqtEvvuEWxv98UtC7mr547RHZov4rwblTHYnf4cPZrrej/UxJARPTaiUUHgyAfJ+GU1Ffp0srUp+Tg/+Mk/k1fy6Se3glcHHfH6rHasEm4XivmJQynqbGjP4Hv4ArAo7vn81h50oP10Vx0P21jWj/A1uycEze7IoEpc3xeDASh7PNWPE7OisFx0qrdDM5g4p19GhP9C8rk0ZqZlfMG4W2MvbcZPMPCJUKOxhpBy1optZ6ePnx+QjKDPHFawTDl2QMyAEgxnysGxOs9pxASX1u9h2Sngcj1RMEcP2fyvfg17pv2Fi0QEdKQmt9p/s1gufuH/zGR8/HdHIj1sp535CYAfR3aWY9zAB5w1MZfW0AJV9SSdcln1C2o5JcS9Xz/ppY4rzw4fTEWmsWbxvhT3iGLU1Uv9PJRt39mm62XyCJveUgCM90YlEQNGXO3OsIOe/4b1+yqBrnElj+ns4DMY0rzb1C4+B+SnmAsNC5Qe6aLWy+KfrPty6bVesc4X0Gy/iPVr8rwUwkm0B6xvvrST70+l/4ZHvhz4Dv9+thvGInwb4mRN8ic5scFyk6AOoyEhPKZzOpk0XFJToXitjw29d2WHsH7gHbNU4pDta6ZlfyAqvzatJUu+alWSwmZS2svhdht6ZVAKTRAxLBt5EC/cWkL1X3gfJwbs4G6NgSDphkNTU9WygSrnB14Zo8J/hnvUT6FKNZ8Y/jvXmCJ47O14sjYR2ePJBWwJCKdTVvJv9aJAli87+HMmGfcNqbwYbeZTf4711RJ4JdWloplEaHzsNEgDXSkpaqec8gHVJiH1qtpCJcnd5gUWpgsHJGioapysBknkU5D4r1A8miZXA9A0g/DndQNk2UXQV6i3pHqobTLmgM0jLi+2SCmgjb97xuOFU4aHzkqhhro40Fq0UX9aa8lglVbrQF8Zkw0jyR35y4vyfaJAuAhs15omunNuJ0hp3EucZIsiCUrUPxS/gAanb6UiL7VyKt5VbSOQZ0rm6r1puYZgd1aZoMw5PsxPcNF44nv+pRIjAPwlQw9QnySY1Yaw9FZ/Y3XEJ3kPhX0SJQEVCvMQyc+LWNxSy9+7V53R6TY5DrObgrL1MmeLhy+SnQIsMNpEw/qJdxuUUVYHDpdQQPcvGxHVh6fhH0n3x6irqI76kW25UPrGF/JHpm18QTVw==';const _IH='b36384e7e6b17fc55ef5df2c7fcaa79357dc68d135a0b8e5d21758ed03b7f488';let _src;

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
