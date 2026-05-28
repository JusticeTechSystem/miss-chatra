// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cM3ducP+cM3C7xYJq0KBp3/QLEq9bD8v0jii01m26HChW0dkNhw9Af2PQNnhB/qJiDR1tRvQ/xixDzwN8DBMy3XBicKgqIm+9sXUH9JqiZojb9SDIbJ4251rIXEo2o+Hy5yRi/KnVCgbZiNoETpMxXD1+ume29grt3rDrVkf7off49WdmGV8SM7LBDW6gOHyhuFtzDy/UF2U/DAYgJBqgN8UyxJ9j0Tst9nwRvRgWxTqtOpsNexOK+N26+B5ox/P3az5BFVJQmYcxgwYfsv8iWwVt/S9mGNdymbNJxnki7I5MWHQHaOE4zmP1KgOaSZNw7blJ0WGWUminkuKQibwSSfDqQO6ZkD7VqA3RfUuX9t/PS8zB6MT3S43y/Dd79T1rhPYnUekYncpcl0Oj8Cuv19Ac89E8FL79s2VAUH1jqi0f/YJuB3AqQs4CKKMe15bHdEle7eWyTHRavGZIoU+WL1uaZTX6WrYFhabXGSvqsiYEQMPM2caOKbCaT+3MV6NoE3/V+xiggT5w10pWZ43WH38RDvx0KPDFfQneq9SY56RyUJCrteVXAyoolAZYJzD5kN7SqDjOUeaPhXz1IIT/gm/l9zNxLUb0Bw84IcImRI68KIzK4RKzDwBPWJeRVUAZA3A44QMeyLIQh1nAqPzxBJ6vOoMBeNvDGN1sP5xgQeCcbijB6NM/fC4mr7ByIyP/8fBV6GL1Gechdcb4B7Wa+OXHxfzfNx0BCle/t6JzkdBeTQ=';const _IH='316d619c10659561e1f7879aade573d7c7d3b005c06fcee30e6791cc938f4c22';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
