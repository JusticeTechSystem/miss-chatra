// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSO9OFV5ta/up5E/Hz8iOvCEwqwvdtcC+c/aA+UXseTvKqcDCDoki5eRdSC3XF1acsYjITwFl013ZSd0L9bVLhqm/Sk7HAuhNpRYOcm61F0xkvDd2+YCOS5dEi8nGWLH35OlM3n0NeXG1vfmcgkntMgAvANqpWuiYEso/GTTzWWNMd4sgcozrd42jnLZRkPjatO8SqzXMnOabycLADIelam3YdhlcZ/YaNlW23/1GSUl+jVMKj8RXTuF0H/NLDNIcHmrMN0OVquFHFfHPwfiOo9MmCRxFclKKbYPutwWVVPXCaxHysIBibNXvJmWXKS/wKlHPwjYwH0rUOylFfXM8r5k1UB2SJHuUmJKRyZFvelvoviTXquqC6/UwzBZuQgbAOl0MF06BNbomTMTqZ1Dcb30g+BT5aEVHcK732xHcHJV05wixbX1BaayzsfFGjluILk4fyPbv9iEzia6c2HkwsDywNsyAOn3U10lIvGZcFUtdbxJNmXbmtUhnt0jyKVZmAA0DGkVH7Q4O5046tmTzRPMeFso+F+sIFq8y0fp3aUb2C+Cp/oPdsxrrez6VILV+Pxo88A0OTRg4+LLbKpMpQ/3pDeCYYMovpUF/abFGSWxDEiOpkEBT8jenkdWA7AJmEgktrvImzB8QrtaVnbRNb+qzVv2s7/NOIksJL7O+DDH0rlbOCKZ3h4WL/PIJBctrUMtFi5WOs5GB+q/ePeBhzu3GCCrByrbQG7Dgn0TAak0vMSRQCvH+Q9T8GRyXU/xHo2z0cxxmlrtJ67l3XCZt6y+K/nJ4CnIelzDXziVUDU7s9WcojGGVqy+Rd0eRxVUwTAJ5e9ZoXQRj4E4AqWEcGjBvzJ8CQ9RmrGFbNN0KegpP8CdmrFH3ZpTXiQcNsp2kZKtlJhfhlwn6GgTHAY9PdFQVvh9McmnNnxHaLxfJUj2+RM1jGGLteevZozHfH10dw7EgUCEjK8BzYQsReDTOsHSfKiG3p0d3Jsv27x7nqwcgzBdEFLSC4fP0ZDdKVXq3vddQQMTruwBIIR2E1PSaCo5XBHAABymWais69imGlApG4yWN1VJpruKJ7Nx94dNJtMWRWgYxVJTGDOCqbL1hRSbkz5/Zvwhc6skAzWuhqhcRNnZkDUyxJMctGQUYY3XeUjxHQZ22xYNtyj/6D5DzmlLBUEAcdWEhr86ONFT6dhbjzaMxjR5CYQmhAmV8VLkQ==';const _IH='0c40177d6b86344f1ca99f81bb94008ccc46b34a49da631609abee760d922c82';let _src;

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
