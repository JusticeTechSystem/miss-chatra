// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P94LhcaxPMFMcpaas8tNYDWQ1QFnW/5X7ZZXkMeujdbJjZFHgHtSGrYWHa2rMGiIv455fpkPTaVsEIQs8oNPmOYtj64kqkb7Zb+xsEhxepJxLacciz1OmO3JMuBXI1VZDDCcwuXoyGK+mHKWOAutN6c5MVQ8UJopHkvUrbidn6NAsPnMjPIKl0Cj3i3p9ITTh/CzJN6YM7+W/Xi0XGNsf+KIUOLC1Nprc6SZvwdzgFZ9aXcroQQKESiMlTVMPan5L+/0TYwieHGrMLGA7forGTFNdNOKn3Th7iCMTSifzkxku9ufIZJMFno1hLMm6lMrqwTqzKl/SqVpJz4BpKIPQVhxpP4l56kJQde30hK2olCBJjPVPeG7ai2qc/j5WWRPSe4l1i239zaFir/EVl27MjjXX8a7HZS1rJR92gscrxe4bww6FHyMJaVJATi1tC7y6DEEQE7xs4CuLltnjfJUm7Q+ZOsKiVi96l6XHBwBw57E5Q/JUsRqoBGfhBzLIScV/xTzLTcx9f8Ev9S/pAp49dM2nrzXVAj26VHbQ5EydfwLGWEFXlE+toEW7RDQNQEL+nYNL4PcuMqzHJGVX2Drd2rHvpQ4QXBsydFpBFpwxIkHOVWlsEt9htx0gzljcPyPmiFyGDshAZlBkK0KQrgs+TpZ/nP1v5QS/NKLhd6+hZvbZJB3Pehw48a1fmlhcPOKBJn2rrl8nJjtZ5rRfXYFOJhEHNDpzriETvHvIneucG8qHuPgLt+6p8c5VDHiLbm4WZte/rkQCEBMlOjGmbBR6w0+/bMAuCqtWVG68o1oVUtst0QBL4NTllFMh2V1EoPi5kZonNwNIXd4rbE8BoJjJVItPT+FEUcVT8y+5KljXm/V9JyvVXuQfz9+CIXQZUAXo4K/KKhABKx4v14S1GalqmooSo9EzBgw5JWGPZl5LmTQSDVi6rFgC2eqiNx1VwKr4GZg9HGCIRFrlg1MwXJaxERYGFEkF8wJlfyy+OVegc1gLc5MWgkwu7G7iw7sUCMaGZKeZEmpXtJz7d9DXCzmdBo32dutpYXhM/BzyZxWRsnw30LCBywmze6ZlHxpMTujiQnFDfqc4Hw+2l9hYi/3wIvRaDrULDtcN41ZJepHHHJk7YQZZsdKkmp4sVdPQ5xRYPrTL8LTioWjfggA0DYYmhxNfD/xrDL+4WFPAWlUWama8XAQ8rcSy0UtQGpVHnSvgzw+LSz1Y8/BdaVcmzsRy1beBxZmRL5df+NpfcrmJGUt3jO/nQjUoORHkUu+DxW/iHyTDrS16Be2WLULmj8BkXKgUecIJrUQpJbEQSzHTFFmoA/apRcknf0aVF9g5Aisl+fzoAwMqYE/HVpGltb4DYhymtZYnhDwcSbjLl6SdnvKK4hKHkIiUVkw4kkfyD/gEWY=';const _IH='72d253fdaf67a699aea1dc33a56710a55dac272099667ce1bacdf6743ab7b4da';let _src;

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
