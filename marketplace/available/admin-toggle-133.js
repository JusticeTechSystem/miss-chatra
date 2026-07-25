// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQU43relHpQ6s8hibbi80STPQi/5WV0WXqUXE4AzTsK4eb7GzV6poeludHM6wUomfhARBTmpd9Hzniwf8u2RnDewvKaLufFh7ifzEDIqQ+XDXvSyAtL+wF+1/Z4zhiUcppBsEuF0ywwRfPM+eYMebnCXYieV/3IJfs4BFiF/QnvH6xrqQRCsaSZdW5BZ+uGGlBVq6f9HsYbAL3p3q88qHG6O136ILFVPaF7evTCVDb0jagQXv5odS9R7nFAV6v7UanVFOmwiAmQVDm7EuyQZn5tUx1/0iAPFCC65xZg+Wm01mNkoHnkw4kaCq8s1PJi/H9mqM6U0RbMydT+uKtJaeK5Xfq5r6zF9tktKhVlNXYT21Ug446HWgAtA+HKDW+qlIXBG2i8ECpDJ3mImX1xTddt/enE0rrBGj6QWlPH30TlE3LwA9nZtXeKDa9OWkQ0rWuj2L5toyz4krnP2w0nhtJgLXHngt8e73RtbTv1lmIpuJUCpMB7A7D2HY62s5RAd7E2JoJWqE9sWs7P6cIELzz6gGzyPU+QJwg8l5m4Zp84qo/vgWHib9bFtTY9s9yM3Oghu5CeXNvCEiG9qzdl6G//sGxFgtCFLFcVZRsPa+lMHWcnMFflIRO8w3f2inILsDMoV9UcCt0iP+71eWrxGVNhFl2II2jAyC1B+RSGNSznnJs9T0z43HatSMVqQrg4x0ssRh5PdBk2Swiz1+0TK3HvBM8DrUqfSZfoAvmtR4Qcoqq/qy2T/FuIE8DCLJax5AxCl9I3b970ib/oQNub7wlchsilA7ekg2Iobni3mzLdEI3xnIIfjqgTXidv96e0IvUtBwYBCKMHdpp4OSYeAsTDg5mmQ7yY5MCNs6pPvzflVeuzT0FwcR01NIhoKlC72rw999A9vzomu620cage2eR+KpBPb7L+YXFPJg8c5Ld6e+n6eU9GBaZyXLwuXSuTLLoONR13weJ67IW2ZBRMFL9glhktjEF75HMBgEnCgpul7RThuFwhfzwKTMyLF60fEewY';const _IH='62805b18f912e2b0890a9c367bcaba4d963a7e80d296bcd485639ac370735211';let _src;

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
