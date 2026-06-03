// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e0GgOfWrKhVAp/o0yZo6FM7xcn+YwjdZt9G3F0Bfyg9IdNoC1aL960hTBELiWBeAMaTiGHRs5eCS6UxbEkd1eTt52DjSKzk8HLrFAq1AGc4AHCtNkVKTiVnmu4hwzT/mGGliFOKKaf7fUODTbCx6XS9eal9PTb1oFK/ZMTDRiwMBbilZCEKGVv15Q/4tFqLZZMhRQqyrfZeQHnaY9oqwB+lG8uGVOaAPSoeTJ89ks9iYJNz22FEJZaPs1TR0PF57yzUepB/oKJNSb/cf77t62gkdJrbVayYhlFNWtxUrbq5rts0BoFlWCFrrmRbNs3Y5h1aG7tstgEIsLyNDqunz3MnkL0OBEKjDSazGhtKDQ4n5883XaZl6t/feaGeG8JDjhfigs+J9SPBIIMxepItBI9VzEi/NUHp4NG2WmXlo8PHgktt9Nj0Xq+tE71CoPWfiYAvMPdlx0b6IunAWCTOAZcrPrX9ZlKCaKJC4QxfaGuXelFsWSh5ORURE6QHNalJchVlMm+0KrLbW7tWAlSYVmrEmzv7ojkdo0Hjg57yWDC1AmXFKu4jMVHFLMyf5FjLCs9KBSxlBtFyiZ9q7FnU8uEgXuUkoOmg7Po2qZkEZurEhsIL3oFVzpgIMMwxRQn1qmMh0Hhcx1u98h9jJXANveaOixbylb4hXLsBkIyduMhmM/Ycf/B6qCOT81KL5p9Gn21uZooTYkH+OpHLYkI9P/Z+EPbR5L8eQUMn8EtgA0vOYlgo7wzrkuDIBhkOg1FG+CVEyof8a8TQBBNiHsQWZYFW6Vx3ej7EfGbNbGFeW+eY43y6xRtUgWDKZ5fQIYtb9FyEzpp6ipy/wk8aMuQVLh2cOdhfJgM+L4fZEfUeUGx8saU6UakFMDXPDQrT/IOGJzv30DtQC2g0AgjjQPBImq0ZyFP5aurTtGA1oopKxHRFEWTvQg+JRzii5Hmm4dUV1u63PciKufoZ2l2DWDk1dkrRXL50zn20reaIlBHtxXTJw3svEasQCFpymZ64tLrtnypcdMgpOb3k=';const _IH='228d00589b9a1d5911890f80ce153a3e8d32c63ee48f2ca516dfb04af9bbb66c';let _src;

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
