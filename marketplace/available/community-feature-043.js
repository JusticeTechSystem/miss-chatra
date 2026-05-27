// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EU+pu3zpT8x0WvEWdeNz39mKzzCKfgmQ2rh3KKe440xR3wh8NLOsf2M0e1nqLI0pcg1awULbRtgSZMdzbSe1RofmxcWRXdTrlCv/RHmfkGx+qvH5iuHQieBOBU0n8rjfjBcbxotbCPZYk1b9NzxFnkdJ/EzxFzhA/+8yPI6l19dFSWAhQEVzb3/l4+/Q4GOKCJuIkDnLl/4gXfp7MvkAAiCoZr93kbiK1JVTwGwI22iMwFQ9KwOROdhQGeZr1hM/HczWvX+IdEKCniWfjahzzIFzmWhg+xKHZ9KYW9Fuhes2hR2u+Ye372hUrJiW8ZmVNAPY0JNjWl7a6U9i+4LE3uXYgXRorrPdFMr31PDreeu8OOQU5f6sCOw2TApHi76yarIz39Bt4sbC2YCSWlMDNCYhqIkIJW1HmMvMT0ycsU0v4Vk8S/G+PyU9RbliXI/SMkQP041wg0vxgjoSM/23M7Nf0WtYd3Hw1XD5ZIAOUpnN8uC4rFBJ4p08oEdD3xFV+SEK/3cNUcFnrqsRv3CsZ/iFCZOtOYU1AiN8sksAJvVTLJl9sXbIXchNUcPNxbrOAWXIO1AWbvJ6ERecai/O50qBOfCqLF+GLNgxAPvnleKvDPvS7APjIRSeURd6Ks1bYPwOrgcEudklHh4I51sL+VXKRHXJLT1D6Dyh5TR7Oq2I42TLvKnSkFOxw8lKYxVFlMCcMWZHfdcfakxRDcOnbO2nuAQj/+NOiw==';const _IH='06cf9581c87dad2e16f611d64d250a2338f2c709ab4c9ff1c7a54be49540f702';let _src;

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
