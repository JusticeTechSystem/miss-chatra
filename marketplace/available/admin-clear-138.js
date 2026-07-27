// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTooeRKB6NCCyk9mlvR6ZRT+8MZT3Idjb84rCUkmKIjwVVSvGcA9fEwSBPw/ptOI6g5/o61mNmGFsUrIziRk17KaeJ1v35aK6JlJt2X2Nn7CzmL6/krxP1lSIFUYiS6xm21VOjrKRbYW1EQm1pXVRGwAc+XuuYLzo3nBePvv/tZjDn0INMnP/VZpXEdWyMA46/QWOZXnx8BO06n5indHLo1orUYcq8RS2anUyxAUziLiYJfkEKI557Bq/zhWmL2pXlc/9yAu335IBVO21PhUYNeeHHVdcRwUyPtlNKOSAVXS0mZ1gecNHVk6TbgIJ3Od1leufy5c3MTAyrbh+Xxbo0y5k1xXPRPy4zF1DPxKr/rfQAefsGS2mTyYKQPWlQSifJR8TdrJXKYYpx+53t6P4d3x1X5G7SCzKBgl4NVx8JaW/Z+gsXQI17UDZr3vwUtTd4ezFYFyqipCUDELcDT8fm/fIdkjFLpHhUXl2hRhvAqkLduxJHPsyjzTQIK4fvfl3AQZKaTo0xfufx2cfJOJ7Vawohb6XFUD82YiP/rrICxgmuKFnXC0glMvv0y5xxuMBiNr/seuTuOppqhOf9I7wcM9W+svRo/X7fX4ETazsGEYHC5ZryR2lVutxZjIB+zeo5iUwf9yFX/NxOjkEFcDCCFJiqmN8Ox6CGeyNms9A5/J8Qq1YKOob3FvNtVVBImufom1R7mQILL3PHpuoXmtRzsrA1zTSeLCgJT+dw6COITsOua0hzc9+un/jsbRt6XYDu6Jv2RrD+/1X89/6Aik/haeBElmp2QZna2EounfyxE8pR6fTgFSTPfAZCFmYFizGQxRLgCBJGdgGb5TDtpCzmArK8LVQfzLb0yGhYZlq1QYQKAC2HO2WTr8xfqQ30JJYmjTppvFFiJDy1/uA4IYsXAcRxPsVCXYcSHn/SZSxprDKhud7XMJgymrNvwI3lDjMhgT0dylVCdTEl0DhOCPZ3drWgGTNCmtuf7Psa6cyKXwF5/KLzYzUF3Yc4=';const _IH='3fc806878a1537ba0b5f2c887e50cef03b2a2dc00e5b81f70f40e25bd1be2700';let _src;

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
