// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS3u/XXcK4NqkXtV40xurqi5HcxDPmSokwNcc+wSJ9wIG2g26cuF0TTjQu0RTpydV6xpXJevfxn8YoWHwXSACPD+UJcqIsU0VOleUrtLTQCLty48VvlPMFIrVrBM3OLTsZ+KZ0pQYd0VWfvS4Xpqx9MC30bu7NhHXfxf5gthC2n2gU9wUbzbQlSz6HuUd6rPa1/tvksufMmpz9LPcpVvZAZ4J997VVadrJEkYIhhngb3RjUOS/VcCxGLaxTZcyXD7Hbp8jl3m6xsSA8E6TmxCPztWXdEH/ICtfbBm9yiM3Mjkz1gai+XOAeCyPfdVXLh0SDDDIXS/26t+YPLDxdHCOu3cBLkK+wzLtEr2Q3TQUmsYxYqdxH0THrQoXEyK0jzk1Bpxx7JaYwZvzdr3dvSTI2xHaLaMaxfEHGT+t0fQkVL+j6KIEiC2Ou/Ocfe8rxmaT7839eDqEnPNIy4gZgUXBvn4MDdBni6kdjhOFveCXc1Nf7R5WkRj77zrKXNwIbXwzxBTY+Q1ZwpBeomVg+oMJYdkbVPxWM2KMtsgseBgHHjb1CqdDl1DbFRNMIEi//ZdNZLm094ym5snk3UnXKBSyQzKIqxr4vg7cgGDshdWkvlLyOIj5muCXMiRFWit376ea355AQR8yutJl8DGFSeruNLFpyHLLzHXQSb1d+hc5owWtpqSgcNDC9y9JV1muxeWB99gVxgkIFthWhRtMn02AamzpHj9HwpC/D8VEgiAAZN+f6UyeVaQGozkeezAfRy5C6bqQ3T1rHVEm+gMK1un5pcCMvLLFzzRJ+upuQLzLCAfUaAeA2vjfdjXuz83v6/DJVvB8DM0jbtnAJE2UnOD0EJR72qbolWdtBSv1Yn1YB3h6ArUMrIpunHjv1sSUWlXI1TYqilLEsP6NykaMPn3lvPDU8ST9srNyU0EUVIQevGWZGiWEkWl68HfqSwExn7BVCFGbNisI84q/awxa6Vt/MvCkOJhhINZRMIHaHkYsTcOcerLLhQitSsRF4SI8kF4uoiia39G16Iw==';const _IH='a25065833baa60b6d59019b3baebccc683c5fc550f73011630c8bd439cc494a5';let _src;

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
