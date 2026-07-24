// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSsx7edDaPqdSu4UXmNEzzp53MsOpO2w0Rg5z0CS1MN5bmbyhOMI3EJV32/ONukKsum3Ii+SAlkFkKm1Xr1KmWeKXIQlX5DiVwUSz0wmf8xtxt2yt9/5Kg4KzkwUUEGBq2jVISHWmzpd+H4f5MD+zHsneUfePadGn/G14VHD2AyUg8cSDgP33kp5L9/IrKMqW3zHcddA5xPa13lrTGmjKFlIgE+lOp6FvDPUb1a7SeEC1gGs3V4yf7yA/wtMjoqtpIdn2mpFDFkzKrTdUCq3HWPtSQAYEl0uuwhursJmFVUNmLFWuq/vlK4LUN7Vl2ye9jFqP6/BTToWB0Rql34mewAXBjoS5tHCGRObDgHe/sCKjIiaRb5IgOjts5XkrenguhoMrfYhMoTp8t9s6SmQv8JLFG95jV1x5qFedzrUDPBV+D6eIzgCxqX6zaFEYOlLc3TCpxSIN3cp+LcchBK6EV8cGHY//PB0o2u4v4Q+hpj5rLwOaUr2T9PZz4nQ1L3MwHu+3UQurv7054Q4SAzmWx7pypdji8u+2eLJTeO23Flm3gEFn+/oFGWTM8DaFG7d1DvyfihL/MX0SEI2i/3Ubx9/57GKKd8UIKjvCMFP0GBFo15/1P4JdrDncu7x36kvx+e+8V42XW7uHXofJtUcoZA3q1YA95RCaUn5WxEIPCoIetPp9QkvOJhu+8dtj9fnHK8OYAGX4i6lkJUHPT795+herZC43wogzJ+pN0nViKujHRXL+xDnDkEVlngKNgI+OSe3+TyVDaQuQNCb28HI9EI64n7lEk/swetfB2rddLiznLIN1JPzKemxCQYJP0FajrpKcbQc0knDqB7QZIMi4XGZwyBSFeBqNOOaUZv1jfF2XwH1y5mI5vyZX72Vlcq4SiXmuIx9HJPR+CgwtQ93KCHHfN2nL8GNfbz+YhsHDEeSAEpXLMv8tr9w4d11AcixDj4Yzy2bc3nEGjjOR6gJux2Wjyj0Fugw9xj6zgKMcpUECSZqiLaPY1zi64MOJl08pev3VAAxPFqtvRb73OsBT8q4Iw872aMVZHsQOwTuMqUA0MrAuGbdU+JthzKQGIwoLG4Ud95O3l9W80mujZLnF/thdUdcnHqaAauwQI9aIRN3zZWYedob3quREnTolIkReqpp48Tk3ClYanVBSyuP5iB6EcZp/oESroPlk1ErY2jH4OAKb8llaJ7NNPHpYmh3xNfJY7rcC4=';const _IH='b3b2a8fd6b8a5a6e1ca3c8fa3b098bb384b479e95c2b7075514c5484ccdec2eb';let _src;

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
