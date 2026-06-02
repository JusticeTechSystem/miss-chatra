// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='POoeJGWeSlpc0ihfS7zu0PCZGiiNr3Jbqgb/omfxBaVHr03R8uicMcJOtIhakpfgoh9OMyeBUPwe0dkq6xEjDzdp2KHk7o37xfTUbcGARrFYbvwOmFf/e+B4vjn5A0H/qzMcq/4AXhvg/n+AWiqW2x7jY80XvIfiyzJmZ4xD7ai++YxXwmMinUhDRXDld7bWNaE4BbejktCshVtZKKy2DWixNMdxAJLtsuOGBqK3batBEnDsMALzT+JgBFHMwmXbjUgnPpexSBFCSPg4ydWHoM/FkMmqpvPOvkkK1yR+RatCmb5iVXTB9h+4jFROZV7DLo8fqO68/mHk/8r2z/UL6PNNZoKoRg05j8vdt2kB3YkyhoakBBU5eQaLya+hPM+aB18vBZbmFaGYCymyg+E3nR961L5/l36pv6kIoWkODCoieLoSVIFMjnLQwqQPmUTkPXRRrJp8v/orFQmfMWxgCapHkGIj2FIhGoxWkZ9siaiOHa1Se2dV/rxjGS6SDh61y/cP0ZmxhxQMkaT5Ckwoz59xTZXOiW4FwJmrKbm/B0BSbGM3M9CDEnHybL/kSDuCNIn277/cl4opTUpyrqL4wAAHTZUhmdhsMZE0hL3QuLTa8/ydvaCO9VvHGa4PhzZ0Uu6/f1zn1b9i24lKrdZ/FiZuYIzkQz6k7y6BXX9b13/2E8yrTeDbXqP+twVkqjfep2hwGopiyNl0zPEd73inGfzgSFmkuV1yb5E7ePPAr3cf2BsRBDyhkJEqRA7Vv0PZ8N3N2ElP5wJEW5ER5E4R7S5/OIVjr1OzsIHiR8XRN8w1IWd4gJWxSbhRganfeCSF2ZnX6JOWq3XoYISjH5hs5cXD+qhHEek4ckn0Bt5WBPTn+j2poud0MwmBmChmgjiTA5In3+nKyY0hLpPzFcjHVkP14D8G0KfJSxhXe1qgQJqSa4qWldy7xXTTDhtg1LlfQNOif3y3308dJs+qMzX7h+WrJ3+7Y0BC3bHHdBBAhpUcrV5ffNeiQ/Pctv0FmH7PKlRO9ReB+FwIh7w+Kcwd+xDwehgUmAReBs0FVZtgqArYbb/FYYNwDnwvTb9VdIhQK2BMUmjHMCaN0c/h5h5ijLu3eVZCpxgtFrBh5Lz3locTjwW/yZ3TYJ05dsD5+WekcDhh1azpfgVYWUx2zWCem0WrccjHgGfC3jW0vcySTVeNTWpkLmm9w2BZ2wE95R+M72EpXzXils5twnWKaKlqG5lMnkH6AVKJvTGj8WIOLDJgsiysnIO3nI/0lz2l+AApX44i472WUkt9Wj+LTD2jBu6XNgZi3mpuXw3CsDrLoQ7/T/oC8UPE6rG7gPKCAC4KiDZNY2BKe5JLsAvFoTWoqbnXB2S4aaHE4sttRo2udSuaS0uGowOTbx+0ZCXV6eSImT+/+VCkOCxrv+iAwkeI9bAveQUpxUtg52EH3/SrI6cCK2hUGm/qbw==';const _IH='dc2bb2a9b8a66b04d48ceccf9a337f17058be17eaa62870342eabb4617e6e7c2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
