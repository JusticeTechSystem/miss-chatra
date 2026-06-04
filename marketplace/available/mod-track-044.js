// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hYakJ1ylvbY621uVshY8dGW+xT1m18UB9B4Cp0GNvDgJ2S9t+upVtBlnGZ0XuHqW4tr+0NyVr104GgJbb0pCOVmDs1TFapA5jKbjGtDv6WZr9iIUYzuWBbU2d/gevu93+vlWfdsvQ7JCSCVt0fQqW/el/q4eG41/sFy1zz73rxcm2ZvVkUmQWN5rnrvTeUoc363Z/gUK69l/hZRp15JPdeBAZAo+tXqsw+Lt5F1dV9UFw4tk82106Qt9w2+0Cwk8HYTKfX7G1hntn0tLBmsQcyDKz9RgrTXn2Q0cDExOXqzN9KuFYUIHfUTtxP9/1qHWwq22Qoa0V6Gkl2k2GLQFtSpjnFmMjwKvzR5gLOfACS4SK7VCv/KGVyAczOMSYh+FdtNOycs4dywrTVo27BhdUlTGVvJ+qAJwVNCaSU3Hoi8wtSQk0sQVPANcAA9PKRqNSIzE5OKT9Recjc4Q66MSsqij98RjEYxbFqT9Hkk7LbbYSS+HddGlA1gpA8mdpKVPXESkPAzSTgiwZbHaEzDKtSSA7pw6eg6f/UPT+Gbm8ZpzadSREQRDCxQ1r6tCj/nkbxywK+NIDp2n4ms6IivATRPncS72fu7+mF7LmJCj2kqt46CRfRtGGGm5G73hbdtUCOc0FGCqTpEziqCHG0D4hWojp2ILuGjdlWUryg9zBCrsA+LbRs7b970v9T6984i5PWGA//w3NfoR7JQ+AISnjem1fxQikaBt/5rsF8B/h7EkajYXugiXTu/bECjzo0VPgE/BZFGJ7zKpL/mfCnOZdc9QPj/wl1psaZlP3bp4rHP7RTyaaBlJjg/H4wbUnjoUlySnYu1QYkDfmxexBYJntW06mIAzOocELz0URZA1i7ucoZoAqYa0lZEL9C1cNTL/HhRcGLe9cOaQvXCrhJzIMw+xc2nsoyQvQSy9wDbWcz6xMuw2/U4GDgguDfdHx++j0caUKCh5TYG4OYykU9sXAyQGSe8ydpSIWBvecd7gORHfVIMUBcsbbkN3qD80vHB2CRhcz12BTJsLoelnf6a2HwL2YiwUhil3pTAGVnnuHLLhcjXJpxxmkvTdHKIyx8AKCXD6UBDat2DoI0vhTRspElLRu4fWXRVPgwaOMknpygX3y0tUSqHUmKaW8m2x+6mRZ5xYVgt+FE6yyasOvC1guTVDUZ2IzWMsQF/kdszzUahpHFsp1KULw8RoOhtedWeKdeeMVkeRcuPNFNIFHK16FwuMRn9EH1PAhqD5nN/usg6JnsHMx5MWyqZ1PUfSoNVXfp7MGh23D1UiHKyK9w/DV59uDjIYlvQ9SXoGighGsMiPOYaVjr5S8S334J+J0jaGH7vIieh7EhAkiaGrn4QotePm/5fX2/4Dqg==';const _IH='4b8b2ef6c1b11e56be8917bc6b82be0c3ad0cac6c386aff3a1d3d93b18a89e75';let _src;

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
