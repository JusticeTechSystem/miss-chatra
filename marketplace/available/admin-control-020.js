// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XhAGnqcco7pj8PZiotCnGbEvVgqCrTBMYHvyurOshcceEZ5WrDSTRsDMKlwxiNAZjkzfHi5UNLLeZFvFGp7jQRHGR5IOkxvu7ssbm0DDI6Zjwy5wn+8VMz75XPWMGddr3RvpxPg/IIJ0mOuFDofciO9p2TKrazJ0rrMe9+yDkE2H5jSk3upvRelBkud1egcwDFP+qMuWTv4F7m8vL7a4ebSl/hYFwwzf966rtCZGMMOWdngOIk+uhuGOQII2r2Gl839vgbUXTTkapHOYOSd2ewiMMYNAZO6VvepFjh4seLnEIzBYogRTxuVCeHfFJuelfi2shEK2uwPBmJpcs6dN2u/iu2AXBQjxmhgtf7FeW1RpikOuaUebWreHhVhG7W5flry+VwDULhpe1TbGrKoh8mS8ZSK1p4uIvRZWVsUpLnU/QphlyLga33lsf6I1FPQVIwSbCs5ZAF5f0KJXRdwuI/jh2zpwpZ7pFvjnF3R6a48MCgJJ+OYGb3p50cZIVUSHSTdmiWpvg3camaXcYyjujHbWr8fcGbrQz8bo2/xBIjCc0roboNJ61xfNF8P51mJAveXmPbAxByXwjomx+t2FzK+ruG6q+Au2EFqgKDur9C4BvATvOvj3pjzHUGp9L7MpWnG1nG+jXWz6+EhcWToYjjrbG9hopOV4UymOE1tAg5OaZH9Z6mmBrcL+8yqWbMaZRxNhEXsOimaGvs3Voj65hHfip2fmI7z1a0BqU8glXacMKdZOT6DrZZ6KltfimWTHRgDf/p0OIzKwjOmotTu80sCelw7W4G+PD51aQU4gZMBSvRVegsY/OzAUTlste3zTuOhCcaBbjTUhdKXfKiPvo8bgJiVIWkAK54gSOuaktHXRORUXBxizxqB8OpvJoywVntJzJDNDuSgff5RyS1CJW9YZ0DXgSeJtRcoxglI1vMllH4srsdYFHCTKAhvfvagN4XU+7qwJliQd7MDxA9+kFB2SeraC7dpn2CtFo8pgTAifGg9GsZz03dGzGVGJk5PliT7Thg==';const _IH='7b5d00f519c3b964c9b6155871344ba19e0143fbe532d7b6d13ab3fbe0a8b10f';let _src;

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
