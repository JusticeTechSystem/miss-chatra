// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRh0OU5pty+P9fdR5Y9m3W/t4ADX4LaVUS0MzNr2F5OXv6OraPR6O6uJLWlD8XGhYNPj/geLgP3avEigIjBj467ykgsSksjholzyiQ0VM5Chvnfq07rbi1RWQPsNX/Ok27DcLxmhL55IDJWKcH4rx5k7g+JzJ7Cb2X9t7XQdoGlUI/cy+xX0uAKGdb7OU9h2Qz0xaMZ2sujnvFTUjLliLeXbDunQAHg2n5Ij5QJT/fOQNXP2Nsp+76TShyZUr2iIQSUd8vrnUPObQH3HKhmwgeMy/1nhpKIkZkC638wnKJDK/mZvup+FBOjG7S6+hcr8PKiyCwz0MH/CME5K49adrYm6OM/2KzkN1K2kaXeZV4mljcvi9WM68JzJv3XGBaS8/2XucRWd2PCjShdIt7r9PbZr6kHnjHeVeP5jXU01aPs1Won3U1z/cjE8oWU6W9ldGQB6HkK/fw0JS/thXOSGKY6FrEg2ng7LiRg+PTGMCNFsUestoEOxVCQVjjgQ0VwnPwIYpUK4examwMiVpZL7xFRHcw8Jdokk1FliuzpmclCTGAr5piyS1cdfdenRt9/bioVmpnEAh2BJlE+vxl49PanOUK/68l8Wn2kCjLSGcBUEeUB+4oBMW/3AM+ICK6Dh4B/en7aNiDWz3kPkIF3E6+jXrADdtNth1OJczOHAE3nVyqImY8WmXd2qC7ErmEYYnyh0HSXbZ4LC1dx6byg/ObFTYbVOcS+tXp8rNpVOqwbCaE9ci+P45F0p9f9SlX4A5Ijk6Vj2EkD629dES2YlBFL+olIltD2bSVSvt9Yr5LoBSBUcw9HGeXfcsLIPDiHXUxQaCY4bu9vJd9mUdfi+u5xWc7NA/tYq6gnBPocfIsi+wXuSqdnehzHsnAGb+M0aecY0DAsrqKlrRVmQ8nN7dtzRTTr+TXaXcrVIov5uZlR3Nkp0oQo4VRESX4ty3CAOjfXXsE9QpNDRn5ZbUv+T4cizQuxe6ilsrBMUlUoLEy9wn14MDT4KNH6kuQSYDte9g20WmY5NcfLPLAfxhkuBN2wInPDoBp7G++rxp5oG/NIOPj/XXhkSqekXmgErCd2LXUzuTFOih5AW0vVQbuz3eQQQWx5uIkm5qzkMm400ewTvPmOWRijMLMMcj24PLt7sPyhIWVFSXZkqslUsuUs1Q1w8uR+iU7T+fY1i2nnlZXvJJYCK86LoBjOQ/g57Cv2EWbcYpN8fzJkSGFAN7QA10ZsEiOsTY4B/dRO34pXx6EWDu7uwEhPkVU2wT6rf2Pg7K4xA7lrZ8/D78y26MdptdZu3Jzm4gs9Kw/8BzelJxP9CpZ82gABOdDhmSKJP3hQBz4p/stTkSSNKlAlKySTSikqxf33TqzRn+YnMeUe1yVQNa7+4A==';const _IH='0a75a97ace240258b5a46763ccf8a41e971538fcb8f9bc97c46672f63a0d9d2f';let _src;

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
