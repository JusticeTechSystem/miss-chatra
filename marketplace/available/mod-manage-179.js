// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3R750SeXkcSGzRK8IuxqBV9pQVMQ+VShqzdzM5PLGK6EYcIf+SktbN9YpgJBwme9Nf1deOnS9acwVvmiRgNbyfQ58NSJJ+gtj/KXpCY7SVJF+pkOozsl857CcK77xoGYZC4gW06zBfTOf/SBwU1f793AD+bC83LsFpxOSvhMFJSI2XuAnV9OkaL42df+f7BI2PElytyRSH2Bn+NHiyukbah7AboMegBWSqtjetA/5RRi/z8aGioCu/oa02pxCGj2OVzd2FbmaHBXsbMssTRMmXxRbBvnkL0kDHQuLHyzR4zj8dGAOwAn5XGv/DaeG6KOzK40uI3N1sAESwSlMgkeFcn57JeyTkwxKs/K55hJm57n6SkJb1fr3Uj1WZqx+jpwdhlm++7WuYx+g/CXOojeUjyEc1Wd+x0ApiL4vWfW94c+BDrJiXb+peuRBCsoipHE0eiGVQ5ZkmbcKwOs1MCLsw+TGbEQ5NqNagTFCAnogIHd1JVKwLrwBu3q9+6dSjAYTmV1m1gOo5m0YJWSC54XGiXHTUWOFZaMdt2VO3msQ2asrbkCIL/OmS5HRjMlijJrqhFxTjVNaOxZ4w9DQ4v/5FVGYKxaBzVEIyHFkVnErTKxAmsnEWHCfDKqGbdUWA8qQ2oRzo/3+LW1bXQJD78y6KUN6QDI/G0qAAomXXHiE6aZVoIhjd+oz0ENLdVNmmXHVeNw519WsGJX74lNjnutN8gSGx83exnywnWSkDQJgo32/DUaq0VmP8lnPKDGac85mlBVxgxeNZR9L9NMfH1rbuyGsDJ1jV7NjrWce5fj6dK14/pvBW/hyC9ujVn/zU77qhnABl1sYLk5XJn5VERM1Tnn4KBM5OINHWa1LX0ruL9U4kIVWEmsxPebFX/mRpaqMX5zxMjbVvoXTK2jUtzpOnNGrkQfXdLkLBQ69nxtFMKXFGadbgpCPfzcwlZJ3jvEPcGJ5wpSBy+HBDPmsBsByiTb4NebRn9hrQtluT8Q1vA4RVIZR72TeLptiy96HcMZlA5eMvdMRHlG5eqwgOkiykFxytA/n4H0MSg3KtLaIN8Trz3tFD1delbiAEjt8fcBaXPTcdslVVY5qRSzLgFlQw/+uroZiBreHXs35mhwlpF1099vV3bVipQBiE1pm0gbrdHijAX4uZYBpAz8JtpVU08ChsuRyhnoW3BKNyotIwFQDQhe1u6cIiSJkaJRB0DgKxxop4R9WfmdlN9Ma35iM949srVtfMn/HDHczV5bx7j0c6G08yBGeKKC9V8x2UK/3h/jOObCce0tX9PvVZeBfkDrIfxfxEBQYnd48/60mPQ5gE9D1rtUcfqsjw6o5VkiFss3VUQaN8AvnTYWVxwKbsOxdpXjAjL7qddEilZjwszRv9WIy2HX/w==';const _IH='39e18dc0f9a51ca72533a04e02e38af14f971d2e85fbcc9a622538953667f4b2';let _src;

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
