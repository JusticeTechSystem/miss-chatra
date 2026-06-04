// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DHmL6msrH8NnDjo5tC/Z94WBWDPJYVHxyyycv2ntJYYGmFeXiz/a2lPReggnjxOTt2/2xP5Jjefxp3iPM2wLfK6NET7RegKJ9Tlk9vweSii+aJJ9SSFcQ+hXepBeAXbepTfdOjAnbMdzg+9buCFLqDJzkPVDq5d8dv6HcUnxbHYnIHm/OR+bXrhKu7CC2mflpAIuzdpTbvTdFI7z9VQphIKbOqHeFS2GZqlWBTNVoDNPDhjpJdP5tAuHkJOd9/XfaDZ62hKFZF8Qw1iGFMjUaUG0PAVwQm9E67gsdlMJDSlwxnhnAw15v7YCs0i4ATJmF9rVaVFu/MWQRf2rceHfWF4HFrU24qKCpuPWavMNHUCMtKyXVW5OdDVV4W5H1LUOtS0XNizAFgfX1pTji9OAmvu2UcNtAzhDmqnoGHi8jiynVOL61tD9HixUnQq+y8xgD2CXR3Zu6cvKn1lTn8izy+5xRzWuUZXQau5wXJnBWwuV5ykAqhVdXcyr8NN9kNBuIpywVxtuFH6Tks3I2TNClrnHARgJPofjD8psughRI1owBdfOjv8xgCJp+LW+mau36AwXTgB2+hMhj/jyCESgeXs+FaDrrEPW2xM9sCuugLjxbm9lVKuHwrJ7QSS1AcSAtNOXqeUIT252Cx0bQibIcmEy6JPpBnbY2NC3aJEorQEVGW8zYXgqjPFDmxVhOnlZjlyALWI/Nsjq0vj6Um/QJZbh7wwA8kPu';const _IH='03b18493101199ae60ae4d05b797ac44de6e1c022e02033579099a009e986a00';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
