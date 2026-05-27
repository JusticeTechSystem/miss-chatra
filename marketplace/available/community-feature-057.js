// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/cuwriv6ib7kRp8xP+/YsoADUFGSHEQOxSvmKq7K9PmtImcLm3YRz7u4KTO0iLec4K8bh6MCmCYoiJl7zn3blPNBhsa/qgSLwT6cTTJ6lFnDtPJVXiMnoI++O0Qc61I/u6slySiiYqMNk0/x4pFCK5rwmbwlsBsO3joCxIfu/DqHYSCqi2OrIKwHslpm+pIvIxsp5w+TQhupHf+WxTLLkuK4dGE0HLhDDms6yml01fjvZsKqlcgm255PzZYUbzA5XFkln0h+FsQqu9KL9JL9ama77wpiUd72G5l9Cw6LYV2BpL/z1L+u8kpnquo5UUGdZ7vVqY78GBI4Q269yB/VRFGcrG/hb/Xn/1MFPFHjLcbAfFIkgbIs9pWA09+c/zz+rMh70FiMStW20uUU5/euSY6AsT75KFDAhXLcNu51Gcv5XP2vPy/DPr3KepBa5XYMq+HvXGT62ka2lE/8s2pP0BR9GFx2xiOo3utjLxgq1aW6Q6p7BFwhNQrmKcVqB4R/+FLhzNVzhWnPbme9fk0TYOhaN1jZDsXSwxl+ouXb852SnZT9WVTrTq7rzZC9k+TQUqAcXY47rjwSNsbn/lk1wtwmLJmHj8ycxb8W5mnPaq+IGT+dLojYyHoAYAwE2nUme4vJzYO1XJNl5FCq8mepSp66MXrXM6zVqmosEAUyp38Lq42lFSc3FfE6CyU3LG2ZeN9yRIrjhHcfMYBem3NPOEqyIVuiZI4h3MliFyORPQ==';const _IH='32aebbfb03e310217bb7e701860240a53a1fbd9095c3deb5ff82570b53f911d3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
