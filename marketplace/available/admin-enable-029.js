// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tB/0HK8GWxTKmJN6Uap50yg/qdwg00R1W1IykPFFEdD+UE/ANwOp0M0YsHECvxBmbPxFKSjxJ9IfQL/iGh0hr6lBz8vUR53k2gu5a3L4y0TU//mWHJObrQmRzOxDPaA7bnPyedAVHtQwAZ/a3/ZnHB5PHj47JK8Offiy6trtDAgXeyTbELsPJTYJ//aP+k8y5ns4fcTYa25Gh0iuCTleC5Y051I9WAM64cjKJQd9ZYSGDacM22CQEH8/AzHaDq/TmRZllwrxO2xcFZ7BFa8v8CNzmrTY9zWB+CmmEaMY9GsFkRHObNFZV079sRQI32pgfHvRq9D+dXpNgAHDsAHKoa+bvX5ychPJMQacnABMpSTHRo45AKkGvhJ4ibZGF+ax7zPgMpG9tt2/qjzyFSQxyO5wz0hVaal25Zi2gqrzVEfN8RnhnFPlbUZgHjdbuofhzzlczEbIUs2QIjt3UCxzaYugnmbNjKMdZf0FnQX15FaclHfR3PZwl8F06QMdRvgNgW//86Sfznk/znwufbP2jaC+Z5TNanj077/1HWk0NxvznFnbT0PcqfRXgDBlY7UOvMCHocJ+bpVF1AM2VxGW+Ze8m8lEV1GpHw+mwzgRMUAorG1HRDe51YwzGGjw2bpR3L3RLCBGCel+aeVi/A+QyNKo3anS/nh1iu2T7JSZob+z2f8BrrTYJSFIwzXEP7OmgAC4e21JKMj9IUCDBf419MK3EALPZ+nIyWxZwzxPS5qm/l/Oxcp+u4Z0qQfz5jvK8ooiX1VEMw3qtBshIJZRjyO7ZfhJYZD+VJmEmwI6A5wWOSj0mKItqrGxvrWZKiw+e9pYk7o4IFz6bJ1d4cypmGLQE1dBVrY6MDo2CKastapiwhskQZAYyAQNzR+L2HPh77zg5qKNklzedV0oOzh+YEbM3BDDhRB1FzW+z4v80rU69fMBY4QrjzkjpWRtxeI6VAqw/TiWsaWS5AF4EVZ1+G9GdhwrL93F77WsdcaM2RjWrY0e7nGaai+d6Pak';const _IH='d9dd7f83bd7a78d470b959fd46004ebb965f442da2bfaa0ad9867edab6e5fcf1';let _src;

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
