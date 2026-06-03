// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nli+EtBFh1Kn0CgMoAWvi9ZuH4HLmU7muWy8uQhRumpFZrHwhDCEUW/cB55ry0kOP+GmDKaZH9t45s3f6vw9YmbpCxrhPe/KvW6lRrRMYRQ/7utXyBzqIq/2oFz7M4i26MejGDrcGFAfoHy+0iQkb5L7D03EGhVFu5loS/yK+x/BW/uWE+xGNW5drmM89B9FxE56OZh8dOHqyrbziD6xTzjHa1vBvCLexii8vy/2oNoOo8Dox4K3LJjIDZkLU5Awgfr4mq080HBv0JKi49zZw9f7TQw8UqYZX3sw31Kbr/cv+WGOBZdbyhaG4kw2o5FmfLrr213Hjp++oCeGgvIfPI2A5Vjok1eaPQy4F/z5MbSRBOKlcgJ6A3DMulznhvqLn7VjCEWqjvpeB2m7xiFrAnL+5ufTL/4CP1hqGwfE+Skyx3XzXIxohXnV5Z/tVkJBxHDZsueUPU0HOQwYZHjKttrIWAWlUKtv1u+up7+VOeRTgLJVm9aiKiVPtGX9VWXltAtPcRT2tIFKhbhUD3YoBnY+WFe0zBOF+NgUjUcJbFj3CHo7S4knmEnk7n4Nn/C/0W48MTd0ym1YgqptUdb5I+oP62oPrUSYFch+gU+z+pF1Y2iQ2qzrDRDPJJAkkrqMw20YiVwQMePY7gY/iwytSfFDoQvE++VuZ0hV5MIOAADYjoZh0if9eqeku/0rq0N2Ni391vVn9mMHbfRwfjNxgDoff4M6Dh7QXhA6KcLuiu3lSfmsX7jX5Zo242UVYRTKkNuUMhnhmBUtMJ35ve3E6OHvwxzzCxMtmnV47JLAgTV63XyqVyxNNCtBp7cHovC3x5R56J6kBoUvUYCAuQWX2ChMW0sCIen7bn7q4gLt6s+TxnwwhEvUmyz8uAOzTDZ2a7ik2beZhLxZ+XnVroMw/FMyVR67YyAcwCKinnKrBI23b0blopnL0fZNh6n0XI5sBWlrZXoCf2WjZ6bq3bepMuFsEI8zJSQsKBJ/S45syCrOmhgvkaU8IkBdrExzINYxEwfifueATo1bdjsoI/+j333/zG7J1v16nMBxY/k7nOgzk3l+LJ7X3mYytGBLYWUUu9NPZtWdcvmseRLCKuSq9bI15W1mT378dRuxvsEzUgdcSl2LvBhNIZoZEVw5PXLtSW7JVBgR/wGWNCT8oIhvQyjpr6fAqpAJ6WyyL2AU3ywFhEw0Xfu8XVBo/gWQ9uEAuEe2niXtdIq7la29v3xevo5QzBY71c8TMsIyKJJlII/SXlafj0R1WFIxtn2zcAmfuToBhPSV8g9j7A45cuLL/e+oYvqwovCG9Z8/QkveLb4smehm0ubRWf+9EJIOQ3ZjSVydggvUudaLJpJoA6k5XE52FzMXqkek2Q==';const _IH='ee2dd68aa39dac93d55dba65c730fde9ab5bd8281e7d160935de051c92b18573';let _src;

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
