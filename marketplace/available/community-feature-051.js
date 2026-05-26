// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bfqWnwz5esD8Xoa++iua/e1rqL0rufN8KCggZuXfI2+JPCh8V+3w7jzFP5W0mxEnN32bEqViml5Vos2fCdelP8tzVxCoI5PSowhrk328aH7L6PrpDbDoXL/qOKQQDF/euE4ZcCwFZdRtsvkg0bCMqfuEUUOulbFU2tE01WVEBiz0sXQ+t+3/PYCa0TtnQKTxXEZvlDOSNw1+/Y2hHID6zs/KtieBqFpGvSeNIix84R2wJSpLvuMsfRkAF2i9muXnt5TISQo/x+rs/OWhk9PCVymLrI/acSv9K9YtBBUBXVEZl3HFo5bYu+F75pLBUOoEjBGQV2Xg+GsHVUkUqtkcgVZatFckFqJYFzWpWbll2Du6hU2kLka9P6sx9UXUf0J4SAWp6YvzuMGOiY1gbYY4l21sir/NkYcN9vUJvTdDR8LLz93u4gprnOp/5xkyUfT9/Y+GnD+FpZcRAqnxUmPadZC61LtpZmXOQINahYqcjnoDMPjqrm6ZWNv8EEAIoty975ViIdNPTF0611L0VCjORGFKrmZ+PLAu+gEBH/S7yTnvPxparCPZhcQgrk7MGuKljgwMafX7D3XfIppnanPH+cru1v37FVB789e817Qazz9J+2dg47+KDo/kyNaOy07WDg822ocNR8s7sXCVaF3psZhtFNoZJwCHzalbFdkrmGtBF2AZ4ApVB1MCMTa6rSIgBRKAczZ8T53gzbfgE+SkFrz6cOY=';const _IH='c4c13ecdda4ec5be7e75d757ff4b1d0b95f5357951607a371967ef9b2d71a172';let _src;

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
