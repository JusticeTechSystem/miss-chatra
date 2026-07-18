// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQWQ76NFlruXMFrL7MwV4IWf5SAYo+/V+5/njEtr7/+ki+UNUPORM+1rYUyNemUaPF3hLhG5Mp+SViFGnWRW/UgV0XGpsrGWf9a+PCxx8ToMFyxaW9jJF3wdw6lPXFj6xj+cARPiBGTf+yEEpTgg6hZ6vF5g3EOs/0FyS/P+Ramp6gp/Kq/724/BezfDh4oSjgFYfLb5BWA7cA4J2hCjM271qoLXXFlVhzM3KoN7ZYKUnN7Ao8HQ9v8qHNRNfgXUu4h6HTUkyss+5Tbf0rOTISPdVb35Bmxj8Zr95HAByWUKOpIRMxDoLTwclMKpjwVbwv1dp+u7K3Rs6xr+miUcQPJ6C58Er2v5DaaLJGDRDcXev+9OBLxEx5vxbBbnlW3VCKjzceY2HE9+9n4zj1BDvF8tS55leT1bqunHAOA1GFD+W5va6UnR4k4PynISI4HWO9DrxGpk68w9ZBawgrzkMMyZrfDe/jDckECMarH9jP1n3JlXLpitNKCgPEJiDfT/XBJHdcTw+vvJ9U9yM39BeufIHM3hCeq2Blj5S3d4TlyLEs1M3fOxjoAoNeVYPvD6rpWk1yLoxMupweVGCdt0MkRXfhPeALMXX7ZMv3ZuOPIwd9ULEeKiRUkU4acEYnOobcVPNfGH31XLxS68dWQ2Rk1tn0J8Dr/wGOCBIo+UEh9SeZEmWIXz4ZQ4iUmAVAmkteE3gmey+uubZOg0q2viU30gFf7uuDuQs3J0Rrq9pocXr5V8UxlGMlfBwM+qDlRhwMuxjc4hTkJVdRSld3oyFVoijix3sXnzbbSKH0+cWa1PP0nqztQbRkB9CTBfYg6zTcaN7aMr5+g0Gylk6l6oTvvQAt/8rR9gbpuGlj8AE6BzuQAOgbj1UBM6l1SdoxgZ1hgeI59EeWB+L5ilFoDJYnj41zmAq31Uea6hRSMXzbBxQhh0WxBgkLy9gMm2CNtaBCSaB/RR3PoAF9uTeVLLmoLsGkvswnusrt2Zpq6jTnUNHWKCI6b4DLBz8r/w7HyQ+j0';const _IH='4efa9dd0d51893acb7478f3822b4da76c9495622b3496f9a1c98d894dfba1b8e';let _src;

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
