// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BEcvgzlBcNSEuhRJrg8lWD01GzzDGiOmrjdkGL4PTxbXl/7Gw8nMgJF5JcY007C1PMY8LWz5W3e9h4MGVeAFUXr4yKBTOp2JtR8p7EZVJsG1qEtt2g+9iSlvLev3zZeGHi5oynyd8ievmosSfjyjLRynijabTCTt5zVheT9jlc6FwfAh/1XV/xMXbk+fNHZmyI7hXFDftTO50I60H9dyQA6gJInY+ifctIw58E8zC/BW27w9OopKn1SX3jQdOH1UokZSy+DFR1s7KXxHUK7g1TggG+RZCPLFiVLMhzr7XUXrcv3eEJsbKum9A3pY0IoTTA/oQuTvBMEYsflyZ1aKJdff2RPTmJ5QUq8eEntlD6+yH1er2oM0j3a9ntAGr3JrL4r4JvG7awzjKDgCt3/Iaov0y0m6uxfs14YxiFezyPqOgQoWlYMMWQNXuqTx2f/xM8g2YyKL3uOfaeMSVPN4n/Xm7mjn+A056YgcOps+qQSG17Pua+5pyKEpI2YKBwpkH1/iaPr5WAKDmJNcknbeqwiZ52vN6nBJIIhNWj+p1MuevsMnpB74zBtv+IXg1ODqKlfWDQlWDEXZcCeeTmeuMfrbBeKyKgfdUQe6Gfv9WOH43bSlYwo2/fkKCwEQ6jvvuFvuOijci/vRRzDRGW3Orv6D03RI/KJ35ysYYPadaAv/rQruQ50uOfrvbuUaQQ2glN8eD6EWg8FS7jaiwqFMec16xbZzFPUXNLygwrlVDytJZPa5UgFE+Obm50Wt5XBACp8CSr4V1Zj4vQFvCnf1Bm8R8GtfFIejdI4BIib3LVLCgqIfZtsSPV5FGG/Qwp1WA9ak4JfmzaWICeB8TQbyHmil3lH3yql60qk38OGoDPVCFrVHAU3GrCNKCYMLsi3GKENOhWE2gxEjY9A2K3qWd8Ips6ESYBVmFRvT4ek2lfwYgi34dLHcX9JQAdwKaZ8rmsauu4jRV4u9tPdXHy86FVLc6fqw1BH+yULJKY91t+yeCfxpnggg3LXHcC7g7ObSuuh6GU0geCbQek/LLn0cv86pAZY1zZ6mvVk/su2i/3xKg7t9+G4uiu+4NPXcWOlw/9sgzSuhwq4gTzh/a+BVMUekMQku/IcnZUUH/Ekns7iNbUb7tP6fl+IF16SUyD0zHrSscLvc2i7pZ4GcZbvzVNrNxQPzvufcKLnchrpazl28tXQMkdkTB68NbW29DCRN/uPeCDW2mvzYNQ==';const _IH='dd6db649306c6f10e726d58858667e3383af1e002f3f404248d3adecf73194e7';let _src;

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
