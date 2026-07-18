// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGfMebGvA+aSam+Wf0C950+dnDL3R0IYrt+qL44yoQhZuS6sfYrjz8KloxI8kGFUMW2lIzcN9Fg0Cyp1WL37gIF5h97kgChCHqtcJVydlmLWPv7GDg9UTkim20D5ggNwQ6Yr5vePgXPMAdUob2fi8d348XBkjRqNk0LeLXkppmtkLn050GNt3EEsw98oe4pDn2RPEcTTop3e2V4xFs4FvxXAMc/lYVYhqAUqjrBlJepCFRMMZ+2O2B7DJbPDvec1S4F6+IMcZ5mLdcymVsdh8nyhtuvcw7XL+M8ewxyZnpiZ0b5ILdZ4R9N6nPcYl4cHJ9rw370c75th17Ino2v75q3bhZLGtUwQE9Khfa3J9/ZG/15tilrZHSHC4ByAIa8fzs2egnB5exQ6QVEALlp/sJ6U5uPC3yyCWfHstsNaOE5i0KdCM/N1WjWHog0O1xGtNfaXCswkwoFAtZscgduhJmgTEbhm/0ipa2iK3J5DP7jx+V/sX9LbJ7uqtnEdNP8vZttwbVlkcIwnc19z6iq8fwYWq7OnapjMQ1lDPy+SmaRecMIDo7mNBOJTbScfT0Gzg21+DWFbWlAOo4clBNOy9wKaYesSV+KXkirg6g4fd4hFbT63u+HGyH81bP8JLF+nr4tPa/i785c9SHLEeFx5OwAPsfXIKnwdqD434NgvVV+b32o380hREWz4I19AyZSTvM1yI0ZQ0AEaVhy8L1hP1QAU6c/EEgCcd008AGSrFIqMFLczbMQpYY634Zn0dA6cOjexfUrz9M4a6KZ5crZQ6BFPBjOicPsFq0dp4g3nPeo2pHDLp6lw4KarIKY+LZqpuOVCy4LCSpAB4t1lysKBDvCOLPFup3uOrZThfr0TLvq3depwUtqk7n9F2EMMqBq3uS8HHpP2L1fL9NK2YmSmV05H+kxJWbZM6uYjbXhdCHV13P7frePEb15+bfIfkcm++HEnsaDM+oGoDZhwtdX/EduTK8Psm7MWXagSErGWJFzsrf0FLiHVm9v7QrKzB/ld3vMT11APxcJAiFPUVu33wqhIVYxn0EuiAuXddbZN3u/d0eAaHSudTiOVCYb3gcQYSg7+DnXbSe9lvsDNM+TCyksl6uqcj5vCVZq/+vUVJlq1UVLhUcCfMEDG5LfXe28CwgA/89GJbUs9vMyHXxuwczdVGwbgYCbMkmkxrLwk9i/xPFX/rxkh9fEpFaXNogqdjHDdJ6+O9BTcGmlEdbpSJQMH/JYaII4pa1UhIz1yYoxXTitCAaIFhmIzJgzyK4hCcBRSeQC2ODarubBuDyOW9dy+hV0qjYx0rxhjp7qW+DuyWf4YyLzqpcYqr1q8cF1DteljbGLFXyz16bYXOmFBrLEhCcbu5x2IofTeeP93G/AjL+L3RKN0rMycZ9fQLaqk1xe3JAREyG2IUXXl+dFghNtu5G3UkAjxPX94zI+ynj3MDK+E9E9FhVybWHXFPkcPeM/DC3vnU/aj3xwyqbpv5GVXJrAnxe1kIoeltVm7hPIFJqQCRCfSwmEK1mFTd43IWvm5jZuy7MgKAiYfpmodSdUj66bqoDZJx6QlhOhBa4hLe4hbsgV16QQ6SE3Whr';const _IH='b81ee16ac5dff42302d52d239d4a86382a6b812f845a3c8bbedc34af144f162e';let _src;

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
