// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS/fNkvdRmS0OStUWLSPYX7YiniZpmdHFkpaOxAeoqD/RryEUHI8TtWiLhBA8iqotpRkPsXVYIv4SJHspO9/jcv1dKQPYwi8cHUnSgQXq0z3wt/ml1qcbdbOIr83vSxGU8TQvwfyCzD+u/uIp/iZNXjN4KzS0DqAut0uYrMySntqn5j0pY6QqiO/Ttol23zH3IKzuEUzf/kYFJW8cysXXGgpRCMLM7xzWiXDVJss31kYwVYABknY5lmbORRx5nDyYuzy5MJSOsgsGjMDvMIpRVHX6JBVPHRHme6+y6EKddWOmpV+5lFrNA/j70Hn2HExwhurrSixCtducUDWQCr8jGRtEm1kx4svleABby3YS+oF1rO/tBGcz5W4+G6tqWecBlfafOC4ghF+fRT1wCTD9LC7Sgl4KgWt1whG+Nr2GimrYdQgPuYGHKUhYNLe1m3Erj/rXQL/SIQZ5BsnQbeQSZ9118enJyMNrv/jyTM+cpPRhDMtVCCQOezCZll4sPqvKkJyAXvD3KLi84Xe1KEGTT32hUv2myJolVC+1DlcfjKNQcV6M7TFCboVHEbLibEsaRvROsymGasHH0uRRhO2B/EdDgpgvcDCtzRryVdOhR/nw04UDs7Bm9yU/UkDqt6uHIZDA2JS0AcWCUsCPIaHeQXBucyz68OAyp3Mrd9jrAaowIH+CUigvJr1ZPLmzRKJP76RxtYAbHv+X+X74LwB3VjSBdyOW+K56N75sLq50w84TkpFoEMmZXO2TQgMijKk9pCt0SHqhTc27x5pgkKbwgIutC6yjznAi0xJFyc5AeCoZGcs7vLRsSzjzc1fJJHqkxiXm1OcDxgHTOYeV7bBbEuXDsC6uxu53m2Hou3885+U6jkDpxQWc2rSb1f3IfGEJmxNyiSjsO/PQbuaH58kbHTba4KgniqVKQIDJe0+BcQIkTBrqSVrf4EDj3yzB9siL1npvkexkuaFtyw2nimOsWpSpwNyKcF72BWh+C5EPnAImuAdzPWDzJvBHBdY6Gm7JVVoA9UNuL3WbINKFxMo93VRbwA0BP9jpXEMmjaYSZCEoQ3pZvgk296vdZLgJle9YvZZhuYIhj2vS05TgA0vfRwJ8CzDPoyZEykY3cXcrHyuN/bCbkV1YMwMQlr';const _IH='e52ad0e889b324d3a2a57bd7dd2a961379ab5ff208e8b19196dbf06f795d206a';let _src;

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
