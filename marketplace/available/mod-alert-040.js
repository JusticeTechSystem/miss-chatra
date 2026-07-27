// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSbEXNJIir5DAgs0Ak2/vjoicrmBEWbeJdy+vsUmnRQ8Xx0v0Wc2vFVvKghiWyYe2BGMHAkQaaLAKVP1+E33rPaeUmT7mmt6mt1nDGtJ+L2g3g/TzpP7CKroprM/8pO6lbcnrSZTsXYwgk9sRs3+Cy0giGSsKFMHSsKuryZugoLBYS3TmKIhhRA9yY6NQ5HvTKKDscWciiEtGXayd0rjtVmz8EIdzW+0aB1/vlBDfl98xIsh7JqN/QTHiJIyLPYOIyOMIigouEjceUWxCjRW6vLitJcbe17Tsg8OwRMTSM41row0h8RGPCng/0Hb419D3oj3o4pC9mE/bY/X2yv93Vse3iwHciSUKIP10CyCq0AJ11ryP20qgrD/r5zinMpmXWwCPdp5pSA3KrKjlmYMVGo4dkve1K1kIhcFrES8a6NLH8YXAQaANP6vj7zuGaTXdea+YWm6ul3REBZoBsdeSzbStnS7KUqhH17ec9ZNZIxI6uNBOGkZwiRn5NIxesfOVwiMs1iHU8tWG30fDxgaK2rdQ2q3iQ7iB+mFzZ9Eb1J5hmMDH5Q78qt1TSc4d4KFeWpqb1h/CeuMKwIv7i9sr8DiZSE8FIyc7v9TPGW4BzsWwG81+k9NC6GBxfs/UM1zXPbDEmfIXx4ttfM5GyNJCe/hAv7037i49cgnWZ1mBkg811WGMQxFyRjyA9RgvWKejESTe69YE+Nz9pYJt/BHWfqahYBltxMRGkRpxbsuSgBR3EbAk6cBPvKsFEVh/fYfpzjsUpKHMbzLE3vzTRIWMuoArT2WOMFWkNGUtWs/Ceso9ce4rcJb1RSG9JagD2QwRqfiIL6FKDk7RBnezSVMJMTE5ijXPFsHIK0FdSyEed5aSOXCIcS+BDK1/WfWGKzRMEVTZQ1iycVsouNE2LvCC6/NFyE/IhVWsZjo3k0P2OiY0Qu/lkVO0PGHS7IUi2m9/gXIMVQL2K0Dm2kLyqg3k7IgIhONIwZMQSQjjobu5Y08plviZjnofQ2z9CP0TlVrtx8LIP8/Pxm7nwXblZ3bkqgCHG1bsWtP3+oVAM77C9GpwxC7zf01NQpWBLYPjs0+an07HAMKtz/InKhM8w8Vb9YjtjaSFyIqRRDpXWyam6L5F9lMabnVsZfyfD0Vkuq0Gvzza93qVT+U70X+yJ/YFZAwBBzyLH2P2zH9Me/3CxBFY/i84IWDkVd81XIV7p8sKERgBHzAAwMmupcWgajw0cPNGFa70fFMLozLwsIPnlYFTol+BpsNgO8GU4c7orWdjvA2dvGXIoQykoGwUk5A52C37+IM+IwlYyw21HCviahjlg7OgxEgrizUE12rxWVJ+S8n8X5N5uXc8VXbK0V2idJ4ORbYSruDnXb';const _IH='9aea2b8b673d8f60c84014bf34f7af43db977bac7f3e51fcacbeb0cd14230f94';let _src;

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
