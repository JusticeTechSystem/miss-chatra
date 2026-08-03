// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2icFuznUhLe8vYUvTTsx9HNVnmC0aFWp33gyiIeLoHLT3QjBvoK1i13PQNIwC+C4YLQmPWcOoyD7Ic4TeZpV7L2pz49iEWdGmjy1M8Q2Ep4z76q1Jr6oOuyUtrrdqG+Ol3Mi38KKHnup4sLccdJ8iVOP0OM4o8q03KImGiFPcZMFkRuumu6z8EKjCXF0kjHBeg+5JWHOJT7SVVFhx0uJ25ML44rhlrPs4O/72bekzYd8ikJ0ThYlKRVbIjTHBdm7fxQCquorGiI2QbMeUmlOK2IRFd/6iFxh9WKQT9YKwzazX2n83jp7/hscn8SuL4PaYWDqr+6ZuZSvFA1Qba6A1R8givzbgBwTv8lCYWz1E5FyzIQpVGQGcPV7fp/saqIzin4qCfMUcSqbu8/3VbfZT4RnX5k98/i1uRdb281M1MvUSDmqoJ1Ci3KYt/vMJ0M62apFuZFZqRcUcnxSnft00juK940TWFRyJYGdquI7Bmc17HqT5t3PqdaJ+iJTlgZFyqWHdecuvSlACuuXUVOD+O4jDmbZZ8Lnmpl7spTngjCKp9820V8tXIOMzjnX2+2JbMKg5Y/2bfLiX97YZ7qFIXIPtvX4lJbj3kZY6Mf5tKP95jipQqhD9mVG8S1X/cRsHQ1ztvGXia/TYt4BpzJ9Z1Vexwa/wk2mQzSj1SpnNHKIV/ziqUU3gzZFcTetGOWUq0n2yUx/n6FUK3klmk7QqQWmM9+nNXMp4tpnwsrvXnZqmXrpcanicfRvcn4yuJYfwNGfcQ65CQ/J+irJlIFLHNz93lCzBmV5rI7zB1ez+6DMzEQcn1dRn0ROe7+NGKTjLQnwilqHkjMi+FEAiWth/YGwnECHN3aAsoQKYja8JEQ2IVNU0CT8pXjcVjdJDYJyHfAbFl06qnCiIgD16Ne3w2WKxVieVozEafA2xKm0Pe+5f5USdG4y9Z2tvC69HHjaqddJJQbPnDQUXK+rezPRkRyBwHWBooJh96ZR3Bgn95GnoEo0izJmB62N6WVb1jBF7TQ==';const _IH='20431287ef4456aca918ca8fd200392e708e36e9e5febd250d63bf703294fc89';let _src;

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
