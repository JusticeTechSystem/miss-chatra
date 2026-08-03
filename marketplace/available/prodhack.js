// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQirGdNY3IGtrBDaen0ziRaQjlWiS6WVa0CgKaTPsui4Q1wwt9hzQef3ZrUsMPwrnJpSBzhHwJIa0d7037LyiG5bV2oYErGKLPeYH4zgTONJoK9C+LX4fMYsaFVRutyoZtaHz9WXLbR4etAfzBB8oAh8imVnyhqzYY03mk1nDGtere2vHxcRx4Gv2UwXiP2oF0NWm7oP8NYQq3Qzapt1J8IIFx2PxXtvJhY8UYo0x+3T0PKGL/ls4z8TXpxc66nYWYTQrCLpcMomKlY1mmuvDVN86Vf/LO41XS6+o2SOJPnAfcqKQAkzf9PEKFqxm6OwjhIRl4oBgpsC3E3k1Fc9BoE+fkgN2RLKjgFr5i9Z/BKNd04Vcc4sLPpvFr/oQTux4hFFWtXimr6bRDfuzPwZs55kpkkNa1hOXVgmUoVs2EdC6o5kcmUBuuZJPiCROAWLh0hqCo3QQWkfZnbTH/5+OQP1I9Ix3cHBdumwMiT9nQ75Wcps6askDUXRPC4ycy/aJoAdKN7eHD1tVzWNaX14zMsgcwtJguSkYaYAI/o1hbVxjcpWTAE35wTKXBgUwKTwBt6tLS7sDWGhZGqoNWhXoTFQYF60T1sWdWML5K7iLlhupXz2f3rK2k/TyXwUhOyXOJ0BanS1Y0E5SNyUjPnr5vmtNtAcBcu0qCurkatC57DbtDlWytX5uT/CdWMgibhwWCGM+gocIf98vBfldcw8FRvCYr7DytYFhb31wetWSl++/z9wP3U7WJpMPPhg+c3gnFiEyl3vYQIdWhTgARb54SNg4ARcwu5bTVtSF+TJiez3qzPvjyppDBabHCJS7wUyZmdZCIcqNhDiZYoHZJ55+yyaPalYY38swKDJCFSmEiqTskSpeO8x8Dqw+wtglxlFGsneCUS2yGHmtBZOBFjr67KvcsRIqu0uJxEdkrYl8/vxzgRcO/x7uM3ZZG4HKU2i0/oe2qt7DO/p3h9dK5/chFy0/P94kSEH332fAn2I6sXCewdVEDnrdgK1nyrzIJTJob4VEUxgxCXwJ7ekScGAYdM7cHkS4E6vlpWp/ceoqsXZPCeA3PHjuUroLpMVHtURE/sNEBuxlbrx/Sa4YIVqoJcRpq/rdDOJdw3pF2/GmTbJuYDtwobWYMW5pP5kU/58U3v4cQOiAAEkAKeQNAuBiIF0kthU0Xkk51X5WSkcoZsqUxTUSB7W9EeSiAypLBm7Yh7lWrUqg==';const _IH='8485e98fd1fab689876f13d361547b393fb6324e306028ce996367097353ff7d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
