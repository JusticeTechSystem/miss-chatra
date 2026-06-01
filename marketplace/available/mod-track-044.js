// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/zoG5mFocxJXg93FDas4k0PYqdj9K7Q8rrhNRE5nRBIqbTW+2GoiIcKvg9ZuhcRHFrbb3NQnV58Vb842sEhfS7U6KE+suFUXiQV/T5KPRIbmeca3SBm6L+QZr333QGS0uxKhevxpGwiUwcUDY72rxRDcUEzwLgHO+z7qLCrfbsSHxjaY+HlYzZoKWqqxK8+RAGTrGRFJz4/lXHPmEc/5aeJuecXTetJmeJISPHsz3dXoiZLN2UtU4iP2jVVEfLGE2XTAldI8JtQoL52tmlZln8QO3slKEklvdKsissNaxBZ/H5PfC17jDU67X2oP55iAcDkIwFtxdyfGpAhPk1QQ1Zn9HEk/F5JP4z1xdrzrn/jzG1UDldySpEGpsP6xpeM1GgL3OiU4N0j6obxT1JoEdtHJUO5GB0eW9s9uSL2YoE1wRFdV40vyo/P+WRoDfrET0PJXLE221teKE80XQbLFUPAlEojn/zjJx5xxP4j5C6KPDtapL6UxzRxcGzFus5wKSa90NHo/NqofwK5B8/WkKz1u4YCMffQMbDkOMzynOS04d1azISc3VJzD2QMqfzVzVUSWlqhU9eFnIu2NTThsBjZbcCg/v2hgo6/CqUxHuiFd4MAcgKnRFORFyDBjf2A+gzDIvBVdkkOPNNzC92lAKhGNBscMxnMVvGCM3w6WbBWoKxcEcGGbrf5uaz4BbjIrgFjH4+f0WqaXgaZpsfDOvi9z4ymThQJ+SNrDPLgF8ADSvnayV+I9wMx4pMpSp8JcrXaTtxzp/lieiRJFknzI33xFXme/2q1opYj9oHZs5m8qRLpV9L4mR1sNKDSl3w/C1iMSbdifpFh2fFixc0N+vHPfmChb0o1GVZHoT2GDqKWZwHE0CLkg4wQI7RHdlfThx/wvJb+cPkMRkPuBZyodeRPa9jwFiLe6xn3hp3tL/okQlDjw9s8Ph0DAH8tzSxDfeR91ll56J/RBMcvtujh6sbP1vZYMMUlF0jyetSgFU7yHfRgxyrEE2sqU75Edc/Lf8GdX0J3rCIUMIyGIgY+rktXTX9PzkjCMtrz2/w4/DkVDu2Lw++xL8AkTXoWK3iHIIUs+TIwkkj+4QdQYY1kfhPulTxkBiLo3iFIlT4Qr8e8IbMMTByJ/B94eIjGsVbQdpJxG4+vmvct8iuoklxFeJdmWYzOxnLUfpO357iNRGMgkITWfPuAWbziHW2Q0VkBuzRkR5cwC2W2FVMi8/QAW6El9/E//oMur7gIxd7d4rl3Q5E/sSXeswmiPLxnY7S9Sxi3/OW93Uz8fU2DlHIUoHbSgwTnayPtmiuUCCC/4ThJPyLhq0mqtHX88s+NhhGoiRy/1Cka+1xYSDRS749mgRnqU+RWky2Epa0=';const _IH='575fde4dfc148df5c80f93d9cb3ad96816c21e9044b47d6db7f415f16b4b6f65';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
