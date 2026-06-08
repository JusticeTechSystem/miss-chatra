// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/A0PXZfDsQExMOEpZsZf0UdMfr/+sgMxlI2OKzZkySX/MOKNwUqXPOP+XS7yJUqT9GndH98tIrjJzOrWD5a5QUN7PTK3AFRbqD1eCzBDnXl1gpSEyQNByqNHxt+IMxAACW9srxnvn/7oNK8/ff65D2JXfBqIsSSuiq52hONf+YgecZPdogwPtTAYd/hnjyaWbz8VmgyE6xBcwMwSjSQ6qr0pKzxEXcM8qtt8ptyqfQkLwx9c5rj8eO8dRFjTD6X7gTb4Dte/WETXpH2yKXIJwB/TeGHlviSIxNbNDgFM50XhirQGJTpZ5Ecng5xboL/s372E5hPGp4JdowLFRcrmzI3iFigGsGbW4+niKzkrQv9vIV2Qmu/JxqoqcIRweSg00hmb8s1BbrbgSGP5JZIJ4BUMYAd+EYI9F5MIxsI9SSymf0rWuTX/n8XJxPfjqod1+nyxW78hrAKER/btaX8+Jb8QoyqBPzE/XtukYWago43WJfihhNSD1xh4iJFzixYox02KN4/cuDYTCeZTxTPfHBKm/KeGuwEwDzFcQ3lPyFYlA8ElvvTYapN7+wCNeWgQukdaoUT9Is+oHZiw20wEM4nO93+SorCHZFhTLbjaqTAjUCw9nK5DAkZKWpzMiq94QmuHBQTKnZjFOgWy6+3UkMJAOh2JSoGOoc2Y++lT6sWXtyKBvTmbPkLFo8EPFTYSiybr8F5JnkIDvJfgvVfFDUYI3lKhGxcxhN0OGEuov2MMVKjAfYqCRGRpVDjj6D1S7nFHPYNUFVgzcaiaLQRQpA6oopDWfQfQp4KQ0i8Tjk2JwsZYxNzouQKagZ9X67p6/icUFPfzsfg9PTGjslE4T8WEup783yX+1HLGmwIr6i5IcEASA5/VFiYT4SbdYo2ogVX2/z0UOU0sNkgaiMiY9Gb5HQN8Di3KopgVGqx7gj8EwNFHWgbNLBp2WN+S96FRd6fm519awZfVGxsX/C2uXRnWkvVNmI94zubMuQ==';const _IH='1fe62ea67368e8c9c0368ad9c7234b8bb7efb0c8fa7c3719c8c2670e4c527b12';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
