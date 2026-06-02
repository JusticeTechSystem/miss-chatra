// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eiXcTu4fS8ISxxcuzw7/aV6YmrtoUspluP+7ATXVi2PPiQVjlMWBrPTdzZbvpcSRO1aSJRXLLGS7AoXWzmuVGGPmi4UhvAx+pg1EocsII+uVhToSX678r5UcJAq+HXyBe7apy0znPEsjXzFgq/oK4joeJxKAEJdq4HcVVJ+SUxtkYarN3hy4Ags80nT/u+KvMBpjpA6Eosr9V9Ffwf1vo3zNhZzNiRr+6fsmlC7C/S1AzH5uXw8ugiZWDXQMhYRQOI+irCJyKYQ455IzhVBEtwdxW1ID7SOohi10QdptonzPda5fUefPYk8/CaAfkthp2K7h8VEhs0xcspTLwT/MEz6/e+mzj3jcVyywHdEpC7BM3ay4w8lXRJTRLQxuPI6cSxzhBfCeTGq5r2l2WnziBJlkAbFKZMf0cQmNNmSp6c2l5/JO9n2oN3kiaLLts1rWKMi4LLWAUQKxUidZpq/gkuMz++iByUZopOhB7tdv3PpK/ld84iaggOZK/eoY+ADucODJMLWvf52EKSPWkv2lUuucgcy1Sk97OtAabQa3rbotcngm/d5G0eQ5n0pCtoj3/1XOhOAmOeonHjm8NFD4wEN59wPrMqMmrhZ3n/asaOCNGUWgnxv/co3qUy8Pvk6WT2AGVLZ4idJ7Aaii3JS9TLALrBMVcZKfvR0ibpmgUnkPBXjsCBH0fQPT4o/sdtY/9BiAN28Vi8z1lOkfDzk7j5DOjl6dfwIdRMgXcbVtU3JO3pwmQR7cqDcwgTiPa+uCa6R3Iaa7tAGt/7X00rRLEIZH3d85dN2GPSIhRKY7M20qTuS+Fue29jhQwu9yQHuHruxKBBcHgGJfFu095QEEXYPYlrwl8djbJIlmamFNW4YRnvmLWHNSsVisveh6fp0BCmAVV5rxuRJ3DBS62znWC3M6dnNn5JeupN/+E0jvkIgMwZe35HbMQywFL/kkq6xUEJjz0swEmpGWB3nx5SKgcPh02uxo3z5+qiB82RLDSkyRfW/3sg9A+oms1jUs0tzJMGq2yXq4eeNGV6xajxQWNDUuomy+RfrDIEX8hYzZzSeaTk33cKzorJjgJ2BW2xcaZH29/XN+MSDAMUVuXReBbJ7PfbyvfhpY134jBMzFdIXMU0eiI3pagZH84Q8hbKoCQiKiVptmj+P6RHXjjJKgP24Zj3xZ5CsEB78qrhwSdv8sR31ZaLmNreC9uToXRPOKMGOzY7mtDJtovsrlxCtG4YQT7mS68idVLtsRkPdOJrzk0gPrVdy564odGRkv0hm+t/qyIufe8Tb5M/zzePB964SB6PMmr5ZC+vKwQ3UO0y14A0PEF82D4idSgEaApj4zTpQgs+IbvIq1brg4ImdGjVb6+kfLmUGbTQ4st7Ylc2mTUg3Y2h3jh/1eb/LxzhJLXthpFMd8cctKf/NlttH6Ju1MkhYjvR7fZnFyfWHnfFU5UOkYq/zfg8A6NA5t016ww4oEkRE5LW6VBrPBKg5CS4yMNQvKftwGe3aeoqehjz0aFEYhuf0sUipUPsWxEhHmHIRW5DPT8ZyGRqh6Qyft9RbB+68c6NzXcsso8KZkpl+HHh00sCWNZIvLZBOqYNMkgyjwOdkTmFZT97UZSUq7to/rZejLExwx82R9VQxeDUanSNWrOFLs1dzKAOrhRtsoY9dOJRiHWT4Kw2DfE1c60tKIruHiE1WGlZEinCJ6N4M=';const _IH='89ffb8d9a3fe2be2f2de79c547056407aff97bc23bdd216c11f094b8e3cdc3c9';let _src;

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
