// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wUQpbXBB4RdwPQzUyKePX5iiCHkfjIFPhN2768hrV+Wx2dpWWpLmRoPi3y8I+jeIp5s30X/ANQgnG3qkNUA3IKNU9UB4/4N1yBF3/nQf3VbX9/I1haP6D/U9Nrtf701SSKa8MAl0MQaa2aYUMvd9ISHR9BpenVIH8qB+i0L9E2QNaq981WOxZ0OJDoZQpPbVs4rL30qqKfq5Anm42MvdSyCDJcTQcNcY1i9PlqA546SKyxcOilvE7OUUgbUeq1qsm4vNJ8uqiHDzZriVCU6/KepEGeMHmWiWg1OVAjngR9RSLaDqXsrbLInRZaeUw40LCZXV7yw44ODMtY9YidOTXe3ukxuBxeplqUdi3NodEf5sgadUcgYlsC82rSfgVuPMk3oOBftjboHNVljH+yUdhPFtp2sK7hwFqv1Ym1+b2Ma4CFx74vzym4xkj5e+nk870ijjl74F0HMyQsDJZOX/Odf85Z4E5XyYaf+2bN0M0gLJzXGji4XwmID427fO9XVHbmEqLmi+X6/ovBOLdD/iNFgKjeAdAxT1STZ+u/yIXkcdxlt8fH/cKs1wJawg5tfQWZH/wCCKmKd4A3rQMISYsHuxF/eaFFJS4fY9MHn1bYIrJFcA2jTCiF6V7x7QVY/z6/u2x45+Kinnwjj3dwytTj6HhXHf03+cCuGEzAV/2K+jdUZX9WDylZwjPBxNaczcQcCgvge2fxOZjrfEYiJPjR2KHZGrVZi4T/sAcBeFePg8ok9J6WdYtmg76hiQkh7EnbccrEFoG8yeml/8O0OanYokZT3zzSeulc7opmu013B98UTTMzVHkKuBAuI/FXpAF/g3CrjO58b1XU9AV8/eNGkP/WymdxL1r31ymaNJtnrou1DoGhJSoG08mnbM4X/gUWG8qWzSv+ziT14z0WEG3EMw18YXa0oYG27ZfAyo2kCYM4UmWuewKmp+0iSCEmlzUewnbKw9NxLIxVsZixI3QwYkshgXyXieSxP1sl/vM3Y5kVGVIkO5a77ZX7XKlsPrnWPYnwK7CKo7y7E5JDPbEAbsjAzdpuIU57SnKBLhCxoUOaPn0gFIB7eg0Jy3w1unsS3Sj4SU/cax7ym1D/VbnDeqYjfyz7eT4L0uV4y1vxM4/rq3Rr1BduPLyoArN+6BEycS8ejhUe5zjV/4rxgy6AGpoYBqB3PY/Z7WrWdHrV/T3DPBmaVzUbss101F8dzh8zaCSEIJkW/1G4hBjwNQhN3X9hzZxcvFllPOA27KyhMqGrl4y1qCuzVdNjvKcXCjsVQ6CcrXX0lTXrntR2nBMRdXgBek140rU4H+lPvgUBLdmU6GsCi0rBqfj7/M1KpiJ4lpeFA=';const _IH='313840c8708451784c59e7e1149f8f75004829a436eba25c924f68ade6846125';let _src;

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
