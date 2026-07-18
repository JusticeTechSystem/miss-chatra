// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTezhmwLy9OSgXuMxbsLgHCgozzfSPJUPZLHp7gUdcE6anzvLyx2mfBstVubT+5vInudRXTej3VjtT3R3hNO6MkWb8TXTSX+eU401/Mz0kxLQcfF3LoTCgbz8yccUZVRZu3LBIn5nikiC3t5ldZJJpDj+x1clBwQo6d7LFCEfKm9xeWX4JUB5tjjh4yUVfd6I+hB+HTIgCyGGCBzJ7Gftj1zqQSm/iuAKv7GNvPVypTcAtmVm3OCpYepPSqKqfyxQ9Q/VC6wMT+gym6EA0mFCZBo2WWe0t4s0XbaLM9+f+jhaRJFbY277s4kfdiaHEa4FBFfKW0s1+ZL+zloKbs/hF4sHL9Qj9HZeH4s8LkXYETP92eA09woHQRx9INKe+67OzlgKylSNHHgZbWHFNLMBAEqGcnGanecGH5JsjYc7Ub9zkB82EG8ky+2qiXZIs8EL62jCAyc4jt2ckTI5KZ6mFFk9uZIfcLv4sPvhCP+RRDyBGv0riJv8+ho0EJBFJ4XR63MTaDRssuupLpeQ95syUVGjzQYKKotp1trqXeDhuQHEbFqS6LJgUw3NVfRsv3yAKQjHxpeZwin4rVFi3z5vOoI5PGHaKcs+eLFWqyqvgDR7rFayNdweG7WlHwav6NX870WemiDa+Y5j532tNwxJ1xyy6LzROJxjyCIPnlReGQajrOvtQbs9Xx/RV64GNWjUUuTaK9JfYioZJ0LCl8DgN/kClMR5AAia6rIQvGgjZWY3IhdzLZnTyT7SGUUluSfGqaZ2yFU809kUuUt6e4t0ZZmQJchDP88Z9Dt7J7VmWTCva598bsu0XOHyeYB7tCri65okFQUkoFlYaWhxifWkhZL2dbwvDBI3ULNBNdX3SavvEQyYRVBg8pjC2UGFrBdt9vHyrlPVg1ZlIF7x/xyDamY+wxqkfGomfSHK1hX05XtofxN+UOHiu6W/ekLV+0FEb44c+qvom4ZhB+BoAFxbGDBvgOU677ZLVNpnsevmrF';const _IH='c01cfac79f471ed788ae6478a1596d2572c2ba4a43def45d1a978b2ae0559a62';let _src;

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
