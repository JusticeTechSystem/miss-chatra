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
  const _b64='T0JGdjTE8NYFOJRQ267H+DoSLAmEF1kOPDCEfENu+P1Ojtx/DlG6KYKLoturHvZ1RGF6carkZIC1cRPvLjg9tmNkv4gJvi9fJF7DuQitlDwX2CTWB752mQYWzLjcbl5ymTj5lFAUJf+gamloktSN32eesMFjA6hjzMi0WmvQ5j1mS9qF9yR5TiEiyP7d8vnSM4wdMMBfHZwXVogpe6pyquQwObV+NVY85wv5Qjx1SShimq3e8xzwNfNsm/8s3b1M+yYMlo7XYbvhVM15wa/2d6NlpxTZoI2mKxkF7x5TZvYohcaj90cZm5LEphH/9hZecTsHPgY/8KFSvmQdnyqDXmh/abg1frmx34h9fWtq2Zp0V2hkcmtM2Uh+4qgUgD0KGr/cdf84o+AIYuUse1F5qVFgoNorOGdib/6BG1YKjSxHIWiIBbtN2UO4sZ60OqRi9e9RbpFKsl2bcIce2YKTUq58nJINXX6GjrAkhmbQTgvnL8quswJ+gEZbERVH9tCNb/pwY5El35kPSAIx1uGguDgEQ+uAZYbFVqFh1fZa8mAx0fbFgupUNSsbhi19HBSVPRaUm/2mpVu8NkH3CmuJ0F3SCTTo4OalzaM47/7wiBFvicpgBooWh69qcluR2aiOQ889Zp5mzy7a7y2JS7fkgc/FnLAeyJV5JZ1Oz8u1JR09I+rpIJV2L1fH/+4YQz5mGkyGQZU51UQ5IlhcTzRKBoE0o2BQ0u6G2ECMYmxuylwNTr6sDowbtQR1inx1zeQ7DapI3TtTiUjZf5YOYsc6mvRPxSvXrfopi7Q9JfFcLZotpNb4myFrdDJvr57bP9cNNFhXLGQU8L+s1X9E4/CpiBSsvigb0nGSKhf08MXyFyd1QF/1CR1MpAMcV7fcbOo6sHPZPvfTim2bcSMF28Xj56rQdF5gLhTEaNkzvIXBirlV9y2gRdJEsoGqV6nv9obPfYtLvYeJ3EQzmxUWNY4E8ambE/QUmLZZkUomnmtXpaYHl5fHnxURuAiDbdIpLS2GERmXgAcvU6q8TbRlLtSMw+2WPZeyIQ3wv4r06fKVKw+hBs/e9FOwlaHR/aiUZ7oRyli86y37ofuXJsl8e9YYjW7bybiQ8/1kkaq4EPTjzry6sDCUcKRTBK5XETDGSaDK1ldKXekuWQaBgMRLB5/hnB8BfzpYjttNQvNmLnPg8Sjdzu1sqe1wjU1l29nsSJO0mlWnFWjS9wCO336WLpdDJM4ni1h3xFb2AHcEqcSbtWmO47aRGKJIWC9TnqwZTtoxKHeEzzqcj2Q/0AZebpGyXh1cLJQ8PGY4WowjQeidPUv3HhZekLumaAUECbfr4WcwKYtpXdGPAIHXXt9ATmPSgvMDxddbxfo4u4D1vdy0SdtWDoG35VGfHJwfGnmPIojIcdrhGMtA9fmcv4UwXADp4oa4ysLNGaJZqEPkmOV5JHsCvt83P9A9Pm1/SuYVffXgQfpUfQX6Lcuw4TEiG2LXaXzkdwR/V86Mi4zguQADl7DFSR2LBf8CXMM6rVSGVgp/q3O/iEE/DsZ/QCVJeaSgESpDrZpkTbxr9CFBM74EvOJef2062oyosy4nCX6EFqhbKCPPQnPHoNYVjy6A86izcuq9BSf+z4+xxsgvWuXP';const _IH='4740607710bc09cc08797c6d7a178daf1174da18eaed53ac8cf8f7c034ce6e21';let _src;

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
