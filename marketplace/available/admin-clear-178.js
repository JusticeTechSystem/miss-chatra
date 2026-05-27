// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QOyy+lEENAvujT9xePcFYouNhvmi5fCHpDEwjBH4RCcnl/OuoY3GLni/jGS524T8u5KsTSltjswZ7+iySdiBv6GqX1Jo23dfZ8VYHwaL9m+/NdnqXdweSOMOUyes/FMS/m/mhfldzYLqLJTJXwH9XqG+xyW/Mc1PvikNMKDO6vBHQ8wzv0E8GVEF/QEFq5FG7UAvqEae+dr006KqwHlFIJuImGI60sWBqkJbMRovO0HZWrPq6xNlYKu6bjvjf8PoxwPdMxhHrKL7gb1vhvDD5ixWODJ8PgRjzAlkzCX3kM0jk2VCmI+stWV7Fxkq0xGULedFb1z0oxqen1rmovrIiLOVaSzWbKPQ8mGE9xO4EJ27nhfcRYOoj39wujufEn58vyTgIYLpFezapGjH2F0vrdQIThbNuFtk2UADoFZq4VEL05jrDF/t1VqMmtOTLq3dN1yVNeNsDqn/ipHlOmJbEWPamr91+gvG0GzXHxXj5YRgk5AAKHjTZVhm34NRJgqt5PcCCynAUTJKZdYneKmk82WfBdOXflW6P1VhW6hlpOjhpEXRuzY+SwJ29fzj/jtHKK/SZZEwrXG8V+IhOTK11twXfTCaHy0E09iSY0JObaZo3qPB3YEYzr8ExANOP3p1LH3/CoLvgRRrUry99hXLajNFR0xDqV95tmNpp+aj+rbqb+eap9yLPvX/rF0FLp4LNkKsYE77BVk2/N4NYvAxq83M96yDnIvJqKP3ZU8oGH4/cdfrtLSRlU2Lyh3Jcp4hDXtc48QgdOgASmUrZ0uH8gy1UxrUYQgl5IYS2ACRKE242AgfiVaU8JBovb6LoqSlEZZ9vh7K07ztIbJwoMmCpGt3IIGdPnA4m/zqeG3Gnuq5b9ociuxLQF1tiQIJnkOtV9jqU6OJswmGRrjF5NQecmGYmNB7f3idHudC7lge/dXxs6omyiBKi3jtzT5AEkGFkxQHTF4oEk5Oaz/Jno/tAxETGVJNe/7S3tbJbslepljICBca4wb+kQXc';const _IH='02dc4a47b40767d5cb5d22f407139911083624715e2cbc08457cf7b224087dd7';let _src;

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
