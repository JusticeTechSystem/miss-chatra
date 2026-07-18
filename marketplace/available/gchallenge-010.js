// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcBUn0kNViX9au8PUELt+l1Ip71y+Xxzqu0dKxWnWNwp9iNtfBjYlfv3sZ7JsI/hjlIv4cCwaKCX8JwhvZ0siqCpCBHZDHR6p545vH0hMvnM5yF4zU16+wjw6LTgFFkaCikCp9GrAblVNXqDdi0R/jIS2eKB3+LvtxeuHsmebYL7n5UAOyi1SQkwuHdU53KgPm1YhFT+4pNyKxBkwtQySLSFTJ5N4JEgmy8bMQRyDs4kXV77191giAO4e9jEvFkPQqRgeyLyrQnZWS5nJO2l5SCKj3wjIBCPNyxxORvuHQHy/yevSRo3nA7Inm79ikOVeSWQ1PVwndDMSqHnIYQD9nbdr0BBvY8MKJkKV9q1uMPEPMOEqD2g4BFcj5MuOsPaOLQjnm8HpPi6njMo1XHKkfzLSmGxktym99FIUmS2igDBCBJy2H19xBNUS8iRL366xRZP/a7gvFmUoUg1suwj30L1VUnBPTw/+6aboVtNZK7u5qgCYB9GKGTnLC11n+8fTH/Kuwp68ktwZEMpc5lKbKNf4rRLZliL09eRt/NMNr41n0yghzHymyVKK7lmkf4VwZnaaJoV+5BsB8i5CDdcdd6yKjTsOYEa2tsoYyKqOtoLMn4mmt+9CHELYHuKI7g1kZgw==';const _IH='d25000fd818f972b4586cf3df779a2ee61a0d810c804557188c97e1220454b6a';let _src;

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
