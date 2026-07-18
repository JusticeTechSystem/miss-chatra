// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQPo8eHSTJlTw01i+q+QtMyBdaYM26O17yYN8drkmgAH8fMTVEJaV1lbZaW9J9UYlaKLRLN5yq85RHB6Xi4RKyxtPpo53L72DpgLxXnvB0GExEAD7lyvcWCM3bkHxTZRBKyQHqueosqzlM2epp3QT6s7kaBXfmvpKfPryikwL8OLHkGjvf5QTpqU92gcIDyc5CVRUJGjnvnrFbM4mOrbCMoLWrS+AXFNNUfAw+KJg3pfTEohlP5bOKaAHd+ku/dj+H5HODai7v9HNS6gB5P8B+H6ohTVjh0Mh3qCvUGI+mKyMGPOyYVG7JN/OaYtUnReobYZROdqK+CmLY32PTGfsgs7K9SU0gbfXthTHcsN38tVvB54LbfhSCakP7RC8IaP8M7vnhK5Xkm6C2gPCxXDRc5AUkAZKhTqokQgVYreDvkltc1HJwuQQKgPAUHPmVG2rKy+58qJ0VrEdEfAMopWqkgeZxJsudrOcfJ5hzWJFGCmmYwwUBCD2evwyXIVfjeNZ63e/la4g7sTl9CBxhLsmAX/ZKE3/xzN+Z2XFkOcC5Af5so69GQaCnvRZne5yUAw5IrYOGkObITis4QP2FP/Kgr3YqUeQ6N/NuWMAG1CtlbK++I6AQ92sFrYoVvZtYUq9CA+Hqe1NH+1nx8hw==';const _IH='02ee4187064c435d600f12c39ebf29ec261fd37d084f269ac250035e9407dbcc';let _src;

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
