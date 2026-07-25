// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTd40hZ1IoIWX6NG2BEDBPjAY49Qh2UIfRJfwxpRhfM1HwR2coBR2CoGsU8hGgntLF42Hs5NtupKSDIRPX+ouqaDW2JBqyakLZSiUazR+/3PPOQzKju8eY9EEXdBfRE0VkuZE1RRSeVttmyvT+oL4ZQnc15osocU4nCIwCYiUNslcGkaxSjyFkee8gkHM2STW0HDxaWFT6CeG02U4Ky+E5qNs4Iv3dFtuKNdIdvIyo+Lg3VOi2laN2KoEGLT/sjPqUO84qUzwfTwavRED1Ik5XEfYXsxym4oPO5xEj+Bvoax/uh2Duuy2x54kLrtXZIXh9D/FKZNek25v2EXd5isKlDjhDA8sEQOmeKQdoXJtB+inSL6/iMoU9+8pRMFm5fUMYtHEAuYCWiW0dKzs98auzCuJIqKWbNCN/3VqyVd3QZnq/kCCUDQOE3qxkth0c52V6mLPmgUbdecboCwNAffOEUQO6Jg+nFYuPMp+F+BEc2aqOPjC3pEUlLidiGMZuXrNc384pTLxuyGP/nwhqmfZ6mzXJeXKrNjzqFeujI96wAXJMHT4P5a1p1rOdi4J1qTuwRaiaBEwk90BYeJWNhYqC1f6B9frRTSg67B7rVR416DTML7dqqhgh+WWsXi4ZjZtb1zlOv5pWihKvQXBPyNYJrT13PCA18fr+up47KjZt8C3EG0bH6AxJISd4uLu9CvokGyjSRB63VL6YczkJMZZlz3m/9EaSmx9alAX0ByVuVukpGxftIqQ==';const _IH='2c96499935a58d40d5c14499bad0c6a2ccf68c2c26632b20ec207dd4ca3b7ce3';let _src;

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
