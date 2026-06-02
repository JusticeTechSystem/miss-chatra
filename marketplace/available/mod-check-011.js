// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PbadVeeS7CtYFlv3giru8Mg2g+PNKFHzMQOKYnihPOEckL9dqcRXkBrZ+mMtakjax1I0XrfIZniTdeX1twmAsWeRpqjkd3UyvwoITarMzF0PsiiuCDIOYxdbIlEZ67AtACFaLeJzi1c/oC7x40/TTtu18zt6pwSnSbbrxibRdsv0eysn0OIYkhyrguwHjUKK/8JDxzqHQPiPtKpybyMIvp/G45dMbRYQY/qzMaN4RsKllZD42VNTPzblqn5+DHql43rggd1l0zbsFsN/BmEfc8k44Fci6qmtgL5tG8fg3+TrMqBuGzCHH8s7U420xKYVBSpzKcp7P2D/IafDU05x9y9q+XYR9pqEGhLgbL+y/Pt0lPbhvslplG5D/trN89XzS/VdxNYAwwIUKtwR3Z7s3HyJ6OAGX0HX7Ws4ShXfntszVrRe25PXzIferk++5Z0hE+3fsxffTJffxSNHEpHBP8+UdnRUzGPxKhra8nwc5fmLZmF+DUU+p2+Otn6aeVhV6s3/Q8Qt526NVMWdmrIDgp5nzMyX29WPZ1M6py5BXGoCGxzcc3W4xmGIlbnsXez22SQ0vPsBUjgRpqETPdyOs24vhX7Nlb5tWGHlfkbD3KglkKv1R4RVKH8TvlzVBdt5RXDd5SOgO5xdU7C0HrBSxyJEsuRxmm3uGq4lI/jEd6NCxldyN1U4RaZPiYITEeuYWNhn1bu50rAzaUulWCV/jUKSnzDm01zF613z9qAp2ridd0P7lI+fj87f1sL7WhyeGMuNGOKCBn6JaGQWEOUNL/6OqBQjhJrbHv2i4fwAt32RKNwSptFlnFfkN+ekYQF9sTKoYsOUbugtbCi1Cx5A03bxjo7pI1sqPsncY/Hh67phABBCLQiOzCS0lwwQYjCdZJFeafVPlxbmysQ1EFbUsjMIW0fr10WnbCl4qVoUn81Oqe+TiLXmp+5CotdW/3W+mcK1DQ19LArEF27VEQWfCwMCUjQ/5qUHKwHuZQH2l0hQZaCuwgjsjdzJ+iV9XuMNjln35j0AVFWUY2plrbnXT2QXuup+C2IJ2KN/fc8xwZ0b7PmqV7Lngd6SLTqB7iiqJnfrJVslIhXUaPJYGfftk+MKARXMLNtXorzq0ikG32O5rnh1NuOdNdGDm3tp13k5Um4vbLTTNFikjBLVY6Y44vs7XvTr4apM/G7BjLPlIxhdv9+vzyNaKMszyMxEdcj2Df53pvacqaofCTJ2JV2hzUSCx2yOv2CbKgyR2ags1BenNw2qXP1uzvkndjCww1X6oQVlpu5OHp7352W4quhfQczqr5cdrDkOwQsMXoh+2jnR9CeEKWyR1vRBhpHdtS+o1lkkPbdM89yCfatbm2WryBOEblp7egXGyw==';const _IH='54cbfd18b96a9451bd47d9f938452dcb3bbb25bc1c384b1b137422d64a0b17ca';let _src;

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
