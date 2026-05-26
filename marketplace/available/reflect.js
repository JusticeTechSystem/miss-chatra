// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mkh2sH/0swE4NLDrZaeVFZLzLFCCTECpOWMV603lfVv4z8BE23gtaVCNeIGno8E97BLUJRpHxJ3aXGN5MDYFjoGINL7fo5CXNoZdmNGQ0tGZerTSyCLJeEEScEz9BINVzH78gbwaKvSSF7ifdjlZCTnT+psggYisltm4kTXaB+OPJ4054pDmxoDDDYvxHZ7Xwr36DJvqtG62Xh5ug9EF2ju3UYiLlVqOTTJs2IK1Y9V8yWCA5dIEWlalhRWY1zL7a9jPO4SMpeku3eGdTgN40JZ41adZHvC5QSYo5iZdJUefuMYm3LvJK/ewbkOfcYgMJh6iaRgHC1wXJqawFaGRK/3AIFQCKwRUGFwtCoELOw7gzufjmE9ZrJZMSpHHQsuzO/x+MuNHOmlvat4KlctCAPAEMBCPN4xY2Ty7zTkS42IIBBcay9uL/IYz70krCKelhYq+oAQSWjhhUKr0n8Rz837pK2pOJDLNMCgD62g0ILimXpRm6Mztf7jPQee2SRk+rQ5IKvZxtwtWsYI0JoFbhA0+xoMiHgZ99n9TRU3Fip41jrDWFBnxVVa+042AoWMVlwF0l+Dc8DjdBx6EiM6i3+dAk+9TJKqb0qO+/VUSSY8E1DJSzzFeWITzjQ6g/IbMcRLgw0w7RrBm7/kEHA08mMVZMpwOzZ1jB7dj2CoB8u25mxeSqBt851HZNvBZckTaISa+2PqhP8ocvNFoktRcO8ZCwLJ6Z8kzVt+Tw5XbgLsyCFSkyytu43WlUI3I7S9Q3MJuHqnRwhWyHGjp6TXXuYeGGI/5WsCdaIEwfLxIssVQb+PaWWRAjNuVFsD0Ux7ttqxh+BYYpyekzDM+O8mdOnJ3cKjgft4suf+vMtC0H66DxqrmclFhgyztBgfg/OhXTvMLiaWBbKghr4rwmqZjPf+gYlUxE52fvTV5PegQoTqML0c11e52vKqdOC3tBkJfIVeOxcFq+HiKligyS62RYt/EvZ5nIFm46/mQfrJ9wjq8wKodOtOozt9XQr9b6TWJPOqet41DsWojQStE1CkoR0mFVBsJUF9Gb7bzC4P3pyMUnBPYtk0jrx6S+dpUmU9PRnJq8JqDiV5Q6mouYHKQoSj2OAWNc5Tgu4YtBl3NNYB9ZXbOpzxuf5gANBf0pU33LvLvjBgMreBeCYS6R+e/qhcHNI0QqTZOeChSz3kzcLcTJmJcnnWPbXIHwUQhg1ErM9cW';const _IH='a3bf6dc646c171c56d08497b91761175575e1b017a831b29b8d99eab54a9e720';let _src;

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
