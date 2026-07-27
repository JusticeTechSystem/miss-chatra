// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQwPnGccNgwx7XdT49pUQk3ZCbv5kutgagD9N35iG1mjgkF2MehCXT71S8A6hGvIYN3+5s97/FvgUv4OH4lj4Yxtny7Ve9wHyHHb2kEk+BFZoOF8A71/MUVVubRLVqHbb7vsWXDuuXxg/FdF2T1bqQ0c/AVZRVgDh7syg5+uMRQ+a9UmMGOMkemK3mz49BeRQcyMguTZN3ZC5hQEpJD3mocj4ytqlsVxSADnqFeJ8voYyzTZJVOS837FSZpkhg1Ez2eeZOm5yFWdo0DPYBenRTMULxAcmuKm6/tOmGN2HAfIlgjQ/FmVtohCXQjkus6c2Y+teJXSqbfix7kRPdCL126VJz8Q0ZIoC+1ZZmTpChpF3cX94MdRJICRlsDt4PWJl7qw+AzPDGOteBtZ638woFg5rCUqncJKCDI4M1Dh4OOkIO/AxDUfcdwM+BmS7BsST5NepvCDuoCDt5m/HSj5DGVqk3p7BfQPngue4JH9QBng7XN0mqaMv0qPFp7mpzouBoQodyN6CLZMsj+F/UrzdY1GFJDSdAirjPCvgMzOyG2Ik1F2BF3Ttivfz9oidoRqe0CO22x6HPOOADeLdY0YNWF6A/sb/gSn7kUg95QusIlmD6Lfb6372Av+8/nyOfwMxDoPfOnSC8NP/eP7m1HukYuFDvN/qre2t5I4/PHmAj3/AXCHD/FvZ0YURLDAD27adYmhd6AEcrH2f5TkUVDP9o2FQ+PliUzV5nBYlaYhEV6qyl58TrMyk5p7tTaZ19wd76oXttdhosbPMxxd1wHNGET/JRXquBTBZQIDFhfEmV9P4hOqqvVmZMuYrnTJwMbRiHpKK3Odd+wBi3B9Tov9M5qFm1mTi7DmcrD57exjmPt+rI1XuaxN+qWSnJ80rDXHFUF66xQoGsk/oioN3dSeaLdtwy68/U5xrYPLsKusHjOpjEXenzqNbJNQN+LFO04row0AeA7DMRrO511STwArJA/l0a/wMrab5z9m296N/3//c6NI15uGguFD1pCV1CaFPUFufbz1A/LRBUelA7wM/XnlOth5O0qrZqspbtHr2m8ux3mKjaaZYTGECO+Ob3HQbfb9FxanJSjVV6/sG3pwEbEJN4NTq5UXoE27U627oebmtEzxHF/RD+8NZDaBSpKlSRV8XyAQOn8TtWZauvN4Wytj94ZYMTZVRJcPvReSg0ZkI3dMuS8HRHN9ecKPdDO8x7D5TFP9mkb';const _IH='476f0c08241ef0fcb07425ef15e14dc4e1ff3bf77d91688efbfc78893b6fbc02';let _src;

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
