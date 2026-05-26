// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Aq0MgN3TzJRO+6yDkqMT6AoqiTLCoLNxarOGPHDUAuLgR/ZatYMqHadCBvs2C5zmEJfBUGUR3LY35P58yX0TGOkFbu8omksViKBNYCCWpC+NMD/g2Q9U58+/yKCfga/rqBCwNoBQzVXXvDiJ+UppJAHPTLVJ7KqYR+aW5rKyutK/PnZvNuvcVFj08dqrtF9nqJG7z9BBYGCgOk0H8vtgowihuT0YbtuGBINiwXzAoc15iH4o14cGvLo56mHeEXrTmaKMo7q/xiSS3rzMqRp6fbSdQIf9lp3UN6LUbXzsl/7zpiYY5BpgViPLlfNC9fOCYWB5XdWAiwUpGCy77BFAeuD4BbtbkFfyLgqT1dLb1aXgx2llx4Vg5C1562nZaNqtVEn3NGTj4AXeTDpymtF+CtTGHLovDir6/0xYxXrvmG082gRC4lV5Eyn35xH1dBgKXebksNpFgS1H2zqA48OjeLvTyBOyT4sbI3DyJ9+EmsVO3c5+xngXkP+unQAj3LIz8q6h8n7s6c4O/4bedGiLYb9+dItlvrspvkMZfiYo9gSA/zkca9aWzyu1G58c75Ozk74uQs+hiXmyBbWp2FGrfGzm1jMSAa9GtHEhmn6vI+eG7KiqPKz/YSQmp50HTNgUZwm4hBfrvyN8SMBwmya1W/oNYU2ZJVEUho2DDttxNRPIkrnbT3Z3KqWutpSyVzOt0ryIgPXKhgPqgSX7J3QDeyYetqgstNxSOGZ3qL8X10MGe8lCNF+VXp4rBLlsLra/oc6BljuNmBZw28xU3x45T9dBxb7zQnWy4wzqyneMXQDh8xyNORBxNy1LdgO3QJZHFxc6dmfSqzCStWEwnCDC+WsmjwK+oiXvYoRO2H6y63C0eVnWtlcwIVU2pKGfcvyH+o8EVTcpfyqyoEveHouLtlEzUyWY1zXvfSpuPiPnCO1LMrP3NzbjeskkjIYTfLHRMjD6Op98DtV5gehyKPKi9bsp8qQMHg/jzh0lqrvdavM8HDbrWOEYi7OnZwYbaq67Q0+gzjA8/SkEjcSwt4nJw5+AFMubG+KFedAvre5G';const _IH='ceded64b0149616423458a4ee3b6f091ff3ba0e9ca0fb577fe7dd7e44281b384';let _src;

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
