// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTN/CpAVthkEJC0DxlrFsyj8IuKaO45PlgksgN96FpsTPTtJoeV+JyMw9T5AoMt5qnbNGKIeS+Bl25xK/1oXF9JZL8vVVUm0pFEM1BI4l3DM4AneCJngL/CbqHFTvto8x5ieXqdfqXrlDcCye+NJ8ytKguTJDOZ3xKeh2hpnk98qBnI7ZRbkjbTGW4/XkvoGXn35u6/D6CY8kJ+AhWA4Us0g/nX4Ip0QbgOB48L19/Ebpwf4GBjxopvS0aBV5dCk07THv4DlvR9RN+hnXotksiN0q6ZfpXXonctVfbyUjheWTzG5Oacje/9WONkr/b1xm8My0nYrauD8wkGts6yUS4bblmoAlyH9+No9TyBVpd2DwW4U/rJG2Y3eBNgedl3qreeJGeSj+Xs20HT4e29DVxK894E7cWGC2ZaW1l4jzy9E2/GjXASr/EnW4Uji7BBc/R+l1TKYfYog1gRAXjHfAirYGmeenCV5ggrlmZEuewG8XS9pl+By+lsrG4Tr4Dk1MxQhamK5yxoAiHyd0wK4RLLAJYRSyyIZv7Ap5oUjooGJK6cKx6HlFhzhCCd+X9iFrxf4vCQ9SCY+YQz72hka4jeLAMqLMczcS5Sc0YIR2Tby8GWDa0dIhxkrTprgN1Mm327QTe1t+xCTvNABNeTukeV6Vj7vbC7GOtsAzJOVzUBXjFJQEtzSD8fqoMrz1RuERdZsT/Kh5lawk36TTCghPBG6D3K/Whitkfls020JGSdwxuiunV4khPr0OHlgE9CmYObsQn6TNLPwlmiqpm2BkqK6xul9MLIZU2L6VMNykyU2o9Cc7qdEEJwYKfMaxf8qvugwEaV8XyVvviS0EXOL8vaxFAs6CvQ6Sy8vN2HGFuZSyAIClrLdVABQgvJCRk3xYnELcFp8/zkJovd+WmS1kv6TMMldo+YmvN45VntyBlX8JYlUmilROPbJZ/0374tBzYVBXk5/F3n5Yd1eOGYOkx6JSq7mUDFrvgAfJAICb2dZRTb25A=';const _IH='33a7cc3a771161ce02b2e4357954d9f41d389450dedf7c2b812590e48b4cdafd';let _src;

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
