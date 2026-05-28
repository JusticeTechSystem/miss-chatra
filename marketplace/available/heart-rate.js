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
  const _b64='bolfE3JneQ4onBKlVX1ya3fwPXPKJYwMk/nj8xRsDhWQwRTPErdDTmv/Y7xr5Sf+QloIxxTaQIhRV/xv3oVrecQr0lWWMrtpVAvADUVRDWCZdkse1OzWcEuWCRvS5xzxX3O6mM7T3j9cSifF0PSORKsbw2EupKgdps5+8vElHJTU3F++fLzX+02fnGap4sSKJFeIKQRSc3+J96ioZ94mEXegqdXE8T5QP2B8ZQ7dOc0rcxAeZEiRb40qfJxfgzIFw8eYHG8f3KIuuRmWLmUaoR+6/6FNhKjQb53/FIPnTihgCGdmHlQ8iCM6zjHxcLkXVWOIrDfSOgXfcPoMjwdAdQP+Vf2r83RnGQhOOPOehiQSsrIrFrmJ0IF2/nJueh4YUYoeyGxg78JTQ//Y30CwTro5ITuyWSqLOmEvBDDAmuX/csPksu+1Ig+2tL+uiI43wl+I04eFFl7OIcXmiz2/3hTOlXgHpz3bmJxtJdlpxxPCktnwbKOiygsseNeDGRn66Mv9SH+7AU6B1WkUZgrMunb6FiDjIqT0nurFgfTS1yUYD5sn1PUpmppOuMhwOVsWKfZn4UbRNV1ifhY+Jq/rxHRPMi3plsOYZI6KEZuYlyF+AtcBY6tJXtvtoRqAddADfyuU3EcDMa2jBBDr6JNKXPJi4xA7PuKjho1Mwkke9iNGGvdYC974+huZXUGp9HE8GflBN2qAXmO7XDEdix00aCDbakvASjGdToYsl5tWcFA2K/4Zh6q7yBvSdG6UTzsRal25kWtHrRbtmHRvd6ggvjXt30I97jsffrnXUcfbNjec7ByuqT6JY+M57vhNgeWewTCAZoit1YYXGcHRIunHfUdi1ZRcf8GCaxCChjKfZOB8ny52bn2u8e8GxnNKnfKY0wsk6Fz4byDNl2aITEnJcgG1Rn11s9XKcqPgK6FNSjKfPIWEQAHY++xq3KVbh+aG+qvKyE5CL/kghOYpkJ53V/uwYg7JH6MSDeF5yxQirPBUDXy0n9dBOdXbWI/QBjgJyayw34c0CzSr37UIj9c7MSRmhrnSAgg0THgTRO1WyYARci93QM6npyJcTVXs7h1oml4A0Fq1e1RZowf53ypkJ4YFfIjP+xZLb44j4npL6jQ5qRN87/1vYr6JHfmbzXRRoSZ0NB3HzCJSxyOF92cisB5Xmr5WpjMTPJdytVJfvzBSduDtjHpEe5rFRMVLvkFxIbC1yy8og1VSeu65UHTe+ZdS9v6eKeKI4iEM3vOin6Mn7vpsG8FG68tqGjZ8qsfcBc04V4+Yq+qg68/vzZijr0ftd4sfmhIIMVbqccDr7ZBhM9qj5dHfMAmlOdDinG9PXJeonMp0cqxJoo0fQDIv/w==';const _IH='68effb9cded5afe72b0be97e981b4385b2f38841e006535e3092d46fd4e033ba';let _src;

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
