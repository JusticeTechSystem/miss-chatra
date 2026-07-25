// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSdGn2Mu5hHlQm0QadzJaCClii5x1LPdLNGmqTwJx1CznroKYyAtGPSUVm9KVHBXX3grguNoeGf99S1VTkRGpjv04VwYmovtUo8Dz8KZezbBHhcZa+s6HVo4sgLmCChREHZBdEfV7Glkifw6rcQkPv0NB5pmGaPsO3rAASUihVeyc6hgxtosWXLvB916TU1zuhaRvo845F871u8W6sX1L+Ri+jNQslgEXJ6fTMA8E5T9lpyKXwH9/XvjFO0ghB2xrAwOV41QMHgmFl3h+Iol4Sp8QHHt2Mchr6Ynx/O8bJPmQGynfExAFILLs7VnKX08K8w8UaZkKeAP9kubV+OJs4Miv3jdvcoToMjvkY3j3mBe96zAznu9ribWTDEL99NBqqj3FeARARHkDlipLXfC2tP9/+dHNfU+f6vnPc4YM0tHGHy/CCTrGJ+nDBnhST6xThf+Eh1xZ3Lho4rkIIF7nNGFZUh1sUeq/bYUyXhDoiS/WwPucEtCBidsp67lNO+vJPmSbJ9CXF2GKRKqkp/CAkuIUWJTGlcQQ3mOq9sYgpBIi9njorTILlJhx1KMTfy0wuu3L900WQzWel7GrcgcF9bQcpEayQwubtjfQwWdFpu/vtBxGfMZgHCwbPs0pE/A9ouqVY6TObDAO/8a2V11KMFZ02Vy05xVNSYLFkzElnW4yw6PGNOrYgeqmdvVOWF0QxPiiB3HGUtDOvM2BXDkNKIcx4zV+WMshoieZwgzdMjf5SWtA==';const _IH='fa44c2bf30e1647a236504f6546b96d182057f6bec1c758636685ec0f724f264';let _src;

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
