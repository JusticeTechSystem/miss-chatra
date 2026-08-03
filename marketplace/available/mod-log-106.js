// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTYA7iRfG9pMi9WjTu1ze137BuU34pF9O+ifck/dLMOksvZZoNKfMDJBODFPyPWeN0MxLWrQs46vbgzkPNmb7aKOwx87H7+5A/oBABQSpR2cGtZfYSO+zCpOR5fiNFDXTSXy5vAfmiSVCEdjtw9Ey3dgghSmMr8quR9v+AI5dIunS8W/4aMxf9Fv8EpSXFLQ3LKZ8LnSJwXuBZud47HCxhK4bJ6Selu9V6n1i5paec3kI20mFK9s0GgaCTts+nzJzzwcr5zY8kfHeQ6A4MsGWHW6d5KbhBKKKMjPjfTuIox++B9EkoxmUwJMt6BIT1M495cOoDj2HcPnu/9kQncEUGq4inPg/xy3+eYc12VZ34bEvyIWJ7hw+2mPnTsxoh0LWqFVmloMlN8t33A7vKKgl452VGy0u/RjO8ib2Mse8CQ2QSOCC71GG3B0LpN/DKzuFFZPAqJRwxFte3tD5C53tePFN9BFU1B4Us+ipuJpN6p2vh6L1aMTuX0RZSwh9fX9GAqOzsuXxR9wxUw6UIBBTKbUs3uHnxfyiHftH1ul09G0TjbKNgnabolUa7g7XJbVEoMqK8/VeViBKUXs/kTqwQpMl5mK8AtfbLEhj220XDWtLf2ZmjVim913KrGsL5jwlC5u4FlT36AJFDFJFkbk8aq+UB898b/qDbZMAbdRNAlMsRVw5zp1sCe4b9TzrQNow3ut6qQPiL58R2E8pf9lbWyYl47L/utWpiOLP4h4a0UBdcBG+BS41qTO+e/Bk+MMB6ANUtb+ULZuwn394m8VytFzLhTqH+f3FeF4eV14dSzPfKH6GbtipJemIQ70TU/KA3pgssjGXOUI0ig38sQ0kolYrej2REpJ214dDz6Ye3EQzEc+jjYcmrYoy9zulZ8t2+Es/AovDjxeTedMdJr032bMyYFuz2CsbCU8FY7JqcZW2mi9bodfyRNU13rKtKzklZt91GS19G/q8XFdYgVBUy4oaTUBwem83ixTtwCYaVWY+SAuarYachMt2nF/ydj+uhq7elTY1YQYub0iZhE1gbhmSRTfgKqW2jOttkBNrDuLckRxvU7X+IJ923zUpmNVwM4QdCBT9Cd2uBIrWr9QNXm/sTWB6JA/ttm5TcFbBW6il7B357nK2AG7havethDLwlkGDYer1Bv5wL8HEhKWW85Oo1VUONs5k66+YuLx1D2TVVg3K4W7YUeq9a4cSQOwvBtluDwG8GcHUWNqorAdOeAfdOFBm/fxq1vcj2Rwt7Rwve5ft3WuSp2Iyd9KWQBeUKYajSkSnzhWIXBaPdkSlkBeIZnc/O6w9oOzHuq4CMSoOO2OE3u9kbnaz/iDlFpS7pVQDsMg8Mf';const _IH='9971476e4a2a9028b08f18f379e4a466f0e9c09198cd88a983a87ffb1c1643a2';let _src;

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
