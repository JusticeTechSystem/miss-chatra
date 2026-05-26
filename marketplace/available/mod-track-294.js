// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dKhDAWTAOwAefvbuEL7eLzPkIQ7vad6oSUaO6W8BbP2RoQf/L8KLlKoJqeRwzab+/ussw2osuWObKVNlp3aHuhC2AETKUkPkit6gqpNsfdCv90q5SptrlzRf3PWPDJjNAgIZ/8NtP3DFzcwFBPi4qFTY9mCSWTnQyRf0mfKYokcDiQ8OPRpFIKed5jQQC0EXvYLX7Qm/NzI1ObT+ZKYUW9bMsUHXQpvH01RHCy0I+/nBnglQ2oPUt1LXXXycHzB56LiGe9TJqrhPZu3cjkpRinXPyAaKx1fE3sqITtx+Z/WMnRVd0D/t8qsk8vHoypqoSH+jTenSUP5c5V2wvdxNOWOEQVb4xu+TxkH3gbzvQCHrli/9KlewrWKYQT9qSINAr5gNSz+6UU0HOE8fO9DhqlxJZxRvdAXTu+KxWrZIcjRMyjcz876IIJfRCZYeseZ3vnDsgSBw82xii/fg+RwS30vwnrj3eWxXcAeU1vWq2rf4aC/e8c/RYjgTE9Fx4naGMOkASlcZTNs3a17knqFtlK+mpUsFSjNjZ+5oUo4lG4hwvJUOTJQUCK8CUfIwAwqlW91+HrnaLQf0kqFh4RYcxnC2CC6mEAfaVxvxGOgJJ+81P6sRkMqm9gNiAWHNsmw3KiVE1EsWakPFL3+BdlXfp9tauMNV5GWik3eyWgIRi7pz8YPbZne8U+gcxmgLRREOzSoE7vnIISYqLgQwmuXlEdnrPYrdA1phyy7WSniW6LwXTlBRUSGjPX0eO8C50/YGL41bk/ojCBk2PyoK48u9cHB5l7jHDhbLYYZJGAFvkmT1VM8jSPB/sywBGqOHYR77v+uvIS7yDIk4uTsJGM/5MxEsICr9Aju9sX/z9IXb5iUrEDU3Y4uozWIR9oio3NrkYCq0FUBJvpOoyFG+aQZAccnaeQC3I9t7GBlMvZvE5sXu5Jr/WoWWhInZSf/s9Zff+uylRlldZDQ92OOUJ58iq9bCL12p3LSlpTPtHfzBdCcPAX3bIoLTxZ5HwadUHy5I0L9IlH48xxikSvhqe+5mDVI8H3mWSPfyhtGjfdK6T8tqBUoYfjGl2gAXYMI0GCcpk6Zj3AZKmNna53Ow54eaGjsGq+88AeNlkIYEqT5OZbS5FxVUgmc5r6yNePQiop4S3z6CnFYyVombQTg+NvjexAumzVJv0uwJv1JqDuTqFw00stNzGNn5tTpZKOBtE5DamJNv3MsSxjDwadfNTMzDHQ+PH+mCTtVavGyJeXsMrcsYMnxz8kg0uckAmO9HhmiIKh9sfFV7P8Yiy6ITKTmzMW5T4JfWBfg9nMy1CCOC96B+4Fz3LUWz989GJOE/Mx1msp6xZAIr/EgjH2Teb+ry8oltD5guNqdVo0c8sTmZ';const _IH='944c1956afc1e177e642f6d9ecdbb0df1e886ee5187b87f051a330bf830128ae';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
