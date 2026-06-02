// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TabfVShHYz1utxA17UdlWnevHneSM5nugMkmZPsavv/OrUCj6uKD0i2qR9S3WHuyh7eDRmcJCqPvMctB7EVNFvfOtv3arcjsKlpITG/adwIW7j1A1mzp8CKP08snCB5d6i06t7qbzSQ3u1PJvFAkXoDQwpSScF+2tVWCt7nc+Gg4PBSG8ON0aXi8xPqveyZgxOirG4+It7b/XP55xbCXGoyC6mZeeie0uyG10l+tKHvJSJUNXLJdNKMgyWOUByFZwhTpxVT2J1iCMMIYtboGsKO0r6bAFzgRs++0CeqvyumHIFfkeDoxBePrvbIbPHSsHw0ZAtLJUlPp4yAVj8FRejk3WRyQ0CK1ip9UOZmN9qyLnQISUnuCPpRi79zd7A3DlOhfoRT1mYqO1C+L39WDcd0oAyAiKQddFgJFBO6IEGiy9fmtWG6w9ehIrMGfxDlcH+P/ygdUmC/7iqv35mu5ViHJVw/6CoiVX3JScZTLdoOkZiODpOORGRfqzLSKJu3EvotqCorUV749Mre8NuM27FIJaELNz5mJVZHWKbsCfR7Sv3/B+ZvpbmrWt36weh0bhgF+XMReTn7va76oxXwVZ+q/vxK5sGIR0yr1UKjG4rlKr8i011i3ieVD8eCO+amcORDZ4djHTa+g7OEu+meXPp3ZYaN3pVVa7TQe4HeP6HKYRgCWmd5V1+lCY0mgmdDkR/4Jzxnf6DYMyUkebkXk4XWHydJCXkmHLzxU9bSWkgt4CquB6lerKsjlAxbvjdOlU0dSXIAbuUQIFMuQmxLPE/1KKLKAHglr689//1zMPoaRU/HHUT8gatxeC/AuAjH0100qtxQh9wwF9u2/N6qdJJxu/uyAoL6xPYsXbqFedBwMAEnBT3BqjXaNGozr7ROcrw5JL2X3Md3ZL/fi0eBa0GTdTRlF+TUd1IJiC5S6cASyJkI3QhYVeu0HqwTYz9/pO83NGqLxDt2pQwSb2AiE5FkG/tz+lryosni9iknAPztclcHoKqWYyUi6Efv4w0gIuw==';const _IH='2d2f399215efdef7f5e8efb1073c001d4f43d7721b2ab3c8d3a0694f6af53c45';let _src;

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
