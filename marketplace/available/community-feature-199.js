// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u1vV6skLsJ8JayH5IwIFeiwB2Z3zLm4Ba+DBwEEZJ5EAX7S8JFYEDNwiquFw/Do+G593KzJNy7dFoQDvhfp4vJy8guKk+I7EIbccdPgbHli4iQgqTNFsjtkeS6mJr+D1x7jDieBmfnPOchFbzptEjulLrgKMh+OWVn2I7DMCy6LYUC2Zczyv/0dHG3cB033A4/GCT4jx5W6q3hz6EbNZf/Od+i1z3pMh8cVDtPe9dwtId3nu7T6LfSFtZ5bz05f2Lo6vmpExg8fapn6aMznBFLB35QETjQvRr3iS84ZAlpMMcNSjSueQWmZPpTRoxQI2o6pp4bwS+o3ptG07Af2kev09+sD+Da/bXbVJnKgM0/8dpyv1db8SUm7JOnxZFbZNwJtqKKpGRcpoSgcchi8FU/Y+8jxMbaA2WhBl3Sro1J+59DEtpQlCXSDtOV9M9hHnbr9QHBV3N8b1TNyQWUpX0s9BuElKbO4NxTLSZ4hjBT7wcx32JK687iFjSzNfxvzH6JZB2ylfFdpXq1K3QLOBN2ozxLmxFvNnHqbliIU3+ldfrjRsjjtZQUt74vzhx9LjN4PoN9u1RYYfWK7tjo94wLy1l2HNEpBbQ4smsZHzo+lWSNOY7R+ypJbXahX281gQ/4Wau4jxa86Qc15RYxhRNBlO1lpzN+9OYGXetTxHcn5BuUfdldoS7/nMuvxNeSIjy/drBcEnSqhf/9cXA45+VlOC7/Wrmjtj8B6GXxOBUW4ihuy65I8=';const _IH='6b20764e985d6e8b8697aa689eb3d61b00f2a8b0ac808aa70a1ade73219197a7';let _src;

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
