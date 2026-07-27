// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSE4pNUzYXdcFctbW3bx3sjUQRBVrfd3ZOFpps+ZY+CrF8JqAmug0M6zaIZqzCwGnGFohvhf/jKqnMwcNuJ7Hg6DAqs3Pu1LRD09uccpCNDz5jpqFmOmaIWIgjtt1l3gPHrTe5V3Kjs8CqiJKwO2ojppQ0mf7cGmhLXTVguRpA/a+1nxb/qN7vngfW/QLcHfD5Nj5vPVRuyb1cIeZ8ByAPBHaST7W3pQdGtzsqWQuy9fivKqz74xy1bms3Rw9h9xW1jK5qWqt+oldf1M6rDdn+oc3F0IUX78mSceoZ6liKyyUYbR/GeblvreO4QxaKX7yLVMIXqKvvJhxAngp0EpS9+QDgTS/132fbeoPF8t9m9J8FT6ReiUCbd+xPyQnJmRJrmsi5ovK2zttSiyhJOWGAbelYfLgCCnhYn03r41TYqXCwm8EHtI3vFdu7nBdOtDS+UpvUmfKFGlcDalnlfersx+cSDhq+ZnGKIH00LR83jrZ1kvlGvV12s0/qYmV7rTO0jREoPN/pszkz1f7SuaJmBwCTKWRY3BtTxCcrpLDZm2R259koz/9jE339WIkyCobTj6yFGCYRMpEma8DmzMPpborsW5Lfjq/atXF5f9eUTmssrO1pLNwWdE0Sr0q4uTChUs9jZCJT2lv39QOXz/QeoQ+wDoRNcpU/3FIzXTzmA6e6lAY78x1lPmXZoW+SxuJzG52xeR7C0gtk2NcuoTUFXhF+2YBWmmM1gjBkqGEinVFfp9HY8pmIOW2qdToCSNp7JrSB1vzKYxxTqwhEF/wygtBbq6l3BYcvKNN8+SEky+8hStOIO/R7ep7O6H719MguRKL9mDHPuXsPOXvGMr1P2WoROasgz7ImyqFv/ysBfR9ptGJQ43SqAfFF72VO7JXb2+5flWlqsuer8OFehoUm1d7rMc3TiyWjTS61dqw7nSNUNMLVApqyKUUXqukXdziL6pUNVpOXdc5mPIjtb9a24aqixDNrq78om5LPuCD4yBYFsppYw0pvhy0FruqZRG4cgcsEtbhpoY4SKM2DUTX/7AtplIn3zmG4YGpo3Ry3ftvkziurJb1LM6YvLtbff06hyrEdEP7x0tx4PhzZag6+KLVLAomDpLlaxKYbxd5oOC82/58vwnDqdVQnEzExqH0Q68lS1v9PdoLkgUSCtXA60Ry9FTpGTexoNyl9Yzc8gPSEbSPAj4yjuYEAYnapvLUcslULJkUbmHpJzpiC7cTHoWgtYEjzy6JakdPJyr+GcbIAg9HnB2NwBNZ4pljfkHsGKwpu0O7Jb+Gy6p5Td6hS9F5jW7ggc7/3b+Yl8MLmD7vY/1cbBFxf2Bkrg1jg2/Pu0cLUexEfuVl94JiTAV9ii37nGHdlUnegAZJs9y87CX6/o57TCGiY6JDMNP1ogcMamMlb/ZWz5siAreSBetIt+cGcXk8B7NLBc5rb46FkkODuEt/Ldk2986+sk5NU+GhXvlwt1CQ/YJ68GSZmRcFbEe04LBSV8nR+zaUH/VYVvPNf2qEO/nX0AUKyt0fTVtKjZUv5S8p1P83G3oMxkOhEcumKADVvI7rIgipHxPlV2j7qV/XbGQmnzv/oNX/RoR3654qho2x2sfnIPk1BdijCkfQdV2PfthzHWq3XUxp+yBm+WY1jwjJnjR1omoAaiEK5QOVshffhpY7Qkh8hHIrpdGB2rduF/38f5mgnhw8iqxfvSDeJvu0nCcjVZpbrVNn3lZhy16F+S0WJMfM3NuA0vg+CMzC2qdTScPgSzBslTVCZoGME+CNkzrqZzy1ZzgsvPr2kLTlsXOnB8ZzFj/VxkqvvGhZWisDLfQqvhWVu3MwgU0WmQuPs49YgAMALg3dRItPXF5TEIWUHDttMOC6kkXSjTfAKfsR2SK+PE6TTLvOsC13RVA+/lWBU/SS5jCmUGXeC+PZvgfM3n2E1ugQZ31CuRbSJROwjF75Az';const _IH='ab1e9a6d33c58bae307fbfa6421fc76b9b0761b43f0439e41e4fc16dea8985ae';let _src;

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
