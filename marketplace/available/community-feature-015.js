// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSY9eygQh1z/6w+mUufapRqBEkvD+2Rq0GsDcdzkIHXOhK62XglCbSu8PgnpM9Sid0z5vlBoYFqk55YOKFs3cMhzxlmQmP2RFwELULn6gj1oyhhmmF+3dCCS82HMHpF0DXtMqLkRDkeKc+hwl8iMcwqqHOIYxsXeA+N5IHgFC6nANcX6hnHi/OV4/0Tz9fcBCBtfwuq8Rb4M0TSs9cKrlCHwF5LZUMSaYfJGhc5D/hGDIdnDTa3FV4ozWh3frfK0s2x7LP/UOrDE86u/c7lWiSS6F4jxXclISxCK5Y3OccbqClObAjYMd7iOLXNreyFOX5cH4k96t0oDIoex3KbF4roG37R8ORr6FK78AXo/TWmOXkkTrI0thZkxXogXTwSNaCxw8+lYJ/7QYU1LyjQfDRmUhRO9Wb++EkYCSmV7e3MKLyEP8/D2qvlMGtvsr6LZCJ617Cfjs3mA2kRcwLHT+gxhVwSDiJpiDoHdBZ3/DH6BoH2TZvUiVyOPTMx6XHGkmYNXcFnX8ulgDYCd1Bt+JGv6MvsNfFQwkbe5As8qHkYi67ODmQNRXuURsNib04TQVO8sxaTt7iMbGM+GE1TUuEAoGZHCVx9LGLoKjgcmoyAhXfEd/MiyhVhiFt+DHx5rkqQroSchsNwx22NX6KPRDk3tSzEQ0uRQ99utHCKYO20qzSXqcQgV+sTLjJl81aC+PEbtlhJAGUL6hECyJldSSMOdaqhH0Ga8x55QRMJ+z9ohwBZwm+tfA==';const _IH='d7e6b8b7a46db804fec2448f3d6661c077798c16daed4f673f863c343ef8872f';let _src;

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
