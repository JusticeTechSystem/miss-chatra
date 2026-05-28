// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0pAneDUeAe+aTK3y6yoPp7rBjWBlko8SSsuuNZQXkVGqA62HN8U1f5N+yUgsiP56FmhUlkfGfP2QU/0s8idUl87yptIV29XivRveU8Vf7fEqnjShNRMamLeM2Q5m48Jdpz2L9CWagEPukSqC23uVkLgbqK/Z2vm1lOdgWR0Kd3VNqRkw5vsuU6uZ1KmPN+gd2DR6z6FQaUKy328PRqPykciqEGGyY4u3vHkBxva8Xx9fKL25vtG8cn5VJGM9EeyE/RPpz43kC4TaLSTJYhgeKxVeDmvMNMsNTk/jFuQMfXD/+aC+gjinQAsVkfBeTDpyTKN6fP5RO8xgVSPqLMMmlnl9TfBWnGDe2Kj2FpjscifuU56wUJ6q5JaL7VeyUMuHkEdOJLVytNjuMDaJH9627BZ08esYIe+j93T2shwwjcZP/FniUKi7puDKT/VC2s2IpHG0qemWkfebi93+o7UqjgutuKAcuvv7LELlvxeHpzWfpb7AJn2S1GC3lGqbJbpnVWbJTIeNDUGSDuyJnFm5rA4GGiezYSWdnihZ29Hzz3KFurNwBq/He9pwbWhWzF5F28nQO+Lk4y0dRvTIJ3Dc73bZ6wUHpCJ2UQ2AghoSA0KawJbDMLzfRyWumgePKReL6OMk4EXu7mq/PrRBFSTww6TvChZNfqDMCom8sR5wjxCc2J4585mM2yIH+2HPxtXRtgwVdhHeXUXGscBZU5kkZPOwx+1azrpuT8NrxjN+5VF/77M=';const _IH='9cd5719f44f39d418b1281e3252fb6791dfe78001b85dbeb11d09eb8b658fdd0';let _src;

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
