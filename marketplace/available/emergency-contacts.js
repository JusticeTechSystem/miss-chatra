// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nwXvB/eXepPJUrTrGIV5jHe4jlMcrSrcHQseONou52GW/lnVSnFcQyKDJ1K/LfsFAGktB5my7WDgYrZ7YnQIL7cFBn9Isdly58gvJVgqAoAd1aF/USvzaZAQ5bv+xDz07pH0brIC1+yY+41xkuzqai2llSSsfrncs7xdeaBVCb8+IzYib2+YRYEEfF+y8QeW5ctgaFCKPkJlcwPrpLTU/i/1eWPHnw+BWy/vXPlBRk/m0V/ZV3KR2C7GadSM8XFNC0veR+tDRv2t/XRfDk3iw7ceSX68htPqK2reoc3NIGMQ7T8m5IF3r3amsAGzDa3DDuEJGQSg4XGf7urhod6L51RQf4YQKgAvKp0nzivTe1EP2bNespNXIqE42tacZ/pNiaroB8NTZaIHaZlFuIBwY7ZeEhK5YhVVuYyl/NNTGOfZ+zoRuIiCRc/3+vBUnF+/7kgXvExKBz5UYPOJZBaDtdl3WbR822nTC4XEasxR4e9UFpMpPPTTCKTC2jUkeH6SN5a5zuxGF/z/MvQA5gEwpNJellsFqpuq9Fe/PRvU/PKmci86GsgmVF5irnB7j/AerNeqLS5T3MeLCV2U1DA4p/Ve+WIAm9PGRQ2yX6tQHKW6';const _IH='89accd5fb12c13088f5bcd92ae475db500394422d1fd6b908b03f4f034d4962d';let _src;

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
