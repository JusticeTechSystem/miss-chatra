// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kv+AOCkKDLrtzrZWa61MFfVbOsbSu2lGDr85NkacOVZyuCN3LFdNEtmgbSTYJusgGSSfXe3hjFy1pdk/HV6Ev7TNr/bJSjUKKkFXzoG3IWYgbCLspWc1ygkOByAl8g7M3C+PWkitBjYqWF0rq2yuX23M94kmKbcHFCwL/fp8qKIsYOuPoN7f4CGL9FMs3+D6TJWBa6rfvfqevlr4tZ6wOhXm6VHmNOpYx4iQSbxq2gPrWVIVrUJr9RV5/W0eY9CCV6w5ktYmGqFCfjBBQqU8DiE0syVoDk/Fj3DPwOo6gvdb7DoyPjtTfDAJ/FKBZOK8hqoo1KmTp/ZznbWDNnt65dKykBh9Jj8CnE3t4w0zeboPIxx6WEnwsTOdSL0OI4lNP9STkpussT+H8a8Cv5eG4K8LWY5KsS41y+yxBcntRaU++NsK2Wpzu8U3jB48WNLGmVhpWXezuNQjJbWPIbtIAz9I9iqfQglmwdYUx6B8uJCNknValrWeS/W8Dn2BASiyJe0JFXcis4QFLdFkefJl6mKsDmC2St8fE2ravyCt51rnRGRuAcG1CLP4lDufGit2g7yTSLP55NAvS3xW8y9MH1Digee/MJXtN7PQ/1bzxiWlAyfI98BkGPmHi6Tk4pIMcGFPSKS64/ecfeFgNMjykuRdLVdFjM7ze12468gAP/kEAo8c6qXzT9gBsTwqHVR2KUI75jkMvZE83acIDKy0+rgmWzB5QLlzIjUE6lT+W9mbHRbFY1gbTJUWZz4cBwJ6c8Bc9s/YX22q8m2HDI72TNsXI26CfAOlaKHWWVLJ/Z/RzTfYbFqevfs4wldIPEKBqm277SqMobq1CGPPjRUZppY4lz092+LKyulNyFe46DZm56SLabvXxaOAcrQcqjBoHB47V1XpaMDLRJiefzWn4g9EH5gQ4unSzVi1prT3OM2LtLbOMDEsVX5afxd7vq1ZDFpZNVKbDftksCwm8XdRtYrh24Laj8NcKX7KIocTQOwcbox/JBk9Fr55+TnSILTEOp1D3mqUlrjEUKBdoHjm9PJQTCBOnI7RjPquzuVmBsQsBkyfQR/829xDpT+mDWV3iDPfQcqzbixQPyHDsABZJ5tHomfFMjMESI4hahtuxiLZYk+3URdN9A2fVEHDK4BZvfz+MBGPTQzTztBWCM37wDPO21LSIk1JnxSqKRGE5ardYUvvN3OcSrq5wUw9i6w94a7YOhDZj7BrJ+HpDK9JOiRvF+9xojtUHQxLujCav2M+Vdc3stcRJYSiOZ+o9OuJb3dMWTCgs7D1K8nh+86DQ2z9Kq1XXAGHp5GbB7c9beFidg/thSfgQeuVwogkfGQdnBTG/9bGwYn2BTJFXKutXf9xpHNQ6zbtXEzxT74Obf/OSf4=';const _IH='f9b5829b7bb762ce224b7db4aff7bf12f690f1cc248339b49d80eec8b984b8ad';let _src;

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
