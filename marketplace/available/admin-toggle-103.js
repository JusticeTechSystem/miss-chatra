// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjThPJPKJuQHvEYF+CSGmQhnO+eBO5tHqV8MJBUynHmv1q6csl7Wug+iSFrdYpHVeIzMzbwfLQPHiwZfLjpRPjQVNcigTq43DJVwzhvKhssJtMRQsZZtb7Y786sYpEmtlxySnVybykCtdW8rVtAQSt66OaJFsD8m+88HQ8iFsLlU2svnmpc+VwXZmU9fcSR9vdoHbO6FW/CctBSCkYQkm7iZVU7V4FwrP2EbxYQOmcQ/7hxZdRssPHzXPikQpulKrI1QnVQSdrZwR91UrivOzZ7ULyIF/BAq83ktZ27nRhtr/ssoSV+WP8pMbP7hmKr+lrtSo68Y/Z8ld+9PLgDIQMIwLVtDAlss2g62Kz4XSLw9SwUDse350+Xf18Z31O3YLCpO7bL5r/czhI1dW/bagXYFwicnOI5V9o5B7X1VuCpcu12NADjtgedGpoMl5RODwjeFzmjAvLnGdxc3ySOHlfNr8kvRwsvK9h8ACxSfRlSW4lcMQ/tVrJE17VokfE3rdHDZ8xSqO6/PSQl+vLdHj+/a0uccveICtj7dfJVaKAropLqhhpWRpM0Miaz5rp092pzTPTEqOIDiZ8QzouAAScUKWsThux9jArcUOB4Yeqhyx0oB1zzClFprjhLYPvjnRkuL5vRWZsh0QoR2Kx+KwxtGHJxh7no0oblK1VTb0ROUz2CjJ25Py8nnlbsqRoKEnm07bqNpZxvLvFuX7k1f+7LDQqu5rrBTL7zuecV+RsOJWKsABgHYEwYBFkqTSOnYL9buwmQYWc1YS6BZKSbDdzdrSe87wqRkvfRYwiIEMlXDeY9w2lK+vWjzYI6OG3TwMOaGDLJ+h8xPQ5vBXo6SXr5q0FB6unw/x4yArMwImvtbDtk99oxN7o+wzaxrnhtI/qEd9J2x+fKS/dd3n2PJwTpXskvHsAkmV31NLzEYQFI9szpRtJjy73PmxTgGg5dIA8X7rAF/JlmD26vDMOglD+y2Rzwsy1T39e1FbjuuDlEOoRoTWVU3CSuxS/9wgIY2aQ==';const _IH='e3bae6ab5571b312b3c596f95b530a06b63b665862eebcbbaf17a97fbc0eb844';let _src;

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
