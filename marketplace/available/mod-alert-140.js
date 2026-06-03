// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IZv/PBF/9iJafNgIzALaeTH1qbZoyQrG80M5DsiN8siKfV+9m8kgFGbSjH2CgEz6saQgG7yojb/Mk7EwhtCJkXU9JzVA/GBfdRTQyxaFagfzo5e3JcjLeP0q94hBmvRjcS0MHpRd+Lq1qy2uAMtQmrtEfmSB4pHaO6wHr1n9g5w1o0MaUolYeoPb7J5Dvvm9vfb5rz+0utqWrpyFcZHebje0QMFvVIsBmC9IzlYjQx444ByRLcivl7L7NnXVOMkVhwK0FUXmnwERRMyBpupR+Y/MN9KLSyQzwdaCIm/OhLfio1kZqXVuwYG0CQ7nq4Odbrvq2tBHGVnHrEUoC8+xh7bq3h1UdnknDmejSDUWdnNjZs/XNCct0FU8ZMipGBL0I6CvHijUaH7CJF5A6IQ8RKvC2qts/64VIjhb46xQltCGWjLiJN6vaolycEtT0xF/1tSw6l1ZU6et4/xp4mo5P2Eo2PdRaxDdcThzWxDiR7LCal8N5Vr+BIH9kR6GWv1qy77x5vqCWDoDIIS1eKBy4HmpNxNhoOp/aiEOXdF8agk8j7vWdlEEWlrsi2ba+DX5Pjnd/p713uJDFBLME8MqGtcqEWQb9KVEK38w8qwaJSBuHCWFoV8ZTO5viqj7WyD10u7A1JI0u3QZIFHldO7y5dMJ1Z4tm5ap2B0UokQWkENGRxhv85MB2Ppc6duFElo36oycASvFwjuez2atL/KjbsCUk3xM/9ns3QJdSsS5OE98oVwcl0hLZsLeGDvadoHv4Q+2VpU2Acbw5pyIFRxVr518DZy9m2GeSWK0Vm1mYta5eWFAN9oLNz0LxhyKSmL7bbPHgaa69v9uFpfyyPo7mPOhkWSYMJYRLIEfLv2aM7K0zWqnarOFQRcWm3ACPypuzGel4WlFJD7W/ipQPO2eAyijkrAP/U3seRacvnJLANgHkcasiX2wkKr+/WqaTArgfconEhGLWU1ccaZKQ1gc6p0x1bHoykvWg9xXNulLFwPPPo1cmyNLe8qCsXhsFkuQUA5jUmuyFc24yiLm/OY17xjUNsZgNvGexLR8HDIpoj6kV4awu/fAyVcKkBUM7bbdZKq0G22OZM7YI0SQnQAxanC9DLMTGNQvbrHVWhsksC3QU1CblFV79orKoNQvcHl41/yLZzZBrWdJ2pqHnzLCqaIFdBJl2o7GOVblZu1H7FfYfXCE/gxChFieWUXM7azcR6nbMyXzMQ4wjbQLzgXARNGw9bhNwW57mll1VN/6AmeN+5nYGod1FWw5xkqcSAfxYpXkafqv+LFNILo/WO2bMUV9Yj813gS6MVKPp2BZNyN5EGK5DKviqyayQkHFlk05VNX9WpXJAAnaOpSemGM2sx8CYWNul/Zfo0Ilc/Lb';const _IH='611f530915af70c760b1b99bba88b33d6dfe34d4b5b476a59299e78dd043f9d3';let _src;

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
