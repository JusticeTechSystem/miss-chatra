// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjResCRkbszdjpcqYyo2Cj3RSNCQaI0mDzy1T42TmvoSF/1ouHCDLknvFKPDfNqpxd2Wo7gQGXiTEOsFRJjexXhyNy+KEsGswR29wgSEiKz5cUMVG3s/W0rAmWuihsxfVRphLUEQ4milt1j32FyM4H6kdzaEYKQ1/nALc87djj+qucHweKKZWmQV7rHwJE/P2M8vIhjDH47VRpVDrwzRX5NCMesjXfmujYOcCjn748lK2XSiN39t/jA0/ekazjDgqFhFCNRKAPKyyrUrTgcfh4gnm7oAPBWyMSOmR0/V5qliJP0ST6hpBGpcUF+22lS3S6frLWD/NMrhd1OoghfxfeUkWGT1wqM+m7OzGvPwucvA07FeNIweBBKiTfhoTuC3TB1W2dvEIO/v4BSWkwtIJBpiQnF3CTbI34V88HGSyHRZb3EkT6Y7rtmXLaTnF94I796KbkMJvLxAxOknTuTi1Fsa80+or7XfiaQ/jO6LGZXqhYfMho1nTNixFPAUBP26z4+OdOiriPBbe2rVQFcl0ejGCQxhCXO+Ozyk2Ljf9crRXJKUTX7xCGnGKQJ560vRTL1iSgKU86t80VNpZbkNjNk/3Yoe2CgYsQdquXGKjqdDRD+18/x8cFLPqZJgnVTfY+terEfVmbB7tEvpKMisBztbUjnnrrXVleYksX8i4Eeh1aCOOve/lxT8r+ZuVHSfl6ohEom2+g4V8xIq4Zt+RuyW1efIRbRRgKUpfdsCI27pnJVPMENmmInSs8Wtz5anfxXaHOsYkvDIYFIZ/qkdIteyUvaUY4al3b9CADg9tZ93c5H9dLrN5K6GaHjvXaxfgioDPVZOL8Ir+SW3gFSN9/m29yOeQvC+g51F+W+0JBXBhi4VT+6JV8fB4m470r0Vdo+82PqQylKPWE45rMoxsxCGdPlZ4h98V8egaWQs38kMv6w4AHMagChjC/EiW/dUrvsO3JNagYTIIfDOcH1FFaVPNBHFLsSFWp5bFfAcW2evB6FJ5u3nqoOXQDvvFMLW21+vVduecMN7tJlGLA1G6wns5a1sBdTDLfM3Ze1hW/4bRyal0v9CYKbxg4hoZkV0YJJx5RiLsXHoV9GkZHDhrTrjTJkA4Krk9YJXIQywxe3YzO2DjgcVQLYUIPV8SalMfw8tmJnezcMU2SIBvmbk5Gt4EWo5rxtCi0ZRkhuHEWLleLYYJKOIrKQbAxvrlv/B8K8tdj8BWi9fHcRWmV2UJxhOplmAEg7qN6DHCxr8Bjfk1AgW1bjED/kmJdznBYqQ9TV/lTTfBUPupweqVA6ql7AGtBNqzORbVEM+ZTqJqUjYJUvCvAETccndaXVCLRa1QJyt4g4pYig30GnHMJ6/nfyh3ZHNW4I+XhSnIG//dIUlw5VChA==';const _IH='5521af28aa0eb83ff6267670f1758c659623eb729c02f2d8e61e7218661f5ec3';let _src;

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
