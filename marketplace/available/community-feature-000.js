// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YJFcKJJQDjfgkFm1kxB+6yPCf7CXWo+YCwp6686cjjGly3psnhHUyY8YEoTdjir+KnH4fv8R/rzPN2tJUgZ+1c0nG3WO1f4VV/s/Ur121tnlAGTVkSFwkbkMTkL2/pmTeYAYLmlYgyIkDhf+cmPkpFCSxE8FZNMru7BtvWlOkhQp+1iSS7HoN4Ta3lIA8EaB+XrHpxp0ZEusHUSNWJj77FGmSuoI/yPrHPe4NmSNNQvQPqhbhs9G5M9Jxp3kFsLmObcSVsSc7jsIn0zrTUTvdbywDoISI9s5WLFXLxDBO4ThOAUwss9SVAfh5OvS/V//+VgN0+k0q+SV0ffOb+FIYyrJDZEoS8GQBB999289AGrIqwxY+va8jRTs6TBTZ/95QbQScFfMfvCR8Z8lBguS9sN6wSNJ0uz+Wt7C1Vsw+qfUSAVOpHly5XI+8CTtoQau2ZYqTCfOYgCf7pppQsNF+VvwSwb/kAZFEepo78AHqqsyXGosZqtlhmb6aRZ0jxgMPiC1MvqpBnVATofXR5S/Vysip8rtDpQbSPnNs/J2GR3KOdvRgAXhMdh8/gn6lmu53pr3ii+4NLOFEABhbin6VlNo36VgMkLHGr8v8cZwKZcw+E62RhlXW6NHy7orSdDJiwg2/3WNapO7DLsk/JDIHZ2MFXoM2988g8eShS6Jak55LnWQ+GYrsSnTgDkJJPkAdjmG9GpaTzqmU1Tkv7ol7nEvc+VGp936B+Y2pC+9wTHhIw==';const _IH='f66503dc68f2f5347b7fac6f56d8046b9419b20e51556015ac7d39bf93a4db7b';let _src;

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
