// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='clf+lcpumf+K8iKo4gbwyCsHj/RVkc9fOjuKiCyZUytfsGDaYk2T9lgdxYiL9GiKslmfYXHB2CZAzwkM/84N3jP83UPrS/ShybLPPoWmi8IvoerZHbYPCqD7rL0yaFRT7WuNGlf3BUiu6WRFy5ycRYn2wcVkLE6KBRy+yPUxJbnIYuT4CoZ3WV9Nsttwla+GtwFSQqVPuj1JLL4CgyKo5d4Ve5Vziy8nbLpag8pm7RrefudTWcBuT6eGeOCfijEcJpQncI9ThGEX2Lp9/b3iZOWUDHcJaEMtSzV9jV0fvmNHwK4RJ2g2Ra/+VrAHd4SXuxvqGce3+j/zy1wTXPI0BSbk1IK5+7DEuGAyLe98DsmVZ5R2C92dLNdMvKh4BRdDs4W6dfe6jvevtCH3x1l5R2gPHJdsSi0jvxvtfK+LqPlJMdTJUz6hUg7EtFKkAVdN+qXVTOX4R45GXLzf1TTL3ucxQPRgHmLXRLuZ5j28OXQGh9j12o6Ipi/dceWFJuoewYJX2I4V/zU+uSlv+fOe2O02wcvJXUwWdW8gylfoX2ns7V1wDZCBgqR+bmCx+hXOi8GqL+yc1hKlGs4QDlM8BjzAYJ2M8+NYtouX3EQXyed8/5mPrPqovzkbOfKc8PmMi86cjA0jXmCqNxC/j6KSjYf8Cevuu5Th9ks3vaV4/8gmawq30y7mlJr4vWk9Qit+ytyCmW65n/y/sI7fWO5cb0+GAaTkfpTZtrQUUdlUuOmwbPczthsBOa6P8aLyBJSI3EuD8RU637hxIFl2ZqQYqRdwhr23xUzQSJSWpxJo10DUY1l+VpBbZ12suIIcQ/uGxQK7eoB1GPwAc1FmW9eXMuBvhHbS3PiPdp7iJjT6pDHSbr4TeFnrcxjgr+JJoTZH3pIVwe8ZMJpBoprTgjaQFzycN5f5ZC1iTSZVQjptSTgIwfAR5ch+3cxsGkkC1DnnTKydaOPv5bymXu3F4tIWon+5+SIG56LKblN7CRykBMAnjvJ/GQNL9GADUxB2G90xPMECY0S1i50Pn7Sr4pWDfnZF5crNw9dtag0DYHnPnV9Cdmo+lAIEPCQQEMltKZEp5QQbxEtVqEP+DXZ3EKkaLxSjuxVX0dp2WQnKAT6iq8GTP/SgI8r4zyixxHskw2a3xRUUh1sBBDWM9spJHKStAB35Abo5SIJ5hxv9VO+jwETHTILpFefQ2/I5CUCCw2RD/JQ9nnD1yQN65EF7GS1OaxoAZhtWx9y2Z7SqCqULcZns73lEuHWBli9pGiTu+SB30vCg0gShhnA5pm8YLU1xKeH9Uc/9o5WFM07kuIVn2I+k4GZK+E5x60A9ZtyImkXQQ4aV1MIIo0N7uH4ZA7blRXbXsyZhWSYgdC4ebNWPAFA78QaZw5fb3yFxZiqo6EGwU2uc4sWBKrmL3A06prnL+IlsZFB85EZj79daLLqPWPg=';const _IH='78979e6086604bf31de6c84269f0f2cf32b6c28ad4ce2655773dd99c76508733';let _src;

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
