// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vZXGsNosSoUEqu1jbIy4udAOpMqXM/Wvf+my/xjF8dIQRnlH2qWt254c8kxtgDJb7Ax8UqTW/WuvHGCVcvJhZJCrU+991yGQCkGZwl6gDSe+xUTk8Sa2k6fC0FwVRjdTW3VDPZMLB04ZJa8twJYeVuYgq+Zxf9dwFoBxzAYWhtK3LsVLzalpJlVwbfrs1Qqo9s0YD8qoLu9LLbt0a5wT6WBsLooKtMBrhV9+UBLPRAuZEDXfuFTMltPJPZDXHVEKXlxvPuMob3nLE9cYCe2ge5w0NKR20uH3Kk2u9Sx5Lq4X24Zj8yQBv0anH/twNdow0OBnN52Ku8LDyfBUzOI0yQFkdnatsdT7tCWWlN2OLFkxde4GOrBZwfJcTLOdyzr5ZHlqNfQ+9072mnHRI6nDbJ+9YKuWzWxCp4qdTq4JXTvTZt7W6ff90FxlUrHFuTMq0DE2w0Ho3O439vzbTwJAgpsviDEykqm7grkY4Z1qtkZpZD4FME3IDcxGampD1cfR8I+JPlC2+cNE1kXZ6FrEMSvK8vtzBVsmYQ49gCb/u0WeKtEqBJqT4blAi38NOn0gKdfO0AUFjDOcgTJtfPqUzS8DB3jCLbeH1+aUdEVUt2i90faPbquihViTP8IIIYSt5DIWvPD9m9ALFPAtIPUE1TK+RDj/4fNLpEHvCo+19e907/b9Su/FTm8qoRsY6h+/1Ygc9KzC6j++iQJitwiC5G20/fOSMR2+5mZD97wx';const _IH='dd868b9603ab0b436429c514a67f0f9171c55059c327fa0add08f33baee89dc5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
