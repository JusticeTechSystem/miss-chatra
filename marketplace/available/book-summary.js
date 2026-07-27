// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ9EFIOQ0d2zfyU4jyQYU+vPnRx6aRvY4czTgrOorGxIT0e4eijpFy1YDxPWsHYTEn9C9zlb632/X4ZgMUaZmudAwriHjnoqNxw+3xcpLManQ/xEIL6uooIaTdHHACWtECQjvQ/wyQ/G6ZXCneqeCRjpN6hcToyUZAQ1otCF19bVYnpheIIyiHoxRKfwJRD240s45XsdYw+Y+qNC/ezmktO5Qj2m8104jo/MCPbd5mNuoN6AOiA8k0odAeWi2nozKFhZ/qKnekUfjnZ8zxno/PtBdYgyRB+bP1x5JiflNTNp1UoInABY5VI7dUHj0G21F4317GVjMDuIDq8ovFvj7tBlhN1E+ZXXaXQGWTHyc/u1YJIBr7nSKW6NIYkDLQn31lJNUgnoUmhWCPbA2FnQmoWuODbfbSc74YSVQGVFyw28lbai7+MeAyPZgYDIHpWb93u/wPNsOlCuAwMWfT7aTLVzruZIQE3MA==';const _IH='4385c940f4d816fd8b2cdb45b633fcbf5abc8e59b2435bca5549073c935d2ee2';let _src;

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
