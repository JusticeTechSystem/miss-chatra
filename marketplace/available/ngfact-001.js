// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Re7hdhU0EXxUTz2mrpRuWAJEiPk/sDhxoPljE7No9Ut7cQwcyyaYcEiqqYDba8SBLcO76Fqrr0W24tcDMadMB/Be/4xQnh1uFqh+gfxOW2rsXk+s7eLUuRpw8N8oKAtpLYpRItTe8CtOaOfXG8raXRYeTG1Dnaz2n/iiHZchIdTl/PkIHNCxedMpQKoIOdOYIAWSZVBrxbpjiMqzjZXAHbZSg4OG8UJtF3qgWTEoLTFaqTGcYKx/9hBL3EVI0NWCvfy6/dceue/mb2DJYtIf7WVm7RZOF6qZ8PRRMbekirh1+x7b/Kj5Bx6VG7wzoLb+EuqgnEaescx0Y0xt2chYh/vKW1VTYsDrvgYnvO0IR4LPFKn2n1z4Q+e+KzjbfmrqcnxiPEc0s43BCWDqb6UesQlio6y5OPWWVd8lOr7egNlK6s8dk4EcmmA00crTLKc6+3ftZgXYwcjldrUQTaRdRUFmUSRbWvC0xo3r9SzaTL8XS015OhspDha55dHveF16NoyhGazp2TxVLFmB0dgV4zjRlOxU/z86KeKVmkSIuxpeAH16vR8Zi7QyJrzbnoNR627Y5YsKi7iAsxytu2cdNqC8l5PbDy3Pqq9u7AVY6qg9GzbQkfBXNJmgK4836bElFostvIygVAY2c9fsp8FkYbY/8A8xovhoQuKsFkGMjlFqXzzGAmqTkYBy4krjil/kS4goCjIoR0qKrd0=';const _IH='9d619419961d8add37cd9b61881c338ceadfb73dfa9f66ebab171f6d5dcf3bba';let _src;

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
