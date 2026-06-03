// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CACfTTEeZ0fyp6Ay68bHqpZJUtVlw+xc4WurfVvk8ehw607RvonHmvMBi2VxegY8Sw42/sEZ/6ykI+x3oCiZ+a1GnN4YTBu2lJ7h/EmIwq3tsrp53lWv6ffYVjeko3mcJkgFggbm+/LRvI+lIqDO+kclzNJE3Vun6AVssRR+3oN2pjokvdJzH3Ga99fSS33cLAP2V+vpn42eB0t7wOECGAFHfkuwbIBpDpbZVimUzHqDPjsVomi1uQ8kny1drZB3sysfHniWMUc80/5lgjXJmoRb4rlsMyq3W0UzQjXb11xODAGxdLaLrBJPwYnj41KxR6bi+g8vxKH+8d5P8Xkb9g8HfccxGKaItbTvp2yaCqKAO75PE/G5fbTB93JmHSQdaxBGWhDWVeCAok/KtUn1Rg+49Dhc+G4nnb5ahJ8YozwEkU2y7QUdQiUcEe8L8I7uq/W4OKAkxnL+Jz+dIn3petLbfSXSl4B3MekDPIUD/IkoP3IQclxoAmf7byuQ7vl+megUOUsibxzVRUipPUH3ZNhPa0qkm1ViFixWnXBqiLujIn4vlYTU6rCelgbfLeR6OZEXz0ntD8lRp5GqW/JDNkaYbg42GVDUwnExh5hh7DHqizQvixiQcRIch0wyQnSlfev6eQ33YZstR5mHhVyTI+wRStD70USuwJ/sXrwO9qyNg6uq7twoLC0y1as6A1mATR+I6EPr3I1KREhCXy0QsR6ShCBSWw34Jc0WAHdQAQxEeR9J0WKawPV8hhiG25D5AMd1sj9YERHp39DzG375drd5a+txfkfJdC/lltnPi2FlcbZqOmZcxTFJuL9J/eLtBPIJXdStGyqZtgp6+W/XimY7m617/77y5R0yS+eqzdyJo+FNkVk/HLR7M4LF/FT/wv5NcZLTTOmct8zUAaKv64/EwMmtnKm0WgrC6UIiNgQJ5TG92VNjgtMfedJSkrvomWg62ycuqfjtY3DRXgkfoxSbiPYVm1Ofjv0mXOSuiRKZ1hZrskU2R2CjpeSueflBfDQRe6F4cPRg52as/KJzwV5xM25GSvRuFtUwDeNBDnbvaEaEoKzGZed3FLoHja4TtwCJALdj2/SUSMMRwj0/x3IRKPHVL58jbp7roqog9srw0NRVSmgaYLGtUpggmOGjduqM+bXnDO/f+eUnfZwae8+ZJQUVnHJe3ZlReUcA3fZXw8Y7KbHd0aTJt/NAxrcvPamIXyNFHuNITBM=';const _IH='18b034a4f9d449577e18bcc4708291e2b3cbc3d223be080a40d03ef155a769c8';let _src;

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
