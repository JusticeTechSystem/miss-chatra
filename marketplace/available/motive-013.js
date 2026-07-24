// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSoStEvtS9YqFxZpYVJf8LlTMV1lOvdxO8cPRPZM+uZCzIiU+D2y0P+vRymtihZEul/9Z0Hwtx69DO+OkhXY3P5tqUTIEREAB3qvX1rzTrdP9AxFrWJaZN27G42KspIHJmg/7vrIsFCCeJtg3DccYIASJ+8LeONY7rklu7o3hI3s/vBFEq/ucESBUFSiesLrI9fWGylUq3lNFFW+6XT3EaFKssSyI/A2wZsxQju8beU1vuDoobdVFRByllQYzN+Tu64pxk/gmWP0nYjWP4WN05tePFlLwN0CD+VYKaaz6L2gwTmQ4yZfKmqaaf8OGGpNQ5gg1PGlIky0zVmuuAdc3DmgsdG3R1uXZHg1gT9W5ApcxiJcW57Zml8uov9+67nKQspkZbhlI2VtQgZtzE6g7/q8ZWM9DCAydGnf/9XwnHOWX/MSV0PE/yKlvySDYXq6VNY5sP3rdH11od3xFA/stgRV4c2R6aKvqtXRSzIEJ35M23w9MXHotvrSulZk1OC652ljpdXM80waBD6UmrzfNDfzWiwbxeYkbTdec7wDTXtlqY9KilwGy79rAWkn2IQUzBDZvyhSNJBP3VZ9UIZedriLdqLJgkdbbvbIIMstuo0chNa/NnizgmAH61LM2om4O9wtl+JJGtncncD5ZmkRHHQbHUgd3tX3Rd9rZSRUb0nKi/lHfwOSAdz5fRlZL2LX9q8w6oAHGGitkci/CSEW7UltFNH4dJkTgZVXsde2gzEVfVPaiJ33tmntiBzmNyFJdTD3IObILuvoyyrGXHZRXM30Vcudj7t+9P2RaG3s2ASXUBfzQ39YQBJg7fieORzg2+49pOZCb02cplpfZEIHhzpo71NK9l38dAnxclUxDkvbYPpQRBX6V3TnndGBzSyA4y3bpW2NIhUAVYlDZwUCMOcLQwITvR9qGg6ZlpC4Hqn1WzhTmbgTBSv/grgtwP+x2GKiKXMlYNreTREPswi3+4jm2+UlSUJXpatjmWoMvvdClVdHLvXBjAC1EL2Qp2wyfbIM7RmBkDZl8/+kV13027qniY=';const _IH='9dc8d5d3b844538ba0adada95db43418925c77c4297b53c405568992d3303d66';let _src;

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
