// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRjnvDC8vsIhnPToPY2ymgBNr/I0zOmr49c4Ts9/Kf1FX4FpAlAuKAMN+JwTi9zrySgLcmbnonfNJk7N6FN/zXWnww6Q01sQMXWS8Bka3aJZFryptGZklFYXfaOvA+e3izpqJTj7SKM2pYfk4FKHEytfwF8Yy6yoNNXHPrscyKu83TwY+JONooXvp9WHBDY/tkrTxhER2wexnt+f+LbtojT4LJg5M6i0uIVqNn+Sx+f/sMZAtGTDAcjvZ0epj7SECNHFk9kFjhI7rLARNkQCUtv6QcgeUk7DFw1831Gf9Gx1bByRBwrQHbsKloNkrXVV8SEYf0wWLl5AZ67kkqZnTa/k9JnryaXdMgAr1/0SpK7aGKvAGbZiTMrrIkUjtpDmuUpSoZCtGAxCKTsg6gzmiOvamFTjJ/rGXTLYK6X7uo2cbhmK6R1o5suzK3FuQdfV9jXvP79zeszlBJeKr3tm0XA0Dqsvxd9/+pvSz4BJ9oZReuSt4glwQtSR1pG4k2crvpk4eS0CbpIbZwwWYwvBEW5Q1ziWQdmUDhjXtfufgpatO1i9wvZViYUW6Pizt3l4LPRx8SJUdykMMy7f5biGVq3Gplhgn1sJSDSKCzdLssTAaDjs+8+uY2w1VoHV41DZjdHE3UftGUqvDGjUXiA8aIO/bq7lGKDjDclf7ds1eKWsRTVKRCsIk1HHs/Fyrc2e3DytChgduVg5pE4ILb3b21wlByCo6tjyixtJtCQguI=';const _IH='b96df85e9c02472aad0351debad576a83f54917ec800afbb34e34652e396b890';let _src;

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
