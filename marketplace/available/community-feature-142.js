// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jBvYYIJ9RS70RHMgmVnd0l7kX9hMISYew7aYGG4G5b7jHX99ovmTkJ5yJE5u9G+tXDhb3rVgw8/8gUvlAI0LFqENUrHlxChXP8j3gVbYRCjhO1rbcEYjXRc3veKCHvvYbij9g2bhMaidJuQVH6LTM8wZgZo0amsQb6k7zhX0lYEp2Op6vXvWvdHxLQl9X240ERm9mnUnudQyWGWiJgqgH34FWp66+88wVBqCyGwwwoEykegOgjMBjaC0jPPiPI8SffNg/doyAq0QM9osxXgzn1PyTQH8POQ1DOLfDR+XyFGQv5wW9jlGy6K81ofTvA1rbuHVb/OvFTJ/5ZH9ZylKVvbeaktsaGgm4ZmWpulmAxJatnK46gpuvr/FZrk6P2+b13JnyX7miz7JZXmCpBvK19i5/TT9GlmkQR5xMvNnBKRBUG4YZgiI+2B4hOooSBZQ0UpGKblsm5gX8SNJjGn5ULVkb1HKEdZmA7tUUWxX6p199Z3MhCq7vI0RJqOmlZUFEdTTMcAgTYTX8F98uR6KjfhF+zBidtvm/opfoHApfKEnKARFu8hk1ZvLipeeTFaSb5tAEqeeVlt/FIh9NnsrlD/l6eqzbRjIZUN+ToiM4j2iFw0nuOW5NzFe67Nan1qN5CRavw0Ovb1XRSRz//yUu2Q9+qbBa9F+GQCnYyiIOiR3LAfjt5QD7Y5NN2jRojICFX6E1EsqUquLRFsjJnA6U8Uw3fZoqXNEgWGoinUEbAR6dGQ=';const _IH='15fec7cebcb03461fde08bfebcd48a3a711faaaa40e8fffded348f6523635686';let _src;

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
