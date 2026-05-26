// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sxg8C9dYdVHsriC3kwvjNE9RZqouLZC1vV7shS23BpHYQtSoJLP5yd2wFqgX/Ua9FBlM+ptkfbW/se+3CN+qOL6CRVTgfdCa6639FwGRsuWgStORi5icuOslgfmP8tHpWy21xj4S9gthixA9Vz9ERlc/mZH4UGNVoEiRo0XYttdLUm0DeECsvi96LlaWMIELx/sD+fTFEwteA/NixHSFMlmTrKeFrqUhLTVzY20MILMb7Cnqfe8GpK75UEc5Fa3Eu5uOfqIne0siIz0qZlMmWpqlC3AxdNx5/+OqH3ZvUYxKS57OHqFl3Ji25QqAc40xi8KAKY1wSOC30H8W4/PCfJJB8T/vvA28BuuoJd/GWdH45C5PHv329LBZ7g8VdTiGa+LrBpcyz748JKkj6ozX9GBdP2QGxb/81x7Ik7FTXF0GjVC+VrvpiLSeYfXeH7EytQVdY9Uy5pc4aal0cXhxbh1rPrtcHH5vaytXFgtyOdCM2UpTSp/GtS7G0BlpMa7sRVg74tp3+CI92gojuW4043C47/QCY8ehJiw3U63LFeAw+BbSiZFF1YVML8AO9bw84b8K8ZSrIdND8BrOI6IW5VPo4ivaP/mFMMCq2uMjmoFTHmTbC9Sdk+Tvst0lOcQgYiUrpfUlXJrSwSmbz7irHsL/L9lUXtvJJCLHGKYypXYeWDPFE0bpmllxFGnAPQiHtSErZBUV1OMFlgMD5/1gcFiaeY6BbGVZ68ApBdg9AMzSm34MQb0NWOmjEY4elKgAWe7Fo0NwEzZK5f++Tw57aFtvckKDcWztM8U+r3SbA/maqauwEtz2CQY/DI2bZ7VPVptBQti3WILZ1S7HLFaYSg0ctznOwj8eyrBJYo0ZZC0kC11fUySVXqPZg0mHf00qzkgQA7qHHFbO/VCBmyKaLjMuuK+anxpwZDPuu4gyC6PiB6Wxk7VLh/l3o0M7QTPqIft2vIlUliIonwDjZoXcYGvE6TpIVhiRXN1j1TjgrS2lU7fkmNm0ir+eKynw';const _IH='b5515f3706293eed9b792c79ff29ff8d80a75b7cfa22ea93100d41f6803e6796';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
