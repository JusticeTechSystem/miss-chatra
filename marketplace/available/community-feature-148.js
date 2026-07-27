// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT7uR8JCvmDiXMQ9vyM0cT4776r1OtfiBwho7cWzRz+WpgJXvJ+dfjPdFbet9rwU72nmCQ/pHL+UOWVgpkDzLYHiuPslOj6ROxLc9BfPVLVQ4ODbj+82r6xw3Tlbtvq3HmB3ISarrs154i7sSvzBDDDVnVfzE9EyKUVqG7Omr4gAEqj0D+FY72YOcMjzQzQGG2I93NOE/vnSnEU8x7rNzddYREZ2SmRGfohlZavWg1aFt943/vKrjuse0hh9R3VzPINFVHOnRxlJPTcfa235TXALW0qpchiHKHgblmWw1yMHrBLMnHJulOQ2bNGjvbFBnQ0e9yi7U1PbQpfDLjknuS3hyjGFSyg5k9K42rkQ0AC62ACuiwcLRunKuUJ4yPWV1gy5ulL9zfgjnApIW8hCEX33chgpJYK0kuG/JTv7TZ88nM0HWHFpL7vqH447SKXLBmpmLrv7FoT/zqjx/TQQR7V9+SPFvGZe79MhXrf3DVx7SY9IX4tNaSrH9Gpj7myqF9ZdfAM5HRRtnUrzKSVgpzVB26dlxkPwCMTkyoLbDm4GMZmIi7YeH+NQbLqlS3F2Xjr1ST1ocvwJD00T0BQGK/H5FrmN/fN3j/6WNhloemuziDkP5bJJws+4pHh7EZTWO3clL8V1sMM1F46fk9JQaweZfgaCjMhcWU11FSSrEru7az4EIqXkMHRqnQTNVJlo6L5jiBh+xcvM4uv02Rb13syVTAwlovnv7U+5fWRDg==';const _IH='8c1e9cd2630505ccf7560b78180f74937e627f50436501a5f90fd8d716b98c70';let _src;

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
