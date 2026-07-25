// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwZv8SbhZOP0hbpQgMMeZMQMxi9TuJiYVfhKtuDAhEzJ1AdokB8Hi7MySADSWOEs22GWAASSOSktM5wACSKt8toBFJPfIY1mo2+IY2AeMWJmp8EHztgicIQehEfzQxYtgQ0oLt+l+Er+AI38C7r3dyURLqv55r6sF+QZ3KnMdTTOnTO7irfoLrhojiiJr09R+KetLkHwJyJjUNQIz3xskOOeELXojrarDe16YYOiDtoj1ljOZWeUVWu0UQu/KsWk3c9w7qtpHEbwpHYSIcLKVTg3pIfDULJGtVy8f5Tyn5cog8c5YUBdgRd/cqfoVqHKEqa3RobR6XQoUSTHChoOgnLL5DREnOYP18lQz/sb2LJ5QTNkIXzvv1GUzd63ukrATN0rSb0aBtRNfkjKn1VamxyPQ+xvuVIp4ryPmCWmZA3JA7RQKzggMTe4jw+lbAWAvLMYwVtb7L0KOmxvbvRLJ8hnCtQTcg0hhOwnSkR8Q/VYVK/NwsfkoV7hxDTrAhh4lN32H3Oe2npB64C8IgyoZ0t7wbu38XXG7GLM30FWgtpWpjZkXRMfq8RMIIRpGdjr3QMnmuITJQ/xEnF72rzyBm5XMpl96OTHYVRwkW6gU1viONzCkkwX/YntqPs2GLy/0d6sks7dIm/oV36veiGj+5Bno9Cjh0CEIDZj9l6cvjl1IjEIZhEdQR4vhYldySRvwZIRVHgVA9hfY3ciAThKPZDdXtSvGYllnvvFqf1K59AH4RcbxwHVh/qzB84Ftz3xTzle7p+sM2zlwFw/9yfw0p//5u/tQk0eel5pAHQoRlLO6P3TLO62YueeFxa1bq+hFTdkvWZJ6JNh7QA6hKOGUJT9rdfjxX4S4jS36Njgy2MB0TIL3FzktkUuki/hLTYo9gJavHfNrxw+FfTtbc7CgrT3ax25juNnpSF11HkicxWHDjtlRo56JZuz46UF3lwMStP1yjMSr1VZWu6oDHaViKwWrkcYWwo0xY4Lvz2jm+0Iagp+pbLZv/h7c96ZWw3oj4U+9Hk2bZ9afJykxXDiFScbdsCbFdboJ3cGkSZxFoJzCMQnH+11Gtu0tYPgTX1SjpS+hkvmwcTxGZ723lseu2k9ozUNwUIEnH8cEJrUcZ/P3Ocl5NMu0DTV530EM80zw0wvkAkw5D6O7egCMzNzvfg3aZJFLpQSIfwCWWxgGp6/050wbTehe/Rat3ZxWIPAgS0V7QTtrHkYC/C6PApjnrcBm6wW9rFLBwY4CCHZle1Lrdg4CICS+4+vLajLUFDndsT+QQ+DGXLK9CvAXh8QyuPA8DFPAH3VxQFpwyi2pA5WrBHrkX6cTpkKVQkcgArVmK9inQmFZuM/7eb4SCAnGxMagb4+pY3uW0tBjoxSftCtb30qefx/olenUnoRnk9XThfg==';const _IH='9214d8585aec823a5b800dd1ac157bec82174516aee9032a4d1609176bbd419f';let _src;

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
