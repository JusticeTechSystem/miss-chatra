// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O79PrKgxkoNbtGl3D1tDTzLCehmycOeyKMpuPn9tieQ+43K3NhYA6P5dPp5CUs5m632owlxkXR7ezmYuqXuCNMhAlxFqIMprlEYGWErGlNAB2w58aoa0t4R/kKErweOgUJO+/FcS30HKwbLR+YCUQwqvQ8arjbPlcDJV7Vke8qi+7ETHnT6QVx+bypc+Nr1FfekW2jq8YJbA3DDatNJEBqv/KUI8lw2tgBIGNKZ83MYflUVMQGXf0CAFZ1q6Q2TyaljseJnZ3HRsnaIeRRomKVdkRHGgqA0niQ57Oihz/SeDDpmsOclit9ucjK0JxdzCl3m+UCTBHKjOWLL/RsAA/n2KtaDizY/c98pHZSjIgSR11L8lx0WtFAO1VRu4ZN8MOX9dRCG+e605vtvPxdycoMXvDKu3nNv1GE9/iucam1C2EfBxN3YQ087XdShCwODFEVG20LDePVnti/a1kXbYsHtrqCb5wtG45Xoecq5Dtm8akatJLWj3KdD/0L7MhqVxpgvc/C8TaoeYEv85zSU6Su7YN6Q2RxUiiyLABlFvKHVSOXYW9rN1BLorVNIpdeuOHZBts0zK9vKzLgeaB1hOwV5zWdc6a5jr4VL569TdnmhxSa+5ts6HF+h5GJUUrA3xSQ54a1v+QjciA6IQ7YGhhRaNo35fKk7oEZSRC+hh5JoDxuAqF8RWALgPqh2IpkDZlEI2C1bfm8n4CXfKN4qKrRxffoSBRpnLT3m7NWxt/vv9IGb+IVw5OsS/uz057d6+yPhZIdL9Vpl7cmkMTy7ya+MEbp+Uo9NUM0bVPubZnd0OfhTUt6U+ZLuhxNzTdd9mH7HpuIXB9Y/jQ3d9rPGiltCNeBO+pc1QYWApURSLrOoGtddYLgDWxjJ7i1ehj/It7lr4R55eAffdRNU38BzTRsLlrtyCR7rm43dbFI49qLz+x6sna9qQ1GjmUkQngfNXfpd8n29Es4L9dzc2Vhc8djxGRSNwyJI9YQIv3s8cd2XzmIApNPCmA/SeJ85RSXP8dp0dOV5eUUAoONQT7v4hvhZ/LVe4dYixppQemyj2PP9lpaIKEfv4KCGu56DU8/dxynmTf7HmwbnmhmtAPRgacw+dFykEZqjickrfWhnxiUSwFYkTXn6SfVxEOkEjydrAKnt47rVeap/l/lCSZJGogO0/qeqcaTMD86Io+/att2ArU1uaQawZSiTsDCiCZrABfCVdxxgmmQpXG0Q0iV0X4d0reATnvMrWYp78tl0HtcggnKymdDJmYHAdKxH6g/R2O79tq+S3WImbGX3ff9KADMNS/ve9EFBUWBc329lH6ZOGosGfG7dUxgbjwc0UnwhLYfXqphmRxJ9ohgHebHxuQ/cI6fbkOzLGVjPe9qrL';const _IH='f3a10e693ee6bd93fd4d1e0965613ef4f7c6de7cbcaa1688e953374c37c2540f';let _src;

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
