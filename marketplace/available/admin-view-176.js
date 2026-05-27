// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FwsjtJStbASk9G1wJykaPb32NbiK160Ljqgf8aRlzlT43kGgj71Pnx2oaeyJUFZlO1vW9iY57IDs/D9r2MgyBXyyRP+FH58PbaIH/A2n8UKQIwCgJ4JiEQfZi39czUay7kDo7NFPf2/dhZR5lacMNXNJGT7OQ7knrHypAjQFrE0QDyicB2BlqmKAtBwNt5hUjLMq7mtgh+ufNjZg576uU4f9h5vghMwxbLxSgjGq7yy+wQt2scSj3YcyZtZyaK/80azmBIyMLeAO6RprvtdRuaPUi64KdFavqLY0eeTF3n6gjLVfd+0Xx5XXU+ZXe2NIMe679+gmf4fQgm/y+yzddCvX7HFcjbP9MQAZsxB2r47X6BvJ97i/kyY0eb+pjY3Rg5epbmanr5rjGl9y4jNoEBT8XIBE9w3s2WWgoeKDcrgvOVkUmExK5tPhb7oK0JHSwLKcGa5du923z1zgfB7Nd7S7y39POjOzecYkPTE2U2CqgBaVzRng2rldIPZkkHTcILVB1RtLCz4RgGqE7I+s9NMYVrj2pDQoU4CiUATn3x1VdmTPf5U9qi6vweulqeHIC5Po79ojtHYeaocDrhp6usU/xZE5Q3HNC4Gi1X85XWCsnJARV6F4AWFe5L2ptlePCXsiS5rL/iwcMXALI8JlSjlBVh1NPAwbNjI8SSf4bYayY9OWhrS4FPx9ORFaSjCAQnG0a99aZV97QcFEf3NzM6t4ooh995uKwR3X58bi4uE5hHQlyKUFg/qTRc6iOcn2s1kq3c2aJCCsxaORPstpWD4djojyFKzbUeFk74xYgs9z/Xeu9guqkHF83x2muybFj08w2Lp+3IBCngnj427pfkLqMtCc4rKXvAnXa6nIsC9P3QiCWPSQ484gsD6le8RM6xX5waqMm8ZZdzmdIvc3lyG/+qOgIgCHTv4hbZ837wXzASjJcRSckV5i4ElxRA3f3v4zzxvbB8eSHWl2BsNU21plXELKbviE3BMx3HgZjtCF1ec=';const _IH='20dc7140b28f2142ac5c2212f11e1398817e9fbcd6deb5694e704cb15e3e553a';let _src;

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
