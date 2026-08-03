// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2m/1yPvP9aSAGa8jer6DAZWM5Lr7ObwylvXDn1KQgxP0ZkbFoiRoFMVoyxUjdmzSKKTJzhJXDzZNTi8s0rtqxjH6U/spFNEw7Ptdz/Lfw0DNV0fR/EtZhlb05Hj7tcrG9bpXARpiOoACEttNUtOzJpo+A/Myt5rmdmMUrRcfrGGY+HrAKEijjNqmnUmJ2AemFwWfObWYH9ijqaSpaTS2tVc82zDkS5caSDEFlAO6O7o3ntYdWgiL3fcBUqW8OYKPFztdiY0cSLBcfTLHnZo6Rcf7vnv/tzXmazeHL0OBCMpisyAy+uDsj+vCVMBbWFyQjTQ3hkCT2JjiqUWpOLO42jz6abXG/aiDltd4uys+WbsmH7aUkoHqp1S8HD6HaBoZ/j3n6WYL4m3WeiY5xbbs4iENEkhq4wSNb2q2Nx07KlB2j2nTiaZG+wS4E4knWB40BvNOwLPeyoRxdVWWrY7+fVqcc7XOjTxn2MJaK7Lc8B2gNpo9KH01AZXSRXOHhmGmfJsW2QY4w6S1pP9YlSsH0ShRz9Z0xJBz3QKe1LJH+pQNBywZZ+fnKHhehKNv+f2isQ64wyMbdFEDOkEw0bvMGsXNoqCQtxqKcMhnvagic+V8hkrFPR8Y2jeoEqfpyqSM35iUSINTvnOpeMBRkg7rrayzSyH78r3iKP16TqXobXDTPR51wT6Z0/OS0He7M28etoPQdX8s+PEA8/OzyxxQpRRhq1HEwuLMU6ibaIc9Db5yRpdUA0dWtLyp7AP0/DNCBEEKW6Q5uEkDXErEg8RauVsG6XPPZ5obZ77Zu29ajCUHtunsj/HIVy4vDEUMtu6alkeyNqdUZenn6Wcu9kKcMiYoctDPnBJH8/znXrdv9B00x5htySHDO0ex6u2Mn+hnygTWD4CwzLF2HcTGFg2dFFvAFzzsaSWCFu5ZDnjGtBWnYaLDiJLe9DdtIz/6gLA6PVlITY+ckBxNmC/fBVMq6H25V5sqR';const _IH='9d7f5c51fde4cb2bb9c9212f8be4dd15a7e0cc1513f371eca0255ff11c2650d7';let _src;

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
