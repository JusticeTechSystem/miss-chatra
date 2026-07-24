// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSuHHd7HPScSk9SN5oSjeyta5wT20VuvrMx4nkXxF2l/Q2h4RqkN7SB85H6h9xLvO/34LUxTr23AvkQ8S0LZyWpW6hUxnABIPKQtu2YCme4uv6Qi54pOeWd4eJQRE3XkUrpeaWeUvHOOqe6h7EqiGuXS1z/Rzh0iy+BIbqOKqxeKGTDvLfJJ8S5xmW9PATOFv5ipthRsnIYVgetEAq74ge3XUeSmwHWijDR0cVXpSMeGaJ3MjovF9GF5j6S825lamoClLTLqmtPLmXr00JmNRKr76JNUTUFc5hSrPkAV3gJumImEe9aNIm9Eb/9/OGNg8euagyw77lV4lcj1+qJoe70ZzpEadHpWg8redKeUV7Diju20SD6x7Pex7lLYCJID3DLkrA2xJRkJddTHy89MQyMH1BejccFyUeC3oCIMITWhgYZPilzFjw8xoT203gojTn9do0mF1zXlako0Gv11CuQ+Wk9HYTzSHi6JYtAwMJWLk3YN9ib5NleS7myIWbKH1oLgFqiih5dv2VYH4AozxmTlwsujxfxCCaxOT5MeJKycceoBdXDAkNqjgSqtDQ/VfmSOgTCVU1Aap8NkMqun51HXMeP28PjXnjJZUmLk8tEooEQNZ0DAtwcikp3D4AirIqOW9YM4R1XQh8IIGo4TZWnxf/82EeGwNSt7TKD/LmOOaH8SBDrZw7Ju4jyVxbtBMza+aPC7irnH5g5Knivmn/IOm2fuBqedxSujxcPVTNXVqioY3RfiQ==';const _IH='38297be5fade6447a800d871bb1f6be7ea0e052aee5f9d486a511259dea5c442';let _src;

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
