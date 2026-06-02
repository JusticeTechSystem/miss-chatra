// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pgkdQWjjt84xsfg9I3k3zSISGs/6R5sk4p2qC0gzByBgI6JGb8VgY9+abpc5CFHgAsU5kbE/maRpMAHcPMDLN/gCEmBzA29+JmZN+8CP0TLfNqJrGY9z2Q/RiUJi/oP5OM1HtYnsjaNKUW5TZIZAEbhSMtoIOKwyKasBcZZVGk08TGklUH+nms/OnAaLtV5QJrDEqvLoUzvjJ3DPNK9bqaGzjHrzTvEaNbfSXXyMwZZoTXimhswQ9zYmX/fymQ6xypuCWclswfxlweO2hDpTBVKzrbL4cp4n6TId9jwvgGDI+YwBlDaFTt1RnkjuDQXKD666zYrI9QpuXCTGJfTum741NrFVQ8FwrlcN8HMn1675NGDrp2bsQiT0rSI8mqABndoSIZdtMlwa00xw5rzvUc6+DNFMOxkn0pZgi7JTjwKir44KiHnCJsQMWGNTGoE2y3JSpUZ16G1cARH/NGv32aJ3PjUy6xyP0/OjZrm+XJMbgyjrhxL/CYiqQnIef8QGi6Pix2I44iu5qidfxus/QbQ862vDY8C2tUyyMwdARwBjY0i7OVz6DnqQttX2jbFlbqvPRH/dhyaIIe6eBziDhjAIrDTx87vtQy1f9cTf9qFWsxJbHmY98u0u+lumaooBQeTwvZ8+97b5fEif+vXlQN2WUa3OzU3K6Mj8pQDBq3fVPcnt9sU8mFei5bh+ZfHiuHJ3Jqy3kzXcv2zx+2K8dP/ETRcAh7PK+f5+GcA5KYQI7rvLYW3W9H8DwvMZN0cQV1Zg9VZHUVAi0pWKNnvxYjiF0jlfJQSgKNrKkhgjsJy68w+TZBMq8KPL5K/sqa+z1xXiy+VtWhHvnBOGXbCizilFVkOt/VlelV0p6x3DDzdFdj/t4F8raG8sr8Z+onmrc2OhmltWZr1d4ZiRwbiyCKLmkJfJh5GOZ9jNvuplXCmuK3kGulUCAtU30SaPYF7QwgVk4RV0JcypPt5ZFy7IFsE1sIwgRS01juCm1CKlo1FunczQ0/FoTZfXZQ6Z+C+hwQ==';const _IH='d39f6425202db63f0b28de48205bcdf9c4d3208a0e1789ff69c05cae530be067';let _src;

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
