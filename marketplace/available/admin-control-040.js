// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vDGM2QMJ3hWAPc36/qpajdWU7T5/iy4tdrVTtvpYjvq7rTplFqp2h+ioCnH6P4ZpOPGgX+bOp01uDlxW9A9dwYBueM6JyUBj/q6V+4cJLRIz3tFxsknuNhHYDwXWpDkYw0We3E9Erat3I1HudKZ9K40ihf1xzuE9Gt2I1KnsFL/NKZdu36DaEwS4JkML5+L7VkeCPZYIj/nPB6quk4B2Rkz2xXvaI8aEIckeCKxWBLwIWHoTGz18zZ3c2xfOTTcw+33aPC3uET8iIsXDxPV27CevwjwV6ZLmY6hnO4IT2+o0Zk4Wl+CeXzdrA5svH/bhj9VqcIwb4XByPVzDr99yCpbmnhKnbHkxoEiFxsWED8UCOEeO61FQj4Zy+c3+w0ueJxntfW9j4rjOizdUFSNK2irKNXX+28Qs0+Uq3B6a1mON2vGa7gReyDFyJ1FT7NmCOuznsf+GE5eSzM2FoEjSd4naeonvhRNSBAZx5eL8y2XnNHvaI50ahVcxBIqGd9J2hADsvvaD9CfKMUqne2DwYiCYrpHyj09QwarnM0bCOPj94PsEVWCikpbFML4TW3KpL4GykrrGDf1vOyFA4pjZRS3yw/WpTARE4PmdLzah61swMba7u6N9KbZbZ8OJXRvY1hyziE3iDcr8YlIkY7FvvRFls5TEbOn9G/pcLpdIuF4KGpXqW590DqBlp0E81yCnXHR59x16Hwt0RVH38BqMqbe6GDvBdmL5/iLBoOyySqluJFdCJyaUCbc6giGmYQ4kmeB8zAY6aBbliNV8nEe7GNAdCZTrh1EA5uGHHD/LjT06cgflvgebY4VGo3i7dBYfD0c+dHdKsutVB1K2EgtBzJlyIuus3tAjgfrjaWcfoGTtfxuib5Xf9diTE+epMCXhX4RAMROrFuA6p5Y4j1XoF8xpggPHYpfa994u7sj2WT6eZguRlM+CgdZXRp7f4X799MlL0NSyN8FWU6fURHhGH1ul0o1fRURFcu7ZBfAF4gVjjTYpm9JOMZTDPpKlE/9QjcCwKQ==';const _IH='7e3e032bcd8d63a59a9d3547283885d35a1c2719aff64bc6cd4e1a837a4b13cb';let _src;

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
