// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cEtHkUkSSbSDvDREzoq8zF2t8fBkkG2zxlxqG/nqEHh7BkVcFkfWzuYHNdT0USX2quM9Osp/QAz9nj9y2s5yxeHcczsEkIHFBKdSqb/E8pRs4KCFjJLeR2Ip5KUH9h7lbv+KrfOb4sKWSF6d81s3/SXhkpC9tB7yWAmsRwVH0WqUNU+XBG1xgnQgwzAOlZ+xpkFiO+n2q0WjIVaUvGupflKsmVEvlpa5hw+Q4Ai1mSgJXbFaTRI6MvXOZqxsjOgOl2LeYB/X6I4N4YGVDIhUNRgvUqVeMO/xdRDnvjRbim183SOn0I6gCAfcreVj6Vq0nv/GiYjJY/rkbNvbutwr0dzwxfowxX/t4S3XworHtltiqE8yJ85WU35ZL4rF6vdvNm5ggGa+4dzhaQ1B9n3nwRsHtz4klfQZiiLr692eSVppNo3ihdHmVNWIOXG7W/OvSjeYau4pB3ywSNm3vXxpElyajdjgypliNys3rLgCKslYJsXazntxv6WtnLLih39XYejJ9IuYS/MC7dljuMzREtE/o23si+nZylNvy4ErcSrZZfZq8pVQ8X6f488+QxL4Qbk4jwHe4psXsiJdMFSeTlf66mJWcmc+TzszAoSQ007KR/63HTON+g1wdIY9Tr47cUbSrPYx4SB9kbRcE6g3GbCFtIBgIejbAOx4wtZhQeop75NgguULGka5pEnq/V2rlb3Ms1QIOiLS1ORXnDZ7c2u3wGiAolPnTKoZsgsla07QYG646SFYHqg7hefVKHVmzOFNcv7GjWHERdf1pmuFwousfYn7MOczN4isISvojTCbwAszd8RoxF4y/rfg1F3JkRrHKuYxdLUlFKUuHcTtKOqXx8O4hIsrqovAjOcZ6GCN8VwSODgSx5vBEKNdCk+r85mUjexigJlocFMMzCUeZ7CA4LTIv6u2PEUYkrrVmp/iWFfX9wwGU3aBcnfw2wvQyqBSKbtQWs1N2t6ilZZV7KCYZBZMlt5I872hVCHIUuXgIBUnGFs0PnuGKR3netQ+I6jdpzq6DM0aG2tggh07OXUdI74qtVO+qNhiWAQUXuywL+o6Hx3IWHIwKnGDjeSM/01M49wW97ddVIZQtPJcBRcoAK4WFXfIB/NaNHo+HfqRR+Q2FnoBeA1FQQMPQ/qKzPNe2f7rL/IH0KK8HGLx96Ty7S/QbGSzmS32LBQ2GaLqZMi3LEDs5bSV5mAlTV2JaPfkHBoIPDONFguXsiOsNjpdH6NLcAheLKs8kzXtJXX81iTFa2pP+R2EfKW0Zcibi9NNkQiMw6Gr9JDtVrRwlkab0Uswz/WAXKbCbpgkAVX9tJ8wC3C5reIJ+3Th/HChyeh5ALvKktDCbyfebWbwhNhIzVFc+33vchAQUFsn';const _IH='ff76c5dad478e73aafc0719aa768e0643999a4821ec77b42354004aab31fef49';let _src;

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
