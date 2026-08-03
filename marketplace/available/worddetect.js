// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNY94HGqt6M5QLM2GwKNnVwDpj0fqRT0hgIvYWY2KVZGQyEWmb0cpwu/yTNWZSci4qLCnggdF72sX/VqdVv3tq70CMkEdWzvFzFIYwkGYX+hnGW1nCMVikVoL3mkptNcai/4IWXuVHapfApN2l5vjxs3ZF9N2QJZFS/LItNhC/gfvQrLckB3oqYc4HwbRpylisRBqRvhQGMYtIeCtdXqkyz2HxBxH/s7yAV5EGbrzekuwg7NeDZ79vBDeip7ogLkfPJV0/h+DsU/TdzrELYfoQgCj6+ha1tZNCpTB8ABoV2pTAO4rMfLjHKXhxkXDq+ldgoX2T/9yfUdrMT3+Aryo4t2da1vbwEZfvFw5RNZCzV1KgmUKFoFS5TYP0eYO1Pn/JivyH5XLNRv/rlksQ+R+O/KC9i/6qky/xty/gIx5H1Lutzj1bYVW+orp76YPyKj8YGZ6l4GVEPcGVHcpeG+Yltj88C4xX7ms+mU6RSDMKsfMWt3p7A0CQ8LffxWAmiIW/0zCm8UQ2NdB5cyL8F9OzmKcDU8uutjPQVXD2UCneFESItF2rU0ItM1xjjz6DWJDDi9xEjlV0yMUS6dbE8ahakD3ZdA+7NleYkDN0wLf3j3rFT0Qj+i2c+T+povKF4uZDNKkHl0cbL3M+TIdctLlrN6bPaWluKdSWvUzcUFKeHFpjfUKNt9VIDnKsYW4tBKBoS0bHPAx5ISoHJQ7iTOF/mLd44TiLVRvvOS4wLabZjXwGVAgzQK3HKf+DzKJY4JETqn+8Cxt0K1EYcmcZQLImZLIfEmvrHG2ITykP8IQux1f2RpvjAOjltKRCqrSgyZro0DAG5MMWfjanIlKXu5jsy0oCKY0gX44OCNZUXvE81o3iRKoWkmsFGrOdzymzdbN5mcaHeQvjjfS/siF535+tlnb5FKchEGxkb7q5iChebuMN79lKbi5Ac/BFq/KfzURK5xk+byOaJSGSgk1zO53VwWeJ07pX1cD8qI9QSoOA2kK5fRV3bLtVUZ28JytFVHnyxfoTsyiESryAAGSeHxK4cZOgRU4yHAwID6D9ZIP9W1OqGehF3bNZIQqH/I48bg98ScL/kfxfAWoNrXCx31UZaLLYTdP11BMqlZXnveFeSMER3tUZPklZu1kL8XPSGcWrG5wgp9092AszJ9ykNy0B7FbkGpTrQSqH3TJim37mNYUDEmLR3sZLbiYJwX3ThuY=';const _IH='e664ece2ad48d41b3f9a74f41fbdf3e36b0d87ff8f869857b2ac14fb4cd55917';let _src;

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
