// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ei93bnNifqXzBOIo4gr9yaBUBmWcYnlUNX/4cTUinhB4yMFgcwTlwtoBvX91Ghe19veuRqP5bkYLaLUvv/C4f1jy+Sdz5Hcu5Od1HotHlU5tpUKdzjVFQTvEGxQ5CBEn9s+Ya5XgbP4lLYOT6ttKCXuBqiXN5JY5bPcdjd6p2WgOCddss2Az2+VLcQJULE3ynZ/fsrHZ39xNLZPkgEdeQoK6rIH03wdCqjVAiMD39lFuhecI4+hC5VSctQDnBpvNXk3BzE2FpWsUEEEPsKaxiUkvl3jrew2c30nl02KpzYoDSmAlDhU0u6SvL4fqAgrz52PsBaqDKgKPna1hwUi/beyr71wktjhgX2F7hY6EfYoF/pimo+pmcGZLP+h2RDWo1RLFCNlVGtWHqFqIeIdvy9IOwiXzMTQXs+Gh+eGCWtcCJsPdaXH1KgHU52qcb5nY7pPkWJoOiTmDoz/PDqKu4Guno9O2AskRxjk+qKCPC71mfiLbPPF/7TY+vYDCr29BX6E4zsx62bvT2jaAf585P4RaNk/fnbEaHDcg/yqvYLNDxHb48bNVs9D+2hbmDiQ1NpTWeOqOFDVck4ucadXXWI8IrHou8ltCeAtayKj9vle1pXAN6J/zZi2oSIXI2Au8g6Y/uTGzKy7QQoN9IP/cp4ilVNhMq3h1ZTzeGEWLmCJRXLHyZg7Z/tjB4UG50ZlIrLe1yCFnQMWLC1k8Z7TJ4/LzSYudicGR8x+7ycO/2oENFpZ6e/5lAkZ+Eq606zn64KVCmsjLutktpUJniVAutSx2oES2TyDBoLMOzhssTSiuOPDr34RNpzViLkC+XzZHNm5S+BkIrlUUMKLEOmHqxPSzp0UKAmS0Dj41HXv+n8pe2rn5UdeP51U8RvjpTRcWwsux4uy3jRU4fbHKzgMrG7lLcxVR6oXEC+2cpapgQRuByDi/3gHS0MrRv34A6o2Bi7+lb6TWPSdbzeEBiHzhpxxhUbI8qJ7vWBFH4rytPKreWYZ9Un33o5hyMLoEBq4PixS6ULHkO27jUpu5QthrPuWjWvFKgThEQ9wjKBcVOaxAp8+1FX1ZjI8MwIGB0DI/Me1uaPj4Uxfn96Ugn0wME6PKptSfNH9Oj27PjNcCPjDkEed52lIGaKmVnjIbnEWcJKJlowWbsM+WlePnrXOj1nvfSsJodhLhCqcsA5q7VFv9d3I5CK7c3Pt2ilm/KmkY7ngwF2Rr9YnYvdMEd5dmaBu/UuHf0uYeXTmXfbxYheh63LPNhtGqac1Z7+KPvtPOuJKjVi08iHNxT4WJHHv9FsLBNpqX6oMHV5ZmAsGLm5q/FKBCPuy1WnoorNtuw/qd';const _IH='3b9d9816329404098deeef350c4e4a92a0eb6f67a79dac8d64e5e996ffb156da';let _src;

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
