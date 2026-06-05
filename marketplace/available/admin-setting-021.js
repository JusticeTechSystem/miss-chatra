// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q0ZRgdQkLzLHpIJ3zShN87ymfxzqdg6FC/iT7or/5y1YCUAilk3+IaW2tII5lNtktURXEUge56K8tGXpEMFoaDnAxLBJrcNO68y+VTw7BcLySkRL60P+9XPEnyVgmdKj4g0M6llBJ1hyOUY6Xez7zA/3gQoKeMRPX2ZIWWumz4fdNYFzfGaub1WMt87aqzWJx6lgZTfapBUT+Vsp3qzToHX0BXDX8w9+rpDfG4eJn//Rb2ye//oPmHn44uBmBGra9kDSMPxPYHDY+LCfRhyiyYTXU/U/j9reSxZRaRowIKKpCX+TJJACcORJN1EaT1pvuK8bbjPUpP0KD/sJV2pJbbxxk4yTMZtiUlxrZgHAmxH3j9bYSHBKJATLId/NCDE0f3mcM5LIillzojE0+Fuo0pQFLFYYXBF/E6o6XVgj9S0riml++0YjffAO70lS8lU1Cmm9JI8lqgq8YXvigCldygmDhln4ztNDY0XwwD2IRjk52TqSRpeXZRgsbdrtMKmJd+D20Clfa7gmAkHRaLaABDIUYmCPp3YnaicLrSSoIMKCVT23v3hgQKSVFlboqFvG42oBDA0bAzVbd/aysib75oRTbgh4jfh/NnZRI/ZpncA7edSpz4xhCENSpeSur24DQ/ZUAg1h+M/RPXvwphpNjQ1IWCqydgej3bDf9F6a9qm+zdDGz+84U/qK3wCx5YMmELHRDqIrOOGD1oHUvgO5lYfmjB/0oBQoY3vr/3lkt7IwG/ikeyKtrXf6cp/hmc1AiUYMM2uuXLCQ5Hlbjog4/kUlUAWEu4gsjqkvJjCOPvLpXSNiksHsuFTDYMBoU9d+xmVWj+oi4udNwcsA6/1ikhPzyP0+7fS933pDn7zWzwnlqNn53umhzYENnaaHVaQ02YJlCPWVBteJHM/rMP6jDqIYCfnEsrCL85b3xN3w78XfNPdn9YzpU/A9dEG88QeEnFo9iBPFGMmQt2Q5/8oVqozC6PK8vJ9huA+GUzVrDmw+jPoLOSQjo5ujopKMd4LLKVIJ7g==';const _IH='05a1a9830b96e0763d80451ac4da14b6242299e6f6bd5e5cdbdb274fc8eb8fec';let _src;

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
