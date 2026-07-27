// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT9/k+P2zKzN7sPGQn5B6nxzc4pWWLx8V15voZjeAE6k1G0MEUlcwddxEGJVEwvwMpvDrCqos8rzwe6dYw4C1xRZmWRJGkN3EJzue/1pZU3gESjDMvhvZ31jECxbvZREiCY87gN2LSoTgKkm79PwEZyQ26FWZflg6kRc2nbxNGWiapnYSNgxGppEV0/MbViuhBipHLEAdlc4/WRKn2s7Zy+erF40VL8qyUqzOlFl7juMfMELjrrvMrDjGykQf9wuCQksrO3IqQNLuu+sb6EPqS+zfq4fAxFXUGqCvDK7KHeot4szeYXrLdHl9PknIgemrxQ2WB5epD/FUOGMvXTbuP1Q+dK42bluoB6ihEqLu76dKKcqfS/gVo3UIuJMQPAtsrvmAAilmRvyw4NdNGeuvoqDq8albUW9+MT05fWrxoGwIjeLqdAWOfBg8cGVbT+ibxB6LnkOUGFt8kVaqwmNgNSju9Ua6FvtA3A1mmJawJj7P2tKnZYzJzjIaYZ4PFC8QHRX/svOKxIyNROces2Y+6w9zCREGk6zM4CD7RyUkYLLn0efBswXxCjJmAUAal3gt45u2XZTSjTpE5a9ddq1Y3VqELUSHIBq6BU8LE0w5AeaJbot9YSIHbPFwTslnCuxqmeYShjus1PCV60NUfBPcOT2uDN9nspVsQms4FuxcZ9Og1FxEpOqJ9XYQ2Ye5ksIf7T2szm6oOFj+bAgRLcZXbAaruwJcN0yN7/4sWJctCE0uogSBz4gfMveahS3dJfkfM0ig0FKJU8b48l3lklLVFwv6BnoX8Rt5gJ59XQLk+8XIk5SiL1zslhzG9d6H/b6LZGYyNwY5hTrf7C8TWO84SOYgi+5XlZC8Kidk0i1PrPCA1WzaeHuarCNgwURBl5DwpYRt5z2rEf4btJnGjp+Ay05nohTHPP1fllg0os0NfGZlhEj6g2qcpT7lHJ/cXlkwLywV98NXVXFQEZXu8G/wexNV/mcbs7Iz2UDVCN7HbTLHIfMDEl6UvHyC/ScbuzWe2Xy+C30ftKeiQyCMS6rp5+mRSfM0bZlK8u2LLFX0bQngir4pJRq4DGkbxyjQ3AyuKLHFBgM9R4utrOJOOWCLxIykI3SdKV4pSri0ZqRcMxkCZwWl2FfHhoQ7mNIZDlNEDynsXUa9ggUh5Ngx2DJmJgp2Hnn8ipFD0L1duPlLp4zGY7kAAPi9aruwt0usJTMryHdtO/HqL1+uKjHbjOOXBhVRF/vrjl44JIpPy2G1MgW4iRVY0xsQ+AsqMGRL9UHnmz5vmDLZS+f5oyqUQYfNT33pBfmad2mT+q3cYdkQT5vYxHNlyr26FT54vTWWAevqgi0P61Ug==';const _IH='2230a0bfbc5e7b2105166b3c79d51f01f3a5ff3726ee486de72060cdfd42f4ee';let _src;

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
