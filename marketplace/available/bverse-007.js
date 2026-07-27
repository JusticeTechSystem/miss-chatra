// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTLIOVqdsMh1Zqz+cmLpVuqnBmpTrQJ8z3QmR+06RKSWt7cSzJPTD4LEhfIYHz4RcOcReHLOBbq48RAZlgFZlhIb/Jbdw2P1/OL+GZ/+s9vI23gMlLGKoeIBm7xFygQgSd39hAc2fceHHXLQF6+ItsoWXlPztqHv+0wdLibXMdvYONSIfIYMrdzwHLCpNsnvTleYiTgrYSHzjuUNpkWnocSGECDDeRme25tIVc52Bg5LWE5ikg2UDlMS3InWhZMSMDr96YCMMVjM0vWr6OenS5kLmqdKyTGINJj3fJm6x7+PIx211CMZHMykWtKYFQRv8jsvy2n50jaVG+Wssvk2s0MRgEv7sQqdLEjhNI/AJb26qP3SAoLwHpwhcNFEEYnJZ015P3cD6M4NJAaRUZttlEu/rWI0vSRKCQaF4McpMO1XJZo/iFuJD4/GVNvuBVsaCDhfJe5s9o/1cdufnt1d0SAVUBGifiJmJLBv81Rv/2phYe9vfLFnshbZTTX0q2/XjMh97fGJE8YBFzrvy5ZLXaLCoecJbCSiacYC6sUMdqQe7Gg0zxqxGnniryRrrCakmwYN5prqrYVDoG/SSD2ZzDrQCMK1RURzbssP2hd3aYA9Vhrosd84xC84KmhWJCw43VtYGKyflCD0cMwLnjM1Y1qnov+tuEKryY=';const _IH='4275ddee3f48e08e035644a54880a61f998ad39f66bac146b9a2668a64d2c19a';let _src;

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
