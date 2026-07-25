// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQ+SKhr2KcoocIMsZL10vSpdgECJ4RnmOkJiDEB9pCiToQJZ+BhVhfOY7iYACQzuQpvhYQ0yQgbFciQONnL+oJAPAQUve40TBtv/uJZfNWBOBUGLCVCccWGkHyhtfPm0pNprlQtnoLfodwsg2Z0JhcPtetWh65IVVuDrclJD6S7Opvi/Nq5ZygdHswiw/xa2kLs1rqCjU3HSGWImpzvw5rTR7Ex0hIdbkLdU5poKik9s9BrCaLey67FtX/nOHce8riJAl0NPFvFTDNa6e09znc716vNJTpkjOufH20IIgFKvdpVvYdfLDY/fCybWN2hYMOEu1Y1tiPo4GRxjqk/GwovANnWdxnNMiYuEv2J6uogyCZMlgWx3u/hwGhIRy3l/oli+YGpYdfC3GbubOI0vLklYbFCwOjiee+53wXBXRb6+bu7SsqdOEVsOjw+yWELPGYm7usH3HUQEURsOOa7I7bbtWt8swXguRdC8uhixahGTHWbVMmFrK25HnZozCiXAn+xMrRGD/aSGHJRitFn9N9ppTcQCRSKUjz9dWu11U3178jH4FkNu4osW83nffG1BTqLnazB3DMvs2BMT30v6wOU/QzKwTqENnCms4AFApvGfYu+6THXwa2937i84VK5L+ddDsoObLVNEoTi4D61sn3ny/MV8h5jg7XAjpieE4xceZG9LhWnPsFCaTwadIjFFXZAOu3PhIKGW5i9ddmudo0K7hDIS5O3OhCfEGiFfUkJDk484nTDR5F6drJVD36hU/gr0e1ACiK2TNPUI9gdS/7VrBTU83j8aChLmleHdgKhXI/rtIDx83fI/r6Rf3kT7G9pvfoGY4x79jIdQjHWBMKtChgONrKcefXWsajknRIR5RlXXhRx+CoLvl0Llia8xsGGzcQyEj9FvJ7vqdsEUzPyWaxl/yo5XC0KkapQ1+H9BxMPnhoBvihcV1OtUrVhddNwPN8PMCVIMCaojMiIRtwMdRHutKTEK5xbjSOiVxwIEc5LFhQXkEiPOnTy4X7IdfmSe0F2SptgjD8Ufe+VBbAr6Mh3f24E6HVO8yODw+FcIiDWUw4u3YIT9CHgTnpTWj4nWuw4xpzS5EhT32EikUXa43SmKn3yh8MIGoEKljVdN7pUK+krVoVr0g/inKu9QNvL1DEgG8UMB41+ZdXaBOFX7RAF3qxD758Fj36woy4I2Ehlg057KuUssHs84UEuc6ZXeoB9EiB2CumWDkRphpDHsp5';const _IH='a983a50dbbcdc045ba05d59cda67d37e27aed769240d90084d79d6074ffaf033';let _src;

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
