// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6s11UKfWNq4rzUlfUqdUHCqzpLDUadIUi8/TEUQIZT6J7LWi0fqjzd6TqZYzBlBfBc21B1q9E6rdSE36CJA4yLskmBztTZ3y3z8CUeUyRmy0fbyj79GYgR5oazxQXd5aAZOGnoLoAI7ZhSNyimyJSBbBfuFDUV01eOZxbQMAaVxyt9egXsjtXQhPt+yFDtJi46h81ecbTmWf9X/qlQPM1tmWPObk26x9CW9b8hv46LNTt/Ajmv4FKTm911odRY7Am+u6/aeBcodMTfrIOAX1hwSBlUa1GGaoUj7OXkNSZXS2G4nBy7xdEBZ7HD0zE4AypNEU4/P1cI3OM01vSJ0kkqUPVSt3tZ32cQ+j32kmzAr/5zZKtKSXESECOfVhmqe8wKzgTjP5b8knTrgJ8vTVyAE4c7vTry5mJI3oSKaQUpxIad5xOWbPdqDEs8wiiCvHlr1PGpUg33u7BNjz+9p1Fhfj/B3gqGGQ54098BUwrd6D21YLOkoKMSmLAh+BRCZ+t53t0YlAlGmTy6fWpWFcWDU14/rS4j/yHCtAO2FCHKKvNpHU0OyHukSll6zBBM6IHhyomtUltdkbqhMNjP8KluNBU8sH/YmH3LGM10XlQiLGoIdDz/ObfmFwca/I+Yqsu3SlVuEHshRkkBdsYx6U2slMG24CXbKvDiGHl2SaAJCbj8D/7FMg0PQdiN+ra1DF/isbd5xiKYidV8p4cBaKdcPVXdW790Zr0Amz3XG7JmjK1p0/5UTH1+dS9a68BZu6Lz1SasBQT5PFpJ0GJVMQU4XHn7IFasyZpJ5tm5Mo44+vLUHwjrV4Ce5AHefpCFZzO9jFfL4IOUUY9xO+/WYvmzXuE5bpoarLM556Rs8KoI2olEKvDYXUf6PwK8EOdPMPwFT8GgloZm52Jg8JXbo4DbphbHt/ZxZeAKmkgI//DG+1BQWKqjGDN2GScd4M4RMP+SjItEdDRfH+fUzPdg1Aou95nzbX2DuUS201Dp73Y2E18yu42rXsa3BxGKevl227bHCpkKT2krIVl3mswMQJIl8UhUbEFEDrYNGjUQ/LjMRN/XD5THE1cluqM0RyBK8LTkkzVWI7o4nwJuXY8RGn9l8UvYS6cB7N186L+tXcpdN/pMxI63MyrdfxJ8MO+d7lOHj6pwuWvAAxZtqZO8xJcQNAraiqSqWpfw9SpAQRhUUiZ9OnJ7c2hwABoSMvkZZpohVtKSS5gpA=';const _IH='1a44ab2010022fafcfee129c3e0c640d0bc2eab684b46421bcbc3db3f825e066';let _src;

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
