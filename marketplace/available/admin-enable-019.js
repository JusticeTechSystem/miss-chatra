// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rt8KZy2+mRgcEK22jvJ5MSJCmS3rcoyRwItWtBlEpsXxxXAexPkwGkJtZ0Wk+kHCriQx6bREfdukacWRpEZypcOEUecB9qiNTlExE0YkXQRLVlp7TNGLO5qh+U9mLA2Oo7k3oDxJtnH+274YJzkwqbAOtQyp0C66sKSg49ArtgjCps64cr5/WSR6qH3bIEC4NasBJhUIj1fw320a0paC4crS/BexH6xksAJHUI8LsF88R6tGEHGyIua6yPp4Lz0N67D1XNYzdR88tO4g84jrIZnxQJn57Di8KGgNdxFBynwWQWnDZh78Cx7psTnj0LMttBW4bTuMxqpt2/HhbOdFg3NdxzSVh+ObRRmhYw83WMmJnkU5jnvE4PTiK6EbmF8aYTkueVgprt1hCzv16v731nB3PbOnb0fxMIGG6+UFf/nWvnAuDek0yRFwsoG4btFr4APd7WbvfbdnWArWZc+jL9aGHTJCh2wWp0+b9Ptzu0VmbfIj3YUGgzjpM48noujOp7d12wjqTYFezr0/oYV4semmdRut74++B1UvotgYWK60i3hfgWOOxCOP8/Y8QrHWA8/Hhe6YlqpSsgVjjzTIlvSWyoeBuu64SpTHjqBpp3KbeKojcAiHIK9GmDfe86vO0vQmFO1tzrgO3+P9Yu9KdV9CnH/5T+7NybjqUP1wi523UHQkLfc7Yhb/+zghgq/L510lmQG+7JLcC738/Mgj0o20ZD+GGe4hJPH4JDnmlscVQnVRa45fhGlD59e65cB6nUrQZityxZFOcneP8BoxiXmSa3QRhflHUuzGYl+c1VAZ4i7HAggo9mSn7ua3wVGECfKBeNnXa5mi+YDW/V6ps1j1tuPxoRSo7in7LfuACgAkd3uI9m3pRS+lJAvxEvdmlhAk5H6pPvh/05NM8wElGckEDPsjCrgWF+FOi7F//k98KpHJFg2CxmmvQYmu+zCVJugWfCqhbM5qOV0fEd+B6NeuUoQ3n9Z7WryIS3Lo7Trn7VLKriU6mRZZZb+r';const _IH='1437e9df3825129c207eb5e24376470ae3a588faf77ea1e95f022e40333807fa';let _src;

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
