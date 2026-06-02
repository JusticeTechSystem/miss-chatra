// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='is9o7Ektv6fKdHB9sp51Cg76BOZPMrDC276NWnLsU4HEmRCjyVHK0x3MtBT0Z1WvPKdipgPDGXpDpyo7QrdKlIB9QxCEBPFlJiF60vtahhqg2XZThEr3HHtZXSplzw9JlpAexUbhNccBhh/YwTTvshUUnrlW2gbQBnYDyfsumtk3Ulbepk9YQpTn2IysfstzwHPI/lQyWW6BjCV9iwkOCdPBl6T+9TT0pOmiBcf4HfoOlkNfwXfDBFzvMSlCmEuZR1uFkIBdaoBM/pz6ZqZ8GTfCD40BI9hYAALax607isDY7xlI0wv7FUNjHuJe1Tfg+JqpJ0tt9AbN46kSepMQn2J6RLNQ599tbS5GJpdQAtmdIT3jnzBveh/L2/kpO2USh8z2cavL6lE2ZYrNCyjiUx0vEz6EC1DofUqa3hpoEBjSB/H5bCYMM6UBHokGXkMgs9GnyQ5ySIrtC+Ex4bZEzNkOnQob31kz/oMmzpCYNsM1wt++bnva3OW1Z0QNQ4XpaXdbWRVr/gV6k8RyLm+vQqEjgWDLuJspd9GpADVPFw1yOlZDmEqFHW2erEI/yIvuzNi2JQ3teQAjxm9KO7+iyY3BiKlTtsuoXPG1FHC52Iz+bdNwsBVWqmhC7FBpvbAUA9T8wwQiqBm5R3eevXH63lKrwERWO7pDJgRHGGWwK25YAfEFUp32OTjVw/D7eSZ3GhzxKLllfa/zDp5FYPBD6jlrXLI=';const _IH='19302ddc6c380f0939a4bdab86edcea22974cfdd078ce95020f8af3c6ea6f1ec';let _src;

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
