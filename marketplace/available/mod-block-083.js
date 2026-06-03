// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2U5IqjvkivmOplqicqPk0eWCyPDat1LuvRqWWCnHvUTj2SkDtWjXHPJGbeFe4nJf2r5DYZLt7GlhYNWnaBRSKrmRp76ZE9cf1rM8NbT++qtXUrkRdLLGeS6LFRXmnAA2eR1tgsY9JKQPxE5Qnmk+uRijC4OVVAyOiEDha7BdmtWCyOdN0nvITozKaMLSM08paD8ou8l2dH4nMJx4MtxCgL6haaOIVa7PEFTPMXcwcFjjnf7BovtlwAehQsQvOcNokLkDiVXJFk4vkTF+YBumy8F7v3VF9CftG1b03tEDgrhD87o7i1A69pdhQ9CY49vpQgEeVo3pHw8V89Y0Mhs1oT9dAHXFYozX7+GLzS6TDz3XV5cOs+YYAmVz4qCPTGafuHIH/X0Bss5dJCnIP4nE4bKOPvqL+jD4wrDZSUHZaTXabQ3FeNuFYf3MPIuRjcXlRjBGRwSGI4DNFO81zu5g7LT0hcy4LZ65MqMZBvqs19X1aEY1BxKYulY8nVtrvVeZXY9R845B4Bkniwfw3cCscVYA1HYfeuTFmxtyf5zaFPWivx+DrvOjMdzfH+J7P86Z8kKzDjKgrRWbP3KrZUGEsm0gG/VDz4wdAz+W/tuOCtx7RGtndoHqvjQ5vuAAaS3rVzvITVWsdv6qzKBSg2OUc1QXpl4yjd1zsCZK4+YAUg0kHBzTYpjegKgBHBFKGAxDO50Zpvs18EChzwZ2Ri1nxH21U8N+GuIpqM+JOgP92M2xbnJs3IY15I306y1qO+gVtlBylQSKt46tkC7o78h99y0zswpLqWYhNEfuPg8tZq+/ULKh1fNhJHLVjyHjfuoeNmIqTV5DMBoON5enpYYsbxiLPFMnq/K905U+K9y1JkrcbLtazg4dP6mVEYvhTSn23eICVGwMRlxAqVVgy1UpHOi+hI4MtG5/LKK0Bwr2kszbKaDpo65ouelHNJ12TUSnZqkN8/f2aesi2cz8E0BtKe/yZarffoPq2aIdAVfuscoP3R1dINkMNbYehMOBijNtdUiBSN798r1Ywzd0b9BawxQzP4amq1t0DA7XFqbv+0aes2/8F14sbdVA+JstO0l61ueJCT/CnQGAJgVULKDi7OhSmLA7DSLjsTy/fOmIl4XU8hwNpxv2dlOWXECMi7FwldczG/BYQYuL58P+yQFJMrXacFGtwgtxrNgpRjEi1NwgEHDtj0UPuWiRMVZTVyj7KQ9LgmFvxUbBZWFHk1Xf/C0G0GLnwoy9nMv4pdGPRMymNTLNvGF+R0//52eRSmmeMAk6e5hn6LLVmygz7mSsXS+2G0chl5C+riZN/yoUGDG/L7jM4279VnbzoVcMb1aGv4qArvuaEDJZyLB4qZXy5el6C1bn++qY4w==';const _IH='226603b6b199a966f64e209e4b00cbcd488727e6003d9be7442ca2249c9168ac';let _src;

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
