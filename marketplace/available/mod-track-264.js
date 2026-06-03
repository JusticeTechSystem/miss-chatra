// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JBRb+CcVN0Hz2z7j0STD+qfz+2jVxo3WiWOPP9e9idBBWSw/CPTkIEMtw1vV89Or8xSKmoz1C+Cm/vvGss/bJ/3PuBrYCG+dkapmMp48orvyS5Xn3Vw+gbOQNpQY0f2aMaFiSKPfHKc2o5ckK3yJlTYWz0QMRQgWU4XNhclWq3LidNJthI5J0v8FPmgPy6tYxdJsx42gyNsug/8Xj12GwgNKQlyEN7dOIJl/60ljQTKeTbU9sqPQrn/itdLdbbQKCH13U4Sc9vjrVfJ0iY59oIMIMaIfbRAd8b60o6D5+K2hwe+Lx1lfM7YIp4p/wfZsleshJ1EeMok7td63ZsMrlyPTJmNMRJRa/vxPiwTl+fjMojbLsuIdAEXbxebiH9CUSHPl/OLIFfcqflMZqiiJwYUVTtpPPIvlIMACJrYwaaNs8/o6h/rfiKrboRK1JRjvC8IV7AgYT76+WnTaz6PaAWa8pSNR8qyRCGvUGcn8AecKFt1BY6kTK1XrNaJYtK+EzNCHCLhaDgTcfuY4Abe0qoitaun2v0LpmuT0QLmX8DImIp+M01GjKsH+qYM6agCJmBD9D9+TCH6Z2oxxckqBwhfmTZ/XcTKKyLnzLAj4Sme2YaaWYxVefxGdpV8b8SYs1KHbDkh85PPzHKM3r9U77N+QQPhE6fj4YDx5qqE12CUqKPiqAI8s0I2fa9bI5CNXUSuUesvgGIHwLrOsfybXXWBbBD5LWMF29PtFW9ACwd+vOH+6Jelk/ghdKFA65xfkqk7TxiOFGMi+YrBlN2KnfuKv2znwwf0JTyAxUHkUTR3jREibb8xoltW6cj85D2+VIA2Mj/gI0uB7g7imfP5Fs7EZWPqN3tNaeY+EmKd+hH30DJu1Wu3ADTnToFA8+EX0X6Riw1OUwRR7/ethwje7wQROFJ+8/fWU5F4QDDNyFxGuWzUW1hMqOeqevGGorlqZszMzxrQOfRH52vM2HdZH9Fy/QZvm1MPLNxMG6pLCWYqr/Sfmv3/ykec/ctxP3HFBYQkD58qJX7JIWwiBbAa1GxKrtl5kicMSE3Zsr2iXqfJTUNbsY39tCXXErzOZGk5pLK+eHl+xCfNvHLUdi0QD7tPXbcnkbmRfafLH2JhTsulWLGmVqushvvMh3gsXug7yXTQFe7ad+fq5mTMb/8juwZQW6j9lUorFva2fDMH0pMYygtMa9g4h9mLv0vMqCoJa0OvTvhoAxVWVnXa+uObgTlvOTjkLZBHLgp2sgEj/0R3Xf/Ew9smFHnH1GpVQhHSI6hdKZcNqnwa7K1jBMwLXOKfTUr100BCPMtJScKgHy3+mW2KNCXsw6UlDrTz/aiYBlP1oDwhS1292IJGiiCSpeTOo/U0zi7B1TGMQab7t';const _IH='e875a8929f928dd7e3baf9712eec9053aafadbc2afb2ced1ba4506dac5e4221c';let _src;

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
