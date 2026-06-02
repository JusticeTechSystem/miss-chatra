// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='had/UcEHHMhKDk6fgIuvR4ssgnN+4Txle+yQ0u4ooIjT6dqfttLTsarv/LXyBF702BjA8XSPGMqqf2bHEb9gi5aQCReOd9l+pbEw01K+a7/9ui9dV//jc6pfISKKw8hz/Hmr8XOzw92XwcpmCj56FmAOe6ERlAmsMmXl/9qoLIS5it3jhQjhM24kQeqx16ePd4jYseF/zTMN5TutGtenUmpHakBmfNlHhHfazWmZr73BVwm+8vyiiT3hCxuo1B7m9wf3YxZd1apfP5mX8DLS6cxbAPFfo3y2Kz+VOv/4Ta0SxjUCURDDaCCovTPurj5zbvihUVz1BsJGWhlW6POo364IX6JlNQ7TRsRWuAQ1oI0u9ebK94bD6+nP8YHHJH8fHIF0e2WlXYdvt4quVgLiLJ6XtySLau/WF0h70pyPJPjotwOnfjEO4Ck3bJ9awsuubRbRBd29/p+9YpqRar50Gf4ZUvRPSQHd+iS5MaVnOdJAopEDiCroKi/yTY2dVD+Q1eHAkMos1jDjFRHR23t25dMegvF8LHHUjvT4bCr2dllgfv+l/M9ggDl/j5Obb9UTNB7AjfZF8+OHyZrT3p+D89YxFMKdRipWrjCJZditYAAG4ghl1/pZIjEqhTWnl0PLdfkHLvpt3RI1jXcDQrMF4w84P57MWoxHzTWa2cKKhR87lpat6l+HGDmIyfLZqBO67+yNyvmJ+2FWZYU8/9Hfv7kA7AlCkIFpd64f9rSRUppilcE0cTEv8Smve6oWk5wAQX8+1F7tB54xG7F+bB2nA/UTzHpIkkiIzJX0ZKUIfZiyLV8jx8cgWP+58ASogYLEThS6pPB+kGYZZjdxdti/bh7Y1Aia16/iJ+qMJh+kdQEdOj4lCEq4Dn9aLOfckIdxArtZe6zQpkEELLPIaTyihH+UB41WOAmpE2w/7bmR29AB9GOrdpKfsc3me0g8CYSnNU2qPqF8CmOPgvT1SEzaeAxlURuGuylQB5lxE2qVlfcoJnQnwejfmv6qgX5kf1gx6kiN76umIsvSa83C6I/oTuZqrpnlb4pRUto0MUaSMDQ9yIU2Z1SL6SQSbO4+o5kiSMnI/qzQWlK6EcB9Glg0HetKee69rOVrhiMwhCKPZMM3wM68RyfYS8bjQyWK3twQbLQJjYS1qkQ/amFfqUResc4YDTDo1V9/AGrxiwhefJtliygNFlZPaXQP4AKYGzXqltlzzzw3KAo1vvUxyH4Lvx8+lWyU2TzyoEyd4IUaloVfJ5BsaCUcLRUQWchYOol16pcdjw0Zch6/prE9bmy+fLuwCL8VXSZ3kZiuP3dQ5GrWmYpK/cUjgYKIDqwHOhNyc7AiLWx7nWzlweH9xcs/7BXFqiSjeWE42Eq3hAj7cvXeKEw=';const _IH='59aa7c1884c704051993d8455917135b26a1a240331467e98a4df34fea060b3c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
