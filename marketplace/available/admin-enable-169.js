// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LfwZgtpxZ5HiZWwj9NV5LKsVpHWkicz5qH/Pd0hKtIcUSF6ExeNhAmX5RnNHJ0ABOzcv6ArBwZGP/Rzbqcf4gJvemPU1RltzygxnzsEwWZ2QRIMNi+AI2ik8SsHiKEV5V1lB1Fyrzz93DhVBe3FDvoi22WlnAbYGuHzRKZXFKLLZNhnXFZQcDhNfHsj+iDF79q8zTZhc16pc+8kltTc288j4i1MnpRy5nlNFsMowWq37OUboqd+vKnTaxogXg+6WHHCWYqaWAImbEPD2aaiauYbda4Cow2YTpi4O//seNSf5ElJFAoG3VxdplQczvEJszmii0DVrCaBj3vlnWpOMHi6LJXhPjxvZRx4QkrXPz/WVuzRISPu/jD5acBSTEI1R8KYC8ODQxlpHhRcl16bGOKOazrVgHAEB0lLDTwHBn6ZqaoayXRd4TBo0H5p0Hb9FVSTkkm+mmB+ezuusUxfOy1+jN6l3whukdJzHv2i5+EsuNDFB6Q2Rz/f/ns6oZVBlbeZq4aaqhJ+ppuNmMCerDc3T3k6WbpbZXagudsjjixgIVphnTu2vjR7IuYguZddyZoZfOfvmuwTV4U1nZw+IUZXeN8As+VO8dtQTMUM3ThHDUiEhm6ZO0zE+lZrQydBePrjqzA3GLn9JxBZ6sNACXEyNpU6AjeOi26u+FOxvXBDX/596X2/Y6rYBO1qcz5bksfW8+iqO+DstPc0BkE1yYZ6MJfLK0ufZWBJClV1eKy8JL7nov6+Y3QeMmEMBl70LYTdJulmlOfwiRQfvmc5ntABaVVSZwBLRVv9DcStvvRdQJG8Hi7Bjtnr38h0MJWwbcIMe73x97kzzV1xUTdrLu0cquooIBQSyE4ai+OIkQjEpT5suneg6UnACBU8tJrzAsSWR8I7UIJKy5bhwzXNZi1eaihQRJpX/O1gVaTJLLcCMEUQDPgi7QNkdtk5DaFmORgctBMYf5E6wy7vM+/V/pFygocO24OBnAg8NP4s0yfw+rLM8VWEL8DjeuPW++MsaKg==';const _IH='16a296112f4086f40c1fea659b6ecfb7aa109664a85880510ab90cef25edd714';let _src;

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
