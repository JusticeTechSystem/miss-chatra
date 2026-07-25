// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdB5MHk9tnui+jf1mkMZbBmrH8192Eh6kPoXUA+6XY3aDLpI0OOjNtizmXI7Ro3JXWP2hiw2HHwvg7PhvTdW//RCndfdUOZlr2VRvpRXBGe6OLKp/qZi9J94U03kx7OHMk+xjqzkSuuantlvFioubqcqSsTZTX7W1FDuPXMNyYGMG1FkQO/oNucpJKqrX6M6+A/UvjbaneLECftURtp23wdyHebgMyWweffh35yKgmY53DA+EQkX1W7VJTn7H8S0w4+91Sp1xpPLJOTObgs0AXZunW8BoM36yv2keoNrr2kbWMsLCVAx9AjsfmqopNogO0yA+ZXJf//TUT/lLuLUjpZut95QDwhimsPVcxSh+qz/ZFo3MI6b7OsBmFSSjVfMQB2ibYrv1UVA5ITMm0UuXbWeB8N1O/MEG14RUk0lMfGtzE4vjDRKt19lna5ZtUDLrmhkJx3Im3tZoSxstqqqTA7iqOB676xMjBb42FPCCqGPZBechffNH0YUKzXlfOua793oc8+KCALeBuAxRYAbycXqp0y11t5FHamqHUARR0+28va7FbwfMbxPfpwpWGz7p2y8m/ii47tmjh5JWSmOnjKOB57ynM8OoZaZWlanv2hhKRsk1T50AnoG8XwRfRjOvaEO7Ny3asmHmBYPOl2BCW9+UmcDpO9ZevFzoCg2TzoRMpfS5EKxUtUy8JENVNMfKN+5HxhzUqMaAFEoowZVdIB77g0vMt61zzi8Hl7G9QTkOVF2VcEtlIbRzNzYGIZDHd9uJRDuAIGGBIshpZ74OGZ+Quu2zSfo94dkNqlbqGTVfjJnxIYc7OoHu79m6nkXvMeX9P9uEvDglLU42hxz4t4FRCmCloxirZUglVyMUtvUs/awXvk9w+5Y5PMHOpK0XpHTDektWKkiDlSoXxMQ5eCKY3aN0NEHZa3J2VXzfu06wAjJG9OOuymSKhZet+Mv5aqf8nRPC7GO2PkcpDXyu0nGcjuxQKQvTTVJvKKRZYlideHxh6drUHB2bOZdo84j/JaL7JkEOV03TaO7TE64/rG3Rr58IQYiEmmoZHi6MkljZf7+VWI7RpmscZlxniTuvinhpkXIcwaKJOlbtESa8ylBItv6aEDGB7VoUL7icdRYiYcVjh7HlsgazYJG/ozyMB7ssawb6UI2Mgih7n+GIR/UBahmnKr7VP4dVkk3NI0zbJGWVNlHYDNK/XPmDjgu/YsNhyzuLjyS6oA5+fwOurW0fOZkVl9chtvVB/d99E8aYwNS7uoJ6kiOpFur432elfvr3PY6O+8ZwyqfaiT/8cpaqFntUBdtTwX9FfGKuwrvl09kbCTKj/9yhRJjPmk1/lYROYYw==';const _IH='742cc09fc50b0d78d2dbe6cd742016615263b77e662301228d743791f75dc553';let _src;

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
