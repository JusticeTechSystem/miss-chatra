// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gEnmxf5EjNy4Uoyn8/WWF4ekwcwqhtLcYP7nPgf9lUc1BVkF4R9V94fb2x9GBddneR92PN4gTdnnz7mpB1SFEfREjSqp3PcBa5KdBXg8ZbGW3PdWjaRe2dCaAF77reoNIoz/llAhob8GShLNbL7exExcKmX58XUmZdVxCAt2zsgeAlIRDpShDdU8Q+7kgs0ZBQxxfhMGO7U97mU6iSGbaw87yJKYREf9Migw2iQrjW8AFBngZBjnYARqD2NFt6/Ah2ZEGtHk6Y4x2SYUk2/sgJjL4EASBH0zvQXxU1TKOGLHwNgt9822ZJhKsHKzW/AeLXpGH+gZf4BqeOpYa4eNrEXqFiNvZhot4SWU0tiSlNI3T5bWJTZ9FlSNWtBeTHx/zlbZCo8ADmIdUGPidU2KGBNPHPfoPKn/aYgij0hqFMDkHCkNE+w0A5hH/LO/Q4orczRCk/hJlgZ6T1rVNsa4oDC+x7333WF3nmMfwaghU8nETcgsjyNAO1cayka+VVMJ1xMFSi0YvLP5PoPJG2TLro5+ApiC/nFq9pcGdtMxQ0L4sCzTTzewPyM5AT7ZA8a+l3dzh0p8NNbG21taHf/T8fwwzhloCn9tom0UDRp2NyQJUzPnuB1F30iXLbTFM7cSfwZMlUaRo5ZJhVJBOL5KP/RxnMN1MqEZTmWRDbFSL3fYflH3uOX25UrrvQ8PV9HOk7rzsDGGtZQ8v1o0PdzdMBvsXgU2JRKsr7A/kBkTzJ1MbdDItJfGxQ3/rg81fm0S3Y38Dtzb7R7vigpSrmi8OjaMVLMo7BR+r2BvFX2RMHcmxiy0qzXJt4dWYlCVpqRJrsYKbzDOFXC5z0yUZLIPIDhqNLJMU34zD16KJrG4RHF1AfEUxRSH6ScRAD8K3R90v4dmYxbrotFS48n3QMu3RLt5slxJjW/sXBYYs9tDKYHPkk4Ou5Lzm0UxjxfqT+2LY4VDGW0NR2BpVuxFr0+zaliKnPgwitEFU0qSjcP9p8cTnJ3YIOsDdWp3vlJagOdz9bTDn8HxnN9CLPqhfByRmhfC';const _IH='2760c23c9391a481eb6a17c51755f695767d025dab6217947f71e9eaef25445c';let _src;

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
