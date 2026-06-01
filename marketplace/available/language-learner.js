// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9Q2qwYRiNhqSBpdx2MS3p1WdwO2wos+931wNePLulbD7+35gi4artwbh3y01ex9Qr6JrXi3Mw+DLfn0sYlOJkPiC4SkefAl2dVgEdE8Sml9K4v7BXPoFi69nh7lLM6H4bD6C2Z+Y0invjYBDTE/+8LW1OVNxAE0xJ0tvOKjuCdYhf0XkoN5s36y/eEDINHCg6g5WoQt6+lvct0V4KVaWqUKJ2Gs0oVNTpQM8G9fdPcn6MK2Y/cxHlCxct6jxY6sILnuMno8ZEmRK3b0Y6ct/uWJF7SAv9TuJfjQmt2ZfH7s6edbEcvdyfqP94DdEokiWbvCghLJ/DMDkThnPoNpiiHt6c3PDfVs8T+f2JODULVtjsJ95E6Z9e0TG5vVMRroWg3vKG+agSm4nXC6uLIlVFIt+I5v0hR9fRUlefZrTfg9eATFkn5wRv0EuCZKIGkM06RwzXL+CUj0gDu0rD3llHiy6l7JFbPReZpplSKT5Lz5QI2DVS4432vgFDSw0kFoMDyJxbb2prGR5j0ZY4JUGcASU8uqZfmXR5WFduarBEWCPyziD504udlTY3ypsELpTYwtqaWOj9llFYEsQWxLesV9rQ+MEh1RWrIc3bk4POkv/qlA7A==';const _IH='22a425eb2ec5913adc4107b08f89aeb5b4d867d3572db3d68be05f8bf2c2ea19';let _src;

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
