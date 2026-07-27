// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQmfmpAYxSJV9k2oOpeqrl4xhDJTb7+hqZrwIgUQxdroOK6gG7RHZg7Ck2B50nodZhgeihE/B9iIS47eoxWp9I8Hn/LDttQhh3/4BOXZjsMP0myd7Wd15SMSZmY4l0U/D3cHECmuRpM28rHjBs916zgvRAMq8cAHSWVqZWnXpMvoSKP3Uh7sXJ8w2PPinftssurv9UDzjE5Jd1WlFruYkb3L8VdndmuidsEjutwgRchPhu1HM/VRfhYHe8tNw6nanYZam84ci3VZcJF/4NJjTEvhnM6Hmj+NrjwUMS2X9/JiJxBAf5y80m1TsI3iAoxWtLI37/SQwMbPZU22bd8G1o+vN9MMCjJZt3QTZYRxC9VXKHpLDMx6xkuEb/kNXVbwkY3d1NAC6QsG6o0B4NCluCjVMYR+ycAWCS3UR0ddrWGezN+FLGSvwWWfv7V9FDuN53OI3m/uNPG6545W9gItpmX5sa/fHsJCan4WO+X5QiiMaqWTWkyj+PSwCkS49lw+CeDraCH90jL8vpXUgd/p9wx9Uk5p38iatD9ltFm5clI/tx3v7SzmPplhv3Q2UY7mDXHTEqN832EIremYHz/du0i2tgJlyNHWwy9h2cu8SWsdLFPT7PR/l6XniRaCk0aH0IQu7Zb5CJFU9fyMClV79a1zQkbEc96o34kSGBZWwuAXaEhntT4pCV7ECEjKQjnVnxCCSxZ5G5Ntc3ZxAxsi1SMCoX42ZqB/XzSYyZJpTbY864ltH+dt/gPM3nMn/Fr8mOXMPRiOv3LoAqZsLXax+Vd/a08xH+ekeF2dRhVYFXZWMSqn+4tcoLo4vt9keilKTi6YsI/WwZxVaZb5viRM6QgrqkMIOI/y7Vc9NjCaoSy8IX9MwHaM9F3oyeiDy8RO8q6pGYl03mvCW+ZmK3syT+1oh6Tw5mYWAmy/Ff7v6hqIWkh1uUGQoNyFTiPgU5FkCHutz6ysrAJNBZvsW4eaQs94wqNE78kjN5Cdv8xiZNDUZL8WIRRZcJUEByBKq2U6HjZ+4i2ffw19MgSUTODnGQQ4TBYryHK+TMq9JPi8ZC3o/8152HxtSEXtZHLXe6t+LH5fqPQYziwQ0grnQ0oeUXpEuu3e7DiDvXjIjOnQu6oRc0W+J1a/xuwSXGNmRjR+dw24HG6mruVUO1YYDMz9O0g5rq59u9YNXucpeZl6+L9JmDShuMuzsrXBSDgE84Fs1TBKE9ZuBI9uRQ2SwX4l9zDMy4B2JFYlNcutlMrc7FLAxsAhaRm19p6jzNiclnhOUbpL5hN3PSatzzrCF0uxPoXwYhmOuyntlIxL3cL30L/6OVgIOro77QL5oDiIUWeW10gnsW8II+1zNm3QXjZ7qlr6LtxrXzZwFtcY9SxRFw=';const _IH='b17a8a7d954c2acecd19e60b5a0785a9c3acd0161a695ffb5a3f71d81ceab059';let _src;

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
