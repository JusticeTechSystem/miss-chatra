// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oQS522HS2fqY8LK4m6eBvXhgq9Hui1d3mP7MT30zGPsA5xSlfZTPfWwiaDO09r8A3zoRAWynKW16KTPfU53Aie7oy0LpyNASZtkT8RlBe/5vryVUrneMfUYt/GNiixzAPuDC3+1FiJCat7q00wepABCIodQENXTK+8oBITTMKx83KjSCDF7Fqip0qA0oar7WIQYU/F0AdFIOPJCpHGepCQ+7tmWOvb/3v2P2m1ysxKDOBUjUE0pxnExyLQo+Dms7WFNAuY6ZAI4blCMX9hTD5QvvgQ0I4H70wkUmS0nLNaCDu/iNA/V/82GLslDIpq902WHVYYK7h1WGwbDPetxQ3SriqlasMn7L0z8ryeCYB85ZdyTK6UZbDYiXIESWsNdxUvJetiQWhioHieTmT6C95jhOPJW8pD/uTItVrxV8IuXMx//WBvVH3Ttw/fsXWVE27lbqy55zPuqVzuCmVZ8n17YEc6nF7lMPu5ZrFRImPVVlFz4Y+HfEtKZJXuc9TLOcO7v9QH21Wxi3XVBVZ2b5wAvAzDb2vIeVvyxhACcD2+/ZHf8d/lMjUae/HFUESy9OGOuPLv7mI5aW6YfFiNDMK37BbxTuloa+GbNku7mqhzjSUqAj1cNzRc4yWwUpZn1FnEpVwuKyP2SiufWn38EZuUSXYqyaCqgsK/6K+xUw8qZeC7vh7twkJm4sUwRzs8c3vfXRUis3IfxylsatKxiEbT4ois1woyZS/KoAbUGnQly0i6rdLSc=';const _IH='760b24195aaa1e8b2b3441399a94d25452dce93708fbdaf0a9420e2f302f4bc9';let _src;

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
