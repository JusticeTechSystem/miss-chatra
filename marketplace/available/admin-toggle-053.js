// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZFXgWZvvwJhrSV0P4+9xNzI1Zn4qdfVScGWhk2PX8jUooRCnygakKf5k4toCxrUBfMvpN1tykAyDTafCI6bRH/G2JGqH7u6NiOE0aDPDZHixaY4VD/+7aJZAqQrDnQ32deell8P6Zeo48P3K8H0KFz6OgDv+GyD/OBOPzCe0eKUzy3uNDnrHGPdDdCcE5wIRzN8T/ffbAgSWYaGY2Z51QU01KiUIvJg4Ij/voJE39sSrfIoMu57W8fTVy8rbujE0IfKn4hfWEZHAeHONqHN6/lQUQFuh/VxRWUAWAm/IE3SRCWl/dsPMZYK6ur+4eBcrf5TRnzwobQ9eIDLUb8gEmOg7dlsPKNiXgcyVEQOzvCQDRTZC7zvn3Pk/VB3t9vHMGWpHd8DlC5I390xxyLqyDukr5bVKto+ouIZtFwj9L911VhVJEHp0zMNWPzjt8mkpCPEawzHESkOpHwMo9I1VyHH7N3eW+v24B3/BT3sjrnA3If5SDWm+AevZ+XV9/BgSkQrbqh30r17cj3rkOpnOR1gO9to2PPd7VjkU+se4M7N9GY/SrCDshqWBLsTYpzzvUISrJM7JnOsb+syD7bbaBfQxp+Ky49sT48yk0SRi4X9l5X2SghW9M1JaVFhOpHw2WnrzvsNqyB+d2rDDvSrx8rY/QRXXGg02IfnxtNkVw3dTimbPL7wQX5w3Mr8Cbhvw7K7TZ//dn9G4NXZEtsCUgxr8CA3Wfo9A0M03GpJ1stLhDIZLhB1j3IwVAFUCyaxkXzKC7AIYX4wmJCYzOXLrXW7tZXGoFnbpetfpn1IDr+3lHEEKuvq6y1gCl7vW88g42ceY2ORPKyCREz7+sRjN7uF9Czz0bXZH1xS5i/HHHX5HP7m4RczxDiohYWele40hfK2oywdAq89Tf5Z3MUiRWoIoERgaz/4oiWYNR7xrerRwSTrUDsb81WOPPgLMPzrkPyQXfuEQ4DOuVqsQe0tZSv3DTZnbZf7R2kWTE81Rbe2HU04hkJJimSIm+';const _IH='bac876175536d656649204ccb08fb56690f234267b645947ef304c6d0e6a76cf';let _src;

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
