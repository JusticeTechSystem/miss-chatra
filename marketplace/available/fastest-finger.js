// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ps4optdGPXaz6QprMLgs+Lrjo87Ua+aAkOE8EUv1tvOjMnlru/xP97GLCJrmqn3bYbLUXiG+qJS8Trn4k/l2seT4gFfnvQDni/MxdprUyx9feDtnCQdbcIvyokNFTW37CRvYzI32akkyDqTCS7mHMZ/g48Oejg2miy9UCdrZCVJp+TibS3nC9+Unh/tqDx0mRl6951WWUl82WqPkc8koD0pKypBjvmBOkgfDjXkvEGwvFG6ZMBK6f5h1jht4TwQQUm9a6zRRDl2MNoDzElIWy7L8IpSPVen1R+mp7hko2kg907+3enHud2YvpxJEpokW7LVJ5nxs5yK/mRUL2A8/hPoFsT00VTJO9a1Fk3cKN6PH3+VYrqz4qgotiZrZDH+htuouVmbCY7jxAMqIpf3t2BaXOBrA3DuyYvDXy6m5a9zevskwZZBUAunEQOXP82EbWHcx/IhDOX6KGtKUTY/lVAWT9fPCQJSCXxTBhUxW46oQrGCkDO8jukZhqEk1ecZhGk7n/1c8G2Q7AgLdT9Jb4KSAyEjU8uTmRp0il5SiPTzENbK2K2cbg3/c0p62WrdMcbis5LBNMNtWjXKVtK+kEQepzL5qD8dl2TcWzM1VoWowzxT6m6S3ts3d3ZQ2srln//qhEvpPpZlYV6DFHwtl6abQ763gXuMwn0dbCQG02puSOAuF906y5U/1kw49gndaHC0a9GvocZfsl4mDHIZkCkaLQEofNyCOdfbLfPqlbXyIohUbJ6BHIdICc0ivGp7AzGTYJj0c/YEVe67kMAQ58MqilCfkaSyTmteSqoHeG3Vxg1XfCtpa6rBpaNOPQk5vigA/uS2SCIuaeAD95sYB28XTwyYQWchcimJ8t1nABJTS8q8Oy0DB082llqhnzYWMKul7W/SuMIfyn6TY2BZyvaVSnfQO94/MWiwHSPPCh1fd5GqxTkjxnz0kr2gmlPtYdCJP6u5Kg10nD/Vr9pMDmKFPByNOoLAb5j81uegOR41ij4G1HLI9QdSrBJTUen0VPSC63n9UHMjMndAyXc9TTbSr/uF9a+9djUxhR7wjtqXj9lcvFyC7ixXrnaFP8DlUHTEnTgbhP06irajaBCl8blBhZ0gB9o8g2hP/n4HvBm/PV9co3uD0MbDmeBbkQyIJ3bFSh8WvNcYI1BRmJ8eajSlmp2Xp3hIjXDDy1nHAtpA7/9daipo1uaOsDgQuWpxGs0CiOG8A2Uyc+eI7Y0YAZZWbFcadEr1S7xnHhJWOd1cWEpe3s9gWPPOqU/84q5at3QT8u68Sqx+3wS+lCHTwk9fz2JKHpkqz9WzypEIBF3sRfT940pydDhoe+doX8y8mYrVL8u6S6081zayaYbAMugYJirWEsw+yCqSH/9AA77e5c2Ai7epk48zVlVpU0F8rD2VVIF/T3jMf6LG2we3RDEtZA1wjBmDOJprH571laLJuFi22IZmGSeOd6w==';const _IH='6b47ca37940ed3bdd4e9415d0b71e99e298e4729587444c4eb0326a7a19ea3c0';let _src;

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
