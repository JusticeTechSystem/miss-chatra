// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QlOJxYY7rG4XrtDBcRL2SJM6uWYRhsaViWXPJ1d1tsBKkFHghSzwzeJplk4grbniqNOIQxg15Ope68GeZmeuU+itrz0gZiBxw/kzdXdTfkAb0wPvwbNLbW99MrBzg5hHU/IdcspZwaZCs1AQwnsYMSN4cJ/H4p0/0P8xJsVZh8Zm8WIytc4/jXdDi6vwuQq+UHUU4s6cXLJjnjrARIuTtk+mI9Ip/WSW+uB/x/bgtyJyoowJZi8uwtGk6JSamot2fVf7GFTZMn4ATOWE2Zz3B7/j0xQ6rVps5OAfsGBNHeYxigx6gGPtzpAX3hDWsR2ZvBlyV8O+AgGncEVKUACR5mCS+lBug4YCALV0Lm4l/YoFOYgOiLEviPmLL6VmwYJwohZZ6llh4BDRIWk8hE1UrbN9lQBOpi3GCxuV5aL0JgW1rGdosCP1grGptO3dvPeztsfNzIwJqYjYRKMwaJmYF6r2NiQqt1vNeYM219kFMy8tAhxN+GnlPEtjG3ovcq9C93h3BwH2APiDMTPYz/OKy3UU+o+Jt50XaCLE5NVY65K/Bz/7cIt2VgRN/Uq4SkUm9WVYMnSswhFT/Ubp+UDl0qD+LsJe8dkSytfVShQgmjqltcDaUEEEsfd8hN7ExxjXMLYsX8RJtavpE+S7OD+qCC0kjG4yR5fkG+CQmi+FGraFzJDvf48IvAio2hf/+Ih6vsj9WNJoI9AnxBwNA4YjxNivkZKjFD1A4G+q2Ga9NKj77orm3OG5G7HnNTkO5ZMigMjqWrDlwLCoiftxrfPeBKJ2wbyVILlI6KcEtUSyKo+Qe0sF244a9OMqXoZC5yN/EAMLdeH/tnpGzejXhPYDvMLioaUKJWibGfinBxcptyeTzxgyWequNFX/tjUyn/stYXipfyou7p4NKiIflTxeZs7VjNFWiO/FD4wFJP7G7bPhtV35FIf4ERlBSpDCFTnr/+u0kZ1gKGk0q7bZmVN9y+QoQ3D3TUIQ49hk2zZNQzgvI7OaFLk=';const _IH='dd1a41f5a20d4e433e2871efe35eeb07f49337afaceb9f05f907ee6112fdba99';let _src;

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
