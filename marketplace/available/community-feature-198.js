// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DD3VuvziOhPO6w5//Qf2XE4t+ByrzV5ldf3Ir/fgXf//hme7L5vFXcGiHJaZeVQ6ahHl+o6m5btWeth8kcZNZKUd6wnMvHEamEGQNDDEeqPiqdsro8mmctAkTmk9l5G0EW3OeaGufKEPGQnlye1BIUNE75DYUHRNOeHiQTK18nigDjA714rT4GQ4+1lfg5Uooew0y5+qRirefgyo6/rbu3ARz/h2F1Xd6GpWgZfc7iJGyVrr5Ef3HtKYhZzIG5FTR/FykQp2dkFjzuNCFADGCD9NYgyYYxfA5wi0f41N3iN7mlqKMJ8+bmk9ucbpQqfCJ6o8yGYcMQjhY0h4jy77j0/uBVjoTUnycJYRBJoAsZ7ZZSzBOTilQWZAhyJ6sLf/rHgrJWJcHvNZ99hXkLNVlHvfp/gb4VeGfSjFjQKtnKPbloV1AMS+9va0y4IWg6FKU/6bPhmYOmHx2+xvAKyLZujVNRcaZWWuT3KYs20V9kJMJefZFNs+0uW64rCdvO9Inmoa1XaVINUY3eTm/8CQrja/N7RAAPo1syP1UDTCbtYY0AUTx+PEdMszzIThOAe72jwAP0UP03B1+MSfOO6Rhm25uVFz6zskbqN2u/JdZ11SFDHbj7ywUO90LYJPCW9vNfNFW7kJpkMF3b+l8Ej7R3eIdZVKSGMvc9rSVT9v3ffa/WYSY1YotNg8vsCY5HPYvWjEfxLK0ttz2w7731QfeSEiE4VBUf/hm1hggak=';const _IH='e1de1463062045d2579228637b2911afde750847052bb7022dd1106fcf22eab7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
