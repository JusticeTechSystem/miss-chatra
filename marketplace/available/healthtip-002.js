// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1+VVTWkCMpxBB2ZdqUT/fr3XVO3M9DsVxX33aB2ErcbRjxM9oUcu13dyu0nmjyy5DlYOUNcWqxGrQcwLQlhd1wCaF4xZDh43Z8LLic3VtUoWjn7rFDfzVYuSdSMabQi/keaXsp26GdsuSckiGjr9ly32RqF6mPDWuMVDKPA17VB2eT68K8LSqtn3IAWdiiJ5QrJKkKkn3cLvNIaevfPswFTjp+2a7wvvTzXgxt32gQvrDoYtHDchn9cqSzhbE9GvVzSJqkpk7Rm/vEAGeXjwrflPTpb04xTA6C9ucCkOh3A3CfP8IpAMa7L4A1ikrmAVaQHcFmqW2/qH1Ce1uqgC5CJCMuv5hxrcc/Qj5zcAMXYi6jvGOvN2SjBUIB89JdBUZXdF7vVuCxw/hRmnOYjwCNU++m/X5C8jmkBZJo9q4PWZ5LGJOWaT6VG5vGuLGJr0gwevwxBa+G8KahNdeEdz+K1/QhoqKEExhE+m+DextosqqXeQs6xGa3D5m+0UmqFSAAvJ/s13vQmTCHXtAIES4aLOb5R51e3ZJiWYGpm8SD2AbQ+CoTTNAgV5AgDBf3QZRxUEuQ94+JYZopBfIcybCtQ4p5uY/Y9j1AIMCqNqLL9iKK4CckvkU689unwc5qoQrvQ2RRRAPahec1SLejKadARgHL5kFLsutIFqr2ieBLzm2sSej01dqjzjgp8PEP+Aibj4D2gVwkTr8BnPK8UPSkCmifYqCaNpwhXwZ4K4OfH74wDnJ8PWrsCBjl2Aoa2QTJu+3HksO0inhR+SUnpGWABN5stPyJb6+eL9j8rONpFOt1nGMer/orLuXpsZ8LURSlRNqW7Q+TgTepxpShLYmrJY+y5y2PCgiBVlVFeRSJUst5vuB45x7dyFIbTah49eWyof1mRkgQUF43/D/mNuGcXJ7acrMLuFvTexN9hU+piB3iozQo8d60=';const _IH='2472630729b9e40cf3421a8f0eb06c8ee67d7c56d02550ed24f22c7908589fa9';let _src;

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
