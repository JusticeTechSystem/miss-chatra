// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSzpenFqCSf7SW/NLH3Sve2IKMDlzEYidtw1jd4VuXG+wkt+5DTCW5/d+5W6f/3NBdopPPpoqf+XsRm47y35XAShSQSG54+tqbGx1qubvaN7sd3dLdjlIbRqzZzhdaFeEBPlm162tEQzgPx4CGPLOD9TZHs1j2xUpgdEIk0aa7KSVoCOEHgDD5Ulg1eTwMJhFW5P3L5nl9dsCFCV9qmCs5KMuQLUW4EmScWLfX4aIiSIySEuVeCAqAuWgI4ADHoMk4y12+UPabajUTvVQyBA/pjmfAzC4yO1N53djrCTI/hlKk1CWNvqap8QBafr+l8gfeVqRaQtlSlPBA/TcAHZsNkTZFPiJ+xtlVF/FlxB7mKE9XjN+lZSjflTkxYDljS8z1wpA3R78Oe63qUGDdzi2ojwmByO3a8Ds+67od4nOxfljq7E9b5DylaZiYQ1GI0XxRiz0fPI57bNSVTsUcY4YJ5cpQH+6rLHWuTMw37+hrn0Z54y6RfcbNidV2JBwyVtG3HZ1rplXHMNJcbibeXpbJlfaOihwcfkY9chiGnQce8W6WRkZETKawTGjbFbN6Fywor1gjyKUuwmvUVDtOYeywmnoepJEi7F12+DTn/HQeGCTdzq1rrLc1rDpb4bUjqu4EVDrIPjZ3LT7wjAj/mPcq2Xxl8V13v9cExBWjfv8yN+vTC+0fMSA/ciLuZFS+EpHJXiMJITKR0jwkeUrHD3FXNSKsNBT+K0MTRim+kZTMSyYQ0xQHbfGROKLF7+7CzzA1w7H18kJn169gjoggyFAop5PiF1Mgn89QSDFhTcb4ewxP/E0YsanJSB1rFbJPdqueW0UAYpLynlCDQN2nVGsIKvI/sbddQTrSQ2oG5pMO2t8RPjR5b/rQK9izg7L/Pxox/kbZ43ZXk+rpePeHjQn8EZH4JM/pJZE/ZpKdl7j7USIvfWCqXJzxcdlAHcolfcYPRg6eNMWVOaauq3UxWJ0rW/6K0mSKwyiBEUhG+FqjndUwrm5dn1J4yIOHPlk8G4VmTZCLRlQwqhOG9sm72UOUkZPrSxM4+rA/c6+f808OvPBCBYB+qai2Hnrb3b/6Sf+ORyk1gHnjM8yUMnxKMJFV3XUZR5U8n5YbS4avQcGYPFShaVtg9XRpSSFXR1hHmEJ5ZwGO2zLRZNU4pgCWuUsiTma/hW9I8rsAbab7uifyUdaWZTz1t+iJHYk7lwxDARuMLjg/t6g==';const _IH='66789072a9c749869a47596f193e71b12e5e7b635d738676c5fdd180890e218d';let _src;

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
