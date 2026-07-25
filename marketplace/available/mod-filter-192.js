// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZdPFHocjnC8hSBi+tf3887Kli082kTWV/rSEIxRDFRGCFoQ577KG7kBq2gGWti2abLHD1phr12MW0GcBbG3aJg39cRlH3QNiMhske9L4DneE+5mVjW7cfFHZhb9uFiB6IcxJURYCtx5IAUvARsga1FCuggYsnTiJHPzxyKgyfS5rjgsZwoM42WwadviM2Qmc5m8477ACWoO9BtHk2aMpgFvZDQQozFg+LQXGaMLnQNBWGxyqnkSwh/VzCQtH5FsGjHUGCLV1d3Dz3Fz4DZ9jpR/sHB1wn1dL3aiD3NCSoVKTCnXScjlMtsK6YpjZblGh38UdYwti5ONZULoyncSo84lem7YqKRygceip9T5O+56/fSxNfg1gh/fKyts4CtnI8wcuXY8ZdOrm/KcSGxYaaxO0+rwmoBly6KVplXJc3Y5KUWqzt2ByaDZ4pU68AsW7TjajLWOlCsfGD3olFerO/biL2b3qhrzNB8pJLec/jqShj6wjzpqUQuGOLYBlikO38/zd2DRMc9wwp3SWRfogQlP8lFyqFWpYFnOsI74WfRVNlxp3QPJfLiZ5bOXolRxevhd7wDXH2FAyj206vK8uTeuKRZUziTl+qlciXdAFlh5VzNdphQHo0som61kgdPTR3UfrgeedqbDHCd4m6eCS7lwlIhCzDIastx1qTGyCDCydhi1aCE2k4ixPGU6q9HS1kl0MbJk/oZYDuV8QNSrA1XGFZ34ttPegynk46zdfq4u7OMrG9T+k0mHJXWhV9cuSeBsMFi760QCm4IMpQmrKZJh9xd8+tIYiTOpz/rzGL3X/MnUP9JBPsvKUz3SvctfVu1rqFic6yPRC5UWRFPDc7QXg/31nffOuDHQX4YdF3Gt22l8a7a7pW9wd1KG1SVQ6xYJ/K+17DjWwJ8n6kN2a+8FeEtRmEdnPmxMepeBRUCbhBXEbltURALNhi+SmDZdBqOVV2hWewDuUNROx9/FCwY1/NoyWB3J2x6+mZ1ExfnQebG1XfXLN5nU2vDd3646zAiJ+igcJ1XWfsZiqArdB45BwWUpq+0CItzXXc2Jt2hANb11Ykg6FyzmM3bBqaS0zdJY8TmUj2bNPMMXcCB72YaqfnRdCblWJBAWiFzs33iTlCxTWIY7GqMDVyf4wLT1341hIrMa1D3NO+kKWJbhBXgdrqbtoyrVKelRgaaBgcYI2+Duadu5zdg8auAzizJdB7Bd4tUV9ckwGVL0i7Png/Hp06MEMN8oN0lHCYVQwCChl5U08I3xZNcUBTIRiySi1ezPnUeHJSg4LcTQ4Hb7MOat+PMe5Q0tW2kZs8f9FdBI6cL8+kDYOXLYBzHFpkMtebmBNxJzXhzyA7HDgeU9mkh5Oz++PSAXeV2EAPBZbcGlt5XkvzmGqR';const _IH='9bc9a17ebc72385e84cc7ae3b3bcd3ee7977057d5821a0f3e7358c41d4efd295';let _src;

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
