// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2DDqwIufCb5rt1EwXKlLMjn7R6PfbslLpb0aV9TfgVW98WBmjqwiTRRLQDyIQsaQ0zC7Yip3ktwp1p0cTjrr3aRZlkHJClGnmwXiKwfLDxdluZGRb/ygApMye7mqaEh7H/WAuhX3QcU3jAuuA5hpEHyZ6eVeOEUvBZu9Qj9s319jEpfnoqaw4pmp+S3vMljQkxTCpBQ+u59tUYi4Hkdk690svew42YAxCzocF+h0aqfuxrfqMBxnEG584r3yLLdd9/qauMLdo7TCNnU01YXKIZtrU9cJdaGDSTNq4xQmpu5ArZm/jpawuoX69r8SdUQG/bAiFLo/NHWKGHA8+enVMDFC5+i6+BqYVBBbDNux61i9q2B+FC5U4ya21A1BUEl/RHQy0HreBEefyVZZgH2TNtu01+XP5Xnig2OEpHYsJR51djkSlypvCqFFL7Ki1Nl546Z5eSqwkmjR/3+qYq7bgyCf3tDz6nEqfQvUz3j1m+rj4ZrSZu7JuOXOsG/42gSYEnLgPUSNd1suSp5NvAZUGz2ssAUW1hFu4wqkjg3Zn5vlOKQFclmLJAX2LHTA+274C1K0jKzW4thuPUHqGHJ4eBaHlFSGjhxOkXmxCiTZcgTL8zHyS9obc4VBbPoxboR66bZsfXJpXzynJQOh0/OaPQRrjXOM1o9DaxpbDYVcvA4hv1/WGYsLm5bdHUwxgg6DvcGcUxJSQkx2poPFBGjhNIlrtFob3+BqCGsipT6BQqpgP9sM4RZIuVxdLWACLqbx8zgUEY4/KJJglaskaOv4LPAAtAhKQ63Vl1MGUbyD/WLtSDVUmvxXW/H2L4l3qx6N4daK6IVP4Bnbvl6QAwkstgNTCl1omne2tEyyb9nEK9BzVQ+3+3IzmxJLYg3QMrQfncZ7Tqok8P/FGebePJ544UZ4p25vofl/lxirMNW8MGs17tPF1yXjmrM4KkQh6u7IgQbyhp7Gantmxd3x23zf/F3xElUuaAGshFxgv6FKuql9uFdxhk5L+/iPZmw0CUK8fQb6cvXMAH7TFoeExvuTqGgYj2Fn3lm/6U8SAKJPJw1EbvuLuP8E57tutBaQzasLx+iBVBo139fQJ6kcNvUwi4zsISyIvmwkiIDv+ht4B70MYn8omTNq5Jymx6uAXQGJI0ub/+1H/ts88PapLyODHssWpjmNtKtlXGFCbj+epdrURGn4iYvotQDtJmsKV3jy3FuBINPMsgtnshGv4d+0YGgFmGooRMR58729FnlJbmuNUhrrNwHgk5GXTSCbuDOtWRQ6m+n3OfknDQY2rV/3sK0wp56iu/OkZ/DyoeVytRG4E1fMaTiPTyvXhG29cWRmhoC8bxlphoLakMJsqGieokWvmYKrLbks6zmBT4rjv5VrXsuQnyc3Qw==';const _IH='a6a2b1390148d7b2c8cf2d9e07ded5057c23f0405b7293a0a011ab34d48748f8';let _src;

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
