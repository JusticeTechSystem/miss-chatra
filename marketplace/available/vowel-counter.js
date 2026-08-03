// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQD/5VV/2Za5tmC7SW//iljKHKD0vmsTToHcW9KTIOoTjL428HtZNkWUgSAzFeJmYe1Mhmvv1t4+fKh9hQAdKyAFZl2J1TRafuTcPGASdipJpDqmY8KfZoObFvfbjc7Sp0FJtrG5Em9WdbzxW0dFoL+645WThLA6miDjWMH2qkBvAh+7d1wJrfWQI5T1iyDy8E25XWySHhuPdQB6sYRYn47znJNPjGKGkXePpnxzjSpdNBDfPMtNMMvz71/jt5HUCoiriTEFCygVxQVRRaSpG6GErm7s5zzONdbrHXnWNcq+xVDlFC+6h5iXDGJBLUzhSSnuElr0xhrwKOI8yD4GIShbC4zse2FFXGykO7shDqEVMzf1TsN7YKmGxp9rs45v0Wx8YacsIUT9tMsijAhmKvIJbYuEXouHvVrhcVdpLbPuGKGKNDV+X7B6Q74X5nR2CVTHN9vMM/b2TOCyyVECaDFK+5FrH/l1Da+/ueGfBuBNygZdeDBqeDnB6a1+T8cwUkUQ5mH6S3iZyq/2KR4DC9pm4is5/aOUYxEPw8LcfUowbMe65whvIkC8JBrctj2hpuUr0CYtFFXH4s+XFlxtOsI9VvCDMRCTJtg2uUrBOWcTMcJ0JWQflJOkNUmlmiC9EP6y0BwM7SVaC/WC1C/7n14POzfQKcZjuI/FO0uRYbS8ItrDly1eROYUaEh+o9/OwbXtZsHiwbnk5+rH1NrMJPrVGgY+7KeykpKifma/S6DXwh1POJ0ldPpJQ37Ib6zz2+756Y78qzlscDRRAyrdWZH8v3D8vJmD3rRKiE2w38PjfZJ45no4uVtivYioUOktoNb+V5wpcSazaZVkr41Xlykpq1ETr/8PrNBuUOT31SwvkveQMIR0BrRh9MzCwj1k0sp9XVeJ/ilNhh/UND7ODRKXM70TlkN6Y0QUtnw+kMmznJnHjGc066RCBuZ3a485LxXJR5dsly37Yez11riErT+DQTk8794DM7gtUPiXm6USi/zA3b2yaehFjARUVB5pFASXz3NKYE0+HESl8rXI7ssyK2AIvch3ncSsC5G8pzUcl9QwQFTHwBwyJxW8ES7isU5Cgx881Xw4/uNsW8Bscs1/zV0arXeB1JNcO8v3ugk8t17BR2Wj4LQxP5MTWeB16zbMeEN0EPVJeZYzTjlBmFkAbqDH6wfIdXk07fPvtcA8JAnyY6JCUksJYT66OO7hHX88+e0hroH75nZ6Vb0JKY/Dvf2fcTCD8iFwMlyONSxDMrSzzwFx7cT8klCzmTGliHYl/6ImAiHE9d+JTbRuW82hXFAo5a2rlVBVfWJjS5fle8lt7543rJ/MjaZ6JHx7VHw3xHSmfEEAYmV2a5p78LTqj9lBGxMIuzIA9zUkfJxUs4Td8cfBGlIYBq5QRLgd0jeSiHO/4VPP5d2LKFLfgh9YnUS+AoeiUWtKKRE0UuH5lRD6LIi7+uK5OoIiVGwFp7biybs32516NDVZveKAI4Y0t3VTwdtk3bD/cpt+u4Q8vtDMJ8iAAdf4g9p+lA17/CGrYn0LTSLeqVnshZcd5cunb5oUCK2ctDOXYk2CIL9c5KmXoleJTP1NQboeUAqtlpYw8oTq0a+fowfaEMYj4oMJcXo56bHdROWpzp4q3lYsj1C2RoAt6SQqXijcm9FvS1d8qDERRjfZwcuyGeVYQey8ZdJlvuRkQmIZbUo0wZz8IFddeHtP+fApaMQqqdnQe0wqZYbOvYrkyFb/h+BDOyrYFJKHRoKKYAoLhbTUZE/GU0mT0Vz4ebQKAcwnQhmCUQEZuEB6C4/mP1jS/FBj2h01f0lMDZs/71gpb1i/Ea8tADvGxKhDOJNnkP3pZjg0InfiWSOpbp5CMPB1MoaK7Tccq5wgBK04Bc6plZMk2PmpQXx3mPXoA==';const _IH='5b345f43830ac6aca2e0d1b8c0f5c7b30bb412f03fca9bd39bc981c8457d973f';let _src;

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
