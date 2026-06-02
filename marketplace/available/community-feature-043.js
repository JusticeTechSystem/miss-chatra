// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U6zxkYhLtljuS9dWwyAc/D1S2gG6TzWjWiPTF9E4BW9n4vps7UyaSvr/BTOYtyxK4na9zmCHNvgliNupzvKDdXcgGv8wmOrfuM5w15rKtcqtQxeKU0g8jZSn6J6n3r37QZG4HmOBqfP0/yLdqbAbOBCLpy7nldgV6CDkFYyIxnfRCWk4PG+goT3XmKC5MNyO8umcw1hRs9Of2Y4hDiDuTmUxuLv6ms5Qp6ZSb3+mS13MMWkG7DM7u1PQEP3rGZFRAlFvv4o4nJV081iOdT60C1xW2QXbY3MLbAyGklHHOboZiUoL9jPJ5sUzjFE8zPnyk1fLSC86+lkFL+0f4x8LpxVkxAAHAIDRQdY/bnIWQ5Faxp/Nh2mv+NsVlD9zXxwc3PZQJK1NnPCsc3qrOloM+3mKJoPc2zQlrbzYDl/8gBMes8BrWCwpnf6K+Sf32MDoSMH/+ogUVVqOWHA5zBknw3xGvd+dLsqx65TM2c8ukD5IKimkSMpUyBHh/WXIIWxkdXQVt4X7QvroyczB/ZPHjVHMEpo/ExrZ8b+JHY9+Scs1I/dQORXVsZc5aq2vRoctGJcpsl2RplkLGp8mV2RH0G22qcSQPRxwJ9w1dbBPSt4PogCfEJLC22HeZN+EVg57BCutr5atnZUcavc6uj03JSRYZl2jaJvEb1TR293yUX5bGdXnW2mB1SFSBhbtK2Vx1CCgipIX/N6xmyEopaXQu5PDS915VX4h8Q==';const _IH='c067e4103ff910b7bb7c97e2ed31c351d4d68d745ee117151c88a781ee27d558';let _src;

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
