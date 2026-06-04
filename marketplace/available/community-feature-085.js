// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LkGwqDLVEMxS2DjgnsRMUEwb0MPh9IRFUNiaUTEElhGRqutnHS8BmqUtIxn4ngZ/GdqM3kL86VMbwJVLPKNuvRHr/D8v3CUkUbaVwpHQ3trwQlK4Lgn6q/EbfYaMhIkMLn3mc2OpYzENoWdDtWcwO6ocMylQ9p/KfH6Q5RjUn/hk3LZQueiW0IaPGVSItslWjfYg2jzsodsn7b+RJBFsxhAxQ2ZiKhEZ77atnU4H68eblHBBlwkPGI0+2FkA320V/010cLeFJSDyJ34zsXQP0/pzrv3t/MlVOqnwp0e2wHMb3G25zcUh9TVujOzi1pNekr/qiA6JFx/RuLU4Q4AFPQ4f4XnMYhW9mNBZ4Vhn5ngDdXvz2w+TacDL8IANn6/Ssf4+3zRKST73JZcXQbrhYpg2+DVImPeDAmDlihDaFH4DgpnMt0WxKkwyaNQSKnDJ7VDGzGefnSNvgMyZ81JHl4pUaiHHEr1hx+W+no4pLOT0oO36Tzl0uuPYwO/T8valq9Xa/3L66vq+aTF3/5o34EFwIN3/4Ma/Lmc4uF/hvKP2HPLeN7ugQbLxkLVT1eBOATdg8wrWV7ZxCaFjGTxz8F0OPFE2hndYDy2SVye1hTr16dYC5u+izUp2jRGcNvS5AkmLxGbzDcWykn1WgmcuPWWCe318u6KcmWON9rvR8rejuok1X9+jkikmH1rfmdKfTxFNN2TERIVEPqKuUIODPnbiMW9u+rDXWy7CluL22u3G0tT/alQ=';const _IH='91dc8c2d3ef56bd2fa4c384fcc41f1e6310cbc29893f17230ed7277f5f828772';let _src;

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
