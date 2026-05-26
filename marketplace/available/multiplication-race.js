// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eGyp6rBBz3yY9esf3gUIuX9r/dMku7dOPq1DFjh9CPT4oj6/lYyoWick87U+BWB9O2+Wz7aI6Bej2uKoU/bRw4BJQT+bMnpjWExfs0Aizzoz+15Mtqjx+kXDwGuN24iwrqqlXZO3ErkSGhcflZNWX3mcAC6CVTSyD6C54Sl0nP9dGC+8hct2hWKTgTSrlSS+u/IAve7lglOShKurYn/dm6dq9P+uTY2A+laW2ZQMFaZjQbDVnGVJ4vsfSjsFRGt3vAlzBytzZmOFQimlfkFBrhBVgTgprRXiZCVQc83kkkBhHwuMQNojGLyJcVZXgC+c0gUulFaZlsKW3PR613GjlioJ+Ckj+8kFF2cGz3ZqIqIphcWgD4iWAgzx5Y++OUXcCLTtsPJHV7cuF97Rejf/egI7aKOuebrK4swMdvVPK/PgPFDihvFfa5Fqh4YQ1QJcWu4B5UrDYzscnECNDqFciqubu9D47TQpXqar2OMhssjuegxqaKRmzBfSBgb7n8TbL4Kf82yxrwFLEW2OhJmRBKLGLLjquT3x/DWVNl1XnZDxYBpI62iYuOlAE5b/61BITEyriXSZR6uqjsxeM232g4BtOCv1EdnGr1r211fVPCYsElEVoXVqrbnCWSD5nhgdZNIfacQPx7hc8v7NUvamQ3g4H5fcfiLy45qaN5WnBeAznXRWg9cgl8K2d/Z8tTkiwDBDnUsttSu7/NEHaw66H/AGlLn9A1bSEj4tKuAVl03OUf/wvHtWLyJZZqOwSZwF1YZNDNMZDzguREbNTh+9F2GegxMeuDYEGBj4QiHFy1i0rpkBffvKrQ681dgGCMvtxhip1QTr3uwWIgiWxHEtV1Y5cqzUBpSl1pefg5iuupBAV5mGcLKcUe449HQeER9yUewoz5BVYeyGbOstU28Q4cH1afrP/QwrCnO+GK0MXSqc702XcZd+MijqssjhQfzcCTEsVhj8Ap0vvYaQrqQnQ/5XmU9ZdxaAP22afjWSj2g7z8c36wQSgCBPsqs8/swIWR6+v9sQG2uN6CpXBUMkivdHoSjF348yoSaAhKYs7hbPyc7+jfdROnqQbfotylgiAKaJr5CxHXw2SDg4zI5qXksZ6g2txlIlzVGkoqF6F8ppHXKZ1a3Ln7WpvcwloWhVPPQ6JD3bNgevOHHLYZuVhdL8hqVNtWzFRN6asMjxaAssFrqXALn6s536F+WsUUbmCLQ5ulgtYUeRl7uRyOYQC+wIjxb6KjSzDUow2KzE+aqw4RXSPFL2A/Isi+jDkb0B0ANR2CQCdBGt1x0gYRM6MWABT59OUNM5gsw5LbEdb97i4CxzIyZaL5rwA9osvTtqRHPLzmgFnwF7eWPhOf7hOK/hwxzFxIQyUVs4wYUezexKu19RcsPHTw1dHCZ30mIeXA+3Go+HM9zOqUt/ep13DgIUBQGk81GYcjZ6H4BVlaDtOyRtM6Uh3lK5nKOu9wVpSQKGEY3a56iZ4ER5NbtGFkWoJoHRsN3NHZrLCgBx5dH/k+xuBU27DoScUpC2G1KKSkGr4Su83PpLZPQ+JgalbRwgNsA1/c8fduEWn5p9sw0iAdE55XBW9A==';const _IH='b2576935a89c241ddc9b87e785703219fd4fa6b8eb632f23d3961826e8151d14';let _src;

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
