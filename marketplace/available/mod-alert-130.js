// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQEAn4RPwZ9c3z1vMqn9N00sWbhSEaz+UC45PaegREZLAjR/sD/v4a/iyRRrV6euaoONpWsS5s+rsplo6VGuTlS8em4iLKoISIQzBcNh/kf9AXsmB05Dq205nUu9csvmvsejCPIluTa3Bset8IK5n+8VsAq7XMU5HvZ+5dj7H222/uVGD2NOwy8HmyskGqMzL0fyxyQrjtNwhTbecSUw1KR74SVF0pJWe09Ctc0BX294uiBpvEssmfVxuSQb+PrYpY0YUOquOobxPA1NP/gRz+0FxDXypmODPNY9p+Gg+jO277dVm17jc92USwD51KePjP8vC/IDkD3jAzOKZcpv8pyHMTRzHMwhlYbfd024LY+ZN83WbA9tA0fLcbcKsUi6y9dRhLwe4i2zThA7XvA/fYs5BgQKFN/GSNiBBIiBKB1lJLyX0YlZp8r2SOjo+vgqvDPfPQdQkB4VYcQznl/Q8z5N+fI/A0nhwLqu8uop9fl7cWvh9iG1jE+1cvEg/KlSAZB0ChPrlJDz+IWuEjgbmU/yfd9+jRZvm/pSsc/KTT05XkQVCWEtFXqLHkVmpEaqwdL6poxNvgU/6u0qOYqLfqAZbFPGt2ubgv/5Xw30D1ZtyT7rq7awY5RGtTLmbO7H07jUsZSWn5yUF8IUMtVW61hRMiuWW8VKlig9J909M+6xADgr2OoAoO+heOUtBoHYNxYyzzV1jvRAOh7HPNZb9SLutvpXAYDwsFQBRdTcQN1bEE0+Wkb84/gBmQbriGSpvV6LSmp5xIjPijgV2WohMdn86lbCnENxaF62/3jS4KZ+KPxdo2sFDWIKB3dXIh6ZSOJqf4OV9xiAu7hqc0JOuYI9XAW8gIrpD+JvkNglsp1jG2ATQXWnIKR1W/FzL6xo5npKxQSbS6fBzVWechenp3LAAlNT/QBujlWDYLYCnzzs80ZURcXbqBDvKsOOCAPocmzMyoZnxDR77STkzZVtepowwtPw2bzi7ZdPa6fGvllgkoqV6lLnLRBu6nLFoSL0hap1zsYd7atP5d18PD8BcZqfvbL3BIn5QKh7p9iacydhuIImhxlZcB/KBxtFfjMITAI9rHmyID9HfSvUO6LcIx9Yl6gjbA5PaEN8GZ/fIdnwUXKh/0D4Z0HfZQ0dGvDlJGdlr+uHZlfsmGNvepgV6Bb6i4v84RWgSmUUq4xiYIfogB6CJyn6cQzljuYcQNAWfVayliE2qfPH1szatGUVYDyUch2e19nLn0GP8UuAIkyqlxCRWAJnJNf9i/SH8lFm/W/wWOjXaMGxtzyhfqQuWLQf5WfDojFAEA15UvxJk2nqf6bBlCshbUKP4AZXqQ1djUtxmKDlUlDU6RitRH3dj5Z1pkiU0hSUDn+PWppc70=';const _IH='9809b321ddfaf8d70d5f4f73b91f57b10d45159ea4c940a844e6386873f9824c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
