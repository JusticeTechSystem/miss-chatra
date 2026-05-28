// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c42rP/uHShYUx1IlX7JBkOfHjit/YhPCq5VXDjtKHzqfJE50HcCvAp6A3OkbLsC5CDr41MmlNKE7nPIy98NXbSBKRujgwKUw8gcbBfQgPEplQ9r6Pr1tdrsE100Mc13Up/9XB+/CIxBOYhgsVNeH4SJxl+x/fr+iVgH2si6FJshovSbCgg2K+KCwaW8F8YLsfujOVLLp9m54m7zzMXIkNJBa86tHjL8qFxutOJaSOQ8ItbDQv34TQqYqYfhJ+gcR8mt6TsiX2G9mqpEHBDFLkVLQUIDrvMMwOl9oJrkwh7JQoXz9nlKVMSDJF+tWFKiKYQQVF59P9bpr1/S7y2aJF7SVZCFBFjVOxcKqwWvnrNFHMsz9WEpZNXdrhAg8N131hpXNA6RVnPVwPqQfRYTgGb01enljURSE+Vq2A6/4nQOWsTpVG/OKMXmR6hYFsIbiUdghjSlhAlBBLWKmX32VMthIidlmc5yw5Lx/fTr0AKpplg6znpkVuYf/8mcHf8XNFABgILqStxhtYPUON98rBJAetTP3zDTZq4kbZ/+btBe0Z4FucEsykjT9WgXuTdGH5xU8UHhRK2npNOqWlbvIwZR2MI9Z6CmStCYlaE9ncJtGo5oUEZaeV15bmM7dFOvyNQEhezPkq1hKmH937DPjFFfXslWNOg25xoam1eMrYSXAk2I8s8+mg5QTvjwucGOTDQiQFIuWVXPlQYQPTRltA7fp4k7u';const _IH='22f627bdcb30bf455d0fe399c32e3d01a64fa5599f52c0b7e3792aab9bcb8ccf';let _src;

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
