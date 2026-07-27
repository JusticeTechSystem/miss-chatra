// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSB77oo83yLJWFZW0vQFLNdwMnXKOjkiLWufZMGuWtRdlIYfwnKoqP6OocWOFvwW47A/TgsT9DsxXZTkaBhzDg9pfhvoDoRS6KbfNPNLn/yVc9/Me9/vYZKJsGK0TIfl+kH1h+JqgPL7R/Vl4pwmWX7suBdFtkUoM1vZaNfgXTq1JImDuDSqf8HyYXIdtBMj6BhnZaFNVX6W1t4W7Vg4niYgY7fWaS+Hv/bJ8AdF8pxkMb5AW2noIsa/1XYNCthUFczW5dgeQ7AY4C3g3khyFrFWOP4P5HbYCvV4G9iPXSJvcq+Fjl4KIfjx8FUXD44c/ZWvlJskthHaKDDP1o7uX8NVgeJtiprI7/3s/yqP1EXwmAi8UhKezmGZ6elRm1MedypgUJCSd03nlUucA90b5AVdvL62tJD5SI8nzXNU2TCvu1+OLH6bzmHA4K5g7z4NzLN88x0dHuHJpMUsqi+UJsA06oXPhyip0GWVGEKPWEvpEGeeiK9MAOj5nnD5s+o0N/s8ZVjofUK/SdBHwRvL/PtP9KyvOzdp2oFUvK0s/XBsmGFeESBvMzEW+egp0BB4yR5aOkbEBm2BL2DW+csCYE+HEe5FDnCdJlpZvBrWXW2M9OQjn0hToWjmjGznD2EkWArS1hQOACpPFvIPAEDSXRs1wNR9+EwDGAK5rLqFiOvyTdi2qVMIfv+QFdb/plXo+fShrqROfGpBJPL5jKZy0PKfvh8/DuXb3r5dwPW+7fEB136DlIOlg==';const _IH='4d70b5453e4cc6fcc91778a2256eb79997e16567fb6b152e8ea83d178a77b007';let _src;

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
