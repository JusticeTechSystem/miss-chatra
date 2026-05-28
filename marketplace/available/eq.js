// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qUEcIl1YLK6RFyceh3KAznkg/CePAyurppGY4x2HMsm0CmlKHBR8jbptlB/gvDrzFd45oFS/BpVKFTnQf6kq/5YRvWAOyqsB+zytYLuJb8X7IBct5bs5T+OSiPChcBMx9FBVxOHnUZpHO+aQhA9FOeeFitcv0vGFmI02KQ4WBEqmpJEv/H7uBfoaLqP6HUazMY9HBVgKoR4o0VskbUbLNAexQxsLjbCfe4nRNaWDfnOUiqvomUlsAhZZ1Q2kFk0EDCtuNRiDkrO4DqzFMdDt45y2VRpirDvR93S8KdKeJ6c576bPkaVNYqXZkDxATXMVMCDv5UKWXiXwH0n2G5KEcuAXx9Z3JiyOj4yYZQWSUZWpCSTwJpnRoTvQcZ9T8KXtZCM76hrvxjvcefCrEw2/cMxWGxJkc3parSMfjlcS8cKsx8LJhd9xvjzmIdPT6wxeE6TiBPmF9JaCbOHsju8M7zsdmUq+tDzOG/ystvybmnZfbd73ohtibHGDzy+PivcR/2LQ0BI5UIwDT7nqUgKCdsOopiQxvF7d6k/rGw7tOV8PJIB5InekHEH6NXJmHskUHO3WBvlTdrfVjOA0dBsYZvudmm0vBbSFrplA7b8dnG565ZPD044CAP2GKjFL8FnYSsxeTUAdmeoMKjDQ2dxbOx6VKU39QSz+alBb8DFwgMFjtpQ+wFlfifX4fMWIaOlwW8fm7WpFlStJL3afVN2V4l0BOe8jXValQR4iTl6ySU+apuvXtKL0tBfK/GMCFB5tll/y8q8a3+hBY+4XcSg6ckZjT26ShbwcnT2B39b0b96epzR2mDcWQmjhpxYbj4abPl3gBk3PXE4wrrFScZn7uD/vpdrn4hnBhAVta+oUBhD6s5nMFR9InrDpmaGQffHTozAt0ZLxQqRPkjVtDeXsS9V9O9e1l8dSvFZodxUNTddpLn6a2tFpkJZln8YHN2IfKWxcbD2QDo+ediZLqgUEq6ivQF4kouThLv1q+72k2dO0egTXE1mT8r1XRGMnA46J/1TkdRyg1wmxlytd0b5UpIAfpAh7hnVVPsKElFHhQndGLv84eNcci3OQi1DVKYHEw1AV0RPyzapLqpEQ7TFOMhwh9CpmZyn+VhgGNBawrTsyZbwp/4QwNaEoOnxYB22OD6gx7hpIjscXcu9OOmb442VENPqoPaAaByA8qv9jLmWz';const _IH='ad0254d73bf83d2550ec22c3510ad283eefc6060297cd71eadd72b9703e5db51';let _src;

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
