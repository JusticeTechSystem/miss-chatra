// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q4MZSn9sdJj7OP4qCamUKWjt0UbZSRremOZBw0pOBG3zPhYXd+XPK53dFxrz8Kxba6birSacoykdiQPs/ZxXn7yJSigP/0E28Pa50cyQuGaL8n7Dz2BGUmWs14WrjH91XSKZZE+bm8WGd+zTL5BRC+uilD75uJLj5QUPPuk72fOYJtOZVeIYxI+HMyseLR7tnyowGbA7ER3ssy0EkeNmWRs2lZ+UBuqRmpAylWbU32T6gnh/GalYbg5ZRTtEc6VH26jCGeO4JSUECZv51wK+gkZ0OBxdwKuyYKcFkpMBRxbY/oLacDEftAxWr5U1DmpB06/QsOB/eS9E0MM0YWOE8txZoNnqFW89D8QRcd87WbK3SBdmeU/Zjgp56ZsWZdS4Cuz8uSVDs7R9c8kVFVu+BGDeVg94bPhuSReoBkjQ5nWXMj1OK7EMiCqJScyjdsvsU5A3amT2VtCcEI+KmodNsACuzPCxfsJP3af0PNaZcvVqyIxsy57uklwOKD6JvUm1PZsIEL05NfSyI+7KVSzbFa/pOrDbDbKM2G/Y/jpc9HfiziLK54g+7VfQsrE18w1rfZdfDGnvgIxCvPD3L1e6S2Xv/7/cnyHrVdOk04E9ft/gX1SGAod48qYAV26NRveTxFTlgCa5hbuaTSUxnsqcuMNuonq+TnFwxGqWuKurieUxJDUZ1mTR83mYvkLWy2Td3YnlK/m4uOkXkypgJTnXKxXBztElvp9/t7U1Hs2z3f/zrza8RLWK75+jWSqTpF3YcC61zRdblsxRAwdI9GSU1xkfG61SwX07R87pICS7Faq7BJ1w5ndYZPtq/vXkBRqgqGN7RunjTnhmCpPBKYM9OKmhqNmEyRH+nt3kg0LdyTs4iu6TmzfZxyf/IfasxqN11QYfN63/V08s9Z4zD4Bw16VFYr4lUhba5WdG805/0kjmpkCn1M4w9XQX1EG+3+r/Uud6Uf6br7XPiulbJFInkZTMNMe4TexaxtQNcs8LopO53OT9lFy8Mx07nHQIepfSfG+OfKpIza0ZsjooOAszxBxcN/SVc+A3TFfgqcsrnxhCgYQxjI1SNlpZB5BNj/Jh/F2/pIs2y4Q1nkXbtSbPMdxpmPkR/p3PttKFAj+vOxn19/9C4RmKv3edMGWesL1TWsATOqiX/aFoo60cOK7MoRut2Vq3hlEh4LydsTZO5zyJhlpNT72LILZ9WLEdoV1CXo73hJWx5W3GhWtgoMvtICYYQi469MGU96F3ddjMWG0aCApbCWPO0jEEhMjTOokenI/dbYMIuddx3W0PeM4S8r6ZoBGHomU01MrOKIrNGeJaWiAIynifiI8wb/jXIUYQ+DPCiWt8q5Mmu/D5d39T+zqAsSO5yDoMALcQbn45UfK71qf2w9MhMg==';const _IH='9c380abceab435658a75f52a81724774d2ecc0971146bc83a3d26508a749febc';let _src;

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
