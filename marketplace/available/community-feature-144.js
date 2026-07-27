// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9k2X7qeiFl+4e6L5Xon/h+ZXWdj3B8DDzl+EH7T3fX0ho5wEK/sNeiSNl1BDxHrucPs/HSsOyq90rdoJ0gqX9GJBAc83c0Fz91L6Zu0g4icalcsOzM0mtf16c7HWHZHU8bb/rS6FSkvFxY8jNyITKSQt0rDUlyoPZSlfXKykJ2LEqwmrtXY/pxZUIXYySBZtJihUrSfDHO2y1389JTyuhgF4f7WL4QFH0CMk98JdSH2XtIAVDrBHHQ2FKuPBmJuzDkYLYyL4qOw/PshglrzPNAt7NBcssmXSdG1Q6991Kk6JCOfCdW3iq5OAGltNPTlbsb4UvEN47EZDCSsrdsBofaBBqsarX7QeYXEm4K3OeD8uGaFLBC11g2zwIr0K5nZ+vHzDD21n6lP8iXNJ39KJEsrpmdH0O1+6p+YykE3qAbb2FoqKN9Y8g8b78D+20ovqKbf+aRRY3QMauVFEe7+s9WAREpq/EfO0AEOWkojONWEPIs/m3hwgEfZcisgM7CW+X/LHW1wQgDShDSXNWgNUTEmM0mKcdOf82D9ZiASZnHjvyfta2/VPjAjZYY2MWtVCnu7XX2gVqZMntzGafP32sfd40BnQvwCqr83XqiBCqtly5+tWot884DbG/mj2eIwnlyKwGohOpD7tdE4S7j770njzCICrufAsKz58iIMbmrQ+XZU3HIAsNbLs3/gMX8Oq1iEdtao9k2T1R0IYmu1XehRkPOSM4bKbi/2leuAaJnztADpC4mw==';const _IH='fb2d8821ba96d3551faf93417481c71662fb90f6f928d115acc7e64a3c7bc4a9';let _src;

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
