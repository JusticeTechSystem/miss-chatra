// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS+MrY1dkEZAJyaqp+cMdgcrHvv6qy3yaBhJ/h1dE4+9zfA0RQsk+5he1djIbtmxMHIeepXQxNxhaS4AsXpqLoBvRzs4HbyZkWKLqB2a7R4yvNX9TbiejY8tjcBZJMfWAJxblZnoXi6Xh8ogD8s4RsSad8Z1fjkP0mcV9BK84KOCnNv56yRguYS0n0H9c9yEEY9Ncn55TgxWHtACcbLABcaI2D026/1fUhLUCHf+lHlN0++MKjE/o0z/DMxPaUBRC1g+ClsFLX9xnx/vXLc9ggMvminik61ZHQxJLmpQ8P64rVnY0rkgtChqsDL5TupxAcOvO/xxy8f4tVslR8vaBXh9JRXMlFsQrnFQmKxhuMuTYol/FR1g8iFvvbJDIbLYiLUE7cV8PqnXE6o7LaJKD9T7SJOoooaVpQkQ4PldA1JHyKe2GUJL2HfrBaTpllDvXm6TOLGXkPSJn3UoVyRHZZ1uHnyzpEA5GPDpvPdJ2bSpWrthsNED6VWAAmM+cs4nbK4wbeumM+a1n9A9YTQeU6tlNlv/QOVUGyB0msMa/3W2g/dtassf+trZ0voQGBp6NnAwkoMy3N5cV0XruHC2uhOXTlpM3IC4WsCOloWSiV46edquI7OxXbQ2xlrQbqKolbMfpjDgR2on/pcozYpIb/oCqhL/wodtVGocuOWQLtMrcpPaHF2CVOC1ABihpRGLBUK+oeqHg3xXJXS+HPVktg6YlGTDhbsGQaMgW914Qiy4oWfoebUXY1cMFUlz3/3+VcqsWVHBZyUtgO/E5wVFvTK87/Kl7bEZ/sXt7e81zkiJGgVXSSC7PUNbUgVRWtaWTRhg3Y5iWjqYRd3bZFu70QO1DFs//XnDrMLEckOwdAex142sMdE8aVFNu6Xdsh26QqbwkNpu5Gr9CvzHGFcIFasmCgOFa436766W3y826BEcg15mCV1Q4whOqR6/9XW3PQIWZzWkWZn+ynjWgIbato+ejZj1ECX8pauhnhNXjYzTKyo2PHIAcc6Ip6vwbOHwaeitw/FBT8MIKmapuCHvy75WEYY59N7WTqEiCfyevkYTfKz8eI8JMiOraCD0hS46NHygHVhg/JXnYf4wdaZ4jUutvNDh+a2F/gHKUEqSOGkTsTtmRVaO/Vr0d2UmFKYMHBjyTq88XLDry8h51R/3htQE9/GIr0fA8ADG/lQZrz0man9W/YUDvbBNzRj202G48UbmtkHfqWDeyuN7sWMXvFM/48Q/yJUn2uL/0c46P7KWs2Un5hICJ3xmw8atLlzcjFPaIIVHmsWgDxDLENWcvIjbAMD/ePjUEYauqEzQzutMN/laXxhBfYjhmBy0yHlCyQgChJIngJj/hbY9tcYlGPgM2swWJU41EEbwt/5UelPEZU8vquNMWyQm3AAj0RyMVZ9Jxbp6NOjpu+ClReH84QhAHjroO/OkNhcJQ/D4f/Ud0s/HwdVjvddwUFIghRasRUS0PRUM7yOWLfTldrNZmacYFr4q3U5C9tBDC4ltZ2bcZXXwFa7ad+2hkn1ZHKaIcyukHTE5zczkcYSozj4PFQ9uZQRtGeJYRtD7IxW3TJC5wXI9fGs7Fnrkozv9QjBZnwl8VNxfdJhgOQJJLTja7gNULhke/jIbvjlqC4dzSQPufH8ztjIkgMN4enhnxQ1XswFkALEsFqpaZEkqEwInIM5qq5IuQz3S2+bsWTYbbqnswsyOKdDxxEelR3qXt1kyoeTqK9WX8mYYkJ7Nt0QDqcTR7d6CA4tTKl9Ju77BmBWDBDDRGNKB7/Jc36i61QdPM4Z5EKRqe+lHNPE7HvTVl00xuALEeWi/HNsLRMCKsztUpjJ9bDM6T2px+ZdQKTaMq0cfrj7hZff3nwYg/c2PX4mRUDv76Qda2uSNikUYo+c5qYAPjTZXtIywfd2X1/pBl/OncKEGXLS7NmNZnf/A40=';const _IH='8c91042ef1463d09781b4b9b1f7357ad2fda33e4bde8829782380ff3f2ca85d0';let _src;

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
