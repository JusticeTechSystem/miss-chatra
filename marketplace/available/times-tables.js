// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dSy42U9wuup9AHhOTXAwwo2e7sEfYIqMD3az9skU0APB8Vj6rMuMK3suO2igkJbK7W5qSRMPrZRPYHQZHQt+4lHOX35HoEi9az7CaeXjVYcoz1lt3RdF9+3mApzVPFDwLkjWqyHV6WanBbmGqsHM6soW3NnJ6kezX+gh9wfdh2c4mc2PiGqFWSJ1t++WN5174YW3cvQ2Gs8mtf8UGfbDCaWVP0mLo/w524JRKhPO93pdewFKGYxtExWTKl2ZndIEtsquWpRJXhgSZPz777tNTIQ0koBdx031Kxe+7oiTWfxMwvEZceH4zTx0+g/tSAcak3GZ2Ojj/sM9481W5ooH5KdqDauakVcqb9FI1khuG68Fg/eSAhzIgsOpH4d16dA/teNHVNuDJGm3D5Yeks8wd17fHiNuKaFnZEce2Gbgz8MP8ScVOM3dbnEYpEZPfoDsuBvEl+HbCCLYMNks549US5OKLUaWT/3CwUtFgrkCH+PxA6G0b3S4zWzodrkHOm1u7xYQq7ZPL9Oj0QJ/A/YrK1rsEuMEVjFWnGlN3NW40nfZ+Tv/GxJiNVcjx/AtsbhoP/vw9MZTzrdqECY3xW2L7OOXLZy0eCWXcNa2dCfGqmiR2zG4um4rbkS6onNudVY9UokT1O9utMJqL04ZtusrFCSbvMYa11NYrUZg8p+qEdc/D40TC+2nTE8xBWhXRlfGUnogYe12m+GrpxilI/QYM03LklOG9eDaNlJRxrJfEMXYxbkDQX6+zU7kI54mKZh1UBI7ZZpLz1DgB0mRwIWkKZpVw40YVnYlEgiq8Lq9eLKbKO7OzK/Y4U8PeCq7cwcBpyb9itSzRHR9aivFYdc=';const _IH='aad91ae27184e6c180c2e0a9bcb779cb132f32ef620b13ea8dc7fd4de52b989d';let _src;

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
