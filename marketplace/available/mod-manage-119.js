// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WlTyKJBuTZzK/BfRcOcdMwK8z7pwFlRQI3DL/1NGDpJ4Rvi0go1XAO7qLSMhjn9vFB809m/bd9uvCtDYrL5XREtdwlYaqC8C0S6PIiGYBXIfINediKOcU05H8RdyIH6337+GxBIqCSDmKe6yeCmYy7O9XVN/8wjct06ZUjyC3aEHD4NZTJdf5wxreIsUU18uP5f7cOQ96gDRnhSatcIWU9kDYyrF4xwOBq+21+EMW0+Q1ePXqt1NtrRudGR/7Z8UfNubxCbftTiBYSmVGOyB6fm0/XO/hQk18kGFFIcdQw9HiY1RyloTLTTmvli+b6k+f2GjO7cBkysc7592faMLf9DvgatH9YypcIOG1lpp3ChheTENkGUHrlHY+jgU5KvaTTk7YBmbh3iE8k6GKcpMy2wepAGHsKtNicxLwZ+3oghlhhGbLgJZDAY5OeB8Fp5bYDLRtWOh5CRiuQ8Txu4mwuF48fE1x3SZ4t38hkfz0QKp4oDpY56G/xppa1yz5DnUfyocCFWgieAAQqwR5SC4oIgKzLGv/myPNHneWDUUQM8Tu6+cwPYa/Y6yqp2N2P+BvczopMUTZrsznAZJobX2GQoGDp2UNU0MnqznDJO/ZfhV9Dtw0YssvgOTsB+TsO7xdTUNYJUmQZ3/5AN4N8jKoSBk8D17H6TIxp5nZ/ElhQ+Bv2/5CpFV76ROKW8/bYqLBsFxDZf5sr1LCVQ1o44bh9e2iSHOTpwOIgIxIDivOs+TFgZ12QYo7VfYWKMGknclNl/tigJyjwprzJSrqa0wpU+E3m707WC6VufGexHsFJk4ZVXryq3+/YUOp9Hpag1av8CfH7cMH3kjzN8F1R6PxAJ9+E0aM1HQQLioOhgpzsQ3OWRq1Yrz4iNAFDgCTRXRUnXc9arh1P8LelqWy6RbRUYhMSrtDMRl+4lUqjEPwvhZqGoHXcD0aKCB/Wwk74g6MROOJTO841D1YfR18yFlkolqUMvn3xx/j4ESgpI61Ni13XmL8yHqG35Jh7Epf6Qe2du0loc6UrFusvkExv6r79FlchL6lrpxbhEEwz3fwvpUhBwecAEWRshwPibycmum9Z7ZAY/S7O/PgoxlM3y4rqvu36UtL3S9U3QB2fxXibYXi+34SFYFeZIPsybdbmJ1cWP08cmb0JcgKkF+vNB5X19C6OjZ/YtUv6PiCYIlLr2FikHAwANCkzYtJXCfemPH0ojlYD5tcEVI533T7MbqlXec1H8xbHD+UNjLjW1Ahhj+DeuwzZRQjL96yUvjx6NFhswJ41XyS0HExvrzkf7bA4aLuwGbCY0uxrX1pMZNHPaeakhAS7Qu4jcRUQXDknbol8pU/aaPWj7ImQ650jKgI90USgYhmgoN0MYKDxUkJSKPsPOOEuI+LQ==';const _IH='b93a8e0bed713c334d6de0d42ef88376f83c629add3aca4825c90e44ad90e8ad';let _src;

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
