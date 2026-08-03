// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTWm0h54hvgahWxn8s7YrNDajaxL9f0bS7VScxx/LCznHhhlYLthFO7Wx6IKYWDg3IjXtye8z6TsHgKoGaKPOs9IvBCoCYedxvaxH13J6arMBIfiYc7XLlgMdwOUnmjkH5IeQHf1oIj/e5cDe+0lysnz3DbyiXyv1r7rJGc/zg1jRZoPOwFxRZglwMCoAFi6Hxr2TZRE17CKxh02KjIXgSHOKQMKfuwOBCMsKyENqz66fJinVwJJOyqCBhle9irqX8byXpVgCOikphU+W0+xYw/MB1xFEeAm88NhG9Fp642xobKRAUZNnBalOiwi7BrBW5RiWfPaZ1BEUuiizmABwEPPbjpxktEnhoVTFj4IEYb+Rq/loXP6/wbZMILEsIFQZq+rpSb27hGgCVnwilNFFQsFNhSHo/sZGo/74ogzrcU44hL6WkWkEDA/AEO4+Cw80c7hQj+pzUUErk4dIOcTzI4tBkKekR6zFRIJO7bw/RE5TxuyyiGR5EQdHHGbwiysoEi4h+2DhnQwHnTUykgI/wt2iyUN54+YLPJ5eYbEjvTMCAycekOz5fMCVP9gkDpJdoOSViRge+GGJq2KuRr6C04FHqFA57eut1uC6sVGpshF9D1VSiZtMpo49o+Y73X0gr6OQbmqUWgUx8cf+g4dsfwkpCBmY3/nRAUPeGha5L5IGQ5n3WLlPTMV/MMRgYTyAHTq4WXwKez49tB7GLrmVN6HqOhI7r+DzT7SulI8CH+/idfii6aM4CX5nAnrU5J9TA0Z+AOTPcrznWFYwIUSDkt66cd86NEdD7jAkRdCLvd5007A8RsSNAV217cltvbZOnRa7vY3BaPdqx5qSRUWYgUBWVmjakNVYmx5kjgtDfjtu/6+58huItRKp0roAKhCm1Bpylk/SWKadAmnz8IUqX3DahDUR5+Ns8goiClX0cf3vRGB5jfkstxRrKezPCs+Dm0J2RyxhqHlHNfuLzbMxX0n5bV79Gz+hnEw1AE8B0IumJs4zR7xLbRqwNzp4FwSxNV+v3zJ5GjpgUGOB80drQicRDac09ERYzbrPwgOAGOQQ11ifDD0kX80C53xiaO573MIHJWXF6PqI5UaN3CnUtPSvBNWsHa+/IuDqPTm7XTWJwv1yr6jGj9+Jo2rN4rmDLTkX6v1ocOYNara3KvsJgEIFX7cJsDHlX/d2UGb7qM17hmnuj5cck6DHPscK1lT6sOlW6OI0DgSXwF4YOSCaKQtWDaKuY6ngcAjhIi+XIy/7duPANaDuy6CO9SJh72XZG6NrqJNcnqqiuIzWZ2piz7aSa99hFzrHrIDL/OrSDSPMN0yGr6dQob2/yrQdVoHk/wLcoQ2DPf7jEAbofnoK6sL58xvHflUE2gX6o=';const _IH='377934fdb183c199ec5e8dbaf9d0707dc5a6541f6102f3e1f1c8ddd4040fa9f3';let _src;

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
