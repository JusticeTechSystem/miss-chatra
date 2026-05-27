// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bgILyC2NqDS6RtdrgM7P3EpSk7ok8Ax9LCEtMirefFjvuDs3QBEayiX1J/VclKo3M6ufWBAB6IXNoDo5rRrD64I9OmZoDRzrbw4W/f6yt4DmxloynD2JlG7tygXaGR+PdU/DdLQDFHdtfYqeqF2n18iJK3J/3cEymLp3+Iv/znzzaFcg1Md+hRyPK+4F96KjNtvhzQsNLi2zfdtEsHUfu5MZxB2oOWfR5EkyQFlRoozJp3kzzSsgGi6+snmFY5ZUHUx5EgFHuwvAfAmnbIFlzSeNn9IxoqpafYSSx9Dsp4oo9JV0zcRVNukEQFeNYLAzrpCkb5V7VFysQCvXppU5TLiQTPQb3+bFUZB7qi4fAGH+nu2eQn2vedyDZuFZNTynzNCop1peK17DUO98zJhZ3ahq96wwrctRWhpq+cWaxare7CdGb3xwBh0ZgFOZ8zGOhlfSljIIwIX1ns5L2qyNfzAyJkrYA6sinIp9u1TPjjf4UEqz1nu7J1K8WSDo6CWROYDhATEuOAG0kdT5jMWzcMJHSzVoucWH4JF0EhYSnOTYeEmdoFb3wrsqfoVB/EwOyIm+wCBuWs9B85ed98GiLvQURC6YNHTFajcJo4/qQbnFYWnGtEqF+JJvDVb0qJbWr3WA99q/lMrV8p0r2TjJ8SG1a1lSIcU/Q7qSkBH3CRjLO9qkiSNgCBeIMfmlHqxx/wbqMHZH/Dayx2Xn6+olGK7GKz23jE/OChl/HsLHffQRsGF7z7JR3Uemi65nfLgQbI3vIseJFoi8f7HUsba9WmAwLac+pCP8RX22dVY8wH3BOX0JZXQtv9cF0F0sJ4zOiCRBPxGPkttSYgcOcOTMfGd5iqJnGkiCSHI6e4P6cOQ3znvU7tOKY1ed5okkLUBYSbfdNUIS/bZB9ESE6jfg1vbXBJHRG8+o1jExeXaxtWtFCND2D2Ht1E3AQkTrpoiWTdhzOJnns6uq1m+Z43AG42VmMschqh2RAUCG18jd2vL27ot5EnI=';const _IH='f0d67628946b8e2228670d303161ef4f988672ef5f16b19c414db9b78b6fa85e';let _src;

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
