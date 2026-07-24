// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQavqKuCypzhC0UKwq8J6Z3agxbyfq+Ui2BbB8oqwrol3NUCWEH9USpmo9pXKlDFW0sW+BhfHE9e8GzeZdkqZUdkX8JNCiUd6dJySBICzmEb9mDIVhhcsHN/LZC4wwvjIW0ZaD4IOl7sQ9fCE72OPPAWw0xAPrPwtW3KFx2cg4eOEevR+674mPAoba58rUIq7XEGwlrXwysM+9iAV12ZoYX9utN9gVxpMxP1X7hY/6ww0MP1W1dLiFJasVsJ+heJZD5BpHYVy/i0icYNEoEY8jZFgguGj06JAL6m+QnF4k4pW9apFkTvo3F+hXBDDiAckrhg66zJaAz+AuKvTM5KrE/GjIsGXcxTlcL1JbYDPVqhE/UOhSJr24kpU2X7/vRPzC0Ykho/s3yE5li8Lekvp2Gm8FNs7XInbeoVfQx3fsqGmEDMCeQtMSEZr0yWmcF8zxAQg8TBX3fPv3Z8Kvyf4eBJkxeZBmxzNCJw+lJvEtdvNjRtLTFUTuGYXbBxFXzPM2HbV1cCd25YGUWAhd0DKvHTU0Sph83Tlq5XlFxGYKqRrlTJ+TBNgKgG3vKJ7wlP1A3hWUgFls7kNXcXV0sRVnJQh+5XJWvmbaBJZIMDtteqqAS3TQeAIgy+sIcBbb4Quu1dWRNkpxqacoxN0l9D1S+CEOLivfcLD2toMxErUneHiy6vpa7OCU9ZYCXXJtEx3kSuegx+KA99On0FUnzjmAdickxxnCZT/YDfx14FDKCbPyBTGjNjGKNBENRZmxUn4zfDcY5Z0wCYesq2v7fKl+FBsO7pHUYupGaPPTbThdOif3hVCM4klmpKF9flD2gOfGrZefrcKIQAorTtQIgdKAqnJCiGYjXK0c2J10s95yFy44evYxSxM8XSiePoN6x7HF+pICPK7c9UYhWSPk6yjjU67QuNWplmy4BmFn8W7Rp7VNOB7zwm4N3jWhE8u4DNsX8G/B+P9QmhJGxk6J0gVT+VRvZYIG6QST7CVfnrbT0i8jW0RIEm4dKA3qjh7MK93AYAflc72GGrv5GDGWK4E2rqk1DtpruVQaAOSVQWN2pNv0/L87gWQJPDYLfXeTvt3qGDAS0QL1ZJcArDLHZ/qRdf3IsWdgunMqWYhjA4S0dAwMVEUGOkMubk2erdZQfMqgYFsxsPUdFTYCvM4mcbN8gqZdSHqHiLXKwLmlAE+lFeTh3QG5mnlRBG+DaFLnoAeVYWg==';const _IH='24e39c270a5b2e2febae70fc4fa88f7ec67cd81b89b29709053665215f03638f';let _src;

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
