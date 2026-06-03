// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AlUzczW2zrvWgiB0G0MaMzLPjykjPwtifHGBpcYK/drjZ2FT092ZZpaTt4h1060D7bFTYYnRloOHMIKgVI7RFIiwPpd0SnAH95zA/8s1v915qT4OiQre1kASfXR5cTPFouRw5EVugY8uJw6KBFBYXblerkqPaxiW7/QHcRLFvEE085rZ84HB9/yDpj3v2zCn/Nt8SKQiy44oJMiEA7m+c6TUkfShgLjHt/1LuOdFWeQAgt0o8KnaSg2zJemaOc1tvdDZQDMGi5VjTkN/cwRa36CQ5fo0GlgosfXPWIV4AKPw86NuKWW6RSiWaIvWu1X9H/OyKNQ5HVclx6kwhhiFc+iPsTgDehZoDWWXLmRtL7/f0HhTq9JCTPPD0ZL2MZmbxU9Pv0E4HdfbaumK7WA03BASaMGVpw7GfQmcEFWEdrklw/kFbrwezs8inhsN++68bGhbp7sTywkK8qr7t9qv8GOLr1MSFLcxWFMQ7eIEzk6Zy2UVgUBDZ/65Q6J+uJfA4r6t1jdwVYS5e+ZaWDodFSdt8zzEHt/IlN/W7qpleIMd3d4c7W7Y1nHI8igQLgBKEls5TaTXdhFSxLgWWpwp8jpmqkq5HcMN/rFf9EgUpE/FAHiQy+7Q6p7BZNdIRA1b43+OY/1l5bahAl5CBJ84pPhpeTFM5JAauuXRENVoetvUYwGAz0mnPtycVaEVjAjhLt2JQ24XBvfddg8fK8ALn+b6XdrF/pnyfZwKOsx+0UuZpfsXOi5usfgg0qiOnT1RoQM2VZmlA6KQOeKbmKTokCF120gur7DSCYaHEQsCONGTtf8H/y3gyZ2WI3NnpdKnRM7aSRBnonu/pXhImL+MlNnSm5Oajzjw0ZyzpRfMC1cl/Vh4awlN0gDa44ViTIeUzC7AWI+pfS1LqZ3rGxA4b6eOhiW+9tEqmPA5XVhsTCwwiZFQNGcv6u/J+qLfvz/7FMMR9K241QIm7JofMBLYhepIMwsMjdH4FV6fgG4YnwIsmh84aKlKdEJreX8Sdl5k0CXJyWZMuSGath3K7j362GSR0MMy2fNRQ6YBw5Xxd26jv8HnU/6BevIvOgdlX+5A3UxwpLuI6SznHmTcbnnuo/tevDQM7Kd+eZrjqt08tNvljoJLqL9CRYEhCN5d/SYPJfsih00VX5YQk+FMarJyypYd27t0nvrlvDcLuyMyTXzJE2vf3bj6Wsf2J+YsRu8ixlCPjp2chA==';const _IH='547972ac2cb0b13ee367432623a0479cdcc7c5c0247d01e2ec65c937afb99265';let _src;

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
