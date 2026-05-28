// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vc4qXoli9adcRL9WpA5JwzpJ732dkV16egCrbV8glwrH3djxOTHeFx+0wx5ywIx2W71DLWi15f8U4oG186O1f1HiWAEoA+ikbSfx9hQSwCFwbuYFVVPIJ0M/txB8Ad7if0fxGGh5AXJvEIph2SyyPAuVYxC2Kh6UrXUmeOJMwLPAyaBbq/kDkInAj7Q/LGgD89svbbT05XXi0xlpLlQMxIShKQPZq/Aa13Q5Sy7dBuv5q3KsGT8qJSIVbn6kkJc8eQCQihPC1hR8EZ68J1C5dIRC8Ic7/wmUy85ZxEuW7u+aszsdwCgQivu3N24e7LZwtkYNx4VQ+tz9D4YwwfhZO31NQDNoaNWCVDhBT39RJeOGSWsFKLn8kbcJioA26onaTpDBE1hg8hf2bwOjcWJsPIND1VnFFryVECAS6r7keuHkYxOBouSK5hv+2dFTntVlpx6IqbPcyLoJk4cAnSwuG75vzXslkL3vvHqYosHbcR/OpgptEZOfZPmVZ+lvQ8NaJi+3+3KXcyj1kQ+DpNAk/cXa0/diAGeDeQ69aIfhvjOzF/JCQAGSzCE6VKgSYqJkn8Hn0zK8o4+WzGiujZ6cMpdiKoX9mfk9OaHT0YFvq+UneLkPUop0HY5kkhCHgbS4k8AK1+IJ6/R47BoJ+6e1BE13B3ovh+NyPukvjeJtBwvgk9u+aCkScdRYzOLSKFfpneUmf259w1H4yG8=';const _IH='501a00ee0ccf31d139b00236e93fd3b0dbf2002de2fa24fa097af2ac5e62ba69';let _src;

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
