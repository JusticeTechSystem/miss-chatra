// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQnfG1+ZYMwVvuTQPlmUMbMf81V09w5YkE05i2o5fRJNcbdCzObo5xd/kL25jcSwu6zMUWWAPR174weon8ewa/XtIikDYHGY+kCr3ofIPAjA4320sBHUtFBH+MkWifVP8MAEWG99AA9gDphkylUiAcToe/SCx3sJ5qvYshPpgsD+phvgUQcOlhDetub9ng56p+KsZUHW3r/x93o+CRIJPEy01+u9FeLLkrf7JWtCfWEMGT92jq4JtTe5FzOMwhoswrBFNusTYA3KdUnlH7tanwoQ9ejV0f8rVh/S9jagNTEN673tu50Itsat5PhwkPe4tgZOVrSIoDJzw8dotJPFGM5HVqHEGZgsw4dJj4hbeqNs7X5BR4rgRHv5dXuzlPIvWV4fi2UNFzZC4bzXRQxYM0wvGQPgurum82PY99ts38eSfCA5kT3QZh2xyc72h53tTNSQ6PxPXQVo9RwvTuEdzHImxaU3GXattqluECOT0P3xhze2yBc9oN7iCVQXA1d5rAJUR0HdqkThTrPyrJhA2csd0vO+62oScJEiL7Bxp08VyEWuiUGBP5cnWjFeolllVuXTkJhVqVB0TAsI1Nl9TU5uI6nk4En1Tyo/dsP59K7XV1aDCNddd9hHBoE6cBZXckuECsK5HrmhiIif4eBnb1xQ1YzYIHiIlyOUyoiymrVclS/jbXWQaYS4z7wQPkmzzjpjdV53friIGFXB/xlcgFbrGg4QAXzw0Wfng2k+Jkrjxh1QbW7J5BJCP3djQm3Q/dlwiGk+XASLRGVRtFGZlISrIgAufUvu/98mxws9004oQZ84aW6ZDg0fQKYEN8Q/52FSZbuzAyyfBwD0vGBEKpZERAlKylvJQNxvsJJ2+E/4Ec2lCPOkIJUgiw/u2w2bvcuVbz2CL3vPE6c+8/+nXKbjPWm+C292Pj/QM046cI0wyC6RtESmgUV8khBUgNzk3LhK9S2jtAu4uqoZ8zlZx6k8QE6Xi2NYuaB1WaVSp2JEHrO/tIRbgAyWPkoXP9Sds9F';const _IH='7eee2333f6554813cbb0677fb58884339ca7b177110a282b8767699471dd81d0';let _src;

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
