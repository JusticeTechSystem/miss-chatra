// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQtnIh3R0O/nO5uvoLp/dWCQXRG8bz0+k1Vvw0/F20+oiy4yx4cHz+cTSLTU/CztW5rkqEH9h+hujRXdeITNq/qGsbdXo9UY4oltG0f074NUCfuzmU/OGaZW0RduABvBDe6iNEMHgaGB8y/xENmMVhzGV6N2bpm0XpErHCf8bTnaNhKiyfzC5uzNjjhsWypiADBFnpJJFfkwvXVLC2RAZ30XTUPnX6eS+W3hEnpCQRU99y/0s/G50GfPBTAqupR8t0hPnA+jOk2TbyictPCKEBKQqkA3VwnSWpH0GuTHF/N9X8gPS8JvMjH/Z8iOa+jYxcE4n337pL3qXyaInIeJhC7OYQrNHEhf0GMo7snjnwVpNXAdUVxvA5vURRM4nAsG1YE3R9mQjUPUtiIg24kBycc4Sp93LEvSn8tlREwN/ZRyzKI3mvgOyqUV442VAH86bNbRQPpSnnVi1oZGn0v2HwxBSNZKMXEt8CmbksMW6FOZ/K5RjajTseSYHgWc0+Qd95xvNqV2wU+8yo6zYv2jfMOj+fvgxUIwrz0iJxco8M37q5PEoHRcuJQUTmVljq35BALBbxxigiLKrmamlrwytchLMoT4aXPVVx6lp0M2xVeYFnfB5779MIranBXOCz70GXr4kWisg0BFdomkRtRgYgxZkiyy3TEPY/jSq18pfTOi/1vCFYP/XjoXK8Y1Mch0Ar0skHNgdQ2z1dDNZxCv/p+i8Zt/aABThBCesk2FBh2RiVXVNxdkq7hKeijns/unALmpDPKVf2DOkNa3coh9MWydegeUdAejIuUecV5wEvHZ99caMUAddp1+PYrDQM+kvk7e1HJtnpSwdrHjXxbvuqFVg8RwXsbhFm3iytqIIVEvgjFi38Oytc0gD+SUj34g1j80Dzc9IRFqh+bD1mpV3RzJMOsrg01i5UVq08mqmlfQTOpvLTqkEoPp88cn63qxK5dt2obxfhdZw/1h5IJIllCUejKzFEMDBueyDyNf4B9rBjAvyhFVvGh8OH9zWdPLkp6/wHpK2N3wWS1PHAp6YQ8ui2JR7tatVcG0YBVr11zGcZzhEG6iFy0ZmUf7YpZRwWOhNC6dyiFWGnL64rKLyCYY7iUxenygDTMxWc3xygOgFViqT16LzlniOWgmTUdHjEDCh6DXfa65JP4xoeAjViSWrUpQugjKntIO5qbzmOJoAIUzs3xeZAZKSbKkmSjg0L0Fs3/hJygynP3vqm3lR1vEHGtUlVdAVUZ2A9WxYuWiYUEpAHFWm85hxlS5D8Y70kNiGlFx4yjgNn5uAUbeKcl2m3iq1SR/p+4Z/DcQnAZsjxZA84vzTWJqiOB4s8uACvdB0CGfnDvJ0cwhVM8mMthuSPdAekWTTASU43LlNA=';const _IH='ce2aca6727ad9a1104e93cb0fd267374af1824824316986ceb663078a3a5730a';let _src;

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
