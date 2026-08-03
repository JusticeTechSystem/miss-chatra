// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtInvhqUu+/FGGt7KxP8K27RO8HTBLx4kTdjdS/+8TTGQcI789N/9OfYk4JEd0KuiVullfPPFMpczPU2q4hrAOizmDEeQCs0TG6xX+dr9P7rRhjxJCvFUwqzAdvGAY8J4FCO4iCxU5RKjVo1bsQ++XjlbtmhpVmrnPZNUDETTUSIZzri5AMLo8o37Yw40bcWDJvuceNH4fumRq4JA2wcEDykGUv2leMYqSe62FzRUYxsiwnlwYbvgIB2nAYZeepvVnH4kvBasgB2Weflv/wEnSzCS8T+10MQk+0FEYmjqJIJ8/1LNsTu0FIG9CeqOJPb6/l4FFr961s/6ksTEP0WjmHJMguiFAwyvZSSMnF6U3GuhE5fArfnjMNQvHMrQq3kwmndvlHXhURvJ/s7aC9zgdjI9dbanhv8bpTO97hXzsq44gpJTq3FRhKvPDcSiqTILfnX+S2FRTu/+sCAoe9HKsNR8Gld3BppvnxkwoTS/MFPAVqlcyhEPDIQUlZSIr8ZZFpTQ0CdJrPKa4yDx8Hs2kuC11hxhjG/pxzd/rLFVT8S5jisZaYwQNItdxMhYtEggarSxQtfY1SK5nxaPU/FFx+qFeHHkMc9cQHoandwzkSjaBSq+bm/WSSGwsQPO2A45Wwz4Zd54wEPcq5fD3pOLQfAxUCgXc5YlCfpYkYWpomVKhb/RGH1KwJtQV+/6t1HLsFA1TCofpNu+EdpMPSvdaZZ02p6TduNqjqJPKGM4lDkPQI8/B51GZUzEwYjfQtNIJobLvooSQdrRa7NBCLWdH0QfA76dod6HDWbiMItFDGr+05JTkD9sSGA8NvRy8Cf6HqrFaTr0u6J2TJMTf9G3Coz55OEFsB4GwKM5jCaoQYIyMO8ZRvpMrnrQejgXu7oUr+BKZL3c1btJD8JzU2ExgvJ8syLI5Pb235y5Yrl0SLrI662HSey7X/ds3JuU4PmMyKE1lFLqhFLy74EOBvWqoGhwufrplV7JSEeA00FXEgE+skjpUlsuj';const _IH='392241aae5017ec72ec7163e72d041e36530241bb4d0dcdebff2bbe41024e433';let _src;

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
