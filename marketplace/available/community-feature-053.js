// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTw+qWOXJAS/WH7T5LM/8v+FdLph7rQwvARTUTSOE9D4TgNAIkttjMUUwKXQIAjYyb65P4fsP/vy26uO7uwGeoN7qVwuOTUv6UnkRNUQkC1OZPLdMb0YcntCfzxaoNtpMYs3RIY82NV5NSNYxfLfoO+W6nbD00E/x1KEQacSfVJ1DvSzIF+BRP0bw/EkVDmOmEnkgZm/RHj+AgCoK350CqPNXb0Tv6Qd+4vq3CCKjjzCx4OcMNTcbUgV3wFo8FRt4AdpoNLhOdDOHi6nhnAOx/Frf5io0ZuQGZtl83O8KXXR79Dbd76ekrkKElBAs8Z4Ru6p45VccMg7L/E3sEUoxd7QARd4ykB8pW2I/RxSqhSoGSmpTcBKdFZ6Ee7xDEXM43lSLdLmIjhm/UijgP9/OUlCGLWDn+DQwh/qYEO8eYbncKdm85ha3Ylohqm8bLxrph6+/3q3gcnVs0N8l/OrdohDuVhGxN+VCnP8h3a+NtGcAdrnf7aCoccOf8jDgxGQsJLCNdh0jSXJyY/ourU8pmZ1B7D4Xjx+u5dY0F22UjfbutB4NRu7YkCQB1O2jxmCWoU5BPZbhfQile7DknPlWPMqggvSxcswmuqZu39b9TiKSSUlNsirXoxzw4ZVisHY5FeaoXRWNYydAQ2JQKRBp7gqLZ7YGwr+Gu8ok2wZDTwVZmarYQLSmvMLdPbaIStZJQh1moamByPza0QDY0dsdEszbQ/o5+oEkq4';const _IH='59797e053d639761b6ce2bc046e07722ae7a6699c38b4ff7182f444b7496c5a6';let _src;

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
