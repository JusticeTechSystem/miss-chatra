// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6B0l3y0PkX4R674KYsQG8aalLc5vPCHLQplT3/wIMqg6sxr26OOggJ0VkGVhAcLOxZt1myG1SHeGI0MrkRhhffWePHLm0GqIpCH22urrdgw/lhqB9E/Lly9SFSiTB53EeFpqc5SqO1kBe4eJaix9QoOGH7QnXnSipm/tx7fcICjNP74RB6cjcXjF13I3OIJkEHIXhc8SdHdB9zaHirLsrYhnKOmcbs+0W2CMDbqNLtJKVLbrkkiMwxXS6kXZKzrRiO2tYJwtbzEo31Ey5KPQbz9WgxTbelvD+xFoQOzEv31f+qD4rRA+p4f7YJIwWASogsq8gQ5gtq4zlO7e5zKPscWefsvxwl/6Lq9omdaiVwSs7YEEGxtDpzTu1b2wshcLvAoy2nY+68WEYPfOau4lbUHT7bQ+u8VhUClT6K+l4LVZplOMdbFGufPx7OdOFkSx6ZA3tWlkrQSHOYzZgZCOffs9r2eiDpvdPhMnU8mHM/GvuIyQ9Fuaw0mUJEniXS7foq42mrkKVV2JW9PlyF3r98or71v9jKXdSFOQ5kuRJo/hiKQ9U8IqTdvjiMksxa7/kmMiEFvqWLFeFvAQIjkp0ZxJ2OYa+gg+EtJef8DEuxIVHJzYJwMmZD+wacqWi8E17ZXhO1NSvUFGFT51IVOkeVJwScWuMxNYFQsh2bGhrN0QWw3c12TMwxf7PAhRYToFSe6tmizeg4To8oAllnBquGyJmP1gc/DIllSZ6ix/j/E/QV2NWxp046PCyUH9ZqKm7gLCgcbOztHQhkUu9TSqA85V8UAgUt841+U5Rnfh0Ux2mXCZmhSK40yeZDoBi5nmLb2jtnlo4pmQqBQDU6aEjstEusTOmDYNA+6KzTnciSt9hT3ncGQ3YPGnZ2oJVgb4JBRk/GdoIJqxHMq6PQ99s6zciwUj7R12kfNVioHdF+6jcPsqGbzRSiWn0aaPD1fWIYujG/gf5S591XyhnnwkLHbi+8pPNFnHQuuhQr6oSns9woOUn2u6JWI+ePlvbtS0F8OVov8ozzFmupSCAKoJViRhNQFq6VKB+UYisLWeBbjrXKdn0OhFrfb677wC0ut3OTZGfo4YJ8RhvdWE9SW8NC0A+QAErTCaBa9riDX/bAZsTN0rkqYjIvIY35OmXUMxr7IRkF2XhJcXh+4JiGZ+Z1rFLtEJmQA0IjRhJnPOyMGlf3Y8bbb84CccgZGdIkZfs6YZiVaEl6tKO7YtNXQa7nGnS6Nf0cxnKV0Oj5PK1MMPRFMrJyh1AilguR57IgLULTnglNviyWLkM9CgPwXMZ+UHTYtmedzYDBm2mCGWF1d5oGQ/6nD8fZuAFVCvCxGO+VnfRdwfoBgTzbGDI9B6pLfd1X6MlSRsK';const _IH='5a05e735eedd40458fdd0d1dd77f6e675793f8fdd04205b31f412fc586000091';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
