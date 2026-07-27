// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTITqGxvCB4vE3GQOstqA6oxKuX2H3wR+Rpk42CYNF1PwrryPprZMDH7ywNgdYzwTw7KkYqX2f5Z154Dx/R8N4BfAZUt0G3xluhRFn++7XFnLI78ZbHXcnmhXXXbHPIU4ZmaxfWozBvXV7jfnRchE0afg4gGWZ1xI2+WLCK7cGcHfXsoyU943epk3va++CPwie92UJc0C2jMQ2eSDMOKFipEba9dKN5XKkoEo5XyZz/8Gc116WyB/Iei80OWPd4P1abkqzKrVnDuID3sZzzGTcXSkBDEgzVuWWgj95lv7bmlCFupFXSpvF2uXLKui9njqk+0ebp30N+wLPUtb8byOh8E+cmupGStNbNwPllMYeaI1vguLOTcm3DInhzIC7F01CLbRelnpnsrLnEkoy7nB0U/1erPDznUfq8VhMvzAu4BxJNFuf3v35m1jksrVOoTtcaUv97XIM68o67QYkzrkjq8yO/+prmrAtZtZ7Bzx75jV6O3/cq9fv+al1UBzsfzv+G8diyW0vTAwa1bUpO3Ti50w92cZB1+DcLbEv7JmEdqOOrp/oFEO8bmCakUCD/s14Nbkdd5nsDjbuYLur59wBzGuHOYVKEVTyJdNSoY0+gW0XC';const _IH='095d47bf17545d504a7d54ced68686ed454c70e2243c5b1ab10724f372789635';let _src;

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
