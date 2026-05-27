// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hFUCNv1tU48cs90dmHk2HbeFqWn0hdmYzqQUoRaK20R6nAI8AGNTmqE6TbV/mI8aqPUY8I0/0Pl02lmsPsNAvqM+5wMuAAsImKwwIaEXH+LLKz/wcpxVGmpZh+acPpWx/3Seu6v18hR1k4j/7XJ+AyCpkKYUtSvikZtH+2UBkSAVDn2k9T16KAPF/Fy4x5qHrWIiMRjRUhAgxO+c4JoQr8MDR07P0ujICWsbiddiGcdgOzbCBLmv8g60MWxTF1OgzqN66LKM3B7K4I2CwWp+tJAsnKSzBKIMC5PIAVxIRXRY2ZMSC2vZTNtQBk3sXzARXCpngCpwm9qJh5M/kTHY5+WiD08N1aEtIw5kiWSOzc9wfaaUhe3aPhF8XV78fLd2xfI666VcXUDCpfWdmBtZ1SWXRAo1CuTo058eCYRVbreez5VjjVOy5CdZI6RELzK/9/SdYv9RC2DvHb57qXSRv67YJSUf00GAk/ly6C85qxN67R6zBWCYQywSXYIENadc7wwj6mlbT+k0MLYlv8MHLo4PWr/AZVtSsqIgsgby3OAeph2dzESqq+ztH3V6nZD+nOljrR8MDW2HyftUnMXWfaqATI+AgSuZe/ECmnAvsBwfLWHurSm/lRhu1M6Ew1bevwES6s4yAObTmGi2KZsMZjAbRQtShRuQxud6OVkBMBRA0lUv6DLT9x2TmZ3lDNzdY67uODULwQV1fq4Hi4rRO9RJhNedDsLRp547+aorn/UFPQttpEBijnvQhiAb6Mk6n/bMsJO1pCiHD3e3cET5IqexI6Hcuzpicl+nzp71QOzMdkSVDpFE7Qxyv9jTTU20AIR0Rs12DYtq69fdgjnEYFpsHqM8HWn7jdNSIbFZmzVPVFxZhaSEpUMfT9pqYtf8++B1nWy3VVaajAc9mM5KV1W543iOygxE7BCo+wyvaccDWBefkPvBd0iOHFrNs/rHFLobnRx8j765HgQo+aoOkAieN3oMHC7zaf3qEqHKCPxMdoOy06L07c/dMBzLLMRRZ08QKKKebjSnwE+Bmpu5g9RUs9ifXCBKnb6SEpgu53/qi/17/8nBsXHzXB69xQ72I1iyJSWcJ0Xr0ITXBb194NEbECjH+2Q1eeBRWreA7as9DqA4tLQJPeyUykVH6l7Yg1nsBNRnZ61O9sYNV1hTssGHSZKzJsGNp7ZTDKAd1kp8NdKZz7Kydhsnrlk/Ah3O9wi6YWBLkLMBaM/g3JPLwmdkGJKe2YrtF+wbB1RMmZNqPJfuoRnfEMkwVsC/i5WuQDQOJWbT5eCbWmLF42w6jmrz7cI6pyco4c1Q+HR0+FDyu6FmZvmR3ExiBMGP194BKTzPhs2h/Hqu9g3Xho6x9JQ39nM=';const _IH='ffbae366db5b64e01b1cbfaab643cf2fb8e453620fa27400233d46abb66bcc9d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
