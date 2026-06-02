// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+qeaOtA1psX0t3NQLHCwL2hCd/zq18iPsxB99hk+HahPZqOtxB8aJvYl6UzSWHnskkBtQTjCcmn3Mx/sEO18OjHMWpTNSVhP/vTVO4M7OYQJSFjTdwKhs38A/pFKbREbF4uujo5MplvKNwmsZv0OFyFx8V+nkqu6+dcQU8TD/W7XS/bv2NIAUO8PamvIuAgjRde0c68ecpzCQoPkN6y4dmnuJHmqjDx7OLV9U+h6kJT9TnYTbohlcY5lRCPlAxzDbS+IcNw3VFtNKBbM+HkKW4Q9BVkz/kXw27oIZxDcQrQOeoffwpReUftwNVb7eVEJ0UDY+TXdaY2Ba8Z14oZagXMKZhUtvzNU3f+r8lHiLQ1OlByOkSQdOPbffwdO025GiAY48DPej/lHQzIJXwirgUrbKldT745DaGdRvVpL5Ks10XnQ3z2XUH5TpUgdMj10JnQ5l6lIUdHyPPXhQqtMCXpgJMm+EZkIuOJJQFD1Oz2GvI1bRRItoYzlQNiF20oJc6rnEEmOmGrrpRfslOL04ha6iLhSWKQ9z35J0ecSZSecbI3u9DPRI7PvX3bKePe9L8BLYlbbnZxN3NwVdtc5lPsZ++Eml95vR/kinCRNF0yOzKGE1m7mWsXDG6iY2cLQFd/G+DVpEIVVTWNWh8/9z23IflpUQ91C2bJO5cR+jaJgt8jB3EPTw8fhk0BzmUR2law2PaqAez2w6lXnufVuJhMnHS6SI9L8M26SXLBX+911TolLUDmnAR3dAWhzHsonyPgNe0lvc5KRB81WSR5S6jmTJgZppy+K3u+rz+DRv8TAVPXixBPagd/XMMXw1cu0OcyoH/p1fx+gpUmhTTdpOxPcv35R49zB1da6pdwJLcUFTQI+iSQ9sKTO3/LwLxyGorXf0dYu0YS9S6CjpdVvHxvS8X1lt9pVklMDG/W8Oydt4NEwrrf3xhlGnnYmotm7mFDDmS/gf7wlpDjcBKWb3I4bnov3/hglJer1oHEWeKjlo9Oi/OfKezarmadd5JJ8k8SHy7r8UJaGZm1IB3WQ+STaOdeHOJc3nbT9zZv5d6aSDklVk3JsAvGn/c8B48CjSoyyUVISgKD7oCmGUV7Um9JeVEUEGJZmdkKQEb8aXSkQDlVe9Od9B/xrEMZwCko+ttzXo43hkPMMCVviembHsfJJJnu3C93M9x8sT83bKEBn1u/vyQYt7Jc0RO5L0yOPevR9YFTNRvpdfGT/X6+3DTok/DTrPHQRWzRlAWU+9luueGRxRgluNTu3rx4UY7WqOnoxFdZ/cEymwHqoWAdPrXIs9viV16eP/2UABRuUYJ0UmVtW63ENd64DjOWWZ8eRj+vBY+/Wc5ns4Q==';const _IH='ff0ab4043e94611f1813e609baea7feaada46416dce414d2b859e05efad585c8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
