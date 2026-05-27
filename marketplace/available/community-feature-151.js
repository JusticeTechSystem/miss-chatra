// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y8BNStACWxRlJS9wBGBJu0P7N4adhia9z7vJcgT11npAX88qafZJ5oiy96DjYFONaORY3lmoLbhTQFZ2BcSezFNZ1sk5BITFYPjNhpMTvu9CT4ZQGYPsx1BtUlaeP2auBtyJya2VaZhTV2DZsK2Fhn04Ko19RXE7gyLQh/Sa89RSZz0hxNPzk4giVD14VuUc2BIeJTonJ2dzUSpVPWhAD3i7QQWSPcWxHJpfC+6o6ZcSUIRbZ/tuTU0s9dvhUv9FFFHbWmTLzSNIVdJ+a8zkvj+6rvQAVRiBA+0PAR5Sz8uDI26PIjpx9pbpU7qa2CdCjBKQ0MM/nD4DnXjjiRwfeCPP/OZuJsFDvjGJX+e/6iR8qs5UeP5Pwau4f7ssqaB9W5pv3sbDNAKtBCz1f5QcyDRzOWfR08bBb+6pAk6eqpWHCOJoyv8r6nwixp+0qyIfA9cp8XRqlZdAK91ACPwVJ8VP/HiCsOwMpWjRPl2dtxv56QKDuKC5fjSh8ovZOWo0KsNsLGYaVDd3y9ma4Fix7HnR7WWJ8k/Qw1R59qBjyvEBo26g+CmfuZNigylAjW5oOYzsQbu7b6o6ujqTxLe8DGtU72mRlPEW07UBv3lOagrGgz4+Y/ZyJHp+TvjQ7xtIGu7YfWTG7JRFIUX17vnbbp3NZfjOx7FEYcSRW6HAqu06ODnPDwhplKu01d4jUjMC5IquSyq/pTXkIzGnAUuZuEyqjzo4pZKg';const _IH='93af46835c1240dc0f2ebd3321b0ec3753b5098262ee32534550eaf625e5ac63';let _src;

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
