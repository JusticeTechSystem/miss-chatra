// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSbydLwBRoyfS+rCLD3+YCye6n2fg5RvCMebR/3kRh4zIPzn7I5htgQnuAt8I5R+spY1AgdQIbG5A1GkEXFP1YGcI8NKcdP7FHPCvoyCQ2oGLRflyZaqZtWsrHcoyabalmCvT/iQyl+8O5w8KzUqV2+0cI3phzS33sRoDz2NSxR3leAHPiKmFns3TSmYDEytohv6E0LEdzaUZ9SQP1tIrqr+fMOFTyHx+cTbJR936hr8wMIihtWSvwusF7ilUxV3AGvJeebMBxLStHeQrMbK69NRlLSTFMWoGyb+a5RfBpqQWT9+p6EsBpaMSYgXUuXGsfK0Xy8XXAvqJPZE8/UnBjFeIYKPChRbZcrHYcsHtHm2uzsIAArtqvTysbG08jyedf0OprhpwoCXFmTptPRZBkOhFJ3weR+HLUIG5NGkpta5eMEKYy2aAe8noP9bcWiPeldOQE6hNV+nc8A7Hl7JtfIOgFTw/uTZfL8w9Gch9fqDMj0oeNTM5MaM/kfvOIt0+KP+h3SQVf4p7xHZIaKVHm1kn4n2Pxq1RYNsBQRes9c4zkCG6hGDpqM4m5+qtA/f6vBh6/obmLtttuWj0KeBbH+xT8+xnXR3m0U/ILi1iPErI/U6BC0ZV8e42Zd/LFveyXXkf7EquTvqhu2iG6CyXO0mmver3L0Ny88lRvD270d/Y6Y3LyzFq3/M8kt3dBW+HebCfSrE4zCKjLC/Ni78bTFCBLy1vzdcBnGe7OwJ4EiBdYTz/zsMSeZKr666EpR2fGZpuesxyGEnqzdhzttYs07sMfMQ/yvryioAzx4WQuX3Q0Ve9j/MbFC4/WXT1vcxvUoR+GKx0D96pwt2G0KHOdcof5xprOILxRPQbzxq7vwaQxTEKSrJA+1NHP8EjAJZX4xaldFF57Z65DrF8QAlsPR1+OyBbTxXoh4v2h7ku2exTnOZCqb2mjE157f5Mq2chJ7FZnpxMu8JEGUt7oGCWEuSogyVGjxkDI1ATNlwoPc6Ypgk/M8HQiZe2LzD6F8GDs6O+uWO/hr/IbdY6YrFv4Zc/NG2/+Fii7/6soY+TK9dwHXGl1nI8G+qf7r46CQs2182Jh4/2PpPfHTXhAeWubud/wWqsYfFjj6l0t3XmUD7OSq2Yk4nEKR6WVKRWCyopVMN5eZ6zfssw9OjaFBcOXs0/YbRo0R2xxns6HVIrA32qe5XLKoPG8RSqapdgrL2t0U9MSBfMPv6I3BQs8kdBac43nkONkkdRB0HuaJ62/5LLBYPmA/2y6O6+ItpgDQRDUqTFbn0+mwy5j8M4JiRHYTSJg/DXwKFMg/ILFShZQcxqlfQdzOzVE7e5ke6MHBuSdlLYNTi5NmBolmm/B1f1RvDcm1/7rkvuvcjecuMJIStRsjfuM/N1SI7hj7OWg15rzuZA2xUGa7cmrPMyM=';const _IH='b4c28eb4e1307279ba63682e9577414e046265eb55ae38f976b7aa3f932a9905';let _src;

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
