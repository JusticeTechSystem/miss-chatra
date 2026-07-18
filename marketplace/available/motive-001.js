// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTV6V6B79TF3g5cbbqOCs61W8pTfW3PziHo6lUmLd+Uws095+PESunjaPGmjtRAYSd2lRxh4RjD1Q4h7dKEOvQLJ2qCfW3qF2TBDWx2qPY1WYR44hJzwHXAXVdZVd56ke3QjDvZ8syBmnYL7l241BUqSxN5kcQjZnVuAOt1PHRvGcouRM++ZYX5Fv0kZF+iyh+C1HxT7b9ur/4vUnCHuYgEqqRPxJBLGbVz4CiYXpE3Jz9dtaZtJ8xz/c7Gs0m/LsMkaopYwvlUTH4T0v6GFweO5NsuF6QX+5X3NtHOxRDJnUpcngC107IQmfYezGY/3BaIaTOHo+3akYfWQB54tqGULS3Om7iXxT3HS8wslj3qjXXBuZ+/GrD2FOr7dSC30kVcIaHxVxPZcKxC/+VMUB8Mu4Lu4mNG6vPJuGMLpXTlfqe8bp0l955vb71KHmpJjaMhEJ6Zf6kq3c4q45SlK+68KfY1fcYg0AVvA9IL8aHrozKUmiuJVHYKPZnm83ExytBFanXKzJsiMkXJ3bdEc1iJRUTA5PYX0u2VTQbVS0QR3eCkjSmBpi7A39NVzjwEIA3phCVXdYw64Rewm3q0BoqPBlJmtCmiMUCk1TX/RU31SRC3EBN3LVx7dx135bw6AeMLUxXpLV/jzdnF+oHc17LUQpHe1as3hu/MbCmn3hehKCqqQOHQ94Tnv1KMCURAm4cN30+5LceFsqWGSn1jH/fjy++bNB35/z5inB5h4jdwNl9rWjs2MWIy7zwmPoS08JVquXFIOigv7BhKMCbu6copYcU9D4ycXZ+1RAzWJtIZRdZCYSt9vhEQSUqwiL3XQB36DRUNN1ov84zS5Z+SfbPt5Qas+iY4TLsGjH3sJCb53G/2BJ6LK1DhTHCp62CsHcaHKJD+IsKvZr4Z6wXTHSsQrDovg8YFDQQCUFa+I9qPKSOr829oNwGYs1gO93OQ3QYb8i2fSGY5BNnigqTD1zgOkD4cTUX0uTLMZS7L6yGVMI32gfxj1OI1ytU2icovGghGJ1zXCvwx6L2WQaJKBw==';const _IH='6363491ea075b50dd87c9a7674076f62c0f5bf34cb4e0a5d8fa1f555a5e33c8d';let _src;

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
