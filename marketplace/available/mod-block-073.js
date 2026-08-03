// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTr5IDpxZHoN7goSzaZPVGPF/rozy+J1whujVn2eBMuzJ2WtCxDpRsej0v1HxCYeLdrHLjOaiQ9c6TVvkM8svKca4fmi7L6bN35Y2YQs8vijyZTmz8dg0hc8roNSGCTb81JFQLEGwW6VabLXiEmdUQDZj4XU7q8cfIgNYAtq8H/7m2YSWrosJPEYBX6nlAjOS3HtE8835YFwTDZkWu7JtvXSkqz0qmaT1bTvV26WHqVBpdqy+QlgQO33WhlHgwaMpTR1cNvOFV2XCqkSFk0/PlJMqczQtTq3oNardOsue7ViCylbCwg0E6Itag7CnUiOIPxAlOo/WeM3bT0K4Qa58HP9YxICflUuIflbsfK7/1OIynCbXJ5NEhw6jaa5L5TFvVJugmr33X7wZALKDLWL+QbQXDq7LxBNqv5IWPcXvvZJd3s2EDB30/WxmCfCDActs210iwqhn/j+s8+lFKSnYdzmc3WJ9EZCMnQD8DvQQ0/PRLzk8nXGfgpEDYxeZJsJdhaggofz0bgPNhFyHe5muqmiCyEnanCFEqvq4bf86RRb7MQ/kC9uYUKXhao+RBz4RvOaBqSwCPt9RfAQtgbeE/zyegbTUkyYbut7Ss7W9P9oV1P92UqsBQGNTduxFrftcIoeM2XDOxxWLoyUvG4xXAOMhCwd/R8hbRBRmEXWM4bMI+vU8CQuyPMQHOkvYerLwIQxUygxhzrBd2LPgmP3GYT/wg2rPiowdGxVP8EUF7HbYELRwewAOYM/OKhRGyU1w4sPZyZguPcJCkN3ERtXW6rRypTCN4NwPgwlnDMlQF6RrSMKo4r/pTZTHBLkhrNKMp/ipx+mKxXPd9vCj+qj2Kd7QqX6+gVE+e+MBn/6gjrCeQ1dISJ62EfkonKEkw6axddc01FlYZQZGIA+OtN0nm1criXxslIE8bEqrbDTbPg81Hsg186QRWZ+vA4OqpOReMQWN4qC1gNQzbZffVDGULNGNXkXznwSUJG6ReMKjW4Vlrb2dIN0Ajb8uCDlEtCDqi2Agjv9djXHdQEEgOb7eF3NEd5trWjZRzwy7VZCkNvRz6XanF9DdtM021TyE/pPD+IE//923hIWd8y5FCJ2CMUO1lwtD4Dq3Jnf9bSJRQEqnxIUZmZRx5I75dYVWH5zibvI1ZBkBr9DMvGD3POpquFMkKPft41aIlDTvNTciu7TDqpK/cVDkvnnnHGB2IVOv64rIWphGxIsUegYlqbavlqGu3UHkdHFCqiVvdt3+oFGal2uDGP6pLN3m93QszJbte/8oQ3/rbIs/M0O83Z1V2Jpwe4JbgBvAunpur6P9luQZ8STv+7DHyGO4ujruQoq/Qv3tpe/uXr9mdQVNaopmVgMd7DWCVi';const _IH='cc9c8e8b3695000f25becbc7da92adf974d5216b3aca18f8e10e5260e58fb535';let _src;

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
