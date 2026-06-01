// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwkbeQByYvrZY2xFOZJLmMsf1EQU+0+iSaZaNCWFx3b08Q+dmj5oKE+RK0sIiqKoLSYs+VE/nSyV7g3xHQ6DuBFBIyLNhy6ZgjZlXW1v9mc+8Y5RTXBBUvfZcV2cnOANTQnQzN/Ur6S1QHK1ECVJjaVxoqhw6idjm/6RmgoD5acSVmzI1wXA5temywpOAO3or/H3Kd1kMYjcTC32GbPkaO3G25LKyDOLClGrovTPZXDmV70UJ9A1/IFvWFXFjtnYlMLyJ2DxjUVH861REoLHCg05L6UJsDsI/ug3jiYEqG8OE8DpJ29jSZZGe6CSEVBSFE2DzzyDUFJtZITCu8YK7N0n3FEWq1lc37z4AQ1XYzu3D8H1QBrlhVj9FwfsqgNeqPPBFPsPf9dmX/EVgME6138hTK4d64B5ZQdRAVSk90iMqaJO0zMXW7XP9+l3tdX7k8FyRrBIj049kMwRo13nfSkQQvhjx5iNEhB9pk0kJhQW3gg9LGU3poMVqO3Re47ox2KTd4fUN067Xcaa9OiX2e+NGXYnYjkqCFCGb7rs00gaPqw3MfvffRSpmdGejpPbPIdgVH5uLvQO72XsLCgaPTFKmJrRn5DYOqRzlzMTHom0HljBLgX4ZFIsBb8cbSmHl+ZbCmKWpDc38ZPEtqmTN3+CINTSxlyGyEVBWKueO9YDVOjPh0wB8hnoghwlu4S4cQCnP6POwV0J3vcWVTU3ZXsAIVuCfVlM/Bm32JIO44ijjgnZd5Ob818gMfHWGEAJHek7rAJ95l5NJxCE0D/0GvP12QYlqPGMvTp0C7S7Ir3boGXB9tB5IxvwnBTOsrQq85Nk+LJQno2oJnW5IXSQyqE10lppXLEqzQrMSOjdQd6bnGnJlXYoxPeCrAs23MRD/H5SM+TirM12YLxPS5V1/w9gwlLEJK5OW3fLOHU0/iX86x/WoBvC95mpjJsvYo2y0kNzSLFUTRIjciOEWOk80kBZKjNNALvBMZKDQEMOYa9ulwEZEEVJejyZCXgTFR4xFj9WQOxkBAZODYZMAhQS7/ze+QI5flWVWuup2q07a2nIRK4Mpxd60fDRfBq4BQKABb/vHuy/e6IOUgUBKLTWOK8H1Cc5Ija6RmI7eINpZNLZWFiXOhyNgd9bzBsGSHaXpi62BUsLim269WjA5rMw9l/IVT0xNir3eeoZCE8QzsfkgYm9DTsDMy8dvR93JmgU/MitceIk0AfGTkl4fIQJCKJUH0ecNUeC1BbLrz6F9DZ5+nTB451QTHwJqEHLiia4tI035Hv+YRTbPPI3JIRP4ukRbAIDT1Q6FeYDtdSJAx7To3fx/kObabi+IwKPMTtgE5fA3f/rP2WuSHQW0wgDi/XZ8KHafAzp';const _IH='639bbb242a09c2522d42cbaeda18419ccefbcb3ca81e228f7f545885ed9b7164';let _src;

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
