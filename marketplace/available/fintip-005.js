// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRBNfp7WGWHo9mjuNWUy7uhx+VoqgcWTIcRuSqEw/pcpBsfbBBODzColR3EWca9t3C9tKFpQHqB+GiuSf2d2/xMWhkKJoezr1V2M6cqbMmcdvdmBx3igHBQgj+im4XgJ7VBco1rcuyv4J+VvRsCNxWnn6ANfvJeempAhf8NbwwZLoda8PED5gGERt3ybn/dBLtG8OR5jX1Qi14b806/IxQfG63mReyon7fllZudddxeep3tBQDJIq1GFqw2EAGvGZta5rwqQG0aszA/6UVLwnyGV/cjbs5eTNzV0rezBA8aLX4xYfc8FtN+jVsTXAvlGALuwmnJe76EseqwKiby2rgm6LUMm9fbXTIwel27vf2BJMLHVpEcxqaeRPJagAnwdlXM7+ZUWSkAPTCwYAjJxjbaYVeuzMZcFXhZgXTcUy5zaIf88jyz0cKZbPiuiU8ajk0rwHFtNzGBJwC7auUmq7Vq/XuE+4127gvYu13HLVxnPDIHz6Q8UFuWr4sxWMGrPIan/NUnMi3j+P+6HUQM9uz5xUGbMWr1C6zuoB3ATK+WzGRH/zNYzCq1UACqK2Ci+QBfFioePu4PY7oUapVCXNicyKfbtCC17Yrtz9/pLGuC7xRAbgGx0UMqPxyZfErI6BUYmXR2v6MH7m07S83/660kitFWOTC9iZxISuGmgg/d6jAbKAJsRujBFGTGW87jommIgSxLBCiAjGTlUvmmGhY10mBVoloYIHwvHQO+ZaRx7PRUqKw2QkQBdIs6vFT+02sd80mTH+agR0EqEiTSZ3rMfg96tgjiEMquO/BnJjzlmnshN5/FHOAS0hFLOr3yZkEfn94e0/iE4dDazITuIJqK4yLmvX3p1k03caAX24x/Vb6/RfBxfirscviGpUMTXLsIic5Lp9MvqVOUMurMfY2sIlSdVEDDKH0rVXzHhb3Ys+pHD3H64gFzUnSP+TnUNi2jmamjviXT2O/KbONNAobuTKINEiciyWXExQ9FUn3DF8AKODSIsobHs+z3qBKELZN9LaE1NpnEZuRpnzLxY43O6NlL9KLtVL28ztnFrLk=';const _IH='77cdd53d22ca800446325d6942584932ef9db1a6f8fed1ff40bee62b0c66fdda';let _src;

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
