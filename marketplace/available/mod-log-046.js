// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GB6Es/I+mHKGhLKAWBpzGTI8n9CwDjKyw+gaCCsGQ/1rR8xao0e61txe0CDKNuKTrf9j5Aaicyc3oT0z50o9MfQJNcnZ6GRhd2EACFYHiMhqF6BPJIKLJjMa0e1mKxf4BM3e3NucssEatSYG+3zR2rshCinJdGJ6CSoTfutOli7Y8R+l6+BqU1r9FCb+BHgmw4nTw+64PYXxeF5cvPL97OBFMxK5EWwLBdX0NyssdDPVjDd9ugE+QphB+fFwXwO2XeuPk2k4B7TYWoD2hl142Lzi4H8M6t+gq2E2DkRIJ5Ab9tBP5Oh4V8AcnEU2/48T2FzOOXuKk97pnmc44oWc8BxQ3netVcxiMK0/dy9w3l31Vzo755CEc0xxbroqFUah+6h+uMaMg1cMjHMIChqND40KfAWPVSLjoOVTWlvZ2XfenxGr5Fy+UBXxBcw2iWT4c2hoylUE8LucI9UyuFXnhJDCxwt/WtkxqbnlvvDop7oC+YnkBD1Cd4MkRU1ZqQim3lOhf6w3GuZOgTY3qSYSerdQYCn3PiWU8BIXy/KrFty+9CK6SV2qdgH0/fcSIKM7CQP42qIdFA9dFKrL04lMl/JtmS/XlURP7zAJTn8QFMEsfJd70dZHn3M+X5PwAyiXu/4qCj7lktJYzdSPKZKzIEepKDr3rVHbJ3oNetpvVRqtE7kYXsb32CvlTbAn/pgjMEDl+Ezs5ptoP4x5C/1WrNK6pvlIvz5GaIDXAlgVfYO59SYp4KIUy7uK0EoMpoN7Ansxqa/exgxeX32QRbNA3JKnMOpIfEIUMwTC9X5fy9nzZeGekpq0hoP8TCGZ0eOQM8sHT2Vg3Js7aau4HKpNW8PNEDYPZH3mjmsAxwcVSHypndJltgOrM0b7Z/94jl3YIdt4hqwCCxFO4XdJtO6VEKvke69+HY1Z6M0ga2Of9rowmG6szrAV1l+Ty9G3JJ7K8LmazmSJQPKE1IW/cOwolrkEidSWr0R2ddmAPj12uNPSNDkDo8UU/Wn870Wv8p4NSZLpFDWk8IGdteNfPzljSo76wJdxW75dV0/rS8A0kw2F1GbrrbpoqdCwf+NxcGxlOR46SnMRDO8Fp1Z1vM1ck0q3P3dCXlypJ1B5HnIIR2u7e4K+rHWGJApQAwMyeQ1N794WnonBTW6vOPn59vS+WHWccRStvr0RJIl5sE7BrFPT0Ucy/YhCp3oiOjsT4qo72W0JdTeC7KOKaXHrzoMed9XoUVu1CsQPquw/WbRCKCX9Aec9m3Ys9r5yAdUf+Q7KMfPNxGkopdWDy3m/iNUqXrtN47/u22HO5vUKVCxsm3LPbzuNgCXZ3dyb8Dl2FRpig2v2lmk=';const _IH='de729d79a97717830029b0dc8baa7e310eed7c006351871de1ae828fd3d554cc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
