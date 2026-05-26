// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RlcnlvT28la+nYZdCDcYD1867WW8/afQImFnVVtlojq07TeDXkz5VGcfkd8YgYHgcm2gVuQTo+9MXqjq4bLoSnN4RZ/A5NzHbKGibi86R//N23gt+OjRyciEUBctYr3TlXj6Nl58u8Ip2InkgYgcPtJ98yuD7dE7UO9XFEjTW9fb+pNVk0x1O7tGqnnd1eKi3xmbE16Bxe/c8HkeGPcasWns8YO6M6B6DVa2gCRz2rtBrQjKEllRcxhStQaSXlAbzCOi+np5guc3IkH2EBpSR7Gj6AxVXJaS+S7dJPCg6U6ZmmcHLVTfSOLFVR9eGCJltMAPf7AcKGoTRV1QZy9GafYq+AQ4X4pea0hY9irBh6pdgcqcMK+Ttb3SQ6haW92jx27etoYw1EdLWv/ocE0hYmDrc6xBxEHyzYIu0MMcig5LEVy9vl85CzsOlUZU4PCYSNF30cHRVMJgFlb2uGPoi1h4a4ChtOcbNdP08UL8gXEefiXjPQ2dSN2gBkh4eKdvYLlEshrzgpei35W7AND/KOM8AQkEmJ5+QGUXPE8sas2cdGBbdp/okcVqAc83CkoFpwHACIwyJqu8I2QZBa6F6SF60G9g/tJYzt9kkJ5zafzFMsLMuZEvS8JxA8pJiC189AN/EVYWwZA3eeMqZMLanCX8PwFvKxLmMqhDM07GOTOy+rI8RHFxsaBK1bydb1lSRN6QeA/mD+Y0d5WF1R937x4r2T86VmCo';const _IH='279d590adb07097299604318f4e5d296e020642288d86d0dc65548168b73d5e4';let _src;

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
