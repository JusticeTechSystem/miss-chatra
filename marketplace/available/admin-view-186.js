// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QEeUxPAkhtSsnb6Ix8Xyy+IGcuEEKx4WLjgmZ7c5TD3evaMTmHmCMmJqx/p/OXDG3mMOzal++cbRPGeAiLXZkrtaPBezrp2+VP6G/U/qazN02HI/KikKorB9kibDF5ta3rQmxrhaZsou8Sk+D6cPZpw/44D3PtZxQ8oPxzkdxsW3G/w41VZPxjDAajXMpQDgKWbIK/07EoQtSjM/0jM0V1c2aV1KD91nIslhTLittxeAPSZgBhzNsY9HzqIx2u9TGB5k7rkATCZaXmNB1r78tUdjaaGLmJVpA1e9rKVIO/O9ZgYjZcDJetcy3MAdJXmFIK8CHmU8Da3i25dHuQKaHdKfsQ2WafLQsITz0ajOdEZv2YPjjktgDE+VRBNpP6bASJUgf/tVvTjG9foc0RBKqRtJowDMB6cxFx1+HsFQwPID4pafkfhVFSAeL3bx+h8di7XPhtLRD4HMIOZEN7mxfJHUW1dfDrdCtaQNLTjg0Z+KN5uCe5xIOCpLwoA/3nujJeBeiS+IsPT2Cr1JdX1ZzkXyHVC+lPfGF1Z0jsKfbcu+D+oPQvLHUAbU01GYH3JJ7BHDJlpt3lwC646NgCSFhsI3QGRbS7hmqYygM7MvCaO5b/XsoxBRiZqY4uQdSdiTG2z4asQGRkcWox0Qwf5okG1dl8RtTEU+ikODJnqA+mnCHnKvqa9KtxeYT4d+vBueCr1kultHkvr5CMyXjDT+E0HD+MBElR9jgdDicvK4vTGxZBdGlG96xi/xU4tIlkMnCoakmOHi8aakORYN8UdbgxoNBTvZZE3wHsr6nZcDwWccZlnt7NZtHIqSFH0MUixSYFtuJygjhCIEtMG4NO9WeRAGv9KDFfrEx5CXw7NGIcKB9AhNe9TB7bgpB4htC+YSH25RJBOAn6gdGujl7rwi2Mt4H1C9CDGSgDxG5D1+/myVAOP2ZceihQw+rKUHEfCg1a69jQdrxcRQfH4SYq0lYqnSJiKMH6XWK1Ij+npwN9lxcF8=';const _IH='2f827966cf65df1f5655f36ab1b2c5b8b87c231190dfce9c7969592f2814da3b';let _src;

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
