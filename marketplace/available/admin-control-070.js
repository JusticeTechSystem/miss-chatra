// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b/+LBgyzmLMejAO8Ef0jmOIV3vyygyoZHxBspz9Dwl55H7F83FMAMJyFeyfLbAZ3BM0slJlpGRuQXjlDr/5blaz7PAL3L/0mZolbqIwR09Su9XwYgDMqrk6OahBF8Rno/ogOjIslA1BwxS5/ewh6CNgWRYK4VzrVSRdzq8/4KKPMM6GhhtavohHTp4iJVXROGG3SLkzFLQ/rJfbzt9RvAdCS+wtPI7o2/cKWxj90s61YHEAPIfVwPNm2+qvquPWZyDR6ixT/6WIw3HaLnJhXkHtApHqgUXWUAnlTaqf/oGgQFlxHGhqt1iqOyz7q/MQEEcjxtoYa1KbNTK+S0REunRx0mcy1AWQLry9WIESsbIgKEe6Pe7gyNHbklwfhiAvmoCR7D5FTZp0jAECFH8ADciddgugPrtui6npmAeK4yp9BPGcWN7jPeurXWO7yN1BB+EmYiTRNyXiDByxJ+VytnS0bANsXQ3YTQOwcMnVnnH8nq1pDy8iXVycWvak8cE+IrGaXyY0pI8e9o9QkgWV3C4AkmYeefJDR6DhgS9+I1t0FF7jtzD3NfMSgLe2NYHtUOgi7Xv3WFgNnTpZvI4LPXYt2dcmo6hi0njKNqO30kv1yc/IplBUMwaBFYIHUEBRiAnteXSv2b4In5kDzHZy0ZJSSgbqk0EJfgbsiA1HCl8HRJ1bgxbP01DCM/dlXn9+bHbSj5KbCok/WkAygzhfolnfYPE6dvNxUOZl2we65eecIh5xc7lfqBnNv1B99m7CKyLECGa9dt1gMFyAGQaXT5B3BZKFx6NtGS2eq87MEiZSagtPGKV4Ry6DLFvS9uTsX7htLN+uNrcduU6ahbtidhywMkCNMQK7FBDDPKf/RUW4aH8286amIk2B2aNiZ7hrFyewUjmVidESmgutdAFxR4Qj07X+LnXvtHDcjaEE5eNHfwdetmhUbTY8NpKWT7W8/Ev/E0PPs/wdPUP2sTIv421XqrZEBTwJQBlzGktHlaXAzorTBUo6ZHNbdkbkFYqsV+KovpQ==';const _IH='f7a63a05e02787e4ea4f49fe7856e9fa6675c88ec471ea98c0d954b3f34e2a41';let _src;

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
