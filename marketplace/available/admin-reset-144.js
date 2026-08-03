// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQV+yt+fJSHG10QEJtrDWaSAkP25XY70vqlJ0BL7egNSzwdGc+j90hbdChLvbC2hOaI5wl0YWfmjxTFWAnV5OqxNYtyvFfqvSGrvY2ufYOQw9li1sLL8T4Htc+TefvOUb4EjV5kPnUsTcmwZlFCAATCnGqerJg6aPjLEcurH1Cz91sfHdImpEhGdezZT4fZ8ACdeunB+KH7zAj8+nT2pcIelSpCIHaaHbCZGzhawbWv65Sq0AaBO8/GUgzvHDuoXKNfevwCXdh484s7MU0W4DGtg+fHSD2WIkraaD9nlcYYRAdzXgaXpVZaSgio6xBmEY8bfxPk6ChWXRhbXC04EC/tOV18zqcfgabmPFCTMG/lGT3uxjfxn/fOimv1AH38n2SWFI12K62gkVYJiGK2RHHXJgKhcl1FX/WQVI+X5N1KYS8N2XwkroAngJUmvAqLIEfxxLOGilbdf+hqxvzEPe70HsVYEej1WDFUujTFwPmViOCbUO3OVudCE0NVmT/v4BtUvJZFMuhBwn0PcpHKfGADBFB/5EPYrRHIUutggcGCJfngx77Mw5OfVskz8wF8IAybxxrlb9cOL7WWkouM9FQhnS1c9fUizvWcnI+hdcEdUqZinoUf5ibjjNRfC60F4Yf4NI39n1w7li1kcTjzpLsNdcGcGOaUkoMTpUU92pai4p+kdg/+rzznCDikh6eD3KwzyhAsjJ2S6ncMOjT27CmYfuMr8uyqY/uxz3r5LFDdZRRs7Nx/JhhBRAYjfZheGtb8g9jCgF59NdxZYhk333/Ph7tboB5WoYOweSqNJk4O5LNGfxPwLPZ6w34Hvd2E+KsDFAUdsl50ZZPaH3vofmoX27QlknEK/X4aPR3LTUboriIuA0zBCo1CtMtDAQGQtP5l8q2gHykOXbQxz8HmsgduK5zGE0CAs9H75D3rVwmfHwe5t0uDw5CrRJdAkKr7hlrPb+O3MB6abclDRfev94kF+R2R8/JCb4mrYR/A9+Y+ETXSJe43MQH5';const _IH='689eab91c37782eeb41e1373618124d2891ab3ad9ccae38895ebc42d2c28a5dc';let _src;

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
