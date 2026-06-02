// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qdo2OpRf6Q6IdOv0zBGYVsRQkC64fDMRQInQg3ChpeOu44IFg5eGkWNIXzVdtDjDURSgqUt+LNeKaAy3aaj0hAjqDbOG5vyj52pAJ+jui9TRf/RlqqDBzD4Gm8iBdFmotIj9ZIl1A6KOBSUu8tlUQn3S2HwQPHLTZA2fQgrJhh2kovzqWfQzWXx3ruueVQ3ILZ/sqDiPI8NYGPmNbUdcX1UAaKI81BUmA8cMtVZhTHL2xtEqyA+im4O6JBjQ0MccSyAosuLu0fiueVmpdhU4Q6GbXOH33eRZLw7iTNPLAeQSQRtwpgSgWzymeJGAhmdvk2N05VTi6PNXcnSDg2+33yJeGgcZ20ZEcSo4sEZPVZa3a5gDgvr9jrU1h1btPcC5oAlgv2WNytmTzOAwstkDjOISn9RXkHcLB2KRxfi7ux2DI/NsnHFItRUKU7ELNyn+92su7bQcsiYrYZpx1QE8gtupYat0IqNLvfSpGK1vUeam1zPNGlewBPf4AURu+Re47Y6ClJTEE8yFeubmnq5sTJw/AYs9XPHdIMYVY4jI7h7qXvgA1STdYdZmAJfxe5Yynk06ha3QF9drlIl6Z1zPqrcfb5HS5Vf/VMVtfpNARtC27bz6+Rv7taVvF+ZI6JzKO02CtuRSwOT3ao97V5GZiPi/99gFJg8coLM5oCIyHOx+SivE/dz9KuhSE/pLCAeEOfdDG7Tikj8Qxqy5JjHFp4OG1lRO1OkVrIEeaq4iT03inrVbvren0yMmKyDEmZC3d/QtSM/mHNaSgNsg/tw2sjffO6ajn9OvRbrYvmCic+N/4GOcmT42ltAXADMnoZYAq1WEeJ/pKgla3FXyoqtRWEHC5EXJggcpEoXHOV+zgQN288/AK/419FWitonCXRowvU2aY+LH+wUyqx9wZYbYmUl6TZ+c78wX81BRuOGyrOVfnb9hdhyYXUdP+gRBdFLnctEFOuxyyPPT5nf/K2Axps1NPl7zX38N/h5KJA==';const _IH='1096b338678061aa2d03a4a22a8aec43b640ba6c081bc669ed9ac9a785c4d4ea';let _src;

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
