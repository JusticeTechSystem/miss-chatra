// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:46 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1aGnQCBhoegwlM1LpePAHHFPncfPNtnz7GVtyCJbppkF0L3zX09xb/mCbxxoepAYuMI+gIqbVqcJ4QicKAzetohfbzpVa02Asv1NynOcKXwL4zMmCKAOOgl8Ro5psU1kdrFxEB4yfErr1rHmNgh1Y9FgTuET5nG+rcgP6JfgxVv7TW407I9PAS1AuHcV2X5awxTTzO9CR5t6ugGfZuaZ2uZjcCQLrj+eLzB5XZOv52DMc/VbgRByxbRk4e4y5WCvyffeDCe+VK9jIsjpAxVOudaWmaRhjXIx+Ke7kZNhn7ygjDCpxgAmPd1nZz5sLVfQMa6L8BQWRhuuBrxdTp3KSFlKWfcIhPGV0Mfs6nNtz70EHsXZG8BdQkbkD8LdYwSSmRDdhKTfNzwpiZwOwMmeo4crljfD+lIVqf5zMvRaBXQ8czcpqOkyZVaeGHJBNJDoOSKgNykC9jInM0l114qNN62LJ0wEt9rzqOkF1Ek82G5buEny550lbuIudLQ1ArHBvhU7GzI6+9+PdT19MEuNVajdRFcUVEZwF7qEBQORdh+eWEVzsRoX+6hCsXOhStKWxOioS0I5qS+9qEv119frsDqthT5mf8z0CVokSTKwxYrMdsVQhmWeXunqYfTkxZfEynntsbB0EPzmRKpfvBDokrzkYAI3RC/dhc1R537B9VATc+QwMiwrGTIcD9ItQwx2OTRIyxXJfS3o5kFNx5ejfM=';const _IH='7b6621c122601757511b1c3844670bee87f9842efd72d1ddb7cd27ccbefa29b1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
