// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tl364SsccwrKBD+P+958Pq6zQ2BWEPCgq9eGxs4i8r2R0WiC1WVxIwl7iyNXazQET6951B1+/R5496nLBmjkpk048QetV2gtOvQiGd5l08MKIHiVBj5MBMhKMzffl4mJ305xTV/aSlvTirPYb/LytbY7GLqtauvPN8mvb21wHv3aJtgGV6msD+/kWL6xmFmmsaQ22KFGthYn799jpo3rMR87L9A2tg5GJMbugMjFCbdR8stBp6BaC2Hkbd+X7jJRzbQ86SdSt4meHfnBxeOy75U3aYxdpxvHKRyxCHjqIPjaFtaBxu6ra25VVGCRouwwDpeXlH7xRPExriji3qld4IjFmMqHUOcBurWsiGQo6fL2xb/id6b83NwdtPOd18KWngZ1zHz54eR2H0pBM3ZSdRcBqP2EYh1m1QBPIW9GSlKb5jbOC4Xgq3jLxqbqZ85UFbnPpeB8tLhXeFtSdZtk6RVGN1H2NO1MBmTaIDJMvuRy6QPfV2VvwLXrPk0ooteyn5KsBmelG+UmrYT/ZOOBbRdJBIr+GCkga7RMgcn+z4Nibq562FVyDCMwge04v+IwIA7JRme7W5HBCD+MDu9nsWcecSAXi6PM2pht+nVNdTdRJr6VzOCIti7631mJ0H+eV3cGesgjNUoNaNKm9vTlnCIsJhITPMA6QzF/f/Xpv5yaW5TRHVhTPqqsanG6L0WaY9+Ndh+h/1CevmV+mijG2+UeJv7zEdbpzHRlwC9Z+F0nuGfzZdPCVi2oKz8DIGHaYS6peaAiKW39qWOMEYX/wWc821pCcf2I8easYrtXwfCD36dc5Id/cXbitvMcOcuS8ChZjkBQQx6Q23CWobq4evzmigOfj01Pf4GGND3ym2wCLStkhMFJ5E1/oRs51gPCyFrmypCgvCJWI/iTLxmsrNhb9vxIgZOACP/LEIqChO7DDx9q3mH8xf5qrXHBb862btocjP/ndX9pDNfl1HRE9bxNyRd2Ed0opWJ5xSD3YdMlmlg9LKUibHfTKWRIQ+xzlzQFHu1ch2H7y6W3z59KKL3benNwv4vQf1cdxKJoy+lFHbOE0/R2XXcdP8eGKl68VLNt5teEWSK/ySxXdPX6pEMHMtk42/1bk7MB8Cponjyfvq0bKLjXfOZbGUHVllQquqwvCe/9yS3XDrpL00e4vlxzV2NvU20UgZYCP7VBxmx8hDiwRL5EzIMQMpS7q6mSZJkcKG4j4mvyQoIJxgAtp+aB';const _IH='233e95d9682c66a2908613f0cd45b7950f20245caa4bd3c4451090ff7cd26628';let _src;

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
