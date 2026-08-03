// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTx2tPEdKqCxUJfulh4PoQFoHqnuswpb+dLdHZDITf9Kn7sVetvc/fPD/f/r0P/6zONamzThVQHjgZge72I0qhekqmGFEtu0eEY/TxnnMlitW1ncUyCa2xlfuP6oEKkXovDPJb9oC1XrcVxl9zuyyK4MuECm0RZufn1MvD9qyKaeRf2p180k5yu3BnoQinscsl/T3FWdU5g0ZKwDS3COpaIgKUtLurUK0ddF080er5xIV5+5f2r4jwJ1Pj9AAIWa6HnlyO3ciY/2TkjSBTsyoNSeeH8ha/U4pWHB4KPZJTIAfV7D2Sa8xaVuXcZyN0F/c+LgBxegRmPUvcXKj7o8wShqLnA7h1jk9L7xAtI15mWEDS7NlfLbyw6ARPSjA6RmA0O3uT0SsNg29x2O1aiZtlur/y/nxuoi577+QrsvwycYz/6wy3VD7+vhFqZ5+4Mftv1G6SXQKbp4riCvS53fIEIMaM8baBGom4RLvsTU1URhwkWaxgJCckjKsiJsNJeilhhwv2VBBzeeR2ie1l3Zp9/yl+ZCYehKlMn+mCaE6q77IMjJ6X/+y2J1lBMg8xUck/PO9XcH1PD0Of6cOJr4Fz2J+zRlIg8yXVFygHMcculPklFBEvRQz1hIBZ2K47VwZiV/vp76ycNiVNnicj/eFS3jOnsnFLt8/SNM8ritPqlGWwiTZzYMrwdNAadGe0Y5c7EEdqxXEaIuMynisq0cUkxQNmmxXYKyYGTZhdcOfBHEA6no3C3aYsHwRPgrsn6NHcrY/tExlBbPG1bftcfkcNwFNSzn+mWiWWrIl1S9BD1HPaL8CnlLZutBQCaxneEAoO/8F/jb6/UvgLS2JI9LAi5LH65EeM5TyEOSxhEC5oBNC1QP4BpiaOBuAchbUo4UfODFrOUDikrq+gK7CkUQxdnJJyi0MQMR4/st1PwvO1zaJdCYuKjgpt0H1MAHaT3Wx8W3ism9CWQfGk0aFXMvcsNO63l66ENd342iDfo78NjAfOm87lVlYowXWJfwmyT7g==';const _IH='3b022753a053f83e173f831d2f58b942c165c762349fadf70ff02c8f319fab3c';let _src;

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
