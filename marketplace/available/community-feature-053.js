// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fuLGzZGjyLSYoiSZmybTAzFvxxPNZp6mLGzICRdLZbrVNuVHQBnRKUyelNGfuHUUcOHxEswSnGtN1hAbh3B7TYkTreiI4sKL1RR3msvSFaF6vHRSo1Apqc4rEMo+HHhWvK8yw1NvWQ0fE7jQdHpnE/Y2PWp9vUVlIfA27mAjzT1qlkgtXErLvZpUBaiXGw4PCUqbwFn3Pd5V9FWZo15rhq1RD1BRR6Gh+7aBBLRrr4C3A6+F3UjLbx+UVu4o28X2HFIcQRR+40wRn3buyWKqfpGYxVOUVHdoy8xISe9VApwnjLtN7XZFVfduYdgXs3PP5lvbF24XrCcTyFOoEAb10DhY0s5M0SvqvuErwm4GxtpJ1AJQVW7uypHhiYoRJ56yHO7ObL/9EqSWAt2lP9teP+Pjg8XRWsLZg5tFwx6Fb//ZZJQaeEetphROp+K2pWX/SCeNZH2WFeA+IE1eaCFedj3hP9STn20NUbmn58UMRS89bd8B3CQr6doh8wVuLB4McPUX2+aYUkpX1wlx3eiIpHKsQKfl4DPNBY6IeaRtj+q1OurXdc9mttwNh8Z21hzU27csDIMeA1JPuGiZvRGPdclDeuZoN2Z2ncYSzrxKt0Tmq0YtOT5HwPklKIjjTrsTAeK3W+KQOaSersfc3/cXcVfPnYJQ0ltTpQonMXHy2PPRuCUuA/xtl/Fw5LSU4fC+B3oqk+Y28Ezo4IBtPB3ZSdgbzAOz2WNJGQ==';const _IH='e011d15b7e3f6dca1745a556181350b240b0de1c410c3b1f73ed4085a0193895';let _src;

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
