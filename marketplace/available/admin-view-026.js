// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSsx70smarn7hFQRD98kRIk3EWPsSFKxbpP2jOw9ER6ymofC4ka24Nc7HkdRdksJKh9SxQJkQeoKrnSX5N1ef91AihKaQqYyDjuWsFVXVtCQn08u/ueN91YV1FPM6Wd9Nl8SnoACZtUtmspHaOAyvK8sG/Fe6qcRzn4vk5xxrS8df4pCCEEeNn9z/vUzpfDBrI65ISBKpnn+D95IlSbOGhc3rfwe2vsIJo5HbadCyGmWltFKhoP7WXsqhjRkHDTw5cVLvnUAjY+Xz6Ct3E3CX+XVf/N4NbpnWojox3LaAfLRNSwwNUpVQ8XY9IaZMOAZPSu7Y08DV7eChC3b0+z3AMEn4Ne89t/U0W+SNguBQ681vMy/vVxdJQJs/AEVzcla1wy2oF1k+XAlAN9zzlvVsKjcw1/Ep0zrs0UZeVpykEeRPqmdWUxskFRnQUZw4vbCR6qCKBfoic3oo+gUEf0gwNkY6YpxqBBRdGpqfeHuGTO7vFRuqCGRUkemUOH5gYy6xJ/a1dBZgMQHUdJMmlczun+v12eESrIeZ0lP8F6u4DpgW6jFX1ET5U0n7hLN/4IXQl1mUsovkGACcYPfcYNNCLhfF3U0pk3+EG9jzC76abMuOvgqMduVM4lniNDGIKBkVhyLHQ9KvSOPU4NOY62EHd0hCrvDkgXfbxwXE2rTAMmw33cwbGVW7uoDUPvNvcT1LV6/bQFphrHtBUygtcLsEobgZeCILya3s066r0mtb0dH7Mztk+KiHPTnh1vZKU7xeb29IF3yagJ5/KLYYp5iJ+0ncp2a6SzCruYfHL6JkhJ7YAseG8fsRk5FTPnCux+ckY4wc51FfR7e117yVFSiPxWAb6a3+jn1fT6UWalu5hRvwr5Awgin2ja7s1phOXIjshFyDW8xvPdWSf0cqaRMBUAi7Qpbew3Ni5l/H+EFeoW27ZbvyYBw8ntyuNsfvcEnugnK9mtYUt/s7TymlB536J7kjTRGmrxg6RvscTeTl0w';const _IH='df94d7747919a3aa53c4dca0a13acbaee970bb42a20f45043d7f5ba6cebf36e9';let _src;

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
