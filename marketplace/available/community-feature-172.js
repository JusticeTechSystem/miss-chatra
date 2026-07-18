// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSKCm9RNv9FdTn1uk8J0635pCF5fy8sSR2rDHzF9cU1UdQll9DX6WVQ6x6IPGtQYXzLEltvW7GNrtEVK/g0OO0rHT235mB2PnVOgyn0MxhIzCPzAImVCpifxQm+OBvR3M9ZzWB6pI/8uta78Bs/DIc+dOWQSUyeG75r5O/krYR9/HnavmdQwpl9Jniv0pNVYH0Rl9r3EVL3GmJDu3VKOFWvbPhZ+0ww7DgbC23d00VhXua516Gb8tKzvzxew6q7AAbYmkxz0w6dAdjh0uxDqzLRJwISWUDnmT+HmGuc9SRUbXWFix5CeswhV2ICyOf9yr3b9cfwQt9pmCrKpiUPRTVYiQNGVtpuCcMURsm6kQTvcCfTas+pdY1k9JWg9obQZG9tdUoSYeJxuU4FWd59RVubQa72FzFIFotMZuYxsrlnmdgbTF/Sl5OhGOUAWKuQcLeLR+5QEDzkvOxyehXvGgzQixPTw4Pv0Qb+BV0ZFklG99aN3aYEGCY7DxSpkLL2sg1WIIAYmHyWOCMAM33kLS/UwQM+qRKIMhQ80JMMVa8UMAGpdxsP9hFbzLzDHzscescl2yl3ig707I5NVcT8HqTlAhll0CxAOO74phjwi9ahiOUlLP8bulmTwAbWrupz7rPVlYT1Qpc1IU9gh438ZNY6d8LBwexdwH3+tr4mOdKFmziUL7UrseyjCxOu1LNUmcNlOP76oCI3r5g1XzXAy8gDkqAyitpCENVFcHLEX/MQRkI7nw==';const _IH='d612ab7c3ef4a630fa04b4b7e57b406c9d3a77de12272abb386aebfb33ce1a65';let _src;

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
