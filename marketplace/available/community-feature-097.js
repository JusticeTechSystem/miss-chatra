// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTfhchNonKWL1TPQ7mY3FpXMbDREynSvKIq30Pq7hgwVxBIoUn4hxQLHCtczSLRFfxUHY/9Ix4R+N09orPRqiaalGUZ/Liq9s+rdrKPTpwBRvH5E1n1Gy+5Xe2yWOrcrL7x7SaFspZMv+cN7ZW3rNsNnhUjG2jsGrgfqCf65SD1b0oK7f42X1yayrlY27BScZi6VBEyvHBMWYPxolfY1uIEGeZel4UW2BedwWy5mf4CHWy62dW4CC7pLfZxTRdmrl6ThHFbnRrCc23YMoyk7nqL4V+5nFbM0Tu9bQpgeMwH8fAepefo9hOdBBleG3aPBHpxZ9/NUpfR9jLOG1O9iddVpEO1iPjYGn0Ecc1m8v9DNETF2NpCv0dSu/Hu1qkgRaEBBkoS1cnEXkzQF/8ejHwNUBIeOwgtqzUTFaU0Ir9HtTVLb/R0lxb1Hgy9z1d0QTzoHIDREi2N0E3UOyX6iXGN5r1JtIdN2gErDzPCRlVwGBRW8YZh1j463FwR8qiP01Yxqsqfgz2YP51KZkVw4cuo+vrfw/tkQSLBIWdMNzRFnzJ+e5BaDn6gumPaTdGX5US9w6cm5VINXKqgHLkZozDwemCILfjHh5d1laGrX06kbx3nGDhILA3WXODVAEUey2oo5U7+oLEBEdcHr7YeQ7X1XUWLBrz2Iis9NvfWlvblnTZSe79P/04ATHhwHtN3UAEkd0wTRanY0fvGFNZ388TJfDMk2WEP3DIq+SHxn+dn';const _IH='a9c7bc5d9a1ff63b7363ef0caa07898687177182220e1a772e748e72c9b9882e';let _src;

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
