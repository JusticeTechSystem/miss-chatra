// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR2Bz5TDuS34a0qVj0smRxzJl6i90AUjUB2wTHIhTSDMAuSKQz85YhqgLIAwkXny0Ygf3f+aOKkALz0l6fwGK/qTHG4So5MAJyFTlOuZJcQ68PxjlJr3ocWKGj7ijAXWCZQ+VXmBexTTKM++UyfJvNtZ5TQh/QCHx5hnmBmPoaP9t1Yh05bncaB85GKYc+rMZbYS/joiwTZdzCLtogvlA6uoWScBHFW/cNjAYOE4Loe4o4nb265dRIdeSKkAqhLPqrkNoiDeQFujMURnn/dadbqZViJ0+KkCXzV+IJyYMpE6LHBOD3oJpJDKahm4D1s+aulx6kaoOVi2Ue9ZFAGpvS7x+zXKa1NFi1thxFyGAvrOZ9bBMax4u7DGz5jYMHcBJEk/Y3eXiIp8YpdH/nRGALgibOxjg2mqnNwJnyAppnayqsIRxBiW5NhtMAWTvwwJFRzPfDIflpo1QReFc8XqFesioSsVGYFirVuzHZW9skj8z52N7qpOqWf+UOxFSMJPcihTz4O/wJt2Bh059p2C339fuZKrM1+JZkOet/b+54y5g8jqBlzTBOiI4UrFCS5Iz91ZZ0qDarOHdr5hLWsYpocmOr6rgNMW16RcHs6DMo+xl+X5P8UleI8dtwBt6H3NzF1/Hs+mg==';const _IH='396d65643b6f161582351149b8dcdcd9fb120ab4b2985f6c420c0e62160d114d';let _src;

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
