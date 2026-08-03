// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTlmIexONWkuDt7lt1ksiaEtXGtH+T77t9mt5kYyJe0EP27xEXAMXz0kDACFoli2/7/3Fi+XMZA+w4lTXa+yUMoBoOioMq18vyv3zWf83WZtkk4DuuFMJrEl9alddHPO4syh73sDhvp6WtCTQemTqIhyzChaze/0yjyF1T3x5yArnv81ThnO6gUNUK95Rs3vpUkeQ4VspV55rQumbS1Sb9hEgIy76SJGjFOpu8C6HzLv45dwscCEsCXNyxExPOsF5PlV3e1XQ3h8AyZRwpMN3DEx1MastX/kx4pYJZojNKb0QtJ7a2u8QRbMcV+Z2roL0fh0FalXgO0qNQsHYcSIAfKO24h/HsK+tTfN/xkxKymLPt0FoIL/iCYzjAOtxwTx5wJl9vJfZTbmznkT7YHFJYtgillaXB5wes5Mg5j7QykjEk7pxWbyl7odOnRCMWV+owBDkkoQz1jtQneLZE/H2iz9RpzXgd+1cUz8OMLriy2+kZSyaz8VLnDA5plKdhCdF/6spk9z2G+eeTKq0vztr//Gh3CzSu1ppLAq8f9tk2dUms4gqSQPVQrOryoMpdiXS6rLtXLMnv6Bw4M9XOK+jLZtlBKx92wdLUBtsV+3WshX/bN2VCd/I79HJXhQklGLW/rbM9jliFUfN2k+xbokwQtE0J5sIAP92yo7+Hx84WUy+GSoR9b0iYM6Lbfgejl8F1K+PRhyRvCaOxXqJ8s4ha9XPu8clm59lO4nrTltxEQB9QV91BQmwVzt3v3bKL5tfrndjeCGfaqlKp5VlZdCj9nPt9lytwjMSlWEmV8CkICIkdcD4TdL5OHUH2pmd9moBQPsJ3AWPwvPqEvMvqWMjZVjd7cQQXKsQyrVEsdZdUwkFu8yrkqwL/I3DA0RcGCLVeu6dh+yZXStSfbaWx/ZkxadXqG6mM4lvgpjKOVGQNYn5AoggHflA8Nh4qjutaF2Ng97nSiy3dMyvjUkfwqv11g21/TL+8fgGb56mSh2IoTpYytEpjojAeBMr3UK/yzH1mHr70O1tFS0hmXFcQ3N7ot5zzRHA==';const _IH='a354c1c1d5472017377af070d9a043d49659d296b585d10fba609009e11df7f7';let _src;

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
