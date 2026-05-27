// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P1K2Do/omT9YS57F4zrfdOysOMLcfykf71GmwuUWEUAvL2dimHZwZrq1lN6cVv/TPoCXqjY1NZVshGsgjIVIbKvv0itylmkDc6yabQVss7lCRcAJCOOkRzueZpaURwTOLAp0DBbrhART/ClxLt+l5JFrZZUEznfyd34td5OfoaqQRGDOP44kNKV/Ba36wNdlNoHAX9G678kP+BlzXrhxvSIen4KEZIlGFOGoxyrytociRgDe4RRmIZHKMGrPh1oW4ZBtkgZ3SRGeVRKHF0q8Oi2QKpi5mMcVJbDf6JxSNJNQzghi3aoqQHHuajHWVCBaRCHg3tBqbMhF2op7qFrQSzWANJOfUNHs3toPR8HcNMUsTbe9UP2qwkIW9JOJ326Pe/UFkal1OyJPQCIBQslRxX6/Al/eDEg5Vzw/wLMB33wdNW4HVvv9a6cAgLEoQJ3XbroLYrAANgjhM23UegojKhDehBe5XkI4ul6/VqtwBTPKGG6o4M4NOS5quiv+wO8d0Dhu9qHcgUF005QE70rF2ddagHWtZdrBlM04r20HHPEDQTh4FjHXpe43Fz2yZ6CcYTXEhBGfMauwPr7i09kmhkt93yxiH//vN2ycuKzf11Otsl5DyVYJ1MD+sTteugwQA6qEj7TmC52Dah8AlXLtW8E4l+UjgG0G7nhzm/acyQifRpkL/BFYc3JQyHBmSPeN1z+7d30BgsYuwFP9mnGSAOcPPSBGXRb1tc3V8BfyRkk2j6kJnDZMgeu0GXP3gvlpmLabnffQBzj3V3h+JMohDUINuzvgptYQhGZ8SyxPCpdUQp4M8bJJy8uljXbgX//CX41b0bN/J94AenbwO3YnPatMgoAuOp8rpLEaWRAt4jKGCl7RbKl3DK4EmGUPXDeGXTK+DGA4wbhVL877r1QsL74QRWjKghWoOanxDFXrrR6ord6twmBCDnjQ1/+xU6VFC3w4/K/+78B3rXzEB8XGtfJNCCZiEAMk4WyjWtD6Vao/DyG8T6r2IlozkxUy6uXF/PWLhniAbrIveDj3W9YnhShcVbZAJ/lwFS4mZGHMo/6DhqPZ/osLogOnTKwByyg1KcLGHVjjBRUlImItwaQsBg6hOoxLhgXH1HmOjy+VNxgUcTvTsSdHygAnz84CCDl9Wy8DL3/3/6+ki53PScA+pH9cZLcdaqqha7sukgNpbJjqFvwCqLhzw4uaDPfpQSSxWkmSec16vutD1KVfAAOvLIf6UQuW2vJQdN74nlsx/RO1VpV0x0w1lckGlkZ6SmnV07clT5hkrs224E0wLWdVFZAqrz977tOklckVKoyQcqq+rpoTNGv+m0jaxyXXLnWd+qxd6UTqwUTcr+tCVDLXLaC6RuKdbgoHLxxAo98uSX4c5anxbHoD1lXEv91e';const _IH='994b79b93027966b930a871c6eac77ac0a49a44edea8261bd14e08c2646588b9';let _src;

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
