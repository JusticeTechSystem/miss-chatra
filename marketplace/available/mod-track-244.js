// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sCfPPwPfTFroCLLyUQqxs8NenS6EEhhOzsXRvC+EfVrRacvB9jScbickp2snibd0mffdPZkOscKPxk9rvkNmHmkO5or87zHtsXBjLrlsGTs8sZgJ5JuNZ/mp74udioDqyWvzA2jn8RPfI29ChqTBFgnswL6Wr/ssb3Z0yboJX0+bXBb2mGkmrcA70eXb74rfsQrD6b2PoxHP5512xIUq2vbADmeEYZh0MwmGtU5Tl+roeqCo6YUORN5Iu5Sbh9mISsWujEmeV33btBz/6tsXY8zDGmwG/093t0wlD5iTWQGGl5iv3vweOeIzah25s4CoMtZDo1JhGQJhDByfwLhMdMIvnMpxdzyW/unYKKPVJrxuuPP9GzOf0KTLqH0/58QPx82d7m1KCI3I9FyimvJGMc8p21JD/OIKX/o8zqmVU0EzD6a3Ic48yzWACuYkBc2K0eXgIUQMec8k0yvLjLxMcgIGzs/ESbXrW/ZjNpdJRnFu7aKYESDDp8Z/uiyv69u+qmop6vH3mSEM9SIB34Zv2/YqD3qJn2oASA8X/HNXO2CpKFG9x3+ATOHJ4/R9JDCfmoon/PJBKc4NieXSyyd2x3jFYccc8uWaeuWGp9ddlDDl3HoSucxqwox4HUIwkghVBW/qNpGQJVAH5quRNgqMQkUhj/+tElb4VyPOCzrBghsbFwrC5hQJexXQG4MAgQaRWcLTO6xEShL2QFC0cW47jrRbtJAtJ14NXGCvlz8eHlevRkq1nHZSfUIf/MzSwCuj4ltndnlR5Q/cMJqQ40hQBN24WgeWDbBgKUjEizz76Yw5YAM/Wci3aOHVctKgabndxsWlVhf3PSZrklQf9wl/M0+jnB3gc9xynpzdnxZYaUdPrySIx+nfctY4d/ZHfgW+dexecLdLnRpGdn6iqoNreZlLG71jY5Wg67rwxSYv7hL9tyTKj9fjXHtGevDmC+KSFqyKTJG6AEjt30Dg2K7cbeQlXaFe0D2m8531xNMQeLgwP3b5eFFo84ZUJ+3Kc5tWSt1/32lZs4UPsEYC7z3+daibfxG2szautlT3rZIde8AtDS2gdKLIusG5DjTBIHdmAFPfcqut9+cBZLpLUYwr+emx0Rygkx4PeR6FtGkJjs46mbkhaJd4Fjek51PxWU0chy53f9I6q8XaFCcOJUyBvlg+UDoCpn7tYoql+sfAE+hugtbhNYFqXtw4p49TbblulMNVEnL8X7QgQEU/x1Bc0SJvoF8pjKxj9jeo/hInECjJYBftC+4NEVp2QLebFo5zhENWpe2p9jTLtc7lhYga3wpEhrNlX1wPHpI7cpI2JSYUBm74BVjt1iUOW9NMrxlsENTZkyMCYiI/FpCzZX9TlKzzFWlUu+YrACS28R3y';const _IH='79c6f1423a18229f0277180da1633048b4c83dec6095ad04b945a408b0a45d79';let _src;

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
