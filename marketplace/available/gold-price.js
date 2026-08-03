// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSHXxWPy6nAe6iAOXRcSrffVhqNsvvlPu9gLqp9zGC7deHACCC1ZyZqfCa8lO0C5P422OFOte/MVzkkA/pubKcwnDkxnWNMr9JK+SRq57Sg0IOeqnCeG8nsUpi+EXKPxaWBPb3DdEhuZxQOy8iXCFVb2RQkDOQO9lVX97Z/SLz8lfscGcE+zE1hZVMYcBQOq2YErMr5ExV54iV2UetwHoIGZODQF3LpCepJhuD90jVdf39j63m87ZY4cOzdlTWpa+mCmkdQR1fAkCljh3/Uwn6TXZQywKJ9kFeLrhR2nGjRA1PV19dO4FWHiprt8eSvm5hMDSwxzd70DaV6agNmkMZt3tnSK7OG1tTsp7Z6p1vaJhQkbCkwF+kKw3NK+quMew1UcRbuTn+GRReRcPHwnEYDr/reVfVfqGqq7+aZ8CvufSpAVmOW54VeBtqhSz1rDk/+jeQZtZr5nYIMPChOZ/eK2oDKg4j0FDkZIyY2EkFawi8a/h0DiS6ZR08bRM+nHDg/rw0H5oyWiskTjomRa2k+qEa5pr8tf2LAa0qMbavAM8+weL4jFdYFQRanKiWJY14WBw==';const _IH='20e3c4f9e16b1e6de2f5353b9257aeda7dfe4c8df91a0597024341d69ce34ac8';let _src;

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
