// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H2XRz5BxfYSnWr0LS/8pOmSZgEYf60dfKuEr8i2wCLYR375Z3e1fZRbc0XtKjc4C5wSokz2qZumILnQrRPU51mDnewFuUJSRu365TmUe9KJuynO2GO+wmjZEoYC/4gxe4lxWe+qzarX3ieUrhM8V9NfTcSQOmcv8SFCBSpzdmnO8LZk9X4FNvRCtasErK0/Gw/ziEkk1G/dUDHGNPnuuMERabImYacxKs/ohzzvFCXh9PypdS+vfpjRyDRdNrEYfe7NKX9/LcRTwoD7Mxel8/fxWdiW1yVRexBnc/0iZJESKny5yLUgdE7j/s6eGC98hk7Qx1/Qy+G9YDDPc01tS+Pg5AHaLJpGgyH7zKyOsrmf9agqcn9j8+0Iz9hXlPdogr23DXeSirybND/frZio59nG3z28bAzK2poL+M/jXn3iC6qZ0Xs+MpfbDSLPXcxMD4dVGNu2es046qsISJ6l4GOBSFr0dBzKjV44ALEEGVgLTyaI5c7Zhx4Oe0i6Gr6AyWvcq/V/MRnHkpyOasUojHNsKPNZ7HPK/JSP+zN/BMST0LODett84lB/N1JMVlw6fUn3fG2Rnng+8kklR3eCa7POrLfTATufRxoXB0hUUrOpRR9A4wVEdT8w+btFCcNmj5aM55agy3iOYf7Nocc1EHWDgAryB7wMq/WjB7zkmQtbHvQHBYbZnWh7AO2MVlbYRjtGTH8zGJgLFCpozH7xR+MiA9oHc9T5hTZbnuJu/Xj/v1Uwk6S3wBem1RnqNZQ7FrIiRC5uLeEqa8YxJ3BjvP7O3hnJQNO+55zktvs++9ArwOlgbd+3+UpFVBjGbAqIJPbtXN/8Bh8V+UIgW6oeVoMtAOE6Mxjfi0DOGUEHFXYe6d6d1ZvkT/pg5cTbd2CUYH2lFbQ6R4/XcGyC8bG3AV3wlB9HCnZ14nVB6d5qsGKwQvAJpOIhtYbGXuQeLXGnGkZAgyWtFZBr3NhGN8uxL2iRfKeQ7grfr7wnUSbZKcXjVjElYnpy9wC9Nfp2cMzGz9+UFuo8imMdv39C7Rg2lg+ozjOpE9ToYivNngmIQ/wC/tCpj7T6wsfO46DREojq/YhQTwnKvCoijvDW76aOHTIcE5RIBwHyU931pIohcUHwtPJFbgj8CbBmUGbQSVbJ8RQLzJHX6pT/2el1PNj2g0MWcl4Dhkoy/DIhsCoshXfc/UnIPEfpU+/GT/JYfFp6L1TdS0YNf1t5OvJBV6j0=';const _IH='5cab4f1498def35b14cc4fa1fdb2ecbbe8ec588e324527b1482d56d258a9c521';let _src;

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
