// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rDy39iJ9lPqa38HozKdo555qxxoeUc0FNpNfpvEA4xpvZBu/PQZbwm/6nT1P9WoX7y1K3aDL/gir9a604UUJyTzjLlDawlv2tsLdkmJBv6JiNWOmeA2Ug8c2KA/ajMxJz6/BDynZDM+UVBvB1HON+/iYlfZRwhM09bFqW1ny3ZIOT5PCaJw/dYUYDwAqcJJq3cDQs46YteS8LOitywC8eXhNINWachAtz7zf8mHkzHub2wxX+h+pbL5U7F+/ICA8tvY5CltADgE3q8K07TZKKNyrQzFaIqh5KV4AIT2kwjpqKnB6b3A2yxHuZLrt+1uBa4LoRiiUmYS2GRfyiBnR3mEgH9MxpPe7TbJKYoam1azuF7LAztSuyKkR5Z8LTBRO3t83XLqiKiEDrmxr4aPhypR9dz301HnNiRKTzODA3eFrzy1ETIpOCrV2IotUhldk99oHdopEqtkN5yArKkUDKCJX/mbIThGqymxYNyPa2j1xw26Eec7qBrS5qjD7PbiSR9f0maDUf7dpx9iQXt8BZkk9g+sTZ+weyv9c/F86Xz06w6Af4OiJhhUBbf8lYkawD3eKtMKNnya/CleOe7QiH8WQy9wjGcr/PepLdGfqQbgW9V0Qk1lyIWCK3aRNxVP5B4c/TI6rtntd4zMi+vwg4ErpmlpyAlYGOHdYQ5KseBfxyf+4zTPe8UFMSg2K29nBYGdYOs7Pv9iQgD0PtfiwiyI0hY8agIT1CYBOpJ01KpfEIykNw9+URgOQtYw2X7vwepkNjtDx2ejwG+AqSXoqQWoSH3dLC6rDUJsbrkHh6z4spMTP/EOUZEg9tlcdZI2MxuQo23dJKfNHunazCAUXd2bVNSnOoET3VolqJqcVxmAFRq+AflHvFImBj6W0EWc5GBsnaaHYC1xCXDdN/UZDAhHX9P0p07+a0YRrMUfhw2bDw7n+phYiUhq/zSllL1ELYJ+y1CCjgg3h+XQTVloAkslyjagctK4rLYMzlCc48MFWrkVPe+JdcLjr7Z0J+bWH8oRljIZO0aUIoyL8rxxZnBHzkTUPvPi2qhX2sBOxS6n9eTNrtUbTZRB2DACN1pCbQ48gpaLvgbuuqKvzTJ3CNUo79yuO+k6+QXWWIVHzycMYkP2KBHnQaCjArxX5VFJVKYGyhls9YEVO+vvgKVMakFmNIkc8iIHG8D7fWbszpj1lCKfmO1nup8cKQIvncnqzWYQLkMGn';const _IH='319267ff08958f379e912fd3c039138570c6a4442a493331ba2c660500ee77d3';let _src;

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
