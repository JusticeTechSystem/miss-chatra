// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9mw/RpdJguphmrmqnCGnQXdjWglzG4CXnc1AqTSmrkkdHC8KiYGsNp+ACOZsQgdVg+yO006QphAtENprMVQXOxAnSYpD71MdwBiYDoZMMDAEjZ8Hl8PUZm1q+0axTbo6efvbqLHr4eIxuLuJDSX/Sr9lNHeyCkwDroBtXDfhcBUo1yzr9FkRJaUWXDRREWuQUDsx0gSh4F9buw+vYU1mrTkUTRlsoWVksWQff/WqWQ9cErbZyqVu2/r6QTfb+10fD4r5irR01pMaMbchQFuOXjnf7t2mkdjC7Mt1O6mWlnLGeO+g3ptnRVWrXITla3FhfatIAN25w86aPwPearYi/H9AgGWfmyrNNicbcpupPhou+QzuHEd7s3olVMqTIVUb5pkJU4sOV0go/CIUQHHRhPPP83jqg4Nw7S7OrZzLQk3jBAPuleF8s1mnE4pWc5wYwmS2wLq6iYeeaLxX0759OeUp6RW8Cj6YxZfpy4EZNi2XLi8+PibDl9HYAk5wZqgxApZc0ScgnA7c16pPGD6wWAdOyZUsU/p5fVGS6N2saDPuVL3LJ5bd2BGHBNZQKCFx7pnagC4NPsmkxJhGevQG14CnfQh/MMbkaH+EZadY4uSpuPAljI35SVsNlW9IyhNpudylak5EXCsn+ktS+AS/QD3b+5CBbr+scla2YuywQ1HwiZQIl4cpXEFxz+WUTFDx1BEXXXFzwhnqGYOhPF8cbxdpafY5/WXcBtaW0H0ssT+lVBZk2yyD/ykIj8dy4AoGng5n2SX6tdZuoV1rhcyvyGSJFU5je94A1mbg/LZBD/KhEg3DLUxNi37/V8EgLaqpsUCUHtzTUodTkQwqZOqwSFDdQxmiWv409PebgkBq0Xb9Hx3+K4ssiUf7bmmbStcw8s7uHTY70TRKr0lhbFINULU5d5PoL1kfuOvDQhMeDH9VDP7zb1a5JwLGVBX80k9gl/cvHzg2FCg5VOePYF+ng7V87eV6SFT/8B/txuc3s9UU3e9/4eCjIH0=';const _IH='b7c18b451be20d75315e84966b0cf9440ed68d132ecb8c4aed7acff497e1e4bd';let _src;

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
