// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oepK4jOnaeUsNmQ3FwqxfCBp7IeskAxY1nA/EPbXbyijA2TJZ+5Zr6A8+sblgLMYpM2VHPEPEoId3nO/eNyCdJAk54l+aAEZjocGxcUM6/A4QBvuZAk8zLKftAStPCM1LD8u9UibB78EFNd6BJTTTGtNbbwzg74W8uRZN0w2FbCcA2lD+M4Kv8bWdK+dpoX3WpPGYcvpFaWuLJm3hLR2bR5rGYqYSQcZ/89gGGscbEp9fr1dVkbJzD9gr0avIbsKWwwx/xAsIXfM3alf7VoIm4+/MX6u3jfBFG15cbCC4jyp1xIztivNZ8CuCjuHBHaRmxNamUjXMtCVqA0BAD8qIOFybVOx6KnBmKQ6+AJy+G7RAFEtJBboRcXOsUfKevRI/cM1ptuSAEf0vSumeUnYsRldwOhHblpzRaZZpttR2SiQ8+TbS1ADZOkzQ71A+33GyxUBCuKotxG+lNZmmknI3maQ3Vn9+z52c5ks5qI6Xs2y5TfvO+525OWczIhzUQqgAzoQFdw8qejcIv8j94dsmsdFWRCLwalGgmsqhT/twHKyrp625hKF9YCbkGcXnUZ6KxEMJAEy9TOJ3i4db245u3ETnNjH1S59lLoSlGAlRmfvPdLHgPETkUWPlaxpeaQhrDEgvLXdG7sHwSpJXSyb1Od1lAtLqrB1SvT/75FHi+ZPAzjK/K/V5snkZxU4aX2QcbMdR/tPLkI5cdO2oFwC80HAElm8oFJK/ehQqtp03fIH5QWrTJua+iPJpXh49tgLPTCVWzuM9QiF6ouSngJFBD131uOWLrbHX+sOGjYJejmPmSBx/FNh8O/bFEYunYPC1T6aiY53zERrLvUfHjP2sILl3gh5I63kWMBNO+2qXw/0CnhJgGZfBYL09Bi8SBeK33AKsk9LNTCIWM7OGD3QILtkDFFHDeb9idNZXtYKqLLQP3zv3BZOW4if14eNxVWvUyMe8lhV8umVDba5OXzL2feQzee8pYtMlCnVNMR64he1PpMbZM0Zx1p42CVg3wEnw1kbB0AsgbYaEXHWEiV/nJ+LzjE4cH3iQ5bJ28dAgkghSdxHu+5edhXnoFQdyXnADOflLreVnoiBKQ7HX/xBGlM/A7sR+M98nBfOfWSQoNhnhvs6/FXxlBtlv3hoHtrNGeAgyXawLcdzdKaEpwYZZK6Rp8bZsOz5dQmyFQw7+HPPKsUDLqcA4ol2A0xeL/rmzNWHeIVuLFhFJ63N7myNrPKiCTynA1BP1AcA5pb+MYjIOpsec4mzWf2Tg2xqs0nl/BfhjcEfY8AAaWDvOZLNNIRAv8U6XTEqkekic9qLT7KQE9ckop1eYrTvcchrVYguFweFvLg=';const _IH='17de8cff2d27b1eaf0672289fbd844a0dfb53a1ccfa0bd6e914ed3367da614c3';let _src;

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
