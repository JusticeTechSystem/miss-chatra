// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tysm4VXuCVQfShIwsQZGWNZD8wOqZBvkLELctOS8uv1oPN6xfl0Ud6GD3okVqsaICRJ8spdb7Xl+efOfhhTgmN7O2JiptUaIi9FYb0OhzFbmGGnxAGH6ibGgGRCKHMBcwlFyz7aXjHo7wpwVNgQf/DTyTU1JpetybJ90X6oQtmoSGDpzKC6+LNhoGBgSJ+8ddukHGHbKGGkLAG8ZSq0AkLkDKdCnpPcdkkddi0roPTT+pkjJVQm8qAKC8wr6UZSjVCIEwvT7Nz1CKuhmL5qIKvFwGFCYD+jZpc1eBXX7K6kKq6N9wKL+HMwLDtp8sijXiOEenEbZAEMfghkyi8/vqY3uEBWME3+8ZeuvWL/+y1bErDXueimoWXHhEDfxZ9LECLDyMArEVOJKDSxyLOL6u7UuIetIT1PepqmVElQE8b0JW8bgTeG09IfksNJfTrSkT6TY6pMPDeSs19Q/qLLlG4a60Q0iN0OzQz0c9wdRzN2vZ41Tdg0umTVgNLd4yNkSV1fdzDA35Df80flrRB/E77+n7m0onY5h0/+GDaN+HXIwAKCea/u1MueUciY02zTUSGdAkYvE5LMmU4AWeitPdeARnrtAvRfc2W2dR/7bDWZ1C3mTQ5RA8I5PMDTnoqulH7ll1tpR9+W1mJoO+Jo5xWoDvNW+MS7GZM3A6gDd3SrFvZW6JgAaHqSJokLPridR9knIF2y7Za+BxNkwpgXI1CKH6vLXxbB4/Lsl//9fonri8FKSkOd9cMSsc7yidT2IvbkRmxomkIbj9IpRCPXBRLoE1pKRjJHiRKnm97BDAJU/lINq0s+82+bjFoJ4voj7AgVwnKNbJUoJ57dnswPnwMYAxZ67bTqAuS8SE6Lq5G8HT/ALuUQDTikpvbhadefE3t9x5EtWqKwov/d//sRsnWYHXQRL35nvObFC4t5BArmnh47WzLyoxsIgIQo49i2qmp4QKZzyknSrdvQ2l9sIgI0k1ewGXdIuMSf6L2x4g4mSuoe110ZUi+ro0xHjPtEbChO/F/ueswaFJUF9V765fOu0C/f4jJrWCpLiEwSgtmnERwFXlUrZXIJJy1OP9+8CigP1Y84Pymo4lMQ+ZlrpG59n1+TQr7/lVI9kLAjPs1jVxFTuXgiQ+nmls7BhmJfR0C+/SdVavY4x6tldcrTPgGYFo9ugp9juENUe4uq86aiXvcWsWfD7ltsW98a2QzcFnPg7y4WA961rLkRNUpMC350N8Op2dfrld6cBmLBIeAJbgIYu9V9A6AnYtySjWDURo/C7UBI+yoqHjw2LB1X46gyiQ5HQJH4nM5obsFLmf4g2YRsYLgQJvlriRLVCG6Hq';const _IH='e0f9437b97f5b88bcd78d938f24155017c1ab620964f85bd6d0e3461d2bd15b9';let _src;

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
