// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C7mqnlmW1f/uWLVDbpcbRDHkuGk1M/RTb+WP/atmw0l3xwEmaF69f4IjhD373VvnlMNdGbOvx15pp/VvxQ5uK03MUwpKeuofwxxAa5PkTD5qqQWHDE3YnvT5OYsne1xwPsvDkJrTwgNmrJw+iJ+LJjsWCGXasmZIYT95zKzCA9g+q7oSp82mIe4ADhTkcPhCM40yijPkzOzKslHrCyaLjLvNW82kYl1R6QvWtyeK7lMJqGdAFKFs+n/p8LfCzPS+gbLIY4sjsRp9K1VnyoibssWYJTBYpX6KOIh4J4/z4OwUB8HtFni3e5MLZbEtiWFYmx2CTR1X39O5q0I3Lu9mdxFiQSHWtqGzq+wfaRaHJ1qTkX1oAbazZwM9L8If6xc4yPxRMwx2ismrXMowheyiB9lNh8LFyQUpps0gA0zfVfTxaJEVO29j9doOZaQOlzg3Qcaf9TLGaBOi8u/G1mRBzEGIyoSHbnztUJVgWcbPZ3L+/bfyEYSKiKJMEUF5xFB4E/4tRBGSeWktPTlbjIsQ78vuK8BX6PAWAbCPq6+4Cjmgdq/tIpmDcRHAvc8GlWmoEgXMS4Ey/HicMb94ecFq1VmOhDithvWB3mqvHaSdGgsvDKdv7AWo4sVidpEmyQn3uGY1PONRRGVDpGSkniUaFX/FO4IcE/VLtEy5wE/yFOCTk+3J7/Z+NVuSpzO+R2M8XT+ZooUxzcpOoLrLXbbi2UV1C/YwXZh4CILf1u0RGmKiXdxm5iJrrg77A1Kb1lk1SoM2YOBZQo/tapRBTxjHOQ9kszTCB7Cs2EsU2CEchuPSS7jRIrMQku0HI0887t8v9vMnN/xzSmbfbAlv6OPTXwyPDRSu5Qph91w3mYAjo/drjy2Tk+xHrsaPrEQ7Jb1oftKWC3TlyfygA+aLLujGA1Wco9xeeC+Dtibt0HhdWO5wHX7DNLPRHbEqRMedt+ws/Da8exCtKLBl4RraNezm8JxXsy5LPCerFgpno+JvZj67mJ8BhGCaMJX2ajHH7n2BF9uS6rxcrgo68SpIl1NLuxYzKYyDT181kIBDal2wxo8YeQGxUsxCd3zyCCjU7WgbpNaSNhynQBhRxWAK1b4APupcYxvj3cvfI0ClkNAPAGA1HNBbi1kzeiy1tbaOt4G++Yl7WSzPlcCVHEs/rQKrSrapFETslxVRSHIxmwNR7/YkmsufTRuDabJuufBFsBxkHkXV4zR46CS2Ji9Qnw==';const _IH='f1789689e9555949805b1180d373987e02e9f137780dbfe14482632e7b91dc87';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
