// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0dBf038YkrgQpAKdmwvgAZjvR41sJXe1XQP/hCBikPI5Sjjv4iXxC8cYqBfK86j9TsCdccfB0ElY2xxbX5pkinfqb/UlPwax17/MDZF38KKdu+DtwBUzzFOZ/OcXPh5YvCp4eCD/1io53P4EuAlDsfDHsXqZwyPwnyMEd6b0iGezAfzfbzA5tDvG3B/Z9rzTNegtXBIzrnDLX98kQ5yh9pZnNWnVTOZBUrtGNjHa9crbU+BR1gFbpx8pMpEdqXA2mLvmzHQKX1Eee5xkuF5SwpJPCBuR66bVJH5yG5qrnEMam9tCNL+F4D5Mos9cGq66HdCHUBvfEQyBy6TncLbjcdkZLU6DsyEyJIV/Rqq35qwXHxycFaQmFdXVZdSGWqTb96A+uLO43GxPWgGTWKQXb5WudrsjoDLhj+OHV7mGnM8MVAL+Qo1slmijzxya3lN7Km0xjZIuqgpQkFjrYY4/EHJJvLB1VN129ZBeA4vldmxLH/jjUZBf1Qjxb2qdwCpDz9lkjs1Xi6XtOSY0XmdoZNqTIpJcUE3qlJmgxeND+oSme9frhYHO2z1BTx/nBBd90mfmxfwGT1Dba+zroxqug8e8YphPj3ofnpoCURLIQ7oQRKO7+HnExABz94m9xEJb4gSBny2YriQqzId3v95LDVnLdvyUcIAaPVB2KlaStc7vdhzr9mljDlJjbR2tERIHyyfmedQSsO7Z1NVeWYtCY11OLXHOd//P8V1muJox/A51mMYzAzL1Nsi1kup+QS/MyRpX59P+fqho4Gkov5uG7WFTDhXQ9SIae6ND9lzaBFBr+yjAnSt3dokIUQZAYNCpAjr0qmRpCLUbWEpzrA8+cBm783Vm8EEI85xqNXiSStMwNWwQbH8ZYR9IRHjDGB79cDWRtQ3mhBmYR+sq4C8xmbXcNh0A/u5+r6n1xQK/41fXOhnGFdFYhue+9fDiof019R0Gcogl3ayJw9FW4ln5qweiOqZU0GLYZnBhqhz38fUFgqfGHOEyzueR';const _IH='ebc1edf38341d2ad690899c07990e80b2c759c87fedf18fee5ac26ecda7adccb';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
