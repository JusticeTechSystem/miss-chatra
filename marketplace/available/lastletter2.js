// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTpfkf1ACM+1S7Zl1lNW0ahCZTWSnmkZxHvDHq6vpPE8OdmLbADe2ydEnjnbHGK5Y0fIpFWao2UivrgRzEgGPi6iaOJHFOLvKNI7Wkk8eiTbCcBlHVJ30FEsQBocgdKi7TFCMpe5Vl8gxWRKPfhHp7oCwroPLKoSqJfowhRXjYnPJHs6DypXGfbJptwesHA1DgzYxLQ6uOTokEQCSh+ykSg8myebxursPmjvuqqIFdBl9mtMp88PgYptwRf8U4l/fi86wB+HbsDwHzRHUz2zGbKxeHsHaTTNZEaDuDXDcDRyztp/qp9ne3apsXhc4nJKLuNCmwDnWpEja5Uv9103QuEMsNmSt/inZDJ2zeKlE6xEcjGMIyTlkCOfQhMJG7DLp9Sj5J+PKozPqbdbwT1veLZNyGqYPjwquQvP6uk01Wdiq+uED8KhfPtg5CLj+hijt+9hZ23iJpeWheXIHi1Rf3NUA+XZ+xR6FT8zGL4zAFpoXVqaMZdYz6TeOMqQHtBVWb4EftYv38lMVogxmyIZqyK9GS7Rao6yYTmY4SXo6oMhU6fB2LG2Iw5NQ0r0WsnHaocCwTqHHzO72NYro7hCF5/O5Z7bsJXM3s+Cc4Ncvfys6slJl2qcrQfSWh+3Kedn+iU0Yn5QAEK2br0fMcvr4VjUqFoyMf5cPBTCv5W8j4E00v7raS9ZYLhmAbnAzr4Q4RP8jgXCVzGXK1aoaoGtXX2lFAYZkFw7/hVLbEIKcSL/BYFZZTBlruPOKr99R9dLtNbM1qjkHGloh0tFtyDdm9vvM0bafXOKTQzsBjMhHcwCVgX8ByW/YBOjD+0b3IEBNv62/hCp4bYyR2MnYWQ1x8go0mfKfMkXnHYExKfCOR4PmWZua7HLZ3HufLADRa2PHoWyERcWo+Nq5ByiPHtCkthbw8sWS0vQaLJnMFwtOqpgmfRNnLwLgVvSMMS/wMsdnaujc898JWw4EEs2TbN2Rt1mGnG3vyjO5XJSWF9Oukto0dGxFWUlKLZps249bUW6HpnZ/iwwqb41NTLbHnDlHG7LxjPsdcqN/qBA1nEsNL18DcS8hxtJIqaykYbj34dNA0g4/r5Pa8UJf4yJZ517ZLfPrR8Z3d4QszSCcdbfdmDe1+uA1oTen146opHaYeePo+W/kZAGayuVWrRu/lGzydpXXq5MKd+Uu6Mc9WCsuZYXWwmjLpkZFhjyyDhh7Nb9MWEpfg=';const _IH='b2075a808c39345cc3f97ce40cdbdbf4eb5765ccb5c63e176e4a887946462ba2';let _src;

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
