// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFgnpGjM3jkdAethGqK21MjYUQiAu+whhNFa6gbYAumN9u5FxLdNQYY1fT3q9n0WJkVcoLeA0+imVtqlKdrusGD2StxKmx5j+R79RxmhOHDmxwYcvgB91IrGMXiuSTcj++hKnMK0kDn/lKXspIu5jKI+5eVDnTBac81a0xeRZD3/KPvevOZh9+TYfqui7AcJAvWyHBSUNEbReaIsso8BWPqyKso7a7HmTM/BiyF5NpJthXTrWtg10yD7Te6GFPjM1bxsxqN2XIGlP45qO11k4mDARa0P/F0WsjeXcspxIGgcowatCOffa25YyFg+YoocatydVVr77BOhLbwdxX8Ex2/6niyTk91/Nkf6Axf/BSGL5o1cNCAR7/AaGoJwurnqgv0ANkGnFwj4+XQGaSh42ftbDS5tIfmuK8gUKBS1nLrn9KLeLIqpaCCaD4NVqNaCs2sfvtDrvl84OiuCfmjrJIpSqQB+6XIpukiRZ4KDhNk6oxgXtbVGNTvjmt4V8UP9WjdZ9rKRuakuvr04jCCLNhqfXgp62lE5kqqHydJozCsEL6hf385DPxZWqWMzDy4MB1Q6XRlSlmSxJLubvD+LtmIk8bsXI2bprTtrMTnTM3N5upRL4b1ormZTf9YjpwVk4EMzQ6imqDyUEf1WS8hQvJkC/3F6iU1zv5znKGkS4CVi038cCGW/QmdF7V2v7+RuS+Tfz1z6ou410kQGP8LyeUqTispatW10WkCHU+hidu6+CdQZQug7Ug6rYoDni6WCX+YkDVnrWzJKHepx7hUbe4wc5SHTltZ2QdIDQnvlUFeZY819rtUCddVOCBH/HkCD9szbgYvizrg4kw/f/vKTx1PW18+TXX2/MlFev8X/RbIuV8y2bCr/fpbOp4MkOdaWiBKTa9aSWpx7KFYOfGCtdaYVm47TsSwh8y9JAAEDRxWtEK0M9/UCylEB80wV2fJvShSNnhfjYkDeUEzrHZQR2nZ7cs/JzBuiUsMXNRO0mjQSQb/zz+Ge1KbkFSNuWo5QipGnVH+2YSTNfiJB955KdoRjUYe8rBdPJ1LuLd6c8RyU80NbMFhYovxgm+Xwlp/4Obk+CT9JBVsCH2dHsbJje+q1Id798ewJrhi/DrzoCRVwmWfbdh/gYg7V5g2ZROlB9n6y4QDWB/MNW+gYVZBVnQRoyEb5K4QLKfnvt8c4h9YiuM9MO6UIkzffNUe4OC5iUMBPY2IgP39pI03WsqnJJNE2/uF/p65QQbjmCyYippijt2YFguvQ0a6F70ruXhEwBCkWF9d2KATSuqoyYRTZDsKOCXrdslcbxAUUpVBTnVwGpSNqGyMlJMQZ0LdKArrLKwax6di1CmVFB6s+jARWsSgP9rqycOLGkY';const _IH='1d9127ccfa0264bb754f1095a4ac0c599ef1223140a12614ef72d2129ea63e2d';let _src;

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
