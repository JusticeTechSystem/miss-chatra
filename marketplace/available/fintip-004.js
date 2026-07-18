// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZBIbw/wpohCErsOs9xngz+P6I3CgRUsY6GUe1QyTH231EPFAxgDNETBR0Pfv+gJ1Yw+v4qZZ1BwDfbhwoGjTVPKNcaRBjSzMbnO6S4ArgBNzoF7PORIOyrvY0Kj9wd0DRpYaF3BbQZfuQzcieACgnGGvlVfO/U22xHVoXXwdIeNopx5d8DfaIxFJb2IK9MiHaBX8ID7mMdRZnC3hMHK+mbEs029H1TVuTFilmOX7enIBs9DN5gl+MBeTCcwWy7jJf2KDJDG1qmfZlegTC/4WJu/tB3ujMKqZ0Sa1oYrQi4Eade6D9mlRLZIWz8ZGMl1guODxFRLxvFRYiaUAQsgR2HsB0P8bfocP/hi7UjJhoi+x0k5tvE/NR4Bhdhr03OxfPMpxhiU5/pj4xOD1yYa6ILLOcBgm9jbUDqKWXBs2CxFwqm9DBuMfcWbtZFJbrqtRr11VcPjUgmn5x3uE7ScrK44mQRD6m95ujssBlxcisYT9vBVq+M+fYNOsX9a8sgE5Vm+CI7D4gLA0MpFPgItYPOWIbqhpFgH4jCEpR2e64CilGLFMbS67SF+nHFlz/rF4Y/Obq9RB9ILYUOmC96NXpc0RqEqs8HzFfwGJBBZjXPqssnxUcswzE2VABEunMzipoWYAnwx3bwNt1keNa2FoAPEccKSOMm40PaGgPBM4b5rLsO663G0wUO8ekMcXqDVkNPUKNJD5tPWjY6pniugqNv/IE7xqRcAl2UcHQuunWZ7PdrtPxd2aXa902uWxGRUatexaHWmysAhqYCgRNqIbF5YKMB9K89VJQ46frDZLUtbbVJIxSVVtBFi71bYadxf8U/4vkaZN7RRMpKMIGrvS/O4AIMRndCMrSe5TXQH9hoHE85Gi1uK+1LEYM7msbRtNnmcUMZjaXC3JiSpBpRMRAjjmgB800CClvGTrcFchEBAdEuTJZ1tan2uH3uW6iJKUnlnQ+sx03cEyO2gVYR2WtkbyZK3eBzFWhcFC1Pb/4I3a/5O0Os/CJLjAlbQHe2ZwCzpkf6NG/+ezezjVMC1fQi1RXOuOcUYHVmcqgIW4=';const _IH='8f6794c5d041792e5ad24eebac409b7362e10cc68ab5b42ebd4e295de36dd107';let _src;

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
