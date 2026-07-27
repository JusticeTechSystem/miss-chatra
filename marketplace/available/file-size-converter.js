// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRTJ9U6v6UXxO6z/f77j8hLNyCwKjFqVKzO7fyegn8RWheR2v/xo4L0UYWi+iE0rAIXktA3KdGCy94PC0FpvD+LkvQU6qMrp/n2t7rzQqUkC4vTOmZX2mEbiX8xfX0jYWbnG8u1z2O5nVA0ExUbd6Y7p1zOamzB4EB8Bvxq3jN9ok/+tyktEd1D3A8mgqT0Qxhk0pha5vs+IM4WcVDwwbfzELGX9plkdZTnA7SyTpB4eKlrqCFKQKRG4D5TBr2oOrz8DKYNeqFkRbXK9mI7hLa/Av0lqyYNEctIs1D63bq+ODwnbU4Ph0dIqybJwztohd6ImXJhcxr+VvywjaYSd41/q0GAX8wQh303qWMFqm6L+PPYXOMiyLRURPOFTbbI19aS2SCy7jPvqatyOoN3QTluyPtNamvs/Ify93ec3L3YM9kWy2GeRx+RV1EtqY0dnOsWdffNLpVXdZrxA3h+M5yLOZVdHOf/CwGnPSDV7SabwcE7iUjD417xAPSLVvt519FvsbtizMSNlWuuBi071V2ecS8ATcp5j7txBTpbvQPl3MNoANE0JRje77wtRAQViIZQYA7XDzfC2AjaH85SzigZT49k6MeraG9pZDcoKeeopTw2UynGGO/eJXviDc25aOXJBU+nbSfsau5+IiVmgTs8N6tSkT9PLjEO2bAQ90G5NS9tAIQ4c//w/GKuzn6frSUHT9S5vgfX7vulW4tOgQeCjr7YkPU6bkqr74HsRlvENMzs8UfTFwzUSeKxYPE21k0MFai+sd1RWrKrQ7SJXhB7/8Ra0Fy6hfDLogngQXiRhnqGj50dmzBn6VJ48Q4uCJ9I7gJeT3a8EuCRj0+m5UCjjoOgPeT2tE7F7T+FsbiZtuwPHxR+oKjG9YDBmXpYymFA2uoTV06vk+O8DGT8xBuu0u6xobTllgcuk/F3EChqfGHuhl5zSNj67GvbD2aDw6sKOWqcallmAIKhCYe/LSBYEwlm4j8W8gY9oCX7gRvu7JKNrX+AKIrg0CW/Kp91kOb1pbITQPxkfFGXdYwuJSfPM1F5YqzqfKddKKMIPRL8ILFVIjJdbP3V38jYWy30XIfphUQZ8D2rkERGBevey+b1RzgGdItalMs7zkFSMthgam4b7az7blPndvihveQYhyklfL16234EyszEg85KX0wEOXHpIGjhxmmSX2gQBFEnMiDQIn6cuhu/pNRo/2sh8fT2/ArFdEYrd1gRq9xwWvuyyePH/y4vyYXulxYdwNWHLBJhY8bbPZhLJI/b4ZFpYC/BK2wWBsH+0DZE80iFM5J/js+1UwwmBwH8jJDA8eONNRXE/HSsso8ca9HL1ATarnyQ+WYQauKzoYX1T7N7LHLw9hRh5oZt1Qi6IHnzmZEA7lOqY/5Mu/vesEgVxrdcuuBdgCwI7WbjiSnBLPckRYfPvrNOyzQXz2NtAK3E4qn6zRecSEeN0ovm+sRHJJ5SgMlrI3eX6L370cDCt7Lz+vLfjPbbm0R+blC0nqFuHW8jgA2vTr9A8hZ6SeRHSBt7sShbK2ZpEz0zzbsDZLrA4tqqsozvAnaLYBoV9CWletExdsEgv9MZVkhGZAzad4bFJ83GBZalTCQK73KvuP+8eCODeRlC85q2wI2yZ1kRcfxXZzAMIlWrBJwAOYzHLqEKUvgr3/c2caElgBVT9phX8CYZ3PN2HoLdul63sD6nTZSHS+IqascFQqF1yubmivfnhtsgd++BcyxA45HHjl+SaCEwZONz33zQ36hPQGX0enlTy+UDAi0JKvd+jokD66wLrzQEHStcnzytyYaoEnqzfQLoAWiTd3aliYWp8Ab8grMPeQ/A';const _IH='a2645703376c773f0412e0f35c9ed985219388cfbb32f1a66dd8406cd81add20';let _src;

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
