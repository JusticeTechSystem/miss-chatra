// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cBs9RDo2UdT5q7E2Ec8RSGA6L2Gwzwx3i3+o/KTmfGrEZRkgUs1PY97h1Le5xja9Hk5yIdFX23V7TliH3U+4VYJUxVUJY+GlTwvtrxWncqQ/cQq7T5S0hXzrldmbRrzeVBCJUu3kYTDwjhcYp+UfCwsLh9gKymoQM/KtQlxkGKLVctLaXpeNYd5t5W8uw1N+cxYk0LwfOmH9IiVzwDByE91BarCgVK1saPU+J+qoSVSK34spKZ6p4066/ovynAIwqvWec/VOKNSvQrhq5OyRH97nz6ia/J6Hqvg+kztI4P0ZEpsdUH+P2+VPh1Y8ZzUX88sinJ/xc6GSKN5wFk8x2DjBR+Zgx5MMJ5VWSS8V6UF44mmQ4Hpycd7DKVocIjgt52GlakxCVqYS5TUk5kvtTYv4w3nLNVnHDnYZFxmOu00Spccrev+j608Bj4PGNSHL9aDAmV68c5oYeql/lxTR1npA3TwUftd3WC6jQTyIPaIHvEKLhQGp5JchMdwkk1EqI1LthUZxvUp4+CbR2m58dkEWBbTHC76VlxLEsNXI9kq3UgZBY7C+CKmnN6i0Vjkb/qCxkacHdXDan+oDxSXP7h+5q8heJpQmvn9l5dm1oaK6JbvHaezfamwFfEDdFlgHN3SFyYCFqJS1APM7EaowP9bYh25lxm69we0gjdbRiEXy74RUxsAMMfVo0jkpem20PcN2mQp6UxERochv/jwdsG2qp0ud0YEyJ+ZgcVocE2g2p+A=';const _IH='b3e5ba48b0b9ef86179021cdd844d03514eff87ed657d1477ba3c002afbd1617';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
