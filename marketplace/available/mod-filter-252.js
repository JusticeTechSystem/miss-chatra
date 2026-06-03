// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zqkk4kru/iCX9aFQepBMzYWCFhx7D2530tbyp5TekpVb2Idd+C4Ka2lKIN5KU/UMol8+DOLmySYjp7tQ92jMTqERiy74RHBHnBKK9EuX52v/X0Z1neSDidCR+KMghnK8ZhkLZVPJnHV4GbAcSzzYe+SFFMTB2lFVteabo3jKph6v2Tm64LLtdPPviLlFY6ufVt6emDx5586Pm4AYXYMVt8u0MbVkulPDnFCGX60qR5W+o/f8de1YBJ0arMQxfAdVOPUPDiQlR+PAZCSgI4epW0+/CkJqLhJw4XPsI8GVI5+EZFff8BMsSWsfjCNxxNDIBpXuiDYFGAd/5/sFoP2nFnNh2mVl54DktbBq0wruHBRx039qu0HMJZemA06Sl8bYcEfoj8gAg0jMhsRMkPzDUyPm59mJljI4nqC6x1+3ZTIwSMaZDczoLWS2YYlgn4ihuQXUIVCA5SbslnicRWHbeeQots8UwpFUPRq+GiaN4q7bAwZ0JrEKEuabfWnLpu9DYm7SuhPWZ/ef4jM0rTsjJpKW2bYEDXrBB9Xt1+IkIImaU5L26CSIQxu0XpdU9PS9NZrUWGBz3Tlzn04m5Gznu4l2kJaDMzp4JmPN6J9Q5//CKbAgySxQDTS6E1ohr2mgiQYvo0TYyKzIEe/JwmM2WRXJjljzKSnYoeq7UDzXZ65Bqfpkii1IgD+h7Gpp7UsqaOXiYD18FV/VFLV5Uxs/bNPDn5dtGO7eT/G9J6ne+8/crCFNOCflXz+pEMATRnDVvSG8Xnt6I/5dVZVT5r+0AWvflJr/O+IeG5HXTFrynfnuqSC0v1Upl0QFPdvdPyue1MwGBg/eU7WtHBi08ff/db8Cj/K26t/cBW18NlEDaiFEHwFdoMt0kJoIVl9jUCwGKWcaBTmzO2gcaPkimfVr0GdWDQO3Sti6cw0+xtj2IAIcwKvY2uSssfRZucYOHLn0H3EqyTtj+Uph+/gqKNrZ12cNxp7aYs3knqT+yo5a4aXUf26FG0eCvOPLvf3HjZZAr89AWMkkNCj53wMmN4z90N1ovdpJ03iemkucJTIHrvROy6bbGBbelmS1rWmYvQgXDAK+WiEkp1C6I10H/x4URuwH9jKT13v/qE9EXHV0LenrxYS1ZBftKwRnJnFOPlW+TMKPOixxPvxRbwNimBxLA4m8/1YAL01Fz03LBwy1or0DKKwFee4pysARqs0Xh9zdlMrGhsPdok2UDZOYoiaZYRUzsZSbzxCew1Vv48LV8kf1VFwBCUZF7qQpc6UMtxWLLMjvqF9Y+wJRkmJCguRunw5+YtqO+cKrSnwFzZGiDCfIq9JxWjKqCQax4jmtTF53bvZieHKOzHCyYspqpKuH0QIPtlYFXp6uOJ8D3dxHiWch9TzdnGw8ZQ==';const _IH='1c524ac57c6d5fbae8ffa9ffb3f596d7375e5c518d1eeaf73fbeecb18bc3d3de';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
