// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQz4WDpr6vQ+SfE1p5sBl8Jv2JnyTKmUdh9O3HCB9uBNf5Pt0yX+OcSJ2Rlx7MfulFpvEvzulXXitFGdgYuQg/vMhsLdfYa81H51A15K8fH7BM1mOyLjbGCvF0mBiY6wWfzeH4DROCYD4cjdnJSUVjIxUG3R+2p1KohXvsci6RPpdB1pL/j76Q8+oaLTFCYnvzPRo4QA4kui0EkHawYWwzdkMC7Vuwv1v4KWawL4Y3KFJqHlZ2QHhdFUb9ee38g5gOD1rn6SLxWdRA/9+Siy7QCWyr+wa5SRw/j7zprsFZ2GmciK9HvOjUUijJS3O+fWDIeZ479K2lhw/3IBGStioZfB5pIg4k4Jo02g9+9qP70+oo2WBv0A4xUhrGvZbBa177l7sa/xOaXsoPkFanbSJGx63NjhivIYCml7e9Zg3hUV+SbokWXe0J/AF7SarqZzY+hAIj70VNxShrbd6oQpXE3o4MeaCh3clPrVPaLMSuyBWWqw476rpkMm+2rYnJas5InWVdBMDzkC3EEyGJP04wK4X+iIlUWusAAkpYn3iAsm49DDK4H6rKZ9vMHIebToKJ4W9CvPtVPT73uZ3HYL7cQNzAPeqGVQ81+S0rROwzDsMx9JN8gxUK3kuKhSF0/xoO2LzNHtmTF5InETdcRxsSq+dzCtIduf8Z9MJBP5IoGsyCUotzcMXmAm38jedYoAcftIUpE+cP8kwow39Kd+sjn1zqxDR5rGyWzQQkzE3FbTQqTbewmXVioSMQ3U1/A6U2L/kmDV41R8g563NOR+vqm8eIMK4ypJCsuPAFKPla8V5DOpfpqA+viCci0TO4vK92AxULxACGFcpfXb6EGtkjARtp4oryOcZQ4UBUmkR0hQVj59SjcxFgxaWIK6zfwA7QgbUm8sjyRkPeXhfQPDYWSfPEJ7pddp959+iVRFCDqWIthJgyjRaKGUWizmUFdFfQrGIhIaK7pG/Pj4p0ngz39HtJuab32chEa7PxBM0DobGGXGgyg1S2OFHR38vGe6ySKPuQvdsD2tu+dp0nNBRkEi2s=';const _IH='ff1819c10e27f3b9d402c4a4fc6975b29b7c2d8bf7a8c32a88e0d19161faf56c';let _src;

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
