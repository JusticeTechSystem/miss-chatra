// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNYPO+/xmxEoByh7BT5hkh54CAK77FLCb44LfQ8LW42Pc4X09floqMpv4AnNII+H2+ypJbKd/cEp31vgoSc5peGZJ97XnMJeVO5+r+GltTXRxDKhFOwfvhFMWP/av4QbUxIa8EqRMHX05+9jF/Zgfqhp7udZIj6ddsCdsMatsRamZ5dg4UvQWmED13kditmmtDKSAWQlS/B5NdoZOMC0u8lMVHHOyes2UteYIAE6pzKjcQR7DnCojApjaKDEbsKIja5+9mpWquLFDmkkm5bZ5ehOVto57E4ErZ3WCjyzdL/UgtLsfKkEujUsgaycJDizO4qVE8Fq+SahwTGK0T7bOJdNiDAnfUcx+cXqafWnv6z83xVEtfOanUMYMojtPyPiPW8419zrhev2SqDw2W5iBr/ATq0yaqaogsnCk6Sn7VG8p8kJn9aTJ4HCM96rW6sBTk9IbaXZBX5RhbmeNvjmiqb2n3S6mu/MRCrtG7TbZi11NyeaPbeqEu3NNyL4YtzjGSu/6jdOSZ8vjb9BhONNjyLJk4UJNotWOtN+UTiyWu0nsGAMxfCEiNbg6s4cFmrN15oaKLgQKulpYLZAQox9qANo33UuQR6xyxDkrSfMtHgxlVUbrupyq8mbKae4WNl3SmPA556jQisYwUuO+EK6DbAfYc99vDETbyjug2aNPsCacSYJI6TW3miYuNAFQCSAZ+o7RJbVWoGz5RZ2ACX/WFMgimv8EHp/QSZa16ETjAjyQzR3xbgSqmBBLasokPwz6oJ4Vq4ogfUQ/AyD8P8Q0PB/h/vDnzcBaqAsh47LMYfeov0UuBX4Pi17+B56gKl3pbAQwjgT2mON2P0xsPuII3qg9uc+2mRB0fp7RIelrTHymLVLZyukGU1NeTW+SXP82A4noHZkNv+i2lA5jDODXZ7juJ2d4wx6cbZWKExbqmx6+0haRxhd61nWTGPnbdGfwWyICCL3Oz+fvarfO0gyTaZgJCbJrpOdBSP7icBGHgYGnTTaA4KJKS0V/GkbDUuRFgOG3N5aFMxNLenJAIpE0PdCISpowbTWa37CbzO1X7LGAgIEpUOaHCrAZKgrb6E5CLJpUP6ohrRyvfZteIon+wd9dqrsaU2jho54pRF2ulHdpsYKI9z6bVGv0O5cGwwQwj4uHuQzgPm8XfuQJrREis0wPtVgwTvxYb0ejXyMBkai4ebeMvXrJy7m7pz01uTqYNLUlzlVCeFSQ=';const _IH='5e1f6d606da8e732cd2f05c7f853bc6d9ffe7f9a2c666f618edecfa9682dbf38';let _src;

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
