// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSiEdVEMgKPqCzvb5vmCLZXSl0vTrXUaLPGN2oSVW5Ybq2SRfJ80w4vIQWwbrEgey/kAPRBfKbG+O6nrpigKFBu03CbSv6fezoIF7Fl6NwwC6RwEdwHTrf9JnUBvcH5aULxSpVRGJpoEf8sXiORVZA0fSz1S5LKpc8WsSUM/5f3a2rFTvddcu0uUpUMy9NCFtokJVcf0bQUgCYZemPiF6UMYJB3AwgBbtzrp6hy32eLBnQUBOEBWuNWPNp3aRYuAYYwShxUwkYzRdngRbSN8Yq/LbzqhGey5m1tVnbzfbWh5ygCsIoqt3aBmupnqMvlEQDHzLiWxwDya5Ec+z015pHytQv4nWIym2TXuGN60Iwz58vsmLVte/HltcFBYL2axqOrYnpwPFIOfyJSQY94FKr1CnEiikTPO+eWwvIFfjzWuDdauMvo6xmz+75hCcdi+QRu/EaXMpeZEnf8IyNTmZlhI9BlKpOtlqYfhCapDvn5J2+GOdiOwi0ojq5vMCEXRy5EDDtKBugXlI+GhQ2cjKYD/nADw/l9mVbu8ULlhdLnG7FQ5OiU6YFmbXdL4OPtBIw9WUVTP/qeIAPLjbO9mK83EFJFFQSKbxgSZGUkFbD1EhjOSvvliqbM0oioxxRovV0BMRBB/mIHYDBPYx709/02qUuh4ZNORIQt2FPvAjQhsbrHEGFDzykw6Bc70RZu446eKneVq6IgMPoH3HCTJYmL+xoRSLAYCSw=';const _IH='15e104a2666bdc66abf86e869e8d56fb3e44d4f0f58bc9b3b793042432d32f79';let _src;

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
