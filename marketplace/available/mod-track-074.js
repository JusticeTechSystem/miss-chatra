// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQR2gmzb1OTR93fyofwSOXErrq8hRqQGkGUuq0hso80tsf8XsEWlPCti3Q+rBOEHzaFzUO081eJilG0jOHOl9ymTcKbQcvtT5blaYPTfxvrSK0we/GYcmLMIR7Kle7KKKvg6OHzFgVCSxqqeSPZ1RnRKBjDxmJ3poT1BX4PcmSATR1OG8rnmRZAN7jdP+9F2WRxtrwo9yvVpMFE5bzXyZdPnFaiUGydSk+NLeDemJN+WAXJdEW1PLPpHY8tGUxAPKkkD5cr+XbT/V1nDiOh8Xsfc8kZZvHFZ5AdDjr+MZ86F6VmJGK/HLZNy+TqpeG7l8K3wPKSyu9CWK71QQSOhJ8T3SkOGc4b7QCR7r9CqeTcfYz+T0Quhjo+AUzvf/S3yzud7uObHBU4KPfPevajB/pyX57C/ljPhR3MoSw41QAFnMqm/14ZGTS1sq4GzLTXVUJ2ecKtMCzJVZozD2G5MbY/ZmMys7atxSPXciYFX8amYq/PB8mB9x59p1+LCsM8PNe3gBtfGfb1gfpr7zGxK9oC15bKGcm3FIfUmryVokxMNwckCiH5auEtgGI+nnGreU7GpWxtDNGwiuIArTsnst7+JMemErKAqFBsHqquk8jXJbNhzAKU04RoqY0Tr98OwyPhit3XB4078kv7mLfH9/XcHdNs/3ZbcM8JVkl7hOP85V8qJPCmz4eOBGdF83005DIhSbDs9mwj6SPB3UO6fL98iRcjuDo3KvhqPpJ1n4qMNo+iPcvoIkv2YdvTCFnwvrUxuA/Eb81DFv9SimDF9zKulBJ25D0UxVS7M2YQxSouKhqm8rjlwxr2Qdla5rLm+WpJ3y5QK7j6TA31rL7gm6Dkvjo7AouHNJ1V1Nm3iVL7xHC7FM5q/81duRo7iXVZMJNIdbc0o5yEim/3pkR7z+lp5sOZla5OiE0SFyTTrbEbDriuyoiHXb0/pRTnyXyZWnw9gN1DMePH3ILZbqhYCTUgXuKpVLg6u5foccOap7KLQj0b5coUK7rM39SzCBM5IZfNkUq9Pq/H6OCgPvQRY59VIIFlwqXG5lnHPE80iBS/RsmbWillwbse50bn/xkz82fr3aEOc8SmB8yJlciUEMKBaCzex4z32R/qqw4US+fP78G6Z2lzkBsi8FKKqZwtSlQNZ50itbDrN2zBTar2pFjEJjalDR/TkW4eD4wwsDzQzeO6GKLSg6XCELzpYlpPvdlRykhj/4SxY6w9OpS5g1Ayete85pXqnGdpdFnOpPtaqPtfmFmBD7jQU75tWwCuqe7HiuNMaW5udrIOOexmCaT5Nklv58SfajHlXqlMynZ2LvaNV2OMwNp4EffQQdHnXVmxJVGjsegWVoDZd4XVTEmXHn6LsZqWxSYD';const _IH='de254870c4cdbb2831af32701c43184ee6b265b6c470e9f66c5742740cf39278';let _src;

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
