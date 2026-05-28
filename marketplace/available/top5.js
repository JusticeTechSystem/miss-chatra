// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GnIfipPPmX8aCoeXciM3m91jIXURpvVWtsQSrQYjLc9kkrqsyfwIPbldAdy5Mt3KjBTTYfjdIDj+JG8OXT405VlN8HL/TfQHnfuXXIcgwAnIzCZW7JBIxsJ4a9uRkWpa9addgyPdSN8pqmMnVtbMHS53qv8Dsvtr7OJ9fefFEDNe1W09lFGsJFgOIShhL7uZjREiqU53C9l3rx48p03Hqm3nZ34nQHIhqX2k0dFX4a2Ln40LQDeEFpN0BxOSD0skNIXgVWD9jvbFybHbJWjZuRz0RQWCEZFJic609ecVMXxyYTFYF52yOOyYbafm1Jl/5kqES/rVw9vg4KLLeBkWBZn8lHlpdpefPkeZjuYJdeTXBc++kXqfUQC6qMKMbAPsk61LJ27yp5/+JLnGazxtwydq/8VPuEkjSxYs+HgiyFjmGg/RimighYD/RjsC7ZHBnMpvSwjn3lq10F2aiwls4TyrdzfmeYDFh4C+m1EGedI5qg5v1j7cq5UmUUT567an5RIIuztdjobGrKV16zLn0Ser/RmHE9G0y9EI6WVW7U0P3+IhNg1bK7f75cGNYBst9G9kLHXV2G1qGiLjYxhqESJWx5fPYysbdMjb38izMB4VPmujCcXW9Mufwbv1DKsivajz8XfxF8Rb4olL/9vxQQjZ/C2oIUP/S/CdI6uZEtczUKQyYRSWA+mTSf1BAG9DtQyxEzbaXEXgERJRq5PDmNIdQ0K6UI93cv7TnUkPc4AwNE+Ck0iqkU7010/9YkJfmZNiniApGv/gKG0KhucOF/f7M+lfMaHEXoIGJqsNm52BdMCxrLJwe27is0llY63DuMCJVNFrQb5/bTvKoSPkbSjWb3/GuR08CVjk+kAPIsezLRAPZD+cr4KVx3gUxOhVMl7CvV3ut/UiUwp2iSmJZlTn41X1P+LlF1Pt6gHp50ZcBLw/3Ot+Tv+GAs6Q0c39eFqObCXLCtGsMj5yqjxcjbQ9C0VL+Vqr7Bgxd6wS2+o2PL6qe76uSuU0tzkp8fneAbu1ucMYJXZYD0jVc2z2CMqMULmPNuDzWIBhxhKqM1zByAhYOp4g8UtNENWo4I34f4RqBrgtBJAD9Oi2WfAsv/gG1Nm8+IUAMjXQ8Pip8N9KlqSM3M2qX9c5S4u7X0gcbWnbX/H9ecyCjU2AGFXc7rOeL82m7emSY+Y7Zw8K7RjyynBeFA==';const _IH='07921c28008474d9b9a76b76d03ff77c3fed92ba8e694584c661d4c66fe7a343';let _src;

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
